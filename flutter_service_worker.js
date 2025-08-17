'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2660bc82f056463a82321d19bd53888e",
"version.json": "6dcc07b7f17504b58c5c5def56c46729",
"index.html": "062f272b20d2040a2cf171469d118700",
"/": "062f272b20d2040a2cf171469d118700",
"main.dart.js": "7fc2180f83a8279cf385f6a504cace22",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "502f9680d257be81ec7539cd216e6642",
"icons/Icon-192.png": "502f9680d257be81ec7539cd216e6642",
"icons/Icon-maskable-192.png": "502f9680d257be81ec7539cd216e6642",
"icons/Icon-maskable-512.png": "502f9680d257be81ec7539cd216e6642",
"icons/Icon-512.png": "502f9680d257be81ec7539cd216e6642",
"manifest.json": "0d3231349e168f6e40733085458f2a35",
"assets/AssetManifest.json": "8cf51aca8ed0874b83cfe6dc38ff5153",
"assets/NOTICES": "b4a0eca1d3c412c785c8480abdce73bb",
"assets/FontManifest.json": "becbaa624fb202d7c89d66f94fe4be73",
"assets/AssetManifest.bin.json": "468d7f711f577b8df175a41d138546f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c24b7d624892023276bfe70f5cc3526f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2aba6db6e0a5dc81bdb82176f1a4d81b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "122d79d5d92f90f04bc79b3d06d14108",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "35a04916c57e95dea598e0ed6fd60b18",
"assets/fonts/MaterialIcons-Regular.otf": "30c51b319131d183328e25b834977092",
"assets/assets/music/intro.mp3": "9174fc31d35b8cacae97f75d7c3b1a4b",
"assets/assets/images/background_h.jpg": "664ea5b201dec574646226aee22de303",
"assets/assets/images/element/Green%2520and%2520White%2520Elegant%2520Wedding%2520Invitation.png": "50906a607f3c5cffdd588d3420add7c2",
"assets/assets/images/element/_Green%2520White%2520Watercolor%2520Flowers%2520Wedding%2520Invitation%2520Instagram%2520Story.png": "04e9d74a0730a6153ef8a567b9ad56fa",
"assets/assets/images/element/Floral%2520Wedding%2520Ceremony%2520Invitation%2520(1).png": "56b1f693364c1f0f4006187ae12a824c",
"assets/assets/images/element/Floral%2520Wedding%2520Ceremony%2520Invitation%2520(2).png": "71126fec62fc8308939a599aa0c774e2",
"assets/assets/images/element/Floral%2520Wedding%2520Ceremony%2520Invitation%2520(3).png": "8ea5c87927249bd4769e4e978fa58c5b",
"assets/assets/images/element/flower.png": "0384de05341f76783c97688f5144e8a0",
"assets/assets/images/element/Floral%2520Wedding%2520Ceremony%2520Invitation.png": "a376895fe169fb429a7457fe161977f4",
"assets/assets/images/element/Green%2520Floral%2520Together%2520With%2520Their%2520Families%2520Invitation.png": "f92b1006c3a5b0ac59e3a1230c8b42cd",
"assets/assets/images/ta_photo/hom.jpeg": "79d5317f5eb34ec3a99e54c971621bac",
"assets/assets/images/ta_photo/IMG_0475.JPG": "03fa14c4cd97b2ac31bb8b0a1d39dd8f",
"assets/assets/images/ta_photo/E-Invitation%2520Card.png": "5cd654c6242c7bb3e76a6022f8ac9d87",
"assets/assets/images/ta_photo/IMG_0660.JPG": "5b4bea89e3c677daedee17ea4c6748e0",
"assets/assets/images/ta_photo/IMG_0644.JPG": "8025a267144bb6148c26b2369c4d32c7",
"assets/assets/images/ta_photo/IMG_0445.JPG": "bc3ff5e603a87693a8dd8901ca2bdcf6",
"assets/assets/images/ta_photo/IMG_0524.JPG": "ed3c6fbbbeedcbfdd923bbd6410b634d",
"assets/assets/images/ta_photo/IMG_0643.JPG": "d3004047836bc6dc082c6c9ad234cfc1",
"assets/assets/images/background_v.jpg": "487e38db0add0e072c789214448cef16",
"assets/assets/images/cover.jpg": "fd28694d9da171f699df76f08de87565",
"assets/assets/images/4.jpg": "f9fd4eec258173e0ce45de87206dd401",
"assets/assets/images/3.jpg": "493117af6437916c7dbdb0fcaecd08b2",
"assets/assets/images/1.jpg": "2f08a68d86ee6bc3e76a64d2178d05f8",
"assets/assets/fonts/Suwannaphum.ttf": "4e62d6a9f07bc0246db9fab5b70aeaa3",
"assets/assets/fonts/Kh%2520Ang%2520Chittbous.ttf": "28e58e38f924a3fac2f31ae860402e16",
"assets/assets/fonts/KhmerOSSiemreap.ttf": "d586f04d96bedb5b1fceac44f77ad2d3",
"assets/assets/fonts/Angkor.ttf": "c211c833b4b306c1fc26aa2b24076496",
"assets/assets/fonts/Kh%2520Ang%2520Moul%2520Seda%2520%255BV.2.30%255D.ttf": "e6e64e5bd49970edf0a3a58efd3247fe",
"assets/assets/fonts/Handycheera%2520Regular.otf": "b38d3faf16ee4e25602bbf76336b90c9",
"assets/assets/fonts/GERALDINE%2520PERSONAL%2520USE.ttf": "f54f980c88361538e9f438bddf5eb509",
"assets/assets/fonts/Yeliska%2520Dasmithe%2520DEMO%2520VERSION.ttf": "c4a6856512c4a1e53832001c1dc4fdcb",
"assets/assets/fonts/KhmerOSMoulLight.ttf": "7b996be20a59b464bc170ecb6bebca39",
"assets/assets/fonts/Kh%2520Ang%2520Silbak.ttf": "cb60976eb09a9cb623e6eea014215310",
"assets/assets/fonts/Themundayfreeversion-Regular.ttf": "51162b799dd96aa684113af6a848187d",
"assets/assets/fonts/OdorMeanChey.ttf": "d41928435133fc9a521035c044b06060",
"assets/assets/fonts/Winter%2520Sounds%2520Script.otf": "9637e4286d3d491952572b3fc2d77e44",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
