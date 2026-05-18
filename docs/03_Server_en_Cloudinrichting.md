# Stap 3 – Server- en Cloudinrichting

Voor dit project heb ik gekozen voor een **hybride architectuur**: een lokale logische serverzone in de PoC voor netwerkvalidatie en een echte cloudbroker (HiveMQ Cloud) voor MQTT-communicatie.

## Architectuurkeuze
- **Lokaal (PoC):** simulatie van interne services, routing en segmentatie.
- **Cloud (productiegericht):** MQTT-broker als beheerde dienst voor betrouwbare externe connectiviteit.

Deze combinatie laat zien dat het ontwerp nu al testbaar is en later eenvoudig schaalbaar blijft.

## Serverconfiguratie (logisch minimumprofiel)
- **Besturingssysteem:** Linux (bijv. Ubuntu Server LTS).
- **CPU:** 2 vCPU.
- **RAM:** 4 GB.
- **Opslag:** 60–100 GB SSD.
- **Netwerk:** 1 vNIC in server-VLAN (VLAN30), gateway op 10.10.30.1.

## Dataopslag en verwerking
- Sensoren publiceren met MQTT-topics; controller verwerkt berichten en stuurt actuatoren aan.
- Korte termijn: logging van meetwaarden en events voor troubleshooting.
- Middellange termijn: opslag in tijdreeksdatabase + dashboarding.

## Toekomstige analytics
Ik reserveer de architectuur voor latere uitbreiding met data-analyse (trenddetectie, drempeloptimalisatie, voorspellend klimaatbeheer), zonder herontwerp van het basisnetwerk.

In mijn PoC blijft de scheiding tussen netwerklaag (VLAN/ACL/routing) en applicatielaag (MQTT-clients) bewust duidelijk.
