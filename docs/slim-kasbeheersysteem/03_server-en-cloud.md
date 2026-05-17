# 03 – Server- en Cloudinrichting | Slim Kasbeheersysteem

## Keuze: hybride model
Voor deze opdracht is een **hybride opzet** logisch:
- **Lokaal netwerk (VLAN30 SERVER):** stabiele interne communicatie en segmentatie
- **Cloud (HiveMQ Cloud):** MQTT broker als beheerde dienst met TLS

## Serverfunctie in de PoC
In de PoC vertegenwoordigt de server in VLAN30 de centrale verwerkingslaag:
- Ontvangen van kasdata
- Beschikbaar zijn voor IoT-segmenten volgens ACL-beleid
- Basis voor logging/monitoring en toekomstige analyse

## Cloudinrichting (applicatielaag)
Python MQTT-clients maken verbinding met HiveMQ Cloud:
- Broker endpoint: `BROKER_URL` (DNS-naam)
- Poort: `8883`
- Beveiliging: TLS + authenticatie (`USERNAME`/`PASSWORD`)

## Minimale technische eisen (advies)
- OS: Linux (bijv. Ubuntu Server)
- CPU: 2 vCPU of hoger
- RAM: 4–8 GB
- Opslag: SSD, vanaf 50 GB
- Netwerk: 1 Gbps intern

## Data-opslag en verwerking
- Tijdreeksdata opslaan (temperatuur, events, actuatorstatus)
- Regels toepassen (bijv. ventilatie boven drempelwaarde)
- Historische data gebruiken voor optimalisatie en rapportage

> Opmerking: in Packet Tracer ligt de focus op netwerkvalidatie; cloud-MQTT-validatie gebeurt op applicatieniveau met Python-clients.
