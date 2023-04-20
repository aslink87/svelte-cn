<script lang="ts">
  import type { HeroType } from '$/types';

  export let data: HeroType;
</script>

<section class="hero" data-testid="hero">
  <h1>Latest News</h1>
  <h2>{data.title}</h2>
  <p>{data.content}</p>
  {#if data?.link}
    <a href={data.link}>{data.link.split('.').slice(1).join('.')}</a>
  {/if}
  {#if data?.image}
    <img src={data.image} alt="Christian Neighbors News" />
  {/if}
  {#if data?.video}
    <a href={data.video}>Video Link</a>
  {/if}
</section>

<style lang="scss">
  section {
    @include center;
    padding: 2rem 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    gap: 2rem;

    h1 {
      @include h1-primary;
    }

    h2 {
      @include h2-primary;
    }

    p {
      @include p;
    }

    a {
      @include a;
    }

    img {
      max-height: 300px;
      max-width: 800px;
      object-fit: scale-down;
      border-radius: 5px;
    }
  }
</style>
