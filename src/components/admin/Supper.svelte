<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import { enhance } from '$app/forms';

  const fields = [
    {
      text: 'Image - jpg or png only',
      type: 'image',
      required: false,
      length: 0,
      value: 'image',
      data: '',
    },
    {
      text: 'Image Description - a few words describing the img for screen readers',
      type: 'text',
      required: false,
      length: 5,
      value: 'alt',
      data: '',
    },
  ];

  // data to be sent to the server
  // eslint-disable-next-line
  let data = {
    img: '',
    alt: '',
  };

  let preview = false;

  function handlePreview() {
    data = {
      img: fields[0].data.trim(),
      alt: fields[1].data.trim(),
    };

    preview = true;
  }

  function submitHandler() {
    updated.set(true);
  }
</script>

<section class="admin-frontpage">
  <h2>Soup Supper Calendar</h2>
  <p>Would you like to update the soup supper calendar image?</p>
  <p>Image should be in landscape orientation.</p>
  <form method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      {#if field.type === 'image'}
        <input
          bind:value={field.data}
          name={field.value}
          type="file"
          class="file"
          accept="image/jpeg, image/png"
          required={field.required}
        />
      {:else}
        <input
          bind:value={field.data}
          name={field.value}
          type="text"
          minlength={field.length}
          class="text"
          required={field.required}
        />
      {/if}
    {/each}
    <button on:click|preventDefault={handlePreview}>Continue?</button>
    {#if preview}
      <button formaction="/admin?/supper" on:click={submitHandler}>Submit</button>
    {/if}
  </form>
</section>

<!-- <style lang="scss"> -->
<!--   section { -->
<!--     @include component; -->
<!--     background: none; -->
<!---->
<!--     h2 { -->
<!--       @include h2-primary; -->
<!--     } -->
<!---->
<!--     form { -->
<!--       display: flex; -->
<!--       flex-flow: column; -->
<!--       width: 50%; -->
<!--       margin: auto; -->
<!---->
<!--       input { -->
<!--         height: 1.5rem; -->
<!--       } -->
<!---->
<!--       label { -->
<!--         margin-top: 1rem; -->
<!--       } -->
<!---->
<!--       button { -->
<!--         @include btn-primary; -->
<!--         width: 10rem; -->
<!--         margin: 1rem auto; -->
<!--         background-color: rgba($color: $gray, $alpha: 0.5); -->
<!--       } -->
<!--     } -->
<!--   } -->
<!-- </style> -->
