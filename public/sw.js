if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const t=e=>a(e,c),o={module:{uri:c},exports:i,require:t};s[c]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(r(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts("fallback-Nmugk_Zyk-6l0kLaNJUk1.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Nmugk_Zyk-6l0kLaNJUk1/_buildManifest.js",revision:"bb4e2c58c59bc8ecbc42c426f7fb55b4"},{url:"/_next/static/Nmugk_Zyk-6l0kLaNJUk1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/147.2dec711728767ed2.js",revision:"2dec711728767ed2"},{url:"/_next/static/chunks/181.58d47296695bc127.js",revision:"58d47296695bc127"},{url:"/_next/static/chunks/550-4f6300797aa02006.js",revision:"4f6300797aa02006"},{url:"/_next/static/chunks/ee9ce975-168cb2d64e15e285.js",revision:"168cb2d64e15e285"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-58fef9cbb954efe4.js",revision:"58fef9cbb954efe4"},{url:"/_next/static/chunks/pages/_app-afea05a4d7feed0b.js",revision:"afea05a4d7feed0b"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/_offline-bbb064c6ce6a75f6.js",revision:"bbb064c6ce6a75f6"},{url:"/_next/static/chunks/pages/index-fdd9cc26b5e5d4aa.js",revision:"fdd9cc26b5e5d4aa"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a8631ce0286687d4.js",revision:"a8631ce0286687d4"},{url:"/_next/static/css/9f27f9f172b8ee6f.css",revision:"9f27f9f172b8ee6f"},{url:"/_next/static/css/da97de403f6afbc1.css",revision:"da97de403f6afbc1"},{url:"/_offline",revision:"Nmugk_Zyk-6l0kLaNJUk1"},{url:"/favicon.ico",revision:"7ae82b5fe36094b44e4eef267501c7ce"},{url:"/fonts/comfortaa.ttf",revision:"b14da82fd326fb23ada0b4df443cda25"},{url:"/fonts/roboto_mono.ttf",revision:"336102a48d996db3d945a346b1790b1f"},{url:"/logo.png",revision:"5c7ef0337e8717d49192c14d14f7645e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og.png",revision:"a6b35937a400af1a10bd793faa0d4777"},{url:"/preview.png",revision:"48f5bdd37e1040b7df80b61f465f84d4"},{url:"/vercel.svg",revision:"12854fc11fdc3d498acbb4892fc90fbb"},{url:"/wallpaper1.jpg",revision:"9a14b8b2c9494052fab98e31e76bb929"},{url:"/wallpaper2.jpg",revision:"fc31a4991e5b4d9c1949e8c69883d3e6"},{url:"/wallpaper3.jpg",revision:"dc333fd9505a10d27b3edffd364ac48f"},{url:"/wallpaper4.jpg",revision:"9ef317ff15a417d4efef582ee6104d93"},{url:"/wallpaper5.jpg",revision:"5a361f76408122ccf73fc496bcd26ff1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
