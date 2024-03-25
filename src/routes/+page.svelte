<script lang='ts'>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import webdeveloper from '$lib/images/webdeveloper.svg';
  import dataananlyt from '$lib/images/dataAnalyst.svg';
  import background from '$lib/images/headerbackground.jpg';
  import { onMount } from 'svelte';
  import Navbar from '../Navbar.svelte';
  import Background from '../Background.svelte';
  import SelectionPage from './SelectionPage.svelte';
  import HomePage from './HomePage.svelte';

  onMount(() => {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
  
    window.addEventListener('scroll', () => {
      const section1Bottom = section1!.offsetTop + section1!.offsetHeight;
      const section2Bottom = section2!.offsetTop + section2!.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      let p = 0;
      if (scrollPosition > section1Bottom && scrollPosition < section2Bottom) {
        // Calculate progress between section1Bottom and section2Bottom
        p = (scrollPosition - section1Bottom) / (section2Bottom - section1Bottom);
      } else if (scrollPosition >= section2Bottom) {
        p = 1;
      }
      console.log(p); // Use this progress value as needed
    });
  });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="frame">
  <div class="div">
    <Background />
    <div class="content" id="section1">
      <HomePage />
    </div>
    <div class="content" id="section2">
      <SelectionPage />
    </div>
    <Navbar />
  </div>
</div>

<style global lang='scss'>
  .frame {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .div {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
