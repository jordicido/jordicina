---
hide:
  - navigation
---
# Activitat 3. Importació i exportació d’un inventari

**Mòdul:** Introducció a la programació en Python  
**Unitat:** UP6. Estructures de dades avançades i tractament de documents  
**Modalitat:** Treball individual  
**CA treballats:** h i i

## Context

Una aula rep un inventari en CSV. Cal importar-lo, convertir els camps necessaris, filtrar els equips operatius i exportar el resultat en JSON i XML.

## Recursos inicials

Descarrega els tres fitxers de [recursos](../recursos/index.md). En la primera part utilitza inventari.csv com a entrada. Els fitxers JSON i XML serviran per comparar formats i provar lectures.

## Tasques

1. Identifica en un comentari el paper de csv.DictReader i csv.DictWriter.
2. Identifica json.load, json.dump, JSONDecoder i JSONEncoder.
3. Identifica xml.etree.ElementTree, Element i ElementTree.
4. Llig inventari.csv amb DictReader, utilitzant newline="" i encoding="utf-8".
5. Converteix ram de text a enter i mostra el primer registre.
6. Filtra els equips amb estat operatiu.
7. Exporta el filtratge a inventari-operatiu.json amb indent=2 i ensure_ascii=False.
8. Llig el JSON, modifica l’estat d’un equip i guarda una còpia actualitzada.
9. Llig inventari.xml amb parse(), getroot(), find() i findall(); mostra nom, RAM i estat.
10. Genera un XML nou amb les dades filtrades, utilitzant Element, SubElement i ElementTree.write().
11. Afig tractament guiat de fitxer inexistent, JSON mal format, XML mal format i RAM no numèrica.

## Resultats esperats

El CSV de recursos té cinc equips. Amb el filtratge inicial hi ha quatre equips operatius. Els totals i noms exportats han de coincidir en CSV, JSON i XML.

L’arxiu JSON ha de conservar els accents i ser llegible. L’XML ha de tindre un únic element arrel inventari i un element equip per registre.

## Casos de prova

| Cas | Prova | Resultat esperat |
| --- | --- | --- |
| 1 | Importar inventari.csv | 5 registres i RAM numèrica |
| 2 | Filtrar operatius | 4 registres |
| 3 | Obrir una ruta inexistent | Missatge de FileNotFoundError |
| 4 | RAM amb text no numèric | Missatge de ValueError |
| 5 | JSON amb una coma incorrecta | Missatge de JSONDecodeError |
| 6 | XML sense tancament d’una etiqueta | Missatge de ParseError |

## Lliurament

Entrega un directori amb:

- importar_exportar.py;
- inventari-operatiu.json;
- inventari-operatiu.xml;
- un fitxer NOTES.md amb les classes i funcions identificades i els casos de prova.

No entregues una còpia completa de la teoria ni uses dependències externes. Les rutes han de funcionar amb fitxers locals dins del directori de l’activitat o amb les rutes relatives que indique el teu README.

## Abans de lliurar

- CSV, JSON i XML representen els mateixos registres filtrats.
- Els camps numèrics tenen tipus numèric en Python.
- Els documents exportats es poden tornar a llegir.
- Els errors es capturen només on és necessari i amb missatges comprensibles.

[Activitat 2](activitat-2-inventari-aula.md) · [Activitat 4](activitat-4-inventory-manager.md) · [Teoria: documents](../03-documents.md)
