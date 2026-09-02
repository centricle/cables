// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Astro 7 defaults this to 'jsx', which strips the whitespace between a text
  // node and an adjacent element and silently glues words together ("Built
  // byksmith"). `true` restores the v5 behavior byte for byte, at a few
  // percent more HTML before gzip. See rig/runbooks/ASTRO_UPGRADE.md.
  compressHTML: true,
  site: 'https://cables.fyi',
  output: 'static',
  integrations: [sitemap()],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    port: 7007,
    allowedHosts: true,
  },
});
