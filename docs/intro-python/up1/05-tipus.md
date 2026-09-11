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

[Anterior: variables](04-variables.md) · [Següent: `input()`](06-input.md) · [Índex](index.md)
