<script>
	import "../app.pcss";
  import './styles.css';
</script>

<div class="app">
	<main>
		<slot></slot>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
    width: 100vw;
		box-sizing: border-box;
	}
</style>
