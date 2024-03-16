<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/webgeodesicslogo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
    <h4>Web-Geodesics</h4>
	</div>
  <div class="navigation">
    <a href="#home">
      //Home
    </a>
    <a href="#home">
      //Why me ?
    </a>
    <a href="#home">
      //My Expertise
    </a>
    <a href="#home">
      //My work
    </a>
    <a href="#home">
      //about me
    </a>
    <a href="#home">
      //contact
    </a>
  </div>
</header>

<style lang='scss'>
  @font-face {
    font-family: 'stretch pro';
    src: url('../lib/fonts/StretchPro.otf') format('opentype');
  }
	header {
		display: flex;
    width: 100%;
    z-index: 100;
		justify-content: space-between;

    .corner {
      display: flex;
      width: 18rem;
      align-items: center;
      gap: 0rem;
      justify-content: space-evenly;
      img {
        width: 4rem;
        height: 4rem;
      }
      h4 {
        color: white;
        font-family: 'stretch pro', 'Courier New', Courier, monospace;
      }
    }

    .navigation {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: space-evenly;
      width: 50rem;
      a {
        color: gray;
        font-size: 0.7rem;
        text-decoration: none;
        font-family: 'stretch pro', 'Courier New', Courier, monospace;
      }
      a:hover {
        color: white;
      }
    }
	}
</style>
