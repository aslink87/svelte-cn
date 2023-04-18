<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import type {
    AboutPageMissionDataType,
    AboutPageFiveCsType,
    AboutPageLeadershipType,
    AboutPageStaffType,
  } from '$/types';

  interface IData {
    missionData: AboutPageMissionDataType;
    fiveCs: AboutPageFiveCsType;
    leadership: AboutPageLeadershipType;
    staff: AboutPageStaffType[];
  }

  export let data: IData;

  seo.set({
    title: 'CN - About',
    description: 'Christian Neighbors - About',
  });
</script>

<section class="about-mission">
  <h1>{data.missionData.title}</h1>
  <h2>{data.missionData.subtitle}</h2>
  <ul class="first-list">
    {#each data.missionData.list1 as item}
      <li>{item}</li>
    {/each}
  </ul>
  <ul class="second-list">
    {#each data.missionData.list2 as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>

<section class="about-fivecs">
  <h1>{data.fiveCs.title}</h1>
  <ul>
    {#each data.fiveCs.items as item}
      <li>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </li>
    {/each}
  </ul>
</section>

<section class="about-leadership">
  <h2>Our Board</h2>
  <ul>
    {#each data.leadership.board as item}
      <li>{item.title}: {item.name}</li>
    {/each}
  </ul>
  <h2>Resource Development Team</h2>
  <ul>
    {#each data.leadership.resourceDevelopment as item}
      <li>{item.name}</li>
    {/each}
  </ul>
  <h2>Finance Team</h2>
  <ul>
    {#each data.leadership.financeTeam as item}
      <li>{item.name}</li>
    {/each}
  </ul>
</section>

<section class="about-staff" id="staff">
  <h1>Meet the Staff</h1>
  <ul>
    {#each data.staff as item}
      <li>
        <img src={item.img} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.title}</p>
        <p class="content">{item.content}</p>
        {#if item.email}
          <a href="mailto:{item.email}">{item.email}</a>
        {/if}
        {#if item.ext}
          <p>(269) 685-4166 ext {item.ext}</p>
        {/if}
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .about-mission {
    @include center;
    text-align: center;
    color: $white;
    padding: 2rem 0;

    h1 {
      @include h1-primary;
    }

    h2 {
      @include h2-primary;
      margin: auto;
      max-width: 60em;
    }

    ul {
      list-style-type: disc;
      max-width: 60em;
      margin: 2rem auto;
      text-align: left;

      &:first-of-type {
        padding-bottom: 2rem;
        border-bottom: 2px solid $white;
      }
    }
  }

  .about-fivecs {
    @include component;
    @include center;
    background-color: rgba($color: $gray, $alpha: 0.6);
    text-align: center;
    color: $white;
    padding: 2rem;
    margin-bottom: 0;

    h1 {
      @include h1-primary;
    }

    ul {
      list-style-type: none;
      max-width: 60em;
      margin: 2rem auto;
      text-align: left;

      h2 {
        @include h2-primary;
        text-align: center;
        margin: 1rem auto;
        max-width: 60em;
      }
    }
  }

  .about-leadership {
    @include center;
    text-align: center;
    color: $white;
    padding: 2rem 0;

    h2 {
      @include h2-primary;
    }

    ul {
      @include center;
      display: grid;
      gap: 10px;
      width: 80%;
      margin: 2rem auto 4rem auto;
      grid-template-columns: 30% 30% 30%;
      list-style-type: none;

      li {
        padding: 20px;
        &:nth-child(2n) {
          background-color: rgba($color: $gray, $alpha: 0.6);
          border-radius: 5px;
        }
      }
    }
  }

  .about-staff {
    @include component;
    @include center;
    background-color: rgba($color: $gray, $alpha: 0.6);
    text-align: center;
    color: $white;
    padding: 2rem;
    margin-bottom: 0;

    ul {
      @include center;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
      gap: 2em 3em;

      li {
        width: 300px;
        height: 650px;
        background-color: $deep-blue;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba($black, 0.2);

        img {
          width: 100%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        a {
          @include btnPrimary;
          background-color: rgba($color: $gray, $alpha: 0.6);
          font-size: 14px;
          margin: auto 1rem;
        }

        p:first-of-type {
          font-family: Inter-Bold;
          font-size: 26px;
        }

        .content {
          margin: auto 1rem 1rem 1rem;
          font-size: 16px;
        }
      }
    }
  }
</style>
