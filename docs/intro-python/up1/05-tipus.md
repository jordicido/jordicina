---
hide:
  - navigation
---
# 5. Tipus de dades bàsics

En aquesta UP treballarem quatre tipus bàsics: enters, decimals, text i booleans.

## Enters: `int`

```python
edat = 18
quantitat = 5
temperatura = -2
```

## Decimals: `float`

```python
altura = 1.82
preu = 19.95
temperatura = 23.5
```

## Text: `str`

```python
nom = "Jordi"
ciutat = "Catadau"
```

El text s’escriu entre cometes simples o dobles.

## Booleans: `bool`

Només poden tindre dos valors:

```python
major_edat = True
wifi_actiu = False
```

## Comprovar el tipus

La funció `type()` permet consultar el tipus d’un valor o d’una variable:

```python
edat = 18
print(type(edat))
```

Produeix un resultat semblant a:

```text
<class 'int'>
```

També podem fer:

```python
print(type(25))
print(type(3.5))
print(type("Python"))
print(type(True))
```

El tipus determina quines operacions tenen sentit. Per exemple, `18` és un nombre enter, però `"18"` és text.

## Literals i constants

Un **literal** és un valor escrit directament en el codi, com `18`, `3.5`, `"Python"` o `True`:

```python
edat = 18          # 18 és un literal enter
nom = "Python"     # "Python" és un literal de text
actiu = True       # True és un literal booleà
```

Python no obliga el programa a mantindre una constant immòbil. Per convenció, escrivim en majúscules els noms que no haurien de canviar:

```python
IVA = 0.21
preu = 100
preu_final = preu * (1 + IVA)
```

La diferència important és entre el valor literal (`0.21`) i el nom (`IVA`) que permet reutilitzar-lo i explicar-ne el significat.

[Anterior: variables](04-variables.md) · [Següent: `input()`](06-input.md) · [Índex](index.md)
