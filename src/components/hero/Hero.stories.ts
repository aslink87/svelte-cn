import HeroComponent from './Hero.svelte';

export default {
  title: 'Components/Hero',
  component: HeroComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({});

export const HeroComponentStory = Template.bind({});
