---
hide:
  - navigation
---
# Activitat 3. JUnit, automatització i regressió

## Finalitat

Convertir un pla de casos en una bateria JUnit Jupiter repetible, executar-la amb Maven i interpretar de manera diferent una fallada d’asserció i un error d’execució.

## Criteris d’avaluació treballats

**RA3.f–g:** implementar proves unitàries amb JUnit i automatitzar-ne l’execució amb una ferramenta de construcció.

## Situació

Un equip manté un calculador de preus d’enviament. La regla és: sense cupó, 5 €; amb cupó vàlid i compra inferior a 50 €, 2 €; amb cupó vàlid i compra igual o superior a 50 €, 0 €. El projecte inicial conté una implementació i un test de partida. Has d’ampliar la protecció del contracte i detectar una regressió intencionada.

## Recursos inicials

Descarrega el [projecte Maven de l’activitat](recursos/activitat-3-junit/pom.xml) i els fitxers Java de `src/main` i `src/test`. El `pom.xml` inclou JUnit Jupiter i Surefire; no hi ha tests solucionats per als casos que has de dissenyar.

## Tasques

1. Executa el test inicial amb `mvn test` i registra el nombre de proves i el resultat.
2. Tradueix la taula de decisió del contracte en tests independents amb Arrange–Act–Assert.
3. Afegeix els valors límit `49.99`, `50.00` i `50.01`, amb cupó vàlid i sense cupó.
4. Afegeix almenys un cas negatiu per a un preu invàlid i decideix, segons el contracte, si correspon `false` o una excepció.
5. Executa la classe des de Testing i la bateria completa des de Maven. Conserva el report de Surefire.
6. Introdueix una modificació temporal que provoque una regressió, captura el `fail`, recupera el codi i comprova que la bateria torna a quedar verda.

## Lliurament i evidències

- Projecte Maven amb els tests nous i noms expressius.
- `mvn test` en una execució verda i report corresponent.
- Una breu nota sobre la fallada intencionada: esperat, obtingut i causa.
- Explicació de quins casos protegeixen els límits i quins requisits queden coberts.

No canvies una asserció només perquè el test passe. Si el contracte no és suficientment clar, documenta la decisió i demana revisió abans d’alterar-lo.

[Anterior: depuració](activitat-2-depuracio.md) · [Següent: dobles i incidències](activitat-4-dobles-incidencies.md) · [Índex](../../up4-proves.md)
