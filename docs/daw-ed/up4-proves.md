---
hide:
  - navigation
---
# UP4. Proves i verificació

## Presentació

Una aplicació pot compilar i, tanmateix, donar un resultat incorrecte. Compilar comprova que el codi compleix unes regles sintàctiques i que es pot transformar en classes executables; no comprova que totes les decisions siguen les que necessita la persona usuària. En aquesta unitat aprendràs a convertir requisits en proves, observar l’execució amb VS Code, automatitzar comprovacions amb Java i JUnit Jupiter i deixar una incidència prou clara perquè una altra persona la puga reproduir.

> **Abast de la unitat**
>
> Aquest material és teoria, demostracions i comprovacions de comprensió. No inclou activitats avaluables, enunciats de lliurament, exàmens ni rúbriques. Cada exemple és menut i independent: no hi ha cap projecte transversal.

## Dades de la unitat

| Element | Referència |
| --- | --- |
| Duració didàctica | **12 sessions d’una hora** |
| Resultat d’aprenentatge | **RA3** |
| Pes de referència | **15 %** |
| Entorn principal | **VS Code, Java 17 o 21, Maven i JUnit Jupiter** |
| Producte teòric | Casos de prova, proves automatitzades i informes d’incidències |

## Continguts de la unitat

1. [Fonaments i tipus de proves](up4/01-fonaments-proves.md)
2. [Disseny de casos de prova](up4/02-disseny-casos-prova.md)
3. [Depuració de Java amb VS Code](up4/03-depuracio-vscode.md)
4. [Proves unitàries amb JUnit Jupiter](up4/04-proves-unitaries-junit.md)
5. [Automatització i execució de bateries](up4/05-automatitzacio-proves.md)
6. [Dobles de prova i aïllament](up4/06-dobles-prova.md)
7. [Documentació d’incidències](up4/07-documentacio-incidencies.md)

## Idea clau abans de començar

Un resultat verd només diu que els casos executats han coincidit amb l’esperat. Un resultat roig aporta una diferència que cal investigar. Cap dels dos, per si sol, descriu tot l’espai de comportaments possibles. La qualitat depén de seleccionar casos informatius, observar l’execució, aïllar les causes i deixar evidències comprensibles.

[Tornar a Entorns de desenvolupament](index.md) · [Consultar l’avaluació](avaluacio.md)
