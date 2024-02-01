<script lang="ts">
  import { onMount } from 'svelte';
  import type { CalendarEvent } from '$/types';

  onMount(async () => {
    await initializeGapi();
  });

  let events: CalendarEvent[] = [];

  /* eslint-disable no-undef */
  const start = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gapi.client
      .init({
        apiKey: 'AIzaSyCzIxIhZvSO9n5L93zddvI3kWD4dML4FME',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar',
        clientId: '1082423949853-lvfm382frfh9p68k5aoebq5jid7a1lfd.apps.googleusercontent.com',
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
            maxResults: 10,
            orderBy: 'startTime',
          })
          .then((response: { result: { items: CalendarEvent[] } } | null) => {
            if (response && response.result.items.length > 0) events = response.result.items;
            console.log(events[0]);
          });
      })
      .catch((error: unknown) => {
        console.log(`Error: ${error}`);
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

<section class="events" data-testid="events">
  <div class="google-api-wrapper">
    {#each events as event}
      <div class="google-api-card">
        <div class="google-api-card-content">
          <p>{event.summary}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- <style lang="scss"> -->
<!--   .google-api-wrapper { -->
<!--     display: grid; -->
<!--     grid-auto-flow: row; -->
<!--     width: 80%; -->
<!--     margin: auto; -->
<!--     padding: 2rem; -->
<!--     gap: 2rem; -->
<!---->
<!--     .google-api-card { -->
<!--       margin: auto; -->
<!--       width: 600px; -->
<!--       height: 200px; -->
<!--       border-radius: 20px; -->
<!--       background-color: $white; -->
<!--       box-shadow: -->
<!--         -6px -6px 20px rgba($deep-blue, 0.5), -->
<!--         6px 6px 20px rgba($deep-blue, 0.2); -->
<!--       text-align: center; -->
<!---->
<!--       .google-api-card-content { -->
<!--         background-color: $white; -->
<!--         border-radius: 20px; -->
<!--         position: relative; -->
<!--         text-align: center; -->
<!--         display: flex; -->
<!--         width: 100%; -->
<!--         height: 100%; -->
<!--         color: $deep-blue; -->
<!--       } -->
<!--     } -->
<!--   } -->
<!-- </style> -->
