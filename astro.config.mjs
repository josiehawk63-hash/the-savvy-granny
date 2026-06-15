// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain. Used for SEO canonical URLs, the sitemap, and social/share links.
export default defineConfig({
  site: 'https://thesavvygranny.com',
  integrations: [sitemap()],
});
