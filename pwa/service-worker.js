self.addEventListener('install', function(event) {
  console.log('Service Worker installed')
  event.waitUntil(
    caches.open('pwa-cache').then(function(cache) {
      return cache.addAll(
        [
          '/index.html',
          '/manifest.json'
        ]
      );
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated')
});

self.addEventListener('fetch', function(event) {
  console.log('Client requested content')

  event.respondWith(
    caches.open('pwa-cache').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
