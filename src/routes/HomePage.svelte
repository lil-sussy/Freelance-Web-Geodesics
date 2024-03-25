<script lang="ts">
  import { onMount } from 'svelte';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import arrow from '$lib/images/arrow.svg';
</script>


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
<img class="arrow" src={arrow} alt=""/>
<div class="div-4">
  <img class="artboard" src={logo} alt=""/>
  <div class="WEB-GEOODESICS">WEB<br />GEOODESICS</div>
</div>

<style lang="scss">
  .arrow {
    position: absolute;
    transform: rotate(90deg);
    bottom: 5rem;
    right: 5rem;
    width: 10rem;
    height: 10rem;
  }
  .arrow:hover {
    cursor: pointer;
  
  }
  .div-2 {
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

  .partner-with-a {
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

  .text-wrapper {
    color: #ffffff;
  }

  .span {
    font-family: "Segoe Script", Helvetica;
    font-weight: 700;
    color: #deec48;
  }

  .div-3 {
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



  .div-4 {
    display: inline-flex;
    align-items: center;
    position: absolute;
    top: 548px;
    left: 0;
  }

  .artboard {
    position: relative;
    width: 520px;
    height: 520px;
    bottom: 0.5rem;
    left: -2rem;
  }

  .WEB-GEOODESICS {
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