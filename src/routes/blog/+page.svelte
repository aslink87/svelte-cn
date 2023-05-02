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
<section class="blog-section" data-testid="blog">
  <h1>Here's What We're Up To</h1>
  <ul>
    {#each data.blogs as blog}
      <article class="blog">
        <header class="blog-header">
          <p class="blog-meta">
            Posted by {blog.author} on {blog.date}
          </p>
          <h2>{blog.title}</h2>
        </header>
        <img src={blog.img} alt={blog.caption} />
        <p>{blog.content}</p>
      </article>
    {/each}
  </ul>
</section>

<style lang="scss">
  section {
    @include center;
    min-height: 100vh;
    padding: 2rem 1rem;

    h1 {
      @include h1-primary;
    }

    ul {
      padding-left: 0;
    }

    .blog-meta {
      text-transform: capitalize;
      font-size: 0.8rem;
    }

    .blog {
      @include center;
      padding: 1rem 0 1rem 0;

      &:nth-child(1) {
        background-color: rgba($color: $gray, $alpha: 0.6);
        border-radius: 5px;
      }

      h2 {
        @include h2-primary;
        text-transform: capitalize;
        margin: 1rem auto;
      }

      p {
        @include p;
        white-space: pre-wrap;
      }

      img {
        margin: 1rem auto;
        max-height: 500px;
        object-fit: scale-down;
        border-radius: 10px;

        @include xs {
          width: 90%;
        }
        @include sm {
          height: 400px;
        }
      }
    }
  }
</style>
