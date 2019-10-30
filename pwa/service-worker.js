self.addEventListener('install', function(event) {
  console.log('Service Worker installed')
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
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
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});