---
hide:
  - navigation
---
# Activitat 3. Excepcions i validació

!!! info "Criteris d'avaluació"
    - **RA3.d** — Escriure codi amb control d'excepcions.
    - **RA3.h** — Crear excepcions pròpies.
    - **RA3.i** — Utilitzar assercions durant el desenvolupament.

## Producte

Un programa de validació de reserves, una captura o transcripció de dos *tracebacks* analitzats i un conjunt breu de comprovacions amb `assert`.

## 1. Llig el *traceback*

Executa aquest programa amb `tres` i amb `0`:

```python
text = input("Places: ")
places = int(text)
preu_per_placa = 30 / places
print(preu_per_placa)
```

Per a cada error, identifica:

- tipus d'excepció;
- missatge;
- fitxer i línia;
- dada que l'ha provocada;
- correcció o tractament adequat.

## 2. Entrada robusta

Demana un nombre de places fins que siga un enter entre 1 i 8.

| Cas | Resposta esperada |
| --- | --- |
| `"dos"` | Informar que el format no és enter. |
| `0` | Informar que està fora de l'interval. |
| `9` | Informar que supera el màxim. |
| `4` | Acceptar i acabar la validació. |

Utilitza `while`, `try`, `except`, `else` i una eixida clara del bucle.

## 3. Excepció del domini

Defineix `PlacesInsuficientsError` i una funció:

```python
def reservar(disponibles, sol_licitades):
    ...
```

La funció ha de:

- llançar `ValueError` si la quantitat no és positiva;
- llançar `PlacesInsuficientsError` si supera les disponibles;
- retornar les places restants si la reserva és possible.

El programa principal ha de tractar els dos errors amb missatges diferents.

## 4. Informació estructurada

Millora `PlacesInsuficientsError` perquè conserve com a atributs les places sol·licitades i les disponibles. Utilitza aquests atributs per suggerir el nombre màxim que es pot reservar.

No interpretes el text del missatge per recuperar les dades.

## 5. Conservar la causa

Crea una funció que convertisca una entrada textual i transforme `ValueError` en `DadesReservaError` amb `raise ... from ...`. Comprova en el *traceback* que apareixen les dues excepcions.

## 6. Contractes amb assercions

Afig comprovacions internes després de cada reserva:

```python
assert disponibles >= 0
assert disponibles <= CAPACITAT_TOTAL
```

Explica per què aquestes assercions són adequades com a invariants, però no servirien per validar directament una entrada de l'usuari.

## 7. Repte: jerarquia d'errors

Crea aquesta jerarquia:

```text
ReservaError
├── PlacesInsuficientsError
└── ReservaTancadaError
```

Prova una captura específica i una captura general de `ReservaError`. Ordena els blocs `except` correctament.

## Evidències

- [ ] S'han identificat correctament els elements dels *tracebacks*.
- [ ] El `try` conté només les instruccions que poden fallar.
- [ ] Les excepcions específiques apareixen abans de les generals.
- [ ] Les excepcions pròpies descriuen regles del domini.
- [ ] Les assercions comproven estats interns, no dades externes.

[Anterior: activitat de bucles](activitat-2-bucles.md) · [Índex de la UP3](../index.md) · [Teoria: excepcions](../04-control-excepcions.md) · [Següent activitat: proves](activitat-4-proves-i-depuracio.md)
