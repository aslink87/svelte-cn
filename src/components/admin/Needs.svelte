<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import { enhance } from '$app/forms';

  const fields = [
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item0', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item1', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item2', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item3', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item4', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item5', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item6', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item7', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item8', data: '' },
    { text: 'Item', type: 'text', required: false, length: 3, value: 'item9', data: '' },
  ];

  // data to be sent to the server
  let data = {
    item0: '',
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    item6: '',
    item7: '',
    item8: '',
    item9: '',
  };

  // preview data to be displayed, separete from data because it uses placeholder images
  let previewData = {
    item0: '',
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    item6: '',
    item7: '',
    item8: '',
    item9: '',
  };

  let preview = false;
  function handlePreview() {
    data = {
      item0: fields[0].data.trim(),
      item1: fields[1].data.trim(),
      item2: fields[2].data.trim(),
      item3: fields[3].data.trim(),
      item4: fields[4].data.trim(),
      item5: fields[5].data.trim(),
      item6: fields[6].data.trim(),
      item7: fields[7].data.trim(),
      item8: fields[8].data.trim(),
      item9: fields[9].data.trim(),
    };
    // pass a placeholder jpg to provide a preview before the image is uploaded
    previewData = {
      item0: fields[0].data.trim(),
      item1: fields[1].data.trim(),
      item2: fields[2].data.trim(),
      item3: fields[3].data.trim(),
      item4: fields[4].data.trim(),
      item5: fields[5].data.trim(),
      item6: fields[6].data.trim(),
      item7: fields[7].data.trim(),
      item8: fields[8].data.trim(),
      item9: fields[9].data.trim(),
    };

    preview = true;
  }

  function submitHandler() {
    updated.set(true);
  }
</script>

<section class="admin-frontpage">
  <h2>Pantry Needs List</h2>
  <p>Would you like to update the pantry needs list?</p>
  <p>All fields are optional, fill them out from top to bottom as needed.</p>
  <p>After editing click 'preview' to view your changes before submitting.</p>
  <form method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      <input
        bind:value={field.data}
        name={field.value}
        type="text"
        minlength={field.length}
        class="text"
        required={field.required}
      />
    {/each}
    <button on:click|preventDefault={handlePreview}>Preview</button>
    {#if previewData.item0}
      <h2 class="preview">Preview</h2>
      <p>Does this look correct?</p>
      <div class="preview-wrapper">
        <ul class="needs-list">
          {#if previewData.item0}
            <li>{previewData.item0}</li>
          {/if}
          {#if previewData.item1}
            <li>{previewData.item1}</li>
          {/if}
          {#if previewData.item2}
            <li>{previewData.item2}</li>
          {/if}
          {#if previewData.item3}
            <li>{previewData.item3}</li>
          {/if}
          {#if previewData.item4}
            <li>{previewData.item4}</li>
          {/if}
          {#if previewData.item5}
            <li>{previewData.item5}</li>
          {/if}
          {#if previewData.item6}
            <li>{previewData.item6}</li>
          {/if}
          {#if previewData.item7}
            <li>{previewData.item7}</li>
          {/if}
          {#if previewData.item8}
            <li>{previewData.item8}</li>
          {/if}
          {#if previewData.item9}
            <li>{previewData.item9}</li>
          {/if}
        </ul>
      </div>
    {/if}
    {#if preview}
      <button formaction="/admin?/needs" on:click={submitHandler}>Submit</button>
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

      ul {
        @include ul;

        .needs-list {
          li {
            list-style-type: disc;
            text-align: left;
            max-width: 30rem;
            margin: 0.5rem auto;
            text-transform: capitalize;
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
