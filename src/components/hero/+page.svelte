<script lang="ts">
  import type { HeroType } from '$/types';

  export let data: HeroType;
</script>

<section class="hero">
  <h1>Latest News</h1>
  <h2>{data.title}</h2>
  <p>{data.content}</p>
  {#if data?.link}
    <a href={data.link}>{data.link.split('.').slice(1).join('.')}</a>
  {/if}
  {#if data?.image}
    <img src="/images/cnShop2.jpg" alt="Christian Neighbors News" />
  {/if}
  {#if data?.video}
    <a href={data.video}>Video Link</a>
  {/if}
</section>

<style lang="scss">
  section {
    @include center;
    text-align: center;
    color: $white;
    padding: 2rem 0;

    h1 {
      @include h1-primary;
    }

    h2 {
      @include h2-primary;
    }

    p {
      max-width: 60em;
      margin: auto;
    }

    a {
      color: $white;
      font-size: 14px;
    }

    img {
      max-height: 300px;
    }
  }
</style>
