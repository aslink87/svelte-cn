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

<section class="showcase" data-testid="showcase">
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
      height: 90%;
      width: 90%;
      margin: 2rem 5rem;
      object-fit: cover;
      pointer-events: none;
      opacity: 0.2;
      border-radius: 5px;

      @include xs {
        display: none;
      }
      @include sm {
        display: none;
      }
      @include md {
        display: none;
      }
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
        box-shadow:
          -6px -6px 20px rgba($deep-blue, 0.5),
          6px 6px 20px rgba($deep-blue, 0.2);
        text-align: left;

        .card-content {
          background-color: $white;
          border-radius: 40px;
          position: relative;
          text-align: center;
          display: flex;
          width: 100%;
          height: 100%;

          .content-left {
            background-color: rgba($color: $gray, $alpha: 1);
            border-top-left-radius: 38px;
            border-bottom-left-radius: 38px;
            max-width: 25rem;
            display: flex;
            flex-flow: column;

            img {
              margin: auto 1rem;
              max-height: 250px;
              object-fit: scale-down;
              border-radius: 10px;
            }
          }

          .content-right {
            color: $dark-blue;
            margin: auto 0;
            width: 90%;

            p {
              @include p;
              margin: auto 1rem;
            }

            a {
              @include btn-primary;
              @include a;
              margin: 2rem auto 0 auto;
              width: fit-content;
            }
          }

          @include xs {
            display: flex;
            flex-wrap: wrap;

            .content-left {
              width: 100%;
              max-width: unset;
              height: fit-content;
              border-bottom-left-radius: 0;
              border-top-right-radius: 38px;

              img {
                height: 150px;
              }
            }

            .content-right {
              width: 100%;
              height: fit-content;
              padding-bottom: 1rem;
            }
          }
          @include sm {
            display: flex;
            flex-wrap: wrap;

            .content-left {
              width: 100%;
              max-width: unset;
              height: fit-content;
              border-bottom-left-radius: 0;
              border-top-right-radius: 38px;

              img {
                height: 200px;
              }
            }

            .content-right {
              height: fit-content;
              padding-bottom: 1rem;
              margin: auto;
            }
          }
          @include md {
            display: flex;
            flex-wrap: wrap;

            .content-left {
              width: 100%;
              max-width: unset;
              height: fit-content;
              border-bottom-left-radius: 0;
              border-top-right-radius: 38px;

              img {
                height: 300px;
              }
            }

            .content-right {
              height: fit-content;
              padding-bottom: 1rem;
              margin: auto;
            }
          }

          @include lg {
            .content-left {
              min-width: 400px;
            }
            .content-right {
              p {
                text-align: left;
              }
            }
          }

          @include xl {
            .content-left {
              min-width: 400px;
            }
          }
        }
        @include xs {
          height: fit-content;
          width: 100%;
        }
        @include sm {
          height: fit-content;
          width: 100%;
        }
        @include md {
          height: fit-content;
          width: 100%;
        }
      }
    }

    h2 {
      @include h2-primary;
    }

    @include xs {
      margin: 0;
      padding: 0.5rem;
    }
  }
</style>
