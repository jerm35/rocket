// Minimal service worker for the Rocket Device Import PWA.
// Network-only (no caching) — this is a live internal tool that always talks to
// the Worker API, so stale caching would do more harm than good. Present mainly
// so the app is installable and to claim its own scope under /rocket.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* fall through to network */ });
