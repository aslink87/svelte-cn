<script lang="ts">
  // TODO: setup types using zod
  export let data: { id: string; users: { name: string; settings: { approved: boolean } }[] };

  async function register(event: Event) {
    const form = event.target as HTMLFormElement;
    const submitData = new FormData(form);

    await fetch('/api/register', {
      method: 'POST',
      body: submitData,
    });
  }
</script>

<section class="admin">
  <h1>Hello from Admin page</h1>
  <div class="user-management">
    <h2>Registered Users</h2>
    <p>Approve for admin access?</p>
    <form on:submit|preventDefault={register}>
      <ul>
        {#each data.users as user}
          <li>
            <label for="name">Name:</label>
            <input type="text" name="name" value={user.name} />
            {#if !user.settings.approved}
              <button>Approve</button>
            {:else}
              <p>Already Approved</p>
            {/if}
          </li>
        {/each}
      </ul>
    </form>
  </div>
</section>

<style lang="scss">
  section {
    @include center;
    padding: 2em 0;

    h1 {
      @include h1-primary;
      color: $white;
    }

    h2 {
      color: $white;
    }

    p {
      color: $white;
    }

    ul {
      color: $white;
      padding: 0;

      li {
        display: flex;
        gap: 1em;
        justify-content: center;
        list-style-type: none;
        text-transform: capitalize;

        button {
          @include btnPrimary;
          height: 2em;
          margin: auto 0;
        }

        label {
          margin: auto 0;
          display: none;
        }

        input {
          background: none;
          color: $white;
          border: none;
          text-align: left;
          width: 8em;
          overflow-x: scroll;
        }
      }
    }
  }
</style>
