<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import Events from '$/components/calendar/Events.svelte';
  import AnnualEvents from '$/components/calendar/AnnualEvents.svelte';
  import type { CalendarType } from '$/types';

  seo.set({
    title: 'CN - Calendar',
    description: 'Christian Neighbors - Calendar',
  });

  export let data: {
    calendar: CalendarType | null;
    supper: { img: string; alt: string } | null;
  };
</script>

<Seo title={$seo.title} description={$seo.description} />

<section class="calendar center component pt-8" data-testid="calendar">
  <h1 class="h1-primary">Upcoming Events</h1>
  <div class="dynamic component">
    {#if data.calendar}
      {#if data.calendar.img}
        <img
          class="mx-auto my-8 hidden h-[200px] max-w-[700px] rounded object-contain sm:flex md:h-[400px] md:object-cover"
          src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${data.calendar.img}`}
          alt={data.calendar.alt}
        />
      {/if}
      <div class="card-right__content flex flex-col flex-wrap py-8">
        <p class="p-primary whitespace-pre-wrap">{data.calendar.content}</p>
        {#if data.calendar.link}
          <a class="mt-8 underline" href={data.calendar.link}
            >{data.calendar.link.split('.').slice(1).join('.')}</a
          >
        {/if}
      </div>
    {/if}
  </div>
</section>

<section class="calendar-items center component bg-surface-500/60" data-testid="calendar-events">
  <Events />
</section>

<section class="calendar-card center component" data-testid="calendar-card">
  <AnnualEvents {data} />
</section>
