<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Churches',
    description: 'Christian Neighbors - Church Partners',
  });

  interface IData {
    data: { link: string; caption: string }[];
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="churches" data-testid="churches">
  <h1>Church Partners</h1>
  <h2>Important Calendars</h2>
  <p>Soup Supper Calendar</p>
  <p>Quarterly Food Pantry Calendar</p>
  <h2>Would you like someone to come speak to your church?</h2>
  <p>
    Contact <a href="mailto:ehoffman@christianneighbors.org">Eric Hoffman</a> or call 269-685-4166 ext
    100.
  </p>
  <h2>Our Church Partners</h2>
  <ul>
    {#each data.data as item}
      <li>
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.caption}</a>
      </li>
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

    h2 {
      @include h2-primary;
      margin-top: 2rem;
    }

    a {
      @include a;
    }

    ul {
      @include center;
      @include ul;
      display: grid;
      gap: 10px;
      width: 80%;
      grid-template-columns: 30% 30% 30%;
      list-style-type: none;
      padding: 0;
      margin-top: 2rem;

      @include xs {
        grid-template-columns: 100%;
      }
      @include sm {
        grid-template-columns: 50% 50%;
      }

      li {
        padding: 20px;
        height: 55px;
        display: flex;
        @include center;

        &:nth-child(2n) {
          background-color: rgba($color: $gray, $alpha: 0.6);
          border-radius: 5px;
        }

        a {
          text-decoration: none;
        }
      }
    }
  }
</style>
