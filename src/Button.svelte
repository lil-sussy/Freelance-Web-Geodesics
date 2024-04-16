<script lang="ts">

  export let style: "primary" | "secondary" | "tertiary";
</script>

<div class={style}>
  <div class="Button"><slot/></div>
</div>

<style lang="scss">
  .primary, .secondary {
    padding: 12px 24px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 8px;
    display: flex;
    :hover {
      cursor: pointer;
    }
  }
  
  .primary {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(200px);
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(20px);
    }
  }

  .secondary {
    border: 1px solid rgba(255, 255, 255, 0.20);
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.60);
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .Button {
    color: white;
    font-size: 16px;
    font-family: 'Segoe UI', sans-serif;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
  }

  @media (max-width: 450px) {
    .primary, .secondary {
      padding: 8px 16px;
      font-size: small;
    }
  }
</style>