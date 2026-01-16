# Lift-up – Testplan

## 1. Doelen
- Bevestigen dat QR → /scan → quote werkt op mobiel binnen 2s (p95)
- Basis toegankelijkheid en performance

## 2. Tests
### Functioneel
- [QR-01] Scan-URL opent /scan met quote zichtbaar
- [QR-02] Fallback quote verschijnt zonder AI-key
- [QR-03] Query param lang=nl|en levert juiste taal

### A11y
- [A11y-01] Toetsenbordnavigatie (Tab-cyclus)
- [A11y-02] Contrast ≥ WCAG AA
- [A11y-03] Landmarks/aria-labels aanwezig

### Performance
- [Perf-01] Lighthouse mobiel ≥ 90
- [Perf-02] TTFB < 500ms (API zonder AI)
- [Perf-03] LCP < 2.5s

### Device/Browser
- iOS Safari, Android Chrome, desktop Chrome/Firefox/Edge

## 3. Testdata
- URLs: /scan, /api/quotes/random?lang=nl
- UTM: ?utm_source=tshirt&utm_medium=qr&utm_campaign=liftup

## 4. Criteria
- Alle kritieke tests groen voor oplevering
