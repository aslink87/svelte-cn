<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import type { HeroType } from '$/types';
  import Hero from '$/components/hero/+page.svelte';

  interface IData {
    hero: HeroType;
  }

  export let data: IData;

  seo.set({
    title: 'Christian Neighbors',
    description: 'Christian Neighbors',
  });
</script>

<section class="index">
  <div class="bg">
    <Hero data={data.hero} />
  </div>
</section>

<style lang="scss">
  section {
    height: 100vh;
    background-image: url('/images/cnShop2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    .bg {
      height: 100vh;
      background-color: rgba($color: $deep-blue, $alpha: 0.9);
    }
  }
</style>
