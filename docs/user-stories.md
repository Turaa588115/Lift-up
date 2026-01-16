# Lift-up – User Stories en Acceptatiecriteria

## Bezoekers & QR-scanners
1) Als persoon die de QR scant wil ik direct een motiverende quote zien zodat ik me positief voel.
- AC: quote < 2s zichtbaar, tekst ≥ 16px, voldoende contrast, fallback bij AI-storing.

2) Als bezoeker wil ik snappen wat Lift-up is zodat ik gemotiveerd raak om te kopen.
- AC: hero + korte uitleg + CTA op de landing, LCP < 2.5s.

3) Als bezoeker wil ik dat de site goed werkt op mobiel zodat ik makkelijk kan lezen.
- AC: responsive layout, toetsenbordnavigatie, aria-labels.

## Admin/Team
4) Als admin wil ik dat quotes veilig en positief zijn zodat we reputatieschade voorkomen.
- AC: moderatiebeleid, verboden-woorden filter, disclaimer.

5) Als marketeer wil ik UTM's meten zodat ik weet hoeveel scans de site krijgt.
- AC: UTM-parameters zichtbaar in analytics (v2).

## Techniek
6) Als ontwikkelaar wil ik een simpele API-route zodat ik snel kan uitbreiden.
- AC: GET /api/quotes/random met lang/categorie, 200 binnen 500ms (zonder AI).
