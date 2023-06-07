import SignupComponent from './Signup.svelte';

export default {
  title: 'Components/Signup',
  component: SignupComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({});

export const SignupComponentStory = Template.bind({});
