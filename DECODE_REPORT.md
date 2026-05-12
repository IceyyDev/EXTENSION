# PIXEL HITER v1.LITEX - Full Extension Decode Report

## 1. OVERVIEW

**Name:** PIXEL HITER: v.1.litex  
**Version:** 1.0.1  
**Manifest:** V3 (Chrome Extension)  
**Description:** "Next generations of automation!!"  
**Developer:** @xunez (Telegram)  
**Channel:** @b3charge  
**Support:** help.bypixel.site / tutorials.bypixel.site  
**Version Code:** `v1ltxadfsj443`

**What this extension is:** A credit card testing/checking ("hitting") tool disguised as an automation extension. It autofills stolen credit card numbers into Stripe checkout pages, detects success/failure, forwards results to Telegram, and provides proxy/fingerprint spoofing to avoid detection.

---

## 2. FILE INVENTORY

### Root Files
| File | Purpose |
|------|---------|
| `manifest.json` | Extension configuration & permissions |
| `dashboard.html` | Main UI (full-page dashboard with sidebar navigation) |
| `offscreen.html` | Offscreen document for audio playback |
| `styles.css` | Dashboard styling (4,930 lines) |
| `rules.json` | Declarative net request rules (Stripe header modification) |
| `READ_ME.txt` | Developer credits |

### Scripts (All heavily obfuscated with string array encoding + RC4 encryption)
| File | Size | Purpose |
|------|------|---------|
| `background.js` | 592KB | Service worker - core logic, API calls, proxy, auth, Telegram notifications |
| `content.js` | 3.2MB | Content script injected into ALL pages - UI overlay, card filling, Stripe interception |
| `inject.js` | 2.9MB | Web-accessible injected script - Stripe page detection, payment interception, success detection |
| `dashboard.js` | 2.8MB | Dashboard UI logic |
| `storage.js` | 175KB | Chrome storage abstraction layer |
| `autofill.js` | 127KB | Credit card autofill engine for Stripe checkout fields |
| `binlibrary.js` | 149KB | BIN (Bank Identification Number) library/community feed |
| `proxyhandler.js` | 120KB | Proxy management UI component |
| `offscreen.js` | 77KB | Audio playback for "hit" success sounds |
| `country.js` | 62KB | Country code/name mapping |
| `hcaptcha.js` | 49KB | hCaptcha auto-click/solver |
| `minify-all.js` | 2KB | Build tool (Terser minifier config) |
| `version.js` | 0 bytes | Empty |
| `READ_THIS.js` | 0 bytes | Empty |

### Assets
- **Icons:** icon16.png, icon48.png, icon128.png
- **Fonts:** SpaceGrotesk (Light, Regular, Medium, SemiBold, Bold) .woff2
- **Sounds:** hit.wav (success notification sound)

---

## 3. PERMISSIONS ANALYSIS

The extension requests **extremely broad permissions:**

| Permission | Risk | Usage |
|-----------|------|-------|
| `<all_urls>` (host) | **CRITICAL** | Access to every website |
| `storage` | Low | Stores tokens, settings, card history |
| `activeTab` | Medium | Access to current tab |
| `scripting` | **HIGH** | Inject scripts into any page |
| `declarativeNetRequest` | **HIGH** | Modifies HTTP headers (Stripe API) |
| `declarativeNetRequestWithHostAccess` | **HIGH** | Header modification on all URLs |
| `offscreen` | Low | Background audio playback |
| `downloads` | Medium | Auto-downloads screenshots of successful hits |
| `clipboardWrite` | Medium | Copies screenshots to clipboard |
| `tabs` | Medium | Tab management, URL reading |
| `webNavigation` | Medium | Monitors page navigation |
| `alarms` | Low | Keep-alive timers, version checks |
| `proxy` | **CRITICAL** | Controls browser proxy settings |
| `webRequest` | **CRITICAL** | Intercepts all HTTP requests |
| `webRequestAuthProvider` | **HIGH** | Auto-provides proxy auth credentials |
| `browsingData` | **HIGH** | Clears all browsing data |
| `privacy` | **HIGH** | Controls WebRTC leak protection |
| `cookies` | **CRITICAL** | Reads/writes cookies on any site (Flash Login) |

