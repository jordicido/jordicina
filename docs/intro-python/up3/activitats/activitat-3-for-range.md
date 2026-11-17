---
hide:
  - navigation
---
# Activitat UP3.3 – Bucles `for` amb `range()` en Python

**Mòdul:** Introducció a la programació en Python  
**Unitat de programació:** UP3. Estructures de control, excepcions i depuració  
**Modalitat:** Treball individual

## Objectius

En aquesta activitat practicaràs el bucle `for` amb `range()` per a repetir instruccions un nombre conegut de vegades. Treballaràs amb valors inicials i finals, salts entre nombres, recorreguts ascendents i descendents i combinacions de bucles amb condicionals.

## Instruccions generals

- Resol els **cinc exercicis obligatoris**. El sisé és un repte voluntari d'ampliació.
- Utilitza obligatòriament **`for` amb `range()`** en cada exercici.
- **No utilitzes `while`, llistes, funcions definides per tu, `break` ni `continue`.** Tampoc no cal recórrer cadenes de text amb `for`.
- Pots utilitzar `input()`, `print()`, variables, operacions aritmètiques i condicionals `if`, `elif` i `else`.
- Pots suposar que les dades introduïdes són vàlides; no cal programar la validació d'entrades.
- Comenta breument la idea principal de cada programa i prova'l amb dades diferents.
- El codi ha de ser propi: no està permés utilitzar ferramentes d'IA per a generar-lo. Sí que pots consultar explicacions sobre conceptes.

!!! tip "Recordatori sobre `range()`"
    - `range(5)` genera els nombres del **0 al 4**.
    - `range(3, 7)` genera **3, 4, 5 i 6**.
    - `range(2, 11, 3)` genera **2, 5 i 8**.
    - `range(5, 0, -1)` genera **5, 4, 3, 2 i 1**.

    **El límit final no s'inclou mai.**

## Exercici 1. Revisió d'ordinadors

L'encarregat de manteniment d'un centre necessita generar les etiquetes dels ordinadors que ha de revisar.

Crea un programa que demane:

- El **número del primer ordinador**.
- El **número de l'últim ordinador**.

El programa ha de mostrar, un per un, els ordinadors compresos entre els dos números, **inclosos els extrems**, i acabar indicant quants ordinadors hi ha en total. Utilitza un `for` amb `range()` i un comptador.

**Exemple d'execució:**

```text
Primer ordinador: 105
Últim ordinador: 108

Revisant PC-105
Revisant PC-106
Revisant PC-107
Revisant PC-108

Total d'ordinadors: 4
```

**Comprova:** el programa també ha de funcionar si el primer i l'últim número són iguals. Pots suposar que el primer és menor o igual que l'últim.

## Exercici 2. Horari de còpies de seguretat

Un servidor fa una còpia de seguretat cada cert nombre d'hores. Vols mostrar a quines hores s'executarà la tasca.

Demana a l'usuari:

- L'**hora d'inici**.
- L'**hora final** del període.
- L'**interval en hores** entre còpies.

Mostra totes les hores en què es farà una còpia, començant per l'hora inicial. L'hora final **només apareixerà si coincideix amb un dels salts**. Utilitza el tercer argument de `range()` per a controlar l'interval.

**Exemple d'execució:**

```text
Hora d'inici: 8
Hora final: 20
Interval entre còpies: 3

Còpia programada a les 8:00
Còpia programada a les 11:00
Còpia programada a les 14:00
Còpia programada a les 17:00
Còpia programada a les 20:00
```

**Comprova:** prova també amb inici `9`, final `20` i interval `4`. Pots suposar que l'interval és positiu i que l'hora inicial és menor o igual que la final.

## Exercici 3. Simulador d'ascensor

Un ascensor puja des de la planta baixa fins a una planta determinada i després torna a baixar.

Demana a l'usuari la **planta màxima** (un nombre enter positiu) i mostra:

1. Un trajecte de pujada, de la planta `0` fins a la planta màxima.
2. Un trajecte de baixada, des de la planta màxima fins a la planta `0`.

Utilitza **dos bucles `for` amb `range()`**. En el segon, hauràs de fer servir un pas negatiu.

