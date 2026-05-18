# Beheer en Controle

In mijn beheerplan focus ik op continuïteit, veiligheid en aantoonbare controle. Ik werk met vaste checks, incidentaanpak, back-ups en wijzigingsbeheer.

## Periodieke controles
### Dagelijks
- Controleren of kerninterfaces up/up zijn.
- Snelle check op ACL-hit counters (geen onverwachte pieken).
- Basiscontrole van MQTT-berichtenstroom (publicatie en ontvangst).

### Wekelijks
- VLAN/trunk-configuratie verifiëren.
- Router- en switchlogs controleren op afwijkingen.
- Capaciteit checken (CPU/memory op netwerkapparatuur of server).

### Maandelijks
- Back-up hersteltest (config terugzetten in testomgeving).
- Review van ACL-regels (onnodige regels verwijderen).
- Patch- en updatecontrole op server en clients.

## Troubleshooting-procedure
1. Probleem afbakenen (welke VLAN/host/service).
2. Fysiek/logisch pad controleren (poort, VLAN, trunk, gateway).
3. Routing en ACL valideren.
4. Applicatielaag controleren (MQTT-topic, TLS-instellingen, clientstatus).
5. Oorzaak + oplossing registreren in changelog/ticket.

## Back-up en herstel
- Na elke goedgekeurde wijziging: running-config veilig opslaan.
- Minimaal wekelijkse export van deviceconfiguraties.
- Versiebeheer op documentatie en configuratiebestanden.

## Change management
- Kleine wijziging eerst in PoC testen.
- Impact, risico en rollback vastleggen vóór productie-aanpassing.
- Na wijziging: direct valideren met show-commando’s en functionele test.

## Validatie met show-commando’s
Gebruik bij controle minimaal:
```text
show vlan brief
show interfaces trunk
show ip interface brief
show access-lists
```

Interpretatie:
- `show vlan brief`: correcte poortindeling per VLAN.
- `show interfaces trunk`: trunk actief en juiste allowed VLANs.
- `show ip interface brief`: subinterfaces up/up met juiste gateway-IP’s.
- `show access-lists`: counters moeten oplopen bij testverkeer (bewijs van policy enforcement).

## Bewijsvoering (screenshots)
Ik voeg screenshots toe van:
1. Topologie in Packet Tracer.
2. Output van de vier show-commando’s.
3. Testresultaten (toegestaan verkeer en geblokkeerd verkeer).

Zo kan ik aantonen dat mijn ontwerp niet alleen op papier klopt, maar ook in de PoC werkt.
