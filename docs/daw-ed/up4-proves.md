---
hide:
  - navigation
---
# UP4. Proves i verificació

## Presentació

Una aplicació pot compilar i, tanmateix, donar un resultat incorrecte. Compilar comprova que el codi compleix unes regles sintàctiques i que es pot transformar en classes executables; no comprova que totes les decisions siguen les que necessita la persona usuària. En aquesta unitat aprendràs a convertir requisits en proves, observar l’execució i la depuració amb VS Code, dissenyar i executar proves unitàries amb JUnit 5 des d’IntelliJ IDEA i Maven, i deixar una incidència prou clara perquè una altra persona la puga reproduir.

> **Abast de la unitat**
>
> La teoria es completa amb quatre activitats avaluables i dos reptes individuals. Cada exemple i cada projecte inicial és menut i independent: no hi ha cap projecte transversal.

## Dades de la unitat

| Element | Referència |
| --- | --- |
| Duració didàctica | **12 sessions d’una hora** |
| Resultat d’aprenentatge | **RA3** |
| Pes de referència | **15 %** |
| Entorn de treball | **VS Code per a depuració; IntelliJ IDEA + Maven + JDK 25 per a JUnit; Maven 3.9 o superior per a la construcció i execució automàtica de proves** |
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
| 6–8 | Taller guiat + Activitat 3 (taquilla d'un concert): dissenyar casos, executar-los amb Maven i registrar una regressió amb proves de retorn, estat i excepcions a IntelliJ/Maven | Taller guiat + Activitat 3 |
| 9–10 | Dobles de prova, aïllament i informes d’incidències | Activitat 4 |
| 11–12 | Regressió, revisió d’evidències i reptes individuals | Activitats i reptes |

- [Activitat 2. Depura, explica i verifica](up4/activitats/activitat-2-depuracio.md)
- [Taller guiat. Primeres proves unitàries amb JUnit 5 (IntelliJ IDEA i Maven)](up4/activitats/taller-guiat-junit-intellij-maven.md)
- [Activitat 3. Posem a prova la taquilla d'un concert](up4/activitats/activitat-3-junit-automatitzacio.md)
- [Activitat 4. Dobles de prova i gestió d’incidències](up4/activitats/activitat-4-dobles-incidencies.md)
- [Repte 11. La hipòtesi oculta](up4/activitats/repte-11-hipotesi-depuracio.md)
- [Repte 12. Una bateria que protegeix el contracte](up4/activitats/repte-12-bateria-junit.md)

## Cobertura dels criteris

| Criteri | Activitat o repte | Evidència principal |
| --- | --- | --- |
| RA3.c–e | Activitat 2 i repte 11 | Registre de depuració, hipòtesi, breakpoints i correcció verificada. |
| RA3.b | Activitat 3 (pla de casos) | Decisió prèvia de casos concrets, expectatives i justificacions. |
| RA3.f | Activitat 3 (tests JUnit de retorn, estat i excepcions) | Bateria JUnit 5 que comprova el contracte de la taquilla. |
| RA3.g | Activitat 3 i repte 12 (execució automatitzada amb Maven) | `mvn clean test`, informes de Surefire, bateria repetible i registre d'una regressió. |
| RA3.h | Activitat 2 i activitat 4 | Informe reproduïble i evidències segures. |
| RA3.i | Activitat 4 | Interfície injectada i doble de prova en memòria. |
