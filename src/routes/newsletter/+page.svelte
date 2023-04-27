<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import type { NewsletterType } from '$/types';

  export let data: { newsletters: NewsletterType[] };

  seo.set({
    title: 'CN - Newsletter',
    description: 'Christian Neighbors - Newsletters',
  });

  const enews = data.newsletters.filter((n) => n.index === 0).at(0);
  const firstNewsletter = data.newsletters.filter((n) => n.index === 1).at(0);
  const secondNewsletter = data.newsletters.filter((n) => n.index === 2).at(0);
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="newsletter" data-testid="newsletter">
  <h1>What's Happening</h1>
  {#if enews}
    <div class="e-news">
      <h2>{enews.title}</h2>
      <object title="E-News Preview" type="application/pdf" data={enews.doc} />
    </div>
  {/if}
  <div class="newsletter-links">
    <h2>Recent Newsletters</h2>
    {#if firstNewsletter}
      <a
        href={`http://localhost:5173${firstNewsletter.doc}`}
        data-sveltekit-preload-data
        target="_blank">{firstNewsletter.title}</a
      >
    {/if}
    {#if secondNewsletter}
      <a
        href={`http://localhost:5173${secondNewsletter.doc}`}
        data-sveltekit-preload-data
        target="_blank">{secondNewsletter.title}</a
      >
    {/if}
  </div>
</section>

<style lang="scss">
  .newsletter {
    @include center;
    padding: 2rem 1rem;

    h1 {
      @include h1-primary;
    }

    h2 {
      @include h2-primary;
      text-transform: capitalize;
      margin-top: 2rem;
    }

    .e-news {
      object {
        width: 90%;
        max-width: 60em;
        margin: 2rem auto;
        height: 50em;

        @include xs {
          height: 25em;
        }

        @include sm {
          height: 40em;
        }
      }
    }

    .newsletter-links {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      border-top: 2px solid $white;

      a {
        text-transform: capitalize;
        color: $white;
        margin-top: 1rem;
      }
    }
  }
</style>
