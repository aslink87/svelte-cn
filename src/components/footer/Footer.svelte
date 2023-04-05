<script>
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
</script>

<section data-testid="footer-wrapper">
  <div class="left-container">
    <h2>Address</h2>
    <p>282 12th Street Plainwell, MI 49080 PO Box 53</p>
    <h2>Phone</h2>
    <p>1-269-685-4166</p>
    <h2>Fax</h2>
    <p>1-269-685-4178</p>
  </div>
  <div class="center-container">
    <p>Christian Neighbors, ©2023</p>
    <div class="icon-wrapper" />
  </div>
  <div class="right-container">
    <h2>Hours</h2>
    <p><strong>Mon:</strong> 10-Noon, 4-6</p>
    <p><strong>Tue:</strong> 10-Noon</p>
    <p><strong>Wed:</strong> Closed</p>
    <p><strong>Thu:</strong> 2-5</p>
    <p><strong>Fri:</strong> Closed</p>
    {#if $page.data.session?.user}
      <button on:click={() => signOut()}>
        <p>Logout</p>
      </button>
      <p class="welcome">Thanks for logging in {$page.data.session.user.name}</p>
    {:else}
      <button on:click={() => signIn('google')} class="cursor-pointer btn variant-filled-primary">
        <p>Login</p>
      </button>
    {/if}
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    background-color: $white;
    color: $dark-blue;
    border-top: solid 2px $deep-blue;
    padding: 2rem;

    .left-container {
      flex: 30%;
    }

    .center-container {
      flex: 30%;
      display: flex;
      flex-flow: column;
      @include center;
      text-align: center;
    }

    .right-container {
      flex: 30%;
      text-align: right;

      button {
        background: none;
        border: none;
        color: $dark-blue;
        cursor: pointer;

        p {
          font-size: 12px;
        }
      }
    }

    p {
      margin: auto 0;
    }

    .welcome {
      font-size: 12px;
    }

    h2 {
      @include h2-primary;
      margin-bottom: 0.3rem;
    }
  }
</style>
