<script lang="ts">
  const fields = [
    { text: 'Title', value: 'title', data: '' },
    { text: 'Content - what will the body say?', value: 'content', data: '' },
    { text: 'Link?', value: 'link', data: '' },
    { text: 'Image?', value: 'image', data: '' },
    { text: 'Video link?', value: 'video', data: '' },
    { text: 'PDF?', value: 'pdf', data: '' },
  ];

  function handleSubmit() {
    const data = {
      title: fields[0].data,
      content: fields[1].data,
      link: fields[2].data,
      image: fields[3].data,
      video: fields[4].data,
      pdf: fields[5].data,
    };

    console.log(data);
  }
</script>

<section class="template">
  <h2>Homepage News Section</h2>
  <p>Would you like to update the homepage news section found at the top of the page?</p>
  <p>Fields with a '?' are not required.</p>
  <form on:submit|preventDefault={handleSubmit}>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      <input bind:value={field.data} name={field.value} type="text" />
    {/each}
    <button type="submit">Submit</button>
  </form>
</section>

<style lang="scss">
  section {
    @include component;
    background: none;

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
