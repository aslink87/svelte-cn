<script lang="ts">
  // @ts-expect-error no-type-def
  import Calendar from '@event-calendar/core';
  // @ts-expect-error no-type-def
  import List from '@event-calendar/list';
  import type { CalendarEvent, CalendarEventSource, CalendarTheme } from '$/types';

  export let events: CalendarEvent[] = [];

  const plugins = [List];
  const options = {
    view: 'listWeek',
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

  function parseEvent(eventsArr: CalendarEvent[]): CalendarEventSource[] | null {
    return eventsArr
      .filter((event) => event.summary !== 'Office')
      .map((event) => {
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

<div class="google-api-wrapper">
  <ul class="calendar-legend">
    <li class="p-primary">DK events are in our demonstration kitchen.</li>
    <li class="p-primary">LAB events are in our computer lab</li>
  </ul>
  {#if events.length > 0}
    <div class="calendar-wrapper p-primary">
      <Calendar {plugins} {options} id={1} class="ec" />
    </div>
  {/if}
</div>
