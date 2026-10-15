import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// shortcut: hébergé sur GitHub Pages sous /que-faire-bruxelles ; quand un domaine est posé, mettre SITE_URL=https://domaine et BASE_PATH=/ dans deploy.yml
export default defineConfig({
  site: process.env.SITE_URL || 'https://galise332.github.io',
  base: process.env.BASE_PATH || '/que-faire-bruxelles',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
