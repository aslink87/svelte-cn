<script lang="ts">
  const cards = [
    {
      heading: 'Food',
      img: '/images/cnShop1.jpg',
      alt: 'Food Pantry',
      subheading: 'We provide for...',
      content:
        'Our Mission is to provide local families in need with Food, Emergency Financial Assistance and Skill Building Education to create Self Sufficiency.',
      link: '/',
    },
    {
      heading: 'Financial Assistance',
      img: '/images/cnClass.jpg',
      alt: 'Financial Assistance',
      subheading: 'We help with...',
      content:
        'Our Mission is to provide local families in need with Food, Emergency Financial Assistance and Skill Building Education to create Self Sufficiency.',
      link: '/',
    },
    {
      heading: 'Education',
      img: '/images/cnGrads.jpg',
      alt: 'Educational Assistance',
      subheading: 'We teach to...',
      content:
        'Help you take control of your financial life, practice budgeting, obtain a GED, and much more.',
      link: '/',
    },
  ];

  let y: number;
</script>

<svelte:window bind:scrollY={y} />

<section class="showcase">
  <img
    style="transform: translateY({y * 0.2}px)"
    class="banner"
    src="/images/foodbank.png"
    alt="Christian Neighbors"
  />
  <h1>What We Do</h1>
  <h2 class="heading">
    Our Mission is to provide local families in need with Food, Emergency Financial Assistance and
    Skill Building Education to create Self Sufficiency.
  </h2>
  {#each cards as card}
    <div class="card-wrapper">
      <div class="card">
        <div class="card-content">
          <div class="content-left">
            <h2>{card.heading}</h2>
            <img src={card.img} alt={card.alt} />
          </div>
          <div class="content-right">
            <h2>{card.subheading}</h2>
            <p>{card.content}</p>
            <a href={card.link}>{card.heading}</a>
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>

<style lang="scss">
  section {
    @include component;
    background-color: rgba($color: $gray, $alpha: 0.6);
    height: fit-content;
    margin-bottom: 0;

    .banner {
      position: absolute;
      left: 0;
      height: 95%;
      width: 90%;
      margin: 3rem 5rem;
      object-fit: cover;
      pointer-events: none;
      opacity: 0.2;
      border-radius: 5px;
    }

    h1 {
      @include h1-primary;
    }

    h2 {
      @include h2-primary;
    }

    .heading {
      @include h2-primary;
      background-color: $deep-blue;
      border-radius: 5px;
    }

    .card-wrapper {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0;

      .card {
        width: 80%;
        max-width: 75rem;
        height: 400px;
        border-radius: 40px;
        background-color: $white;
        box-shadow: -6px -6px 20px rgba($deep-blue, 0.5), 6px 6px 20px rgba($deep-blue, 0.2);
        text-align: left;

        .card-content {
          background-color: $white;
          border-radius: 40px;
          position: relative;
          text-align: center;
          display: inline-grid;
          width: 100%;
          height: 100%;
          grid-template-columns: 33% 66%;

          .content-left {
            background-color: rgba($color: $gray, $alpha: 1);
            border-top-left-radius: 38px;
            border-bottom-left-radius: 38px;
            max-width: 25rem;
            height: 400px;

            img {
              max-height: 250px;
              border-radius: 10px;
              box-shadow: -3px -3px 5px rgba($deep-blue, 0.5), 3px 3px 5px rgba($deep-blue, 0.2);
            }
          }

          .content-right {
            color: $dark-blue;
            margin: auto 0;

            p {
              width: 80%;
              margin: auto;
              font-size: 20px;
            }

            a {
              @include btnPrimary;
              width: fit-content;
              margin: 2rem auto 0 auto;
            }
          }
        }
      }
    }

    h2 {
      @include h2-primary;
    }
  }
</style>
