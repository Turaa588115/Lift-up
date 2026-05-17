# 02 – IP-plan en Beveiliging | Slim Kasbeheersysteem

## IP-adresplan
| VLAN | Naam   | Subnet         | Gateway     | Functie |
|------|--------|----------------|-------------|---------|
| 10   | GH1    | 10.10.10.0/24  | 10.10.10.1  | Kas 1 IoT |
| 20   | GH2    | 10.10.20.0/24  | 10.10.20.1  | Kas 2 IoT |
| 30   | SERVER | 10.10.30.0/24  | 10.10.30.1  | Serverdiensten |
| 40   | MGMT   | 10.10.40.0/24  | 10.10.40.1  | Beheer en controle |

### Router-on-a-stick
Subinterfaces op routerinterface **Gi0/1**:
- Gi0/1.10 → `10.10.10.1/24`
- Gi0/1.20 → `10.10.20.1/24`
- Gi0/1.30 → `10.10.30.1/24`
- Gi0/1.40 → `10.10.40.1/24`

### Switchconfiguratie (PoC)
- Trunk: **Gi0/1**, allowed VLANs `10,20,30,40`
- Accesspoorten:
  - **Fa0/1-2** → VLAN10 (GH1)
  - **Fa0/4-5** → VLAN20 (GH2)
  - **Fa0/6** → VLAN30 (Server)
  - **Fa0/3** → VLAN40 (Controller)

## Beveiliging
### ACL-beleid
- `ACL_GH1` inbound op `Gi0/1.10`:
  - deny GH1 → GH2
  - deny GH1 → MGMT
  - permit GH1 → SERVER
  - permit any
- `ACL_GH2` inbound op `Gi0/1.20`:
  - deny GH2 → GH1
  - deny GH2 → MGMT
  - permit GH2 → SERVER
  - permit any

### Databeveiliging
- MQTT via TLS op poort `8883` (HiveMQ Cloud)
- Geen hardcoded secrets in code of docs
- Gebruik placeholders: `BROKER_URL`, `USERNAME`, `PASSWORD`
- Toegang beperken volgens least-privilege
