# 3. Sentències de salt

!!! info "Criteris d'avaluació treballats"
    - **RA3.c** — S'han reconegut les possibilitats de les sentències de salt.

Les sentències de salt modifiquen el recorregut normal d'un bucle o d'un bloc. Són útils en situacions concretes, però un programa sol ser més fàcil de llegir quan la condició principal del bucle ja explica com i quan acaba.

## `break`: abandonar el bucle

`break` interromp immediatament el bucle més intern que s'està executant. El programa continua amb la primera instrucció posterior al bucle.

```python
servidors = ["web-01", "web-02", "bd-01", "backup-01"]

for servidor in servidors:
    if servidor == "bd-01":
        print("Servidor de base de dades trobat")
        break
    print(f"Revisant {servidor}")
```

El recorregut s'atura en `bd-01`; `backup-01` ja no es visita.

### Cerca amb `break`

```python
usuaris = ["Aina", "Biel", "Carla"]
usuari_buscant = "Biel"
trobat = False

for usuari in usuaris:
    if usuari == usuari_buscant:
        trobat = True
        break

if trobat:
    print("Usuari trobat")
else:
    print("Usuari inexistent")
```

La variable `trobat` comunica el resultat després del bucle. En Python també existeixen funcions incorporades per a cerques, però aquest patró és útil per entendre el control de flux.

## `continue`: saltar a la iteració següent

`continue` abandona la iteració actual i torna a comprovar el bucle. No acaba tot el bucle.

```python
valors = [12, -4, 8, -1, 15]

for valor in valors:
    if valor < 0:
        continue
    print(f"Valor vàlid: {valor}")
```

Els valors negatius es descarten; el bucle continua amb el següent element.

### Comparació clara entre `break` i `continue`

```python
for numero in range(1, 6):
    if numero == 3:
        continue
    print(numero)
# Resultat: 1, 2, 4, 5
```

```python
for numero in range(1, 6):
    if numero == 3:
        break
    print(numero)
# Resultat: 1, 2
```

Amb `continue`, el 3 no es processa però 4 i 5 sí. Amb `break`, el bucle acaba quan arriba al 3.

### Validar i descartar entrades

```python
resum = 0

for _ in range(5):
    valor = int(input("Introdueix un enter positiu: "))
    if valor <= 0:
        print("Valor descartat")
        continue
    resum += valor

print(f"Suma dels valors positius: {resum}")
```

Si l'entrada també haguera de poder ser text incorrecte, combinaria aquest patró amb `try-except`, com s'explica en [Control d'excepcions](04-control-excepcions.md).

## `pass`: no fer res de manera explícita

`pass` és una instrucció buida. Serveix per deixar un bloc sintàcticament complet quan encara no vols implementar cap acció o quan intencionadament no cal fer res.

```python
opcio = input("Opció: ")

if opcio == "ajuda":
    pass  # La funcionalitat d'ajuda s'implementarà més avant.
else:
    print("Processant opció")
```

No confongues `pass` amb `continue`: `pass` no salta cap iteració ni canvia el flux; simplement executa una instrucció que no té efecte.

```python
for numero in range(3):
    pass
    print(numero)
# Resultat: 0, 1, 2
```

## `else` associat a un `for`

Un `else` després d'un `for` s'executa quan el recorregut acaba normalment, és a dir, quan no s'ha executat `break`.

```python
processos = ["editor", "navegador", "terminal"]
buscat = "servidor"

for proces in processos:
    if proces == buscat:
        print("Procés trobat")
        break
else:
    print("Procés no trobat")
```

El `else` del bucle no vol dir exactament “si la condició és falsa”; vol dir “si el bucle ha arribat al final sense `break`”. És especialment útil en cerques.

## `else` associat a un `while`

La mateixa regla s'aplica a `while`: el `else` s'executa si la condició deixa de complir-se sense que un `break` interrompa el bucle.

```python
intent = 1
maxims_intents = 3
contrasenya_correcta = False

while intent <= maxims_intents:
    print(f"Intent {intent}")
    # En un programa real, ací es llegiria la contrasenya.
    intent += 1
else:
    if not contrasenya_correcta:
        print("S'han esgotat els intents")
```

En aquest exemple el `while` acaba perquè `intent <= maxims_intents` esdevé fals. Si hi haguera un `break` en trobar la contrasenya correcta, el `else` no s'executaria.

### Exemple de cerca amb `while-else`

```python
codis = ["A-10", "B-20", "C-30"]
buscat = "B-20"
posicio = 0

while posicio < len(codis):
    if codis[posicio] == buscat:
        print(f"Trobat en la posició {posicio}")
        break
    posicio += 1
else:
    print("Codi no trobat")
```

## Quan abandonar abans d'hora?

`break` està justificat quan ja has obtingut la informació necessària o quan has detectat una situació que fa inútil continuar. Una cerca que troba el primer resultat és un cas clar.

```python
fitxers_pendents = ["informe.pdf", "registre.log", "config.ini"]
nom_solicitat = "registre.log"

for fitxer in fitxers_pendents:
    if fitxer == nom_solicitat:
        print(f"Carregant {fitxer}")
        break
```

Evita usar molts `break` perquè el lector haja de reconstruir diversos camins ocults. Si el bucle pot expressar directament la condició de continuació, sol ser preferible fer-ho.

```python
# Menys clar: eixida interna difícil de seguir.
while True:
    resposta = input("Escriu una ordre: ")
    if resposta == "fi":
        break
    print(f"Processant: {resposta}")
```

```python
# Equivalent i més explícit per a aquest cas.
resposta = input("Escriu una ordre: ")
while resposta != "fi":
    print(f"Processant: {resposta}")
    resposta = input("Escriu una ordre: ")
```

La primera versió també pot ser adequada si el cos té diversos punts d'eixida i la condició no es pot expressar netament. La claredat del programa és el criteri.

## Menú amb `break`

Un menú és un cas habitual en què `break` descriu l'opció d'eixida de manera directa.

```python
while True:
    print("1. Consultar")
    print("2. Eixir")
    opcio = input("Opció: ")

    if opcio == "1":
        print("Consultant dades")
    elif opcio == "2":
        print("Programa finalitzat")
        break
    else:
        print("Opció no vàlida")
```

Ací `break` no amaga un final inesperat: està associat explícitament a l'opció d'eixir.

## Errors habituals

- Confondre `continue` amb `break`: el primer salta una iteració; el segon acaba el bucle.
- Posar `continue` abans d'actualitzar un comptador d'un `while`, cosa que pot provocar un bucle infinit.
- Esperar que `else` del bucle s'execute després d'un `break`.
- Utilitzar `pass` pensant que continuarà amb la següent iteració.
- Posar un `break` en el bucle interior quan en realitat es vol acabar també el bucle exterior.
- Afegir molts punts d'eixida sense documentar què significa cadascun.

!!! tip "Bona pràctica"
    Usa `continue` per descartar una dada i `break` quan ja no té sentit continuar. Si cap dels dos fa la lectura més clara, expressa la regla en la condició del bucle.

## Resum

- `break` abandona el bucle més intern.
- `continue` passa a la iteració següent.
- `pass` no fa res i només completa un bloc.
- `for-else` i `while-else` executen `else` només si no hi ha hagut `break`.
- Les sentències de salt són eines puntuals, no substituts de qualsevol condició ben dissenyada.
