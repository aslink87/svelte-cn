// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: "@import './src/styles/globals.scss';",
      },
    }),
    vitePreprocess({}),
  ],

  kit: {
    adapter: adapter(),
    csrf: {
      checkOrigin: false,
    },
  },
};

export default config;
