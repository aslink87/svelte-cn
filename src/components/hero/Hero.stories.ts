import type { HeroType } from '$/types';
import HeroComponent from './Hero.svelte';

export default {
  title: 'Components/Hero',
  component: HeroComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args: { data: HeroType }) => ({
  Component: HeroComponent,
  props: args,
});

export const HeroComponentStory = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore storybook is annoying
HeroComponentStory.args = {
  data: {
    title: 'Hero Title',
    content: 'Hero Content',
    link: 'https://www.google.com',
  },
};
