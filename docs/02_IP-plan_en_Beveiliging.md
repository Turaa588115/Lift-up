# Stap 2 – IP-plan en Beveiliging

In mijn PoC heb ik gekozen voor een vast en overzichtelijk IP-plan per VLAN. Hierdoor kan ik verkeer gericht beheren met router-on-a-stick en ACL’s.

## IP-adresplan
| VLAN | Functie | Subnet | Gateway | Toekenning |
|---|---|---|---|---|
| 10 | GH1 IoT | 10.10.10.0/24 | 10.10.10.1 | DHCP-reservering/statisch |
| 20 | GH2 IoT | 10.10.20.0/24 | 10.10.20.1 | DHCP-reservering/statisch |
| 30 | Serverzone | 10.10.30.0/24 | 10.10.30.1 | Statisch |
| 40 | Management | 10.10.40.0/24 | 10.10.40.1 | Statisch |

## Beveiligingsmaatregelen
1. **VLAN-segmentatie (10/20/30/40)**  
   Ik scheid operationeel kasverkeer, serververkeer en beheerverkeer logisch van elkaar.

2. **Router-on-a-stick**  
   Inter-VLAN verkeer loopt via router-subinterfaces met 802.1Q tags. Zo kan ik centraal policy afdwingen.

3. **ACL-beleid (least privilege)**  
   - GH1/GH2 mogen alleen noodzakelijke services in de serverzone bereiken.
   - GH1 en GH2 mogen niet direct onderling communiceren.
   - Management (VLAN40) mag beheren (SSH/monitoring), overige toegang wordt beperkt.

4. **Encryptie voor MQTT**  
   MQTT-verkeer naar de cloudbroker verloopt via **TLS** (bijv. poort 8883), zodat data onderweg versleuteld is.

5. **Geen secrets in documentatie**  
   In configuratievoorbeelden gebruik ik placeholders zoals `<MQTT_USERNAME>`, `<MQTT_PASSWORD>` en `<BROKER_HOST>`.

Met deze opzet blijft het netwerk beheersbaar, veilig en toetsbaar via ACL-counters en show-commando’s.