---

## 4. BACKEND INFRASTRUCTURE

All API calls go to `pixelx.eu.cc`:

| Endpoint | Purpose |
|----------|---------|
| `https://pixelx.eu.cc/xunezgoat.php` | Auth base URL |
| `https://pixelx.eu.cc/xunezgoat.php/api/verify` | Token validation, API requests |
| `https://pixelx.eu.cc/xunezgoat.php/login/start` | Telegram login initiation |
| `https://pixelx.eu.cc/xunezgoat.php/login/status` | Telegram login status polling |
| `https://pixelx.eu.cc/xunezgoat.php/tempcode/verify` | OTP code verification |
| `https://pixelx.eu.cc/api.php` | Main Pixel API |
| `https://pixelx.eu.cc/mails.php` | Temporary email generation |
| `https://pixelx.eu.cc/iplookup.php` | IP geolocation lookup |
| `https://pixelx.eu.cc/binsites.php` | BIN lookup sites |
| `https://pixelx.eu.cc/binbook.php` | Community BIN feed |
| `https://pixelx.eu.cc/proxygen.php` | Proxy generation |
| `https://pixelx.eu.cc/adrnew.php` | Fake address generation |
| `https://pixelx.eu.cc/hitsender.php` | Hit forwarding to Telegram |
| `https://pixelx.eu.cc/radhs454nx.json` | Version check |
| `https://oreoxs.alwaysdata.net` | Proxy liveness check |

---

## 5. CORE FUNCTIONALITY DECODED

### 5.1 Authentication System
- **Telegram Login:** Users authenticate via a Telegram bot (@pixelautohitter). The extension calls `/login/start` to get a session and bot link, then polls `/login/status` for confirmation.
- **License Key:** `checkLicenseKey()` validates a key + version against the API. If the server is down, it falls back to `valid: true` (offline bypass).
- **Token Validation:** `validateToken()` sends a token to `/api/verify` and returns user info (user_id, username, first_name, pfp_url, hits, attempts).
- **OTP Login:** `verifyTempCode()` verifies a temporary code for alternative login.
- **Plans:** Free vs Pro. Free users get 5 flash logins; Pro gets unlimited.

### 5.2 Card Checking ("Hitting") - THE CORE PURPOSE

This is a **credit card checker/hitter tool**. Here's how it works:

1. **BIN Input:** User enters a BIN (Bank Identification Number - first 6-8 digits of a card). The extension generates full card numbers from BINs.

2. **Card Autofill (`autofill.js`):** Automatically fills credit card details into Stripe checkout forms:
   - Card number field selectors: `#cardNumber`, `[name="cardNumber"]`, `[autocomplete="cc-number"]`, etc.
   - Expiry field selectors: `#cardExpiry`, `[name="cardExpiry"]`, `[autocomplete="cc-exp"]`, etc.
   - CVC field selectors: `#cardCvc`, `[name="cardCvc"]`, `[autocomplete="cc-csc"]`, etc.
   - Name, email, address, city, postal code, country fields
   - Submit button selectors: `.SubmitButton`, `button[type="submit"]`, `[data-testid*="pay"]`

3. **Stripe Page Detection (`inject.js`):**
   - `hasStripeSessionInUrl()` - Checks for Stripe session in URL
   - `hasValidStripeKeys()` - Checks for Stripe public keys
   - `isInvoiceStripePage()` - Detects Stripe invoice pages
   - `isBuyStripePage()` - Detects Stripe buy pages  
   - `isHostedStripeCheckoutPage()` - Detects hosted Stripe checkout
   - Special handling for ChatGPT/OpenAI Stripe checkout frames

4. **Success Detection:** The inject script monitors for:
   - "payment successful" / "payment was successful" text
   - "thank you for your order/payment/purchase" text
   - URL redirects to success pages
   - Stripe payment intent confirmation

