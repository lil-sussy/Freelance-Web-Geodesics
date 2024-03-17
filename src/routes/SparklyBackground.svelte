<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const background = document.getElementById('background');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    let mouseX = 0;
    let mouseY = 0;
    let isDrawing = false;
    canvas.height = window.innerHeight;
    background!.appendChild(canvas);

    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    }

    function drawBlueBlur(mouseX: number, mouseY: number) {
        const radius = 70; // Radius of the circle
        let blurGradient = ctx!.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, radius);
        blurGradient.addColorStop(0, 'rgba(103, 232, 249, 0.5)'); // Blue with opacity in the center
        blurGradient.addColorStop(1, 'rgba(103, 232, 249, 0)'); // Fully transparent at the edges

        // Draw the circle with the gradient
        ctx!.fillStyle = blurGradient;
        ctx!.beginPath();
        ctx!.arc(mouseX, mouseY, radius, 0, Math.PI * 2, false);
        ctx!.fill();
    }

    // Function to draw the grid and SVG strokes
    function drawBackground() {
        // Clear the canvas
        ctx!.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the dot grid
        const dotSpacing = 25; // Spacing between dots
        const dotRadius = 1; // Dot radius
        for (let x = 0; x < canvas.width; x += dotSpacing) {
          for (let y = 0; y < canvas.height; y += dotSpacing) {
            ctx!.beginPath();
            ctx!.arc(x, y, dotRadius, 0, Math.PI * 2, false);
            // Alternate colors
            ctx!.fillStyle = (x / dotSpacing + y / dotSpacing) % 2 === 0 ? '#EC4899' : '#67E8F9';
            ctx!.fill();
          }
        }
        // Example SVG stroke (serpent-like paths could be more complex)
        for (let y=0; y < canvas.height; y += 100) {
          ctx!.beginPath();
          ctx!.moveTo(0, y +50);
          ctx!.strokeStyle = '#67E8F9';
          for (let x = 0; x < canvas.width; x += 100) {
              ctx!.lineTo(x, y + 50 + 20 * Math.sin(x / 100));
          }
          ctx!.stroke();
        }
    }

    // Function to create reveal effect
    // Function to create reveal effect with gradient
    function revealEffect() {
        if (!isDrawing) return;

        const maskRadius = 70; // Outer radius for gradient
        // Inner radius for gradient start (you can adjust this for different effects)
        const innerRadius = maskRadius * 0.5;
        // Get mouse position
        // const mouseX = e.clientX + window.scrollX;
        // const mouseY = e.clientY + window.scrollY;
        
        // Clear the canvas and redraw background
        drawBackground();
        
        drawBlueBlur(mouseX, mouseY);
        ctx!.globalCompositeOperation = 'source-over';

        // Create radial gradient
        let gradient = ctx!.createRadialGradient(mouseX, mouseY, innerRadius, mouseX, mouseY, maskRadius);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)'); // Fully opaque at the center
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)'); // Fully opaque at the center
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fully transparent at the edges

        // Masking effect
        ctx!.globalCompositeOperation = 'destination-in';
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(mouseX, mouseY, maskRadius, 0, Math.PI * 2, false);
        ctx!.fill();
        ctx!.globalCompositeOperation = 'source-over';
        requestAnimationFrame(revealEffect);
    }


    // Initial background draw
    drawBackground();

    // Event listener for mouse movement to create the reveal effect
    // document.addEventListener('mousemove', revealEffect);
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    requestAnimationFrame(revealEffect);
    window.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        isDrawing = true;
    });
    window.addEventListener('click', () => {
        console.log(mouseX, mouseY);
    });

    window.addEventListener('mouseenter', () => {
        isDrawing = true;
    });

    window.addEventListener('mouseleave', () => {
        isDrawing = false;
        // Optionally clear the effect when the mouse leaves the canvas
        drawBackground();
    });
  });
</script>

<div id='background'></div>

<style>
  #background {
    position: absolute;
    opacity: 0.5;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -10;
  }
</style>