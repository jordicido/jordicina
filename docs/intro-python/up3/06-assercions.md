---
hide:
  - navigation
---
# 6. Assercions

!!! info "Criteris d'avaluació treballats"
    - **RA3.i** — S'han utilitzat assercions per a la detecció i correcció d'errors durant la fase de desenvolupament.

Una asserció és una comprovació que una condició interna del programa és certa en un punt concret. En Python s'escriu amb `assert` i serveix per detectar ràpidament que una suposició del desenvolupador ja no es compleix.

## Sintaxi de `assert`

```python
assert condicio
```

Si `condicio` és certa, el programa continua. Si és falsa, Python llança `AssertionError`.

```python
usuaris_carregats = 12

assert usuaris_carregats >= 0
print("L'estat és coherent")
```

En aquest cas l'assercció documenta un invariant: no té sentit que el nombre d'usuaris carregats siga negatiu.

## Precondicions, postcondicions i invariants

Les assercions poden descriure tres tipus de suposició interna:

| Tipus | Moment | Pregunta |
| --- | --- | --- |
| Precondició | abans de l'operació | Les dades internes compleixen allò que la funció necessita? |
| Postcondició | després de l'operació | El resultat compleix allò que la funció promet? |
| Invariant | durant tot el procés | La propietat que defineix un estat vàlid continua sent certa? |

```python
def reservar(disponibles, quantitat):
    assert disponibles >= 0, "Precondició: places negatives"
    assert quantitat > 0, "Precondició: quantitat no positiva"

    restants = disponibles - quantitat

    assert restants <= disponibles, "Postcondició: han augmentat les places"
    return restants
```

Aquest exemple pressuposa que les dades ja han sigut validades abans. Si `quantitat > disponibles` és una situació esperable del domini, s'ha de comunicar amb una excepció, no amb una asserció.

## Missatges en les assercions

Pots afegir un missatge després d'una coma.

```python
saldo = -10

assert saldo >= 0, "El saldo intern no pot ser negatiu"
```

El resultat és una excepció semblant a:

```text
AssertionError: El saldo intern no pot ser negatiu
```

El missatge ha d'explicar quina suposició s'ha trencat.

## Comprovar invariants

Un invariant és una propietat que ha de mantindre's abans o després d'una operació interna.

```python
def aplicar_descompte(preu, percentatge):
    assert preu >= 0, "El preu intern ha de ser positiu o zero"
    assert 0 <= percentatge <= 100, "Percentatge intern fora de rang"

    resultat = preu * (1 - percentatge / 100)
    assert 0 <= resultat <= preu, "El resultat no és coherent"
    return resultat


print(aplicar_descompte(80, 25))
```

Les assercions ajuden a localitzar el punt on una funció rep o produeix un estat inesperat.

### Detectar un error durant el desenvolupament

```python
def afegir_element(elements, element):
    longitud_abans = len(elements)
    elements.append(element)
    assert len(elements) == longitud_abans + 1


dades = ["web", "bd"]
afegir_element(dades, "backup")
print(dades)
```

Si una futura modificació impedira afegir l'element, l'assercció ho indicaria prop de l'operació relacionada.

## Validació d'entrada, excepcions i assercions

Les tres eines tenen intencions diferents.

| Situació | `if` | `raise` | `assert` |
| --- | :---: | :---: | :---: |
| L'usuari introdueix una dada fora de rang | Sí, per informar i repetir | Sí, dins d'una funció que rebutja la dada | **No** |
| Una funció rep un argument que incompleix el seu contracte | Pot comprovar-lo | Sí, si el problema s'ha de comunicar al codi receptor | Pot documentar una precondició interna, si no és una regla de seguretat |
| Comprovar un invariant intern durant el desenvolupament | No és l'opció més directa | No sempre cal propagar una excepció de domini | Sí |
| Controlar permisos o credencials | Sí | Sí, amb un error adequat | **No** |
| Acció normal que pot donar dos resultats esperats | Sí | Habitualment no | No |

### Validació amb `if`

```python
edat = int(input("Edat: "))
if edat < 0:
    print("L'edat no pot ser negativa")
```

És una decisió normal del programa i pot formar part de la resposta a una entrada externa.

### Excepció per a una regla de la funció

