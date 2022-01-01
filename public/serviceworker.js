

const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install SW

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Open cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    // we respondWith what is there in caches.match
    caches.match(event.request).then(() => {
      // it matches all the request that our page is receiving like a request to show the image OR request for api call OR request to show new image
      // for all the request we fetch them again
      return fetch(event.request).catch(() => caches.match("offline.html"));
      // if it cannot fetch data(i.e when there is no intenet connection) at that stage this .catch gets called and simply return offline.html
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
