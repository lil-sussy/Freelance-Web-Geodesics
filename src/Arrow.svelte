<script lang="ts">
  import arrow from '$lib/images/arrow.svg';
</script>

<div class="Frame57">
  <img class="Vector" src={arrow} alt="arrow" />
</div>

<style lang="scss">
  .Frame57 {
    width: 380.41px;
    justify-content: center;
    align-items: center;
    gap: 40px;
    display: flex;
    justify-self: flex-end;

    &:hover {
      cursor: pointer;
    }

    .Vector {
      width: 20rem;
      height: 2rem;
      transform: rotate(90deg);
    }
  }
</style>