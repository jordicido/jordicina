---
hide:
  - navigation
---
# Activitats avaluables de la UP3

Aquest itinerari introdueix les estructures de control, les excepcions i la depuració de manera progressiva. Està pensat per a alumnat que ja coneix variables, tipus bàsics, `input()` i `print()`, però que encara està fent els primers programes amb Python.

Les tres activitats són individuals. En cada exercici cal lliurar codi llegible, provar més d'un cas i poder explicar les decisions preses.

## Resum de l'itinerari

| Activitat | Continguts principals | Criteris |
| --- | --- | --- |
| [1. Decisions en Python](#activitat-1-decisions-en-python) | `if`, `elif`, `else` i comparacions | RA3.a, RA3.e, RA3.g |
| [2. Repetim accions](#activitat-2-repetim-accions) | `for`, `while`, comptadors i acumuladors | RA3.b, RA3.c, RA3.e, RA3.g |
| [3. El programa no funciona!](#activitat-3-el-programa-no-funciona) | proves, depuració, `try`, `except`, `assert` i `raise` | RA3.d, RA3.e, RA3.f, RA3.g, RA3.h, RA3.i |

## Activitat 1. Decisions en Python

### Finalitat i criteris

Aprendre a fer que el programa prenga decisions segons les dades introduïdes per l'usuari, utilitzant `if`, `elif` i `else`.

Es treballen **RA3.a**, **RA3.e** i **RA3.g**.

### Tasca

Crea un fitxer `.py` diferent per a cada exercici, amb els noms `exercici1.py` fins a `exercici5.py`.

#### Exercici 1. Major o menor d'edat

Demana l'edat, converteix-la a enter i mostra `Ets major d'edat.` si és 18 o superior. En cas contrari, mostra `Ets menor d'edat.`.

#### Exercici 2. Quin número és major?

Demana dos números i indica si el primer és major, si ho és el segon o si són iguals. Cal contemplar explícitament el cas d'igualtat.

#### Exercici 3. Classificació d'una nota

Demana una nota entre 0 i 10 i mostra el resultat segons aquesta taula:

| Nota | Resultat |
| --- | --- |
| Menys de 5 | Suspés |
| De 5 a menys de 7 | Aprovat |
| De 7 a menys de 9 | Notable |
| De 9 a 10 | Excel·lent |

Ordena les condicions correctament i prova almenys les notes `4`, `6`, `8` i `10`.

#### Exercici 4. Positiu, negatiu o zero

Demana un número i indica si és positiu, negatiu o zero.

#### Exercici 5. Calculadora senzilla

Demana dos números i una operació (`+`, `-`, `*` o `/`). Mostra el resultat o `Operació no vàlida.` si l'operació no existeix. En aquesta activitat encara no cal tractar la divisió entre zero.

### Requisits i lliurament

Els programes han d'executar-se sense errors de sintaxi, utilitzar noms comprensibles, mostrar missatges clars i tindre una indentació correcta. No s'ha d'utilitzar codi que encara no s'haja treballat a classe.

Lliura una carpeta amb aquesta estructura:

```text
activitat1/
├── exercici1.py
├── exercici2.py
├── exercici3.py
├── exercici4.py
└── exercici5.py
```

Al principi de cada fitxer inclou:

```python
# Nom:
# Activitat 1 - Exercici X
# Descripció breu del programa
```

Prova cada programa amb almenys dos valors diferents i comprova més d'un camí d'execució quan hi haja diverses possibilitats.

## Activitat 2. Repetim accions

### Finalitat i criteris

Aprendre a repetir instruccions sense copiar el mateix codi, diferenciant els bucles controlats per un nombre de repeticions dels bucles controlats per una condició.

Es treballen **RA3.b**, **RA3.c**, **RA3.e** i **RA3.g**.

### Tasca

Resol els cinc exercicis de manera progressiva. Utilitza `for` o `while` segons el problema i evita escriure instruccions repetides.

#### Exercici 1. Números de l'1 al 10

Mostra els números de l'1 al 10 utilitzant un bucle. No escrigues deu instruccions `print()` diferents.

#### Exercici 2. Números parells

Mostra tots els números parells des de 2 fins a 20 i prepara una explicació breu del funcionament del bucle.

#### Exercici 3. Suma de cinc números

Demana cinc números, acumula'ls en una única variable i mostra la suma final. No crees cinc variables diferents.

#### Exercici 4. Contrasenya correcta

Demana una contrasenya fins que l'usuari introduïsca `python123`. Amb cada intent incorrecte mostra un avís i, quan siga correcta, mostra `Accés correcte.`. Cal utilitzar `while`.

#### Exercici 5. Introducció de números fins a 0

Demana números repetidament i acaba quan l'usuari introduïsca `0`. Mostra quants números diferents de zero s'han introduït i la suma total. Cal combinar `input()`, conversió de tipus, `while`, una condició, un comptador i un acumulador.

### `break` i `continue`

Després dels exercicis, explica la diferència entre aquestes dues sentències i prova els exemples:

```python
while True:
    numero = int(input("Número: "))
    if numero == 0:
        break
    print(numero)
```

`break` finalitza immediatament el bucle.

```python
for numero in range(1, 11):
    if numero == 5:
        continue
    print(numero)
```

`continue` omet la resta de la iteració actual i passa a la següent.

### Requisits i lliurament

Revisa que els comptadors i acumuladors estiguen inicialitzats, que la condició de finalització siga clara i que no hi haja bucles infinits. Documenta les variables importants amb comentaris breus, però no comentes cada línia.

```text
activitat2/
├── exercici1.py
├── exercici2.py
├── exercici3.py
├── exercici4.py
└── exercici5.py
```

Abans de lliurar, comprova que els bucles acaben quan correspon, que les sumes són correctes i que els programes funcionen amb valors diferents.

## Activitat 3. El programa no funciona!

### Finalitat i criteris

Aprendre a executar un programa, observar-ne el comportament, localitzar la causa d'un problema, corregir-lo i tornar-lo a provar. També s'introdueix el control bàsic d'errors amb `try` i `except`, així com l'ús guiat de `assert` i `raise`.

Es treballen **RA3.d**, **RA3.e**, **RA3.f**, **RA3.g**, **RA3.h** i **RA3.i**.

### Part 1. Detectar errors senzills

Executa, explica i corregeix els programes següents.

#### Error 1. Comparació incorrecta de tipus

```python
edat = input("Introdueix la teua edat: ")

if edat >= 18:
    print("Ets major d'edat")
```

Identifica l'error i converteix la dada introduïda al tipus necessari.

#### Error 2. Bucle infinit

```python
numero = 1

while numero <= 10:
    print(numero)
```

Explica per què la condició no deixa de complir-se i modifica el programa perquè mostre de l'1 al 10 i finalitze.

#### Error 3. Condició incorrecta

```python
nota = float(input("Nota: "))

if nota >= 5:
    print("Suspés")
else:
    print("Aprovat")
```

Prova'l amb `3` i `7`, explica el problema i corregeix les eixides.

#### Error 4. Acumulador incorrecte

```python
suma = 0

for i in range(5):
    numero = int(input("Número: "))
    suma = numero

print("Suma:", suma)
```

Prova'l amb `1`, `2`, `3`, `4` i `5`. Explica per què no calcula 15 i corregeix l'acumulador.

### Part 2. Errors durant l'execució

Executa el programa amb `2`, `0` i `hola`, i completa què ocorre en cada cas:

```python
numero = int(input("Introdueix un número: "))
resultat = 10 / numero

print("Resultat:", resultat)
```

Relaciona cada entrada amb el tipus d'error i amb la correcció o tractament adequat.

### Part 3. Introducció a `try` i `except`

Modifica el programa anterior perquè gestione les entrades no numèriques i la divisió entre zero sense finalitzar inesperadament:

```python
try:
    numero = int(input("Introdueix un número: "))
    resultat = 10 / numero
    print("Resultat:", resultat)
except ValueError:
    print("Has d'introduir un número.")
except ZeroDivisionError:
    print("No es pot dividir entre zero.")
```

Prova'l amb `5`, `0` i `hola`, i indica quin bloc s'executa en cada cas.

### Part 4. Corregir un programa complet

El programa següent ha de demanar números fins a `0` i mostrar-ne la quantitat i la suma, però conté errors de tipus i de comparació:

```python
total = 0
comptador = 0

while True:
    numero = input("Número (0 per acabar): ")
    if numero == 0:
        break
    total = total + numero
    comptador = comptador + 1

print("Has introduït", comptador, "números")
print("Suma:", total)
```

Corregeix-lo i prova'l amb `5`, `3`, `2` i `0`. El resultat esperat és 3 números i una suma de 10.

### Part 5. Introducció al depurador de VS Code

Col·loca un *breakpoint* en la línia de l'acumulació, inicia la depuració i observa pas a pas `numero`, `suma` i `i`:

```python
suma = 0

for i in range(3):
    numero = int(input("Número: "))
    suma = suma + numero

print("Total:", suma)
```

Utilitza les entrades `5`, `3` i `2` i anota els valors de `suma` després de cada iteració.

### Part 6. Introducció a `assert`

Utilitza una asserció per detectar una situació que no hauria d'ocórrer durant el desenvolupament:

```python
edat = 20
assert edat >= 0
print("Edat:", edat)
```

Canvia l'edat a `-5`, observa l'error i explica què comprova l'`assert`. Després crea una asserció que comprove que una nota no és negativa.

### Part 7. Introducció guiada a `raise`

Prova el programa amb `20` i amb `-5`, i descriu què ocorre:

```python
edat = int(input("Edat: "))

if edat < 0:
    raise ValueError("L'edat no pot ser negativa")

print("Edat correcta:", edat)
```

Modifica el missatge perquè siga descriptiu. En aquesta activitat no cal crear classes d'excepcions pròpies: l'objectiu és entendre que `raise` permet indicar explícitament una situació incorrecta.

### Documentació i lliurament

Per cada error, documenta breument:

```text
Problema:
Causa:
Solució:
```

Lliura una carpeta semblant a:

```text
activitat3/
├── errors_basics.py
├── excepcions.py
├── programa_corregit.py
├── debugger.py
├── assert.py
└── raise.py
```

Afig un `depuracio.md` amb els errors treballats, la causa i la solució.

## Orientacions metodològiques

La seqüència recomanada és:

```text
Programa lineal → condicions → bucles → combinació → proves → errors → excepcions
```

Convé consolidar primer `if`, després `for` i `while`, i introduir la depuració i les excepcions quan els bucles ja siguen comprensibles. Els exercicis han de ser curts i fàcils de provar.

El codi lliurat ha de ser comprensible per l'alumne o alumna que el presenta. Cal poder explicar què fa cada part, modificar-la davant del professorat i justificar l'ús d'una condició o d'un bucle.

## Relació amb la resta de la UP3

Aquest itinerari introdueix els conceptes de manera guiada. Per aprofundir-hi, continua amb les [activitats de condicions](activitat-1-condicions.md), [bucles](activitat-2-bucles.md), [excepcions i validació](activitat-3-excepcions-i-validacio.md), [proves i depuració](activitat-4-proves-i-depuracio.md) i el [projecte integrador](projecte-integrador.md).

[Índex de la UP3](../index.md) · [Començar la teoria](../01-estructures-seleccio.md) · [Autoavaluació](autoavaluacio.md)
