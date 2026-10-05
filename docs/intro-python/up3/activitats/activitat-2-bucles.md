---
hide:
  - navigation
---
# Activitat 2. Bucles i recorreguts

!!! info "Criteris d'avaluació"
    - **RA3.b** — Utilitzar estructures de repetició.
    - **RA3.c** — Reconéixer i aplicar sentències de salt.
    - **RA3.e** — Crear programes executables amb estructures de control.

## Producte

Una carpeta `activitat-2-bucles` amb els programes, les taules de traça i els casos de prova.

## 1. Traça d'un acumulador

Completa la taula abans d'executar:

```python
total = 0

for places in [2, 4, 1, 3]:
    total += places
```

| Iteració | `places` | `total` abans | `total` després |
| ---: | ---: | ---: | ---: |
| 1 | 2 |  |  |
| 2 | 4 |  |  |
| 3 | 1 |  |  |
| 4 | 3 |  |  |

## 2. Detecta el bucle infinit

```python
intent = 1

while intent <= 3:
    resposta = input("Codi: ")
    if resposta == "python":
        print("Correcte")
        break
    print("Incorrecte")
```

Explica quin camí no actualitza l'estat i corregeix-lo. Afig un missatge quan s'esgoten els intents sense encertar.

## 3. Resum de reserves

| Element | Descripció |
| --- | --- |
| Entrada | Nombres de places; `fi` acaba la introducció. |
| Procés | Validar, comptar reserves i acumular places. |
| Eixida | Nombre de reserves, places totals i mitjana. |
| Casos mínims | Cap reserva, una reserva, diverses reserves i valor no numèric. |

En aquesta activitat encara pots mostrar un missatge i repetir si el text no és numèric. En l'activitat següent ho resoldràs amb excepcions.

## 4. Posició i valor

Donada la llista següent:

```python
participants = ["Aina", "Biel", "Carla", "Dídac"]
```

Mostra una llista numerada que comence en 1 utilitzant `enumerate()`. Després demana un nom i indica la posició on apareix o informa que no existeix mitjançant `for-else`.

## 5. Dades paral·leles

Utilitza `zip()` per mostrar cada participant amb el nombre de places reservades.

```python
participants = ["Aina", "Biel", "Carla"]
places = [2, 1, 4]
```

Comprova abans que les dues llistes tenen la mateixa longitud. Calcula també el total de places.

## 6. Menú persistent

Crea un menú amb aquestes opcions:

1. consultar places disponibles;
2. registrar una reserva;
3. cancel·lar places;
4. mostrar estadístiques;
5. eixir.

El menú s'ha de repetir amb `while`. Usa `continue` per descartar una opció buida i `break` només per a l'opció d'eixida. De moment pots suposar que les quantitats són enters correctes.

## 7. Repte: graella de seients

Mostra una graella de 4 files i 5 columnes amb les coordenades de cada seient. Després modifica-la perquè marque amb `X` una fila i columna indicades.

Abans d'executar, calcula quantes vegades s'executarà el cos del bucle interior.

## Evidències

- [ ] Cada `while` té una condició d'eixida verificable.
- [ ] Els acumuladors i comptadors s'inicialitzen abans del bucle.
- [ ] Les taules de traça coincideixen amb l'execució.
- [ ] `break` i `continue` tenen una finalitat clara.
- [ ] S'han provat zero, una i diverses iteracions.

[Anterior: activitat de condicions](activitat-1-condicions.md) · [Índex de la UP3](../index.md) · [Teoria: bucles](../02-estructures-repeticio.md) · [Següent activitat: excepcions](activitat-3-excepcions-i-validacio.md)
