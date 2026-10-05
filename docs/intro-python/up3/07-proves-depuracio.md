---
hide:
  - navigation
---
# 7. Proves i depuració

!!! info "Criteris d'avaluació treballats"
    - **RA3.e** — S'han creat programes executables utilitzant diferents estructures de control.
    - **RA3.f** — S'han provat i depurat els programes.

Que un programa s'execute sense mostrar un error no vol dir que siga correcte. Pot prendre una decisió equivocada, ometre una iteració o acceptar una dada que no hauria d'acceptar. Provar i depurar són activitats diferents però relacionades: les proves revelen comportaments incorrectes i la depuració ajuda a trobar-ne la causa.

## Casos de prova

Un cas de prova descriu una entrada i el resultat que esperes. No cal començar amb eines avançades; una taula senzilla obliga a pensar quines situacions ha de cobrir el programa.

| Tipus | Exemple per a una funció que classifica notes |
| --- | --- |
| Normal | `7` → `Aprovat` |
| Límit | `5` → `Aprovat` i `10` → `Excel·lent` |
| Fora de rang | `-1` o `11` → entrada no vàlida |
| Tipus o format incorrecte | `"set"` → error de conversió |
| Cas especial | cap dada o llista buida |

### Matriu de proves

Abans d'executar, transforma els casos en una taula verificable. Afig el resultat real i l'estat quan proves el programa.

| Cas | Entrada | Resultat esperat | Resultat real | Estat |
| --- | --- | --- | --- | :---: |
| Reserva mínima | `1` plaça | Total d'una plaça | pendent | ☐ |
| Límit disponible | totes les places | Reserva acceptada | pendent | ☐ |
| Sense places | `0` | Dada rebutjada | pendent | ☐ |
| Excés | més places de les disponibles | Error de domini | pendent | ☐ |
| Format incorrecte | `"tres"` | Error de conversió controlat | pendent | ☐ |

Una matriu evita repetir sempre el mateix cas i deixa una evidència concreta de la comprovació.

### Casos normals

Representen l'ús habitual i permeten comprovar el camí principal.

```python
def classificar_nota(nota):
    if nota < 0 or nota > 10:
        return "No vàlida"
    if nota < 5:
        return "Suspés"
    if nota < 7:
        return "Aprovat"
    if nota < 9:
        return "Notable"
    return "Excel·lent"


print(classificar_nota(7))  # Notable
```

### Casos límit i valors frontera

Els valors frontera són els que estan just al costat d'un canvi de comportament. Per a una nota, prova `4.99`, `5`, `6.99`, `7`, `8.99`, `9` i `10`.

```python
valors = [4.99, 5, 6.99, 7, 8.99, 9, 10]

for valor in valors:
    print(valor, "->", classificar_nota(valor))
```

Aquests casos detecten errors *off-by-one* i intervals mal ordenats.

### Casos invàlids

Prova què passa quan les dades no compleixen el contracte: nombres negatius, valors massa grans, text, una opció desconeguda o un divisor zero. El programa ha d'informar o llançar una excepció prevista, no fallar de manera inexplicable.

## Provar condicionals i bucles

Per a un condicional, comprova cada branca i les fronteres que fan canviar de branca. Per a un bucle, comprova almenys:

- zero iteracions;
- una iteració;
- diverses iteracions;
- el primer i l'últim valor;
- una entrada que provoca l'eixida o el sentinella.

```python
def sumar_positius(valors):
    suma = 0
    for valor in valors:
        if valor > 0:
            suma += valor
    return suma


casos = [
    [],
    [4],
    [-2, -1],
    [-2, 3, 5],
]

for cas in casos:
    print(cas, "->", sumar_positius(cas))
```

La llista buida comprova el cas de zero iteracions i confirma que l'acumulador està ben inicialitzat.

## Provar excepcions

Una prova no ha de comprovar només el resultat correcte; també ha de verificar que les entrades incorrectes generen el tractament esperat.

```python
def dividir(dividend, divisor):
    if divisor == 0:
        raise ValueError("El divisor no pot ser zero")
    return dividend / divisor


for dividend, divisor in [(10, 2), (0, 5), (10, 0)]:
    try:
        print(dividend, "/", divisor, "=", dividir(dividend, divisor))
    except ValueError as error:
        print(f"Entrada rebutjada: {error}")
```

## Proves automatitzades senzilles amb `assert`

Quan una funció rep dades i retorna un resultat, pots comprovar diversos casos sense introduir-los manualment cada vegada.

```python
def calcular_total(preu_unitari, places):
    if places <= 0:
        raise ValueError("Les places han de ser positives")
    return preu_unitari * places


assert calcular_total(10, 1) == 10
assert calcular_total(10, 3) == 30
assert calcular_total(7.5, 4) == 30
```

