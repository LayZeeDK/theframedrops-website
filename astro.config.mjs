import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [// Enable Preact to support Preact JSX components.
    preact(), // Enable React for the Algolia search component.
    mdx(),
    vue()
  ],
  site: `https://theframedrops.com`,
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      }
    }
  }
});