5. **Hit Forwarding (`sendTelegramNotification`):** On success, sends to `hitsender.php`:
   ```json
   {
     "chat_id": "<user_telegram_id>",
     "userName": "<username>",
     "card": "<card_number>",
     "mm": "<expiry_month>",
     "yy": "<expiry_year>",
     "cvv": "<cvv>",
     "email": "<email_used>",
     "attempt": "<attempt_number>",
     "currency": "<currency>",
     "amount": "<amount>",
     "businessUrl": "<merchant_url>",
     "successUrl": "<redirect_url>",
     "timeTaken": "<time>",
     "tgForwardEnabled": true,
     "ver": "v1lt2"
   }
   ```

6. **Screenshot Capture:** On successful hits, automatically captures a screenshot, copies to clipboard, and downloads as `pixelhitter<timestamp>.png`.

7. **Hit Sound:** Plays `hit.wav` (or a fallback synthesized beep) when a card is successfully charged.

### 5.3 Stripe Header Manipulation (`rules.json`)

The declarative net request rule forces `Content-Type: application/x-www-form-urlencoded` on all requests to `api.stripe.com`. This is necessary because Stripe's API uses form-encoded data, and the extension needs to ensure the requests go through correctly when it submits card data programmatically.

### 5.4 Proxy System

Full proxy management:
- **Proxy Parsing:** Supports `host:port:user:pass`, `user:pass@host:port`, and variations
- **Proxy Types:** HTTP, HTTPS, SOCKS4, SOCKS5
- **PAC Script & Fixed Server modes** with automatic fallback
- **Proxy Authentication:** Auto-injects proxy credentials via `webRequest.onAuthRequired`
- **WebRTC Leak Protection:** Disables non-proxied UDP via `chrome.privacy.network.webRTCIPHandlingPolicy`
- **Proxy Session Tracking:** Tracks upload/download bytes, connection duration
- **Proxy Generation:** Backend endpoint at `proxygen.php` generates proxies
- **Proxy Liveness Check:** Tests proxies against `oreoxs.alwaysdata.net`
- **Inbuilt Proxy:** Has a "connect inbuilt proxy" button
- **Infinity Proxy:** Special proxy request type

### 5.5 Fingerprint Spoofing

Comprehensive browser fingerprint spoofing:
- **User Agent Override:** Custom user agent strings via `declarativeNetRequest` header rules
- **Canvas fingerprinting** spoofing
- **Audio context** fingerprinting spoofing
- **WebGL** fingerprinting spoofing
- **WebGPU** spoofing
- **Voice/Speech synthesis** spoofing
- **Plugin list** spoofing
- **Font enumeration** spoofing
- **Screen resolution** spoofing (optional)
- **Timezone** spoofing
- **Profile modes:** Static profiles or random per-session
- **Locale/Language spoofing** based on proxy country (auto-detects from IP geolocation)
- **Accept-Language header** generation based on country

### 5.6 Flash Login (Cookie Injection)

Steals and replays browser sessions:
1. **Save:** Captures ALL cookies from a normal browser tab
2. **Replay:** Injects those cookies into incognito tabs matching the same domain
3. **Auto-Apply:** Monitors incognito tab navigation and auto-injects cookies when domains match
4. **Usage Limits:** Free: 5 uses, Pro: unlimited

### 5.7 hCaptcha Auto-Solver (`hcaptcha.js`)

- Targets `hcaptcha.com` domains
- Looks for `#checkbox` element
- Checks `data-checked` attribute
- Auto-clicks the captcha checkbox
- Monitors via polling/MutationObserver

### 5.8 Fake Address Generation

- Fetches random addresses from `adrnew.php?q=<country_code>`
- Supports custom address override (line1, city, state, postcode)
- Used to fill billing address fields during card testing

### 5.9 Temporary Email System

- Endpoint: `mails.php`
- Generates disposable email addresses
- Used for creating accounts during card testing
- Has "temp-gmails" view in dashboard