**Exemple d'execució:**

```text
Planta màxima: 3

PUJADA
Planta 0
Planta 1
Planta 2
Planta 3

BAIXADA
Planta 3
Planta 2
Planta 1
Planta 0
```

**Comprova:** prova una planta màxima d'`1`. No oblides incloure la planta `0` en la baixada.

## Exercici 4. Control de qualitat

Una fàbrica revisa el pes de diverses peces. Una peça és **correcta** si pesa entre **40 i 60 grams, tots dos inclosos**.

El programa ha de:

1. Demanar quantes peces es revisaran.
2. Demanar el pes de cada peça, una per una.
3. Mostrar si la peça té un pes `massa baix`, `correcte` o `massa alt`.
4. En acabar, mostrar **quantes peces hi ha en cada categoria**.

Utilitza un `for` amb `range()` per a fer exactament el nombre de revisions indicat, condicionals per a classificar cada peça i tres comptadors.

**Exemple d'execució:**

```text
Quantes peces vols revisar? 5

Pes de la peça 1: 35
Massa baix
Pes de la peça 2: 40
Correcte
Pes de la peça 3: 58
Correcte
Pes de la peça 4: 61
Massa alt
Pes de la peça 5: 50
Correcte

RESUM
Peces amb pes massa baix: 1
Peces correctes: 3
Peces amb pes massa alt: 1
```

**Comprova:** prova amb peces de `40` i `60` grams. Totes dues han de comptar com a correctes. Pots suposar que el nombre de peces és positiu.

## Exercici 5. Escala de píxels

Vols construir un dibuix senzill en la consola amb el caràcter `#`.

Demana a l'usuari l'**altura de l'escala** i mostra un dibuix amb tantes files com indique. La primera fila ha de tindre un `#`, la segona dos, la tercera tres, i així successivament.

**Exemple d'execució:**

```text
Altura: 5

#
##
###
####
#####
```

Utilitza un únic `for` amb `range()`. **Pista:** en Python, `"#" * 3` genera el text `###`. No cal utilitzar llistes ni un segon bucle.

**Comprova:** amb altura `1`, el programa ha de mostrar una sola fila amb un únic `#`.

## Exercici 6. Repte voluntari: plànol de butaques

Un cinema necessita mostrar la distribució de les seues butaques. Cada butaca s'identifica per la fila i el número de seient.

Demana a l'usuari el **nombre de files** i el **nombre de seients per fila**. Després, mostra una graella com aquesta:

```text
Nombre de files: 3
Seients per fila: 4

F1-S1  F1-S2  F1-S3  F1-S4
F2-S1  F2-S2  F2-S3  F2-S4
F3-S1  F3-S2  F3-S3  F3-S4
```

**Pista:** necessitaràs un `for` amb `range()` dins d'un altre. Per a preparar cada fila, pots començar amb `linia = ""`, afegir les etiquetes amb `linia += ...` i imprimir `linia` quan acabes eixa fila.

**Ampliació:** mostra al final el nombre total de butaques.

## Comprovació final

Abans de lliurar l'activitat, comprova que:

- Has utilitzat `for` amb `range()` en tots els exercicis.
- Has inclòs correctament els límits quan l'enunciat ho demana.
- Has utilitzat un **pas positiu** en l'exercici 2 i un **pas negatiu** en l'exercici 3.
- El control de qualitat funciona correctament amb els valors límit **40** i **60**.
- No has utilitzat `while` ni llistes.
- El codi és llegible i conté algun comentari explicatiu.

## Lliurament

Guarda cada exercici en un arxiu Python independent: `exercici1.py`, `exercici2.py`, `exercici3.py`, `exercici4.py` i `exercici5.py`. Si fas el repte voluntari, guarda'l com a `exercici6.py`. Lliura els arxius segons les indicacions del professorat.

**Criteris d'avaluació treballats:** RA3.b (estructures de repetició), RA3.e (programes executables amb estructures de control), RA3.f (proves i depuració) i RA3.g (comentaris i documentació del codi).

[Anterior: activitat de bucles `while`](activitat-2-bucles.md) · [Índex de la UP3](../index.md) · [Teoria: bucles](../02-estructures-repeticio.md)
