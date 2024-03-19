<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Education',
    description: 'Christian Neighbors - Education',
  });
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="education component center flex flex-col pt-8" data-testid="education">
  <h1 class="h1-primary mb-8">Education Resource Center</h1>
  <p class="p-primary mb-4">
    There's a lot going on in the new Education Resource Center at Christian Neighbors.
  </p>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="md:max-w-96">
      <img class="rounded-lg object-scale-down" src="/images/erc1.jpg" alt="classroom gathering" />
    </div>
    <div class="md:max-w-96">
      <img
        class="rounded-lg object-scale-down"
        src="/images/erc2.jpg"
        alt="demo kitchen gathering"
      />
    </div>
    <div class="md:max-w-96">
      <img class="rounded-lg object-scale-down" src="/images/lab1.jpg" alt="classroom gathering" />
    </div>
    <div class="md:max-w-96">
      <img
        class="rounded-lg object-scale-down"
        src="/images/classroom1.jpg"
        alt="labroom gathering"
      />
    </div>
  </div>
  <p class="p-primary my-4">
    Our classes and programs focus on skill-building and personal development to help our neighbors
    reach stabilization in their life.
  </p>
  <p class="p-primary mb-4">
    While our offerings vary throughout the year, we typically offer classes in the following areas:
  </p>
  <ul>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">Computer Skills</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">Financial Literacy</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">Job Readiness</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">Senior Life Skills</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">Cooking and meal-prep</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Registering for support resources
    </li>
  </ul>
  <p class="p-primary my-4">
    You can view our current class offerings by checking out our <a
      href="/calendar"
      class="my-4 underline"
      data-sveltekit-preload-data
      target="_blank">calendar</a
    >
  </p>
  <p class="p-primary">
    If you have questions, would like to volunteer, or have ideas for offerings contact Kim Shafer
    at <a class="p-primary whitespace-nowrap" href="tel:+12696854166">(269)685-4166</a> extension
    102 or email her at
    <a class="p-primary underline" href="mailto:kshafer@christianneighbors.org"
      >kshafer@christianneighbors.org</a
    >
  </p>
</section>
