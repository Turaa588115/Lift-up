# 01 – Netwerkanalyse | Slim Kasbeheersysteem

## Doel en basisfunctionaliteiten
Het netwerk van het **Slim Kasbeheersysteem** ondersteunt drie kernfuncties:
1. **Meten:** sensoren sturen data (zoals temperatuur) door.
2. **Sturen:** controller/server stuurt actuatoren (zoals ventilatie).
3. **Beheer:** beheerder controleert status, logging en configuratie.

## Benodigde netwerkcomponenten
- Router (inter-VLAN routing via router-on-a-stick)
- Managed switch (VLAN-segmentatie + trunk)
- IoT-clients per kas (sensor/actuator)
- Centrale serverzone
- Management-controller (beheersegment)
- Cloud broker (HiveMQ Cloud) voor MQTT-berichten op applicatielaag

## Logische segmentatie
- **VLAN10 – GH1:** apparaten kas 1
- **VLAN20 – GH2:** apparaten kas 2
- **VLAN30 – SERVER:** centrale serverdiensten
- **VLAN40 – MGMT:** beheer en controle

Deze segmentatie voorkomt dat elk apparaat overal direct bij kan.

## Gebruikte protocollen
- **Ethernet + 802.1Q:** LAN-verbindingen en VLAN-tagging
- **IPv4/TCP/IP:** adressering en transport
- **ICMP:** connectiviteitstests
- **MQTT over TLS (poort 8883):** veilige IoT-communicatie via HiveMQ Cloud
- **HTTPS (beheerlaag):** veilige beheerinterfaces

## Netwerkschema (op te nemen screenshot)
Voeg hier een afbeelding in van de Packet Tracer-topologie met:
- Router Gi0/1 trunk naar switch Gi0/1
- VLAN10, VLAN20, VLAN30 en VLAN40
- GH1/GH2-clients, server en controller

**Bestandsnaam advies screenshot:** `images/topologie-slim-kasbeheersysteem.png`
