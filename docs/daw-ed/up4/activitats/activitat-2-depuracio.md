---
hide:
  - navigation
---
# Activitat 2. Depura, explica i verifica

## Finalitat

Investigar un comportament incorrecte amb el depurador de VS Code, formular una hipòtesi abans de modificar el codi i demostrar que la correcció resol el cas sense ocultar una regressió.

## Criteris d’avaluació treballats

**RA3.c–e i RA3.h:** utilitzar tècniques de depuració, interpretar variables i pila de crides i documentar la incidència amb evidències reproduïbles.

## Situació

Reps una xicoteta aplicació Java que calcula una mitjana, busca una posició i calcula una comissió. En alguns casos retorna valors incorrectes. El teu treball no és “provar canvis fins que passe”: has de descriure el símptoma, localitzar el punt de decisió i explicar la causa.

## Recursos inicials

Descarrega els fitxers de [depuració](recursos/activitat-2-depuracio/CalculadoraMitjana.java) i la [plantilla de registre](recursos/plantilla-depuracio.md). També trobaràs `CercaNumero.java` i `Comissions.java` en la mateixa carpeta. Els fitxers contenen defectes intencionats; no inclouen la solució.

## Tasques

1. Executa cada programa amb les dades mínimes que reproduïsquen el comportament indicat en el README.
2. Abans d’obrir el depurador, escriu una hipòtesi sobre la línia o l’operació que pot ser responsable.
3. Col·loca un breakpoint informatiu i registra almenys tres valors observats, la línia actual i la pila de crides quan siga aplicable.
4. Explica si el problema és de dades, de control de flux, de tipus o de càlcul.
5. Fes la correcció mínima, torna a executar el cas original i afegeix un cas de frontera.
6. Completa una incidència tècnica per a un dels defectes, separant esperat, observat, entorn, passos i hipòtesi.

## Lliurament i evidències

- Codi corregit, conservant la versió inicial en un commit o còpia separada.
- `registre-depuracio.md` amb hipòtesi, breakpoint, variables i conclusió.
- Una captura o transcripció de consola on es veja el cas abans i després, sense dades personals.
- Una incidència reproduïble i una nota de regressió.

## Condicions

No canvies les dades de prova perquè coincidisquen amb el resultat incorrecte i no elimines la comprovació que revela el defecte. Si una captura no permet veure el context, acompanya-la d’una transcripció.

[Anterior: pla de proves](activitat-1-pla-proves.md) · [Següent: JUnit](activitat-3-junit-automatitzacio.md) · [Índex](../../up4-proves.md)
