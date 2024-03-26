<script lang="ts">
  import { onMount } from 'svelte';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import arrow from '$lib/images/arrow.svg';
</script>

<div class="webdevcontainer webdev">
  <div class="WEB-DEVELOPER">WEB<br />DEVELOPER<br />& DESIGNER</div>
  <img class="arrow" src={arrow} alt="arrow"/>
  <div class="side-container">
    <div class="overlap-3">
      <div class="top"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="bottom"></div>
    </div>
    <div class="content-container">
      <p class="transform-your-ideas">
        <span class="span">Transform Your Ideas into Digital Excellence: Let&#39;s </span>
        <span class="text-wrapper-2">Design</span>
        <span class="span"> and </span>
        <span class="text-wrapper-2">Develop</span>
        <span class="span"> the Website Your Brand Deserves.&nbsp;&nbsp; </span>
      </p>
      <div class="bottom-content-container">
        <p class="WEB-MOBILE-UX-UI-WEB main top">WEB & MOBILE / UX.UI / WEB DEVELOPER</p>
        <p class="WEB-MOBILE-UX-UI-WEB top">BASED IN PARIS</p>
        <p class="WEB-MOBILE-UX-UI-WEB">CURRENTLY AVAILABLE FOR FREELANCE WORLDWIDE</p>
        <p class="WEB-MOBILE-UX-UI-WEB">BORN IN PARIS</p>
      </div>
    </div>
  </div>
</div>
<h2 class="title">I AM LOOKING FOR A</h2>
<div class="webdevcontainer data-analyst">
  <div class="WEB-DEVELOPER">DATA<br />ANALYST</div>
  <img class="arrow" src={arrow} alt="arrow"/>
  <div class="side-container">
    <div class="overlap-3">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="content-container">
      <p class="transform-your-ideas">
        <span class="text-wrapper-3"
          >Deciphering Data, Crafting Narratives: Turn Numbers into Impactful Business
        </span>
        <span class="text-wrapper-2">Insights</span>
      </p>
      <div class="bottom-content-container">
        <p class="WEB-MOBILE-UX-UI-WEB main top">DATA SCIENTIST / DATA ANALYST / DATA ENGINEER</p>
        <p class="WEB-MOBILE-UX-UI-WEB top">BASED IN PARIS</p>
        <p class="WEB-MOBILE-UX-UI-WEB">CURRENTLY AVAILABLE FOR FREELANCE WORLDWIDE</p>
        <p class="WEB-MOBILE-UX-UI-WEB">BORN IN PARIS</p>
      </div>
    </div>
  </div>
</div>


<style lang="scss">

  .title {
    font-size: 5rem;
    font-family: 'Segeo UI', sans-serif;
    font-weight: 700;
    height: 10%;
    color: #ffffff;
    transition: transform 0.5s;
  }
  .title::after {
    margin-left: 3rem;
    content: '';
    position: absolute;
    width: 50%;
    height: 0.4rem;
    border-radius: 10rem;
    background-color: #ffffff;
    margin-top: 1rem;
  }
  .webdevcontainer.data-analyst {
    margin-top: 2%;
  }
  // :global(#section2):has(.data-analyst:hover) {
  //   .webdevcontainer {
  //     transform: translateY(-15rem);
  //   }
  //   .title {
  //     transform: translateY(-15rem);
  //   }
  // }
  .webdevcontainer:hover {
    opacity: 1;
    cursor: pointer;
    margin-left: 2%;
    height: 55%;
    .WEB-DEVELOPER {
      color: #deec48;
      margin-right: 10%;
    }
    .arrow {
      margin-left: 5%;
    }
    .overlap-3 {
      opacity: 0;
    }
    .side-container .content-container .bottom-content-container {
      .WEB-MOBILE-UX-UI-WEB {
        opacity: 0.7;
        height: 50%;
      }
      .top {
        opacity: 1;
      }
    }
  }
  .webdevcontainer {
    .WEB-DEVELOPER {
      transition: color 0.5s, margin-right 0.5s;
    }
    .arrow {
      transition: margin-left 0.5s, margin-right 2s;
    }
    .overlap-3 {
      transition: opacity 0.5s;
    }
    transition: height 0.5s, margin-left 0.5s, transform 0.5s;
    width: 84%;
    margin-left: 8%;
    margin-right: 8%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
    height: 30%;
    margin-top: 5%;
    margin-bottom: 5%;
    opacity: 0.7;
    .WEB-DEVELOPER {
      font-family: "Stretch Pro", Helvetica;
      margin-top: 3rem;
      font-weight: 400;
      color: #ffffff;
      width: 30%;
      font-size: 40px;
      letter-spacing: 0;
      line-height: normal;
    }
    .side-container {
      position: relative;
      width: 70%;
      height: 100%;
      .content-container {
        position: absolute;
        top: 0;
        left: 0;
        padding: 3rem;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        .bottom-content-container {
          transition: margin-top 0.5s;
          margin-top: 2rem;
          display: flex;
          gap: 2rem 1rem;
          flex-wrap: wrap;
          width: 50%;
          .WEB-MOBILE-UX-UI-WEB {
            width: 11rem;
            font-family: "Segoe UI", Helvetica;
            font-weight: 400;
            color: #ffffff;
            font-size: 16px;
            letter-spacing: 0;
            line-height: normal;
            opacity: 0;
            height: 0;
            transition: opacity 0.5s, height 0.5s;
          }
          .main {
            height: 50%;
            opacity: 1;
          }
        }
        .transform-your-ideas {
          font-family: "Acme-Regular", Helvetica;
          font-weight: 400;
          color: transparent;
          font-size: 40px;
          letter-spacing: 0;
          line-height: 40px;
        } 
      }
      .overlap-3 {
        position: relative;
        height: 283px;
        .left {
          position: absolute;
          width: 2px;
          height: 100%;
          top: 0%;
          left: 1rem;
          background-color: #ffffff;
        }
        .bottom {
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 1rem;
          left: 0%;
          background-color: #ffffff;
        }
        .top {
          position: absolute;
          width: 100%;
          height: 2px;
          top: 1rem;
          left: 0rem;
          background-color: #ffffff;
        }
        .right {
          position: absolute;
          width: 2px;
          height: 100%;
          top: 0%;
          right: 1rem;
          background-color: #ffffff;
        }
      }
    }
  }



  .overlap-group-wrapper {
    position: absolute;
    width: 1121px;
    height: 283px;
    top: 0;
    left: 0;
  }

  .overlap-group-2 {
    position: absolute;
    width: 1121px;
    height: 213px;
    top: 36px;
    left: 0;
  }

  .span {
    color: #ffffff;
    font-family: 'Acme' sans-serif;
  }

  .text-wrapper-2 {
    font-family: "Segoe Script", Helvetica;
    font-weight: 700;
    color: #deec48;
  }

  .vector-6 {
    width: 168px;
    height: 40px;
  }

  .div-4 {
    position: absolute;
    width: 1503px;
    height: 283px;
    top: 728px;
    left: 307px;
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
  .text-wrapper-3 {
    color: #ffffffbf;
  }

  .arrow {
    width: 168px;
    height: 40px;
  }
</style>