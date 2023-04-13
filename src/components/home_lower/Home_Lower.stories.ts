import HomeLowerComponent from './Home_Lower.svelte';

export default {
  title: 'Components/HomeLower',
  component: HomeLowerComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({});

export const HomeLowerStory = Template.bind({});
