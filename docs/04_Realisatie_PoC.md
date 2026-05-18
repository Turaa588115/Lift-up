# Stap 4 – Realisatie PoC

Ik heb een basisnetwerk gebouwd in Cisco Packet Tracer met VLAN 10/20/30/40, trunking tussen switch en router, router-on-a-stick en ACL-beleid. Daarna heb ik connectiviteit en toegangsregels getest.

## Build-samenvatting
- VLAN’s aangemaakt op de switch.
- Trunk geconfigureerd richting router.
- Router-subinterfaces per VLAN ingericht met gateways.
- ACL’s toegepast op inter-VLAN verkeer volgens least privilege.
- Testcases uitgevoerd met OK/FAIL-uitkomst.

## Configuratiebewijs (show-output)
```text
Switch#show vlan brief
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active
10   GH1_IOT                          active    Fa0/2, Fa0/3
20   GH2_IOT                          active    Fa0/4, Fa0/5
30   SERVER_ZONE                      active    Fa0/6
40   MGMT                             active    Fa0/7
```

```text
Switch#show interfaces trunk
Port      Mode         Encapsulation  Status        Native vlan
Fa0/1     on           802.1q         trunking      1

Port      Vlans allowed on trunk
Fa0/1     10,20,30,40
```

```text
Router#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
G0/0                   unassigned      YES unset  up                    up
G0/0.10                10.10.10.1      YES manual up                    up
G0/0.20                10.10.20.1      YES manual up                    up
G0/0.30                10.10.30.1      YES manual up                    up
G0/0.40                10.10.40.1      YES manual up                    up
```

```text
Router#show access-lists
Extended IP access list IOT_POLICY
    10 permit tcp 10.10.10.0 0.0.0.255 10.10.30.0 0.0.0.255 eq 1883 (12 matches)
    20 permit tcp 10.10.20.0 0.0.0.255 10.10.30.0 0.0.0.255 eq 1883 (9 matches)
    30 deny ip 10.10.10.0 0.0.0.255 10.10.20.0 0.0.0.255 (5 matches)
    40 deny ip 10.10.20.0 0.0.0.255 10.10.10.0 0.0.0.255 (4 matches)
```

## Testplan (OK/FAIL)
| Test | Verwachting | Resultaat |
|---|---|---|
| GH1 host -> server in VLAN30 (toegestane poort) | Bereikbaar | OK |
| GH2 host -> server in VLAN30 (toegestane poort) | Bereikbaar | OK |
| GH1 -> GH2 direct verkeer | Geblokkeerd | OK |
| GH2 -> GH1 direct verkeer | Geblokkeerd | OK |
| Beheerstation VLAN40 -> netwerkdevices | Bereikbaar | OK |
| Niet-toegestane inter-VLAN flow | Geblokkeerd | OK |

Conclusie: de PoC laat zien dat segmentatie, routing en toegangscontrole correct samenwerken.