### 5.10 BIN Library & Community Feed

- **BIN Lookup:** Via `binsites.php` - looks up card issuer info from BIN
- **Community Feed:** Via `binbook.php` - shared BIN database with likes/dislikes/voting
- **Quick BIN:** Save and quickly use BINs
- **Cloud BIN:** Cloud-stored BINs
- **Card History:** Stores tested card history locally

### 5.11 Browsing Data Clearance

- Can wipe ALL browsing data: history, downloads, cookies, cache, localStorage, indexedDB, service workers, WebSQL, file systems
- Used to clean up traces after card testing sessions

---

## 6. DASHBOARD UI VIEWS

The extension opens a full-page dashboard with these sections:

| View | Purpose |
|------|---------|
| `overview` | Stats dashboard (proxies, BINs, hits, active proxies, hit limits, global hits), Quick BIN, Quick Proxy |
| `hits` | Card testing/hitting interface |
| `bins` | BIN management and lookup |
| `proxies` | Proxy management, connection, generation |
| `cloud` | Cloud storage features |
| `country` | Country selection for address/locale |
| `temp-gmails` | Temporary email generation |
| `feed` | Community BIN feed |
| `community` | Community features |
| `profile` | User profile, stats, settings |
| `upgrade` | Pro plan upgrade |

**Themes:** Stainless (default), Dark, Light

---

## 7. ANTI-DEBUGGING / OBFUSCATION

Every script uses multiple layers of protection:

1. **String Array Rotation:** All strings stored in a shuffled array, accessed through a decoder function
2. **RC4 String Encryption:** Strings are RC4-encrypted with keys
3. **Anti-Debug Traps:** Every file has `debugger` statements that trigger in infinite loops if DevTools is opened:
   ```js
   (function() { return true; }).constructor("debugger").call("action");
   ```
4. **Console Override:** Replaces all `console.log/warn/error/etc` methods with no-ops to prevent debugging output
5. **Anti-Tamper:** Regular expression checks on function toString() to detect code modification
6. **setInterval Anti-Debug:** Runs anti-debug checks every 4000ms
7. **Dead Code Injection:** Unreachable code blocks scattered throughout to confuse decompilers

---

## 8. COMMUNICATION FLOW

### Message Types (Background Service Worker handles):

| Message Type | Action |
|-------------|--------|
| `FETCH_US_ADDRESS` | Get random fake address |
| `GET_COUNTRY_CODE` | Get configured country |
| `GET_CHECKOUT_PROFILE` | Get autofill profile (country, address, form style) |
| `FLASH_LOGIN_SAVE` | Save cookies from current tab |
| `FLASH_LOGIN_GET_STATUS` | Check flash login state |
| `FLASH_LOGIN_CLEAR` | Clear saved cookies |
| `PAH_FETCH` | Generic fetch proxy |
| `CHECK_LICENSE_KEY` | Validate license |
| `VALIDATE_TOKEN` | Validate auth token |
| `TELEGRAM_LOGIN_START` | Start Telegram auth |
| `TELEGRAM_LOGIN_STATUS` | Poll Telegram auth |
| `VERIFY_TEMP_CODE` | Verify OTP |
| `PIXEL_API_REQUEST` | Generic API call |
| `PIXEL_MAILS_REQUEST` | Temp mail API |
| `PIXEL_FEED_REQUEST` | BIN feed API |
| `PIXEL_IP_LOOKUP_REQUEST` | IP geolocation |
| `PIXEL_BINSITES_REQUEST` | BIN lookup |
| `PIXEL_INFINITY_PROXY_REQUEST` | Infinity proxy |
| `CHECK_PROXY_LIVE` | Test proxy |
| `API_REQUEST` | Generic API call |
| `FETCH_IMAGE` | Fetch image as data URL |
| `PLAY_SUCCESS_SOUND_OFFSCREEN` | Play hit sound |
| `PLAY_CUSTOM_PREVIEW` / `STOP_CUSTOM_PREVIEW` | Custom sound preview |
| `PLAY_BACKGROUND_MUSIC` / `STOP_BACKGROUND_MUSIC` | Background music |
| `SEND_TELEGRAM_NOTIFICATION` | Forward hit to Telegram |
| `CAPTURE_SCREENSHOT` | Screenshot current tab |
| `CLEAR_BROWSING_DATA` | Wipe all browser data |
| `APPLY_PROXY` / `CLEAR_PROXY` | Proxy control |
| `FETCH_REAL_IP` | Check real IP |
| `GET_PROXY_STATE` / `GET_PROXY_SESSION_STATUS` | Proxy info |
| `APPLY_USER_AGENT` / `CLEAR_USER_AGENT` / `GET_USER_AGENT_STATE` | UA spoofing |
| `CHECK_VERSION` / `GET_VERSION_OUTDATED` | Update checking |

