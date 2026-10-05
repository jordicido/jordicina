---
hide:
  - navigation
---
# Activitat 4. Proves i depuració

!!! info "Criteris d'avaluació"
    - **RA3.e** — Crear programes executables amb estructures de control.
    - **RA3.f** — Provar i depurar programes.
    - **RA3.g** — Comentar i documentar el codi.

## Producte

Una matriu de proves completada, el programa corregit, les comprovacions automatitzades i un registre breu dels errors localitzats.

## Programa de partida

Aquest programa pretén reservar places, però conté errors:

```python
CAPACITAT = 10


def reservar(disponibles, quantitat):
    if quantitat < 0:
        raise ValueError("Quantitat incorrecta")
    if quantitat >= disponibles:
        raise ValueError("No hi ha prou places")
    return disponibles + quantitat


disponibles = CAPACITAT
quantitat = int(input("Places: "))
disponibles = reservar(disponibles, quantitat)
print(f"Queden {disponibles} places")
```

No el corregisques encara. Primer prepara els casos i reprodueix els errors.

## 1. Matriu de proves

Completa-la amb el resultat real abans i després de la correcció.

| Cas | Entrada | Resultat esperat | Resultat inicial | Resultat corregit |
| --- | ---: | --- | --- | --- |
| Reserva normal | 3 | Queden 7 |  |  |
| Reserva mínima | 1 | Queden 9 |  |  |
| Reserva total | 10 | Queden 0 |  |  |
| Zero places | 0 | Error de quantitat |  |  |
| Quantitat negativa | -1 | Error de quantitat |  |  |
| Excés | 11 | Error de disponibilitat |  |  |
| Format incorrecte | `"tres"` | Error controlat |  |  |

## 2. Hipòtesis abans de modificar

Per a cada cas que falla, escriu:

1. comportament observat;
2. línia sospitosa;
3. hipòtesi sobre la causa;
4. canvi mínim que vols provar.

Modifica una sola causa cada vegada i torna a executar tota la matriu.

## 3. Depuració amb VS Code

Col·loca breakpoints:

- en la primera línia de `reservar`;
- abans de cada condició;
- abans del `return`.

Observa `disponibles` i `quantitat`. Afig al panell **Watch** les expressions `quantitat <= 0`, `quantitat > disponibles` i `disponibles - quantitat`.

Registra quin valor permet confirmar cada error.

## 4. Comprovacions automatitzades

Després de corregir la funció, comprova almenys:

```python
assert reservar(10, 3) == 7
assert reservar(10, 1) == 9
assert reservar(10, 10) == 0
```

Afig comprovacions per verificar que zero, un valor negatiu i un excés produeixen l'excepció prevista.

## 5. Prova de regressió

Suposa que una versió anterior rebutjava incorrectament reservar totes les places disponibles. Conserva `reservar(10, 10) == 0` com a prova de regressió i explica què evita.

## 6. Documentació de la correcció

Completa una taula com aquesta:

| Error | Causa | Correcció | Prova que ho verifica |
| --- | --- | --- | --- |
| La reserva augmentava les places | Operador incorrecte | Substituir suma per resta | Reserva normal |

Elimina els missatges temporals de depuració i afig una docstring que descriga el contracte de `reservar`.

## Evidències

- [ ] La matriu inclou casos normals, límit i incorrectes.
- [ ] Cada canvi respon a una hipòtesi concreta.
- [ ] S'ha utilitzat el depurador per observar l'estat.
- [ ] Les proves automatitzades s'executen després de cada canvi.
- [ ] El registre explica la causa i no només el símptoma.

[Anterior: activitat d'excepcions](activitat-3-excepcions-i-validacio.md) · [Índex de la UP3](../index.md) · [Teoria: proves i depuració](../07-proves-depuracio.md) · [Projecte integrador](projecte-integrador.md)
