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
    function revealEffect(e: MouseEvent) {
        const maskRadius = 70; // Outer radius for gradient
        // Inner radius for gradient start (you can adjust this for different effects)
        const innerRadius = maskRadius * 0.5;
        // Get mouse position
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
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
    }


    // Initial background draw
    drawBackground();

    // Event listener for mouse movement to create the reveal effect
    document.addEventListener('mousemove', revealEffect);

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      requestAnimationFrame(updateParallax);
    });
  });
  function updateParallax() {
      const backgroundElement = document.querySelector('.background');
      if (backgroundElement) {
        const speed = 0.5; // Adjust the speed of the parallax; 0.5 means half the scroll speed
        const yPos = -scrollY * speed;
        //@ts-ignore
        backgroundElement.style!.backgroundPosition = `center ${yPos}px`;
    }
  }


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
  <div class='lang-selection'>
    <h4>English</h4>
    <h4>/</h4>
    <h4>Français</h4>
  </div>
  <div class='specialization-container'>
    <h4>Why two different specializations ?</h4>
    <div>
      <img src='../lib/images/webdeveloper.svg' alt=''>
      <h4>Web Developer</h4>
    </div>
    <div>
      <img src='../lib/images/dataanalyst.svg' alt=''>
      <h4>Data Analyst</h4>
    </div>
  </div>
</div>

<style global lang='scss'>
  .background {
    z-index: -20;
    background-attachment: fixed;
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
      opacity: 0.5;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -10;
    }
  }
</style>
