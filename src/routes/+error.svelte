<script lang="ts">
  import { page } from '$app/stores';
</script>

<section class="error component center flex h-[100vh] flex-col flex-wrap">
  {#if $page?.error?.message}
    <h1 class="h1-primary">{$page.error.message}</h1>
  {/if}
  <img
    class="my-8 h-[200px] w-[200px] rounded-lg border-2 border-white object-cover"
    src={`${import.meta.env.VITE_PUBLIC_URL}/images/shockedCat.jpg`}
    alt="Surprised cat"
  />
  <button class="variant-filled-surface btn mt-4 px-3 py-1">
    <a data-sveltekit-reload href="/admin"> Back to safety... </a>
  </button>
</section>
