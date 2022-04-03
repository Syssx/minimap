// ==UserScript==
// @name        r/Place PlaceCZ Minimap
// @namespace   http://tampermonkey.net/
// @description r/Place MLP Minimap 🇺🇦 #StandWithUkraine edited to fit PlaceCZ needs - https://github.com/r-ainbowroad/minimap
// @include     https://hot-potato.reddit.com/embed*
// @version     0.1
// @grant       GM.xmlHttpRequest
// @author      Ponywka, bb010g, Syssx
// @downloadURL https://github.com/Syssx/minimap/raw/d/main/minimap.user.js
// @updateURL   https://github.com/Syssx/minimap/raw/d/main/minimap.user.js
// @connect     raw.githubusercontent.com
// @connect     media.githubusercontent.com
// @require     https://unpkg.com/uhtml@2.8.1
// ==/UserScript==

const _TamperRoot = this;
(async function () {
  // Updater
  GM.xmlHttpRequest({
    method: "GET",
    url: `https://github.com/Syssx/minimap/raw/d/main/minimap.impl.user.js?t=${new Date().getTime()}`,
    onload: function (res) {
      new Function(res.responseText)(_TamperRoot);
    },
  });
})();
