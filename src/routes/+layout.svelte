<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import {
    AppShell,
    Drawer,
    Toast,
    getDrawerStore,
    initializeStores,
    type ToastSettings,
  } from '@skeletonlabs/skeleton';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import Navigation from '$/components/navigation/Navigation.svelte';
  import Footer from '$/components/footer/Footer.svelte';
  // import Signup from '$/components/signup/Signup.svelte';
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

  const t: ToastSettings = {
    message: '',
    timeout: 10000,
    background: 'bg-surface-600',
    classes: 'text-white',
    action: {
      label: 'Join our Newsletter',
      response: () =>
        window.location.assign('https://lp.constantcontactpages.com/su/su4gVlj/mailingList'),
    },
  };

  const toastStore = getToastStore();
  toastStore.trigger(t);
</script>

<Drawer>
  <section
    class="mobile-menu bottom-0 top-16 h-full overflow-scroll bg-surface-600 text-center"
    id="mobile-menu"
  >
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
  <main
    class="main m-0 box-border min-h-full overflow-auto bg-primary-800 px-2 pt-16 text-lg text-white md:px-4"
  >
    <slot />
    <!-- {#if $page.url.pathname !== '/admin'} -->
    <!--   <Signup></Signup> -->
    <!-- {/if} -->
  </main>
  <svelte:fragment slot="footer">
    {#if $page.url.pathname !== '/admin'}
      <Footer></Footer>
    {/if}
  </svelte:fragment>
</AppShell>

<Toast />
