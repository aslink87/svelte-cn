<script lang="ts">
  export let form: { success: boolean };
</script>

{#if form.success}
  <aside
    class="alert variant-ghost mx-auto mt-6 flex w-fit flex-col gap-6 bg-green-600/40 text-white ring-white"
  >
    <div class="alert-message">
      <p>Success!</p>
    </div>
  </aside>
{:else if !form.success}
  <aside
    class="alert variant-ghost-error mx-auto mt-6 flex w-fit flex-col bg-red-500/30 text-white ring-white"
  >
    <div class="alert-message">
      <p>Failed to submit! Refresh the page and try again.</p>
    </div>
    <button class="variant-glass btn" on:click={() => window.location.reload()}>Reload?</button>
  </aside>
{/if}
