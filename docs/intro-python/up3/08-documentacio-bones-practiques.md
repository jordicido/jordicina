---
hide:
  - navigation
---
# 8. Documentació i bones pràctiques

!!! info "Criteris d'avaluació treballats"
    - **RA3.e** — S'han creat programes executables utilitzant diferents estructures de control.
    - **RA3.g** — S'ha comentat i documentat el codi.

El codi es llig moltes més vegades de les que s'escriu. La llegibilitat i la mantenibilitat importen perquè altres persones —o tu mateix d'ací a unes setmanes— han d'entendre les decisions, modificar-les i comprovar que continuen sent correctes.

## Comentaris amb `#`

Un comentari comença amb `#` i Python no l'executa.

```python
# El límit superior no s'inclou en range.
for numero in range(1, 6):
    print(numero)
```

Comenta decisions, regles no evidents o limitacions. No repetisques literalment el que ja diu el codi.

```python
# Poc útil: explica exactament la instrucció següent.
total += preu  # Suma preu a total

# Útil: explica una regla del negoci.
total += preu  # Els preus ja inclouen l'impost aplicable.
```

Un comentari ha d'estar actualitzat. Si el codi canvia i el comentari no, pot conduir a errors; revisa'l o elimina'l.

## Noms significatius

Els noms han d'explicar què representa una dada o què fa una operació.

```python
# Poc clar
x = 3
y = 10
z = x * y

# Més clar
quantitat = 3
preu_unitari = 10
cost_total = quantitat * preu_unitari
```

Evita abreviatures que no siguen conegudes i noms massa genèrics com `dades`, `valor` o `resultat` quan el context no els fa suficients.

### `snake_case`

Per a variables i funcions, usa noms en minúscules separats per guions baixos.

```python
nom_client = "Aina"
preu_final = 42.50


def calcular_preu_final(preu, percentatge):
    return preu * (1 - percentatge / 100)
```

Per a constants, usa majúscules.

```python
MAXIM_INTENTS = 3
EDAT_MINIMA = 16
```

Una constant és un valor que el programa tracta com a fix. Python no impedeix modificar-la, però el nom comunica la intenció.

## Números màgics

Un número màgic apareix enmig de la lògica sense explicar què significa.

```python
# Difícil d'entendre
if edat >= 16:
    print("Pot inscriure's")
```

```python
# La regla té un nom i es pot canviar en un sol lloc.
EDAT_MINIMA_INSCRIPCIO = 16

if edat >= EDAT_MINIMA_INSCRIPCIO:
    print("Pot inscriure's")
```

No cal convertir en constant qualsevol `0` o `1` evident d'un comptador, però sí els valors que representen una regla o configuració.

## Espais, format i indentació

La indentació defineix els blocs de Python. Mantín quatre espais per nivell i no barreges tabuladors i espais.

```python
if usuari_actiu:
    print("Compte actiu")
    registrar_acces()
else:
    print("Compte inactiu")
```

Els espais al voltant dels operadors faciliten la lectura:

```python
total = preu * quantitat
```

Divideix expressions massa llargues en variables o passos amb noms clars.

```python
# Massa dens
pot_accedir = actiu and edat >= 18 and (rol == "admin" or rol == "tecnic")

# Més llegible
es_major = edat >= 18
te_rol_permés = rol == "admin" or rol == "tecnic"
pot_accedir = actiu and es_major and te_rol_permés
```

## Condicions clares

No compares un booleà amb `True` o `False` si no cal.

```python
# Innecessari
if usuari_actiu == True:
    print("Actiu")

# Clar
if usuari_actiu:
    print("Actiu")

# Per comprovar que és fals
if not usuari_actiu:
    print("Inactiu")
```

Quan una condició és massa llarga, dona nom a les parts. També evita repetir la mateixa expressió en diversos blocs.

## Evitar massa niament

Les guardes poden acabar prompte amb un cas invàlid i deixar el camí principal al nivell més superficial.

```python
def mostrar_perfil(usuari):
    if usuari is None:
        print("Usuari inexistent")
        return
    if not usuari["actiu"]:
        print("Compte inactiu")
        return

    print(f"Perfil de {usuari['nom']}")
```

Aquest estil evita un `if` dins d'un altre dins d'un altre. Usa `return` només quan la funció ja té una resposta clara; les sentències de salt també han de mantindre el flux comprensible.

## Docstrings

Una docstring és un text situat al principi d'una funció, classe o mòdul. Documenta què fa una peça reutilitzable i es pot consultar amb eines de Python.

```python
def calcular_mitjana(valors):
    """Retorna la mitjana dels valors rebuts.

    Requereix una seqüència no buida de nombres.
    """
    return sum(valors) / len(valors)
```

Una docstring forma part de la documentació de l'objecte; un comentari explica una decisió dins del codi.

```python
def aplicar_descompte(preu, percentatge):
    """Calcula el preu després d'aplicar un percentatge de descompte."""
    # El percentatge es transforma a proporció abans de restar-lo.
    return preu * (1 - percentatge / 100)
```

La docstring explica la funció des de fora. El comentari explica una línia que pot no ser immediata des de dins.

### Documentar el contracte

Una docstring útil pot indicar què rep la funció, què retorna i quines excepcions pot llançar. No cal repetir cada instrucció.

```python
def reservar(disponibles, quantitat):
    """Reserva places i retorna les que queden.

    Requereix una quantitat positiva. Llança ValueError si la
    quantitat no és vàlida i PlacesInsuficientsError si supera
    les places disponibles.
    """
    if quantitat <= 0:
        raise ValueError("La quantitat ha de ser positiva")
    if quantitat > disponibles:
        raise PlacesInsuficientsError("No hi ha prou places")
    return disponibles - quantitat
```

