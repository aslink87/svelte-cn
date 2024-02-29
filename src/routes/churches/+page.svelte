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

<section class="churches component center flex flex-col gap-8 pt-8" data-testid="churches">
  <h1 class="h1-primary">Church Partners</h1>
  <h2 class="h2-primary">Important Calendars</h2>
  <a class="w-full underline" href="/calendar">Soup Supper Calendar</a>
  <button class="variant-glass btn" on:click={displayCalendar}>Quarterly Pantry Calendar</button>
  <div class="pantry-calendar center flex">
    {#if data.calendar}
      <img
        src={data.calendar.img}
        alt="quarterly pantry calendar"
        style="display: none"
        id="calendar"
      />
    {/if}
  </div>
  <h2 class="h2-primary">Would you like someone to come speak to your church?</h2>
  <p class="p-primary">
    Contact <a class="underline" href="mailto:ehoffman@christianneighbors.org">Eric Hoffman</a> or call
    269-685-4166 ext 100.
  </p>
  <h2 class="h2-primary">Our Church Partners</h2>
  <ul>
    {#each data.data as item}
      <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
        <a class="underline" href={item.link} target="_blank" rel="noopener noreferrer"
          >{item.caption}</a
        >
      </li>
    {/each}
  </ul>
</section>
