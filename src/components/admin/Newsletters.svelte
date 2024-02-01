<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import { enhance } from '$app/forms';
  import Newsletters from '../../routes/newsletter/+page.svelte';
  import type { NewsletterType } from '$/types';

  // initialize values
  const newsletter1 = {
    title: '',
    doc: '',
    index: 0,
  };

  const newsletter2 = {
    title: '',
    doc: '',
    index: 1,
  };

  const newsletter3 = {
    title: '',
    doc: '',
    index: 2,
  };

  // data to be sent to the server
  let data: NewsletterType[] = [];

  // preview data to be displayed, separete from data because it uses placeholder images
  const previewData: { newsletters: NewsletterType[] } = { newsletters: [] };

  let preview = false;
  function handlePreview() {
    // set data
    data = [newsletter1, newsletter2, newsletter3];

    previewData.newsletters = [
      {
        title: data[0].title,
        doc: '/images/placeholder.jpg',
        index: 0,
      },
      {
        title: data[1].title,
        doc: '/images/placeholder.jpg',
        index: 1,
      },
      {
        title: data[2].title,
        doc: '/images/placeholder.jpg',
        index: 2,
      },
    ];

    preview = true;
  }

  function submitHandler() {
    updated.set(true);
  }
</script>

<section class="admin-frontpage">
  <h2>Newspapers Section</h2>
  <p>This section displays one newsletter that visitors can view, download, and print.</p>
  <p>
    There's a short title above this displayed newsletter where you can describe it. Suggestions are
    'Recent E-News', 'March Newsletter', 'Latest Newsletter', etc.
  </p>
  <p>
    There's also two links for older newsletters that viewers can open up in another tab on click.
  </p>
  <p>
    The Title for those links should be something like 'Jan Newsletter'. Visitors will click on this
    title to open the newsletter.
  </p>
  <p>
    Ideally, the displayed newsletter will be the most recent E-News, and the two links will be the
    previous two E-News.
  </p>
  <p>Would you like to update these?</p>
  <form method="POST" use:enhance>
    <div class="input-wrapper">
      <p>Most Recent Newsletter</p>
      <label for="title1">Title</label>
      <input bind:value={newsletter1.title} name="title1" type="text" minlength="5" class="text" />
      <label for="doc1">PDF</label>
      <input
        bind:value={newsletter1.doc}
        name="doc1"
        type="file"
        class="file"
        accept="application/pdf"
      />
    </div>
    <div class="input-wrapper">
      <p>Second newsletter</p>
      <label for="title2">Title</label>
      <input bind:value={newsletter2.title} name="title2" type="text" minlength="5" class="text" />
      <label for="doc2">PDF</label>
      <input
        bind:value={newsletter2.doc}
        name="doc2"
        type="file"
        class="file"
        accept="application/pdf"
      />
    </div>
    <div class="input-wrapper">
      <p>Third newsletter</p>
      <label for="title3">Title</label>
      <input bind:value={newsletter3.title} name="title3" type="text" minlength="5" class="text" />
      <label for="doc3">PDF</label>
      <input
        bind:value={newsletter3.doc}
        name="doc3"
        type="file"
        class="file"
        accept="application/pdf"
      />
    </div>
    <button on:click|preventDefault={handlePreview}>Preview</button>
    {#if previewData.newsletters.length > 0}
      <h2 class="preview">Preview</h2>
      <p>Does this look correct?</p>
      <p>Placholder images are used for the PDFs.</p>
      <div class="preview-wrapper">
        <Newsletters data={previewData} />
      </div>
    {/if}
    {#if preview}
      <button formaction="/admin?/newsletters" on:click={submitHandler}>Submit</button>
    {/if}
  </form>
</section>

<!-- <style lang="scss"> -->
<!--   section { -->
<!--     @include component; -->
<!--     background: none; -->
<!---->
<!--     h2 { -->
<!--       @include h2-primary; -->
<!--     } -->
<!---->
<!--     form { -->
<!--       @include center; -->
<!--       display: flex; -->
<!--       flex-flow: column; -->
<!--       margin: auto; -->
<!---->
<!--       .input-wrapper { -->
<!--         border-bottom: 1px solid $gray; -->
<!--       } -->
<!---->
<!--       input { -->
<!--         height: 1.5rem; -->
<!--         margin-bottom: 1rem; -->
<!--       } -->
<!---->
<!--       label { -->
<!--         margin: 0.5rem auto; -->
<!--       } -->
<!---->
<!--       button { -->
<!--         @include btn-primary; -->
<!--         width: 10rem; -->
<!--         margin: 1rem auto; -->
<!--         background-color: rgba($color: $gray, $alpha: 0.5); -->
<!--       } -->
<!--     } -->
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
<!--     } -->
<!--   } -->
<!-- </style> -->
