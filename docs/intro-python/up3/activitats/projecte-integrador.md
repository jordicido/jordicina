---
hide:
  - navigation
---
# Projecte integrador. Gestor de reserves

!!! info "Criteris d'avaluació"
    - **RA3.a–RA3.i** — El projecte integra tots els criteris de la unitat.

## Repte

Desenvolupa un programa de consola que gestione les places disponibles d'una activitat. El programa ha de permetre consultar l'estat, registrar reserves, cancel·lar places i mostrar estadístiques fins que l'usuari trie eixir.

L'objectiu no és simular una plataforma real completa. És demostrar que pots combinar estructures de control, excepcions, assercions, proves, depuració i documentació en una solució coherent.

## Productes que has de lliurar

```text
projecte-reserves/
├── gestor_reserves.py
├── casos_prova.md
└── registre_depuracio.md
```

- `gestor_reserves.py`: programa final documentat.
- `casos_prova.md`: matriu amb entrades, resultats esperats i resultats reals.
- `registre_depuracio.md`: almenys tres errors investigats amb causa i correcció.

## Requisits funcionals

El programa comença amb una capacitat total constant i totes les places disponibles.

```python
CAPACITAT_TOTAL = 20
```

El menú ha d'oferir:

1. consultar places disponibles i ocupades;
2. registrar una reserva;
3. cancel·lar places;
4. mostrar el nombre de reserves, cancel·lacions i places gestionades;
5. eixir.

## Regles

- Una reserva ha de tindre almenys una plaça.
- No es poden reservar més places de les disponibles.
- Una cancel·lació ha de ser positiva.
- No es poden cancel·lar més places de les ocupades.
- Una entrada amb format incorrecte no ha de finalitzar el programa.
- Després de cada operació s'ha de complir `0 <= disponibles <= CAPACITAT_TOTAL`.

## Excepcions pròpies

Crea una classe base i dues excepcions concretes:

```python
class ReservaError(Exception):
    """Classe base dels errors del gestor."""


class PlacesInsuficientsError(ReservaError):
    pass


class CancelacioNoValidaError(ReservaError):
    pass
```

`ValueError` pot representar una quantitat no positiva. Les excepcions pròpies han de representar regles específiques del gestor.

## Desenvolupament per etapes

### Etapa 1. Decisions

Implementa el menú i valida les opcions. Encara no cal repetir-lo.

### Etapa 2. Repetició

Mantín el menú actiu fins que l'usuari trie eixir. Afig comptadors de reserves i cancel·lacions.

### Etapa 3. Validació

Controla la conversió a enter amb `try-except`. Separa el format incorrecte de les regles del domini.

### Etapa 4. Funcions i excepcions

Separa almenys aquestes operacions:

```python
def reservar(disponibles, quantitat):
    ...


def cancel_lar(disponibles, capacitat, quantitat):
    ...
```

Les funcions han de retornar el nou estat o llançar una excepció; no han de llegir dades amb `input()`.

### Etapa 5. Assercions

Comprova l'invariant després de reservar o cancel·lar:

```python
assert 0 <= disponibles <= CAPACITAT_TOTAL
```

### Etapa 6. Proves i depuració

Prepara com a mínim aquests casos:

| Grup | Casos mínims |
| --- | --- |
| Reserva | mínima, normal, total, zero, negativa i excés |
| Cancel·lació | mínima, normal, totes les ocupades, zero, negativa i excés |
| Menú | opció vàlida, desconeguda i buida |
| Format | enter, decimal i text |
| Seqüència | diverses reserves i cancel·lacions consecutives |

Automatitza les funcions pures amb `assert` i utilitza el depurador almenys per a un error de condició i un error d'actualització d'estat.

### Etapa 7. Documentació i revisió

- Utilitza noms `snake_case` i constants en majúscules.
- Escriu docstrings per a les funcions i excepcions rellevants.
- Comenta decisions no evidents, no instruccions trivials.
- Elimina codi comentat i missatges `[DEBUG]`.
- Aplica la checklist de [Documentació i bones pràctiques](../08-documentacio-bones-practiques.md).

## Criteris d'èxit

- [ ] El menú funciona fins a l'eixida explícita.
- [ ] L'estat de les places sempre és coherent.
- [ ] Les dades incorrectes no trenquen el programa.
- [ ] Les excepcions diferencien causes recuperables.
- [ ] Les assercions comproven invariants interns.
- [ ] La matriu de proves està completada.
- [ ] Els errors corregits tenen una prova de regressió.
- [ ] El codi és llegible i està documentat.
- [ ] Pots explicar i modificar qualsevol part del programa.

[Índex de la UP3](../index.md) · [Activitat 4. Proves i depuració](activitat-4-proves-i-depuracio.md) · [Autoavaluació](autoavaluacio.md)
