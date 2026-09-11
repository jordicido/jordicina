---
hide:
  - navigation
---
# 6. Entrada de dades amb `input()`

La funció `input()` permet demanar informació a l’usuari:

```python
nom = input("Introdueix el teu nom: ")
print(nom)
```

Podem demanar més d’una dada:

```python
nom = input("Nom: ")
ciutat = input("Ciutat: ")

print(f"{nom} viu a {ciutat}")
```

## Una particularitat important

`input()` sempre retorna text. Encara que l’usuari escriga `18`, Python el tracta inicialment com un `str`:

```python
edat = input("Edat: ")
print(type(edat))
```

Per treballar amb nombres necessitem convertir la dada:

```python
edat = int(input("Edat: "))
preu = float(input("Preu: "))
```

## Exemple complet

```python
nom = input("Nom: ")
edat = int(input("Edat: "))

print(f"{nom} té {edat} anys.")
```

En aquesta primera aproximació, si l’usuari escriu un valor que no és compatible amb `int()` o `float()`, el programa donarà un error. La validació i el tractament d’errors es treballaran més endavant.

[Anterior: tipus bàsics](05-tipus.md) · [Següent: operacions](07-operacions.md) · [Índex](index.md)
