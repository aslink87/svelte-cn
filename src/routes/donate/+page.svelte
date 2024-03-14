<script lang="ts">
  import { enhance } from '$app/forms';
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import { onMount } from 'svelte';

  seo.set({
    title: 'CN - Donate',
    description: 'Christian Neighbors - Donate',
  });

  let gbIframe = null;

  onMount(async () => {
    const script = document.createElement('script');
    script.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=kaQXU8wtHafFHQIC&p=other';
    document.body.appendChild(script);

    gbIframe = document.getElementById('pX5oZj');
    if (gbIframe) {
      gbIframe.style.width = '100%';
      gbIframe.style.margin = 'auto';
      gbIframe.style.display = 'inline-block';
    }
  });

  const fields = [
    {
      text: 'name *',
      type: 'text',
      required: true,
      length: 5,
      value: 'name',
      data: '',
    },
    {
      text: 'phone',
      type: 'number',
      required: false,
      length: 10,
      value: 'phone',
      data: '',
    },
    {
      text: 'email',
      type: 'text',
      required: false,
      length: 10,
      value: 'email',
      data: '',
    },
  ];

  interface IData {
    pantry: { title: string; content: string }[];
    legacy: string[];
    needs: {
      item0: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      item5: string;
      item6: string;
      item7: string;
      item8: string;
      item9: string;
    };
  }

  export let data: IData;
  export let form: { success: boolean } | null;
</script>

<Seo title={$seo.title} description={$seo.description} />

<section class="donate-widget center flex flex-col pt-8" data-testid="donate-widget">
  <h1 class="h1-primary">Donate to Christian Neighbors</h1>
  <div class="py-4 md:w-[420px]">
    <givebutter-widget id="pX5oZj" class="gb-frame"></givebutter-widget>
  </div>
  <h2 class="h2-primary" id="donate-wishlist">
    Checkout our <a
      href="https://www.amazon.com/hz/wishlist/ls/2XNGDCKBEWI88/ref=nav_wishlist_lists_1?_encoding=UTF8&type=wishlist"
      target="_blank"
      class="underline"
      rel="noopener noreferrer">Amazon wishlist</a
    >
  </h2>
</section>

<section
  class="donate-legacy center component bg-surface-500/60"
  id="donate-legacy"
  data-testid="donate-legacy"
>
  <h1 class="h1-primary">Leaving A Legacy</h1>
  <p class="p-primary my-8">
    Did you know that you can leave a lasting legacy with a meaningful planned gift that cost you
    nothing during your lifetime? Once your family and friends are provided for, we hope you
    consider a legacy gift that strengthens our community families forever, a part of your life
    story. Your Legacy gift will help ensure that our services will be available for future
    generations.
  </p>
  <h2 class="h2-primary mb-4">Ways to Leave a Legacy</h2>
  <p class="p-primary">
    Designating a legacy gift in your will or trust is one of the most effective and sustainable
    ways to leave a lasting gift in your name. There are a few ways people give this gift to
    Christian Neighbors.
  </p>
  <ul class="list-disc pt-4 text-left">
    {#each data.legacy as item}
      <li class="p-primary mt-4">{item}</li>
    {/each}
  </ul>
</section>

<section class="donate-pantry center component" id="donate-pantry" data-testid="donate-pantry">
  <h1 class="h1-primary">Food Pantry Donations</h1>
  <ul>
    {#each data.pantry as item}
      <li>
        <h2 class="h2-primary mb-4 mt-8">{item.title}</h2>
        <p class="p-primary">{item.content}</p>
      </li>
    {/each}
  </ul>
  {#if data.needs}
    <ul class="needs-list mx-auto my-6 max-w-[30rem] text-left capitalize sm:list-disc">
      {#if data.needs.item0}
        <li class="p-primary">{data.needs.item0}</li>
      {/if}
      {#if data.needs.item1}
        <li class="p-primary">{data.needs.item1}</li>
      {/if}
      {#if data.needs.item2}
        <li class="p-primary">{data.needs.item2}</li>
      {/if}
      {#if data.needs.item3}
        <li class="p-primary">{data.needs.item3}</li>
      {/if}
      {#if data.needs.item4}
        <li class="p-primary">{data.needs.item4}</li>
      {/if}
      {#if data.needs.item5}
        <li class="p-primary">{data.needs.item5}</li>
      {/if}
      {#if data.needs.item6}
        <li class="p-primary">{data.needs.item6}</li>
      {/if}
      {#if data.needs.item7}
        <li class="p-primary">{data.needs.item7}</li>
      {/if}
      {#if data.needs.item8}
        <li class="p-primary">{data.needs.item8}</li>
      {/if}
      {#if data.needs.item9}
        <li class="p-primary">{data.needs.item9}</li>
      {/if}
    </ul>
  {/if}
</section>

<section
  class="donate-unaccepted center component bg-surface-500/60"
  data-testid="donate-unaccepted"
>
  <h1 class="h1-primary">Items we dont accept</h1>
  <h2 class="h2-primary my-8">TODO</h2>
</section>

<section
  class="donate-volunteer center component"
  id="donate-volunteer"
  data-testid="donate-pantry"
>
  <h1 class="h1-primary">Volunteer</h1>
  <p class="p-primary my-8">
    Leave your name and either a phone number, email, or both and we'll reach out to you soon.
    Thanks!
  </p>
  <form class="center flex flex-col" method="POST" use:enhance>
    {#each fields as field}
      <label class="capitalize" for={field.value}>{field.text}</label>
      {#if field.text === 'name *'}
        <input
          bind:value={field.data}
          name={field.value}
          type="text"
          minlength={field.length}
          class="my-4 w-[90%] rounded-lg px-4 text-primary-600 sm:w-[400px]"
          required={field.required}
        />
      {:else if field.text === 'phone'}
        <input
          bind:value={field.data}
          name={field.value}
          type="tel"
          minlength={field.length}
          class="my-4 w-[90%] rounded-lg px-4 text-primary-600 sm:w-[400px]"
          required={field.required}
        />
      {:else}
        <input
          bind:value={field.data}
          name={field.value}
          type="email"
          minlength={field.length}
          class="my-4 w-[90%] rounded-lg px-4 text-primary-600 sm:w-[400px]"
          required={field.required}
        />
      {/if}
    {/each}
    <button
      disabled={typeof form?.success === 'boolean'}
      class="variant-filled-surface btn px-3 py-1">Submit</button
    >
  </form>
  {#if form}
    {#if form.success}
      <aside
        class="alert variant-ghost mx-auto mt-6 flex w-fit flex-col gap-6 bg-green-600/40 text-white ring-white"
      >
        <div class="alert-message">
          <p>Success!</p>
        </div>
      </aside>
    {:else if !form.success}
      <aside
        class="alert variant-ghost-error mx-auto mt-6 flex w-fit flex-col bg-red-500/30 text-white ring-white"
      >
        <div class="alert-message">
          <p>Failed to submit! Refresh the page and try again.</p>
        </div>
        <button class="variant-glass btn" on:click={() => window.location.reload()}>Reload?</button>
      </aside>
    {/if}
  {/if}
</section>
