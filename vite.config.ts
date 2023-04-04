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
}));
