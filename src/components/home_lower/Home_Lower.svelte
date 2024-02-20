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
      link: '/donate',
    },
    {
      heading: 'Testimonies',
      img: '/images/briggs.png',
      alt: 'Food Pantry',
      subheading: 'Testimonies',
      content:
        'We take our responsibility of improving our community very seriously. Check out what some of our supporters and clients have to say about us...',
      link: '/testimonies',
    },
    {
      heading: 'Contact Us',
      img: '/images/building.jpg',
      alt: 'Food Pantry',
      subheading: 'Directory',
      content:
        'Feel free to call us at (269)685-4166 or email our office at info@christianneighbors.org. To reach a specific employee at Christian Neighbors please see our directory here...',
      link: '/about#staff',
    },
    {
      heading: 'Events',
      img: '/images/events.jpg',
      alt: 'Food Pantry',
      subheading: 'Calendar',
      content:
        "Throughout the year we host many events that may interest you. A few include the Reflection of Hope Auction, PATH Walk, or many Soup Suppers. To see what's upcoming view our calendar...",
      link: '/calendar',
    },
  ];

  onMount(() => {
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
    document.querySelectorAll('.card-right').forEach((el: any) => {
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

<section class="home-lower component" data-testid="home-lower">
  <div class="card-wrapper mx-auto w-[90%]">
    <div class="card flex flex-col gap-8 bg-transparent xl:flex-row">
      <ul
        class="card-left xs:max-lg:center xl:justify-left mx-auto my-auto flex w-full flex-col justify-center gap-8 sm:flex-row xl:mx-0 xl:w-[18rem] xl:flex-col"
      >
        <li>
          <button class="selector h2-primary" id="4" on:click={() => handleClick(0)}
            >How to Help</button
          >
        </li>
        <li>
          <button class="selector h2-primary" id="5" on:click={() => handleClick(1)}
            >Testimonies</button
          >
        </li>
        <li>
          <button class="selector h2-primary" id="6" on:click={() => handleClick(2)}
            >Contact Us</button
          >
        </li>
        <li>
          <button class="selector h2-primary" id="7" on:click={() => handleClick(3)}>Events</button>
        </li>
      </ul>
      {#each cards as card, index}
        <div
          class="card-right hidden flex-col items-center px-4 py-0 text-left xl:w-[80%] xl:border-l-2 2xl:flex-row 2xl:items-start"
          id={`${index}`}
        >
          <img
            src={card.img}
            alt={card.alt}
            class="h-[200px] max-w-[600px] object-contain sm:h-[400px] sm:object-cover xl:mr-8"
          />
          <div class="card-right__content text-center">
            <h2 class="h2-primary mt-6">{card.subheading}</h2>
            <p class="my-6">{card.content}</p>
            <a href={card.link} class="variant-glass btn">{card.subheading}</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
