<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { navLinks } from './links';
  import { goto } from '$app/navigation';

  const dispatch = createEventDispatcher();

  function handleMobileToggle() {
    dispatch('toggle');
  }

  function toggleDropdown(link: string) {
    const dropdown = document.getElementById(link);
    const allDropdowns = document.getElementsByClassName('dd');

    // hide any open dropdowns
    for (let i = 0; i < allDropdowns.length; i += 1) {
      if (allDropdowns && allDropdowns.item(i)?.id !== link) {
        setTimeout(() => {
          // eslint-disable-next-line
          // @ts-ignore
          allDropdowns.item(i).style.display = 'none';
        }, 200);
      }
    }

    if (link === 'services') goto('/services');
    if (link === 'donate') goto('/donate');
    if (dropdown) {
      if (dropdown.style.display === 'block') dropdown.style.display = 'none';
      else dropdown.style.display = 'block';
    }
  }
</script>

<header id="nav-header" class="fixed w-full flex-none">
  <div class="app-bar bg-surface-100-800-token flex h-16 flex-col space-y-4 px-4 shadow-2xl">
    <div class="app-bar-row-main my-auto grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <div class="app-bar-slot-lead flex items-center space-x-4">
        <a class="img-container my-auto w-12" href="/">
          <img loading="lazy" src="/images/logo.png" alt="Christian Neighbors logo" />
        </a>
      </div>
      <div class="app-bar-slot-default invisible flex items-center space-x-4 lg:visible">
        <a class="branding mx-auto flex items-center gap-2 text-2xl" href="/">
          <h1 class="h1-primary text-primary-600">Christian</h1>
          <h1 class="h1-primary text-surface-500">Neighbors</h1>
        </a>
      </div>
      <div class="app-bar-slot-trail flex flex-none items-center space-x-4">
        <ul class="invisible my-auto flex items-center pr-12 lg:visible">
          {#each navLinks as link}
            {#if !link.mobileOnly}
              <button
                on:click={() => toggleDropdown(link.class)}
                class={`${link.class} first:btn-primary ml-1 mr-5 text-xl text-primary-500 first:text-xl hover:text-secondary-500 first:active:border-none first:active:text-white`}
              >
                {link.name}
                {#if link.dropdown && link.dropdown.length > 0}
                  <div
                    class={`dropdown-${link.name} dd absolute top-14 hidden min-w-44 rounded bg-primary-500 shadow-sm`}
                    data-testid={`dropdown-${link.name}`}
                    id={link.name.toLowerCase().split(' ')[0]}
                  >
                    {#each link.dropdown as item}
                      <a
                        href={item.path}
                        class="block px-4 py-3 text-left text-sm text-white hover:text-tertiary-500"
                        >{item.name}</a
                      >
                    {/each}
                  </div>
                {/if}
              </button>
            {/if}
          {/each}
        </ul>
        <div class="mobile-menu absolute right-4 my-auto flex lg:invisible">
          <button
            on:click={handleMobileToggle}
            id="mobile-toggle"
            class="m-auto flex h-10 cursor-pointer flex-col justify-evenly border-none bg-none"
          >
            <span id="top-bar" class="h-[3px] w-8 bg-primary-900 transition-all ease-linear" />
            <span id="center-bar" class="h-[3px] w-8 bg-primary-900 transition-all ease-linear" />
            <span id="bottom-bar" class="h-[3px] w-8 bg-primary-900 transition-all ease-linear" />
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
