<script lang="ts">
  import { navLinks } from './links';

  // Retrieve mobileToggle state from store
  // TODO: Currently this store is unneccesary. If it continues to be unneccesary, remove it.
  import { mobileToggle } from '$lib/stores/Mobile';

  let mobileMenuOpen = false;
  let about = false;
  let support = false;

  function handleMobileToggle() {
    mobileToggle.update((n) => !n);

    mobileMenuOpen = !mobileMenuOpen;

    const middle = document.getElementById('center-bar');
    if (middle) middle.style.display = mobileMenuOpen ? 'none' : 'block';
    const bottom = document.getElementById('bottom-bar');
    if (bottom) {
      bottom.style.transform = mobileMenuOpen ? 'rotate(90deg) translateX(-5px)' : 'rotate(0deg)';
    }
    const top = document.getElementById('top-bar');
    if (top) {
      top.style.transform = mobileMenuOpen
        ? 'translateY(2px) translateX(6px)'
        : 'translateY(0px) translateX(0px)';
      top.style.width = mobileMenuOpen ? '1.2rem' : '2rem';
    }

    const drawer = document.getElementById('mobile-menu');
    if (drawer) {
      drawer.style.right = mobileMenuOpen ? '0%' : '-100%';
    }
  }

  function showDropdown(link: string) {
    const allDropdowns = document.getElementsByClassName('dd');

    // hide any open dropdowns
    for (let i = 0; i < allDropdowns.length; i += 1) {
      // eslint-disable-next-line
      // @ts-ignore
      allDropdowns.item(i).style.display = 'none';
    }

    // show the dropdown for the link that was hovered
    const dropdown = document.getElementById(link);
    if (dropdown) {
      dropdown.style.display = 'block';
    }
  }
  function hideDropdown(link: string) {
    const dropdown = document.getElementById(link);
    setTimeout(() => {
      if (dropdown && !about && link === 'about') {
        dropdown.style.display = 'none';
      }
      if (dropdown && !support && link === 'support') {
        dropdown.style.display = 'none';
      }
    }, 500);
  }
</script>

