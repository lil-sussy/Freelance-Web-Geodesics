<script lang="ts">
  import { onMount } from 'svelte';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import arrow from '$lib/images/arrow.svg';
</script>
<p class="text-wrapper">I AM LOOKING FOR A</p>
<div class="div-2">
  <div class="WEB-DEVELOPER">WEB<br />DEVELOPER<br />&amp; DESIGNER</div>
  <div class="overlap-2">
    <div class="overlap-group-wrapper">
      <div class="overlap-3">
        <div class="rectangle-2"></div>
        <div class="overlap-group-2">
          <div class="rectangle-3"></div>
          <div class="rectangle-4"></div>
        </div>
        <div class="rectangle-5"></div>
      </div>
    </div>
    <div class="div-3">
      <p class="WEB-MOBILE-UX-UI-WEB">WEB &amp; MOBILE / UX.UI / WEB DEVELOPER</p>
      <p class="transform-your-ideas">
        <span class="span">Transform Your Ideas into Digital Excellence: Let&#39;s </span>
        <span class="text-wrapper-2">Design</span>
        <span class="span"> and </span>
        <span class="text-wrapper-2">Develop</span>
        <span class="span"> the Website Your Brand Deserves.&nbsp;&nbsp; </span>
      </p>
    </div>
  </div>
  <img class="vector-6" src={arrow} alt="arrow"/>
</div>
<div class="div-4">
  <div class="DATA-ANALYST">DATA<br />ANALYST</div>
  <div class="overlap-2">
    <div class="overlap-group-wrapper">
      <div class="overlap-3">
        <div class="rectangle-2"></div>
        <div class="overlap-group-2">
          <div class="rectangle-3"></div>
          <div class="rectangle-4"></div>
        </div>
        <div class="rectangle-5"></div>
      </div>
    </div>
    <div class="div-5">
      <p class="p">WEB &amp; MOBILE / UX.UI / WEB DEVELOPER / DATA SCIENTIST</p>
      <p class="deciphering-data">
        <span class="text-wrapper-3"
          >Deciphering Data, Crafting Narratives: Turn Numbers into Impactful Business
        </span>
        <span class="text-wrapper-2">Insights</span>
      </p>
    </div>
  </div>
  <img class="vector-7" src={arrow} alt="arrow"/>
</div>


