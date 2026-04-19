import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }), tailwind()],
});