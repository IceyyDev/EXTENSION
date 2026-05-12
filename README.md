# Pixelhit Extension - Decoded

Full decode and analysis of the **PIXEL HITER v1.LITEX** Chrome extension.

## Structure

```
.
├── DECODE_REPORT.md          # Complete analysis report
├── original/                 # Original obfuscated extension files (as-shipped)
│   ├── manifest.json
│   ├── rules.json
│   ├── dashboard.html
│   ├── offscreen.html
│   ├── styles.css
│   ├── READ_ME.txt
│   ├── script/               # Obfuscated JS (string array rotation + RC4 encryption)
│   ├── icons/
│   ├── fonts/
│   └── sounds/
└── deobfuscated/             # Decoded/readable source code
    ├── manifest.json
    ├── rules.json
    ├── dashboard.html
    ├── offscreen.html
    ├── styles.css
    └── script/               # Deobfuscated JavaScript files
        ├── background.js     # Service worker (API, proxy, auth, Telegram)
        ├── content.js        # Content script (UI overlay, card filling)
        ├── inject.js         # Injected script (Stripe detection, payment interception)
        ├── dashboard.js      # Dashboard UI logic
        ├── storage.js        # Chrome storage abstraction
        ├── autofill.js       # Credit card autofill engine
        ├── binlibrary.js     # BIN library/community feed
        ├── proxyhandler.js   # Proxy management
        ├── offscreen.js      # Audio playback
        ├── country.js        # Country code mapping
        ├── hcaptcha.js       # hCaptcha auto-solver
        ├── countrylist.json  # Country data
        └── minify-all.js     # Build tool (Terser config)
```

## Deobfuscation Notes

All 11 JavaScript files have been decoded. The obfuscation used string array rotation + RC4 encryption + wrapper function indirection.

- **background.js, content.js, storage.js, autofill.js, proxyhandler.js, offscreen.js, country.js, hcaptcha.js, binlibrary.js**: Fully deobfuscated using [webcrack](https://github.com/nicolo-ribaudo/webcrack). All strings decoded, split string literals concatenated, control flow restored. Residual `_0x` references are variable/function names only (cosmetic).
- **inject.js** (34,809 lines): Custom decoded — 15,059 encoded string calls resolved via brute-forced array rotation + RC4 decryption + wrapper chain resolution. Split strings concatenated. ~15k remaining `_0x` references are wrapper function calls with runtime-computed arguments (not statically resolvable) and obfuscated variable names.
- **dashboard.js** (28,159 lines): Custom decoded — 16,145 encoded string calls resolved. Same approach as inject.js. ~11k remaining `_0x` references are runtime-computed wrapper calls and variable names.

See [DECODE_REPORT.md](./DECODE_REPORT.md) for the full analysis.
