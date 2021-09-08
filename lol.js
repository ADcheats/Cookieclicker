javascript: (function () {
  var checkReady = setInterval(function () {
  if (typeof Game.ready !== 'undefined' && Game.ready) {
    clearInterval(checkReady);
    Game.LoadMod('http://trigger-segfault.github.io/mods/trigger-cookies/TriggerCookies.js');
    Game.LoadMod('http://trigger-segfault.github.io/mods/trigger-cookies/EnhanceCookie.js');
    Game.LoadMod('http://trigger-segfault.github.io/mods/trigger-cookies/AutoCookie.js');
    Game.LoadMod('http://trigger-segfault.github.io/mods/trigger-cookies/StatCookie.js');
    Game.LoadMod('http://trigger-segfault.github.io/mods/trigger-cookies/CheatCookie.js');
    Game.LoadMod('http://trigger-segfault.github.io/mods/trigger-cookies/HotfixCookie.js');
  }}, 100);
}());
