<script lang='ts'>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import webdeveloper from '$lib/images/webdeveloper.svg';
  import dataananlyt from '$lib/images/dataAnalyst.svg';
  import background from '$lib/images/headerbackground.jpg';
  import { onMount } from 'svelte';
  import Navbar from '../Navbar.svelte';
  import Background from '../Background.svelte';
  
  

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="frame">
  <div class="div">
    <Background />
    <div class="content">
      <div class="div-2">
        <p class="partner-with-a">
          <span class="text-wrapper">Partner with a </span>
          <span class="span">creative</span>
          <span class="text-wrapper"> maverick in web design to make your brand's online presence as </span>
          <span class="span">innovative</span>
          <span class="text-wrapper"> as your vision.</span>
        </p>
        <div class="div-3">
          <p class="text-wrapper-2">WEB & MOBILE / UX.UI / WEB DEVELOPER / DATA SCIENTIST</p>
          <div class="text-wrapper-2">BASED IN PARIS</div>
          <p class="text-wrapper-3">CURRENTLY AVAILABLE FOR FREELANCE WORLDWIDE</p>
          <div class="text-wrapper-3">BORN IN PARIS</div>
        </div>
      </div>
      <Navbar />
      <div class="div-4">
        <img class="artboard" src={logo} alt=""/>
        <div class="WEB-GEOODESICS">WEB<br />GEOODESICS</div>
      </div>
    </div>
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

  .frame .div {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .frame .div-2 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 50%;
    gap: 41px;
    position: absolute;
    top: 10rem;
    right: 5rem;
  }

  .frame .partner-with-a {
    position: relative;
    width: 972px;
    height: 126px;
    margin-top: -1px;
    font-family: "Acme", Helvetica;
    font-weight: 400;
    color: transparent;
    font-size: 40px;
    letter-spacing: 0;
    line-height: normal;
  }

  .frame .text-wrapper {
    color: #ffffff;
  }

  .frame .span {
    font-family: "Segoe Script", Helvetica;
    font-weight: 700;
    color: #deec48;
  }

  .frame .div-3 {
    display: flex;
    flex-wrap: wrap;
    width: 35rem;
    align-items: flex-start;
    gap: 1rem 4rem;
    .text-wrapper-2 {
      width: 228px;
      margin-top: -1px;
      font-family: "Segoe ui", Helvetica;
      font-weight: 400;
      color: #ffffff;
      font-size: 16px;
      letter-spacing: 0;
      line-height: normal;
    }
    .text-wrapper-3 {
      width: 228px;
      font-family: "Segoe UI", Helvetica;
      font-weight: 400;
      color: #919191;
      font-size: 16px;
      letter-spacing: 0;
      line-height: normal;
    }
  }



  .frame .div-4 {
    display: inline-flex;
    align-items: center;
    position: absolute;
    top: 548px;
    left: 0;
  }

  .frame .artboard {
    position: relative;
    width: 520px;
    height: 520px;
    bottom: 0.5rem;
    left: -2rem;
  }

  .frame .WEB-GEOODESICS {
    position: relative;
    bottom: 1rem;
    left: -4rem;
    width: fit-content;
    font-family: "Stretch Pro", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 96px;
    letter-spacing: 0;
    line-height: 96px;
  }

</style>
