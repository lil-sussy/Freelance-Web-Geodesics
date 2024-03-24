

<div class="navbar">
  <div class="item selected">YAN REGOJO</div>
  <div class="item">PLAYBOOK</div>
  <div class="item">SOCIALS</div>
  <div class="item">CONTACT</div>
  <div class="rectangle"></div>
</div>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: flex-start;
    gap: 385px 4px;
    position: absolute;
    top: 2rem;
    left: 0px;
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
    width: fit-content;
    font-family: "Segoe UI", Helvetica;
    font-weight: 300;
    color: #ffffff;
    font-size: 1rem;
    letter-spacing: 0;
    line-height: normal;
  }

  .item:hover {
    color: #deec48;
    cursor: pointer;
  }

  .selected {
    color: #ffffff;
    font-weight: 700;
    position: relative;
    text-decoration: underline;
  }
</style>