<script lang="ts">
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
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="donate-widget center flex flex-col pt-8" data-testid="donate-widget">
  <h1 class="h1-primary">Donate to Christian Neighbors</h1>
  <div class="py-4 md:w-[420px]">
    <givebutter-widget id="pX5oZj" class="gb-frame"></givebutter-widget>
  </div>
</section>

<section class="donate-pantry center component bg-surface-500/60" data-testid="donate-pantry">
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

<section class="donate-legacy center component" data-testid="donate-legacy">
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
