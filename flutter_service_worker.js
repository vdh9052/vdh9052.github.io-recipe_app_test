'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2e3ed65cde6d6b91e9b52084474939c4",
".git/config": "42c1f7adc6f8b8d34672a30ab4665ccb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ace8b1557f8bb1dd0b5112cfe7518f0c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e350e89702f7a3fdde19692aeb64e0b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aec19b09ea11bd4992c623c63d67232a",
".git/logs/refs/heads/master": "aec19b09ea11bd4992c623c63d67232a",
".git/logs/refs/remotes/origin/master": "9738f888962bcfb30da25ef3b7e74219",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/43a9aa8a45517f02c71e4e925e1217a16581ba": "91d123006d65d1eae41082e9d9a87087",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/18b54bc600a01667d7d8d06fc04213eed171f7": "8ab85716a03125207aee0fbee54a8a8f",
".git/objects/13/280106fc885397aca4dd6f79b40ad3ee586411": "38a31847a5d0d329d03dd5f2a44fd5f2",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/67dfbc95db387c9443bb8197f2f70394cd4633": "dabd418451faef4a81c08260c896454f",
".git/objects/1a/3f84ecb95f99c03997d510887308a0702fa903": "08a33c2a88fd263cf6e54b440590fb08",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6a7a3478132d5566c92a1f3b40e94e313254ce": "69bfa3289d41e085c18b470ae64f4b18",
".git/objects/22/87e499e0c617205490bbc35991c5e594ced2cc": "aa6fd8490eb7da60fcd63b7df533523e",
".git/objects/25/26ffd5fa7fcf7bea6e3047b20ecaf57becce86": "8f5981ef00db5ac79d126c2cb0cf72ab",
".git/objects/2a/2d880246689ec8f1e1552cea6adaadb685b660": "917226500f517b3ff8b6a9971e608c2f",
".git/objects/33/d362e4519fc1e446c972c149aa9996d8c9d891": "09bc446f424f2a1282dd6525513e9810",
".git/objects/36/86fd11a680e5003b54c21f15063dcfb4364a8e": "4dd95e44ee6f5fafbc1472b12830a51f",
".git/objects/37/4560fe9c54e0f9b3db58640a2a8bcecb60d8c6": "1d8f0d673a6b220aaae48f209ffd927a",
".git/objects/37/6b045a1c347b157dc355e715fa47b54ce7336d": "7a39f306d5edf01f2e9ef933b8630f1c",
".git/objects/39/4b0167f5b5794377192a71c0c21ac6f0552afb": "bc83f1394fd1904d797cb80a5b2bd42b",
".git/objects/3d/d7d0589b2e46c34e31063899bd3784f4b8032a": "0a7949899e8d0bd03a8830a5c2d2a3c6",
".git/objects/3e/545eb13dabf1c4b3373ff06d7ae0e6a3491079": "2fe294d84deaffa9034d6e730c47f5fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/37440f653301434ccb12a1c315b2b6cfc6ac26": "7730740b5540ff404fe883d51ada07b9",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/ce48b89057dcf33171e92a3f29d6a2709380e2": "2cb07c8339ebbb1aed39fcbc3135e01c",
".git/objects/58/a9db1f8e3d97e278b3c152d4fbcb8f3ac8f09e": "71a8771b93fb9cffd780589804d9148a",
".git/objects/59/b396620b1bf6177293e2774bca5d40deaf4ea0": "4097120b6b57b5db0f042cb32896c9e4",
".git/objects/59/c5380ff001cce487b636471dd2263554e54450": "56ba14c0642a33a5711b9b3f5b73806b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/e7ca3e4121d86b3751914248746effad2a1041": "087fa293fdd28e535801a67d7a1c951e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6e/d6020499b462c66e0de1e886457372d625d547": "58556b640c72c61fac63cf6ecef087d3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/180f3bf2e573daf5ab2694f4c48fc9a2c22927": "69fb076362211092141115b8328e416f",
".git/objects/75/6c873191e976a338f8d1e33f39d4731b264d22": "8a9932bdcdb65799f6c9a8acd79f30cd",
".git/objects/76/856831cb47cd6e1d5b86d33d1614c77e46775f": "c1763034ab758e9cd844607bc191796e",
".git/objects/79/9bcf1584197865122458b8d7b6dc32d01d6035": "68cdd396bfde15475e98a32cc5e5a088",
".git/objects/7b/7b038bb6c912f9389b59a949dea31babc4feed": "94bdd345b83b4e0e308e537d19eff720",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/59693de3e65f44a6c1fcbaa2333e5ca46f751e": "a673da44696c83f19a270a58ce07ae9a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8169d8dcb2d5f72c1eaa03a4d6adecb18c5c9d": "b91417fca72fde24b1a89a66c6e66182",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4fbd5a681a103e23a6518f48d20ff26067535d": "6015d5551d6e4fc96bc5629842a87376",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/6ec71b63346abe7fd540ea0789984ca51f3155": "1dda3783c95c70969581e9543da7ac90",
".git/objects/99/2d167b7372a5093d574b68ca79601800788fe0": "acdb1e049e9e15b67526736095b46e8f",
".git/objects/a2/37d6807560a8e8079f212f1789193dc5c339b6": "8f261b100aedc18099d027ee9755b004",
".git/objects/a3/035f81190e58ee1c431c88500def56aa0677de": "620c540a47b52d79ff8cfa039f20faf7",
".git/objects/a7/51690affaeb5b4ff825562c3e349d384a6754b": "1e741886b88763bea76c111764274a03",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/ff300fe51514d025c1166f84ba820a89504303": "1164b6301c4d451bf431f0b3cc83041c",
".git/objects/b2/141c0ed9ae5ead0fe03546132bea2fbb4b1576": "a8d1f1ba17ea23fc5334b4460645f125",
".git/objects/b2/b007bb88a5ef99a2adf2e9891f8892d08308c4": "af3c74df9aa49ec725aca1aadc56374a",
".git/objects/b4/5699940523bf6d3d648860efdd9f1a4df412e4": "be33b44f51cb40d0d017f51d22817f9c",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/dbc8d108feea39644554628d983adab9d0332e": "61f325e8cc93211e665b6763fba4ea07",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9460913323a0f2b56cb0e003e7c97527c8d38e": "c67a4a1c821d5200c24ca8fed9155dac",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/776c997b5cf258175f543401a3ea5ed0215404": "1b85b31ac705f132eb4c33ca03cb2fe4",
".git/objects/bc/92beea7e91aebfedb01b5e301b28779e8f831c": "76a24f46346c79e9352cbce12695fd81",
".git/objects/c2/3bd2332dca6bbaef6d8b53f7144e8bc93dca41": "96bc78c7d3e21bb5806aab751594d134",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/e02a8b329d5cb0f0df689fee217d240f1ed8ed": "25b07fd532be05aee6bb18e5dd631d95",
".git/objects/ce/27a5276d24ad758440ad8ad7b9e5252736d522": "9461c0636c40abbb9303806bce75e623",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f95f07f1c7c4c4b44cc5a66c6809c62fac4f32": "78e4a929f41b5ae9e0f2bbab6ea564d5",
".git/objects/d5/4a2000173a66cbe10f2f3134f121b7f3396677": "b5b3c959843496932fda43ba919f284d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/86b8a484e04e8ab3e5737a5a8cb0693680273f": "a24a8176bf5db49a481d0d29e8468c3c",
".git/objects/dd/a2bc059239cfbe7f98d71e4a813953d4ee3f2d": "71702328b9fa58fbfeae8390f9eae788",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e5/b34336bb63d23452a4fb5f913b0b271d6b6080": "99940123a649ba91c7dcaa839aa5d42d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/18607c153f898fb409942d7055645d9d560824": "41696460219d28c212de55307da94137",
".git/objects/ea/92a90cb2791edd62fb4e458af2ffaabe1eeafd": "f9ebe7e21ff37fc9bb27001ac74b25da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/aa0cfbea1cf171628d39b46b727859b7a6ceec": "282306e8c6d1b8bab927849041aeaa61",
".git/ORIG_HEAD": "1de8a039de5dc944e6d141408d3fd27d",
".git/refs/heads/master": "626fa739187c5b5cd6af793aab78864f",
".git/refs/remotes/origin/master": "626fa739187c5b5cd6af793aab78864f",
"assets/AssetManifest.bin": "4a18fcc4b817710890b9ace2e33c746f",
"assets/AssetManifest.bin.json": "26d5225d4aee31d036b0163b1ecb0a5c",
"assets/AssetManifest.json": "78e50681705602c7dda2b1ab57f3f02a",
"assets/assets/pic%25204.jpg": "e52f82a86e95536830f916c4eb56ae67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "e4a7cce3bcf1be585971ea4b43a5a661",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77e04bd545cb071f67fa0e95f0016740",
"/": "77e04bd545cb071f67fa0e95f0016740",
"main.dart.js": "0a01a38a2a6c3a66c89acb6ac00e15dc",
"manifest.json": "ed796374377c4e917830f20574d5ab39",
"version.json": "4dd93112acc81419c938d23dbaee2046"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
