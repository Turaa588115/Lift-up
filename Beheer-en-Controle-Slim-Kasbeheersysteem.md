# Slim Kasbeheersysteem — Beheer en Controle

**Student:** [Jouw naam]  
**Klas:** [Klas]  
**Datum:** 19-04-2026

## 1. Doel van beheer en controle
In dit onderdeel beschrijf ik hoe ik beheer, monitoring en controle heb ingericht voor het Slim Kasbeheersysteem. Mijn doel is om storingen snel te kunnen opsporen, securityregels aantoonbaar te laten werken en de oplossing beheersbaar te houden bij uitbreiding. Mijn PoC bestaat uit GH1, GH2, een serverzone en een managementzone. Daarnaast heb ik een werkende applicatielaag met Python MQTT clients (sensor, controller en actuator), ontwikkeld in Notepad++, die via TLS (poort 8883) met HiveMQ Cloud communiceert.

## 2. Beheeropzet
### 2.1 Segmentatie voor beheerbaarheid en veiligheid
Ik heb het netwerk opgedeeld in vier VLAN’s:

| VLAN | Naam | Functie | Subnet | Gateway |
|---:|---|---|---|---|
| 10 | GH1 | Kas 1 (IoT) | 10.10.10.0/24 | 10.10.10.1 |
| 20 | GH2 | Kas 2 (IoT) | 10.10.20.0/24 | 10.10.20.1 |
| 30 | SERVER | MQTT broker serverzone | 10.10.30.0/24 | 10.10.30.1 |
| 40 | MGMT | Controller/Admin | 10.10.40.0/24 | 10.10.40.1 |

Waarom dit helpt:
- Problemen in GH1 en GH2 zijn beter te isoleren.
- Managementverkeer blijft gescheiden van IoT-verkeer.
- De serverzone is apart te beveiligen en te monitoren.

### 2.2 Standaard IP-structuur
Ik gebruik een vast en logisch patroon:
- Gateways eindigen op `.1`.
- De server heeft een herkenbaar vast adres (bijv. `10.10.30.10`).
- De management-pc heeft een vast adres (bijv. `10.10.40.10`).

Dit maakt documentatie en troubleshooting sneller en overzichtelijker.

## 3. Controle van netwerkwerking
### 3.1 Switch-controles (VLAN en trunk)
**Doel:** controleren of apparaten in het juiste VLAN zitten en of de trunk naar de router correct werkt.

**Commando’s:**
- `show vlan brief` → controle van poort/VLAN-toewijzing.
- `show interfaces trunk` → controle dat de trunk actief is met VLAN 10, 20, 30 en 40.

**Acceptatiecriteria:**
- GH1 in VLAN10, GH2 in VLAN20, SERVER in VLAN30, MGMT in VLAN40.
- Trunk is actief en allowed VLANs bevatten `10,20,30,40`.

[SCREENSHOT: show vlan brief]  
[SCREENSHOT: show interfaces trunk]

### 3.2 Router-controle (router-on-a-stick)
**Doel:** controleren of inter-VLAN-routering correct werkt.

**Commando:**
- `show ip interface brief`

**Acceptatiecriteria:**
- `Gi0/1.10 = 10.10.10.1` (up/up)
- `Gi0/1.20 = 10.10.20.1` (up/up)
- `Gi0/1.30 = 10.10.30.1` (up/up)
- `Gi0/1.40 = 10.10.40.1` (up/up)

[SCREENSHOT: show ip interface brief]

## 4. Securitycontrole (ACL’s)
### 4.1 Doel van de ACL-policy
- GH1 mag niet naar GH2.
- GH2 mag niet naar GH1.
- IoT (VLAN10/20) mag niet naar MGMT (VLAN40).
- IoT (VLAN10/20) mag wel naar SERVER (VLAN30).

### 4.2 Validatie van de policy
**Toegestaan (moet werken):**
- GH1 → SERVER (`10.10.30.10`) = OK
- GH2 → SERVER (`10.10.30.10`) = OK
- MGMT → SERVER = OK

**Niet toegestaan (moet blokkeren):**
- GH1 → GH2 = FAIL
- GH2 → GH1 = FAIL
- GH1 → MGMT = FAIL
- GH2 → MGMT = FAIL

**Bewijs met tellers:**
- `show access-lists` toont hit counters op deny-regels na verboden pings.
- Daarmee toon ik aan dat verkeer bewust door ACL’s wordt geblokkeerd.

[SCREENSHOT: mislukte ping (unreachable/timeout)]  
[SCREENSHOT: show access-lists met counters]

## 5. Beheer van de applicatielaag (Python MQTT)
### 5.1 Componenten
- **Sensor-script:** publiceert temperatuur naar `kas/zone1/temperatuur`.
- **Controller-script:** ontvangt temperatuur en publiceert commando’s op `kas/zone1/ventilator/cmd` op basis van drempelwaarde (25 °C).
- **Actuator-script:** ontvangt commando’s en zet status op AAN/UIT.

### 5.2 Controlepunten
Ik controleer in de console:
- succesvolle verbinding (Reason Code 0);
- ontvangen temperatuurberichten bij de controller;
- ontvangen AAN/UIT-commando’s bij de actuator.

Instellingen:
- TLS naar HiveMQ Cloud op poort `8883`;
- QoS 1 voor betrouwbare aflevering.

[SCREENSHOT: sensor output]  
[SCREENSHOT: controller output]  
[SCREENSHOT: actuator output]

**Security-opmerking:** in een productieomgeving sla ik wachtwoorden op in een beveiligde configuratie of secrets manager, niet hardcoded in scripts.

## 6. Monitoring en optimalisatie (vervolgstappen)
Aanbevolen voor productie:
- centrale logging (syslog) voor router/switch;
- SNMP/telemetrie voor uptime, interfacefouten en performance;
- alerts bij interface down, hoge foutpercentages en opvallend veel ACL denies;
- configuratieback-ups en versiebeheer van netwerkconfiguraties en Python scripts;
- vast testplan na wijzigingen (OK-pings, FAIL-pings, ACL-counters en MQTT end-to-end-test).

## 7. Conclusie
Ik heb beheer en controle aantoonbaar ingericht met segmentatie (VLAN’s), router-on-a-stick, ACL-validatie en controlecommando’s op switch/router. Daarnaast heb ik de applicatielaag gecontroleerd met Python MQTT clients die veilig via TLS met HiveMQ Cloud communiceren. Hierdoor is de oplossing niet alleen werkend, maar ook controleerbaar, beheersbaar en uitbreidbaar.
