<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import { onMount } from 'svelte';
  import Events from '$/components/calendar/Events.svelte';
  import type { CalendarType } from '$/types';

  seo.set({
    title: 'CN - Calendar',
    description: 'Christian Neighbors - Calendar',
  });

  export let data: {
    calendar: CalendarType | null;
    supper: { img: string; alt: string } | null;
  };

  interface ICards {
    heading: string;
    content: string;
    img?: string;
    alt?: string;
    link?: string;
    label?: string;
  }

  const cards: ICards[] = [
    {
      heading: 'Annual Reflection of Hope Auction',
      img: '/images/dinnerAuction2.jpg',
      alt: 'Dinner Auction',
      content:
        'Each year we host a fun Reflection of Hope Auction event that is our main source of funds for emergency relief to prevent homelessness and loss of utilities in our neighborhood.',
      link: '',
      label: '',
    },
    {
      heading: 'Soup Suppers',
      img: '',
      alt: '',
      content:
        'Our Soup Suppers are generally held between September through May. They are a fundraising event for Christian Neighbors hosted by our wonderful church partners to raise funds that go directly to our food pantry to help fight hunger within our community. Come enjoy a wonderful meal to help support a great cause! More information can be found on our calendar, in the attached flyer, and on our social media.',
      link: '',
      label: '',
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

  // if soup supper image and alt are provided, update cards
  if (data.supper?.img) cards[1].img = data.supper.img;
  if (data.supper?.alt) cards[1].alt = data.supper.alt;

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

<Seo title={$seo.title} description={$seo.description} />

<section class="calendar center component pt-8" data-testid="calendar">
  <h1 class="h1-primary">Upcoming Events</h1>
  <div class="dynamic component">
    {#if data.calendar}
      {#if data.calendar.img}
        <img
          class="mx-auto my-8 hidden h-[200px] max-w-[700px] rounded object-contain sm:flex md:h-[400px] md:object-cover"
          src={data.calendar.img}
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

<section class="calendar-items center component bg-surface-500/60" data-testid="calendar-card">
  <Events />
</section>

<section class="calendar-card center component" data-testid="calendar-card">
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
          <button class="selector h2-primary" id="6" on:click={() => handleClick(2)}
            >PATH Walk</button
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
              <a href={card.link}>{card.link.split('.').slice(1).join('.')}</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <!-- <div class="calendar-wrapper"> -->
  <!--   <iframe -->
  <!--     src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23f5f5f5&ctz=America%2FDetroit&showTabs=1&showNav=1&showTz=0&showCalendars=1&showPrint=0&showDate=1&showTitle=0&src=volunteer%40christianneighbors.org&color=%236979c1" -->
  <!--     style="border-width:0" -->
  <!--     frameborder="0" -->
  <!--     width="100%" -->
  <!--     height="100%" -->
  <!--     scrolling="no" -->
  <!--     title="Education Resource Center Calendar" -->
  <!--     class="calendar-iframe" -->
  <!--   /> -->
  <!-- </div> -->
</section>
