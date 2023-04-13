<script lang="ts">
  import { onMount } from 'svelte';

  const cards = [
    {
      heading: 'How to Help',
      img: '/images/donor2.jpg',
      alt: 'Food Pantry',
      subheading: 'Support Us',
      content:
        'Our Mission is to provide local families in need with Food, Emergency Financial Assistance and Skill Building Education to create Self Sufficiency.',
      link: '/',
    },
    {
      heading: 'Testimonies',
      img: '/images/briggs.png',
      alt: 'Food Pantry',
      subheading: 'Testimonies',
      content:
        'We take our responsibility of improving our community very seriously. Check out what some of our supporters and clients have to say about us...',
      link: '/',
    },
    {
      heading: 'Contact Us',
      img: '/images/building.jpg',
      alt: 'Food Pantry',
      subheading: 'Directory',
      content:
        'Feel free to call us at (269)685-4166 or email our office at info@christianneighbors.org. To reach a specific employee at Christian Neighbors please see our directory here...',
      link: '/',
    },
    {
      heading: 'Events',
      img: '/images/events.jpg',
      alt: 'Food Pantry',
      subheading: 'Calendar',
      content:
        "Throughout the year we host many events that may interest you. A few include the Reflection of Hope Auction, PATH Walk, or many Soup Suppers. To see what's upcoming view our calendar...",
      link: '/',
    },
  ];

  onMount(() => {
    const firstCard = document.getElementById('0');
    if (firstCard) firstCard.style.display = 'flex';

    const firstCardButton = document.getElementById('4');
    if (firstCardButton) {
      firstCardButton.style.color = `#6979c1`;
      firstCardButton.style.marginLeft = '10px';
    }
  });

  function handleClick(index: number) {
    // clear active element and button styles
    // eslint-disable-next-line
    document.querySelectorAll('.card-right').forEach((el: any) => {
      el.style.display = 'none';
    });
    document.querySelectorAll('button').forEach((el) => {
      if (el?.classList.contains('selector')) {
        el.style.color = 'white';
        el.style.marginLeft = '0px';
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
      if (button.classList.contains('selector')) button.style.marginLeft = '10px';
      // button.style.fontSize = '28px';
    }
  }
</script>

<section class="home-lower">
  <div class="card-wrapper">
    <div class="card">
      <ul class="card-left">
        <li>
          <button class="selector" id="4" on:click={() => handleClick(0)}>How to Help</button>
        </li>
        <li>
          <button class="selector" id="5" on:click={() => handleClick(1)}>Testimonies</button>
        </li>
        <li><button class="selector" id="6" on:click={() => handleClick(2)}>Contact Us</button></li>
        <li><button class="selector" id="7" on:click={() => handleClick(3)}>Events</button></li>
      </ul>
      {#each cards as card, index}
        <div class="card-right" id={`${index}`}>
          <img src={card.img} alt={card.alt} />
          <div class="card-right__content">
            <h2>{card.subheading}</h2>
            <p>{card.content}</p>
            <button>{card.subheading}</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  section {
    @include center;
    color: $white;
    padding: 5rem 0;

    .card-wrapper {
      width: 80%;
      margin: auto;
      .card {
        display: flex;
        flex-flow: row;
        gap: 2rem;

        .card-left {
          width: 12rem;
          padding: 0 1rem;
          margin: auto 0;
          text-align: left;
          display: flex;
          flex-flow: column;
          gap: 2rem;
          border-right: 2px solid $white;

          li {
            list-style-type: none;

            button {
              @include h2-primary;
              background: none;
              border: none;
              color: $white;
              cursor: pointer;
            }
          }
        }

        .card-right {
          padding: 0 1rem;
          text-align: left;
          display: none;

          img {
            height: 400px;
            max-width: 700px;
            object-fit: cover;
            margin-right: 1rem;
          }

          .card-right__content {
            padding: 0 1rem;
            max-width: 50em;

            button {
              @include btnPrimary;
            }
          }
        }
      }
    }
  }
</style>
