<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';
  import { onMount } from 'svelte';

  seo.set({
    title: 'CN - Donate',
    description: 'Christian Neighbors - Donate',
  });

  onMount(async () => {
    const script = document.createElement('script');
    script.src = 'https://givebutter.com/js/widget.js';
    document.body.appendChild(script);
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
<section class="donate-widget" data-testid="donate-widget">
  <h1>Donate to Christian Neighbors</h1>
  <iframe
    title="donation-form"
    src="https://givebutter.com/embed/c/christian-neighbors-se"
    name="givebutter"
    frameborder="0"
    scrolling="yes"
    seamless
    allow="payment"
  />
</section>

<section class="donate-pantry" data-testid="donate-pantry">
  <h1>Food Pantry Donations</h1>
  <ul>
    {#each data.pantry as item}
      <li>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </li>
    {/each}
  </ul>
  {#if data.needs}
    <ul class="needs-list">
      {#if data.needs.item0}
        <li>{data.needs.item0}</li>
      {/if}
      {#if data.needs.item1}
        <li>{data.needs.item1}</li>
      {/if}
      {#if data.needs.item2}
        <li>{data.needs.item2}</li>
      {/if}
      {#if data.needs.item3}
        <li>{data.needs.item3}</li>
      {/if}
      {#if data.needs.item4}
        <li>{data.needs.item4}</li>
      {/if}
      {#if data.needs.item5}
        <li>{data.needs.item5}</li>
      {/if}
      {#if data.needs.item6}
        <li>{data.needs.item6}</li>
      {/if}
      {#if data.needs.item7}
        <li>{data.needs.item7}</li>
      {/if}
      {#if data.needs.item8}
        <li>{data.needs.item8}</li>
      {/if}
      {#if data.needs.item9}
        <li>{data.needs.item9}</li>
      {/if}
    </ul>
  {/if}
</section>

<section class="donate-legacy" data-testid="donate-legacy">
  <h1>Leaving A Legacy</h1>
  <p>
    Did you know that you can leave a lasting legacy with a meaningful planned gift that cost you
    nothing during your lifetime? Once your family and friends are provided for, we hope you
    consider a legacy gift that strengthens our community families forever, a part of your life
    story. Your Legacy gift will help ensure that our services will be available for future
    generations.
  </p>
  <h2>Ways to Leave a Legacy</h2>
  <p>
    Designating a legacy gift in your will or trust is one of the most effective and sustainable
    ways to leave a lasting gift in your name. There are a few ways people give this gift to
    Christian Neighbors.
  </p>
  <ul>
    {#each data.legacy as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>

<!-- <style lang="scss"> -->
<!--   section { -->
<!--     @include center; -->
<!--     padding: 2rem 1rem; -->
<!---->
<!--     &:nth-child(2n) { -->
<!--       @include component; -->
<!--       background-color: rgba($color: $gray, $alpha: 0.6); -->
<!--     } -->
<!---->
<!--     iframe { -->
<!--       width: 50rem; -->
<!--       min-height: 25rem; -->
<!--       overflow: scroll; -->
<!---->
<!--       @include md { -->
<!--         width: calc(100% - 2rem); -->
<!--       } -->
<!--       @include sm { -->
<!--         width: calc(100% - 2rem); -->
<!--       } -->
<!--       @include xs { -->
<!--         width: calc(100% - 1rem); -->
<!--       } -->
<!--     } -->
<!---->
<!--     h1 { -->
<!--       @include h1-primary; -->
<!--       margin-bottom: 2rem; -->
<!--     } -->
<!---->
<!--     h2 { -->
<!--       @include h2-primary; -->
<!--       margin: 1rem auto; -->
<!--     } -->
<!---->
<!--     p { -->
<!--       @include p; -->
<!--     } -->
<!---->
<!--     ul { -->
<!--       @include ul; -->
<!---->
<!--       li { -->
<!--         margin-top: 3rem; -->
<!--       } -->
<!--     } -->
<!--   } -->
<!---->
<!--   .donate-pantry { -->
<!--     .needs-list { -->
<!--       li { -->
<!--         list-style-type: disc; -->
<!--         text-align: left; -->
<!--         max-width: 30rem; -->
<!--         margin: 0.5rem auto; -->
<!--         text-transform: capitalize; -->
<!--       } -->
<!--     } -->
<!--   } -->
<!---->
<!--   .donate-legacy { -->
<!--     li { -->
<!--       list-style-type: disc; -->
<!--       text-align: left; -->
<!--       max-width: 50rem; -->
<!--       margin: 1rem auto; -->
<!--     } -->
<!--   } -->
<!-- </style> -->
