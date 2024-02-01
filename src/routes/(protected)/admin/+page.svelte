<script lang="ts">
  import Seo from '../../SEO.svelte';
  import { seo } from '$lib/stores/Seo';
  import { page } from '$app/stores';
  import { updated } from '$lib/stores/Admin';
  import { signOut } from '@auth/sveltekit/client';
  import Users from '$/components/admin/Users.svelte';
  import Frontpage from '$/components/admin/Frontpage.svelte';
  import type { AdminPageType } from '$/types';
  import Newsletters from '$/components/admin/Newsletters.svelte';
  import Calendar from '$/components/admin/Calendar.svelte';
  import Blog from '$/components/admin/Blog.svelte';
  import Supper from '$/components/admin/Supper.svelte';
  import Needs from '$/components/admin/Needs.svelte';
  import PantryCalendar from '$/components/admin/PantryCalendar.svelte';

  seo.set({
    title: 'CN - Admin',
    description: 'Admin Page for Christian Neighbors',
  });

  // subsribe to updated store, when a child has been updated successfully alert the user and reload the page
  updated.subscribe((val) => {
    if (val === true) {
      alert('Updated');
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }, 1000);
    }
  });

  const links = {
    admins: false,
    frontpage: false,
    newsletters: false,
    calendar: false,
    blog: false,
    supper: false,
    pantryneeds: false,
    pantrycalendar: false,
  };

  // when the user clicks a nav button, set all links to false and the clicked link to true
  function handleNavClick(index: string) {
    for (let i = 0; i < Object.keys(links).length; i += 1) {
      links[Object.keys(links)[i] as keyof typeof links] = false;
    }

    links[index as keyof typeof links] = !links[index as keyof typeof links];
  }

  export let data: AdminPageType;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="admin">
  <nav>
    <button on:click={() => signOut()}>
      <p>Logout</p>
    </button>
    <button><a href="/">To website...</a></button>
    {#each data.links as link}
      <button on:click={() => handleNavClick(link)}>
        {link}
      </button>
    {/each}
  </nav>
  <div class="admin-body">
    <h1>Administration Page</h1>
    {#if $page.data.session?.user?.settings.manager && links.admins}
      <Users data={data.users} />
    {:else if !$page.data.session?.user?.settings.manager && links.admins}
      <p>You do not have access to this page</p>
    {/if}
    {#if links.frontpage}
      <Frontpage />
    {/if}
    {#if links.newsletters}
      <Newsletters />
    {/if}
    {#if links.calendar}
      <Calendar />
    {/if}
    {#if links.blog}
      <Blog />
    {/if}
    {#if links.supper}
      <Supper />
    {/if}
    {#if links.pantryneeds}
      <Needs />
    {/if}
    {#if links.pantrycalendar}
      <PantryCalendar />
    {/if}
  </div>
</section>

<!-- <style lang="scss"> -->
<!--   section { -->
<!--     @include center; -->
<!--     min-height: 100vh; -->
<!---->
<!--     nav { -->
<!--       position: fixed; -->
<!--       width: 10rem; -->
<!--       height: 100vh; -->
<!--       z-index: 2; -->
<!--       top: 0; -->
<!--       background-color: rgba($color: $gray, $alpha: 0.6); -->
<!--       padding: 2rem 0; -->
<!---->
<!--       button, -->
<!--       a { -->
<!--         @include p; -->
<!--         background: none; -->
<!--         border: none; -->
<!--         text-transform: capitalize; -->
<!--         font-size: 24px; -->
<!--         color: $white; -->
<!--         margin: 0.8rem 0; -->
<!--         text-decoration: none; -->
<!--         width: 100%; -->
<!---->
<!--         &:hover { -->
<!--           color: $light-blue; -->
<!--         } -->
<!--       } -->
<!--     } -->
<!---->
<!--     .admin-body { -->
<!--       padding-left: 10rem; -->
<!--       h1 { -->
<!--         @include h1-primary; -->
<!--         background-color: $white; -->
<!--         color: $deep-blue; -->
<!--       } -->
<!--     } -->
<!--   } -->
<!-- </style> -->
