<script>
  import { props } from './props';
</script>

<section class="hero">
  {#each props as item}
    <p class="text-xl text-red-500">{item.text}</p>
  {/each}
  <span class="spacer" />
</section>

<style lang="scss">
  section {
    @include center;
    color: $white;
    padding-top: 2rem;
    background: $deep-blue;
    position: relative;

    .spacer {
      background-image: url('/images/wavesCross3.svg');
      aspect-ratio: 1200/300;
      display: block;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
</style>
