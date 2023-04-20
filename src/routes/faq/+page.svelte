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
<section class="faq" data-testid="faq">
  <h1>Frequently Asked Questions</h1>
  <ul>
    {#each data.data as item}
      <li>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .faq {
    @include center;
    padding: 2rem 1rem;

    h1 {
      @include h1-primary;
    }

    h2 {
      @include h2-primary;
      margin-top: 1rem;
    }

    ul {
      @include ul;

      li {
        margin-top: 3rem;
      }
    }
  }
</style>
