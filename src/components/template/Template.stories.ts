import TemplateComponent from './Template.svelte';

export default {
  title: 'Components/Template',
  component: TemplateComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({});

export const TemplateComponentStory = Template.bind({});
