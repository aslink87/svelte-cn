<script lang="ts">
  import { updated } from '$lib/stores/Admin';
  import { enhance } from '$app/forms';
  import Newsletters from '../../routes/newsletter/+page.svelte';
  import type { NewsletterType } from '$/types';

  let visible: boolean = false;

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
    visible = true;
  }
</script>

<section class="admin-frontpage center component">
  <h2 class="h2-primary mb-4">Newspapers Section</h2>
  <p class="p-primary">
    This section displays one newsletter that visitors can view, download, and print.
  </p>
  <p class="p-primary">
    There's a short title above this displayed newsletter where you can describe it. Suggestions are
    'Recent E-News', 'March Newsletter', 'Latest Newsletter', etc.
  </p>
  <p class="p-primary">
    There's also two links for older newsletters that viewers can open up in another tab on click.
  </p>
  <p class="p-primary">
    The Title for those links should be something like 'Jan Newsletter'. Visitors will click on this
    title to open the newsletter.
  </p>
  <p class="p-primary">
    Ideally, the displayed newsletter will be the most recent E-News, and the two links will be the
    previous two E-News.
  </p>
  <p class="p-primary">Would you like to update these?</p>
  <form class="center mt-8 flex flex-col" method="POST" use:enhance>
    <div class="input-wrapper">
      <p class="p-primary">Most Recent Newsletter</p>
      <label for="title1">Title</label>
      <input
        bind:value={newsletter1.title}
        name="title1"
        type="text"
        minlength="5"
        class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
      />
      <label for="doc1">PDF</label>
      <input
        bind:value={newsletter1.doc}
        name="doc1"
        type="file"
        class="file my-4"
        accept="application/pdf"
      />
    </div>
    <div class="input-wrapper">
      <p class="p-primary">Second newsletter</p>
      <label for="title2">Title</label>
      <input
        bind:value={newsletter2.title}
        name="title2"
        type="text"
        minlength="5"
        class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
      />
      <label for="doc2">PDF</label>
      <input
        bind:value={newsletter2.doc}
        name="doc2"
        type="file"
        class="file my-4"
        accept="application/pdf"
      />
    </div>
    <div class="input-wrapper">
      <p>Third newsletter</p>
      <label for="title3">Title</label>
      <input
        bind:value={newsletter3.title}
        name="title3"
        type="text"
        minlength="5"
        class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
      />
      <label for="doc3">PDF</label>
      <input
        bind:value={newsletter3.doc}
        name="doc3"
        type="file"
        class="file"
        accept="application/pdf"
      />
    </div>
    <button
      class="variant-filled-surface btn mt-4 px-3 py-1"
      on:click|preventDefault={handlePreview}>Preview</button
    >
    {#if previewData.newsletters.length > 0}
      <h2 class="preview h2-primary mt-8">Preview</h2>
      <p class="p-primary">Does this look correct?</p>
      <p class="p-primary">Placholder images are used for the PDFs.</p>
      <div
        class="preview-wrapper center mt-8 flex w-[80%] max-w-[50em] flex-col flex-wrap rounded-lg border-2 border-white p-6"
      >
        <Newsletters data={previewData} />
      </div>
    {/if}
    {#if preview}
      <button
        class="variant-filled-surface btn mt-6 px-3 py-1"
        disabled={visible}
        formaction="/admin?/newsletters"
        on:click={submitHandler}>Submit</button
      >
    {/if}
    {#if visible}
      <aside class="alert variant-ghost mt-6 text-white">
        <div class="alert-message">
          <h3 class="h3">Success</h3>
          <p>Successfully updated newsletter data!</p>
        </div>
      </aside>
    {/if}
  </form>
</section>
