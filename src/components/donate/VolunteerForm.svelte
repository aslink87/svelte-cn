<script lang="ts">
  import { enhance } from '$app/forms';
  import FormFeedback from './FormFeedback.svelte';

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

  export let form: { success: boolean } | null;
</script>

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
    <FormFeedback {form} />
  {/if}
</section>
