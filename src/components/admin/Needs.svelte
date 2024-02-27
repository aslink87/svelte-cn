<script lang="ts">
  import { enhance } from '$app/forms';
  import type { NeedsType } from '$/types';
  import FeedbackRender from './FeedbackRender.svelte';

  export let needsData: NeedsType;
  export let form: { success: boolean } | null;

  const fields = [
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item0',
      data: needsData.item0 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item1',
      data: needsData.item1 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item2',
      data: needsData.item2 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item3',
      data: needsData.item3 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item4',
      data: needsData.item4 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item5',
      data: needsData.item5 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item6',
      data: needsData.item6 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item7',
      data: needsData.item7 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item8',
      data: needsData.item8 ?? '',
    },
    {
      text: 'Item',
      type: 'text',
      required: false,
      length: 3,
      value: 'item9',
      data: needsData.item9 ?? '',
    },
  ];

  // data to be sent to the server
  // eslint-disable-next-line
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
</script>

<section class="admin-frontpage center component">
  <h2 class="h2-primary mb-4">Pantry Needs List</h2>
  <p class="p-primary">Would you like to update the pantry needs list?</p>
  <p class="p-primary">All fields are optional, fill them out from top to bottom as needed.</p>
  <p class="p-primary">After editing click 'preview' to view your changes before submitting.</p>
  <form class="center mt-8 flex flex-col" action="admin?/needs" method="POST" use:enhance>
    {#each fields as field}
      <label for={field.value}>{field.text}</label>
      <input
        bind:value={field.data}
        name={field.value}
        type="text"
        minlength={field.length}
        class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
        required={field.required}
      />
    {/each}
    <button class="variant-filled-surface btn px-3 py-1" on:click|preventDefault={handlePreview}
      >Preview</button
    >
    {#if previewData.item0}
      <h2 class="preview h2-primary mt-8">Preview</h2>
      <p class="p-primary">Does this look correct?</p>
      <div
        class="preview-wrapper center mt-8 flex w-[80%] max-w-[50em] flex-col flex-wrap rounded-lg border-2 border-white p-6"
      >
        <ul class="needs-list mx-auto my-6 max-w-[30rem] text-left capitalize sm:list-disc">
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
