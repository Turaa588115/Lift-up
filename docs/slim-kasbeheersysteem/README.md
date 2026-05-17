# README – Opleverdocumenten Slim Kasbeheersysteem

## Doel van deze map
Deze map bevat de opleverdocumenten voor de individuele opdracht **Slim Kasbeheer – Netwerk & Infrastructuurontwerp**.

## Samenhang tussen de documenten
1. **01_netwerkanalyse.md** – beschrijft eisen, componenten, protocollen en topologie.
2. **02_ip-plan-en-beveiliging.md** – legt subnetten, VLAN’s, poorten en securitymaatregelen vast.
3. **03_server-en-cloud.md** – onderbouwt serverlocatie, cloudkeuze en dataverwerking.
4. **04_proof-of-concept.md** – toont uitgevoerde tests en resultaten van de PoC.
5. **05_beheer-en-controle.md** – beschrijft operationeel beheer, monitoring en procedures.
6. **06_advies.md** – geeft kort verbeteradvies en vervolgstappen.
7. **collection-description.md** – korte collectie-inleiding met sprintverhaal en @-verwijzingen.

## Wat de student nog moet toevoegen (bewijsmateriaal)
Voeg eigen screenshots/logs toe als bijlage of in een submap `images/`:
- Netwerkschema/topologie uit Packet Tracer
- Command output:
  - `show ip interface brief`
  - `show vlan brief`
  - `show interfaces trunk`
  - `show access-lists`
- Pingtests (succes naar server, fail tussen GH1/GH2 en IoT→MGMT)
- MQTT logs van sensor/controller/actuator (publiceer/subscribe + ventilator AAN/UIT)

## Security-opmerking
Gebruik in documentatie en code **geen echte wachtwoorden of tokens**. Werk met placeholders zoals:
- `BROKER_URL`
- `USERNAME`
- `PASSWORD`
