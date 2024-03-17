<script lang='ts'>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import webdeveloper from '$lib/images/webdeveloper.svg';
  import dataananlyt from '$lib/images/dataAnalyst.svg';
  import background from '$lib/images/headerbackground.jpg';
  import Header from './Header.svelte';
  import { onMount } from 'svelte';
	import SparklyBackground from './SparklyBackground.svelte';
	import SepecializationSelection from './SepecializationSelection.svelte';
	import Minimap from './Minimap.svelte';
  
  let specialization = "";
  let animations: (() => void)[] = []

  let scrollY = 0;

  function pageAnimations() {
    animations.forEach(animation => animation());
    requestAnimationFrame(pageAnimations)
  }
  pageAnimations()

  function updateParallax() {
      const backgroundElement = document.querySelector('.background');
      if (backgroundElement) {
        const speed = 0.5; // Adjust the speed of the parallax; 0.5 means half the scroll speed
        const yPos = -scrollY * speed;
        //@ts-ignore
        backgroundElement.style!.backgroundPosition = `center ${yPos}px`;
    }
    // requestAnimationFrame(updateParallax);
  }

  onMount(() => {
    const background = document.getElementById('background');
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      requestAnimationFrame(updateParallax);
    });
  });

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class=background>
  <Header></Header>
  <Minimap />
  <img src={logo} alt="WebGeodesics" />
  <h1>WEB-GEODESICS</h1>
  <div class='center-container'>
    <div class='lang-selection'>
      <h4>English</h4>
      <h4>/</h4>
      <h4>Français</h4>
    </div>
    <h4 class='question'>Why two different specializations ?</h4>
    <SepecializationSelection bind:specialization={specialization}/>
    <svg width="379" height="3284" viewBox="0 0 379 3284" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M375.999 0C375.999 77 376.999 77 210.499 77C3.97495 77 3.9759 77 3.97496 164C3.97419 235.5 0.974962 435.167 3.97496 548V1714C3.97496 1847.5 20.9995 1892.5 119.999 1896.5C218.999 1900.5 222.999 1956.5 222.999 2004C222.999 2042 222.999 2154 222.999 2294.5V3283.5" stroke="#EC4899" stroke-width="5"/>
    </svg>
  </div>
  <SparklyBackground></SparklyBackground>
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

    .center-container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 70%;
      box-sizing: border-box;
      padding: 0;
      align-items: start;
      .question {
        margin-top: 5rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: gray;
        font-family: 'inter', 'Courier New', Courier, monospace;
      }
      .question:hover {
        color: white;
        cursor: pointer;
      }
      .lang-selection {
        margin-top: 10rem;
        display: flex;
        gap: 1rem;
        h4 {
          font-size: 2rem;
          color: gray;
          font-family: 'inter', 'Courier New', Courier, monospace;
        }
        h4:hover {
          color: white;
          cursor: pointer;
        }
      }
      .specialization-container {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        div {
          display: flex;
          gap: 1rem;
          align-items: center;
          img {
            width: 5rem;
            height: 5rem;
          }
          h4 {
            font-size: 2rem;
            color: white;
            font-family: 'inter', 'Courier New', Courier, monospace;
          }
        }
      }
    }
    
    h1 {
      color: white;
      font-size: 5rem;
      font-family: 'stretch pro', 'Courier New', Courier, monospace;
    }
  }
</style>
