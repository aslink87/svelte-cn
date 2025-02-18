<script lang="ts">
  import type { PostingType } from '$/types';
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Postings',
    description: 'Christian Neighbors - Postings',
  });

  interface IData {
    posting: PostingType;
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="postings center component min-h-[100vh] pt-8" data-testid="postings">
  <h1 class="h1-primary">Christian Neighbors Postings</h1>
  {#if data && data.posting}
    <div class="posting-wrapper mx-auto my-8 w-full max-w-[60em] sm:w-[90%]">
      <h2 class="h2-primary mt-8 capitalize">{data.posting.title}</h2>
      <iframe
        class="mx-auto mt-8 h-[25em] w-full sm:h-[55em] sm:w-[80%]"
        title="Christian Neighbors Postings"
        src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${data.posting.link}`}
      ></iframe>
    </div>
  {:else}
    <div class="h-[100vh]">
      <p class="mt-8">No posting at the moment.</p>
    </div>
  {/if}
</section>
