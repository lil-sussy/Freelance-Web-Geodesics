<script lang="ts">
  import { onMount } from 'svelte';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import arrow from '$lib/images/arrow.svg';
</script>


<div class='container'>
  <div class="text-on-left">
    <p class="main-text">
      <span class="span">Hi, I am Yan R. I blend the analytical rigor of </span>
      <span class="text-wrapper-2">development<br /></span>
      <span class="span">with the&nbsp;&nbsp;finesse of </span>
      <span class="text-wrapper-2">design </span>
      <span class="span"
        >to build websites that are both beautifully crafted&nbsp;&nbsp;and highly effective since I am 16 years old.</span
      >
    </p>
    <a>Check out my work <svg viewBox="0 0 169 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M151 40L168 20.5C168.297 20.1237 168.5 19.5306 168.5 19C168.5 18.4694 168.297 17.8763 168 17.5L151 -7.64949e-07L149.852 1.33185L166 18L-7.85999e-07 17.9815L-8.74228e-07 20L166 20L149.852 38.6481L151 40Z"/>
      </svg>
    </a>
    <div class="bottom-text">
      <p class="WEB-MOBILE-UX-UI">WEB & MOBILE / UX.UI<br />FIGMA / ADOBE</p>
      <p class="FRONTEND-REACT">FRONTEND / REACT<br />/ SVELTE</p>
      <p class="text-wrapper">BACKEND NEXTJS / SVELTEKIT / DJANGO</p>
    </div>
  </div>
  <div class="carousel">
    <div class="carousel-container">
      <div class="web-design-card">
        <div class="card-title">
          <div class="WEB-APP-DESIGN">WEB & APP DESIGN</div>
          <div class="rectangle-3"></div>
        </div>
        <div class="logo-group-wrapper">
          <div class="logo-group">
            <img class="img-2" src="img/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024-1.png" />
            <img class="illustrator-logo" src="img/illustrator-logo-1.png" />
            <img class="adobe-premiere-pro" src="img/adobe-premiere-pro-CC-icon-1.png" />
            <img class="adobe-photoshop-CC" src="img/adobe-photoshop-CC-icon-1.png" />
            <img class="adobe-after-effects" src="img/adobe-after-effects-CC-icon-1.png" />
            <img class="midjourney" src="img/midjourney-1.png" />
          </div>
        </div>
        <div class="button-next-wrapper">
          <div class="button-next">
            <div class="overlap-group-2">
              <img class="vector-4" src="img/vector.svg" />
              <div class="ellipse"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="web-dev-card">
        <div class="card-title">
          <div class="text-wrapper">FRONTEND - DEV</div>
          <div class="rectangle"></div>
        </div>
        <div class="logo-group">
          <div class="overlap-group">
            <img class="img" src="img/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024-1.png" />
            <div class="logo-blur"></div>
            <img class="adobe-photoshop-CC" src="img/adobe-photoshop-CC-icon-1.png" />
          </div>
        </div>
        <div class="overlap">
          <div class="button-next">
            <div class="div">
              <img class="vector" src="img/vector.svg" />
              <div class="ellipse"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="IdkCard">
        <div class="CardBackground"></div>
        <div class="CardTitle">
          <div class="BackendDev">BACKEND - DEV</div>
          <div class="Rectangle10"></div>
        </div>
        <div class="LogoGroup">
          <div class="LogoBlur"></div>
          <div class="Group39">
            <div class="Rectangle20"></div>
            <img class="AdobePremiereProCcIcon1" src="https://via.placeholder.com/59x57" />
          </div>
          <div class="Group40">
            <div class="Rectangle20"></div>
            <img class="AdobePremiereProCcIcon1" src="https://via.placeholder.com/89x57" />
          </div>
          <img class="AdobeAfterEffectsCcIcon1" src="https://via.placeholder.com/75x73" />
          <img class="IllustratorLogo1" src="https://via.placeholder.com/76x74" />
          <div class="AdobePhotoshopCcIcon1"></div>
        </div>
        <img class="CardImage" src="https://via.placeholder.com/525x303" />
        <div class="ButtonNext">
          <div class="Vector"></div>
          <div class="Ellipse4"></div>
        </div>
      </div>
    </div>
    <div class="carousel-count">
      <div class="ellipse-2"></div>
      <div class="ellipse-3"></div>
      <div class="ellipse-4"></div>
    </div>
  </div>
