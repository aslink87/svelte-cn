<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
</script>

<footer data-testid="footer">
  <div class="svg">
    <div class="footer-wrapper">
      <div class="left-container">
        <div class="icon-wrapper">
          <a
            href="https://www.facebook.com/ChristianNeighborsPlainwell/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-label="facebook logo"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 512 512"
              ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />Christian Neighbors Facebook</svg
            >
          </a>
          <a
            href="https://www.instagram.com/christian_neighbors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-label="instagram logo"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 448 512"
              ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />Christian Neighbors Instagram</svg
            >
          </a>
        </div>
        <p>Christian Neighbors, ©2023</p>
      </div>
      <div class="spacer" />
      <div class="right-container">
        <div>
          <h2>Address</h2>
          <p>282 12th Street Plainwell, MI 49080 PO Box 53</p>
          <h2>Phone</h2>
          <p>1-269-685-4166</p>
          <h2>Fax</h2>
          <p>1-269-685-4178</p>
        </div>
        <div>
          <h2>Hours</h2>
          <p><strong>Mon:</strong> 10-Noon, 4-6</p>
          <p><strong>Tue:</strong> 10-Noon</p>
          <p><strong>Wed:</strong> Closed</p>
          <p><strong>Thu:</strong> 2-5</p>
          <p><strong>Fri:</strong> Closed</p>
          {#if $page.data.session?.user}
            <button on:click={() => signOut()}>
              <p>Logout</p>
            </button>
            <p class="welcome">Thanks for logging in {$page.data.session.user.name}</p>
          {:else}
            <button
              on:click={() => signIn('google')}
              class="cursor-pointer btn variant-filled-primary"
            >
              <p>Login</p>
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: $deep-blue;

    .svg {
      @media (min-width: 1600px) {
        background-image: url('/images/wavesHand.png');
        aspect-ratio: 2100/300;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        position: relative;
        background-color: transparent;
      }
      background-color: $white;

      .footer-wrapper {
        width: 100%;
        margin: 0 2rem;
        display: flex;
        color: $dark-blue;
        vertical-align: bottom;
        justify-content: space-between;

        @include xs {
          flex-wrap: wrap;
          margin: 0;
          padding: 0 1rem;
        }

        @include sm {
          flex-wrap: wrap;
        }

        @include xl {
          justify-content: normal;
        }

        .left-container {
          display: flex;
          align-self: baseline;
          flex-wrap: wrap;
          margin: auto 0 2rem 0;

          p {
            width: 100%;
            margin: 0;
            font-size: 12px;
          }

          .icon-wrapper {
            margin-bottom: 1rem;
            display: flex;
            gap: 1rem;

            .icon {
              width: 3rem;
              fill: $dark-blue;

              &:hover {
                fill: $yellow;
                transition: all 0.2s ease-out;
              }
            }
          }

          @include xs {
            padding-top: 1rem;
            @include center;
            margin: auto;
          }

          @include sm {
            padding-top: 1rem;
            @include center;
            margin: auto;
          }
        }

        @media (min-width: 1600px) and (max-width: 1799px) {
          .spacer {
            width: 40%;
          }
        }
        @media (min-width: 1800px) {
          .spacer {
            width: 45%;
          }
        }

        .right-container {
          display: flex;
          flex-wrap: wrap;
          flex-flow: row;
          gap: 2rem;
          margin: auto 0 2rem 0;

          button {
            background: none;
            border: none;
            color: $dark-blue;
            cursor: pointer;
            padding: 0;

            p {
              font-size: 12px;
            }
          }

          p {
            margin: auto 0;
            font-size: 14px;
          }

          .welcome {
            font-size: 10px;
          }

          h2 {
            @include h2-primary;
            margin-bottom: 0.3rem;
            font-size: 18px;
          }

          @include xs {
            padding-bottom: 1rem;
            margin: auto;
            flex-wrap: wrap;
          }

          @include sm {
            padding-bottom: 1rem;
            margin: auto;
          }
        }
      }
    }
  }
</style>
