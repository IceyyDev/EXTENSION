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

- **background.js, content.js, storage.js, autofill.js, proxyhandler.js, offscreen.js, country.js, hcaptcha.js, binlibrary.js**: Deobfuscated using [webcrack](https://github.com/nicolo-ribaudo/webcrack) - strings fully decoded, control flow partially restored.
- **inject.js, dashboard.js**: Too complex for webcrack (crashed on these). These are beautified (js-beautify) but strings remain encoded in the obfuscated `_0x` form. The string arrays and decoder functions are still present but the code structure is readable.

See [DECODE_REPORT.md](./DECODE_REPORT.md) for the full analysis.
