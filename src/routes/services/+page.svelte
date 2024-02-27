<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Services',
    description: 'Christian Neighbors - Services',
  });

  interface IData {
    data: { title: string; content: string }[];
    pantry: { title: string; content: string }[];
    financial: { title: string; list: string[]; subtitle?: string; content?: string }[];
    community: { title: string; list: { link: string; caption: string; content: string }[] };
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="pantry center component pt-8" id="pantry" data-testid="pantry">
  <h1 class="h1-primary mb-8">Food Panty Assistance</h1>
  <ul>
    {#each data.pantry as item}
      <li>
        <h2 class="h2-primary mb-6">{item.title}</h2>
        <p class="p-primary mb-8">{item.content}</p>
      </li>
    {/each}
  </ul>
</section>

<section
  class="financial center component bg-surface-500/60"
  id="financial"
  data-testid="financial"
>
  <h1 class="h1-primary mb-8">Financial Assistance</h1>
  <ul>
    {#each data.financial as item}
      {#if item.title}
        <h2 class="title h2-primary mb-6">{item.title}</h2>
      {/if}
      {#if item.subtitle}
        <h2 class="h2-primary mb-6">{item.subtitle}</h2>
      {/if}
      {#if item.list}
        <ul class="mb-6">
          {#each item.list as list}
            <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">{list}</li>
          {/each}
        </ul>
      {/if}
      {#if item.content}
        <p class="p-primary mb-8">{item.content}</p>
      {/if}
    {/each}
  </ul>
</section>

<section class="community center component" data-testid="community">
  <h1 class="h1-primary mb-8">Community Assistance Programs</h1>
  <ul>
    <h2 class="h2-primary">{data.community.title}</h2>
    {#each data.community.list as item}
      <li class="my-8">
        <a class="underline" href={item.link} target="_blank" rel="noopener noreferrer"
          >{item.caption}</a
        >
        <p class="p-primary">{item.content}</p>
      </li>
    {/each}
  </ul>
</section>
