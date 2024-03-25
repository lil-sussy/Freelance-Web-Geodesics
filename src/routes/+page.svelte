<script lang='ts'>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import webdeveloper from '$lib/images/webdeveloper.svg';
  import dataananlyt from '$lib/images/dataAnalyst.svg';
  import background from '$lib/images/headerbackground.jpg';
  import Navbar from '../Navbar.svelte';
  import Background from '../Background.svelte';
  import HomePage from '../HomePage.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="frame">
  <div class="div">
    <Background />
    <div class="content">
      <HomePage />
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
