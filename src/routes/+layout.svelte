<script>
	import Navigation from '../components/navigation/Navigation.svelte';
</script>

<Navigation />
<main class="main">
	<slot />
</main>

<style lang="scss">
	main {
		background-color: $deep-blue;
		margin: 0;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		box-sizing: border-box;
		min-height: 100vh;
		padding-top: 3rem;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
		box-sizing: border-box;
		overflow: scroll;
		text-decoration: none;
	}
	:global(body) {
		font-family: Inter-Regular, 'Segoe UI Mono', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
	}
</style>
