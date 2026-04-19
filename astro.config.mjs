import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sach.booktoan.com', // Thay đổi domain này thành domain thật của bạn
  integrations: [react(), mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }), tailwind(), sitemap()],
});