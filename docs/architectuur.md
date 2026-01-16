# Lift-up – Technische Architectuur

## 1. Keuzes
- Frontend: Next.js 14 (pages) + Tailwind CSS
- API: Next.js API routes (serverless)
- Hosting: Vercel
- Optioneel: Stripe (checkout), GA4/Matomo (analytics)

## 2. C4 (schets)
- Context: Gebruiker ↔ Webapp (Landing/Scan) ↔ Quote API
- Container: Frontend (SSR/SSG), API (serverless), CDN (Vercel)
- Componenten:
  - QuoteService (fallback + AI-hook)
  - ModerationService (filteren woordenlijsten)
  - UI Components (design system licht)

## 3. Datamodel (v1)
- Quotes: curated list (JSON)
- Scans: geen opslag v1 (privacy; optioneel later logging)

## 4. API Endpoints
- GET /api/quotes/random
  - Query: lang (nl|en), category (opt.)
  - Res: { text, lang, source, ai: boolean }

## 5. Beveiliging/Privacy
- Geen PII op scanpagina
- Rate limiting (basis) – v1 TODO
- AI disclaimer en moderatiebeleid

## 6. Performance & A11y
- Mobile-first, lazy CSS (Tailwind JIT)
- Contrasten en fontgrootte ≥ 16px
- Lighthouse ≥ 90

## 7. DevOps
- CI: build-check op PR/push
- Deploy: auto via Vercel/GitHub
