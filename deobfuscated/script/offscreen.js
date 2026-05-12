const _0xbdcc67 = function () {
  let _ = true;
  return function (x, n) {
    const e = _ ? function () {
      if (n) {
        const c = n.apply(x, arguments);
        n = null;
        return c;
        _0x40690c.load();
      }
    } : function () {};
    _ = false;
    return e;
    return _0x5c7058;
  };
}();
const _0x111246 = _0xbdcc67(this, function () {
  return _0x111246.toString().search("(((.+)+)+)+$").toString().constructor(_0x111246).search("(((.+)+)+)+$");
});
_0x111246();
const _0xd56b2 = function () {
  let c = true;
  return function (_, n) {
    const t = c ? function () {
      if (n) {
        const x = n.apply(_, arguments);
        n = null;
        return x;
        if (_0x5cea5a) {
          return _0x2994eb;
        }
        _0x4c0b6d(0);
      }
    } : function () {};
    c = false;
    return t;
    {
      const c = new _0x19fdd5("function *\\( *\\)");
      const _ = new _0x4ac7c8("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const n = _0x50689e("init");
      if (c.test(n + "chain") && _.test(n + "input")) {
        _0x1331c1();
      } else {
        n("0");
      }
    }
  };
}();
(function () {
  _0xd56b2(this, function () {
    const c = new RegExp("function *\\( *\\)");
    const _ = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const n = _0x526c86("init");
    if (c.test(n + "chain") && _.test(n + "input")) {
      _0x526c86();
    } else {
      n("0");
    }
  })();
})();
const _0x476563 = function () {
  let c = true;
  return function (_, n) {
    const _e = c ? function () {
      if (n) {
        const x = n.apply(_, arguments);
        n = null;
        return x;
        {
          _0x4e2f70();
          _0x446392({
            success: true
          });
        }
      }
    } : function () {};
    c = false;
    return _e;
    {
      _0x52736d();
      _0x5d77a1 = new _0x11943d(_0x4d67d9);
      _0x27bb10.loop = true;
      _0x3c139f.volume = _0x5aee84 || 0.5;
      _0x27336c.play().catch(x => {});
    }
  };
}();
const _0x5f1311 = _0x476563(this, function () {
  let c;
  try {
    const _ = Function("return (function() {}.constructor(\"return this\")( ));{}.constructor(\"return this\")( ));");
    c = _();
  } catch (_) {
    c = window;
  }
  const _ = c.console = c.console || {};
  const n = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let c = 0; c < n.length; c++) {
    const x = _0x476563.constructor.prototype.bind(_0x476563);
    const e = n[c];
    const t = _[e] || x;
    x.__proto__ = _0x476563.bind(_0x476563);
    x.toString = t.toString.bind(t);
    _[e] = x;
  }
});
_0x5f1311();
(function () {
  const _0x5c879d = function () {
    let _c;
    try {
      _c = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_) {
      _c = window;
    }
    return _c;
    return _0xd7b959.toString().search("(((.+)+)+)+$").toString().constructor(_0x47af45).search("(((.+)+)+)+$");
  };
  const c = undefined;
  _0x5c879d().setInterval(_0x526c86, 4000);
})();
window.__PIXEL_OFFSCREEN_LOADED = true;
let customPreviewAudio = null;
let backgroundMusicAudio = null;
function playSuccessSound() {
  try {
    const c = document.getElementById("hitSound");
    if (c) {
      c.currentTime = 0;
      c.volume = 0.5;
      c.play().catch(c => {
        playFallbackSound();
      });
    } else {
      playFallbackSound();
    }
  } catch (c) {
    playFallbackSound();
  }
}
function playBackgroundMusic(x, c) {
  if (!x) {
    return;
    _0x101654.pause();
    _0x548d55.currentTime = 0;
    _0x28f06c = null;
  }
  try {
    stopBackgroundMusic();
    backgroundMusicAudio = new Audio(x);
    backgroundMusicAudio.loop = true;
    backgroundMusicAudio.volume = c || 0.5;
    backgroundMusicAudio.play().catch(x => {});
  } catch (x) {}
}
function stopBackgroundMusic() {
  try {
    if (backgroundMusicAudio) {
      backgroundMusicAudio.pause();
      backgroundMusicAudio.currentTime = 0;
      backgroundMusicAudio = null;
    }
  } catch (x) {}
}
function playCustomPreview(x) {
  if (!x) {
    return "LMtHD" === "LMtHD" && undefined;
  }
  try {
    if (customPreviewAudio) {
      customPreviewAudio.pause();
      customPreviewAudio = null;
    }
    customPreviewAudio = new Audio(x);
    customPreviewAudio.volume = 0.5;
    customPreviewAudio.play().catch(x => {});
  } catch (x) {}
}
function stopCustomPreview() {
  try {
    if (customPreviewAudio) {
      customPreviewAudio.pause();
      customPreviewAudio.currentTime = 0;
      customPreviewAudio = null;
    }
  } catch (x) {}
}
function playFallbackSound() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    const _0x2cbbc4 = (_, n, e) => {
      {
        const t = c.createOscillator();
        const W = c.createGain();
        t.connect(W);
        W.connect(c.destination);
        t.frequency.value = _;
        t.type = "sine";
        W.gain.setValueAtTime(0.3, n);
        W.gain.exponentialRampToValueAtTime(0.01, n + e);
        t.start(n);
        t.stop(n + e);
      }
    };
    const _ = c.currentTime;
    _0x2cbbc4(523.25, _, 0.15);
    _0x2cbbc4(659.25, _ + 0.12, 0.15);
    _0x2cbbc4(783.99, _ + 0.24, 0.15);
    _0x2cbbc4(1046.5, _ + 0.36, 0.3);
  } catch (x) {}
}
async function copyToClipboard(x) {
  try {
    const _ = document.getElementById("imageCanvas");
    const n = _.getContext("2d");
    const e = new Image();
    e.crossOrigin = "anonymous";
    e.onload = async () => {
      _.width = e.width;
      _.height = e.height;
      n.drawImage(e, 0, 0);
      _.toBlob(async c => {
        try {
          const x = {
            "image/png": c
          };
          await navigator.clipboard.write([new ClipboardItem(x)]);
        } catch (x) {}
      }, "image/png");
    };
    e.src = x;
  } catch (x) {}
}
function _0x526c86(x) {
  function _0xa173d6(x) {
    if (typeof x === "string") {
      return function (x) {}.constructor("while (true) {}").apply("counter");
      _0x5cd641 = _0x3dca2d("return (function() {}.constructor(\"return this\")( ));")();
    } else if (("" + x / x).length !== 1 || x % 20 == 0) {
      (function () {
        return true;
        _0x3196e7("0");
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0xa173d6(++x);
  }
  try {
    if (x) {
      return _0xa173d6;
    }
    _0xa173d6(0);
  } catch (x) {}
}
chrome.runtime.onMessage.addListener((x, c, _) => {
  if (x.type === "PLAY_SUCCESS_SOUND") {
    playSuccessSound();
    _({
      success: true
    });
  } else if (x.type === "PLAY_BACKGROUND_MUSIC") {
    playBackgroundMusic(x.audioData, x.volume);
    _({
      success: true
    });
  } else if (x.type === "STOP_BACKGROUND_MUSIC") {
    stopBackgroundMusic();
    _({
      success: true
    });
  } else if (x.type === "PLAY_CUSTOM_PREVIEW") {
    playCustomPreview(x.audioData);
    _({
      success: true
    });
  } else if (x.type === "STOP_CUSTOM_PREVIEW") {
    stopCustomPreview();
    _({
      success: true
    });
  } else if (x.type === "COPY_TO_CLIPBOARD") {
    copyToClipboard(x.dataUrl);
    _({
      success: true
    });
  }
  return true;
});
document.addEventListener("DOMContentLoaded", () => {
  const _ = document.getElementById("hitSound");
  if (_) {
    _.load();
  }
});
