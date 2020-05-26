'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "78f2a5e2e076d45d1ee0e76a6a33376f",
"/": "78f2a5e2e076d45d1ee0e76a6a33376f",
"main.dart.js": "6c301204b5211ee39af0717e5287159e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1a51b96a88fb305f0c066fac045bed19",
"assets/LICENSE": "7da5bf8b31de4dad681843e16ea18d72",
"assets/AssetManifest.json": "31d09349ac03176153819b1e51edc795",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/pixabay_logo_square.png": "765324f9497bd6c9cefe5015f4aed611",
"assets/assets/images/pixabay_logo.png": "339bd4176f8e60b30c4060e8a6522e11"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
