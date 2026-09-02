---
hide:
  - navigation
---
# 1. Models d'arquitectura web

## Una aplicació és un sistema de components

Quan parlem d'una aplicació web no parlem només del codi. També intervenen el navegador, la xarxa, el servei de noms, el servidor web, el servidor d'aplicacions, la base de dades, els fitxers i els mecanismes de seguretat.

Una arquitectura és una forma explícita d'organitzar aquests components i les seues responsabilitats. Fer-la explícita ajuda a detectar dependències, punts únics de fallada, requisits de capacitat i riscos.

## Models habituals

| Model | Distribució | Avantatges | Limitacions |
| --- | --- | --- | --- |
| Client-servidor | El client demana i el servidor respon. | Senzill d'entendre i de provar. | Pot concentrar massa responsabilitats en un únic servidor. |
| Tres capes | Presentació, lògica i dades separades. | Facilita manteniment, escalat i control d'accés. | Requereix més configuració i comunicacions. |
| Serveis | Funcions separades que cooperen per xarxa. | Permet desplegar i escalar parts de manera independent. | Augmenta la complexitat operativa i el diagnòstic. |
| Monòlit | La major part de la lògica es desplega junta. | És ràpid de començar i fàcil de desplegar inicialment. | Els canvis o errors poden afectar tot el servei. |

No hi ha un model universalment millor. La decisió depén de la mida de l'aplicació, el trànsit, les dades, l'equip, el pressupost i les garanties que cal oferir.

## Lectura d'un diagrama

Un diagrama útil mostra com a mínim:

- qui inicia la petició;
- quins serveis travessa;
- quin protocol i port utilitza cada comunicació;
- on es guarden les dades;
- quins elements són públics i quins han de quedar en una xarxa privada;
- com es comprova el funcionament.

!!! tip "Pregunta de control"
    Si la base de dades queda exposada directament a Internet, quina frontera de seguretat falta en l'arquitectura?

[Següent: Protocols i recorregut](02-protocols-recorregut.md) · [Tornar a l'índex](index.md)