<header id="nav-header" class="flex-none">
  <div class="app-bar bg-surface-100-800-token flex h-16 flex-col space-y-4 px-4 shadow-2xl">
    <div class="app-bar-row-main my-auto grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <div class="app-bar-slot-lead flex items-center space-x-4">
        <a class="img-container my-auto w-12" href="/">
          <img loading="lazy" src="/images/logo.png" alt="Christian Neighbors logo" />
        </a>
      </div>
      <div class="app-bar-slot-default invisible flex items-center space-x-4 lg:visible">
        <a class="branding mx-auto flex items-center gap-2 text-2xl font-bold" href="/">
          <h1 class="text-primary-600">Christian</h1>
          <h1 class="text-tertiary-600">Neighbors</h1>
        </a>
      </div>
      <div class="app-bar-slot-trail flex flex-none items-center space-x-4">
        <ul class="invisible my-auto flex items-center pr-12 lg:visible">
          {#each navLinks as link}
            {#if !link.mobileOnly}
              <li
                on:mouseenter={() => showDropdown(link.class)}
                on:mouseleave={() => hideDropdown(link.class)}
                class="ml-1 mr-5 text-primary-500 first:variant-filled-primary first:btn first:btn-sm first:bg-primary-500/70 first:text-white first:shadow-none hover:text-secondary-500 first:hover:text-white"
              >
                <a
                  href={link.path}
                  class={`${link.class} text-xl active:border-2 active:border-b-tertiary-500 active:text-tertiary-500`}
                  data-sveltekit-preload-data="hover">{link.name}</a
                >
                {#if link.dropdown && link.dropdown.length > 0}
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    class={`dropdown-${link.name} dd absolute top-14 hidden min-w-44 rounded bg-primary-500 shadow-sm`}
                    data-testid={`dropdown-${link.name}`}
                    id={link.name.toLowerCase().split(' ')[0]}
                    on:mouseenter={() => {
                      if (link.name.toLowerCase().split(' ')[0] === 'about') about = true;
                      if (link.name.toLowerCase().split(' ')[0] === 'support') support = true;
                    }}
                    on:mouseleave={() => {
                      if (link.name.toLowerCase().split(' ')[0] === 'about') about = false;
                      if (link.name.toLowerCase().split(' ')[0] === 'support') support = false;
                    }}
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
              </li>
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

<!-- <style lang="scss"> -->
<!--   nav { -->
<!--     position: fixed; -->
<!--     display: flex; -->
<!--     width: 100%; -->
<!--     justify-content: space-between; -->
<!--     background-color: $white; -->
<!--     color: $dark-blue; -->
<!--     border-bottom: solid 2px $deep-blue; -->
<!--     height: 4rem; -->
<!--     z-index: 2; -->
<!---->
<!--     .img-container { -->
<!--       max-width: 70px; -->
<!--       padding-left: 3em; -->
<!---->
<!--       img { -->
<!--         width: 100%; -->
<!--       } -->
<!---->
<!--       @include xs { -->
<!--         padding-left: 0; -->
<!--         margin-left: 40%; -->
<!--       } -->
<!--       @include sm { -->
<!--         padding-left: 0; -->
<!--         margin-left: 40%; -->
<!--       } -->
<!--     } -->
<!---->
<!--     .branding { -->
<!--       display: none; -->
<!--       gap: 0.5em; -->
<!--       text-decoration: none; -->
<!---->
<!--       h1 { -->
<!--         margin: auto 0; -->
<!--         color: $deep-blue; -->
<!--         @include h1-primary; -->
<!--       } -->
<!---->
<!--       h1:last-of-type { -->
<!--         color: $light-blue; -->
<!--       } -->
<!--     } -->
<!---->
<!--     ul { -->
<!--       display: none; -->
<!--       margin: auto 0; -->
<!--       padding-right: 3em; -->
<!---->
<!--       li { -->
<!--         list-style-type: none; -->
<!--         margin: auto 0; -->
<!--         border: none; -->
<!--         background: none; -->
<!---->
<!--         &:nth-child(1) { -->
<!--           a { -->
<!--             @include btn-primary; -->
<!--             &:hover { -->
<!--               color: $white; -->
<!--               box-shadow: none; -->
<!--             } -->
<!--           } -->
<!--         } -->
<!---->
<!--         a { -->
<!--           text-decoration: none; -->
<!--           color: $deep-blue; -->
<!--           margin: 0 0.3em 0 1em; -->
<!--           font-size: 1.2rem; -->
<!--           font-family: Inter-Regular; -->
<!--           &:hover { -->
<!--             color: $light-blue; -->
<!--           } -->
<!--           &:active { -->
<!--             border-bottom: solid 2px $yellow; -->
<!--           } -->
<!--         } -->
<!--         .dropdown-About { -->
<!--           top: 3.5rem; -->
<!--           @extend %dropdown; -->
<!--         } -->
<!--         .dropdown-Services { -->
<!--           @extend %dropdown; -->
<!--         } -->
<!--         .dropdown-Support { -->
<!--           top: 3.5rem; -->
<!--           right: 1rem; -->
<!--           @extend %dropdown; -->
<!--         } -->
<!--         %dropdown { -->
<!--           display: none; -->
<!--           position: absolute; -->
<!--           background-color: $deep-blue; -->
<!--           min-width: 160px; -->
<!--           border-radius: 5px; -->
<!--           box-shadow: 0px 0px 8px 0px $light-blue; -->
<!--           z-index: 3; -->
<!---->
<!--           a { -->
<!--             @include a; -->
<!--             font-size: 0.8rem; -->
<!--             padding: 12px 16px; -->
<!--             text-decoration: none; -->
<!--             display: block; -->
<!--             text-align: left; -->
<!---->
<!--             &:hover { -->
<!--               color: $yellow; -->
<!--             } -->
<!--           } -->
<!--         } -->
<!--       } -->
<!--     } -->
<!--     .mobile-menu { -->
<!--       display: flex; -->
<!--       width: 10%; -->
<!--       height: 100%; -->
<!--       justify-content: flex-end; -->
<!--       margin-right: 1rem; -->
<!--       align-items: center; -->
<!---->
<!--       button { -->
<!--         margin: auto; -->
<!--         display: flex; -->
<!--         flex-direction: column; -->
<!--         justify-content: space-evenly; -->
<!--         cursor: pointer; -->
<!--         height: 40px; -->
<!--         background: none; -->
<!--         border: none; -->
<!---->
<!--         span { -->
<!--           width: 2rem; -->
<!--           height: 3px; -->
<!--           background: $deep-blue; -->
<!--           transition: all 0.2s linear; -->
<!--         } -->
<!--       } -->
<!--     } -->
<!---->
<!--     @include md { -->
<!--       .branding { -->
<!--         display: flex; -->
<!--       } -->
<!--     } -->
<!---->
<!--     @include lg { -->
<!--       ul { -->
<!--         display: flex; -->
<!--       } -->
<!--       .branding { -->
<!--         display: flex; -->
<!--       } -->
<!--       .mobile-menu { -->
<!--         display: none; -->
<!--       } -->
<!--     } -->
<!--     @include xl { -->
<!--       ul { -->
<!--         display: flex; -->
<!--       } -->
<!--       .branding { -->
<!--         display: flex; -->
<!--       } -->
<!--       .mobile-menu { -->
<!--         display: none; -->
<!--       } -->
<!--     } -->
<!--   } -->
<!-- </style> -->
