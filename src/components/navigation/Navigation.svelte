<script lang="ts">
  import { navLinks } from './links';

  // Retrieve mobileToggle state from store
  // TODO: Currently this store is unneccesary. If it continues to be unneccesary, remove it.
  import { mobileToggle } from '$lib/stores/Mobile';

  let mobileMenuOpen = false;

  function handleMobileToggle() {
    mobileToggle.update((n) => !n);

    mobileMenuOpen = !mobileMenuOpen;

    const middle = document.getElementById('center-bar');
    if (middle) middle.style.display = mobileMenuOpen ? 'none' : 'block';
    const bottom = document.getElementById('bottom-bar');
    if (bottom) {
      bottom.style.transform = mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    }
    const top = document.getElementById('top-bar');
    if (top) {
      top.style.transform = mobileMenuOpen
        ? 'translateY(5px) translateX(6px)'
        : 'translateY(0px) translateX(0px)';
      top.style.width = mobileMenuOpen ? '1.2rem' : '2rem';
    }

    const drawer = document.getElementById('mobile-menu');
    if (drawer) {
      drawer.style.right = mobileMenuOpen ? '0%' : '-100%';
    }
  }
</script>

<nav data-testid="nav">
  <a class="img-container" href="/">
    <img loading="lazy" src="/images/logo.png" alt="Christian Neighbors logo" />
  </a>
  <a class="branding" href="/">
    <h1>Christian</h1>
    <h1>Neighbors</h1>
  </a>
  <ul>
    {#each navLinks as link}
      {#if !link.mobileOnly}
        <button>
          <a href={link.path}>{link.name}</a>
        </button>
      {/if}
    {/each}
  </ul>
  <div class="mobile-menu">
    <button on:click={handleMobileToggle} id="mobile-toggle">
      <span id="top-bar" />
      <span id="center-bar" />
      <span id="bottom-bar" />
    </button>
  </div>
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
      display: none;
      gap: 0.5em;
      text-decoration: none;

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
      display: none;
      margin: auto 0;
      padding-right: 3em;

      button {
        margin: auto 0;
        border: none;
        background: none;

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
    .mobile-menu {
      display: flex;
      width: 30%;
      height: 100%;
      justify-content: flex-end;
      margin-right: 1rem;
      align-items: center;

      button {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        cursor: pointer;
        height: 40px;
        background: none;
        border: none;

        span {
          width: 2rem;
          height: 3px;
          background: $deep-blue;
          transition: all 0.2s linear;
        }
      }
    }

    @include lg {
      ul {
        display: flex;
      }
      .branding {
        display: flex;
      }
      .mobile-menu {
        display: none;
      }
    }
    @include xl {
      ul {
        display: flex;
      }
      .branding {
        display: flex;
      }
      .mobile-menu {
        display: none;
      }
    }
  }
</style>
