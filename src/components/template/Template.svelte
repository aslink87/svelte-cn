<script lang="ts">
  import { props } from './props';
</script>

<section class="template">
  {#each props as item}
    <p class="text-xl text-red-500">{item.text}</p>
  {/each}
</section>

<style lang="scss">
  section {
    @include component;
    background: $gray;
  }
</style>
