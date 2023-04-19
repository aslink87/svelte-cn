import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}', 'tests/*.{test,spec}.{js,ts}'],
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      $: resolve('./src'),
      $fonts: mode === 'production' ? './static/fonts' : '../fonts',
    },
  },
  svelte: {
    // ignore unused css selectors - see https://github.com/sveltejs/svelte/issues/1594#issuecomment-546775545
    // eslint-disable-next-line
    // @ts-ignore
    onwarn: (warning, handler) => {
      const { code } = warning;
      if (code === 'css-unused-selector') return;

      if (handler) handler(warning);
    },
  },
}));
