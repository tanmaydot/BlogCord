import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
