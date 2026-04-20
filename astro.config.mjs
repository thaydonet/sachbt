import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sach.booktoan.com',
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    tailwind(),
    // sitemap() // Tạm thời tắt do xung đột với hybrid mode
  ],
});