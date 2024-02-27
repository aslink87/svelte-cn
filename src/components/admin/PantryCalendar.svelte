<script lang="ts">
  import { enhance } from '$app/forms';
  import FeedbackRender from './FeedbackRender.svelte';

  export let form: { success: boolean } | null;

  const fields = [
    {
      text: 'Image - jpg or png only',
      type: 'image',
      required: false,
      length: 0,
      value: 'image',
      data: '',
    },
  ];

  // data to be sent to the server
  // eslint-disable-next-line
  let data = {
    img: '',
  };

  let preview = false;
  function handlePreview() {
    data = {
      img: fields[0].data.trim(),
    };

    preview = true;
  }
</script>

<section class="admin-frontpage center component">
  <h2 class="h2-primary mb-4">Quartlery Food Pantry Calendar</h2>
  <p class="p-primary">Would you like to update the food pantry calendar image?</p>
  <p class="p-primary">Image should be in landscape orientation.</p>
  <form class="center mt-8 flex flex-col" action="admin?/pantrycalendar" method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      <input
        bind:value={field.data}
        name={field.value}
        type="file"
        class="file"
        accept="image/jpeg, image/png"
        required={field.required}
      />
    {/each}
    <button
      class="variant-filled-surface btn mt-4 px-3 py-1"
      on:click|preventDefault={handlePreview}>Preview</button
    >
    {#if data.img}
      <div
        class="preview-wrapper center mt-8 flex w-[80%] max-w-[50em] flex-col flex-wrap rounded-lg border-2 border-white p-6"
      >
        <img
          class="mx-auto h-full w-[90%] max-w-[700px] rounded-lg sm:w-[80%]"
          src="/images/placeholder.jpg"
          alt="placeholder"
        />
      </div>
    {/if}
    {#if preview}
      <button
        class="variant-filled-surface btn mt-6 px-3 py-1"
        disabled={typeof form?.success === 'boolean'}
        type="submit">Submit</button
      >
    {/if}
    {#if form}
      <FeedbackRender {form} />
    {/if}
  </form>
</section>
