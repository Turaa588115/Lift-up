# Lift-up – Product Requirements Document (PRD)

## 1. Overzicht
- Project: Lift-up – AI-gedreven webshop met QR-toegang tot motiverende quotes
- Eigenaar: Turaa Idris (588115) – AD-ICT – Docent: Kees Velthuijs – Jaar: 2025
- Doelgroep: Jongeren/jongvolwassenen 16–30
- Probleem/waarde: Positiviteit toegankelijk maken via kleding en QR

## 2. Scope
In scope:
- Publieke site met landing en QR-scanpagina
- Quote-service (fallback + AI-optie)
- Basis webshoppresentatie (v1: zonder betaalflow)
- Documentatie (PRD, architectuur, testplan, moderatie)

Out of scope v1:
- Volledige voorraad/fulfilment
- Internationale verzending
- Native mobiele apps

## 3. Requirements
### Functioneel
- Bezoeker ziet landing met uitleg en voorbeeldproducten
- QR-scan /scan toont direct een quote (<=2s p95)
- API endpoint levert quote (random, NL/EN)
- (Later) Bestellen en betalen met Stripe (testmode)

### Niet-functioneel
- Performance: LCP < 2.5s (mobiel), TTFB < 500ms
- Toegankelijkheid: WCAG 2.1 AA basis (contrasten, keyboard)
- Privacy/AVG: minimale data, geen PII op scanpagina
- Uptime v1: best effort (Vercel free)

## 4. User stories & AC (samenvatting)
- Als QR-scanner wil ik direct een motiverende quote zien zodat ik me beter voel.
  - AC: Quote zichtbaar <2s, leesbaar op mobiel, fallback bij AI-storing.
- Als bezoeker wil ik begrijpen wat Lift-up is zodat ik interesse krijg in een T-shirt.
  - AC: Heldere hero, korte uitleg, CTA, snelle laadtijd.
- Als admin wil ik ongepaste content voorkomen zodat de site veilig blijft.
  - AC: Moderatiebeleid, filterregels, AI-content disclaimer.

(Volledige set in docs/user-stories.md)

## 5. Architectuur (samenvatting)
- Frontend: Next.js (pages router) + Tailwind
- API: Next.js API routes (serverless)
- Data: In-memory/fallback JSON (v1), later DB
- Deploy: Vercel
- CI: GitHub Actions

## 6. Content & moderatie
- Richtlijnen: Positief, geen medische claims, geen haat/uitsluiting
- Flow: Fallback curated quotes → (optioneel) AI-generatie → moderatie filter → output

## 7. Testplan (samenvatting)
- E2E: QR-flow, mobiel viewport
- Lighthouse audit, WCAG-check
- API: 200-response, tijd < 500ms (zonder AI)

## 8. Operaties
- Monitoring: Vercel analytics/logs
- Incident: rollback via vorige deployment
- Backups: N.v.t. v1 (geen DB)

## 9. Risico's
- Beperkte webkennis → gekozen voor eenvoudige stack
- QR-scan op kleine toestellen → grote QR, hoog contrast, testmatrix
- AI-onvoorspelbaarheid → fallback quotes + moderatie

## 10. Planning (koppeling)
- Week 1–2: PRD, designs, merkstijl
- Week 3–4: MVP site + quotes
- Week 5: QR, analytics, UTM
- Week 6: Testen & verbeteren
- Week 7: Prototype T-shirt
- Week 8: Feedback verwerken
- Week 9: Oplevering
