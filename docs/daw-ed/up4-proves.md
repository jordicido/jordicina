---
hide:
  - navigation
---
# UP4. Proves i verificació

## Presentació

Una aplicació pot compilar i, tanmateix, donar un resultat incorrecte. Compilar comprova que el codi compleix unes regles sintàctiques i que es pot transformar en classes executables; no comprova que totes les decisions siguen les que necessita la persona usuària. En aquesta unitat aprendràs a convertir requisits en proves, observar l’execució amb VS Code, automatitzar comprovacions amb Java i JUnit Jupiter i deixar una incidència prou clara perquè una altra persona la puga reproduir.

> **Abast de la unitat**
>
> La teoria es completa amb quatre activitats avaluables i dos reptes individuals. Cada exemple i cada projecte inicial és menut i independent: no hi ha cap projecte transversal.

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

## Activitats i reptes

Les activitats segueixen la seqüència de les dotze sessions i deixen evidències verificables.

| Sessions | Treball principal | Evidència |
| --- | --- | --- |
| 1–2 | Fonaments, requisits, classes d’equivalència i valors límit | Activitat 1 |
| 3–5 | Breakpoints, variables, pila de crides i hipòtesis | Activitat 2 |
| 6–8 | JUnit Jupiter, AAA, Maven i bateries automatitzades | Activitat 3 |
| 9–10 | Dobles de prova, aïllament i informes d’incidències | Activitat 4 |
| 11–12 | Regressió, revisió d’evidències i reptes individuals | Activitats i reptes |

- [Activitat 1. Del requisit al pla de proves](up4/activitats/activitat-1-pla-proves.md)
- [Activitat 2. Depura, explica i verifica](up4/activitats/activitat-2-depuracio.md)
- [Activitat 3. JUnit, automatització i regressió](up4/activitats/activitat-3-junit-automatitzacio.md)
- [Activitat 4. Dobles de prova i gestió d’incidències](up4/activitats/activitat-4-dobles-incidencies.md)
- [Repte 11. La hipòtesi oculta](up4/activitats/repte-11-hipotesi-depuracio.md)
- [Repte 12. Una bateria que protegeix el contracte](up4/activitats/repte-12-bateria-junit.md)

## Cobertura dels criteris

| Criteri | Activitat o repte | Evidència principal |
| --- | --- | --- |
| RA3.a–b | Activitat 1 | Pla, classes d’equivalència, valors límit i traçabilitat. |
| RA3.c–e | Activitat 2 i repte 11 | Registre de depuració, hipòtesi, breakpoints i correcció verificada. |
| RA3.f–g | Activitat 3 i repte 12 | Tests JUnit, execució Maven i report de regressió. |
| RA3.h | Activitat 2 i activitat 4 | Informe reproduïble i evidències segures. |
| RA3.i | Activitat 4 | Interfície injectada i doble de prova en memòria. |
