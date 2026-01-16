# Lift-up – AI-gedreven webshop en QR-quote MVP

Dit project bouwt de basis voor je concept: T-shirts met QR-code die leiden naar motiverende quotes. De MVP bevat:
- QR-scan pagina (`/scan`) die direct een motiverende quote toont
- Landingpagina (`/`) met uitleg en call-to-action
- API endpoint (`/api/quotes/random`) met veilige fallback quotes
- Tailwind CSS, mobile-first, toegankelijkheids- en performance-basis
- CI (GitHub Actions) voor build-checks
- Documentatie: PRD, architectuur, user stories, testplan, moderatiebeleid

Let op: Checkout/betaalflow (Stripe) is nog niet geactiveerd in de MVP (bewust klein en beheersbaar).

## Quickstart

### 1) Vereisten
- Node.js LTS (18+)
- PNPM, NPM of Yarn
- (Optioneel) Vercel CLI voor snelle deploy

### 2) Installeren
```bash
npm install
```

### 3) Ontwikkelen
```bash
npm run dev
# open http://localhost:3000
```

### 4) Build & run
```bash
npm run build
npm start
```

### 5) Deploy (Vercel)
- Push naar GitHub
- Import repo in [Vercel](https://vercel.com)
- Zet environment vars (zie `.env.example`)

## QR-code maken
- Doel-URL (prod): https://jouwdomein.nl/scan?utm_source=tshirt&utm_medium=qr&utm_campaign=liftup
- Genereer een SVG QR, test scanafstand en contrast
- Print de QR met duidelijke tekst "Scan mij"

## AI quotes (optioneel)
De API route `/api/quotes/random` heeft een veilige fallback-lijst. Wil je AI-generatie:
- Zet `AI_PROVIDER=openai` en `OPENAI_API_KEY=...` in `.env`
- De code bevat een TODO hook om OpenAI via fetch te gebruiken

## Mapstructuur
- src/pages → Next.js pagina's (`/`, `/scan`, `/api/quotes/random`)
- src/components → UI-componenten
- src/styles → globale CSS
- docs → PRD, architectuur, user stories, testplan, moderatiebeleid
- .github/workflows → CI

## Volgende stappen (Backlog)
- Stripe checkout (testmode)
- Admin-dashboard (quotes CRUD + moderatie)
- Analytics (GA4/Matomo) + UTM-metingen
- Dynamische QR-redirects + scan logging
- Privacybeleid/Terms finaliseren (AVG-check)
