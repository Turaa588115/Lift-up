# Inleiding – Slim Kasbeheer

## Korte context
Deze collectie beschrijft mijn project **Slim Kasbeheer**. De uitdaging is om twee kasomgevingen veilig te laten samenwerken met een centrale server, zonder dat ongewenst verkeer tussen zones mogelijk is. Daarom heb ik een gesegmenteerd netwerkontwerp gemaakt met duidelijke rollen voor gebruikers, beheer en systemen. Belanghebbenden zijn de kasoperator (betrouwbare metingen en sturing), technisch beheer (veilig en beheerbaar netwerk) en management (continuïteit en schaalbaarheid).

## Projectvoortgang (stappen 1 t/m 4)
- **Stap 1 (analyse):** ik heb het probleem, de eisen en de stakeholders uitgewerkt in @Analyse.  
- **Stap 2 (ontwerp):** ik heb de netwerkindeling gemaakt met VLAN10 (GH1), VLAN20 (GH2), VLAN30 (SERVER) en VLAN40 (MGMT), inclusief router-on-a-stick en ACL-regels; dit staat in @Ontwerp.  
- **Stap 3 (realisatie):** ik heb de PoC gebouwd in Cisco Packet Tracer en de configuratie uitgevoerd; resultaten en keuzes staan in @Realisatie-PoC.  
- **Stap 4 (beheer en controle):** ik heb validatie gedaan met pingtests (toegestaan en geblokkeerd verkeer) en ACL hit counters (`show access-lists`) om aan te tonen dat de regels echt toegepast worden; dit staat in @Beheer-en-Controle.

## Gebruikte middelen
Voor dit project heb ik gewerkt met **Cisco Packet Tracer** (netwerk-PoC), **Notepad++** (uitwerking/configuratie), **HiveMQ Cloud (Starter)** (MQTT-broker) en **Python MQTT clients** voor sensor, controller en actuator. In deze collectie staan geen wachtwoorden of andere gevoelige gegevens.

## Bewijstukken en granulariteit
Per sprint houd ik de collectie compact met **2 tot 3 bewijstukken**. Elk bewijsstuk bevat: (1) het probleem en waarom dit relevant is, (2) mijn aanpak en keuzes, (3) resultaat met validatie (bijv. testuitvoer/screenshot), en (4) de volgende stap. Zo blijft de informatie volledig, maar wel overzichtelijk.

## Aanvullende bewijsstukken
Voor reflectie op mijn leerproces verwijs ik naar @Reflectie. Voor planning, samenwerking en professionele ontwikkeling verwijs ik naar @Persoonlijk-Leiderschap.