Per comprovar una excepció sense una biblioteca externa, usa una variable que confirme que s'ha produït el cas esperat:

```python
error_detectat = False

try:
    calcular_total(10, 0)
except ValueError:
    error_detectat = True

assert error_detectat, "S'esperava ValueError per a zero places"
```

Aquestes proves no substitueixen una eina especialitzada, però introdueixen el procés essencial: preparar, executar i comparar automàticament.

### Proves de regressió

Quan trobes un error, conserva l'entrada que el reproduïa i converteix-la en una prova. Si una reserva de totes les places disponibles fallava, eixe cas ha de continuar executant-se després de la correcció. La prova de regressió evita que el mateix defecte reaparega en una modificació posterior.

## Què és depurar?

Depurar és investigar una execució per descobrir per què el comportament real no coincideix amb l'esperat. No consisteix a canviar línies a l'atzar fins que “sembla que funciona”.

### Procés sistemàtic

1. **Reproduir** l'error amb una entrada concreta.
2. **Localitzar** el punt on el resultat deixa de ser el que esperaves.
3. **Observar** valors, condicions i iteracions.
4. **Formular una hipòtesi** sobre la causa.
5. **Corregir** la causa, no només el símptoma.
6. **Tornar a provar** el cas que fallava i altres casos relacionats.

Després d'una correcció, conserva el cas de prova. Pot convertir-se en una prova de regressió: una comprovació que evita que el mateix error torne en el futur.

## Depuració temporal amb `print()`

Un `print()` ben triat pot mostrar l'estat d'una variable o el nombre d'una iteració.

```python
def calcular_total(preus, descompte):
    total = 0
    for preu in preus:
        print(f"[DEBUG] preu={preu}, total abans={total}")
        total += preu
    print(f"[DEBUG] subtotal={total}, descompte={descompte}")
    return total * (1 - descompte / 100)


print(calcular_total([10, 20, 5], 10))
```

La informació permet veure en quin pas apareix un valor inesperat. Quan l'error està corregit, elimina o substitueix aquests missatges per una forma de registre adequada; no els deixes en l'eixida normal del programa.

Els `print()` són ràpids, però tenen limitacions: canvien l'eixida, poden inundar el terminal, no mostren fàcilment la pila de crides i poden alterar lleugerament el moment de l'error.

## Depurador de Visual Studio Code

El depurador permet pausar l'execució i observar el programa sense omplir-lo de missatges temporals.

<!-- IMATGE SUGGERIDA:
Captura de Visual Studio Code amb un breakpoint actiu en un programa Python i els panells Variables i Call Stack visibles.
Objectiu pedagògic: identificar què observa l'alumnat quan l'execució està pausada.
-->

### Preparar un exemple

Copia aquest codi en un fitxer anomenat `depura_bucle.py` i executa'l amb el depurador.

```python
def calcular_mitjana(valors):
    suma = 0
    for valor in valors:
        suma += valor
    return suma / len(valors)


notes = [4, 7, 8, 3]
mitjana = calcular_mitjana(notes)

if mitjana >= 5:
    resultat = "Aprovat"
else:
    resultat = "Suspés"

print(f"Mitjana: {mitjana:.2f}")
print(resultat)
```

1. Obri el fitxer en VS Code i assegura't que tens l'extensió de Python instal·lada.
2. Fes clic en el marge esquerre al costat de `suma += valor` per crear un **breakpoint**.
3. Inicia `Run and Debug` i selecciona l'execució del fitxer Python.
4. Quan el programa es pause, observa la variable `valor`, `suma` i la llista `valors` en **Variables**.
5. Prem **Continue** per arribar al següent breakpoint o continuar fins al final.

### Breakpoints

Un breakpoint és una marca que pausa el programa abans d'executar una línia. Col·loca'l abans de l'operació que sospites o dins del bucle que vols observar. També pots afegir un breakpoint condicional, per exemple quan `valor == 3`, per no aturar-te en totes les iteracions.

### Variables i Watch

El panell **Variables** mostra els valors disponibles en el punt pausat. En **Watch** pots afegir expressions com `suma / len(valors)` o `valor >= 5` i observar com canvien.

### Call Stack

La **Call Stack** mostra com s'ha arribat a la línia actual. En l'exemple, veuries que el programa ha cridat `calcular_mitjana` des de la línia principal. En programes senzills n'hi ha prou amb entendre que permet pujar i baixar entre les funcions que estan actives.

### Continue, Step Over, Step Into i Step Out

