import { Workbox } from 'workbox-window'

if (typeof window !== 'undefined' && 'serviceWorker' in navigator && typeof caches !== 'undefined') {
  window.workbox = new Workbox(window.location.origin + __PWA_SW__, { scope: __PWA_SCOPE__ })

  window.workbox.addEventListener('activated', () => {
    caches.delete('next-data').catch(() => {})
  });

  if (__PWA_ENABLE_REGISTER__) {
    window.workbox.register()
  }

  if (__PWA_RELOAD_ON_ONLINE__) {
    window.addEventListener('online', () => {
      location.reload()
    })
  }
}
