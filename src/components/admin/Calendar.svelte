<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import type { CalendarType } from '$/types';
  import { enhance } from '$app/forms';

  export let calendarData: CalendarType;
  let visible: boolean = false;

  const fields = [
    {
      text: 'Content',
      type: 'textarea',
      required: true,
      length: 20,
      value: 'content',
      data: calendarData.content,
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
      text: 'Image Description - a few words describing the img for screen readers',
      type: 'text',
      required: false,
      length: 5,
      value: 'alt',
      data: '',
    },
    {
      text: 'Link - start with "https://"',
      type: 'text',
      required: false,
      length: 12,
      value: 'link',
      data: '',
    },
  ];

  // data to be sent to the server
  let data: CalendarType = {
    content: '',
    img: '',
    alt: '',
    link: '',
  };

  // preview data to be displayed, separete from data because it uses placeholder images
  let previewData: CalendarType = {
    content: '',
    img: '',
    alt: '',
    link: '',
  };

  let preview = false;
  function handlePreview() {
    data = {
      content: fields[0].data.trim(),
      img: fields[1].data.trim(),
      alt: fields[2].data.trim(),
      link: fields[3].data.trim(),
    };

    // pass a placeholder jpg to provide a preview before the image is uploaded
    previewData = {
      content: fields[0].data.trim(),
      img: '/images/placeholder.jpg',
      alt: fields[2].data.trim(),
      link: fields[3].data.trim(),
    };

    preview = true;
  }

  function submitHandler() {
    updated.set(true);
    visible = true;
  }
</script>

<section class="admin-frontpage center component">
  <h2 class="h2-primary mb-4">Calendar Top Section</h2>
  <p class="p-primary">
    Would you like to update the calendar news section found at the top of the page?
  </p>
  <p class="p-primary">Required fields have a red border.</p>
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
          style={field.required ? 'border: 2px solid red' : ''}
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
        <h1 class="h1-primary mb-8 mt-6">Upcoming Events</h1>
        <div class="dynamic">
          {#if previewData.content}
            {#if previewData.img}
              <img src={previewData.img} alt={previewData.alt} />
            {/if}
            <div class="preview-content">
              <p class="p-primary my-6 whitespace-pre">{previewData.content}</p>
              {#if previewData.link}
                <a class="p-primary underline" href={previewData.link}
                  >{previewData.link.split('.').slice(1).join('.')}</a
                >
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {/if}
    {#if preview}
      <button
        class="variant-filled-surface btn mt-6 px-3 py-1"
        formaction="/admin?/calendar"
        disabled={visible}
        on:click={submitHandler}>Submit</button
      >
    {/if}
    {#if visible}
      <aside class="alert variant-ghost mt-6 text-white">
        <div class="alert-message">
          <h3 class="h3">Success</h3>
          <p>Successfully updated calendar data!</p>
        </div>
      </aside>
    {/if}
  </form>
</section>
