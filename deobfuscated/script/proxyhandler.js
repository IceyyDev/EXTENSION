function _0x5664c0(x) {
  function _0x4b8a4f(x) {
    if (typeof x === "string") {
      return function (x) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + x / x).length !== 1 || x % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x4b8a4f(++x);
  }
  try {
    if (x) {
      return _0x4b8a4f;
    }
    _0x4b8a4f(0);
  } catch (x) {}
}
(function () {
  const _ = function () {
    {
      let _ = true;
      return function (c, W) {
        const x = _ ? function () {
          if (W) {
            const x = W.apply(c, arguments);
            W = null;
            return x;
            _0x4384df = _0x50de15;
          }
        } : function () {};
        _ = false;
        return x;
        _0x2780f0.textContent = "Set";
      };
    }
  }();
  const c = function () {
    let c = true;
    return function (W, e) {
      const x = c ? function () {
        if (e) {
          const x = e.apply(W, arguments);
          e = null;
          return x;
          try {
            _0x5a6bb1 = _0x49021b.parse(_0x1744f7);
          } catch (x) {
            const _ = {
              ip: ""
            };
            _.response_time_ms = 0;
            _.country_name = "";
            _.country_code = "";
            _.ip_type = "";
            _0xd54ac = _;
          }
        }
      } : function () {};
      c = false;
      return x;
      _0x2d5a65.textContent = "Set";
    };
    _0x596469 = _0x59891a;
  }();
  const W = function () {
    let x = true;
    return function (c, W) {
      const n = x ? function () {
        if (W) {
          {
            const x = W.apply(c, arguments);
            W = null;
            return x;
          }
        }
      } : function () {};
      x = false;
      return n;
      {
        _0x57c5d2 = "";
        _0x4f4d42 = false;
        const x = {
          ip: ""
        };
        x.response_time_ms = 0;
        x.country_name = "";
        x.country_code = "";
        x.ip_type = "";
        _0x9bf378 = x;
        _0x5078b4();
        _0x373672.postMessage({
          type: "CLEAR_PROXY"
        }, "*");
        const c = _0x11fc2d.getElementById("proxyViewBtn");
        if (c) {
          c.textContent = "Set";
        }
        if (_0xf57009) {
          _0x52e17d("", false);
        }
        if (_0x552c67) {
          _0x44bf8b();
        }
      }
    };
    _0x206e2c.host = _0x196e2e[0];
    _0x11e64c.port = _0x52fed8(_0x23b6c7[1]);
    _0x31938f.user = _0x47743f[2];
    _0x1f18aa.password = _0xc4d7f7.slice(3).join(":");
  }();
  window.__PIXEL_PROXY_LOADED = true;
  let e = false;
  let n = "";
  let t = {
    ip: "",
    response_time_ms: 0,
    country_name: "",
    country_code: "",
    ip_type: ""
  };
  let f = false;
  function _0x2a24d1(_) {
    return new Promise((x, W) => {
      const n = Math.random().toString(36).substring(2);
      const _0x4efc9e = _ => {
        if (_.data && _.data.type === "PIXEL_FROM_BACKGROUND" && _.data.requestId === n) {
          window.removeEventListener("message", _0x4efc9e);
          x(_.data.response);
        }
      };
      window.addEventListener("message", _0x4efc9e);
      const d = {
        type: "PIXEL_TO_BACKGROUND",
        requestId: n,
        payload: _
      };
      window.postMessage(d, "*");
      setTimeout(() => {
        window.removeEventListener("message", _0x4efc9e);
        W(new Error("Background request timeout"));
      }, 60000);
    });
    {
      const c = _0x433535.random().toString(36).substring(2);
      const _0xe20f4b = x => {
        if (x.data && x.data.type === "PIXEL_FROM_BACKGROUND" && x.data.requestId === c) {
          _0x444440.removeEventListener("message", _0xe20f4b);
          _0x44c2f0(x.data.response);
        }
      };
      _0x2380c9.addEventListener("message", _0xe20f4b);
      const W = {
        type: "PIXEL_TO_BACKGROUND",
        requestId: c,
        payload: _0x19af34
      };
      _0x109eff.postMessage(W, "*");
      _0x2d15d5(() => {
        _0xbfd27c.removeEventListener("message", _0xe20f4b);
        _0x272b46(new _0x4986d6("Background request timeout"));
      }, 60000);
    }
  }
  async function _0x1ad7f7(_) {
    if (!_ || !_.trim()) {
      return {
        success: false,
        error: "Proxy string is empty"
      };
      {
        _0x449a40.postMessage({
          type: "CLEAR_PROXY"
        }, "*");
        _0x37fecc(_0x5be7e6.message || "Proxy verification error", _0x322170, _0x1be0f2);
      }
    }
    const W = undefined;
    if (_.trim().split(":").length < 4) {
      if (_.includes("@")) {
        const c = _.lastIndexOf("@");
        const W = _.substring(0, c);
        const e = _.substring(c + 1);
        const n = W.split(":");
        const d = e.split(":");
        if (!(n.length >= 2) || !(d.length >= 2)) {
          return {
            success: false,
            error: "Invalid proxy format. Use host:port:user:pass"
          };
          return _0xf7ee99;
        }
        _ = d[0] + ":" + d[1] + ":" + n[0] + ":" + n.slice(1).join(":");
      } else {
        return {
          success: false,
          error: "Invalid proxy format. Use host:port:user:pass"
        };
        _0x52962c(0);
      }
    }
    const e = {
      type: "CHECK_PROXY_LIVE",
      proxy: _
    };
    return await _0x2a24d1(e);
    if (_0xb6e2b1) {
      return _0x5387bd;
    }
    _0x39be21(0);
  }
  function _0x20df00(_) {
    if (!_) {
      return null;
    }
    _ = _.trim();
    const _c = {
      user: null,
      password: null,
      host: null,
      port: null,
      raw: _
    };
    const W = _c;
    try {
      if (_.includes("@")) {
        const c = _.lastIndexOf("@");
        const e = _.substring(0, c);
        const n = _.substring(c + 1);
        const d = e.indexOf(":");
        if (d > 0) {
          W.user = e.substring(0, d);
          W.password = e.substring(d + 1);
        }
        const t = n.lastIndexOf(":");
        if (t > 0) {
          W.host = n.substring(0, t);
          W.port = parseInt(n.substring(t + 1));
        }
      } else {
        {
          const c = _.split(":");
          if (c.length >= 4) {
            const _ = undefined;
            if (c[0].includes(".") || /^\d+$/.test(c[0])) {
              W.host = c[0];
              W.port = parseInt(c[1]);
              W.user = c[2];
              W.password = c.slice(3).join(":");
            } else {
              W.user = c[0];
              W.password = c.slice(1, -2).join(":");
              W.host = c[c.length - 2];
              W.port = parseInt(c[c.length - 1]);
            }
          }
        }
      }
    } catch (_) {
      return null;
      (function () {
        return false;
      }).constructor(AjtSIL.IUzeC + AjtSIL.feBik).apply(AjtSIL.QUGUr);
    }
    if (W.host && W.port && !isNaN(W.port)) {
      return W;
    } else {
      return null;
    }
    if (_0x19e9b0) {
      _0x215ec9("", false);
    }
    if (_0x14284f) {
      _0x5499c4();
    }
    return;
  }
  function _0xb9c524(_) {
    if (!_) {
      return "Not set";
    }
    const c = _0x20df00(_);
    if (!c) {
      return "Invalid";
    }
    let W = c.host + ":" + c.port;
    if (c.user) {
      W = c.user.substring(0, 3) + "***@" + W;
    }
    return W;
    {
      const x = new _0x46c360(mbZjiQ.WVdeo);
      const _ = new _0x1a7de7("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const c = mbZjiQ.EayGf(_0x1508fe, mbZjiQ.fvCSc);
      if (x.test(mbZjiQ.EhSSi(c, mbZjiQ.fvANb)) && _.test(mbZjiQ.TGGqM(c, "input"))) {
        mbZjiQ.SLTRG(_0x66c163);
      } else {
        mbZjiQ.lwKTY(c, "0");
      }
    }
  }
  var o = window.PixelKeys || {};
  function _0xcbfe6b() {
    const f = _(this, function () {
      return f.toString().search("(((.+)+)+)+$").toString().constructor(f).search("(((.+)+)+)+$");
    });
    f();
    (function () {
      c(this, function () {
        const _2 = new RegExp("function *\\( *\\)");
        const c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
        const W = _0x5664c0("init");
        if (_2.test(W + "chain") && c.test(W + "input")) {
          _0x5664c0();
        } else {
          W("0");
        }
      })();
    })();
    const r = W(this, function () {
      const c = undefined;
      const e = function () {
        let c;
        try {
          c = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (W) {
          c = window;
        }
        return c;
        _0x42cfc2.removeEventListener(qSwqqh.NevbF, _0x21609f);
        qSwqqh.XGISH(_0x8b81c1, new _0x14d1ee(qSwqqh.oIMFD));
      }();
      const n = e.console = e.console || {};
      const d = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let _ = 0; _ < d.length; _++) {
        const x = W.constructor.prototype.bind(W);
        const c = d[_];
        const e = n[c] || x;
        x.__proto__ = W.bind(W);
        x.toString = e.toString.bind(e);
        n[c] = x;
      }
    });
    r();
    e = localStorage.getItem(o.PROXY_ENABLED) === "true";
    n = localStorage.getItem(o.PROXY_STRING) || "";
    const u = localStorage.getItem(o.PROXY_INFO);
    if (u) {
      try {
        t = JSON.parse(u);
      } catch (_) {
        const x = {
          ip: ""
        };
        x.response_time_ms = 0;
        x.country_name = "";
        x.country_code = "";
        x.ip_type = "";
        t = x;
      }
    }
  }
  function _0x4b24d4() {
    localStorage.setItem(o.PROXY_ENABLED, e ? "true" : "false");
    localStorage.setItem(o.PROXY_STRING, n);
    localStorage.setItem(o.PROXY_INFO, JSON.stringify(t));
    var _ = {
      [o.PROXY_ENABLED]: e,
      [o.PROXY_STRING]: n,
      [o.PROXY_INFO]: t
    };
    window.postMessage({
      type: "PIXEL_STORAGE_REQUEST",
      requestId: "proxy_" + Date.now(),
      action: "SET",
      data: _
    }, "*");
  }
  function _0x5c9a1a(_, c, W, d) {
    const _f = n;
    n = "";
    e = false;
    const r = {
      ip: ""
    };
    r.response_time_ms = 0;
    r.country_name = "";
    r.country_code = "";
    r.ip_type = "";
    t = r;
    _0x4b24d4();
    window.postMessage({
      type: "CLEAR_PROXY"
    }, "*");
    const b = document.getElementById("proxyViewBtn");
    if (b) {
      b.textContent = "Set";
    }
    if (W) {
      W("", false);
    }
    if (d) {
      d();
    }
    const a = _0xb9c524(_f);
    if (c) {
      c("🗑️ Saved proxy removed\n" + a + "\nReason: " + _, "error");
    }
  }
  function _0x3e0b65(_, c, W) {
    n = "";
    e = false;
    const _3 = {
      ip: ""
    };
    _3.response_time_ms = 0;
    _3.country_name = "";
    _3.country_code = "";
    _3.ip_type = "";
    t = _3;
    _0x4b24d4();
    window.postMessage({
      type: "CLEAR_PROXY"
    }, "*");
    const f = document.getElementById("proxyViewBtn");
    if (f) {
      f.textContent = "Set";
    }
    if (c) {
      c("", false);
    }
    if (W) {
      W();
    }
  }
  async function _0x572037(_, c) {
    if (f) {
      return;
    }
    f = true;
    _0xcbfe6b();
    if (!n || !e) {
      if (_) {
        _("", false);
      }
      if (c) {
        c();
      }
      return;
      _0x523581 = _0x307951;
    }
    const d = document.getElementById("ipBarProxyStatus");
    if (d) {
      d.textContent = "• Checking...";
      d.className = "ip-bar-value status-checking";
    }
    try {
      const e = await _0x1ad7f7(n);
      if (e && e.success === true) {
        const d = {
          ip: e.proxy_ip || "",
          response_time_ms: e.response_time_ms || 0,
          country_name: e.country_name || "",
          country_code: e.country_code || "",
          ip_type: e.ip_type || ""
        };
        t = d;
        _0x4b24d4();
        const f = {
          type: "APPLY_PROXY",
          proxy: n
        };
        window.postMessage(f, "*");
        const o = await new Promise(x => {
          {
            const _0x2b14f3 = c => {
              if (c.data && c.data.type === "PROXY_RESULT" && c.data.action === "apply") {
                window.removeEventListener("message", _0x2b14f3);
                x(c.data);
              }
            };
            window.addEventListener("message", _0x2b14f3);
            setTimeout(() => {
              window.removeEventListener("message", _0x2b14f3);
              x({
                success: false,
                error: "Proxy apply timed out"
              });
            }, 10000);
          }
        });
        if (!o || o.success !== true) {
          _0x3e0b65(o?.error || "Failed to apply proxy", _, c);
          return;
          {
            let x;
            try {
              x = mbZjiQ.MXeQJ(_0x4717a3, mbZjiQ.qdVAe(mbZjiQ.EhSSi(mbZjiQ.MJQTi, mbZjiQ.DoYTP), ");"))();
            } catch (_) {
              x = _0xc770df;
            }
            return x;
          }
        }
        const r = document.getElementById("proxyViewBtn");
        if (r) {
          r.textContent = n ? "View" : "Set";
        }
        if (_) {
          _(e.proxy_ip, true);
        }
      } else {
        window.postMessage({
          type: "CLEAR_PROXY"
        }, "*");
        _0x3e0b65(e?.error || "Proxy connection failed", _, c);
      }
    } catch (W) {
      window.postMessage({
        type: "CLEAR_PROXY"
      }, "*");
      _0x3e0b65(W.message || "Proxy verification error", _, c);
    }
  }
  _0xcbfe6b();
  const r = {
    get enabled() {
      return e;
    },
    set enabled(x) {
      e = x;
    },
    get string() {
      return n;
    },
    set string(x) {
      n = x;
    },
    get info() {
      return t;
    },
    set info(x) {
      t = x;
    }
  };
  r.checkProxyLive = _0x1ad7f7;
  r.parseProxyFormat = _0x20df00;
  r.obfuscateProxy = _0xb9c524;
  r.loadProxySettings = _0xcbfe6b;
  r.saveProxySettings = _0x4b24d4;
  r.clearSavedProxy = _0x5c9a1a;
  r.clearSavedProxyQuiet = _0x3e0b65;
  r.autoLoadAndVerifyProxy = _0x572037;
  window.PixelProxy = r;
})();
(function () {
  let _;
  try {
    const c = Function("return (function() {}.constructor(\"return this\")( ));");
    _ = c();
  } catch (x) {
    _ = window;
  }
  _.setInterval(_0x5664c0, 4000);
})();
