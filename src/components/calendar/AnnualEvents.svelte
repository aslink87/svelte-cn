<script lang="ts">
  import { onMount } from 'svelte';
  import type { CalendarEvent } from '$/types';

  interface SupperEvent {
    date: string;
    location: string;
  }

  interface ICards {
    heading: string;
    content: string;
    img?: string;
    alt?: string;
    link?: string;
    label?: string;
    data?: SupperEvent[];
  }

  export let events: CalendarEvent[] = [];

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

  const cards: ICards[] = [
    {
      heading: 'Annual Reflection of Hope Auction',
      img: '/images/dinnerAuction2.jpg',
      alt: 'Dinner Auction',
      content:
        'Each year on the second Thursday in May, we host a fun Reflection of Hope Auction event that is our main source of funds for emergency relief to prevent homelessness and loss of utilities in our neighborhood. For more information email Eric Hoffman.',
      link: 'mailto:ehoffman@christianneighbors.org',
      label: 'ehoffman@christianneighbors.org',
    },
    {
      heading: 'Soup Suppers',
      img: '',
      alt: '',
      content:
        'Our Soup Suppers are generally held between September through May. They are a fundraising event for Christian Neighbors hosted by our wonderful church partners to raise funds that go directly to our food pantry to help fight hunger within our community. Come enjoy a wonderful meal to help support a great cause! Here are some upcoming soup suppers:',
      link: '',
      label: '',
      data: formatEventDates(events),
    },
    {
      heading: 'PATH Walk',
      img: '/images/path.jpg',
      alt: 'PATH Walk',
      content:
        'Our annual PATH Walk is generally held on the first Sunday in October. Walk rotates each year between Plainwell and Otsego. In addition, participants may choose a virtual walk. We walk to bring awareness to hunger issues and to raise funds to prevent them. Stay tuned to our calendar and social media.',
      link: '',
      label: '',
    },
  ];

  onMount(async () => {
    const firstCard = document.getElementById('0');
    if (firstCard) firstCard.style.display = 'flex';

    const firstCardButton = document.getElementById('4');
    if (firstCardButton) {
      firstCardButton.style.color = `#5c7793`;
      firstCardButton.style.fontWeight = '900';
    }
  });

  function handleClick(index: number) {
    // clear active element and button styles
    // eslint-disable-next-line
    document.querySelectorAll('.card-body').forEach((el: any) => {
      el.style.display = 'none';
    });
    document.querySelectorAll('button').forEach((el) => {
      if (el?.classList.contains('selector')) {
        el.style.color = 'white';
        el.style.fontWeight = 'inherit';
      }
    });

    // display selected element
    const element = document.getElementById(`${index}`);
    if (element) element.style.display = 'flex';

    // change button color
    const button = document.getElementById(`${index + 4}`);
    if (button) {
      button.classList.add('active');
      button.style.color = `#5c7793`;
      button.style.fontWeight = '900';
    }
  }
</script>

<div class="card-wrapper mx-auto w-[90%]">
  <div class="card flex flex-col gap-8 bg-inherit">
    <ul
      class="card-nav m-auto flex w-[90%] flex-row flex-wrap justify-center gap-4 border-b-2 border-b-white pb-8 text-center"
    >
      <li>
        <button class="selector h2-primary" id="4" on:click={() => handleClick(0)}
          >Annual Reflection of Hope Auction</button
        >
      </li>
      <li />
      <li>
        <button class="selector h2-primary" id="5" on:click={() => handleClick(1)}
          >Soup Suppers</button
        >
      </li>
      <li>
        <button class="selector h2-primary" id="6" on:click={() => handleClick(2)}>PATH Walk</button
        >
      </li>
    </ul>
    {#each cards as card, index}
      <div
        class="card-body hidden flex-col justify-center gap-8 text-left sm:px-4 xl:flex-row"
        id={`${index}`}
      >
        {#if card.img}
          <img
            class="mx-auto w-[90%] max-w-[500px] rounded-lg object-cover sm:w-[80%]"
            src={card.img}
            alt={card.alt}
          />
        {/if}
        <div class="card-right__content max-w-[50em] text-center xl:text-left">
          <p class="p-primary">{card.content}</p>
          {#if card.link}
            <a class="p-primary md:text-md variant-glass btn mt-6 px-2 text-xs" href={card.link}
              >{card.label}</a
            >
          {/if}
          {#if card.data}
            <ul class="mt-6">
              {#each card.data as item}
                {#if item.date && item.location}
                  <li
                    class="mx-auto w-full rounded-lg p-4 capitalize odd:bg-surface-500/60 md:w-[90%]"
                  >
                    <p class="p-primary">Date: {item.date}</p>
                    <p class="p-primary">Location: {item.location}</p>
                  </li>
                {/if}
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
