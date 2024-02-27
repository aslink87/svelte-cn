<script lang="ts">
  interface Users {
    id: string;
    name: string;
    settings: { approved: boolean };
  }

  async function approve(name: string) {
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  }

  async function remove(name: string) {
    await fetch('/api/unregister', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  }

  export let data: Users[];
</script>

<section class="template center component">
  <h2 class="h2-primary mb-4">Registered Users</h2>
  <p class="p-primary">Approve for admin access?</p>
  <p class="p-primary">Careful not to lock yourself out by removing your own access!</p>
  <ul class="py-6">
    {#each data as user}
      <li class="center mx-auto flex w-full gap-6">
        <p>Name:</p>
        <p>
          {user.name}
        </p>
        {#if !user.settings.approved}
          <button class="variant-ghost btn" on:click={() => approve(user.name)}>Approve</button>
        {:else}
          <button class="variant-filled-surface btn px-3 py-1" on:click={() => remove(user.name)}
            >Remove Approval</button
          >
        {/if}
      </li>
    {/each}
  </ul>
</section>
