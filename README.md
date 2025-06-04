# Prerendering-test-env


This repository contains only the HTML files used to test [`<link rel="prerender">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#rel-prerender) behavior using local virtual hosts (e.g. `home.local`, `victim.home.local`) with a Caddy.

> ⚠️ Only the `html/` directory is tracked in this repository.  

---

## 📁 Directory Structure

```plaintext
html/
├── home/
│   └── home.html           # Entry point with <link rel="prerender">
├── attack/
│   ├── attack.html         # Optional attacker page
│   └── script.js           # Optional JS (e.g. visibility checks)
└── victim/
    └── victim.html         # Target page to be prerendered