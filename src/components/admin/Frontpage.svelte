<script lang="ts">
  import Hero from '../hero/Hero.svelte';
  import type { HeroType } from '$/types';

  const fields = [
    { text: 'Title', value: 'title', data: '' },
    { text: 'Content - what will the body say?', value: 'content', data: '' },
    { text: 'Link?', value: 'link', data: '' },
    { text: 'Image?', value: 'image', data: '' },
    { text: 'Video link?', value: 'video', data: '' },
    { text: 'PDF?', value: 'doc', data: '' },
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
      title: fields[0].data,
      content: fields[1].data,
      link: fields[2].data,
      image: fields[3].data,
      video: fields[4].data,
      doc: fields[5].data,
    };

    preview = true;
  }
</script>

<section class="admin-frontpage">
  <h2>Homepage News Section</h2>
  <p>Would you like to update the homepage news section found at the top of the page?</p>
  <p>Fields with a <strong>'?'</strong> are not required.</p>
  <p>After editing click 'preview' to view your changes before submitting.</p>
  <form method="POST">
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      <input bind:value={field.data} name={field.value} type="text" />
    {/each}
    <button on:click|preventDefault={handlePreview}>Preview</button>
    {#if preview}
      <button formaction="/admin?/hero">Submit</button>
    {/if}
  </form>
  <h2 class="preview">Preview</h2>
</section>
{#if data.title}
  <Hero {data} />
{/if}

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

    h2 {
      @include h2-primary;
    }

    form {
      display: flex;
      flex-flow: column;
      width: 50%;
      margin: auto;

      label {
        margin-top: 1rem;
      }

      input {
        height: 1.5rem;
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
