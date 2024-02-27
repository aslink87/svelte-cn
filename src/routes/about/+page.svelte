<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import type {
    AboutPageMissionDataType,
    AboutPageFiveCsType,
    AboutPageLeadershipType,
    AboutPageStaffType,
  } from '$/types';

  interface IData {
    missionData: AboutPageMissionDataType;
    fiveCs: AboutPageFiveCsType;
    leadership: AboutPageLeadershipType;
    staff: AboutPageStaffType[];
  }

  export let data: IData;

  seo.set({
    title: 'CN - About',
    description: 'Christian Neighbors - About',
  });
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="about-mission center component pt-8" data-testid="about-mission">
  <h1 class="h1-primary">{data.missionData.title}</h1>
  <h2 class="h2-primary mt-6">{data.missionData.subtitle}</h2>
  <ul class="first-list mt-8 list-disc text-left">
    {#each data.missionData.list1 as item}
      <li class="p-primary my-3">{item}</li>
    {/each}
  </ul>
  <span class="my-8 inline-block w-full border-b-2 border-white lg:max-w-[50em]"></span>
  <ul class="second-list list-disc text-left">
    {#each data.missionData.list2 as item}
      <li class="p-primary">{item}</li>
    {/each}
  </ul>
</section>

<section class="about-fivecs center component bg-surface-500/60" data-testid="about-fivecs">
  <h1 class="h1-primary">{data.fiveCs.title}</h1>
  <ul>
    {#each data.fiveCs.items as item}
      <li class="my-12">
        <h2 class="h2-primary mb-4">{item.title}</h2>
        <p class="p-primary">{item.content}</p>
      </li>
    {/each}
  </ul>
</section>

<section class="about-leadership center component" data-testid="about-leadership">
  <h1 class="h1-primary">Our Board</h1>
  <ul
    class="center mx-auto my-12 grid w-full grid-cols-1 justify-around gap-3 p-0 sm:grid-cols-2 lg:w-[80%] xl:grid-cols-3"
  >
    {#each data.leadership.board as item}
      <li class="p-primary w-[300px] p-5 even:rounded even:bg-surface-500">
        {item.title}: {item.name}
      </li>
    {/each}
  </ul>
  <h2 class="h2-primary">Resource Development Team</h2>
  <ul
    class="center mx-auto my-12 grid w-full grid-cols-1 justify-around gap-3 p-0 sm:grid-cols-2 lg:w-[80%] xl:grid-cols-3"
  >
    {#each data.leadership.resourceDevelopment as item}
      <li class="p-primary w-[300px] p-5 even:rounded even:bg-surface-500">
        {item.name}
      </li>
    {/each}
  </ul>
  <h2 class="h2-primary">Finance Team</h2>
  <ul
    class="center mx-auto my-12 grid w-full grid-cols-1 justify-around gap-3 p-0 sm:grid-cols-2 lg:w-[80%] xl:grid-cols-3"
  >
    {#each data.leadership.financeTeam as item}
      <li class="p-primary w-[300px] p-5 even:rounded even:bg-surface-500">
        {item.name}
      </li>
    {/each}
  </ul>
</section>

<section
  class="about-staff center component bg-surface-500/60"
  id="staff"
  data-testid="about-staff"
>
  <h1 class="h1-primary">Meet the Staff</h1>
  <!--       gap: 2em 3em; -->
  <ul class="center mx-auto mt-12 flex flex-wrap gap-5 lg:w-[80%]">
    {#each data.staff as item}
      <li class="h-[600px] w-[300px] rounded-xl bg-primary-800 shadow-black sm:h-[650px]">
        <img class="w-full rounded-t-xl" src={item.img} alt={item.name} />
        <p class="h2-primary my-4 font-bold">{item.name}</p>
        <p class="p-primary">{item.title}</p>
        <p class="content p-primary mx-4 mt-6 text-sm">{item.content}</p>
        {#if item.email}
          <a class="variant-glass btn my-6 text-xs" href="mailto:{item.email}">{item.email}</a>
        {/if}
        {#if item.ext}
          <p class="p-primary">(269) 685-4166 ext {item.ext}</p>
        {/if}
      </li>
    {/each}
  </ul>
</section>
