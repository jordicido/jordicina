---
hide:
  - navigation
---
# Autoavaluació de la UP2

Respon sense consultar els apunts. Després revisa la solució orientativa i anota què has de repassar.

## Preguntes

1. Què hauria d’incloure una política d’emmagatzematge?
2. Diferencia capacitat, rendiment, disponibilitat i accessibilitat.
3. Quina diferència hi ha entre DAS, NAS i SAN?
4. Quina capacitat útil aproximada té un RAID 5 amb quatre discos de 2 TB?
5. Per què RAID 0 no ofereix redundància?
6. Explica per què RAID no és una còpia de seguretat.
7. Diferencia una còpia completa, incremental i diferencial.
8. Què indiquen RPO i RTO?
9. Explica la regla 3-2-1 i un risc de mantindre totes les còpies connectades.
10. Diferencia sincronització, backup i imatge de sistema.
11. Quines precaucions prendries amb un disc extraïble que conté dades confidencials?
12. Quin ordre seguiries per restaurar una còpia completa i dues incrementals?

## Solució orientativa

1. Dades, ubicacions, permisos, responsables, freqüència, retenció, rotació, destinacions, proves i eliminació segura.
2. Capacitat és quantitat; rendiment és velocitat i latència; disponibilitat és estar operatiu; accessibilitat és des d’on i per qui s’hi pot accedir.
3. DAS es connecta directament a un equip; NAS comparteix fitxers per xarxa; SAN proporciona blocs a servidors.
4. `(4 - 1) × 2 TB = 6 TB` aproximadament.
5. Distribueix dades sense còpia ni paritat; si falla un disc, l’array complet queda inutilitzable.
6. RAID protegeix sobretot davant fallades de disc, però no davant eliminacions, ransomware, corrupció, robatori o incendi.
7. La completa copia tot; la incremental copia canvis des de l’última còpia; la diferencial des de l’última completa.
8. RPO indica la pèrdua de dades assumible; RTO, el temps màxim d’aturada.
9. Tres còpies, dos suports diferents i una fora de la ubicació principal. Una còpia connectada pot ser xifrada o eliminada per un atac.
10. Sincronització iguala ubicacions; backup conserva recuperació; una imatge reconstrueix un sistema o disc complet.
11. Xifrat, expulsió segura, còpies addicionals, ubicació protegida, revisió d’estat i prova de restauració.
12. Completa, incremental 1 i incremental 2, en aquest ordre i en una destinació de prova.

## Repte final

En deu línies, dissenya una estratègia per a una microempresa amb un NAS, dotze usuaris, documents confidencials i un RPO de 24 hores. Inclou RAID, tipus i freqüència de còpies, una còpia externa, retenció, prova de restauració i RTO.

[Tornar a la pàgina principal de la UP2](../../ut2-emmagatzematge.md) · [Començar la teoria](../01-politica-emmagatzematge.md)
