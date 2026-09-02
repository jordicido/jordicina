---
hide:
  - navigation
---
# 4. Virtualització i contenidors

## Màquines virtuals i contenidors

Una màquina virtual emula un equip complet amb el seu sistema operatiu. Un contenidor aïlla processos i dependències sobre un nucli compartit. Totes dues opcions permeten separar el laboratori de l'equip principal, però tenen costos i garanties diferents.

| Aspecte | Màquina virtual | Contenidor |
| --- | --- | --- |
| Aïllament | Entorn complet amb sistema convidat. | Aïllament de processos i recursos. |
| Arrencada | Més lenta i amb més consum. | Habitualment ràpida i lleugera. |
| Reproducció | Imatge o plantilla de la màquina. | Imatge i fitxer de definició. |
| Ús didàctic | Simular servidors i xarxes completes. | Repetir serveis i configuracions. |
| Risc | Cal actualitzar també el sistema convidat. | Cal controlar imatges, permisos i xarxa. |

## Què cal documentar

Un desplegament en contenidors no és només una ordre d'arrencada. Anota la imatge i versió, els ports publicats, les xarxes, els volums, les variables d'entorn i la forma d'eliminar o actualitzar el servei.

Exemple local i no sensible:

```yaml
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
```

La configuració real d'una pràctica pot ser més completa, però ha de seguir el mateix principi: un altre alumne ha de poder entendre què es crea i per què.

!!! tip "Pregunta de control"
    Quina dada no hauries d'escriure mai directament en un fitxer de Compose que compartiràs?

[Anterior: Servidors web i d'aplicacions](03-servidors-web-aplicacions.md) · [Següent: Requisits i documentació](05-requisits-documentacio.md) · [Tornar a l'índex](index.md)
