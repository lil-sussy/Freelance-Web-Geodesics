<script lang='ts'>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import background from '$lib/images/headerbackground.jpg';
  import Header from './Header.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    const background = document.getElementById('background');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    background!.appendChild(canvas);

    // Function to draw the grid and SVG strokes
    function drawBackground() {
        // Clear the canvas
        ctx!.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the dot grid
        const dotSpacing = 50; // Spacing between dots
        const dotRadius = 2; // Dot radius
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
        ctx!.beginPath();
        ctx!.moveTo(0, 50);
        for (let x = 0; x < canvas.width; x += 100) {
            ctx!.lineTo(x, 50 + 20 * Math.sin(x / 100));
        }
        ctx!.strokeStyle = 'black';
        ctx!.stroke();
    }

    // Function to create reveal effect
    // Function to create reveal effect with gradient
    function revealEffect(e: MouseEvent) {
        const maskRadius = 70; // Outer radius for gradient
        // Inner radius for gradient start (you can adjust this for different effects)
        const innerRadius = maskRadius * 0.5;
        // Get mouse position
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Clear the canvas and redraw background
        drawBackground();

        // Create radial gradient
        let gradient = ctx!.createRadialGradient(mouseX, mouseY, innerRadius, mouseX, mouseY, maskRadius);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)'); // Fully opaque at the center
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fully transparent at the edges

        // Masking effect
        ctx!.globalCompositeOperation = 'destination-in';
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(mouseX, mouseY, maskRadius, 0, Math.PI * 2, false);
        ctx!.fill();
        ctx!.globalCompositeOperation = 'source-over';
    }


    // Initial background draw
    drawBackground();

    // Event listener for mouse movement to create the reveal effect
    document.addEventListener('mousemove', revealEffect);
});


  // app.js

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class=background>
  <div id='background'></div>
  <Header></Header>
  <img src={logo} alt="WebGeodesics" />
  <h1>WEB-GEODESICS</h1>
</div>

<style global lang='scss'>
  .background {
    z-index: -20;
    background-image: url('../lib/images/headerbackground.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: start;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    
    h1 {
      color: white;
      font-size: 5rem;
      font-family: 'stretch pro', 'Courier New', Courier, monospace;
    }

    #background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -10;
    }
  }
</style>
