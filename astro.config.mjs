// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Confirmed live in Netlify (Production domains, Aug 2026) as the Primary
// domain, with Netlify DNS and a valid SSL cert. Must match SITE_URL in
// src/lib/config.ts exactly.
const SITE = 'https://passionhubmarketing.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Never index the Decap CMS admin panel, or the post-form-submit
      // thank-you page (noindexed in Layout.astro — no search value).
      filter: (page) => !page.includes('/studio') && !page.includes('/thank-you'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});