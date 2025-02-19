<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import type { NewsletterType } from '$/types';
  import Spinner from '$/components/utility/Spinner.svelte';

  export let data: { newsletters: NewsletterType[] };
  let isLoading = true;

  const delayRender = () => {
    setTimeout(() => {
      isLoading = false;
    }, 4000);
  };
  delayRender();

  seo.set({
    title: 'CN - Newsletter',
    description: 'Christian Neighbors - Newsletters',
  });

  const enews = data.newsletters.filter((n) => n.index === 0).at(0);
  const firstNewsletter = data.newsletters.filter((n) => n.index === 1).at(0);
  const secondNewsletter = data.newsletters.filter((n) => n.index === 2).at(0);

  const env: string = import.meta.env.MODE;
  let pdfUrl: string;
  if (env === 'development') {
    pdfUrl =
      'https://christianneighbors.org/assets/newsletters/a635e2f0-e4ab-4955-be6e-ed3ef95e532e.pdf';
  } else if (enews) {
    pdfUrl = `https://docs.google.com/gview?url=${import.meta.env.VITE_PUBLIC_ASSET_URL}${
      enews.doc
    }&embedded=true`;
  }
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="newsletter center component pt-8" data-testid="newsletter">
  <h1 class="h1-primary">What's Happening</h1>
  {#if isLoading}
    <div class="center flex h-[25em] sm:h-[55em]">
      <Spinner />
    </div>
  {/if}
  {#if enews && !isLoading}
    <div class="e-news mx-auto my-8 w-full max-w-[60em] sm:w-[90%]">
      <h2 class="h2-primary mt-8 capitalize">{enews.title}</h2>
      <iframe
        class="mx-auto mt-8 h-[25em] w-full sm:h-[55em] sm:w-[80%]"
        title="E-News Preview"
        src={`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`}
      ></iframe>
    </div>
  {/if}
  <div class="newsletter-links mt-4 flex flex-col flex-wrap border-t-2 border-t-white pt-4">
    <h2 class="h2-primary">Recent Newsletters</h2>
    {#if firstNewsletter}
      <a
        href={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${firstNewsletter.doc}`}
        class="my-4 underline"
        data-sveltekit-preload-data
        target="_blank">{firstNewsletter.title}</a
      >
    {/if}
    {#if secondNewsletter}
      <a
        href={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${secondNewsletter.doc}`}
        class="my-4 underline"
        data-sveltekit-preload-data
        target="_blank">{secondNewsletter.title}</a
      >
    {/if}
  </div>
</section>
