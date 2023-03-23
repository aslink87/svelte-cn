<script>
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
  import { navLinks } from './links';
</script>

<nav data-testid="nav">
  <div class="img-container">
    <img loading="lazy" src="/images/logo.png" alt="Christian Neighbors logo" />
  </div>
  <div class="branding">
    <h1>Christian</h1>
    <h1>Neighbors</h1>
  </div>
  <ul>
    {#each navLinks as link}
      <li>
        <a href={link.path}>{link.name}</a>
      </li>
    {/each}
  </ul>
  {#if $page.data.session?.user?.email === 'adam.slinkman@gmail.com'}
    <p>Thanks for logging in Adam</p>
    <button on:click={() => signOut()} class="cursor-pointer btn variant-filled-primary">
      <p>Logout</p>
    </button>
  {:else}
    <button on:click={() => signIn('google')} class="cursor-pointer btn variant-filled-primary">
      <p>Login</p>
    </button>
  {/if}
</nav>

<style lang="scss">
  nav {
    position: fixed;
    display: flex;
    overflow: hidden;
    width: 100%;
    justify-content: space-between;
    background-color: $white;
    color: $dark-blue;
    border-bottom: solid 2px $deep-blue;
    height: 4rem;
    z-index: 2;

    .img-container {
      max-width: 70px;
      padding-left: 3em;

      img {
        width: 100%;
      }
    }

    .branding {
      display: flex;
      gap: 0.5em;

      h1 {
        margin: auto 0;
        color: $deep-blue;
        @include h1-primary;
      }

      h1:last-of-type {
        color: $light-blue;
      }
    }

    ul {
      display: flex;
      margin: auto 0;
      padding-right: 3em;
      li {
        list-style-type: none;
        margin: auto 0;

        a {
          text-decoration: none;
          color: $deep-blue;
          margin: 0 0.3em 0 1em;
          font-size: 1.2rem;
          font-family: Inter-Regular;
          &:hover {
            color: $light-blue;
          }
          &:active {
            border-bottom: solid 2px $yellow;
          }
        }
      }
    }

    p {
      margin: auto 0;
    }

    button {
      @include btnPrimary;
      height: 1.5rem;
      margin: auto 1em auto 0;
    }
  }
</style>
