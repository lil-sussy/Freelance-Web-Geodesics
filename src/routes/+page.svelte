<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import logo from '$lib/images/webgeodesicslogo.svg';
  import background from '$lib/images/headerbackground.jpg';
  import Header from './Header.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class=background>
  <Header></Header>
  <img src={logo} alt="WebGeodesics" />
  <h1>WEB-GEODESICS</h1>
</div>

<style global lang='scss'>
  .background {
    background-image: url('../lib/images/headerbackground.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: start;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    
    h1 {
      color: white;
      font-size: 5rem;
      font-family: 'stretch pro', 'Courier New', Courier, monospace;
    }
  }
</style>
