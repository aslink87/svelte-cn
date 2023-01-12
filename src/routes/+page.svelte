<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ul class="ul">
	{#each data.items as item}
		<li>
			<p class="text-red-500 text-xl">{item.name}</p>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '../styles/variables.scss';
	ul {
		background-color: variables.$lightBlue;
	}
</style>
