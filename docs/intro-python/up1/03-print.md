---
hide:
  - navigation
---
# 3. Eixida d’informació amb `print()`

La funció `print()` permet mostrar informació per pantalla:

```python
print("Hola")
print(25)
print(3.14)
```

També pot mostrar variables:

```python
nom = "Anna"
print(nom)
```

Per combinar text i valors podem passar diversos elements:

```python
nom = "Anna"
edat = 18

print("Nom:", nom)
print("Edat:", edat)
```

Les f-strings permeten construir missatges de manera clara:

```python
nom = "Anna"
edat = 18

print(f"{nom} té {edat} anys")
```

## Format dels resultats

La presentació també forma part de la solució. Utilitza text descriptiu, separa visualment la informació i comprova que el resultat siga comprensible:

```python
producte = "Teclat"
preu = 25.50

print("--- PRODUCTE ---")
print(f"Nom: {producte}")
print(f"Preu: {preu} €")
```

En aquesta UP no necessites encara condicions ni bucles. Practica només instruccions lineals i variables.

[Anterior: preparació de l’entorn](02-entorn.md) · [Següent: variables](04-variables.md) · [Índex](index.md)