| Ordre | Funció |
| --- | --- |
| **Continue** | continua fins al pròxim breakpoint o fins al final |
| **Step Over** | executa la línia actual sense entrar dins d'una funció que crida |
| **Step Into** | entra dins de la funció cridada per seguir-la línia a línia |
| **Step Out** | acaba la funció actual i torna al punt des d'on s'havia cridat |

En el codi anterior, usa **Step Into** sobre `calcular_mitjana(notes)` per veure la pila i **Step Over** dins del bucle per seguir els canvis de `suma`.

## Depurar un bucle

```python
objectius = [10, 20, 30]
total = 0

for objectiu in objectius:
    total += objectiu
    print(f"Objectiu={objectiu}, total={total}")

print(f"Total final: {total}")
```

Col·loca un breakpoint dins del `for` i comprova:

- quin valor té `objectiu` en cada parada;
- si `total` parteix de zero;
- si el cos s'executa exactament tres vegades;
- quin valor té `total` després de l'última iteració.

Si el bucle no acaba, observa la variable que controla la condició i comprova si realment canvia.

## Depurar un condicional

```python
temperatura = 28

if temperatura < 10:
    missatge = "Fred"
elif temperatura <= 25:
    missatge = "Suau"
else:
    missatge = "Calor"

print(missatge)
```

Prova els valors 9, 10, 25, 26 i 28. Observa quina branca s'executa. Si la classificació és incorrecta, revisa l'ordre de les condicions i si els límits són inclusius o exclusius.

## Depurar una excepció

```python
def convertir_i_dividir(text):
    nombre = int(text)
    return 100 / nombre


entrada = input("Escriu un divisor: ")
try:
    resultat = convertir_i_dividir(entrada)
except ValueError:
    print("Cal escriure un enter no zero")
except ZeroDivisionError:
    print("El divisor no pot ser zero")
else:
    print(resultat)
```

Configura VS Code perquè es pause en excepcions si vols observar la línia exacta on es produeix el problema. Prova `2`, `0` i `abc`, i comprova que cada cas arriba al tractament previst.

## Programa integrador: controlar l'accés amb proves

```python
USUARI = "tecnic"
CONTRASENYA = "Python3!"
MAXIM_INTENTS = 3


def comprovar_acces(usuari, contrasenya):
    return usuari == USUARI and contrasenya == CONTRASENYA


intents = 0
autenticat = False

while intents < MAXIM_INTENTS and not autenticat:
    usuari = input("Usuari: ")
    contrasenya = input("Contrasenya: ")
    intents += 1
    autenticat = comprovar_acces(usuari, contrasenya)

    if autenticat:
        print("Accés autoritzat")
    else:
        print("Credencials incorrectes")

if not autenticat:
    print("S'han esgotat els intents")
```

Abans d'executar-lo, prepara aquests casos: credencials correctes al primer intent, correctes a l'últim, tres intents incorrectes i una contrasenya buida. Això cobreix selecció, repetició, comptador i finalització.

## Pràctica curta

1. **Dissenya.** Prepara una matriu amb casos normals, límit, invàlids i de format per a una reserva de places.
2. **Prediu.** Indica quin valor tindran l'acumulador i el comptador després de cada iteració d'un bucle donat.
3. **Depura.** Col·loca un breakpoint condicional que només s'active quan les places disponibles siguen zero.
4. **Automatitza.** Escriu almenys quatre `assert` per a una funció que calcule el total d'una reserva.

## Errors habituals

- Provar només el cas normal i oblidar les fronteres.
- Canviar diverses coses alhora durant la depuració i perdre la causa de la millora.
- Confondre un error lògic amb una excepció.
- Deixar `print("[DEBUG]...")` en el programa final.
- Posar un breakpoint després de la línia que ja ha produït el valor incorrecte.
- Corregir el cas que falla i no tornar a provar els casos anteriors.

!!! tip "Bona pràctica"
    Cada error corregit ha de deixar una prova reproduïble. Així podràs comprovar que la correcció continua funcionant després de modificar el programa.

## Resum

- Prova casos normals, límit, invàlids i valors frontera.
- Una matriu de proves relaciona entrades, resultats esperats, resultats reals i estat.
- Els `assert` permeten automatitzar comprovacions senzilles i conservar proves de regressió.
- La depuració segueix un procés: reproduir, localitzar, observar, formular, corregir i tornar a provar.
- `print()` ajuda a inspeccionar valors, però el debugger permet observar l'execució amb més control.
- Els breakpoints, les variables, el Watch i la Call Stack aporten informació diferent.
- Depurar és entendre la causa, no només silenciar el símptoma.

[Anterior: assercions](06-assercions.md) · [Índex de la UP3](index.md) · [Activitat 4. Proves i depuració](activitats/activitat-4-proves-i-depuracio.md) · [Següent: documentació i bones pràctiques](08-documentacio-bones-practiques.md)
