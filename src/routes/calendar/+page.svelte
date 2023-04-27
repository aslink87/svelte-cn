<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import type { CalendarType } from '$/types';

  seo.set({
    title: 'CN - Calendar',
    description: 'Christian Neighbors - Calendar',
  });

  export let data: { calendar: CalendarType | null };

  interface ICards {
    heading: string;
    content: string;
    img?: string;
    alt?: string;
    link?: string;
    label?: string;
  }

  const cards: ICards[] = [];

  if (data.calendar) {
    cards.push({
      heading: 'Important Information',
      img: `${data.calendar.img}`,
      alt: `${data.calendar.alt}`,
      content: `${data.calendar.content}`,
      link: `${data.calendar.link}`,
      label: `${data.calendar.link?.split('.').slice(1).join('.')}`,
    });
  }

  cards.push(
    {
      heading: 'Annual Reflection of Hope Auction',
      img: '/images/auction.png',
      alt: 'Dinner Auction',
      content:
        'Each year we host a fun Reflection of Hope Auction event that is our main source of funds for emergency relief to prevent homelessness and loss of utilities in our neighborhood.',
      link: '',
      label: '',
    },
    {
      heading: 'Christmas in July',
      img: '/images/xmasinjuly.png',
      alt: 'Christmas in July',
      content:
        'Christmas in July is held on the fourth Thursday in July at Four Roses Café. The proceeds from this fun and lively event will help fund our food pantry to prevent hunger in our community.',
      link: '',
      label: '',
    },
    {
      heading: 'Soup Suppers',
      img: '/images/suppers.png',
      alt: 'Soup Suppers',
      content:
        'Our Soup Suppers are generally held between September through May. They are a fundraising event for Christian Neighbors hosted by our wonderful church partners to raise funds that go directly to our food pantry to help fight hunger within our community. Come enjoy a wonderful meal to help support a great cause! More information can be found on our calendar, in the attached flyer, and on our social media.',
      link: '',
      label: '',
    },
    {
      heading: 'PATH Walk',
      img: '/images/path.png',
      alt: 'PATH Walk',
      content:
        'Our Soup Suppers are generally held between September through May. They are a fundraising event for Christian Neighbors hosted by our wonderful church partners to raise funds that go directly to our food pantry to help fight hunger within our community. Come enjoy a wonderful meal to help support a great cause! More information can be found on our calendar, in the attached flyer, and on our social media.',
      link: '',
      label: '',
    }
  );
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="calendar" data-testid="calendar">
  <h1>Upcoming Events</h1>

  {#each cards as card, index}
    <div class="card" id={`${index}`}>
      <h2>{card.heading}</h2>
      {#if card.img}
        <img src={card.img} alt={card.alt} />
      {/if}
      <div class="card-content">
        <p>{card.content}</p>
        {#if card.link}
          <a href={card.link}>{card.link.split('.').slice(1).join('.')}</a>
        {/if}
      </div>
    </div>
  {/each}
</section>

<style lang="scss">
  section {
    @include center;
    padding: 2rem 1rem;

    h1 {
      @include h1-primary;
    }

    h2 {
      @include h2-primary;
      text-transform: capitalize;
    }

    .card {
      &:nth-child(2n) {
        @include component;
        background-color: rgba($color: $gray, $alpha: 0.6);
      }

      p {
        @include p;
      }

      img {
        margin: 2rem auto;

        @include xs {
          display: none;
        }

        @include sm {
          display: none;
        }
      }
    }
  }
</style>
