<script lang="ts">
  import { enhance } from '$app/forms';
  import FeedbackRender from './FeedbackRender.svelte';
  import type { BlogType } from '$/types';
  import BlogEditor from './BlogEditor.svelte';

  export let form: { success: boolean } | null;
  export let blogs: BlogType[] = [];

  const fields = [
    { text: 'Author', type: 'text', required: true, length: 2, value: 'author', data: '' },
    { text: 'Date', type: 'date', required: true, length: 10, value: 'date', data: '' },
    { text: 'Title', type: 'text', required: true, length: 5, value: 'title', data: '' },
    { text: 'Content', type: 'textarea', required: true, length: 15, value: 'content', data: '' },
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
  let data: BlogType = {
    author: '',
    date: '',
    title: '',
    content: '',
    img: '',
    caption: '',
  };

  // preview data to be displayed, separete from data because it uses placeholder images
  let previewData: BlogType = {
    author: '',
    date: '',
    title: '',
    content: '',
    img: '',
    caption: '',
  };

  let preview = false;
  function handlePreview() {
    data = {
      author: fields[0].data.trim(),
      date: fields[1].data.trim(),
      title: fields[2].data.trim(),
      content: fields[3].data.trim(),
      img: fields[4].data.trim(),
      caption: fields[5].data.trim(),
    };

    // pass a placeholder jpg to provide a preview before the image is uploaded
    previewData = {
      author: fields[0].data.trim(),
      date: fields[1].data.trim(),
      title: fields[2].data.trim(),
      content: fields[3].data.trim(),
      img: '/images/placeholder.jpg',
      caption: fields[5].data.trim(),
    };

    preview = true;
  }

  let edit = false;
  $: pages = blogs.length ?? 0;
  $: currentPage = 0;
  $: start = 0;
  $: end = blogs.length - 1;

  // eslint-disable-next-line
  $: pages, (currentPage = 0);
  // eslint-disable-next-line
  $: currentPage, start, end;
</script>

<section class="admin-blog center component">
  <h2 class="h2-primary mb-4">Blog Page</h2>
  <p class="p-primary">Would you like to add a blog entry?</p>
  <p class="p-primary">Required fields have a red border.</p>
  <p class="p-primary">After editing click 'preview' to view your changes before submitting.</p>
  <h2 class="h2-primary my-4">New Blog</h2>
  <form class="center mt-8 flex flex-col" action="admin?/blog" method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      {#if field.type === 'textarea'}
        <textarea
          bind:value={field.data}
          name={field.value}
          minlength={field.length}
          class="area my-4 min-h-[200px] min-w-[50em] rounded-lg px-4 text-primary-600"
          required={field.required}
          style={field.required ? 'border: 2px solid red' : ''}
        ></textarea>
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
      {:else if field.type === 'date'}
        <input
          bind:value={field.data}
          name={field.value}
          type="date"
          minlength={field.length}
          class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
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
    {#if data.content}
      <h2 class="preview h2-primary mt-8">Preview</h2>
      <p class="p-primary">Does this look correct?</p>
      <p class="p-primary">Placeholder images are used.</p>
      <div
        class="preview-wrapper center mt-8 flex w-[80%] max-w-[50em] flex-col flex-wrap rounded-lg border-2 border-white p-6"
      >
        <article
          class="blog center flex max-w-[50em] flex-col flex-wrap px-4 py-8 odd:rounded-lg odd:bg-surface-500/60"
        >
          <header class="blog-header">
            <p class="blog-meta p-primary text-sm capitalize">
              Posted by {previewData.author} on {previewData.date}
            </p>
            <h2 class="h2-primary my-4 capitalize">{previewData.title}</h2>
          </header>
          <img class="mx-auto my-4" src={previewData.img} alt={previewData.caption} />
          <p class="max-w-90% whitespace-pre-wrap text-wrap text-xs">{previewData.content}</p>
        </article>
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
  {#if blogs}
    <h2 class="h2-primary mb-8 mt-16">Edit Blogs</h2>
    <!-- eslint-disable -->
    <button
      class="variant-filled-surface btn px-3 py-1"
      type="button"
      on:click={edit ? () => (edit = false) : () => (edit = true)}>{edit ? 'Hide' : 'Show'}</button
    >
    <!-- eslint-enable -->
    {#if edit}
      <BlogEditor blog={blogs[currentPage]} />
      <div class="pagination center flex gap-4">
        <!-- eslint-disable -->
        <button
          on:click={() => (currentPage -= 1)}
          hidden={currentPage === 0}
          aria-label="left arrow icon"
          aria-describedby="prev"
        >
          <!-- eslint-enable -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="icon w-8 fill-primary-500"
            ><path
              fill="white"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
            /></svg
          >
        </button>
        <!-- eslint-disable -->
        <button
          on:click={() => (currentPage += 1)}
          hidden={currentPage === pages - 1}
          aria-label="right arrow icon"
          aria-describedby="next"
        >
          <!-- eslint-enable -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="icon w-8 fill-primary-500"
            ><path
              fill="white"
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
            /></svg
          >
        </button>
      </div>
    {/if}
  {/if}
</section>
