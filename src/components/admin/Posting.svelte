<script lang="ts">
  import type { PostingType } from '$/types';
  import { enhance } from '$app/forms';
  import FeedbackRender from './FeedbackRender.svelte';

  export let form: { success: boolean } | null;

  // initialize values
  const doc = {
    title: '',
    link: '',
    index: 1,
  };

  // data to be sent to the server
  let data: PostingType | undefined;

  // preview data to be displayed, seperate from data because it uses placeholder images
  let previewData: PostingType = {
    title: '',
    link: '',
    index: 1,
  };

  let preview = false;
  function handlePreview() {
    // set data
    data = doc;

    // pass a placeholder jpg to provide a preview before the image is uploaded
    previewData = {
      title: doc.title,
      link: '/images/placeholderVert.jpg',
      index: 1,
    };

    preview = true;
  }
</script>

<section class="admin-posting center component">
  <h2 class="h2-primary mb-4">Posting Section</h2>
  <p class="p-primary">
    This section allows you to submit an image that isn't referred to within the website. However,
    it will be stored with the site and you can use the link as a nice way to share it.
  </p>
  <p class="p-primary">
    A typical usecase would be if you want to share a job posting on social media but it doesn't
    need to be referred to on the website home page.
  </p>
  <p class="p-primary">
    You'll be asked to provide a title for the image that will be visible on the website.
  </p>
  <p class="p-primary">
    Basically, it's a route that will show your image that isn't linked anywhere else on the website
  </p>
  <p class="p-primary">Would you like to update this image?</p>
  <form class="center mt-8 flex flex-col" action="admin?/posting" method="POST" use:enhance>
    <div class="input-wrapper">
      <p class="p-primary">Choose one image</p>
      <label for="title1">Title</label>
      <input
        bind:value={doc.title}
        name="title"
        type="text"
        minlength="5"
        class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
      />
      <label for="doc1">Image</label>
      <input
        bind:value={doc.link}
        name="image"
        type="file"
        class="file my-4"
        accept="image/jpeg, image/png"
      />
    </div>
    <button
      class="variant-filled-surface btn mt-4 px-3 py-1"
      on:click|preventDefault={handlePreview}>Preview</button
    >
    {#if previewData.title}
      <h2 class="preview h2-primary mt-8">Preview</h2>
      <p class="p-primary">Does this look correct?</p>
      <p class="p-primary">Placeholder images are used</p>
      <div
        class="preview-wrapper center mt-8 flex w-[80%] max-w-[50em] flex-col flex-wrap rounded-lg border-2 border-white p-6"
      >
        {#if data && data.title}
          <h1 class="h1-primary">{data.title}</h1>
        {/if}
        {#if previewData.link}
          <img
            class="hidden max-h-[300px] max-w-[800px] rounded object-scale-down md:flex"
            src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${previewData.link}`}
            alt="Christian Neighbors Postings"
          />
        {/if}
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