<style lang="scss">
  .vector {
    position: absolute;
    width: 1244px;
    height: 614px;
    top: 0;
    left: 676px;
  }

  .img {
    position: absolute;
    width: 716px;
    height: 767px;
    top: 320px;
    left: 0;
  }

  .vector-2 {
    position: absolute;
    width: 1025px;
    height: 679px;
    top: 341px;
    left: 828px;
  }

  .vector-3 {
    position: absolute;
    width: 1260px;
    height: 563px;
    top: 307px;
    left: 186px;
  }

  .vector-4 {
    position: absolute;
    width: 447px;
    height: 198px;
    top: 251px;
    left: 201px;
  }

  .vector-5 {
    position: absolute;
    width: 447px;
    height: 198px;
    top: 736px;
    left: 201px;
  }

  .rectangle {
    position: absolute;
    width: 1920px;
    height: 1080px;
    top: 15px;
    left: 1px;
    background-color: #0000001a;
    backdrop-filter: blur(200px) brightness(100%);
    -webkit-backdrop-filter: blur(200px) brightness(100%);
  }

  .div {
    position: absolute;
    width: 963px;
    height: 10px;
    top: 620px;
    left: 890px;
    background-color: #ffffff;
    border-radius: 14px;
  }

  .text-wrapper {
    position: absolute;
    top: 569px;
    left: 55px;
    font-family: "Segoe UI-Bold", Helvetica;
    font-weight: 700;
    color: #ffffff;
    font-size: 77px;
    letter-spacing: 0;
    line-height: normal;
  }

  .div-2 {
    position: absolute;
    width: 1503px;
    height: 283px;
    top: 237px;
    left: 307px;
  }

  .WEB-DEVELOPER {
    position: absolute;
    top: 78px;
    left: 0;
    font-family: "Stretch Pro-Regular", Helvetica;
    font-weight: 400;
    color: #ffffffb2;
    font-size: 40px;
    letter-spacing: 0;
    line-height: normal;
  }

  .overlap-2 {
    position: absolute;
    width: 1121px;
    height: 283px;
    top: 0;
    left: 380px;
  }

  .overlap-group-wrapper {
    position: absolute;
    width: 1121px;
    height: 283px;
    top: 0;
    left: 0;
  }

  .overlap-3 {
    position: relative;
    height: 283px;
  }

  .rectangle-2 {
    position: absolute;
    width: 2px;
    height: 283px;
    top: 0;
    left: 31px;
    background-color: #d9d9d9;
  }

  .overlap-group-2 {
    position: absolute;
    width: 1121px;
    height: 213px;
    top: 36px;
    left: 0;
  }

  .rectangle-3 {
    position: absolute;
    width: 2px;
    height: 1121px;
    top: -349px;
    left: 560px;
    background-color: #d9d9d9;
    transform: rotate(-90deg);
  }

  .rectangle-4 {
    position: absolute;
    width: 2px;
    height: 1121px;
    top: -560px;
    left: 560px;
    background-color: #d9d9d9;
    transform: rotate(-90deg);
  }

  .rectangle-5 {
    position: absolute;
    width: 2px;
    height: 283px;
    top: 0;
    left: 1084px;
    background-color: #d9d9d9;
  }

  .div-3 {
    position: absolute;
    width: 1019px;
    height: 166px;
    top: 58px;
    left: 51px;
  }

  .WEB-MOBILE-UX-UI-WEB {
    position: absolute;
    width: 169px;
    top: 124px;
    left: 0;
    font-family: "Segoe UI-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
  }

  .transform-your-ideas {
    position: absolute;
    width: 1015px;
    top: 0;
    left: 0;
    font-family: "Acme-Regular", Helvetica;
    font-weight: 400;
    color: transparent;
    font-size: 40px;
    letter-spacing: 0;
    line-height: 40px;
  }

  .span {
    color: #ffffffc2;
  }

  .text-wrapper-2 {
    font-family: "Segoe Script-Bold", Helvetica;
    font-weight: 700;
    color: #deec48;
  }

  .vector-6 {
    position: absolute;
    width: 168px;
    height: 40px;
    top: 220px;
    left: 0;
  }

  .div-4 {
    position: absolute;
    width: 1503px;
    height: 283px;
    top: 728px;
    left: 307px;
  }

  .DATA-ANALYST {
    position: absolute;
    top: 113px;
    left: 0;
    font-family: "Stretch Pro-Regular", Helvetica;
    font-weight: 400;
    color: #ffffffb2;
    font-size: 40px;
    letter-spacing: 0;
    line-height: normal;
  }

  .div-5 {
    position: absolute;
    width: 989px;
    height: 166px;
    top: 65px;
    left: 51px;
  }

  .p {
    position: absolute;
    width: 228px;
    top: 124px;
    left: 0;
    font-family: "Segoe UI-Regular", Helvetica;
    font-weight: 400;
    color: #ffffffbf;
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
  }

  .deciphering-data {
    position: absolute;
    width: 985px;
    top: 0;
    left: 0;
    font-family: "Acme-Regular", Helvetica;
    font-weight: 400;
    color: transparent;
    font-size: 40px;
    letter-spacing: 0;
    line-height: 40px;
  }

  .text-wrapper-3 {
    color: #ffffffbf;
  }

  .vector-7 {
    position: absolute;
    width: 168px;
    height: 40px;
    top: 229px;
    left: 0;
  }

  .navbar {
    position: absolute;
    width: 1571px;
    height: 37px;
    top: 97px;
    left: 312px;
  }

  .text-wrapper-4 {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Segoe UI-Bold", Helvetica;
    font-weight: 700;
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 0;
    line-height: normal;
  }

  .text-wrapper-5 {
    left: 480px;
    position: absolute;
    top: 0;
    font-family: "Segoe UI-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 0;
    line-height: normal;
  }

  .text-wrapper-6 {
    left: 982px;
    position: absolute;
    top: 0;
    font-family: "Segoe UI-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 0;
    line-height: normal;
  }

  .text-wrapper-7 {
    left: 1459px;
    position: absolute;
    top: 0;
    font-family: "Segoe UI-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 0;
    line-height: normal;
  }

  .rectangle-6 {
    position: absolute;
    width: 148px;
    height: 1px;
    top: 36px;
    left: 0;
    background-color: #ffffff;
  }
</style>