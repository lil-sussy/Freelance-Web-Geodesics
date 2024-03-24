

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
    top: 3rem;
    left: 0px;
  }
  .item {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: "Segoe UI", Helvetica;
    font-weight: 300;
    color: #ffffff;
    font-size: 24px;
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
  }

  .selected::before {
    content: "";
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
  }
</style>