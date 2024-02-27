<script lang="ts">
  import Hero from '../hero/Hero.svelte';
  import { updated } from '$lib/stores/Admin';
  import type { HeroType } from '$/types';
  import { enhance } from '$app/forms';

  export let heroData: HeroType;

  const fields = [
    {
      text: 'Title',
      type: 'text',
      required: true,
      length: 5,
      value: 'title',
      data: heroData.title ?? '',
    },
    {
      text: 'Content - what will the body say',
      type: 'textarea',
      required: true,
      length: 5,
      value: 'content',
      data: heroData.content ?? '',
    },
    {
      text: 'Link - must start with "https://www."',
      type: 'text',
      required: false,
      length: 15,
      value: 'link',
      data: heroData.link ?? '',
    },
    {
      text: 'Image - jpg or png only',
      type: 'image',
      required: false,
      length: 0,
      value: 'image',
      data: '',
    },
    {
      text: 'Video link',
      type: 'text',
      required: false,
      length: 0,
      value: 'video',
      data: heroData.video ?? '',
    },
    {
      text: 'PDF - will display as a link',
      type: 'file',
      required: false,
      length: 0,
      value: 'doc',
      data: '',
    },
  ];

  // data to be sent to the server
  let data: HeroType = {
    title: '',
    content: '',
    link: '',
    image: '',
    video: '',
    doc: '',
  };

  // preview data to be displayed, separete from data because it uses placeholder images
  let previewData: HeroType = {
    title: '',
    content: '',
    link: '',
    image: '',
    video: '',
    doc: '',
  };

  let preview = false;
  function handlePreview() {
    data = {
      title: fields[0].data.trim(),
      content: fields[1].data.trim(),
      link: fields[2].data.trim(),
      image: fields[3].data.trim(),
      video: fields[4].data.trim(),
      doc: fields[5].data.trim(),
    };
    // pass a placeholder jpg to provide a preview before the image is uploaded
    previewData = {
      title: fields[0].data.trim(),
      content: fields[1].data.trim(),
      link: fields[2].data.trim(),
      image: '/images/placeholder.jpg',
      video: fields[4].data.trim(),
      doc: fields[5].data.trim(),
    };

    preview = true;
  }

  function submitHandler() {
    updated.set(true);
  }
</script>

<section class="admin-frontpage center component">
  <h2 class="h2-primary mb-4">Homepage News Section</h2>
  <p class="p-primary">
    Would you like to update the homepage news section found at the top of the page?
  </p>
  <p class="p-primary my-4">Required fields have a red border.</p>
  <p class="p-primary">After editing click 'preview' to view your changes before submitting.</p>
  <form class="center mt-8 flex flex-col" method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      {#if field.type === 'textarea'}
        <textarea
          bind:value={field.data}
          name={field.value}
          minlength={field.length}
          class="area my-4 min-h-[200px] w-[600px] rounded-lg px-4 text-primary-600"
          required={field.required}
          style={field.required ? 'border: 1px solid red' : ''}
        />
      {:else if field.type === 'image'}
        <input
          bind:value={field.data}
          name={field.value}
          type="file"
          class="file my-4"
          accept="image/jpeg, image/png"
          required={field.required}
          style={field.required ? 'border: 2px solid red' : ''}
        />
      {:else if field.type === 'file'}
        <input
          bind:value={field.data}
          name={field.value}
          type="file"
          class="file my-4"
          accept="application/pdf"
          required={field.required}
          style={field.required ? 'border: 2px solid red' : ''}
        />
      {:else}
        <input
          bind:value={field.data}
          name={field.value}
          type="text"
          minlength={field.length}
          class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
          required={field.required}
          style={field.required ? 'border: 2px solid red' : ''}
        />
      {/if}
    {/each}
    <button class="variant-filled-surface btn px-3 py-1" on:click|preventDefault={handlePreview}
      >Preview</button
    >
    {#if data.title}
      <h2 class="preview h2-primary mt-8">Preview</h2>
      <p class="p-primary">Does this look correct?</p>
      <p class="p-primary">Placholder images are used.</p>
      <div
        class="preview-wrapper center mt-8 flex w-[80%] max-w-[50em] flex-col flex-wrap rounded-lg border-2 border-white p-6"
      >
        <Hero data={previewData} />
      </div>
    {/if}
    {#if preview}
      <button
        class="variant-filled-surface btn mt-6 px-3 py-1"
        formaction="/admin?/hero"
        on:click={submitHandler}>Submit</button
      >
    {/if}
  </form>
</section>
