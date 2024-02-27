<script lang="ts">
  import Seo from './SEO.svelte';
  import { seo } from '$lib/stores/Seo';
  import type { HeroType } from '$/types';
  import Hero from '$/components/hero/Hero.svelte';
  import Showcase from '$/components/showcase/Showcase.svelte';
  import HomeLower from '$/components/home_lower/Home_Lower.svelte';

  interface IData {
    hero: HeroType;
  }

  export let data: IData;

  seo.set({
    title: 'Christian Neighbors',
    description: 'Christian Neighbors',
  });
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="index">
  <div class="bg">
    <Hero data={data.hero} />
    <Showcase />
    <HomeLower />
  </div>
</section>
