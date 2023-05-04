<script lang="ts">
  import Hero from '../hero/Hero.svelte';
  import { updated } from '$lib/stores/Admin';
  import type { HeroType } from '$/types';
  import { enhance } from '$app/forms';

  const fields = [
    { text: 'Title', type: 'text', required: true, length: 5, value: 'title', data: '' },
    {
      text: 'Content - what will the body say',
      type: 'textarea',
      required: true,
      length: 5,
      value: 'content',
      data: '',
    },
    {
      text: 'Link - must start with "https://www."',
      type: 'text',
      required: false,
      length: 15,
      value: 'link',
      data: '',
    },
    { text: 'Image', type: 'text', required: false, length: 0, value: 'image', data: '' },
    { text: 'Video link', type: 'text', required: false, length: 0, value: 'video', data: '' },
    { text: 'PDF', type: 'file', required: false, length: 0, value: 'doc', data: '' },
  ];

  let data: HeroType = {
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

    preview = true;
  }

  function submitHandler() {
    updated.set(true);
  }
</script>

<section class="admin-frontpage">
  <h2>Homepage News Section</h2>
  <p>Would you like to update the homepage news section found at the top of the page?</p>
  <p>Required fields have a red border.</p>
  <p>After editing click 'preview' to view your changes before submitting.</p>
  <form method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      {#if field.type === 'textarea'}
        <textarea
          bind:value={field.data}
          name={field.value}
          minlength={field.length}
          class="area"
          required={field.required}
          style={field.required ? 'border: 2px solid red' : ''}
        />
      {:else if field.type === 'file'}
        <input
          bind:value={field.data}
          name={field.value}
          type="file"
          class="file"
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
          class="text"
          required={field.required}
          style={field.required ? 'border: 2px solid red' : ''}
        />
      {/if}
    {/each}
    <button on:click|preventDefault={handlePreview}>Preview</button>
    {#if data.title}
      <h2 class="preview">Preview</h2>
      <div class="preview-wrapper">
        <Hero {data} />
      </div>
    {/if}
    {#if preview}
      <button formaction="/admin?/hero" on:click={submitHandler}>Submit</button>
    {/if}
  </form>
</section>

<style lang="scss">
  section {
    @include component;
    background: none;

    .preview {
      @include h2-primary;
      border-top: 1px solid $gray;
      margin-top: 2rem;
      padding-top: 2rem;
    }

    .preview-wrapper {
      margin-top: 1rem;
      border: 1px solid $gray;
      border-radius: 5px;
    }

    h2 {
      @include h2-primary;
    }

    form {
      display: flex;
      flex-flow: column;
      width: 50%;
      margin: auto;

      textarea {
        min-height: 20rem;
      }

      input {
        height: 1.5rem;
      }

      label {
        margin-top: 1rem;
      }

      button {
        @include btn-primary;
        width: 10rem;
        margin: 1rem auto;
        background-color: rgba($color: $gray, $alpha: 0.5);
      }
    }
  }
</style>
