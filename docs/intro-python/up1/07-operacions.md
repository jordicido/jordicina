---
hide:
  - navigation
---
# 7. Operacions bàsiques amb variables

Aquest apartat és instrumental: permet practicar RA1.d i RA1.e en situacions reals, però no afegeix un criteri nou a la UP.

## Quatre operacions bàsiques

```python
suma = 5 + 3
resta = 10 - 4
producte = 5 * 3
divisio = 10 / 2
```

També podem operar amb variables:

```python
preu = 25
quantitat = 3

total = preu * quantitat

print(f"Total: {total} €")
```

La divisió amb `/` produeix habitualment un nombre decimal, encara que el resultat siga exacte. En aquesta unitat només necessitem les operacions per construir programes lineals; les expressions més complexes es treballaran progressivament.

## Exemple d’integració

```python
minuts = int(input("Minuts: "))
hores = minuts / 60

print(f"{minuts} minuts equivalen a {hores} hores.")
```

Comprova sempre els resultats amb dades senzilles abans d’entregar el programa.

[Anterior: entrada amb `input()`](06-input.md) · [Activitat 1](activitats/activitat-1-preparacio-entorn.md) · [Índex](index.md)
