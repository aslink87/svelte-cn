<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import { enhance } from '$app/forms';

  let visible: boolean = false;

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
    visible = true;
  }
</script>

<section class="admin-frontpage center component">
  <h2 class="h2-primary mb-4">Soup Supper Calendar</h2>
  <p class="p-primary">Would you like to update the soup supper calendar image?</p>
  <p class="p-primary">Image should be in portrait orientation.</p>
  <form class="center mt-8 flex flex-col" method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      {#if field.type === 'image'}
        <input
          bind:value={field.data}
          name={field.value}
          type="file"
          class="file my-4"
          accept="image/jpeg, image/png"
          required={field.required}
        />
      {:else}
        <input
          bind:value={field.data}
          name={field.value}
          type="text"
          minlength={field.length}
          class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
          required={field.required}
        />
      {/if}
    {/each}
    <button class="variant-filled-surface btn px-3 py-1" on:click|preventDefault={handlePreview}
      >Preview</button
    >
    {#if data.img}
      <div
        class="preview-wrapper center mt-8 flex w-[80%] max-w-[50em] flex-col flex-wrap rounded-lg border-2 border-white p-6"
      >
        <img
          class="mx-auto h-full w-[90%] max-w-[250px] rounded-lg sm:w-[80%]"
          src="/images/placeholderVert.jpg"
          alt="placeholder"
        />
      </div>
    {/if}
    {#if preview}
      <button
        class="variant-filled-surface btn mt-6 px-3 py-1"
        disabled={visible}
        formaction="/admin?/supper"
        on:click={submitHandler}>Submit</button
      >
    {/if}
    {#if visible}
      <aside class="alert variant-ghost mt-6 text-white">
        <div class="alert-message">
          <h3 class="h3">Success</h3>
          <p>Successfully updated soup supper image!</p>
        </div>
      </aside>
    {/if}
  </form>
</section>
