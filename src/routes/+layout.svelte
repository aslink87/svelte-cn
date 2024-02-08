<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { AppShell, Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
  import Navigation from '$/components/navigation/Navigation.svelte';
  import Footer from '$/components/footer/Footer.svelte';
  import Signup from '$/components/signup/Signup.svelte';
  import { navLinks } from '$/components/navigation/links';

  initializeStores();
  const drawerStore = getDrawerStore();

  function openDrawer() {
    drawerStore.open();
  }
  function handleMobileRouteClick(path: string) {
    goto(path);
    drawerStore.close();
  }
</script>

<Drawer>
  <section class="mobile-menu bottom-0 top-16 h-full bg-surface-600 text-center" id="mobile-menu">
    <ul class="flex flex-col flex-wrap px-8 py-16">
      {#each navLinks as link}
        {#if link.mobile}
          <button on:click={() => handleMobileRouteClick(link.path)}>
            <h2 class="mx-auto my-8 text-2xl font-bold text-white">{link.name}</h2>
          </button>
        {/if}
      {/each}
    </ul>
  </section>
</Drawer>
<AppShell>
  <svelte:fragment slot="header">
    {#if $page.url.pathname !== '/admin'}
      <Navigation on:toggle={openDrawer} />
    {/if}
  </svelte:fragment>
  <main class="main m-0 box-border min-h-full bg-primary-800 px-2 pt-16 text-lg text-white md:px-4">
    <slot />
    {#if $page.url.pathname !== '/admin'}
      <Signup></Signup>
    {/if}
  </main>
  <svelte:fragment slot="footer">
    {#if $page.url.pathname !== '/admin'}
      <Footer></Footer>
    {/if}
  </svelte:fragment>
</AppShell>
<!-- <main class="main" data-testid="main"> -->
<!--   <slot /> -->
<!--   {#if $page.url.pathname !== '/admin'} -->
<!--     <Signup></Signup> -->
<!--   {/if} -->
<!--   <div class="ctct-form" data-form-id="04419863-6320-44a0-8a5c-2bd489ba627b"></div> -->
<!-- </main> -->

<!-- <style lang="scss"> -->
<!--   main { -->
<!--     background-color: $deep-blue; -->
<!--     margin: 0; -->
<!--     box-sizing: border-box; -->
<!--     padding-top: 3rem; -->
<!--     text-rendering: optimizeSpeed; -->
<!--     line-height: 1.5; -->
<!--     box-sizing: border-box; -->
<!--     text-decoration: none; -->
<!--   } -->
<!--   :global(body) { -->
<!--     font-family: Inter-Regular, 'Segoe UI Mono', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, -->
<!--       'Open Sans', 'Helvetica Neue', sans-serif; -->
<!--     font-size: 18px; -->
<!--     color: $white; -->
<!--     width: 100%; -->
<!--     margin: 0; -->
<!--     box-sizing: border-box; -->
<!--   } -->
<!---->
<!--   .mobile-menu { -->
<!--     position: fixed; -->
<!--     max-width: 45em; -->
<!--     top: 4rem; -->
<!--     bottom: 0; -->
<!--     text-align: center; -->
<!--     background-color: $gray; -->
<!--     z-index: 300; -->
<!--     right: -100%; -->
<!--     transition: right 0.3s ease-in-out; -->
<!---->
<!--     ul { -->
<!--       padding: 2em 4em; -->
<!--       list-style-type: none; -->
<!---->
<!--       a { -->
<!--         text-decoration: none; -->
<!--       } -->
<!---->
<!--       h2 { -->
<!--         @include h2-primary; -->
<!--         color: $white; -->
<!--         font-size: 24px !important; -->
<!--         margin: 2rem auto; -->
<!--       } -->
<!--     } -->
<!--   } -->
<!-- </style> -->
