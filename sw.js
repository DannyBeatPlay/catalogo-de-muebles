const CACHE = 'nova-home-v1';
const ASSETS = [
  '/catalogo-de-muebles/',
  '/catalogo-de-muebles/index.html',
  '/catalogo-de-muebles/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
