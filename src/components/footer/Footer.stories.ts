import Footer from './Footer.svelte';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
    layout: 'fullscreen',
  },
};

// TODO: implement $app/stores with storybook

const Template = (args: any) => ({
  Component: Footer,
  props: args,
});

export const FooterStory = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore storybook is annoying
FooterStory.args = {
  page: {
    data: {
      session: {
        user: {
          id: 'id',
          name: 'user',
          accounts: [],
          sessions: [],
          settings: {
            userSettings: {
              approved: true,
            },
          },
        },
      },
    },
  },
};
