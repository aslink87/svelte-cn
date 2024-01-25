<script lang="ts">
  import '../app.pcss';
  import Navigation from '../components/navigation/Navigation.svelte';
  import Footer from '../components/footer/Footer.svelte';
  import Signup from '../components/signup/Signup.svelte';
  import { navLinks } from '$/components/navigation/links';
  import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/admin'}
  <Navigation></Navigation>
{/if}
<main class="main" data-testid="main">
  <slot />
  {#if $page.url.pathname !== '/admin'}
    <Signup></Signup>
  {/if}
  <div class="ctct-form" data-form-id="04419863-6320-44a0-8a5c-2bd489ba627b"></div>
</main>
{#if $page.url.pathname !== '/admin'}
  <Footer></Footer>
{/if}
<section class="mobile-menu" id="mobile-menu">
  <ul>
    {#each navLinks as link}
      {#if link.mobile}
        <li>
          <a href={link.path}><h2>{link.name}</h2></a>
        </li>
      {/if}
    {/each}
  </ul>
</section>

<style lang="scss">
  main {
    background-color: $deep-blue;
    margin: 0;
    box-sizing: border-box;
    padding-top: 3rem;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    box-sizing: border-box;
    text-decoration: none;
  }
  :global(body) {
    font-family: Inter-Regular, 'Segoe UI Mono', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    color: $white;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
  }

  .mobile-menu {
    position: fixed;
    max-width: 45em;
    top: 4rem;
    bottom: 0;
    text-align: center;
    background-color: $gray;
    z-index: 300;
    right: -100%;
    transition: right 0.3s ease-in-out;

    ul {
      padding: 2em 4em;
      list-style-type: none;

      a {
        text-decoration: none;
      }

      h2 {
        @include h2-primary;
        color: $white;
        font-size: 24px !important;
        margin: 2rem auto;
      }
    }
  }
</style>
