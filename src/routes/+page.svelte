<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import type { HeroType } from '$/types';
  import Hero from '$/components/hero/Hero.svelte';
  import Showcase from '$/components/showcase/Showcase.svelte';

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
    <Showcase />
  </div>
</section>

<style lang="scss">
  section {
    background-image: url('/images/cnShop2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    .bg {
      background-color: rgba($color: $deep-blue, $alpha: 0.8);
    }
  }
</style>
