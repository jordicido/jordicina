---
hide:
  - navigation
---
# Activitat 1. Gestió de les temperatures d’un servidor

**Mòdul:** Introducció a la programació en Python  
**Unitat:** UP6. Estructures de dades avançades i tractament de documents  
**Modalitat:** Treball individual  
**CA treballats:** c, d i j

## Context

El servidor de proves registra la temperatura de la CPU diverses vegades al dia. Volem consultar les lectures, detectar alertes i obtindre un resum senzill.

## Dades inicials

Comença amb aquesta llista:

~~~python
temperatures = [38.5, 41.2, 44.8, 43.0, 46.1, 39.7]
llindar_alerta = 44.0
~~~

## Tasques

1. Mostra totes les lectures amb un bucle for.
2. Afig una lectura nova al final i insereix una lectura corregida en la posició que tries.
3. Recorre la llista amb enumerate() i mostra la posició començant per 1.
4. Construeix una llista nova amb les lectures superiors al llindar.
5. Mostra quantes lectures hi ha, la suma, la mínima, la màxima i la mitjana.
6. Mostra una alerta amb la posició i el valor de cada lectura superior al llindar.
7. Tracta el cas en què la llista estiga buida abans d’utilitzar min(), max() o dividir.
8. Afig una demostració breu amb iter() i next(). Captura StopIteration o explica quan es produeix.
9. Ordena les lectures amb sorted() sense perdre la llista original.

## Exemple de resultat esperat

Amb les dades inicials, abans de les modificacions, hi hauria d’haver:

~~~text
Lectures: 6
Mínima: 38.5
Màxima: 46.1
Alertes inicials: 2
~~~

El resultat final canviarà si afiges o corregeixes lectures. Indica quines dades has utilitzat.

## Casos de prova

| Cas | Dades | Comprovació |
| --- | --- | --- |
| 1 | Llista inicial | Detecta 44.8 i 46.1 |
| 2 | Llista amb una lectura nova de 50.0 | Augmenta el nombre d’alertes |
| 3 | Llista buida | Mostra un missatge i no falla |
| 4 | Totes les lectures per davall de 44.0 | No hi ha alertes |

## Lliurament

Entrega un fitxer Python anomenat activitat1_temperatures.py. Afig comentaris breus en valencià i una captura o còpia de dos execucions: una amb alertes i una sense lectures.

No inclogues llibreries externes ni una solució copiada. Has de poder explicar què fan len(), sum(), min(), max(), enumerate(), iter() i next().

## Abans de lliurar

- La llista es recorre amb for.
- Les alertes es guarden en una llista nova.
- La mitjana no provoca divisió per zero.
- Has provat els quatre casos de prova.

[Índex de la UP6](../index.md) · [Activitat 2](activitat-2-inventari-aula.md) · [Teoria: llistes](../01-llistes.md)
