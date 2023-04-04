<script lang="ts">
  import type { PageData } from './$types';
  import { seo } from '$lib/stores/Seo';

  export let data: PageData;

  seo.set({
    title: 'Christian Neighbors',
    description: 'Christian Neighbors',
  });
</script>

<ul class="ul">
  {#each data.items as item}
    <li>
      <p class="text-xl text-red-500">{item.name}</p>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    background-color: $white;
  }
</style>
