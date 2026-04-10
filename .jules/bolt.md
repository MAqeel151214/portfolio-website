## 2024-05-24 - Missing lazy loading in HTML templates
**Learning:** Found a portfolio template with 35+ images loaded synchronously on the main page. This is a common pattern in HTML templates where lazy loading is omitted, causing unnecessary bandwidth usage and slower initial page load for users who don't scroll down.
**Action:** Always check for `loading="lazy"` on `<img>` tags in gallery or portfolio sections.

## 2025-05-15 - Throttling Scroll Listeners
**Learning:** High-frequency events like scroll can cause performance degradation if the listeners perform DOM operations. Throttling these events ensures the UI remains responsive.
**Action:** Use a throttle utility function for all scroll-based UI updates in vanilla JS projects.
