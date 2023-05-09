<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import type { BlogType } from '$/types';
  import { enhance } from '$app/forms';

  const fields = [
    { text: 'Author', type: 'text', required: true, length: 2, value: 'author', data: '' },
    { text: 'Date', type: 'text', required: true, length: 10, value: 'date', data: '' },
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

  function submitHandler() {
    updated.set(true);
  }
</script>

<section class="admin-frontpage">
  <h2>Blog Page</h2>
  <p>Would you like to add a blog entry?</p>
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
      {:else if field.type === 'image'}
        <input
          bind:value={field.data}
          name={field.value}
          type="file"
          class="file"
          accept="image/jpeg, image/png"
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
    {#if data.content}
      <h2 class="preview">Preview</h2>
      <p>Does this look correct?</p>
      <p>Placeholder images are used.</p>
      <div class="preview-wrapper">
        <article class="blog">
          <header class="blog-header">
            <p class="blog-meta">
              Posted by {previewData.author} on {previewData.date}
            </p>
            <h2>{previewData.title}</h2>
          </header>
          <img src={previewData.img} alt={previewData.caption} />
          <p>{previewData.content}</p>
        </article>
      </div>
    {/if}
    {#if preview}
      <button formaction="/admin?/blog" on:click={submitHandler}>Submit</button>
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

      .blog {
        @include center;
        padding: 1rem 0 1rem 0;

        &:nth-child(1) {
          background-color: rgba($color: $gray, $alpha: 0.6);
          border-radius: 5px;
        }

        h2 {
          @include h2-primary;
          text-transform: capitalize;
          margin: 1rem auto;
        }

        p {
          @include p;
          white-space: pre-wrap;
        }

        img {
          margin: 1rem auto;
          max-height: 500px;
          object-fit: scale-down;
          border-radius: 10px;

          @include xs {
            width: 90%;
          }
          @include sm {
            height: 400px;
          }
        }
      }
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
