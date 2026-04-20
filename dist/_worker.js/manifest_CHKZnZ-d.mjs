globalThis.process ??= {}; globalThis.process.env ??= {};
import { j as decodeKey } from './chunks/astro/server_Dz4A5Bqw.mjs';
import './chunks/astro-designed-error-pages_D6mMPPQ_.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_g0NGnkUQ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/sachbt/","adapterName":"@astrojs/cloudflare","routes":[{"file":"hinh-hoc-khong-gian/quan-he-song-song/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hinh-hoc-khong-gian/quan-he-song-song","isIndex":false,"type":"page","pattern":"^\\/hinh-hoc-khong-gian\\/quan-he-song-song\\/?$","segments":[[{"content":"hinh-hoc-khong-gian","dynamic":false,"spread":false}],[{"content":"quan-he-song-song","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hinh-hoc-khong-gian/quan-he-song-song.mdx","pathname":"/hinh-hoc-khong-gian/quan-he-song-song","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"khao-sat-ham-so/dao-ham/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/khao-sat-ham-so/dao-ham","isIndex":false,"type":"page","pattern":"^\\/khao-sat-ham-so\\/dao-ham\\/?$","segments":[[{"content":"khao-sat-ham-so","dynamic":false,"spread":false}],[{"content":"dao-ham","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/khao-sat-ham-so/dao-ham.mdx","pathname":"/khao-sat-ham-so/dao-ham","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"luong-giac/cong-thuc-co-ban/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/luong-giac/cong-thuc-co-ban","isIndex":false,"type":"page","pattern":"^\\/luong-giac\\/cong-thuc-co-ban\\/?$","segments":[[{"content":"luong-giac","dynamic":false,"spread":false}],[{"content":"cong-thuc-co-ban","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/luong-giac/cong-thuc-co-ban.mdx","pathname":"/luong-giac/cong-thuc-co-ban","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"nguyen-ham-tich-phan/nguyen-ham/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nguyen-ham-tich-phan/nguyen-ham","isIndex":false,"type":"page","pattern":"^\\/nguyen-ham-tich-phan\\/nguyen-ham\\/?$","segments":[[{"content":"nguyen-ham-tich-phan","dynamic":false,"spread":false}],[{"content":"nguyen-ham","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nguyen-ham-tich-phan/nguyen-ham.mdx","pathname":"/nguyen-ham-tich-phan/nguyen-ham","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"phuong-trinh/phuong-trinh-bac-hai/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/phuong-trinh/phuong-trinh-bac-hai","isIndex":false,"type":"page","pattern":"^\\/phuong-trinh\\/phuong-trinh-bac-hai\\/?$","segments":[[{"content":"phuong-trinh","dynamic":false,"spread":false}],[{"content":"phuong-trinh-bac-hai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/phuong-trinh/phuong-trinh-bac-hai.mdx","pathname":"/phuong-trinh/phuong-trinh-bac-hai","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"phuong-trinh/phuong-trinh-bac-nhat/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/phuong-trinh/phuong-trinh-bac-nhat","isIndex":false,"type":"page","pattern":"^\\/phuong-trinh\\/phuong-trinh-bac-nhat\\/?$","segments":[[{"content":"phuong-trinh","dynamic":false,"spread":false}],[{"content":"phuong-trinh-bac-nhat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/phuong-trinh/phuong-trinh-bac-nhat.mdx","pathname":"/phuong-trinh/phuong-trinh-bac-nhat","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"thong-ke/so-trung-binh/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thong-ke/so-trung-binh","isIndex":false,"type":"page","pattern":"^\\/thong-ke\\/so-trung-binh\\/?$","segments":[[{"content":"thong-ke","dynamic":false,"spread":false}],[{"content":"so-trung-binh","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thong-ke/so-trung-binh.mdx","pathname":"/thong-ke/so-trung-binh","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"toa-do-oxy/vector/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/toa-do-oxy/vector","isIndex":false,"type":"page","pattern":"^\\/toa-do-oxy\\/vector\\/?$","segments":[[{"content":"toa-do-oxy","dynamic":false,"spread":false}],[{"content":"vector","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/toa-do-oxy/vector.mdx","pathname":"/toa-do-oxy/vector","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"toa-do-oxyz/vector-khong-gian/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/toa-do-oxyz/vector-khong-gian","isIndex":false,"type":"page","pattern":"^\\/toa-do-oxyz\\/vector-khong-gian\\/?$","segments":[[{"content":"toa-do-oxyz","dynamic":false,"spread":false}],[{"content":"vector-khong-gian","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/toa-do-oxyz/vector-khong-gian.mdx","pathname":"/toa-do-oxyz/vector-khong-gian","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"xac-suat/khai-niem-co-ban/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/xac-suat/khai-niem-co-ban","isIndex":false,"type":"page","pattern":"^\\/xac-suat\\/khai-niem-co-ban\\/?$","segments":[[{"content":"xac-suat","dynamic":false,"spread":false}],[{"content":"khai-niem-co-ban","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/xac-suat/khai-niem-co-ban.mdx","pathname":"/xac-suat/khai-niem-co-ban","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sach.booktoan.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/sachbt/src/pages/hinh-hoc-khong-gian/quan-he-song-song.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/khao-sat-ham-so/dao-ham.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/luong-giac/cong-thuc-co-ban.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/nguyen-ham-tich-phan/nguyen-ham.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/phuong-trinh/phuong-trinh-bac-hai.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/phuong-trinh/phuong-trinh-bac-nhat.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/thong-ke/so-trung-binh.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/toa-do-oxy/vector.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/toa-do-oxyz/vector-khong-gian.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/xac-suat/khai-niem-co-ban.mdx",{"propagation":"none","containsHead":true}],["D:/sachbt/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/hinh-hoc-khong-gian/quan-he-song-song@_@mdx":"pages/hinh-hoc-khong-gian/quan-he-song-song.astro.mjs","\u0000@astro-page:src/pages/khao-sat-ham-so/dao-ham@_@mdx":"pages/khao-sat-ham-so/dao-ham.astro.mjs","\u0000@astro-page:src/pages/luong-giac/cong-thuc-co-ban@_@mdx":"pages/luong-giac/cong-thuc-co-ban.astro.mjs","\u0000@astro-page:src/pages/nguyen-ham-tich-phan/nguyen-ham@_@mdx":"pages/nguyen-ham-tich-phan/nguyen-ham.astro.mjs","\u0000@astro-page:src/pages/phuong-trinh/phuong-trinh-bac-hai@_@mdx":"pages/phuong-trinh/phuong-trinh-bac-hai.astro.mjs","\u0000@astro-page:src/pages/thong-ke/so-trung-binh@_@mdx":"pages/thong-ke/so-trung-binh.astro.mjs","\u0000@astro-page:src/pages/toa-do-oxy/vector@_@mdx":"pages/toa-do-oxy/vector.astro.mjs","\u0000@astro-page:src/pages/toa-do-oxyz/vector-khong-gian@_@mdx":"pages/toa-do-oxyz/vector-khong-gian.astro.mjs","\u0000@astro-page:src/pages/xac-suat/khai-niem-co-ban@_@mdx":"pages/xac-suat/khai-niem-co-ban.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/phuong-trinh/phuong-trinh-bac-nhat@_@mdx":"pages/phuong-trinh/phuong-trinh-bac-nhat.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-renderers":"renderers.mjs","D:/sachbt/src/layouts/LessonLayout.astro":"chunks/LessonLayout_Bf8NxKN5.mjs","\u0000@astrojs-manifest":"manifest_CHKZnZ-d.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BlmAHQ63.js","D:/sachbt/src/components/Quiz.jsx":"_astro/Quiz.BpTT2sou.js","@astrojs/react/client.js":"_astro/client.BuOr9PT5.js","/astro/hoisted.js?q=1":"_astro/hoisted.CnLosnT4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/quan-he-song-song.CZoOR2dM.css","/_astro/quan-he-song-song.YtnlEMkg.css","/favicon.svg","/_astro/client.BuOr9PT5.js","/_astro/hoisted.BlmAHQ63.js","/_astro/hoisted.CnLosnT4.js","/_astro/index.CVf8TyFT.js","/_astro/Quiz.BpTT2sou.js","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/chunks/astro-designed-error-pages_D6mMPPQ_.mjs","/_worker.js/chunks/astro_HgElj5nI.mjs","/_worker.js/chunks/index_Dp39eeO9.mjs","/_worker.js/chunks/LessonLayout_Bf8NxKN5.mjs","/_worker.js/chunks/Navigation_CAy9aXrE.mjs","/_worker.js/chunks/noop-middleware_g0NGnkUQ.mjs","/_worker.js/chunks/Quiz_BlFzFjA1.mjs","/_worker.js/chunks/Theorem_BqGsGM2D.mjs","/_worker.js/chunks/_@astro-renderers_CE9xhvU8.mjs","/_worker.js/_astro/quan-he-song-song.CZoOR2dM.css","/_worker.js/_astro/quan-he-song-song.YtnlEMkg.css","/_worker.js/pages/hinh-hoc-khong-gian/quan-he-song-song.astro.mjs","/_worker.js/pages/khao-sat-ham-so/dao-ham.astro.mjs","/_worker.js/pages/luong-giac/cong-thuc-co-ban.astro.mjs","/_worker.js/pages/nguyen-ham-tich-phan/nguyen-ham.astro.mjs","/_worker.js/pages/phuong-trinh/phuong-trinh-bac-hai.astro.mjs","/_worker.js/pages/phuong-trinh/phuong-trinh-bac-nhat.astro.mjs","/_worker.js/pages/thong-ke/so-trung-binh.astro.mjs","/_worker.js/pages/toa-do-oxy/vector.astro.mjs","/_worker.js/pages/toa-do-oxyz/vector-khong-gian.astro.mjs","/_worker.js/pages/xac-suat/khai-niem-co-ban.astro.mjs","/_worker.js/chunks/astro/assets-service_yKqk78KF.mjs","/_worker.js/chunks/astro/env-setup_nxDOIah1.mjs","/_worker.js/chunks/astro/server_Dz4A5Bqw.mjs","/hinh-hoc-khong-gian/quan-he-song-song/index.html","/khao-sat-ham-so/dao-ham/index.html","/luong-giac/cong-thuc-co-ban/index.html","/nguyen-ham-tich-phan/nguyen-ham/index.html","/phuong-trinh/phuong-trinh-bac-hai/index.html","/phuong-trinh/phuong-trinh-bac-nhat/index.html","/thong-ke/so-trung-binh/index.html","/toa-do-oxy/vector/index.html","/toa-do-oxyz/vector-khong-gian/index.html","/xac-suat/khai-niem-co-ban/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"XtOZ1kzfvVZyn+OhsUjY4U3ThmAJnzkv0qGFGcT31z8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
