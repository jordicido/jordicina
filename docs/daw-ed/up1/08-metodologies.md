---
hide:
  - navigation
---
# 8. Metodologies de desenvolupament

Una metodologia és un conjunt de principis i pràctiques que orienta la planificació, el repartiment del treball, la validació i la gestió dels canvis.

| Enfocament | Característiques | Quan pot encaixar |
| --- | --- | --- |
| Predictiu | Planificació detallada i canvis controlats | Requisits estables o regulació estricta |
| Iteratiu | Repeticions que revisen i milloren el producte | Quan cal aprendre durant el projecte |
| Incremental | Afegeix funcionalitats progressivament | Quan es vol lliurar valor per parts |
| Àgil | Col·laboració, lliuraments freqüents i adaptació | Requisits canviants i retroalimentació contínua |

## Scrum

Scrum organitza el treball en períodes curts anomenats **esprints**. El **product backlog** conté les necessitats ordenades, l’equip selecciona una part del treball i al final revisa el resultat i la manera de treballar.

Conceptes bàsics: planificació de l’esprint, reunió diària, revisió i retrospectiva.

## Kanban

Kanban visualitza el flux amb columnes com:

```text
Pendent | En procés | En revisió | Finalitzat
```

Els principis bàsics són visualitzar el treball, limitar les tasques en curs, detectar bloquejos i millorar el flux.

Les metodologies àgils no eliminen la planificació ni la documentació: les adapten perquè siguen útils i revisables.

!!! tip "Pregunta de control"
    Si els requisits canvien sovint, quin avantatge ofereix un procés iteratiu i incremental respecte d’un pla completament tancat?

## Resum de la UP1

```text
Necessitat → anàlisi → disseny → codi → proves → desplegament → manteniment
                          ↑        eines + equip + metodologia        ↓
                          └────────────── millora contínua ───────────┘
```

[Anterior: Equips](07-equips.md) · [Índex de la UP1](index.md)