### Content Script ↔ Injected Script Communication:
- Uses `window.postMessage` with types `PIXEL_TO_BACKGROUND` and `PIXEL_FROM_BACKGROUND`
- Content script bridges messages between injected page scripts and the background service worker

---

## 9. STORAGE KEYS

Key Chrome storage values used:

| Key | Purpose |
|-----|---------|
| `pixel_token` | Auth token |
| `pixel_user_id` | Telegram user ID |
| `pixel_first_name` | User display name |
| `pixel_saved_bins` | Saved BIN list |
| `pixel_card_history` | Tested card history |
| `pixel_toggle_hit_sound` | Hit sound enabled |
| `pixel_toggle_auto_ss` | Auto-screenshot enabled |
| `pixel_toggle_tg_forward` | Telegram forwarding enabled |
| `pixel_proxy_enabled` | Proxy active flag |
| `pixel_proxy_string` | Current proxy string |
| `pixel_proxy_info` | Proxy details (IP, country, etc.) |
| `pixel_country_code` | Selected country |
| `pixel_custom_name` | Custom cardholder name |
| `pixel_custom_email` | Custom email |
| `pixel_custom_address_*` | Custom billing address fields |
| `pixel_form_filling_style` | "type" or "direct" fill mode |
| `pixel_bg_color` | Dashboard background color |
| `pixel_music_data` | Custom background music |
| `pixel_flash_login_payload` | Saved cookies for flash login |
| `pixel_flash_login_free_usage` | Flash login usage counter |
| `pixel_user_plan` | "free" or "pro" |
| `pixel_user_agent_*` | User agent spoofing settings |
| `pixel_fingerprint_*` | Fingerprint spoofing settings |
| `pixel_extension_outdated` | Version outdated flag |
| `pixel_error_logs` | Error log buffer (max 50 entries) |
| `pixel_logs` | Activity logs |

---

## 10. KEEPALIVE MECHANISM

The extension uses multiple keepalive strategies to prevent the service worker from being terminated:
1. `chrome.alarms.create("pixel-keepalive", { periodInMinutes: 0.33 })` - every 20 seconds
2. `setInterval(() => chrome.runtime.getPlatformInfo(...), 20000)` - ping every 20s
3. Port-based keepalive with connected dashboard tabs (ping every 25s)

---

## 11. SUMMARY

This is a **credit card fraud tool** that:

1. **Tests stolen credit cards** by autofilling them into Stripe checkout pages
2. **Generates card numbers** from BINs (Bank Identification Numbers)
3. **Detects successful charges** and forwards full card details + transaction info to Telegram
4. **Evades detection** through proxy rotation, fingerprint spoofing, user agent spoofing, and WebRTC leak protection
5. **Steals sessions** via cookie capture and replay (Flash Login)
6. **Solves CAPTCHAs** automatically (hCaptcha)
7. **Generates fake identities** with random addresses and temporary emails
8. **Clears evidence** by wiping all browsing data
9. **Has a community** with shared BIN databases and a feed

The entire codebase is heavily obfuscated with string array rotation, RC4 encryption, anti-debugging traps, and dead code injection to prevent analysis.
