"use strict";var precacheConfig=[["/react/index.html","0714597f78947ae2cb2617792a926cae"],["/react/static/css/main.78958251.css","645d1cf85bd4d9f8a012fa5512f0e0b5"],["/react/static/js/main.5e0fac00.js","8fa85c4a76f5da3f38d7e8a377c4bbbc"],["/react/static/media/basketball.f79634ea.jpg","f79634ea58fc85366836fe9f9c0026fb"],["/react/static/media/bike.c8ada24d.jpg","c8ada24dd2a5774e04ca59843cebb08d"],["/react/static/media/football.b1021e29.jpg","b1021e29e205a81ff96cb89a78e470c3"],["/react/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/react/static/media/running.439b0073.jpg","439b0073c50bd4956c89ad66cf812827"],["/react/static/media/skiing.c6cf1238.jpg","c6cf1238a9dedc7b1263c4fa261efef4"],["/react/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/react/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/react/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/react/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/react/static/media/surf.2571b795.jpg","2571b795f4e593cfcadc03367d0c6093"],["/react/static/media/weather-slide-1.b80ae6d7.jpg","b80ae6d739ab42bed2a77c6e586f98e7"],["/react/static/media/weather-slide-2.f5632029.jpg","f56320292c09d57b796a6dee048800b7"],["/react/static/media/weather-slide-3.b140c110.jpg","b140c110d8ddc04755b5e1d1715ff51b"],["/react/static/media/weather-slide-4.8ec10a1b.jpg","8ec10a1b4e581f0ed966fc97a27fb984"],["/react/static/media/yoga.192c86ac.jpg","192c86ac894a3c007c45b2ed43d82e45"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});