</div>


<style lang="scss">
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .carousel {
    margin-top: 20%;
    .IdkCard {
    width: 890px;
    height: 652px;
    position: relative;

    .CardBackground {
      width: 100%;
      height: 100%;
      position: absolute;
      background: black;
      box-shadow: 5px 5px 31.4px 1px rgba(238, 170, 68, 0.25) inset;
      border-radius: 73px;
    }

    .CardTitle {
      width: 743px;
      height: 48px;
      position: absolute;
      left: 80px;
      top: 79px;

      .BackendDev {
        position: absolute;
        color: white;
        font-size: 48px;
        font-family: 'Segoe UI', sans-serif;
        font-weight: 300;
        line-height: 48px;
        word-wrap: break-word;
      }

      .Rectangle10 {
        width: 386px;
        height: 3px;
        position: absolute;
        left: 357px;
        top: 24px;
        background: white;
        border-radius: 4px;
      }
    }

    .LogoGroup {
      width: 602px;
      height: 106px;
      position: absolute;
      left: 60px;
      top: 514px;

      .LogoBlur {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(238, 170.17, 68.43, 0.30);
        box-shadow: 52.8px 52.8px 52.8px;
        border-radius: 19px;
        filter: blur(52.8px);
      }

      .Group39, .Group40 {
        position: absolute;
        width: 73px;
        height: 73px;
        top: 17px;

        .Rectangle20 {
          width: 100%;
          height: 100%;
          position: absolute;
          background: white;
          border-radius: 10px;
        }

        img {
          position: absolute;
        }
      }

      .Group40 {
        width: 95px; // Adjusted for .Group40
        left: 166px;
      }

      .AdobeAfterEffectsCcIcon1, .IllustratorLogo1, .AdobePhotoshopCcIcon1 {
        position: absolute;
        border-radius: 10px;
      }

      .AdobeAfterEffectsCcIcon1 {
        left: 482px;
        top: 13px;
      }

      .IllustratorLogo1 {
        left: 343px;
        top: 16px;
      }
    }

    .CardImage {
      width: 525px;
      height: 303px;
      position: absolute;
      left: 88px;
      top: 170px;
      border-radius: 26px;
    }

    .ButtonNext {
      width: 94px;
      height: 94px;
      position: absolute;
      left: 729px;
      top: 279px;

      .Vector {
        width: 32.41px;
        height: 47px;
        position: absolute;
        left: 66.85px;
        top: 30.79px;
        background: white;
        transform: rotate(90deg);
        transform-origin: 0 0;
      }

      .Ellipse4 {
        width: 94px;
        height: 94px;
        position: absolute;
        border-radius: 9999px;
        border: 1px solid white;
      }
    }
  }
}
  .text-on-left:hover {
    a {
      color: #deec48;
      svg {
        fill: #deec48;
      }
    }
    cursor: pointer;
  }
  .text-on-left {
    display: flex;
    flex-direction: column;
    width: 55rem;
    height: 50%;
    margin-top: 30%;
    margin-left: 5%;
    span {
      line-height: 3rem;
      font-family: "acme", sans-serif;
      font-weight: 500;
      color: white;
      font-size: 2.7rem;
    }
    .text-wrapper-2 {
      font-family: 'segoe script', sans-serif;
      font-weight: 900;
      color: #deec48;
    }
    a {
      align-self: flex-start;
      margin-left: 2rem;
      width: 100%;
      font-family: 'segoe UI', sans-serif;
      font-weight: 400;
      color: #ffffff;
      text-decoration: none;
      margin-top: 2rem;
      display: flex;
      svg {
        width: 2rem;
        height: 2rem;
        margin-left: 1rem;
        fill: #ffffff;
      }
    }
    .bottom-text {
      display: flex;
      flex-direction: row;
      gap: 0rem;
      margin-top: 5rem;
      p {
        font-family: 'segoe UI', sans-serif;
        font-weight: 400;
        color: #ffffff;
        width: 15rem;
      }
      .FRONTEND-REACT {
        font-family: 'segoe UI', sans-serif;
        font-weight: 400;
        color: #ffffff;
      }
      .text-wrapper {
        font-family: 'segoe UI', sans-serif;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
</style>