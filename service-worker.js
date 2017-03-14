/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["dist/build.js","2daa3d47e90562b9468e1a6fdf6b47ab"],["src/assets/css/bootstrap.min.css","bb884d3b6b6b09481c5dc25fb4fac7e5"],["src/assets/css/copa_style.css","503b46cc137914ef927aae5c5a3e2a9f"],["src/assets/css/font-awesome.css","4bb3dd721c4652feee0953261d329710"],["src/assets/css/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["src/assets/css/normalize.css","3f2d15ccdd5b9cc08e32def5e3360e7c"],["src/assets/img/1980.jpg","84466d2c719762af6d15e5b3ffef93a4"],["src/assets/img/1992.jpg","7fcade82945a79729e98dd20691678f0"],["src/assets/img/1998.jpg","dd9d07e9909cf6dfe1aec4a1481ea293"],["src/assets/img/2000.jpg","be3fb9722082f79c79baae6bc7e623c0"],["src/assets/img/2005.jpg","f0027eb8ff9f5037b0fae0f0a2269edb"],["src/assets/img/2006.jpg","767d2fd666b2a2c68039f6c108557b35"],["src/assets/img/2008.jpg","446df1be0dca42431f45247d9e05f8bd"],["src/assets/img/2009.jpg","858633a38f91f9429a5bcedbf22abc78"],["src/assets/img/2010.jpg","3c74cb95e2ca44a1ba5610f1aa059125"],["src/assets/img/2011.jpg","310881caa786c6f093ab3cdcaecacdab"],["src/assets/img/2012.jpg","68dc3df544972fedf829c2038832d5e9"],["src/assets/img/20120718-banner-sample-01.jpg","6c0fd0a9c1ce868a954e31a9beb20334"],["src/assets/img/20120824-banner-caribe.jpg","5e725b0b7e529f087b4439386a3d506a"],["src/assets/img/20120824-banner-es-posible.jpg","8fb2e352cd0b43616f6c630dcf68eb11"],["src/assets/img/20121119-banner-sample-01.jpg","71ed1348b33faf735401cfecb3cbbd2c"],["src/assets/img/2013.jpg","8658cb5153ba6686d99a4c5af8fec5c1"],["src/assets/img/2014.jpg","6cf17bb88195e26bbf155cb99d0602e8"],["src/assets/img/COPA_STAR_LOGO.svg","7ea1986f3927bd8cd3d1acc726eef616"],["src/assets/img/COPA_STAR_LOGO_BLACK.png","8a0c72a515ec99d46c4c60fe7ef7244c"],["src/assets/img/HubdelasAmericas-v1 (1).jpg","f0118b83d5caee092d944777e634d6b8"],["src/assets/img/HubdelasAmericas-v1 (2).jpg","f0118b83d5caee092d944777e634d6b8"],["src/assets/img/HubdelasAmericas-v1.jpg","f0118b83d5caee092d944777e634d6b8"],["src/assets/img/banner-01.jpg","3c58cec801999fe17032c628c58f280a"],["src/assets/img/banner-02.jpg","aed68775288bcf55a43b8f6dd7996d5c"],["src/assets/img/banner-03.jpg","2b80252ae9694cf80b99ea7fa9cfa81b"],["src/assets/img/banner-04.jpg","ff0ced572d045e44071faaffba6792d0"],["src/assets/img/banner-05.jpg","81bae0b8bf9fbf56ab801ec85f0ab4b3"],["src/assets/img/banner-06.jpg","1e7e360e142eb9dff6e0f13e69e511dc"],["src/assets/img/banner-emergencias.jpg","2811bbee199e19d7d3e2617f130b8525"],["src/assets/img/bg-alerts-error.png","04ae76a20fe0b866ac832e2edc07c409"],["src/assets/img/bg-alerts.png","5287fbe87f4cddcaf6881b7f32586211"],["src/assets/img/bg-ask-ana.png","9de08b8d40b6be87688d7618af7694b0"],["src/assets/img/bg-button-blue.png","0951a94b1fb643920f9b7582886da21a"],["src/assets/img/bg-button.png","bf6e20085051199b5cb311174d08d0ea"],["src/assets/img/bg-direction-nav.png","54ac72bb129a4ee4220f5ef4b07bbb92"],["src/assets/img/bg-fat-footer-header.png","609b8efa61d97dce00384d986330c206"],["src/assets/img/bg-fat-footer-main.png","aca828650d745f188f7fc9ceca0fb75d"],["src/assets/img/bg-homepage-panel-flifo.jpg","6a51e726500e5ff14b624c091c531a71"],["src/assets/img/bg-homepage-panel-manage.jpg","249aa9b5c41f0f35f897f8a53ddb417e"],["src/assets/img/bg-homepage-panel-mileageplus.jpg","6e9a4a6cf9df1931f5e81c5405a19521"],["src/assets/img/bg-homepage-panel-webcheckin.jpg","9fc3cc68ff31de94e899c22194b451d2"],["src/assets/img/bg-homepage-subtabs.png","358d2e907f6a02bd3837e8a28140d0c0"],["src/assets/img/bg-input-error.gif","1b97e58df09a617b533e0c9a9466200f"],["src/assets/img/bg-input.png","7c3204d2d4fc6f58ee9aaea74d2cbcc0"],["src/assets/img/bg-nav-main-gray.png","976db0146380bbfb28321f61e6f3623a"],["src/assets/img/bg-nav-main.png","8df44fcacddeadca088b92576fe33b82"],["src/assets/img/bg-selector-dark.png","62bcc62b21720fc71290dca1b01fa522"],["src/assets/img/bg-selector-panel.png","d5598e92a309576b472d574778392a7b"],["src/assets/img/bg-selector.png","158e102483c91916620bb990a1b459b8"],["src/assets/img/bg-subpanel-destinations.png","5ff9f80166c7865c32c8cf93581e7358"],["src/assets/img/bg-subpanel.png","8ae3c02c908f62b68e45a5309f005cb5"],["src/assets/img/bg-subtabs-homepage.png","479bf3df94419e45cea0647543f90f13"],["src/assets/img/bg_direction_nav.png","9e5752b77ffa8370202c5944bbef1255"],["src/assets/img/boeing700.jpg","9a4806e911a5ffccd42ce44f58468889"],["src/assets/img/boeing800.jpg","e29c42c3ee74fed3dff74a1b3939d722"],["src/assets/img/btn-calendar.png","bc149f5853c8414ad1b831400d740424"],["src/assets/img/btn-city-list.png","667538545e06ea5df15a6d42dd9f7795"],["src/assets/img/btn-close-panel.png","27bfa68e2974c350f6b55fa5423cb3c7"],["src/assets/img/btn-facebook.png","78faeb877e40823ae38b79cea520a5f3"],["src/assets/img/btn-google-plus.png","5ac03492bf9e66c68d6413fff056e89b"],["src/assets/img/btn-pinterest.png","72b9ce570f5ee1c60f855768aa66467d"],["src/assets/img/btn-twitter.png","a9c199df8cbf779f7420d63c0e186369"],["src/assets/img/btn-youtube.png","5f3bbc134c0d154a0a4f632a54f238da"],["src/assets/img/chrome-logo.png","0229d02ddda0a1d27f379c51cd8a1c54"],["src/assets/img/copaLogoBlack.png","ab1a3b7cb4b7a8ccf88d7aa12584ff2f"],["src/assets/img/embraerAR.jpg","98abbd7e0190fb91f5ae5bc3f8ed88ad"],["src/assets/img/explorer-logo.png","de1134318c6da57a726daca9d5290bf9"],["src/assets/img/facebook-logo.png","d9d6e380d3fac810864fdd4fc1b1caae"],["src/assets/img/google-plus-logo.png","25d5233fe5771e4b8d1b41871263807f"],["src/assets/img/hub-americas-mapa-L.jpg","b9c4613f2dc92317fefd71d0bb04a722"],["src/assets/img/icon-asiento-business-class.png","ac94c89880af7e42c8dcd89d91479689"],["src/assets/img/icon-asiento-cabina-principal.png","a124ba254cde6c9b21440de509305242"],["src/assets/img/icon-detalles-tecnicos.png","460a686897d9cc9aa555b137e7c65215"],["src/assets/img/icon-entretenimient-a-bordo.png","cbb567d7d2a4bc65aa5b808a807b9039"],["src/assets/img/icons-alerts-emergency.png","1d90064d62fd98ce67cd1b1fc8373d72"],["src/assets/img/icons-alerts-error.png","42d96c3bbe6ca26fc96f40c84e9fa3f8"],["src/assets/img/icons-alerts-mechanical.png","0b73b73a0d26d42c34228500c1bcebfd"],["src/assets/img/icons-alerts-weather.png","5e07b11f7e2e96d0b9fd1fafbf85a260"],["src/assets/img/icons-flifo.png","093ea1a4cfc8bfdc25125e48302b1f4c"],["src/assets/img/icons-locale.png","cc20d15657fcd9dd4d569a5fd9810096"],["src/assets/img/icons-mileageplus.png","99c550724301761bf4fe037d8b8b2765"],["src/assets/img/icons-selector.png","66c810ace692a5dcfeec58a4e2c2cd74"],["src/assets/img/instagram-logo.png","67d0093e68043e79859e0d47e6f9dda4"],["src/assets/img/loading.gif","1a1126d863dc58e565df7db6d0f332be"],["src/assets/img/logo-copa-blanco.png","2ca50ffa277eda25011e604b34300d01"],["src/assets/img/logo-copa-star-alliance.jpg","8defa58c84af23a8aea56bbec2150270"],["src/assets/img/logo-copaair-star-alliance-02.png","a54e9f11ac59c7de5409af06a1c184c9"],["src/assets/img/logo-hub-de-las-americas-pt.jpg","e050d3ecffa79b76616f9b2d9d764236"],["src/assets/img/logo-lfg-en.png","cf9393e7e10d255b440ae1e8b02465ec"],["src/assets/img/logo-lfg-es.png","391c0514f740b73dcdc6bc32b5288a23"],["src/assets/img/logo-lfg-pt.png","04478ffc2690188439aaec8e14e791e9"],["src/assets/img/logo_copa.jpg","3b3ba878670d78f9063800834f8cefa6"],["src/assets/img/logo_hub.jpg","ec7206f98c428856f671f7c3eccea406"],["src/assets/img/mozilla-logo.png","660b4da51b8771c4eca0880e4b448549"],["src/assets/img/promo-web.png","234c5f14e3a2b1e6fe8c5ff4e4755be0"],["src/assets/img/safari-logo.png","56358ab1a3634a844523fc1175f3c992"],["src/assets/img/star-alliance-logo-black.png","bb7debbd7c4e80fe292580b93ade5aa7"],["src/assets/img/star-alliance-logo.png","6deb504f1f232d34f1533ac825f2e1f3"],["src/assets/img/twitter-logo.png","fb454e105b6a538f01014713499ac2d6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







