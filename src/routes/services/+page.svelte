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
<section class="pantry" id="pantry" data-testid="pantry">
  <h1>Food Panty Assistance</h1>
  <ul>
    {#each data.pantry as item}
      <li>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </li>
    {/each}
  </ul>
</section>

<section class="financial" id="financial" data-testid="financial">
  <h1>Financial Assistance</h1>
  <ul>
    {#each data.financial as item}
      {#if item.title}
        <h2 class="title">{item.title}</h2>
      {/if}
      {#if item.subtitle}
        <h2>{item.subtitle}</h2>
      {/if}
      {#if item.list}
        <ul>
          {#each item.list as list}
            <li>{list}</li>
          {/each}
        </ul>
      {/if}
      {#if item.content}
        <p>{item.content}</p>
      {/if}
    {/each}
  </ul>
</section>

<section class="community" data-testid="community">
  <h1>Community Assistance Programs</h1>
  <ul>
    <h2>{data.community.title}</h2>
    {#each data.community.list as item}
      <li>
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.caption}</a>
        <p>{item.content}</p>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  section {
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
    }

    p {
      @include p;
    }
  }

  .financial {
    @include component;
    background-color: rgba($color: $gray, $alpha: 0.6);

    h2 {
      margin-top: 2rem;
    }

    li {
      text-align: left;
      list-style-type: disc;
      max-width: 50rem;
      margin: 0.7rem auto;
    }
  }

  .community {
    h2 {
      margin-bottom: 1rem;
    }
    li {
      margin-top: 1.5rem;
    }
    a {
      @include a;
    }
  }
</style>
