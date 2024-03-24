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
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    gap: 385px 4px;
    position: absolute;
    top: 2rem;
    left: 0px;
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
    .selected::before {
      content: "";
      position: absolute;
      top: 2rem;
      left: 0;
      width: 100%;
      height: 1px;
      background: #ffffff;
      background-color: #ffffff!important;
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