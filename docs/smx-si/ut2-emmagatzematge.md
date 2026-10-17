---
hide:
  - navigation
---
# UP2. Gestió segura de l’emmagatzematge i de les còpies de seguretat

## Presentació

La informació és un dels actius més importants d’una organització. En aquesta unitat aprendràs a decidir on guardar-la, com protegir-la davant la fallada d’un component i com recuperar-la després d’una incidència.

El fil conductor serà aquesta pregunta professional:

> **Si demà falla un disc, s’elimina un fitxer o deixa de funcionar un ordinador, podem recuperar la informació i el servei?**

La unitat combina política d’emmagatzematge, dispositius locals i de xarxa, RAID, còpies de seguretat, mitjans remots i extraïbles i imatges completes de sistemes. El resultat serà una estratègia de protecció justificada, no una simple llista de tecnologies.

## Dades de la unitat

| Element | Referència |
| --- | --- |
| Duració de referència | **18 hores** |
| Resultat d’aprenentatge | **RA2** |
| Producte final | Pla d’emmagatzematge, còpies i recuperació |
| Forma de treball | Individual, parelles i equips |

## Què aprendràs

- Interpretar una política d’emmagatzematge i relacionar-la amb les necessitats de l’organització.
- Comparar capacitat, rendiment, disponibilitat, accessibilitat, cost, escalabilitat i seguretat.
- Distingir emmagatzematge local, DAS, NAS, SAN i núvol.
- Explicar la redundància, els principals nivells RAID i les limitacions de RAID.
- Triar entre còpies completes, incrementals i diferencials.
- Planificar freqüència, retenció, rotació, RPO, RTO i regla 3-2-1.
- Fer còpies locals, remotes i en mitjans extraïbles amb `tar` i `rsync`.
- Verificar la integritat d’una còpia i provar-ne la restauració.
- Crear i restaurar una imatge completa d’un sistema amb Clonezilla.

## Itinerari de treball

Utilitza aquesta pàgina com a índex de la UP2 per seguir l’ordre recomanat, les sessions i les evidències. La teoria i les activitats també estan disponibles directament des d’aquesta pàgina.

### Materials teòrics

| Bloc | Contingut |
| --- | --- |
| [1. Política d’emmagatzematge](ut2/01-politica-emmagatzematge.md) | Cicle de vida, responsabilitats i criteris de decisió. |
| [2. Factors i mètodes](ut2/02-factors-metodes.md) | Capacitat, rendiment, disponibilitat, local, DAS, NAS, SAN i núvol. |
| [3. Redundància i RAID](ut2/03-redundancia-raid.md) | RAID 0, 1, 5, 6 i 10; capacitat i tolerància a fallades. |
| [4. Emmagatzematge distribuït](ut2/04-emmagatzematge-distribuit.md) | Replicació, fragmentació, paritat i punts únics de fallada. |
| [5. Còpies de seguretat](ut2/05-copies-seguretat.md) | Completes, incrementals, diferencials, RPO, RTO i restauració. |
| [6. Retenció i mitjans](ut2/06-retencio-mitjans.md) | Rotació, 3-2-1, còpia remota, mitjans extraïbles i integritat. |
| [7. Còpies en Linux](ut2/07-copies-linux.md) | `tar`, `rsync`, SSH i diferència entre sincronitzar i fer backup. |
| [8. Imatges de sistema](ut2/08-imatges-sistema.md) | Imatges, Clonezilla i recuperació d’un equip complet. |

### Activitats i autoavaluació

| Activitat | Producte |
| --- | --- |
| [1. Selecció d’una solució](ut2/activitats/activitat-1-seleccio-emmagatzematge.md) | Comparativa justificada per a cinc situacions. |
| [2. RAID 5 amb `mdadm`](ut2/activitats/activitat-2-raid.md) | RAID de prova, simulació d’una fallada i reconstrucció. |
| [3. Còpies i restauració](ut2/activitats/activitat-3-copies-restauracio.md) | Còpia completa, incrementals, `rsync`, mitjà remot i política 3-2-1. |
| [4. Imatge amb Clonezilla](ut2/activitats/activitat-4-clonezilla.md) | Creació, modificació, restauració i verificació d’una imatge. |
| [Autoavaluació](ut2/activitats/autoavaluacio.md) | Qüestionari individual de repàs. |

## Evidències avaluables

| Evidència | Producte | Criteris principals |
| --- | --- | --- |
| 1. Selecció d’emmagatzematge | Informe comparatiu i justificació | RA2.a, RA2.b, RA2.c |
| 2. RAID de prova | Registre de l’estat normal, degradat i reconstruït | RA2.c, RA2.d |
| 3. Pla de còpies | Còpies, restauració, proves i política | RA2.e, RA2.f, RA2.g, RA2.h, RA2.i |
| 4. Imatge del sistema | Informe de creació i restauració | RA2.j |

## Resultat d’aprenentatge i criteris

**RA2.** Gestionar dispositius d’emmagatzematge, descriure els procediments efectuats i aplicar tècniques per a assegurar la integritat de la informació.

| Criteri | Què hauràs de demostrar |
| --- | --- |
| **RA2.a** | Interpretar documentació tècnica relativa a una política d’emmagatzematge. |
| **RA2.b** | Valorar rendiment, disponibilitat, accessibilitat i altres factors. |
| **RA2.c** | Classificar mètodes d’emmagatzematge, inclosos els de xarxa. |
| **RA2.d** | Descriure tecnologies redundants i distribuïdes. |
| **RA2.e** | Seleccionar estratègies de còpies de seguretat. |
| **RA2.f** | Planificar freqüència, retenció i esquema de rotació. |
| **RA2.g** | Realitzar còpies amb diferents estratègies i restaurar-les. |
| **RA2.h** | Identificar característiques de mitjans remots i extraïbles. |
| **RA2.i** | Utilitzar mitjans remots i extraïbles amb seguretat. |
| **RA2.j** | Crear i restaurar imatges de sistemes en funcionament. |

## Abans de començar

Les pràctiques de RAID, particions i imatges s’han de fer únicament en màquines virtuals i discos de prova. Una ordre mal aplicada pot destruir dades. Abans de copiar o restaurar, comprova sempre l’origen, la destinació i l’estat de les còpies.

[Començar la teoria](ut2/01-politica-emmagatzematge.md) · [Començar les activitats](ut2/activitats/activitat-1-seleccio-emmagatzematge.md)
