<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import { onMount } from 'svelte';
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

  const cards: ICards[] = [
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
    },
  ];

  onMount(() => {
    const firstCard = document.getElementById('0');
    if (firstCard) firstCard.style.display = 'flex';

    const firstCardButton = document.getElementById('4');
    if (firstCardButton) {
      firstCardButton.style.color = `#6979c1`;
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
      }
    });

    // display selected element
    const element = document.getElementById(`${index}`);
    if (element) element.style.display = 'flex';

    // change button color
    const button = document.getElementById(`${index + 4}`);
    if (button) {
      button.classList.add('active');
      button.style.color = `#6979c1`;
    }
  }
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="calendar" data-testid="calendar">
  <h1>Upcoming Events</h1>
  <div class="dynamic">
    {#if data.calendar}
      <img src={data.calendar.img} alt={data.calendar.alt} />
      <div class="card-right__content">
        <p>{data.calendar.content}</p>
        {#if data.calendar.link}
          <a href={data.calendar.link}>{data.calendar.link.split('.').slice(1).join('.')}</a>
        {/if}
      </div>
    {/if}
  </div>
  <div class="card-wrapper">
    <div class="card">
      <ul class="card-nav">
        <li>
          <button class="selector" id="4" on:click={() => handleClick(0)}
            >Annual Reflection of Hope Auction</button
          >
        </li>
        <li>
          <button class="selector" id="5" on:click={() => handleClick(1)}>Christmas in July</button>
        </li>
        <li>
          <button class="selector" id="6" on:click={() => handleClick(2)}>Soup Suppers</button>
        </li>
        <li><button class="selector" id="7" on:click={() => handleClick(3)}>PATH Walk</button></li>
      </ul>
      {#each cards as card, index}
        <div class="card-body" id={`${index}`}>
          <img src={card.img} alt={card.alt} />
          <div class="card-right__content">
            <p>{card.content}</p>
            {#if card.link}
              <a href={card.link}>{card.link.split('.').slice(1).join('.')}</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  section {
    @include center;
    padding: 5rem 0;
    min-height: 100vh;

    h1 {
      @include h1-primary;
      margin-bottom: 2rem;
    }

    .dynamic {
      @include component;
      background-color: rgba($color: $gray, $alpha: 0.6);
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .card-wrapper {
      width: 90%;
      margin: auto;
      .card {
        display: flex;
        flex-flow: column;
        gap: 2rem;

        @include xs {
          flex-flow: column;
        }
        @include sm {
          flex-flow: column;
        }
        @include md {
          flex-flow: column;
        }

        .card-nav {
          width: 90%;
          margin: auto;
          text-align: center;
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding-left: 0;
          padding-bottom: 2rem;
          border-bottom: $white 2px solid;

          li {
            list-style-type: none;

            button {
              @include h2-primary;
              background: none;
              border: none;
              cursor: pointer;
              color: $white;
            }
          }

          @include xs {
            gap: 1rem;
          }
        }

        .card-body {
          padding: 0 1rem;
          text-align: left;
          display: none;
          flex-flow: column;

          @include xs {
            flex-flow: column;
          }
          @include sm {
            flex-flow: column;
            @include center;
          }
          @include md {
            flex-flow: column;
            @include center;
          }
          @include lg {
            flex-flow: column;
            @include center;
          }
          @include xl {
            flex-flow: row;
          }

          img {
            height: 400px;
            max-width: 700px;
            object-fit: cover;
            margin-right: 1rem;
            border-radius: 5px;

            @include xs {
              display: none;
            }
            @include sm {
              margin-right: 0;
              height: 200px;
              object-fit: contain;
            }
            @include md {
              margin-right: 0;
            }
          }

          .card-right__content {
            padding: 0 1rem;
            max-width: 50em;

            @include xs {
              text-align: center;
              a {
                margin: 1rem auto;
              }
            }
            @include sm {
              text-align: center;
              a {
                margin: 1rem auto;
              }
            }
            @include md {
              a {
                margin: 1rem auto;
              }
            }

            a {
              @include btn-primary;
              width: 100px;
            }
          }
        }
      }

      @include xs {
        width: 100%;
      }
      @include sm {
        width: 100%;
      }
      @include md {
        width: 90%;
      }
    }
  }
</style>