```python
def reservar(stock, quantitat):
    if quantitat > stock:
        raise ValueError("No hi ha prou stock")
    return stock - quantitat
```

La funció comunica que no pot completar l'operació. En una aplicació real, el tipus podria ser una excepció pròpia com `StockInsuficientError`.

### Asserció per a una suposició interna

```python
def calcular_total(preus):
    assert all(preu >= 0 for preu in preus), "Preu intern negatiu"
    return sum(preus)
```

Ací s'està comprovant un invariant que el codi anterior hauria d'haver garantit.

## Per què no validar dades externes amb `assert`?

Les assercions són una ajuda de desenvolupament, no un mecanisme de seguretat. El programa es pot executar amb optimitzacions que desactiven les assercions. Per tant, un usuari podria saltar-se una comprovació si depens d'`assert` per validar les dades rebudes.

```python
# Incorrecte: una asserció no ha de protegir un recurs.
def obrir_panell_administracio():
    print("Panell obert")


contrasenya = input("Contrasenya: ")
assert contrasenya == "secreta", "Accés denegat"
obrir_panell_administracio()
```

```python
# Correcte: la regla d'autorització forma part del comportament real.
def obrir_panell_administracio():
    print("Panell obert")


contrasenya = input("Contrasenya: ")
if contrasenya == "secreta":
    obrir_panell_administracio()
else:
    print("Accés denegat")
```

En un sistema real, a més, no es guardaria la contrasenya en text pla.

## Les assercions es poden desactivar

Python pot executar el programa en mode optimitzat, per exemple amb:

```bash
python -O programa.py
```

En aquest mode, les instruccions `assert` no es processen. Això reforça la regla: si una comprovació és necessària perquè el programa funcione correctament o siga segur, usa `if` i/o `raise`, no `assert`.

## Assercions com a comprovacions automatitzades

Una sèrie d'`assert` també pot servir com a primera aproximació a proves automatitzades. En aquest cas comproven resultats esperats, no protegeixen l'execució normal.

```python
def calcular_total(preu, places):
    return preu * places


assert calcular_total(10, 1) == 10
assert calcular_total(10, 0) == 0
assert calcular_total(7.5, 4) == 30
```

Aquestes comprovacions es poden executar després de cada canvi. Més avant es poden traslladar a una eina de proves, però el principi ja és el mateix: entrada coneguda, resultat esperat i avís immediat si no coincideixen.

No confongues els dos usos:

- una asserció dins de la funció documenta una suposició interna;
- una asserció en un fitxer de proves comprova el comportament observable de la funció.

## Pràctica curta

1. **Classifica.** Decideix si cada comprovació és una precondició, una postcondició o un invariant.
2. **Detecta.** Explica per què `assert contrasenya_correcta` no és un control d'accés segur.
3. **Completa.** Afig una postcondició que comprove que una reserva mai retorna més places de les disponibles inicialment.
4. **Construeix.** Escriu quatre assercions de prova per a una funció que calcula el total d'una reserva.

## Errors habituals

- Escriure `assert` per tractar una dada que controla l'usuari.
- Usar-lo per protegir permisos, contrasenyes o regles de seguretat.
- Fer servir una asserció per substituir totes les validacions.
- No posar un missatge quan la condició és difícil d'interpretar.
- Assumir que l'assercció sempre estarà activa en producció.
- Comprovar coses trivials que no aporten informació sobre l'estat intern.

!!! warning "Idea clau"
    Una asserció diu: «aquest punt del programa no hauria de rebre mai un estat incorrecte». No diu: «l'usuari ha de complir aquesta regla».

## Resum

- `assert` comprova una condició interna i llança `AssertionError` si és falsa.
- El missatge ajuda a localitzar la suposició trencada.
- Les assercions són útils per a invariants i errors de desenvolupament.
- Poden documentar precondicions i postcondicions internes.
- En un fitxer de proves, poden comparar resultats reals i esperats.
- Les dades externes, els permisos i la seguretat s'han de validar amb lògica normal i excepcions.
- `assert` es pot desactivar amb `python -O`.

[Anterior: excepcions pròpies](05-excepcions-propies.md) · [Índex de la UP3](index.md) · [Següent: proves i depuració](07-proves-depuracio.md)
