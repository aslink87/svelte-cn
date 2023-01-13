<script>
	export let navLinks = [
		{
			name: 'About',
			path: '/about',
			class: 'about',
			auth: false,
			mobile: true,
			mobileOnly: false,
		},
		{
			name: 'Services',
			path: '/assistance',
			class: 'services',
			auth: false,
			mobile: true,
			mobileOnly: false,
		},
		{
			name: 'Support Us',
			path: '/support',
			class: 'support',
			auth: false,
			mobile: true,
			mobileOnly: false,
		},
	];
</script>

<nav>
	<div data-testid="nav" class="nav">
		<ul class="nav-ul">
			{#each navLinks as link}
				<li>
					<p>{link.name}</p>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	@use '../../styles/variables.scss';
	nav {
		padding: 0 3em;
		width: 100%;
		position: fixed;
		display: -webkit-flex;
		display: flex;
		-webkit-align-items: center;
		align-items: center;
		background-color: variables.$white;
		color: variables.$darkBlue;
		height: 4rem;
		border-bottom: 3px solid variables.$darkBlue;
		z-index: 200;

		li {
			box-sizing: border-box;
			text-align: center;
			margin: auto 0;

			p {
				margin: 0 0.3em 0 1em;
				font-size: 1.2rem;
				&:hover {
					border-bottom: solid 2x variables.$darkBlue;
				}
			}
		}
	}
</style>
