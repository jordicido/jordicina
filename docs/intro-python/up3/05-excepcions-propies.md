# 5. Excepcions pròpies

!!! info "Criteris d'avaluació treballats"
    - **RA3.h** — S'han creat excepcions.

Les excepcions estàndard descriuen problemes generals, com una conversió impossible o una divisió per zero. En un programa real també hi ha errors propis del seu domini: un compte sense saldo, un producte sense existències o unes credencials que no autoritzen l'accés.

## Per què crear una excepció pròpia?

Una excepció pròpia dona un nom precís a una situació. Això permet que el codi que crida una funció decidisca què fer sense haver de buscar textos dins del missatge.

```python
class SaldoInsuficientError(Exception):
    pass
```

La classe hereta d'`Exception`, que és la classe base habitual per a les excepcions que pot tractar una aplicació. En aquesta unitat només necessites aquesta herència mínima; no cal estudiar encara la programació orientada a objectes en profunditat.

Per convenció, els noms d'excepció acaben en `Error` i utilitzen `PascalCase`.

## Llançar i capturar una excepció pròpia

```python
class StockInsuficientError(Exception):
    pass


stock = 3
quantitat = 5

try:
    if quantitat > stock:
        raise StockInsuficientError("No hi ha prou unitats disponibles")
    stock -= quantitat
except StockInsuficientError as error:
    print(f"Comanda rebutjada: {error}")
else:
    print(f"Comanda acceptada. Unitats restants: {stock}")
```

`raise` crea i llança l'excepció. `except StockInsuficientError` captura exactament aquesta situació.

## Missatges d'error

Passa un missatge que explique què ha fallat i, si és útil, quin valor o regla hi està relacionat.

```python
class EdatNoValidaError(Exception):
    pass


def validar_edat(edat):
    if not 0 <= edat <= 120:
        raise EdatNoValidaError(
            f"L'edat {edat} no està entre 0 i 120"
        )


try:
    validar_edat(145)
except EdatNoValidaError as error:
    print(error)
```

El missatge és per a informar o depurar. La identitat de l'error és el tipus `EdatNoValidaError`, que permet tractar-lo de manera fiable.

## Excepció estàndard o del domini?

Tria una excepció estàndard quan el problema ja està ben descrit per Python.

```python
def convertir_percentatge(text):
    return float(text)  # ValueError si el text no és numèric
```

Crea una excepció pròpia quan vols expressar una regla específica del programa.

```python
class CredencialsIncorrectesError(Exception):
    pass


def autenticar(usuari, contrasenya):
    if usuari != "tecnic" or contrasenya != "Python3!":
        raise CredencialsIncorrectesError("Usuari o contrasenya incorrectes")


try:
    autenticar("tecnic", "incorrecta")
except CredencialsIncorrectesError as error:
    print(f"No s'ha pogut iniciar sessió: {error}")
```

En un sistema real mai no guardaries ni mostraries contrasenyes d'aquesta manera; l'exemple se centra en el mecanisme de l'excepció.

## Excepcions que fan el codi més expressiu

Compara dues versions d'una funció de retirada.

```python
# Menys expressiu: el codi que crida ha d'interpretar el missatge.
def retirar_antic(saldo, quantitat):
    if quantitat > saldo:
        raise ValueError("saldo insuficient")
```

```python
class SaldoInsuficientError(Exception):
    pass


def retirar(saldo, quantitat):
    if quantitat > saldo:
        raise SaldoInsuficientError("Saldo insuficient")
```

La segona versió permet separar aquest error d'altres `ValueError` que podrien indicar una quantitat negativa o un format incorrecte.

## Excepcions pròpies i funcions

Una funció pot validar les seues regles i deixar que el programa superior decidisca com reaccionar.

```python
class StockInsuficientError(Exception):
    pass


def reservar_unitats(stock, quantitat):
    if quantitat <= 0:
        raise ValueError("La quantitat ha de ser positiva")
    if quantitat > stock:
        raise StockInsuficientError(
            f"Sol·licitades {quantitat}; disponibles {stock}"
        )
    return stock - quantitat


for quantitat_sollicitada in (2, 4):
    try:
        stock = reservar_unitats(3, quantitat_sollicitada)
    except ValueError as error:
        print(f"Dada incorrecta: {error}")
    except StockInsuficientError as error:
        print(f"Reserva rebutjada: {error}")
    else:
        print(f"Reserva acceptada. Stock restant: {stock}")
```

El programa tracta la dada incorrecta i el problema d'estoc amb missatges diferents, però la funció no està lligada a una interfície concreta.

## Quan no cal una excepció pròpia?

No crees una classe nova només per canviar el text d'un error conegut. Si `int(text)` falla, `ValueError` ja és adequat. Tampoc necessites excepcions pròpies per a qualsevol decisió normal del programa:

```python
if opcio == "4":
    print("Eixint")
```

Usa una excepció quan la situació representa una operació que no es pot completar i és útil que el codi receptor la puga distingir.

## Errors habituals

- Oblidar que la classe ha d'heretar d'`Exception`.
- Anomenar-la `ErrorSaldo` en lloc de seguir la convenció `SaldoInsuficientError`.
- Llançar una excepció però no capturar-la en cap lloc on es puga tractar.
- Capturar la classe pare abans que la classe específica.
- Utilitzar el text del missatge per decidir el comportament en lloc del tipus d'excepció.
- Crear una excepció pròpia quan una excepció estàndard ja descriu perfectament el problema.

!!! note "Recorda"
    El nom de l'excepció és part de la interfície del programa. Ha de permetre entendre el problema sense haver de llegir tota la implementació.

## Resum

- Una excepció pròpia hereta normalment d'`Exception`.
- Els noms acaben en `Error` i descriuen una situació del domini.
- `raise` la llança i `except` la captura.
- El tipus permet distingir problemes semblants amb precisió.
- No cal crear una classe nova si una excepció estàndard ja és suficient.
