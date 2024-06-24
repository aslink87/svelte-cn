<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Calendar',
    description: 'Christian Neighbors - Calendar',
  });
</script>

<Seo title={$seo.title} description={$seo.description} />

<section class="calendar center component pt-8" data-testid="calendar">
  <h1 class="h1-primary">Upcoming Events</h1>
</section>
