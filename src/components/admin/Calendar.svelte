<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import type { CalendarType } from '$/types';
  import { enhance } from '$app/forms';

  const fields = [
    { text: 'Content', type: 'textarea', required: true, length: 20, value: 'content', data: '' },
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
  }
</script>

<section class="admin-frontpage">
  <h2>Calendar Top Section</h2>
  <p>Would you like to update the calendar news section found at the top of the page?</p>
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
        <h1>Upcoming Events</h1>
        <div class="dynamic">
          {#if previewData.content}
            {#if previewData.img}
              <img src={previewData.img} alt={previewData.alt} />
            {/if}
            <div class="preview-content">
              <p>{previewData.content}</p>
              {#if previewData.link}
                <a href={previewData.link}>{previewData.link.split('.').slice(1).join('.')}</a>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    {/if}
    {#if preview}
      <button formaction="/admin?/calendar" on:click={submitHandler}>Submit</button>
    {/if}
  </form>
</section>

<!-- <style lang="scss"> -->
<!--   section { -->
<!--     @include component; -->
<!--     background: none; -->
<!---->
<!--     .preview { -->
<!--       @include h2-primary; -->
<!--       border-top: 1px solid $gray; -->
<!--       margin-top: 2rem; -->
<!--       padding-top: 2rem; -->
<!--     } -->
<!---->
<!--     .preview-wrapper { -->
<!--       margin-top: 1rem; -->
<!--       border: 1px solid $gray; -->
<!--       border-radius: 5px; -->
<!---->
<!--       .dynamic { -->
<!--         @include component; -->
<!--         background-color: rgba($color: $gray, $alpha: 0.6); -->
<!--         display: flex; -->
<!--         flex-flow: column; -->
<!--         flex-wrap: wrap; -->
<!--         margin-bottom: 3rem; -->
<!---->
<!--         a { -->
<!--           @include a; -->
<!--           margin: auto; -->
<!--         } -->
<!--       } -->
<!--       .preview-content { -->
<!--         padding: 0 1rem; -->
<!--         max-width: 50em; -->
<!---->
<!--         @include xs { -->
<!--           text-align: center; -->
<!--           a { -->
<!--             margin: 1rem auto; -->
<!--           } -->
<!--         } -->
<!--         @include sm { -->
<!--           text-align: center; -->
<!--           a { -->
<!--             margin: 1rem auto; -->
<!--           } -->
<!--         } -->
<!--         @include md { -->
<!--           a { -->
<!--             margin: 1rem auto; -->
<!--           } -->
<!--         } -->
<!---->
<!--         a { -->
<!--           @include btn-primary; -->
<!--           width: 100px; -->
<!--         } -->
<!--       } -->
<!--     } -->
<!---->
<!--     h2 { -->
<!--       @include h2-primary; -->
<!--     } -->
<!---->
<!--     form { -->
<!--       display: flex; -->
<!--       flex-flow: column; -->
<!--       width: 50%; -->
<!--       margin: auto; -->
<!---->
<!--       textarea { -->
<!--         min-height: 20rem; -->
<!--       } -->
<!---->
<!--       input { -->
<!--         height: 1.5rem; -->
<!--       } -->
<!---->
<!--       label { -->
<!--         margin-top: 1rem; -->
<!--       } -->
<!---->
<!--       button { -->
<!--         @include btn-primary; -->
<!--         width: 10rem; -->
<!--         margin: 1rem auto; -->
<!--         background-color: rgba($color: $gray, $alpha: 0.5); -->
<!--       } -->
<!--     } -->
<!--   } -->
<!-- </style> -->
