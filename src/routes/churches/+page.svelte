<script lang="ts">
  import type { CalendarEvent } from '$/types';
  import { seo } from '$lib/stores/Seo';
  import { onMount } from 'svelte';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Churches',
    description: 'Christian Neighbors - Church Partners',
  });

  interface SupperEvent {
    date: string;
    location: string;
  }

  export const ssr = false;

  export let data: {
    img: string;
  };

  function displayCalendar(id: string) {
    const calendar = document.getElementById(id);

    if (calendar) {
      if (calendar.style.display === 'none') {
        calendar.style.display = 'block';
      } else if (calendar.style.display === 'block') {
        calendar.style.display = 'none';
      }
    }
  }

  onMount(async () => {
    await initializeGapi();
  });

  function filterEvents(e: CalendarEvent[]) {
    return e.filter((event: CalendarEvent) => event.summary.toLowerCase().endsWith('supper'));
  }

  function formatEventDates(eventsArr: CalendarEvent[]) {
    const suppers = filterEvents(eventsArr);

    if (suppers.length === 0) return [];

    const dates: SupperEvent[] = [];
    suppers.forEach((item) => {
      const date = new Date(item.start.dateTime);
      const obj: SupperEvent = { date: date.toLocaleDateString(), location: item.location ?? '' };

      dates.push(obj);
    });

    return dates;
  }

  let events: CalendarEvent[] = [];
  let supperEvents: SupperEvent[] = [];

  /* eslint-disable no-undef */
  const start = async () => {
    const apiKey = `${import.meta.env.VITE_PUBLIC_CALENDAR_API_KEY}`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gapi.client
      .init({
        apiKey,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      })
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return gapi.client.calendar.events
          .list({
            calendarId: 'volunteer@christianneighbors.org',
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 100,
            orderBy: 'startTime',
          })
          .then((response: { result: { items: CalendarEvent[] } } | null) => {
            if (response) {
              const filterPublicEvents = response.result.items.filter(
                (event: CalendarEvent) => event.visibility === 'public',
              );
              events = filterPublicEvents;
            }
          })
          .then(() => {
            supperEvents = formatEventDates(events);
          });
      })
      .catch((error: unknown) => {
        const errorString = JSON.stringify(error);
        console.log(`Error: ${errorString}`);
      });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const initializeGapi = async () => gapi.load('client', start);
  /* eslint-enable no-undef */
</script>

<svelte:head>
  <script src="https://apis.google.com/js/api.js" on:load={initializeGapi}></script>
</svelte:head>

<Seo title={$seo.title} description={$seo.description} />

<section class="churches component center flex min-h-[100vh] flex-col pt-8" data-testid="churches">
  <h1 class="h1-primary mb-8">Church Partners</h1>
  <h2 class="h2-primary mb-4">Important Calendars</h2>
  <button class="variant-glass btn" on:click={() => displayCalendar('pantry')}
    >Quarterly Pantry Calendar</button
  >
  <div class="pantry-calendar center my-8 flex">
    {#if data}
      <img
        src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${data.img}`}
        alt="quarterly pantry calendar"
        style="display: none"
        id="pantry"
      />
    {/if}
  </div>
  <h2 class="h2-primary">Upcoming Soup Suppers</h2>
  {#if supperEvents.length > 0}
    <div class="supper-calendar center border-white-2 my-8 flex rounded border">
      <ul class="mt-6" id="supper">
        {#each supperEvents as item}
          {#if item.date && item.location}
            <li
              class="mx-auto w-full rounded-lg p-4 text-left capitalize odd:bg-surface-500/60 md:w-[90%]"
            >
              <p class="p-primary">Date: {item.date}</p>
              <p class="p-primary">Location: {item.location}</p>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {:else}
    <h2 class="h2-primary my-4">Loading...</h2>
  {/if}
  <h2 class="h2-primary mb-4 mt-8">Would you like someone to come speak to your church?</h2>
  <p class="p-primary mb-4">
    Contact <a class="underline" href="mailto:ehoffman@christianneighbors.org">Eric Hoffman</a> or
    call
    <a href="tel:+12696854166">269-685-4166</a> ext 100.
  </p>
  <h2 class="h2-primary mb-4 mt-8">Our Church Partners</h2>
  <p class="p-primary">
    Christian Neighbors is blessed with the support of many of our local churches. We depend on them
    for prayer, food and financial support. We appreciate all of our faithful church partners.
  </p>
</section>
