<script lang="ts">
  const cards = [
    {
      heading: 'Food',
      img: '/images/cnShop1.jpg',
      alt: 'Food Pantry',
      subheading: 'We provide for...',
      content:
        'Our Mission is to provide local families in need with Food, Emergency Financial Assistance and Skill Building Education to create Self Sufficiency.',
      link: '/services#pantry',
    },
    {
      heading: 'Financial Assistance',
      img: '/images/cnClass.jpg',
      alt: 'Financial Assistance',
      subheading: 'We help with...',
      content:
        'Our Mission is to provide local families in need with Food, Emergency Financial Assistance and Skill Building Education to create Self Sufficiency.',
      link: '/services#financial',
    },
    {
      heading: 'Education',
      img: '/images/cnGrads.jpg',
      alt: 'Educational Assistance',
      subheading: 'We teach to...',
      content:
        'Help you take control of your financial life, practice budgeting, obtain a GED, and much more.',
      link: '/education',
    },
  ];

  let y: number;
</script>

<svelte:window bind:scrollY={y} />

<section class="showcase component mb-0 h-fit bg-surface-500/60" data-testid="showcase">
  <img
    style="transform: translateY({y * 0.2}px)"
    class="banner pointer-events-none absolute mx-5 my-2 hidden h-[90%] w-[80%] rounded-2xl object-cover opacity-20 lg:flex lg:w-[90%]"
    src="/images/foodbank.png"
    alt="Christian Neighbors"
  />
  <h1 class="h1-primary">What We Do</h1>
  <h2 class="heading h2-primary my-8 rounded-md bg-primary-800">
    Our Mission is to provide local families in need with Food, Emergency Financial Assistance and
    Skill Building Education to create Self Sufficiency.
  </h2>
  {#each cards as card}
    <div class="card-wrapper mx-0 my-8 flex h-fit flex-col items-center justify-between">
      <div
        class="card max-w-[75rem] text-left shadow-primary-800 sm:w-[80%] sm:rounded-[30px] sm:bg-white sm:shadow-lg lg:h-[400px]"
      >
        <div
          class="card-content relative flex h-fit w-full flex-wrap rounded-[30px] text-center sm:bg-white lg:h-full lg:flex-nowrap"
        >
          <div
            class="content-left flex w-full flex-col rounded-t-3xl py-8 sm:bg-surface-500 lg:min-w-[400px] lg:max-w-[25rem] lg:rounded-s-3xl lg:rounded-tr-none"
          >
            <h2 class="h2-primary text-primary-500 sm:text-white">{card.heading}</h2>
            <img
              class="mx-4 my-auto max-h-[250px] rounded-lg object-scale-down sm:max-h-[200px]"
              src={card.img}
              alt={card.alt}
            />
          </div>
          <div class="content-right my-auto h-fit w-full pb-4 text-primary-500 lg:w-[90%]">
            <h2 class="h2-primary">{card.subheading}</h2>
            <p class="p-primary m-4">{card.content}</p>
            <a class="variant-filled-primary btn" href={card.link}>{card.heading}</a>
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>
