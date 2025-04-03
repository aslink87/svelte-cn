<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Education',
    description: 'Christian Neighbors - Education',
  });
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="education component center flex flex-col pt-16 sm:pt-8" data-testid="education">
  <h1 class="h1-primary">Education Resource Center</h1>
  <div class="md:max-w-112">
    <img class="rounded-lg object-scale-down" src="/images/erc-pill.png" alt="erc logo" />
  </div>
  <p class="p-primary my-4">
    All programs, classes, and services offered at the Christian Neighbors Education Resource Center
    (ERC) are free of charge and open to the entire community, regardless of income or resources.
    Our vision for the ERC is to connect community members through shared learning and life
    experiences.
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
    <!-- <div class="md:max-w-96"> -->
    <!--   <img -->
    <!--     class="rounded-lg object-scale-down" -->
    <!--     src="/images/classroom1.jpg" -->
    <!--     alt="labroom gathering" -->
    <!--   /> -->
    <!-- </div> -->
  </div>
  <p class="p-primary my-4">
    Our classes and programs focus on skill-building and personal development to help our neighbors
    reach stabilization in their lives.
  </p>
  <p class="p-primary mb-4">
    While our offerings vary throughout the year, we typically offer classes in the following areas:
  </p>
  <ul>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">computer skills</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">financial literacy</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">job readiness</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">senior life skills</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">cooking and meal-prep</li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      registering for support resources
    </li>
  </ul>
  <p class="p-primary my-4">
    You can view our current class offerings by checking out our
    <a class="underline" href="/events">calendar.</a>
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
<section
  class="resource-workshop component center flex flex-col bg-surface-500/60 pt-8"
  data-testid="resource-workshop"
>
  <h2 class="h2-primary mb-6">Resource Workshop</h2>
  <p class="p-primary">
    Every Monday from 10am-12pm, the computer lab at CN is available to you for your personal use.
    This independent time is great for working on any number of things that you'd like to
    accomplish. We have fast internet, new computers, printers, and friendly folks on hand to
    provide assistance if needed.
  </p>
  <ul class="my-6">
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Perhaps you'd like some help making sure you're signed up for any benefits available to you?
      We can assist with that!
    </li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Maybe you'd like a calm place to get some schoolwork done? We have room here for you!
    </li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Or you'd like to polish the resume? Or search and apply for a new job? Stop by and we'll help
      you prepare for success!
    </li>
  </ul>
  <p class="p-primary">
    Sometimes we even have themed Resource Workshop days. Including: how to earn your GED/Diploma,
    Medicare/Medicaid reenrollment, Home Heating Credit assistance, and more.
  </p>
  <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="md:max-w-96">
      <img class="rounded-lg object-scale-down" src="/images/lab1.jpg" alt="classroom gathering" />
    </div>
    <div class="md:max-w-96">
      <img class="rounded-lg object-scale-down" src="/images/lab3.jpg" alt="classroom gathering" />
    </div>
  </div>
</section>
