<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Testimonies',
    description: 'Christian Neighbors - Testimonies',
  });

  interface IData {
    data: { title: string; items: { content: string; img?: string; video?: string }[] };
  }

  export let data: IData;
</script>

<Seo title={$seo.title} description={$seo.description} />

<section class="testimonies center component pt-8" id="testimonies" data-testid="testimonies">
  <h1 class="h1-primary mb-8">{data.data.title}</h1>
  <ul>
    {#each data.data.items as item}
      <li class="center mx-auto flex flex-col py-6 xl:max-w-[70em] xl:flex-row">
        <p class="p-primary max-w-[45em] xl:ml-0 xl:text-left">{item.content}</p>
        {#if item.img}
          <img
            class="my-6 h-[200px] w-[200px] rounded-lg border-2 border-white object-cover xl:my-0"
            src={item.img}
            alt="testimony stock"
          />
        {/if}
        {#if item.video}
          <div
            class="my-6 h-fit w-[300px] rounded-lg border-2 border-white object-cover md:w-[400px] xl:my-0"
          >
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                title="client testimonial video"
                src="https://player.vimeo.com/video/574492668?h=44596c57ee"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</section>
