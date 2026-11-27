---
hide:
  - navigation
---
# UP6. Estructures de dades avançades i tractament de documents

## Presentació

En aquesta unitat passarem de treballar amb valors individuals a gestionar col·leccions d’informació. Utilitzarem com a fil conductor l’inventari d’una aula d’informàtica i algunes lectures de monitoratge d’un servidor.

Aprendrem a guardar dades en llistes i diccionaris, a recórrer-les i analitzar-les, i a conservar-les en fitxers de text, CSV, JSON i XML. El recorregut serà progressiu: primer treballarem les dades en memòria i després les llegirem i exportarem amb la biblioteca estàndard de Python.

## Dades de la unitat

| Element | Referència |
| --- | --- |
| Duració de referència | **12 hores** |
| Resultat d’aprenentatge | **RA6** |
| Pes de referència | **15 %** |
| Producte final | Programa de gestió d’un inventari amb persistència |

## Què aprendràs

- Utilitzar llistes i diccionaris per representar col·leccions.
- Triar entre una llista i un diccionari segons la informació que cal representar.
- Recórrer, buscar, filtrar, modificar i resumir dades.
- Representar diversos registres amb llistes de diccionaris.
- Llegir i escriure fitxers de text, CSV, JSON i XML.
- Detectar i tractar errors bàsics de fitxer i de format.

## Resultat d’aprenentatge relacionat

**RA6.** Escriure programes que manipulen informació, seleccionant i utilitzant tipus avançats de dades.

## Itinerari

1. [Llistes](up6/01-llistes.md): col·leccions ordenades, recorreguts i estadístiques.
2. [Diccionaris](up6/02-diccionaris.md): dades amb camps i llistes de registres.
3. [Tractament de documents](up6/03-documents.md): persistència, CSV, JSON i XML.
4. [Activitats](up6/activitats/activitat-1-temperatures.md): quatre pràctiques, de la consolidació al repte integrador.
5. [Recursos de dades](up6/recursos/index.md): el mateix inventari en CSV, JSON i XML.

## Evidències

| Evidència | Criteri de l’enunciat | Cobertura |
| --- | --- | --- |
| Llistes, recorreguts i estadístiques | c, d, j | Completa prevista |
| Comparació entre llistes i diccionaris | e | Parcial |
| Mòduls i classes de CSV, JSON i XML | h | Completa prevista |
| Lectura, modificació i exportació | i | Completa prevista |
| Projecte integrador amb dades persistents | c, d, e, h, i, j | Integra la unitat |

El criteri **b** queda introduït parcialment amb la identificació de biblioteques i tipus. Els criteris **a, f i g** queden pendents per a més avant. Aquesta selecció no cobreix tot el RA6.

## Com treballarem

Començarem amb exemples curts i executables. Després resoldrem exercicis de consolidació i, finalment, construirem un inventari senzill per terminal. No necessites classes pròpies, bases de dades, Internet ni llibreries externes.

> **Recorda:** en aquesta UP no treballarem tuples, conjunts, arrays específics, matrius, expressions regulars, NumPy ni Pandas. Ens centrarem en llistes, diccionaris i documents.

[Començar l’índex de la UP6](up6/index.md) · [Tornar a l’inici d’Introducció a la programació en Python](index.md) · [Consultar l’avaluació](avaluacio.md)
