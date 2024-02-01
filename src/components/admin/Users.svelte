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

<section class="template">
  <div class="user-management">
    <h2>Registered Users</h2>
    <p>Approve for admin access?</p>
    <p>Careful not to lock yourself out by removing your own access!</p>
    <ul>
      {#each data as user}
        <li>
          <label for="name">Name:</label>
          <input type="text" name="name" value={user.name} />
          {#if !user.settings.approved}
            <button on:click={() => approve(user.name)}>Approve</button>
          {:else}
            <button on:click={() => remove(user.name)}>Remove Approval</button>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- <style lang="scss"> -->
<!--   section { -->
<!--     @include component; -->
<!--     background: none; -->
<!---->
<!--     h2 { -->
<!--       margin: 1rem auto !important; -->
<!--       @include h2-primary; -->
<!--     } -->
<!---->
<!--     p { -->
<!--       @include p; -->
<!--     } -->
<!---->
<!--     ul { -->
<!--       @include ul; -->
<!---->
<!--       li { -->
<!--         margin: 1rem auto; -->
<!--         display: flex; -->
<!--         gap: 1em; -->
<!--         justify-content: center; -->
<!--         list-style-type: none; -->
<!--         text-transform: capitalize; -->
<!---->
<!--         button { -->
<!--           @include btn-primary; -->
<!--           height: 2em; -->
<!--           margin: auto 0; -->
<!--         } -->
<!---->
<!--         label { -->
<!--           margin: auto 0; -->
<!--           display: none; -->
<!--         } -->
<!---->
<!--         input { -->
<!--           background: none; -->
<!--           color: $white; -->
<!--           border: none; -->
<!--           text-align: left; -->
<!--           width: 8em; -->
<!--           overflow-x: scroll; -->
<!--         } -->
<!--       } -->
<!--     } -->
<!--   } -->
<!-- </style> -->
