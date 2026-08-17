// 最小のService Worker(キャッシュしない=常に最新を表示)
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ self.clients.claim(); });
self.addEventListener('fetch', function(e){ /* ネットワークにそのまま任せる */ });
