---
hide:
  - navigation
---
# Autoavaluació de la UP3

Utilitza aquesta autoavaluació després de completar les activitats i el projecte. Respon sense consultar els apunts i comprova després els conceptes que no pugues justificar.

## Preguntes

1. Quina diferència hi ha entre `=` i `==`?
2. Per què `0 <= nota <= 10` és preferible a repetir `nota`?
3. Quins valors consideraria falsos `if not valor`?
4. Quina diferència hi ha entre `==` i `is`?
5. Com evita errors l'avaluació de curtcircuit?
6. Quan triaries `match-case` en lloc d'una cadena d'`if-elif`?
7. Quines tres parts solen controlar un `while`?
8. Per què el límit final de `range()` provoca errors *off-by-one*?
9. Què aporten `enumerate()` i `zip()`?
10. Quina diferència hi ha entre `break`, `continue` i `pass`?
11. Quan s'executa l'`else` d'un bucle?
12. Quina informació principal mostra un *traceback*?
13. Per què s'han de capturar excepcions específiques abans que `Exception`?
14. Quina funció tenen `else` i `finally` en un `try`?
15. Què conserva `raise ... from ...`?
16. Quan convé crear una excepció pròpia?
17. Quina diferència hi ha entre una validació, una excepció i una asserció?
18. Què són una precondició, una postcondició i un invariant?
19. Quins casos mínims prepararies per provar un bucle?
20. Quina diferència hi ha entre provar i depurar?
21. Per què convé conservar una prova de regressió?
22. Què ha d'explicar una docstring?
23. Quins comentaris aporten valor i quins només generen soroll?
24. Com comprovaries que un gestor de reserves mai supera la capacitat?

## Reptes curts

### 1. Predicció

Indica el resultat sense executar:

```python
valors = [0, 2, -1, 4]
total = 0

for valor in valors:
    if valor < 0:
        continue
    if valor == 4:
        break
    total += valor

print(total)
```

### 2. Correcció

Explica i corregeix els errors:

```python
try:
    places = int(input("Places: "))
except Exception:
    print("Error")
except ValueError:
    print("Cal un enter")
```

### 3. Disseny

Escriu la signatura, les validacions i els resultats esperats d'una funció que cancel·le places sense superar la capacitat total.

### 4. Proves

Prepara una matriu per a una funció `reservar(5, quantitat)` que incloga casos normal, límit, zero, negatiu, excés i format incorrecte.

## Comprovació personal

- [ ] Puc predir quina branca executarà un condicional.
- [ ] Puc explicar quan acabarà un bucle.
- [ ] Puc distingir `break`, `continue`, `return` i `raise`.
- [ ] Puc llegir un *traceback* de baix cap amunt.
- [ ] Puc capturar només les excepcions que sé tractar.
- [ ] Puc crear i utilitzar una excepció pròpia.
- [ ] Puc justificar una asserció com a invariant intern.
- [ ] Puc preparar casos normals, límit i incorrectes.
- [ ] Puc utilitzar el depurador per observar variables i la pila de crides.
- [ ] Puc documentar una funció i explicar el programa final.

Si no pots justificar algun punt, torna al bloc corresponent i resol una pràctica curta abans de repetir l'autoavaluació.

[Índex de la UP3](../index.md) · [Projecte integrador](projecte-integrador.md) · [Presentació de la UP3](../../up3-control-i-depuracio.md)
