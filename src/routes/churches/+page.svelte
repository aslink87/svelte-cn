<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Churches',
    description: 'Christian Neighbors - Church Partners',
  });

  function displayCalendar() {
    const calendar = document.getElementById('calendar');

    if (calendar) {
      if (calendar.style.display === 'none') {
        calendar.style.display = 'block';
      } else if (calendar.style.display === 'block') {
        calendar.style.display = 'none';
      }
    }
  }

  interface IData {
    calendar: { img: string };
    data: { link: string; caption: string }[];
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="churches" data-testid="churches">
  <h1>Church Partners</h1>
  <h2>Important Calendars</h2>
  <a href="/calendar">Soup Supper Calendar</a>
  <button on:click={displayCalendar}>Quarterly Food Pantry Calendar</button>
  <div class="pantry-calendar">
    {#if data.calendar}
      <img
        src={data.calendar.img}
        alt="quarterly pantry calendar"
        style="display: none"
        id="calendar"
      />
    {/if}
  </div>
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

    button {
      @include btn-primary;
      margin: 1rem auto;
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

    .pantry-calendar {
      @include center;
      display: flex;

      img {
        margin: auto 1rem;
        max-height: 800px;
        object-fit: scale-down;
        border-radius: 10px;

        @include xs {
          width: 90%;
        }
        @include sm {
          height: 400px;
        }
        @include md {
          height: 500px;
        }
      }
    }
  }
</style>
