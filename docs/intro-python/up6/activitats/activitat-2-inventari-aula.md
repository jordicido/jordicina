---
hide:
  - navigation
---
# Activitat 2. Inventari d’una aula d’informàtica

**Mòdul:** Introducció a la programació en Python  
**Unitat:** UP6. Estructures de dades avançades i tractament de documents  
**Modalitat:** Treball individual  
**CA treballats:** c, d, e parcial i j

## Context

La persona responsable de l’aula necessita consultar els equips sense dependre de diverses llistes paral·leles. Cada equip serà un diccionari dins d’una llista.

## Dades inicials

~~~python
inventari = [
    {"nom": "AULA-01", "ram": 8, "so": "Ubuntu", "estat": "operatiu"},
    {"nom": "AULA-02", "ram": 16, "so": "Windows", "estat": "revisió"},
    {"nom": "AULA-03", "ram": 8, "so": "Ubuntu", "estat": "operatiu"},
    {"nom": "AULA-04", "ram": 32, "so": "Windows", "estat": "baixa"},
]
~~~

## Tasques

1. Mostra el nom, la RAM i l’estat de cada equip amb un recorregut.
2. Afig un equip nou amb RAM, sistema i estat inventats.
3. Busca un equip pel seu nom i mostra’n tots els camps. Informa si no existeix.
4. Modifica l’estat de AULA-02 a operatiu.
5. Crea una llista nova amb els equips operatius.
6. Crea una llista nova amb els equips que tenen almenys 16 GB de RAM.
7. Calcula la RAM total i la mitjana.
8. Compta els equips operatius i els que estan en revisió.
9. Agrupa els equips per sistema operatiu en un diccionari de comptadors.
10. Escriu unes línies justificant per què una llista de diccionaris és més adequada que quatre llistes paral·leles.

## Resultats esperats de referència

Abans d’afegir el teu equip, la RAM total inicial és 64 GB i hi ha 2 equips operatius. Després de modificar AULA-02, n’hi ha 3 d’operatius.

La distribució inicial per sistema és:

~~~text
Ubuntu: 2
Windows: 2
~~~

El programa ha d’indicar clarament si la cerca demana, per exemple, AULA-99, que no existeix.

## Casos de prova

| Cas | Prova | Resultat esperat |
| --- | --- | --- |
| 1 | Buscar AULA-01 | Mostra Ubuntu i 8 GB |
| 2 | Buscar AULA-99 | Missatge d’equip no trobat |
| 3 | Modificar AULA-02 | L’estat passa a operatiu |
| 4 | Filtrar RAM mínima 16 | Inclou AULA-02 i AULA-04 |
| 5 | Inventari buit | No divideix per zero |

## Lliurament

Entrega activitat2_inventari.py i un breu fitxer NOTES.md amb la justificació de l’estructura escollida i els resultats dels casos de prova.

No cal crear funcions, classes, interfícies gràfiques ni bases de dades. Mantén les dades en una llista de diccionaris i utilitza només construccions treballades en la teoria.

## Abans de lliurar

- Cada registre té les claus nom, ram, so i estat.
- La cerca no falla si el nom no existeix.
- La modificació afecta el registre correcte.
- Les estadístiques funcionen amb l’inventari inicial i amb una llista buida.
- La justificació explica el criteri e com a cobertura parcial.

[Activitat 1](activitat-1-temperatures.md) · [Activitat 3](activitat-3-formats.md) · [Teoria: diccionaris](../02-diccionaris.md)