El contracte permet utilitzar la funció sense haver de llegir tota la implementació.

## Introducció breu a PEP 8

PEP 8 és la guia de convencions d'estil més coneguda per a Python. No és necessari memoritzar-la sencera, però les seues idees principals són útils:

- quatre espais per a la indentació;
- noms `snake_case` per a variables i funcions;
- constants en majúscules;
- línies i expressions de longitud raonable;
- línies en blanc per separar parts relacionades però diferents;
- imports i noms coherents.

L'objectiu de l'estil no és decorar el codi: és reduir el temps necessari per llegir-lo i detectar-hi problemes.

## Codi autodocumentat

Un codi autodocumentat usa estructures i noms que expliquen la intenció sense comentaris innecessaris.

```python
# Poc expressiu
if n > 0 and n % 2 == 0:
    print("sí")

# Més expressiu
es_enter_positiu_parell = nombre > 0 and nombre % 2 == 0
if es_enter_positiu_parell:
    print("El nombre és positiu i parell")
```

Això no vol dir que no calguen comentaris. Les decisions de negoci, les excepcions a una regla i les limitacions externes poden necessitar una explicació.

## Programa integrador documentat

El programa següent combina selecció, repetició, validació d'entrada, excepcions i noms significatius.

```python
MAXIM_INTENTS = 3
USUARI_VALID = "tecnic"
CONTRASENYA_VALIDA = "Python3!"


def credencials_correctes(usuari, contrasenya):
    """Indica si les credencials coincideixen amb les de la demostració."""
    return usuari == USUARI_VALID and contrasenya == CONTRASENYA_VALIDA


def iniciar_sessio():
    """Permet un nombre limitat d'intents d'autenticació."""
    intents = 0

    while intents < MAXIM_INTENTS:
        usuari = input("Usuari: ")
        contrasenya = input("Contrasenya: ")
        intents += 1

        if credencials_correctes(usuari, contrasenya):
            print("Accés autoritzat")
            return True

        intents_restants = MAXIM_INTENTS - intents
        if intents_restants:
            print(f"Credencials incorrectes. Queden {intents_restants} intents.")

    print("Accés bloquejat temporalment")
    return False


iniciar_sessio()
```

La docstring descriu el contracte general de cada funció, les constants eviten números màgics i cada nom explica la seua funció. En un sistema real caldria aplicar mesures de seguretat addicionals i no guardar les credencials en el codi.

## Revisió estructurada del codi

Revisa el programa en passades separades. Intentar comprovar-ho tot alhora facilita que alguns problemes passen desapercebuts.

1. **Comportament:** resol tots els casos de la matriu de proves?
2. **Control de flux:** cada condició, bucle i eixida és necessària i comprensible?
3. **Errors:** les excepcions distingixen format incorrecte i regles del domini?
4. **Llegibilitat:** els noms expliquen les dades i les operacions?
5. **Documentació:** les docstrings i els comentaris aporten informació que el codi no mostra?
6. **Neteja:** s'han eliminat proves manuals, missatges temporals i codi duplicat?

## Revisió abans de donar el programa per acabat

### Checklist final

- [ ] El programa resol el problema demanat.
- [ ] Les entrades incorrectes estan controlades.
- [ ] Els condicionals cobreixen tots els casos.
- [ ] Els bucles acaben correctament.
- [ ] No hi ha codi duplicat innecessari.
- [ ] Els noms són descriptius.
- [ ] El codi està correctament indentat.
- [ ] Els comentaris aporten informació útil.
- [ ] Les funcions reutilitzables tenen docstrings quan cal.
- [ ] S'han provat casos normals.
- [ ] S'han provat casos límit.
- [ ] S'han provat casos incorrectes.
- [ ] S'han eliminat els missatges de depuració temporals.

## Pràctica curta

1. **Detecta.** Subratlla els comentaris que només repetixen la instrucció següent i reescriu o elimina'ls.
2. **Renomena.** Substitueix noms com `x`, `dades` i `res` per noms relacionats amb una reserva.
3. **Simplifica.** Reescriu una condició amb tres nivells de niament utilitzant guardes.
4. **Documenta.** Escriu la docstring d'una funció indicant entrada, retorn i excepcions possibles.
5. **Revisa.** Aplica la checklist al projecte integrador i registra almenys tres millores realitzades.

## Errors habituals

- Comentar cada línia i ocultar la lògica important entre text redundant.
- Mantindre comentaris obsolets després de canviar el codi.
- Usar una variable `x` o `dades` quan representa una informació concreta.
- Escriure una funció enorme amb molts nivells de niament.
- Repetir un valor de configuració en diversos llocs.
- Confondre una docstring amb un comentari intern.
- Afegir una línia de depuració i oblidar eliminar-la abans de publicar.

!!! tip "Bona pràctica"
    Primer escriu una solució correcta i clara; després millora els noms, separa responsabilitats i documenta les decisions que no siguen evidents.

## Resum

- Els comentaris expliquen decisions i no han de repetir el codi.
- Els noms significatius, les constants i el format fan el programa més llegible.
- Les condicions clares i el poc niament faciliten la depuració.
- Les docstrings documenten funcions i formen part de la seua interfície.
- Una checklist final combina qualitat, validació, proves i neteja del codi.

[Anterior: proves i depuració](07-proves-depuracio.md) · [Índex de la UP3](index.md) · [Projecte integrador](activitats/projecte-integrador.md) · [Autoavaluació](activitats/autoavaluacio.md)
