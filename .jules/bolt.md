## 2024-05-24 - Missing lazy loading in HTML templates
**Learning:** Found a portfolio template with 35+ images loaded synchronously on the main page. This is a common pattern in HTML templates where lazy loading is omitted, causing unnecessary bandwidth usage and slower initial page load for users who don't scroll down.
**Action:** Always check for `loading="lazy"` on `<img>` tags in gallery or portfolio sections.
