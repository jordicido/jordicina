---
hide:
  - navigation
---
# 7. Operacions bàsiques amb variables

Aquest apartat permet practicar els criteris RA1.e, RA1.f, RA1.g i RA1.h en situacions reals.

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

## Operadors i expressions

Una **expressió** combina valors, variables i operadors per produir un resultat:

```python
subtotal = preu * quantitat
es_gran = quantitat > 10
```

En aquesta UP treballarem:

| Categoria | Operadors | Exemple |
| --- | --- | --- |
| Aritmètics | `+`, `-`, `*`, `/`, `%` | `minuts % 60` |
| Comparació | `==`, `!=`, `>`, `<`, `>=`, `<=` | `preu > 100` |
| Lògics | `and`, `or`, `not` | `actiu and disponible` |

Els operadors de comparació i lògics produeixen un booleà. Encara que les estructures `if` es treballaran més endavant, ja podem mostrar el resultat d’una expressió booleana amb `print()`.

## Conversions de tipus

Les conversions **explícites** són les que escrivim nosaltres:

```python
edat_text = input("Edat: ")
edat = int(edat_text)
missatge = "Edat introduïda: " + str(edat)
```

Algunes operacions fan una conversió **implícita** per poder combinar tipus compatibles. Per exemple, en sumar un enter i un decimal, Python produeix un `float`:

```python
resultat = 2 + 0.5
print(resultat, type(resultat))  # 2.5 <class 'float'>
```

No totes les combinacions són compatibles: `"2" + 3` provoca un error. En aquest cas cal convertir explícitament un dels dos valors.

## Comentaris

Els comentaris comencen amb `#` i no s’executen. Serveixen per explicar el propòsit del programa o una decisió que no siga evident:

```python
# Calculem el total abans d’aplicar l’IVA.
total = preu * quantitat
```

Un bon comentari aporta context; no repeteix literalment el nom de la instrucció.

[Anterior: entrada amb `input()`](06-input.md) · [Activitat 2](activitats/activitat-2-exercicis.md) · [Índex](index.md)
