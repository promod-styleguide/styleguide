importScripts('/styleguide/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/styleguide/_nuxt/15e0d765ea59cd2b7b03.js",
    "revision": "7b19e018caac3f98cd47196e5889da5a"
  },
  {
    "url": "/styleguide/_nuxt/52a657c7dc7a9e730355.js",
    "revision": "af738eca9aa36f10a6dc6bb7877656eb"
  },
  {
    "url": "/styleguide/_nuxt/6416fd9a21dd17717180.js",
    "revision": "a829290df7dec6bbc0ba1f1b97c53afe"
  },
  {
    "url": "/styleguide/_nuxt/65ec9c2bf60e458aee21.js",
    "revision": "b71bfc458f211efebe9cc01717499780"
  },
  {
    "url": "/styleguide/_nuxt/67662919cf50a9810a1b.js",
    "revision": "d240c6edc41bb668cc309c37d5acd5a7"
  },
  {
    "url": "/styleguide/_nuxt/67f03ceb614eea16a0a5.js",
    "revision": "320f6e3145724a7e2e3cc08a1c48eaee"
  },
  {
    "url": "/styleguide/_nuxt/704915e7e6fd0da44c29.js",
    "revision": "589b39958cf42a3545c50b6efc70536c"
  },
  {
    "url": "/styleguide/_nuxt/817044246d07f01c8497.js",
    "revision": "0a3b817de4b70abda39d4a3140ea5acf"
  },
  {
    "url": "/styleguide/_nuxt/82ff6b26d5bc7705a76f.js",
    "revision": "e41f6f48ad6ef8dc5a017d489ccd4cb3"
  },
  {
    "url": "/styleguide/_nuxt/95bee52ec3865027f80d.js",
    "revision": "611bad8224c409d5167055656a0632ec"
  },
  {
    "url": "/styleguide/_nuxt/baedb3e498bb54f4321d.js",
    "revision": "474f9337420a6800762b94825d54fed8"
  },
  {
    "url": "/styleguide/_nuxt/c3dfc8678101cff57f09.js",
    "revision": "11f2763c60a2f658d057e738e6afa0ab"
  },
  {
    "url": "/styleguide/_nuxt/d041b82f4418158513fe.js",
    "revision": "02c8ed22e2d9b697ecf489626e1c1c77"
  },
  {
    "url": "/styleguide/_nuxt/d79791133f6660c1c46d.js",
    "revision": "63698e8eedad636e404d3dc0244081ac"
  },
  {
    "url": "/styleguide/_nuxt/da8c30a9622f980920bf.js",
    "revision": "da250a44421e0eea01447877520b8beb"
  },
  {
    "url": "/styleguide/_nuxt/ec96be2c4fac25a89b0d.js",
    "revision": "2c9487391859eb1a5c24ffc4ca946c13"
  }
], {
  "cacheId": "styleguide",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/styleguide/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/styleguide/.*'), workbox.strategies.networkFirst({}), 'GET')
