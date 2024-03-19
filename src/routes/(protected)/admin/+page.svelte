<script lang="ts">
  import { onMount } from 'svelte';
  import Seo from '../../SEO.svelte';
  import { seo } from '$lib/stores/Seo';
  import { page } from '$app/stores';
  import { signOut } from '@auth/sveltekit/client';
  import Users from '$/components/admin/Users.svelte';
  import Frontpage from '$/components/admin/Frontpage.svelte';
  import Newsletters from '$/components/admin/Newsletters.svelte';
  import Calendar from '$/components/admin/Calendar.svelte';
  import Blog from '$/components/admin/Blog.svelte';
  import Needs from '$/components/admin/Needs.svelte';
  import PantryCalendar from '$/components/admin/PantryCalendar.svelte';
  import type { AdminPageType } from '$/types';

  seo.set({
    title: 'CN - Admin',
    description: 'Admin Page for Christian Neighbors',
  });

  onMount(() => {
    window.scrollTo(0, 0);
  });

  const links = {
    admins: false,
    frontpage: false,
    newsletters: false,
    calendar: false,
    blog: false,
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
  export let form: { success: boolean } | null;
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="admin center min-h-full w-full pl-[12rem]">
  <nav class="fixed left-0 top-0 h-full w-[12rem] bg-surface-500 py-8">
    <button on:click={() => signOut()}>
      <p class="p-primary my-3 capitalize">Logout</p>
    </button>
    <button class="p-primary my-3 w-full capitalize"><a href="/">To website...</a></button>
    {#each data.links as link}
      <button
        class="p-primary variant-filled-primary btn my-3 w-[90%] p-2 capitalize"
        on:click={() => handleNavClick(link.name)}
      >
        {link.label}
      </button>
    {/each}
  </nav>
</section>

<section class="admin-wrapper ml-[12rem]">
  <div class="admin-head center border-b-2 py-4">
    <h1 class="h1-primary">Administration Page</h1>
  </div>
  <div class="admin-body h-screen">
    {#if $page.data.session?.user?.settings.manager && links.admins}
      <Users data={data.users} />
    {:else if !$page.data.session?.user?.settings.manager && links.admins}
      <p>You do not have access to this page</p>
    {/if}
    {#if links.frontpage}
      <Frontpage heroData={data.hero} {form} />
    {/if}
    {#if links.newsletters}
      <Newsletters {form} />
    {/if}
    {#if links.calendar}
      <Calendar calendarData={data.calendar} {form} />
    {/if}
    {#if links.blog}
      <Blog {form} />
    {/if}
    {#if links.pantryneeds}
      <Needs needsData={data.needs} {form} />
    {/if}
    {#if links.pantrycalendar}
      <PantryCalendar {form} />
    {/if}
  </div>
</section>
