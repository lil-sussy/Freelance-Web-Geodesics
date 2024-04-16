<script lang="ts">
  import logo from '$lib/images/webgeodesicslogo.svg'; // Ensure the path is correct for your project
	import Button from './Button.svelte';
</script>

<!-- Desktop Navbar -->
<div class="navbar">
  <div class="item logo-items">
    <img class="logo" src={logo} alt="Web Geodesics Logo" />
  </div>
  <div class="item selected">YAN REGOJO</div>
  <div class="item">PORTFOLIO</div>
  <div class="item">SERVICES</div>
  <!-- <div class="item">ABOUT ME</div> -->
  <div class="item">CONTACT</div>
  <div class="rectangle"></div>
</div>

<!-- Mobile Navbar -->
<div class="Navbar">
  <div class="NavbarContainer">
    <div class="BurgerMenu">
      <div class="Rectangle38"></div>
      <div class="Rectangle39"></div>
      <div class="Rectangle40"></div>
    </div>
    <div class="LogoMiddleForPhone">
      <img class="artboard" src={logo} alt="Web Geodesics Logo" />
      <div class="WebGeodesics">WEB<br/>GEODESICS</div>
    </div>
    <div class="Actions">
      <Button style="primary">Contact</Button>
    </div>
  </div>
</div>

<style lang="scss">
  .Navbar {
    display: none;
  }
  .navbar {
    display: flex;
    z-index: 10;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    gap: 385px 4px;
    position: fixed;
    padding-top: 2rem;
    padding-bottom: 2rem;
    top: 0;
    left: 0;
    box-sizing: border-box;

    .logo-items {
      align-self: flex-start;

      .logo {
        position: relative;
        top: -1.2rem;
        left: 2rem;
        width: 4rem;
        height: 4rem;
      }
    }

    .item {
      position: relative;
      width: 10rem;
      font-family: "Segoe UI", Helvetica;
      font-weight: 300;
      color: #ffffff;
      font-size: 1rem;
      letter-spacing: 0;
      line-height: normal;
      transition: text-decoration 0.2s;

      &:hover {
        color: #deec48;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .selected {
      font-weight: 700;
      text-decoration: underline;
    }
  }

  // Mobile styles (max-width)
  @media (max-width: 767px) {
    .navbar {
      display: none; // Hide desktop navbar in mobile view
    }

    .Navbar {
      width: 100vw;
      height: 72px;
      padding: 0 11px;
      display: flex;
      z-index: 10;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      
      .NavbarContainer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }

      .BurgerMenu {
        padding-left: 3%;
        flex-direction: column;
        gap: 6px;
        display: flex;

        .Rectangle38, .Rectangle39, .Rectangle40 {
          width: 34px;
          height: 3px;
          background: white;
          border-radius: 28px;
        }
      }

      .LogoMiddleForPhone {
        display: flex;
        justify-content: center;
        align-items: center;

        .artboard {
          position: relative;
          width: 48.28px;
          height: 40.40px;
          transform: rotate(0.74deg);
        }

        .WebGeodesics {
          font-size: 10px;
          line-height: 10px;
          font-family: 'Stretch Pro', sans-serif;
          font-weight: 400;
          color: white;
        }
      }

      .Actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
