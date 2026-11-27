---
hide:
  - navigation
---
# Activitat 4. SMX Inventory Manager

**Mòdul:** Introducció a la programació en Python  
**Unitat:** UP6. Estructures de dades avançades i tractament de documents  
**Modalitat:** Repte integrador individual  
**CA treballats:** c, d, e parcial, h, i i j

## Repte

Construeix un programa de terminal que permeta a una persona responsable d’una aula consultar i actualitzar un inventari. Reutilitza el que has fet en les activitats anteriors. No cal crear classes pròpies, una interfície gràfica ni una base de dades.

## Requisits mínims

El programa ha de:

1. Carregar l’inventari inicial des d’un JSON local.
2. Mostrar un menú de terminal que es repetisca fins que l’usuari trie eixir.
3. Llistar els equips amb nom, RAM, sistema i estat.
4. Buscar un equip pel nom i mostrar-ne el registre.
5. Afegir un equip nou.
6. Modificar l’estat d’un equip existent.
7. Mostrar estadístiques: RAM total, RAM mitjana, mínim, màxim, operatius i recompte per sistema.
8. Guardar els canvis en JSON amb indent=2 i ensure_ascii=False.
9. Exportar l’inventari actual a CSV.
10. Exportar l’inventari actual a XML.
11. Mostrar missatges comprensibles si falta el JSON o si una dada numèrica no és vàlida.

## Fites incrementals

### Fita 1. Dades i llistat

Carrega el recurs inventari.json i mostra els cinc registres amb un bucle. Comprova els tipus de ram i estat.

### Fita 2. Menú i consultes

Construeix un menú amb opcions numerades. Comença per llistar, buscar i eixir. La cerca d’un nom inexistent no pot trencar el programa.

### Fita 3. Modificacions

Afig i modifica registres. Abans de guardar, comprova que ram es pot convertir a int i que estat és un dels valors que has documentat.

### Fita 4. Estadístiques

Calcula els totals amb recorreguts i acumula els sistemes operatius amb un diccionari de comptadors. Tracta l’inventari buit.

### Fita 5. Persistència i exportació

Guarda JSON i crea les exportacions CSV i XML. Torna a obrir cada document amb un programa de comprovació o amb l’eina de la fita 3.

## Exemple de menú

~~~text
1. Llistar equips
2. Buscar equip
3. Afegir equip
4. Canviar estat
5. Mostrar estadístiques
6. Guardar JSON
7. Exportar CSV i XML
0. Eixir
~~~

Pots canviar els textos, però les opcions han de ser clares i el programa ha de repetir el menú fins a l’opció 0.

## Casos de prova

| Cas | Accions | Resultat esperat |
| --- | --- | --- |
| 1 | Iniciar i llistar | Apareixen 5 equips |
| 2 | Buscar AULA-03 | Es mostra el registre correcte |
| 3 | Buscar AULA-99 | Missatge de no trobat |
| 4 | Afegir AULA-06 amb 16 GB | El recompte augmenta a 6 |
| 5 | Escriure RAM abc | El programa demana una dada vàlida o informa de l’error |
| 6 | Canviar estat d’AULA-02 | El canvi es veu en llistat i estadístiques |
| 7 | Guardar i tornar a obrir | Els canvis es conserven |
| 8 | Exportar | CSV i XML es poden tornar a llegir |

## Dades i resultat de referència

Amb el JSON inicial, la RAM total és 80 GB, la mínima és 8 GB, la màxima és 32 GB i hi ha quatre equips operatius. Si afiges AULA-06 amb 16 GB, la RAM total passa a 96 GB.

No has de reproduir exactament el format d’eixida d’aquest document, però els valors han de ser coherents amb les dades.

## Lliurament

Entrega:

- inventory_manager.py;
- inventari.json inicial i el JSON resultant de les proves;
- una exportació CSV i una XML;
- README.md amb instruccions d’execució, opcions del menú i casos de prova;
- una breu nota sobre per què has utilitzat una llista de diccionaris.

## Criteris d’autorevisió

- El programa funciona sense Internet i només usa la biblioteca estàndard.
- Les dades es carreguen en una llista de diccionaris.
- El menú, els recorreguts i les estadístiques són comprensibles.
- Els fitxers es tanquen amb with.
- Les exportacions mantenen els mateixos registres.
- No has introduït classes pròpies ni una arquitectura innecessària.

[Activitat 3](activitat-3-formats.md) · [Índex de la UP6](../../up6-estructures-avancades.md) · [Recursos](../recursos/index.md)
