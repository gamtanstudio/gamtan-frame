/* 감탄 액자 — 홈 화면 설치용 최소 서비스워커 (캐시하지 않음) */
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(){ /* 그대로 통과 */ });
