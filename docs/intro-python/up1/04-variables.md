---
hide:
  - navigation
---
# 4. Variables

Una variable permet guardar temporalment informació:

```python
nom = "Marc"
edat = 18
altura = 1.76
```

## Assignació

L’operador `=` assigna un valor. No significa «és igual a» en sentit matemàtic; indica que cal guardar el valor dins de la variable:

```python
edat = 18
```

## Consultar i modificar una variable

```python
edat = 18
print(edat)

edat = 19
print(edat)
```

També podem utilitzar el valor anterior:

```python
punts = 10
punts = punts + 5

print(punts)
```

El resultat és `15`.

## Noms de variables

Utilitza noms que expliquen què representa cada dada:

```python
nom = "Maria"
edat = 20
preu_producte = 15.5
usuari_actiu = True
```

Evita noms massa genèrics com `x`, `a` o `p`, excepte quan el context els faça evidents. En Python, els noms són sensibles a majúscules i minúscules: `edat` i `Edat` són variables diferents.

## Constants i variables

En aquesta introducció treballarem sobretot amb variables. Per convenció, un valor que no volem modificar es pot escriure en majúscules:

```python
IVA = 0.21
```

Python no impedeix modificar-lo; les majúscules comuniquen la intenció del programador.

[Anterior: `print()`](03-print.md) · [Següent: tipus bàsics](05-tipus.md) · [Índex](index.md)
