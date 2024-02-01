<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="error">
  {#if $page?.error?.message}
    <h1>{$page.error.message}</h1>
  {/if}
  <img src="/images/shockedCat.jpg" alt="Surprised cat" />
</div>

<!-- <style lang="scss"> -->
<!--   .error { -->
<!--     height: 100vh; -->
<!--     display: grid; -->
<!--     gap: var(--spacing-32); -->
<!--     place-content: center; -->
<!--     place-items: center; -->
<!--     color: $white; -->
<!--   } -->
<!---->
<!--   img { -->
<!--     width: 200px; -->
<!--     height: 200px; -->
<!--     border-radius: 50%; -->
<!--     object-fit: cover; -->
<!--     border: 2px solid $white; -->
<!--   } -->
<!-- </style> -->
