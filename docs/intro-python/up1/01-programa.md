---
hide:
  - navigation
---
# 1. Què és un programa informàtic?

## Programa i instruccions

Un programa informàtic és un conjunt d’instruccions que indiquen a l’ordinador quines operacions ha de realitzar. En Python, un programa senzill pot estar format per una seqüència d’instruccions:

```python
print("Hola!")
print("Estic aprenent Python")
print("Aquest és el meu primer programa")
```

Python executa les instruccions, normalment, de dalt cap avall:

```python
print("1. Inici")
print("2. Procés")
print("3. Final")
```

Produeix:

```text
1. Inici
2. Procés
3. Final
```

## Scripts de Python

Els programes de Python es guarden habitualment en fitxers amb extensió `.py`, per exemple `hola.py`, `calculadora.py` o `dades_personals.py`.

En aquesta UP treballarem programes lineals molt senzills:

```text
Entrada de dades
      ↓
Processament amb variables
      ↓
Eixida de resultats
```

## Exemple complet

```python
nom = input("Com et dius? ")
missatge = "Hola " + nom
print(missatge)
```

En aquest exemple, `input()` és l’entrada, les variables permeten guardar i processar informació i `print()` és l’eixida.

## Idea clau

L’ordre de les instruccions és important. Si una dada s’utilitza abans d’haver estat creada, el programa no podrà funcionar com esperem.

[Següent: preparació de l’entorn](02-entorn.md) · [Índex de la UP1](index.md)
