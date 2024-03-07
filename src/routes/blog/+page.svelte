<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import type { BlogType } from '$/types';

  seo.set({
    title: 'CN - Blog',
    description: 'Christian Neighbors - Blog',
  });

  interface IData {
    blogs: BlogType[];
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="blog-section center component pt-8" data-testid="blog">
  <h1 class="h1-primary">Here's What We're Up To</h1>
  <ul class="mt-8">
    {#each data.blogs as blog}
      <article class="blog center px-4 py-8 odd:rounded-lg odd:bg-surface-500/60">
        <header class="blog-header">
          <p class="blog-meta text-sm capitalize">
            Posted by {blog.author} on {blog.date}
          </p>
          <h2 class="h2-primary my-4 capitalize">{blog.title}</h2>
        </header>
        {#if blog.img}
          <img
            class="mx-auto my-4 w-[90%] rounded object-scale-down md:max-w-[700px]"
            src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${blog.img}`}
            alt={blog.caption}
          />
        {/if}
        <p class="p-primary whitespace-pre-wrap">{blog.content}</p>
      </article>
    {/each}
  </ul>
</section>
