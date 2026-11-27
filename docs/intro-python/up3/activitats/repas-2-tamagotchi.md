---
hide:
  - navigation
---
# Repàs 2. El teu Tamagotchi

**Mòdul:** Introducció a la programació en Python  
**Unitat:** UP3. Estructures de control, excepcions i depuració en Python  
**Modalitat:** Individual  
**Tipus:** Exercici de repàs

## Criteris d'avaluació treballats

- **RA3.a:** Escriure i provar codi que faça ús d'estructures de selecció.
- **RA3.b:** Utilitzar estructures de repetició.
- **RA3.c:** Reconéixer les possibilitats de les sentències de salt.
- **RA3.e:** Crear programes executables utilitzant diferents estructures de control.
- **RA3.f:** Provar i depurar els programes.

## El repte

Has decidit crear el teu propi **Tamagotchi**, una mascota virtual de la qual hauràs de tindre cura. Podràs jugar amb ella, donar-li menjar i deixar-la descansar. Però vigila: cada acció modifica el seu estat!

Desenvolupa un programa en Python que simule el funcionament del Tamagotchi des de la terminal. El programa ha de mostrar un menú repetidament i permetre que l'usuari interactue amb la mascota fins que decidisca eixir.

## 1. Crea la teua mascota

Quan s'inicie el programa, demana a l'usuari el nom del Tamagotchi i mostra un missatge de benvinguda personalitzat.

La mascota tindrà dos atributs inicials:

| Atribut | Valor inicial | Significat |
| --- | ---: | --- |
| Energia | 100 | Com més alt siga el valor, més energia té. |
| Fam | 0 | Com més alt siga el valor, més fam té. |

Els dos atributs han de ser nombres enters entre 0 i 100.

## 2. Mostra el menú principal

Utilitza un bucle infinit (`while True`) per mostrar el nom, l'energia i la fam actuals de la mascota, així com les opcions següents:

```text
========== TAMAGOTCHI ==========
Nom: Pixel
Energia: 100/100
Fam: 0/100
--------------------------------
1. Jugar
2. Descansar
3. Menjar
0. Eixir
--------------------------------
Tria una opció:
```

Després de cada acció, el menú ha de tornar a aparéixer amb els valors actualitzats. El nom i els atributs no s'han de reiniciar en cada iteració.

## 3. Programa les accions

Cada opció del menú ha de produir els canvis següents:

| Acció | Energia | Fam |
| --- | ---: | ---: |
| 1. Jugar | −20 | +15 |
| 2. Descansar | +30 | +10 |
| 3. Menjar | Sense canvis | −25 |
| 0. Eixir | Sense canvis | Sense canvis |

- **Jugar:** si la mascota té menys de 20 punts d'energia, no podrà jugar. Mostra un avís i no modifiques cap atribut. En cas contrari, actualitza els atributs i mostra un missatge indicant que ha jugat.
- **Descansar:** recupera energia, però augmenta la fam.
- **Menjar:** disminueix la fam sense modificar l'energia.
- **Eixir:** mostra un missatge de comiat amb el nom de la mascota i finalitza el bucle amb `break`.

Si l'usuari introdueix qualsevol altra opció (inclòs text), mostra un missatge d'error i torna al menú sense modificar l'estat de la mascota.

## 4. Controla els límits

L'energia i la fam han d'estar sempre entre **0 i 100**, ambdós inclosos. Si una acció fa que un valor supere 100, deixa'l en 100. Si baixa de 0, deixa'l en 0.

Per exemple, si la mascota té 90 punts d'energia i descansa, acabarà amb 100 punts, no amb 120.

## Exemple d'execució

```text
Com vols que es diga el teu Tamagotchi? Pixel
Benvingut, Pixel!

========== TAMAGOTCHI ==========
Nom: Pixel
Energia: 100/100
Fam: 0/100
--------------------------------
1. Jugar
2. Descansar
3. Menjar
0. Eixir
--------------------------------
Tria una opció: 1
Pixel ha jugat!

========== TAMAGOTCHI ==========
Nom: Pixel
Energia: 80/100
Fam: 15/100
--------------------------------
1. Jugar
2. Descansar
3. Menjar
0. Eixir
--------------------------------
Tria una opció: 2
Pixel ha descansat!

========== TAMAGOTCHI ==========
Nom: Pixel
Energia: 100/100
Fam: 25/100
--------------------------------
1. Jugar
2. Descansar
3. Menjar
0. Eixir
--------------------------------
Tria una opció: 3
Pixel ha menjat!

========== TAMAGOTCHI ==========
Nom: Pixel
Energia: 100/100
Fam: 0/100
--------------------------------
1. Jugar
2. Descansar
3. Menjar
0. Eixir
--------------------------------
Tria una opció: 0
Fins prompte, Pixel!
```

## Requisits i comprovacions

- Utilitza variables, `input()`, `print()`, operadors aritmètics, condicionals i un bucle `while True` amb `break`.
- No necessites funcions pròpies, llistes, classes ni llibreries externes.
- Comprova que les accions repetides acumulen els canvis, que l'energia no supera 100 quan descansa, que la fam no baixa de 0 quan menja i que no es pot jugar sense energia suficient.
- Comprova també una opció incorrecta i l'eixida del programa.

Guarda el programa en un fitxer anomenat `tamagotchi.py`.

## Repte extra (voluntari)

Si ja has completat l'exercici, pots ampliar el teu Tamagotchi amb una o més millores:

- Mostra avisos quan l'energia siga igual o inferior a 20 o la fam siga igual o superior a 80.
- Afig un comptador de les accions realitzades correctament i mostra'l quan l'usuari isca.
- Incorpora una variable de felicitat (valor inicial 50, entre 0 i 100): augmenta 20 punts en jugar i disminueix 5 punts en descansar. Menjar no la modifica.
- Si la fam arriba a 100, finalitza la partida automàticament i mostra un missatge de final de partida.

[Índex de la UP3](../index.md) · [Teoria: estructures de repetició](../02-estructures-repeticio.md) · [Activitat UP3.2. Bucles `while`](activitat-2-bucles.md)
