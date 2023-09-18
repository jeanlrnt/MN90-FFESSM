const cacheName = 'mn90-ffessm-calculator-v1';
const assets = [
    './',
    './manifest.json',
    './index.html',
    './js/common-lang.js',
    './js/MN90.js',
    './js/script.js',
    './css/style.css',
    './icons/512x512.png',
    './icons/favicon.ico'
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
