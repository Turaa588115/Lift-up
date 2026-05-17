# 05 – Beheer en Controle | Slim Kasbeheersysteem

## Doel
Dit document beschrijft hoe het systeem operationeel beheerd, gemonitord en gecontroleerd wordt.

## Beheerprocessen
1. **Configuratiebeheer**
   - VLAN-, trunk- en ACL-configuraties versiebeheerbaar vastleggen.
   - Wijzigingen alleen via change-procedure (wie, wat, waarom, rollback).

2. **Toegangsbeheer**
   - Alleen beheerders in VLAN40 krijgen netwerkbeheerrechten.
   - Gebruik unieke accounts; geen gedeelde admin-accounts.
   - Secrets niet hardcoden; gebruik veilige opslag/variabelen.

3. **Patch- en updatebeheer**
   - Maandelijkse controle op router/switch/server updates.
   - Kritieke beveiligingsupdates versneld uitvoeren.

## Monitoring en logging
- **Netwerkcontrole:** periodiek `show`-commando’s en bereikbaarheidstests.
- **Securitycontrole:** ACL-counter trends controleren op afwijkingen.
- **Applicatiecontrole:** MQTT-client logs op reconnects, timeouts en foutieve payloads.
- **Beschikbaarheid:** uptime van server en cloudverbinding bewaken.

## Controleprocedures
### Dagelijks
- Controle van basisconnectiviteit (server bereikbaar vanuit GH1/GH2).
- Controle op onverwachte blokkades of storingen.

### Wekelijks
- Evaluatie van logging en foutmeldingen.
- Test van ventilator-aansturing op basis van temperatuurbericht.

### Maandelijks
- Back-up en hersteltest van configuratiebestanden.
- Security review van ACL’s en toegangsrechten.

## Incidentprocedure (kort)
1. Incident detecteren en classificeren.
2. Impact bepalen (welke VLAN/zone getroffen).
3. Tijdelijke maatregel toepassen (isolatie, blokkade, rollback).
4. Oorzaak analyseren en structureel oplossen.
5. Evalueren en documenteren voor herhaling-preventie.
