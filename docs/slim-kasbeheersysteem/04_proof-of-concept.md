# 04 – Proof of Concept | Slim Kasbeheersysteem

## Doel van de PoC
Aantonen dat:
1. IoT-clients uit GH1/GH2 de serverzone kunnen bereiken.
2. GH1 en GH2 onderling geblokkeerd zijn.
3. IoT-verkeer naar MGMT geblokkeerd is.
4. Applicatielaag met MQTT-publicatie/subscribe werkt via HiveMQ Cloud.

## Uitgevoerde netwerkopzet
- VLAN10 GH1: `10.10.10.0/24`
- VLAN20 GH2: `10.10.20.0/24`
- VLAN30 SERVER: `10.10.30.0/24`
- VLAN40 MGMT: `10.10.40.0/24`
- Router-on-a-stick: `Gi0/1.10/.20/.30/.40` met gateways `.1`
- Trunk op switch `Gi0/1` met allowed VLAN `10,20,30,40`

## Testresultaten
### Verwacht en behaald
- Ping GH1 → SERVER: **OK**
- Ping GH2 → SERVER: **OK**
- Ping GH1 ↔ GH2: **FAIL**
- Ping IoT (GH1/GH2) → MGMT: **FAIL**
- `show access-lists`: deny-regels krijgen counters (**match zichtbaar**)

## Applicatielaag PoC (Python MQTT)
- Sensor publiceert: `kas/zone1/temperatuur`
- Controller subscribed op temperatuur en publiceert commando op:
  - `kas/zone1/ventilator/cmd`
- Drempelregel controller: `> 25°C` → ventilator **AAN**, anders **UIT**
- Actuator subscribed op commando-topic en toont status **AAN/UIT**
- Verbinding met HiveMQ Cloud via TLS (`8883`)

## Verwijzing naar command outputs/bewijs
Voeg onderstaande outputs als bijlagen/screenshots toe:
1. `show ip interface brief`
2. `show vlan brief`
3. `show interfaces trunk`
4. `show access-lists`
5. Pingresultaten (OK/FAIL)
6. MQTT client logs (sensor/controller/actuator)
