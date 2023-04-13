import ShowcaseComponent from './Showcase.svelte';

export default {
  title: 'Components/Showcase',
  component: ShowcaseComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({});

export const ShowcaseComponentStory = Template.bind({});
