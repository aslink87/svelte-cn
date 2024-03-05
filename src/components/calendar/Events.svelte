<script lang="ts">
  import { onMount } from 'svelte';
  // @ts-expect-error no-type-def
  import Calendar from '@event-calendar/core';
  // @ts-expect-error no-type-def
  import List from '@event-calendar/list';
  import type { CalendarEvent, CalendarEventSource, CalendarTheme } from '$/types';

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
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
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
            maxResults: 20,
            orderBy: 'startTime',
          })
          .then((response: { result: { items: CalendarEvent[] } } | null) => {
            if (response && response.result.items.length > 0) events = response.result.items;
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

  const plugins = [List];
  const options = {
    view: 'listMonth',
    eventSources: [
      {
        events: async () => {
          return addEvents();
        },
      },
    ],
    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',
    eventBackgroundColor: '#041f40',
    eventClassNames: 'ec-event',
    firstDay: 1,
    hiddenDays: [0, 6],
    locale: 'en',
    slotDuration: '00:60:00',
    slotHeight: 40,
    eventColor: '#041f40',
    theme: (theme: CalendarTheme) => ({
      ...theme,
      dayHead: 'ec-header-day',
      daySide: 'ec-header-side',
    }),
  };

  function addEvents() {
    return parseEvent(events);
  }

  function parseEvent(eventsArr: CalendarEvent[]): CalendarEventSource[] {
    return eventsArr.map((event) => {
      return {
        id: event.etag,
        start: event.start.dateTime,
        end: event.end.dateTime,
        title: {
          html: `
					<a
					href=${event.htmlLink}
					data-sveltekit-preload-data
					target="_blank"
					class="variant-glass btn p-2 p-primary">
					${event.summary}
					</a>`,
        },
      };
    });
  }
</script>

<svelte:head>
  <script src="https://apis.google.com/js/api.js" on:load={initializeGapi}></script>
</svelte:head>

<div class="google-api-wrapper">
  {#if events.length > 0}
    <div class="calendar-wrapper p-primary">
      <Calendar {plugins} {options} id={1} class="ec" />
    </div>
  {/if}
</div>
