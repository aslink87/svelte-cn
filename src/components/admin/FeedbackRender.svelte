<script lang="ts">
  export let form: { success: boolean };
</script>

{#if form.success}
  <aside class="alert variant-ghost mt-6 bg-green-600/40 text-white ring-white">
    <div class="alert-message">
      <h3 class="h3">Success</h3>
      <p>Successfully updated!</p>
    </div>
  </aside>
{:else if !form.success}
  <aside class="alert variant-ghost-error mt-6 bg-red-500/30 text-white ring-white">
    <div class="alert-message">
      <h3 class="h3">Failure</h3>
      <p>Failed to update frontpage data!</p>
    </div>
    <div class="variant-glass alert-actions btn">
      <button class="p-primary"><a data-sveltekit-reload href="/admin">Reload?</a></button>
    </div>
  </aside>
{/if}
