<script lang="ts">
  import type { BlogType } from '$/types';
  import { enhance } from '$app/forms';

  interface BlogEditor extends BlogType {
    id?: string;
  }

  export let blog: BlogEditor;
</script>

<section class="admin-blog-editor center w-full">
  <form
    class="center m-6 mx-auto flex w-fit flex-col rounded border-2 border-white p-6"
    action="admin?/blogUpdate"
    method="POST"
    use:enhance
  >
    {#each Object.keys(blog) as key}
      {#if key === 'id'}
        <input
          bind:value={blog[key]}
          name={key}
          type="text"
          minlength={10}
          class="invisible"
          style="border: 2px solid red"
        />
      {:else if key === 'date'}
        <label class="capitalize" for={key}>{key}</label>
        <input
          bind:value={blog[key]}
          name={key}
          type="date"
          minlength={10}
          class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
          required={true}
          style="border: 2px solid red"
        />
      {:else if key === 'title'}
        <label class="capitalize" for={key}>{key}</label>
        <input
          bind:value={blog[key]}
          name={key}
          type="text"
          minlength={5}
          class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
          required={true}
          style="border: 2px solid red"
        />
      {:else if key === 'content'}
        <label class="capitalize" for={key}>{key}</label>
        <textarea
          bind:value={blog[key]}
          name={key}
          minlength={15}
          class="area my-4 min-h-[200px] min-w-[50em] rounded-lg px-4 text-primary-600"
          required={true}
          style="border: 2px solid red"
        ></textarea>
      {:else if key === 'caption'}
        <label class="capitalize" for={key}>{key}</label>
        <input
          bind:value={blog[key]}
          name={key}
          type="text"
          minlength={5}
          class="text my-4 w-[600px] rounded-lg px-4 text-primary-600"
          required={false}
        />
      {:else if key === 'img'}
        <label class="capitalize" for={key}>{key}</label>
        <input
          bind:value={blog[key]}
          name="image"
          type="file"
          class="file my-4"
          required={false}
          accept="image/jpeg, image/png"
        />
        {#if blog[key]}
          <img
            class="mb-4 hidden max-h-[300px] max-w-[800px] rounded object-scale-down md:flex"
            src={`${import.meta.env.VITE_PUBLIC_ASSET_URL}${blog[key]}`}
            alt="placeholder"
          />
        {:else}
          <p>No image found</p>
        {/if}
      {/if}
    {/each}
    <button class="variant-filled-surface btn mt-6 px-3 py-1" type="submit">Submit</button>
  </form>
</section>
