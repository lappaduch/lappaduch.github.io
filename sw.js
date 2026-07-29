self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil((async()=>{const k=await caches.keys();await Promise.all(k.map(x=>caches.delete(x)));await self.registration.unregister();const cl=await self.clients.matchAll();cl.forEach(c=>c.navigate(c.url));})());});
