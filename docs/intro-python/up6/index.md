---
hide:
  - navigation
---
# UP6. Índex i seqüència

## Pregunta guia

Com podem passar d’un conjunt de dades escrit dins del programa a un inventari que es puga consultar, analitzar i guardar en diferents formats?

## Continguts

1. [Llistes](01-llistes.md): crear, consultar, modificar, recórrer i resumir col·leccions ordenades.
2. [Diccionaris](02-diccionaris.md): representar camps d’una entitat i treballar amb llistes de registres.
3. [Tractament de documents](03-documents.md): fitxers de text, CSV, JSON i XML amb la biblioteca estàndard.

## Activitats

- [Activitat 1. Gestió de les temperatures d’un servidor](activitats/activitat-1-temperatures.md): llistes, alertes i estadístiques.
- [Activitat 2. Inventari d’una aula d’informàtica](activitats/activitat-2-inventari-aula.md): llista de diccionaris i consultes.
- [Activitat 3. Importació i exportació d’un inventari](activitats/activitat-3-formats.md): CSV, JSON i XML.
- [Activitat 4. SMX Inventory Manager](activitats/activitat-4-inventory-manager.md): repte integrador amb menú i persistència.

## Recursos descarregables

Els fitxers [inventari.csv](recursos/inventari.csv), [inventari.json](recursos/inventari.json) i [inventari.xml](recursos/inventari.xml) contenen els mateixos cinc equips ficticis. Pots utilitzar-los en les pràctiques sense connexió a Internet. La seua explicació és a [Recursos de dades](recursos/index.md).

## Seqüència de treball

| Fase | Què farem | Evidència |
| --- | --- | --- |
| 1 | Guardar lectures i equips en llistes | Exercicis de teoria i activitat 1 |
| 2 | Afegir camps i buscar registres amb diccionaris | Activitat 2 |
| 3 | Llegir dades de fitxers i convertir tipus | Activitat 3 |
| 4 | Modificar dades i exportar-les | Activitat 3 |
| 5 | Integrar menú, consultes, estadístiques i persistència | Activitat 4 |

## Cobertura dels criteris

| CA de l’enunciat | Teoria principal | Activitats |
| --- | --- | --- |
| c | [Llistes](01-llistes.md) i [diccionaris](02-diccionaris.md) | 1, 2 i 4 |
| d | Recorreguts, `for`, `enumerate()`, `iter()` i `next()` | 1, 2 i 4 |
| e | Elecció de l’estructura i llistes de diccionaris | 2 i 4, parcial |
| h | Mòduls `csv`, `json` i `xml.etree.ElementTree` | 3 i 4 |
| i | Lectura, modificació, creació i exportació | 3 i 4 |
| j | Totals, mitjanes, mínims, màxims i recomptes | 1, 2 i 4 |

El criteri **b** només s’introdueix parcialment. Els criteris **a, f i g** no formen part de l’abast d’aquesta UP.

[Presentació de la UP6](../up6-estructures-avancades.md) · [Tornar a l’inici del mòdul](../../index.md)
