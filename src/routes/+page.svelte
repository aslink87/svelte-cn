<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
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
