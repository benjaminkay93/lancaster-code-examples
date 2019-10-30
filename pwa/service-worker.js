self.addEventListener('install', function(event) {
  console.log('Service Worker installed')
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated')
});

self.addEventListener('fetch', function(event) {
  console.log('A Client has fetched a resource')
});