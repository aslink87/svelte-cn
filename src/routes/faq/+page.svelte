<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Faq',
    description: 'Christian Neighbors - Questions',
  });

  interface IData {
    data: { title: string; content: string }[];
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="faq center component pt-8" data-testid="faq">
  <h1 class="h1-primary">Frequently Asked Questions</h1>
  <ul>
    {#each data.data as item}
      <li class="pt-12">
        <h2 class="h2-primary mb-4">{item.title}</h2>
        <p class="p-primary">{item.content}</p>
      </li>
    {/each}
  </ul>
</section>
