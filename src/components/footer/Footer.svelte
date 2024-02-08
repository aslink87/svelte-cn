<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { page } from '$app/stores';
</script>

<footer data-testid="footer" class="bg-primary-800">
  <div
    class="svg flex aspect-[2100/300] flex-col justify-end max-2xl:bg-white 2xl:bg-[url('/images/wavesHand.png')] 2xl:bg-cover 2xl:bg-center"
  >
    <div
      class="footer-wrapper mx-8 flex h-fit w-[90%] justify-normal text-primary-500 max-sm:flex-wrap md:mt-8"
    >
      <div class="left-container m-8 mx-auto flex flex-col flex-wrap 2xl:justify-end">
        <div class="icon-wrapper mb-4 flex gap-4">
          <a
            href="https://www.facebook.com/ChristianNeighborsPlainwell/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-label="facebook logo"
              xmlns="http://www.w3.org/2000/svg"
              class="icon w-12 fill-primary-500 hover:fill-tertiary-500"
              viewBox="0 0 512 512"
              ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />Christian Neighbors Facebook</svg
            >
          </a>
          <a
            href="https://www.instagram.com/christian_neighbors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-label="instagram logo"
              xmlns="http://www.w3.org/2000/svg"
              class="icon w-12 fill-primary-500 hover:fill-tertiary-500"
              viewBox="0 0 448 512"
              ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />Christian Neighbors Instagram</svg
            >
          </a>
        </div>
        <p class="text-sm">Christian Neighbors, ©2024</p>
      </div>
      <div class="spacer 2xl:w-2/5" />
      <div
        class="right-container m-8 mx-auto gap-8 max-md:text-xs sm:flex-wrap md:flex md:flex-row"
      >
        <div>
          <h2>Address</h2>
          <p>282 12th Street Plainwell, MI 49080 PO Box 53</p>
          <h2>Phone</h2>
          <p>1-269-685-4166</p>
          <h2>Fax</h2>
          <p>1-269-685-4178</p>
        </div>
        <div>
          <h2>Hours</h2>
          <p><strong>Mon:</strong> 10-Noon, 4-6</p>
          <p><strong>Tue:</strong> 10-Noon</p>
          <p><strong>Wed:</strong> Closed</p>
          <p><strong>Thu:</strong> 2-5</p>
          <p><strong>Fri:</strong> Closed</p>
          {#if $page.data.session?.user}
            <button class="text-xs underline" on:click={() => signOut()}>Logout</button>
            <a href="/admin" class="underline">Admin Page</a>
            <p class="text-xs">Thanks for logging in {$page.data.session.user.name}</p>
          {:else}
            <button class="text-xs" on:click={() => signIn('google')}>Login</button>
          {/if}
        </div>
      </div>
    </div>
  </div>
</footer>
