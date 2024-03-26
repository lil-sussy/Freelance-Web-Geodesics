<script lang="ts">
  import logo from '$lib/images/webgeodesicslogo.svg';
</script>

<div class="navbar">
  <div class="item logo-items">
    <img class="logo" src={logo} alt=""/>
  </div>
  <div class="item selected">YAN REGOJO</div>
  <div class="item">PLAYBOOK</div>
  <div class="item">SOCIALS</div>
  <div class="item">CONTACT</div>
  <div class="rectangle"></div>
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
    box-sizing: border-box;
    top: 0px;
    left: 0px;
    ::before {
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background: transparent;
      -webkit-mask-image: linear-gradient(
        to bottom,
        black 25%,  /* Start of the blur */
        rgba(0, 0, 0, 0.5) 50%,  /* End of the constant blur section */
        transparent 100%/* Begin to fade out to no blur */
      );
      mask-image: linear-gradient(
        to bottom,
        black 25%,  /* Start of the blur */
        rgba(0, 0, 0, 0.5) 50%,  /* End of the constant blur section */
        transparent 100%/* Begin to fade out to no blur */
      );
      backdrop-filter: blur(30px);
    }
    .logo-items {
      align-self: flex-start;
    }
    .logo {
      position: relative;
      top: -1.2rem;
      left: 2rem;
      width: 4rem;
      height: 4rem;
    }
    // .selected::before {
    //   content: "";
    //   position: absolute;
    //   top: 2rem;
    //   left: 0;
    //   width: 100%;
    //   height: 1px;
    //   background: #ffffff;
    //   background-color: #ffffff!important;
    // }
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
  }

  .item:hover {
    color: #deec48;
    text-decoration: underline;
    cursor: pointer;
  }

  .selected {
    color: #ffffff;
    font-weight: 700;
    position: relative;
    text-decoration: underline;
  }
</style>