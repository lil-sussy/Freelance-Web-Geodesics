<script lang="ts">
  import logo from '$lib/images/webgeodesicslogo.svg'; // Ensure the path is correct for your project
</script>

<!-- Desktop Navbar -->
<div class="navbar">
  <div class="item logo-items">
    <img class="logo" src={logo} alt="Web Geodesics Logo" />
  </div>
  <div class="item selected">YAN REGOJO</div>
  <div class="item">PLAYBOOK</div>
  <div class="item">SOCIALS</div>
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
      <div class="Artboard31">
        <div class="Vector" id="vector1"></div>
        <div class="Vector" id="vector2"></div>
      </div>
      <div class="WebGeodesics">WEB<br/>GEODESICS</div>
    </div>
    <div class="Actions">
      <div class="StylePrimarySmallTrueDarkModeFalseIconPositionNoIcon">
        <div class="Button">Contact</div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
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
      width: 375px;
      height: 72px;
      padding: 0 11px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .NavbarContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 33px;
      }

      .BurgerMenu {
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

        .Artboard31 {
          position: relative;
          width: 48.28px;
          height: 40.40px;
          transform: rotate(0.74deg);

          .Vector {
            position: absolute;
            background: white;

            &#vector1 {
              width: 19.26px;
              height: 13.16px;
              left: 9.22px;
              top: 13.02px;
            }

            &#vector2 {
              width: 15.06px;
              height: 13.64px;
              left: 23.47px;
              top: 12.81px;
            }
          }
        }

        .WebGeodesics {
          font-size: 12px;
          line-height: 12px;
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

        .StylePrimarySmallTrueDarkModeFalseIconPositionNoIcon {
          display: flex;
          padding: 6px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.50);
          backdrop-filter: blur(300px);

          .Button {
            font-size: 14px;
            line-height: 21px;
            font-family: 'Segoe UI', sans-serif;
            font-weight: 400;
            color: white;
          }
        }
      }
    }
  }
</style>
