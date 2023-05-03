<script lang="ts">
  import Seo from '../../SEO.svelte';
  import { seo } from '$lib/stores/Seo';
  import { page } from '$app/stores';
  import type { AdminPageType } from '$/types';
  import { signOut } from '@auth/sveltekit/client';
  import Users from '$/components/admin/Users.svelte';
  import Frontpage from '$/components/admin/Frontpage.svelte';

  seo.set({
    title: 'CN - Admin',
    description: 'Admin Page for Christian Neighbors',
  });

  const links = {
    admins: false,
    frontpage: false,
  };

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
    {#each data.links as link}
      <button on:click={() => handleNavClick(link)}>
        {link}
      </button>
    {/each}
  </nav>
  <div class="admin-body">
    <h1>Hello from Admin page</h1>
    {#if $page.data.session?.user?.settings.manager && links.admins}
      <Users data={data.users} />
    {/if}
    {#if links.frontpage}
      <Frontpage />
    {/if}
  </div>
</section>

<style lang="scss">
  section {
    @include center;
    min-height: 100vh;

    nav {
      position: fixed;
      width: 10rem;
      height: 100vh;
      z-index: 2;
      top: 0;
      background-color: rgba($color: $gray, $alpha: 0.6);
      padding: 2rem 0;

      button {
        @include p;
        background: none;
        border: none;
        text-transform: capitalize;
        font-size: 24px;
        color: $white;
        margin: 0.5rem 0;

        &:hover {
          color: $light-blue;
        }
      }
    }

    .admin-body {
      padding-left: 10rem;
      h1 {
        @include h1-primary;
      }
    }
  }
</style>
