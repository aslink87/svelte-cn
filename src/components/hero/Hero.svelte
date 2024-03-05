<script lang="ts">
  import type { HeroType } from '$/types';

  export let data: HeroType;
</script>

<section class="hero center flex flex-col flex-wrap gap-8 pt-8" data-testid="hero">
  <h1 class="h1-primary">Latest News</h1>
  <h2 class="h2-primary">{data.title}</h2>
  <p class="p-primary whitespace-pre-wrap">{data.content}</p>
  {#if data?.link}
    <a href={data.link}>{data.link.split('.').slice(1).join('.')}</a>
  {/if}
  {#if data?.doc}
    <a
      href={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${data.doc}`}
      data-sveltekit-preload-data
      target="_blank"
      class="variant-glass btn">Click Here</a
    >
  {/if}
  {#if data?.image}
    <img
      class="hidden max-h-[300px] max-w-[800px] rounded object-scale-down md:flex"
      src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${data.image}`}
      alt="Christian Neighbors News"
    />
  {/if}
  {#if data?.video}
    <a href={data.video} target="_blank">Video Link</a>
  {/if}
</section>
