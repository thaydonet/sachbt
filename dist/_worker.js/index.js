globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_CE9xhvU8.mjs';
import { createExports } from './_@astrojs-ssr-adapter.mjs';
import { manifest } from './manifest_CHKZnZ-d.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/hinh-hoc-khong-gian/quan-he-song-song.astro.mjs');
const _page2 = () => import('./pages/khao-sat-ham-so/dao-ham.astro.mjs');
const _page3 = () => import('./pages/luong-giac/cong-thuc-co-ban.astro.mjs');
const _page4 = () => import('./pages/nguyen-ham-tich-phan/nguyen-ham.astro.mjs');
const _page5 = () => import('./pages/phuong-trinh/phuong-trinh-bac-hai.astro.mjs');
const _page6 = () => import('./pages/phuong-trinh/phuong-trinh-bac-nhat.astro.mjs');
const _page7 = () => import('./pages/thong-ke/so-trung-binh.astro.mjs');
const _page8 = () => import('./pages/toa-do-oxy/vector.astro.mjs');
const _page9 = () => import('./pages/toa-do-oxyz/vector-khong-gian.astro.mjs');
const _page10 = () => import('./pages/xac-suat/khai-niem-co-ban.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/hinh-hoc-khong-gian/quan-he-song-song.mdx", _page1],
    ["src/pages/khao-sat-ham-so/dao-ham.mdx", _page2],
    ["src/pages/luong-giac/cong-thuc-co-ban.mdx", _page3],
    ["src/pages/nguyen-ham-tich-phan/nguyen-ham.mdx", _page4],
    ["src/pages/phuong-trinh/phuong-trinh-bac-hai.mdx", _page5],
    ["src/pages/phuong-trinh/phuong-trinh-bac-nhat.mdx", _page6],
    ["src/pages/thong-ke/so-trung-binh.mdx", _page7],
    ["src/pages/toa-do-oxy/vector.mdx", _page8],
    ["src/pages/toa-do-oxyz/vector-khong-gian.mdx", _page9],
    ["src/pages/xac-suat/khai-niem-co-ban.mdx", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
