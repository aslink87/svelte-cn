<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Churches',
    description: 'Christian Neighbors - Church Partners',
  });

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

  interface IData {
    pantry: { img: string };
    supper: { img: string };
    data: { link: string; caption: string }[];
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />

<section class="churches component center flex flex-col pt-8" data-testid="churches">
  <h1 class="h1-primary mb-8">Church Partners</h1>
  <h2 class="h2-primary mb-4">Important Calendars</h2>
  <button class="variant-glass btn" on:click={() => displayCalendar('supper')}
    >Soup Supper Calendar</button
  >
  <div class="supper-calendar center my-4 flex">
    {#if data.supper}
      <img
        src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${data.supper.img}`}
        alt="quarterly soup supper calendar"
        style="display: none"
        id="supper"
      />
    {/if}
  </div>
  <button class="variant-glass btn" on:click={() => displayCalendar('pantry')}
    >Quarterly Pantry Calendar</button
  >
  <div class="pantry-calendar center my-4 flex">
    {#if data.pantry}
      <img
        src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${data.pantry.img}`}
        alt="quarterly pantry calendar"
        style="display: none"
        id="pantry"
      />
    {/if}
  </div>
  <h2 class="h2-primary mb-4">Would you like someone to come speak to your church?</h2>
  <p class="p-primary">
    Contact <a class="underline" href="mailto:ehoffman@christianneighbors.org">Eric Hoffman</a> or
    call
    <a href="tel:+12696854166">269-685-4166</a> ext 100.
  </p>
  <h2 class="h2-primary my-4">Our Church Partners</h2>
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
