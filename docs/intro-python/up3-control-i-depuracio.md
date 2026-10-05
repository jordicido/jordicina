---
hide:
  - navigation
---
# UP3. Control, excepcions i depuració

!!! info "Criteris d'avaluació treballats"
    - **RA3.a–RA3.i** — La unitat presenta i connecta tots els criteris d'avaluació del RA3.

## Presentació

Un programa útil no sols ha de produir una eixida quan tot va bé. També ha de saber prendre decisions, repetir tasques, reaccionar davant d’entrades incorrectes i oferir prou informació per trobar els errors. En aquesta unitat aprendràs a controlar el flux d’execució d'un programa Python i a revisar-lo de manera sistemàtica.

Consulta l’[índex de la UP3](up3/index.md) per seguir l’ordre recomanat, revisar els criteris d’avaluació i accedir als vuit blocs de teoria.

El resultat serà codi més segur, llegible i fàcil de mantenir. Els exemples parteixen de programes senzills i avancen fins a aplicacions de consola que combinen selecció, repetició, validació, excepcions, assercions, proves i documentació.

## Dades de la unitat

| Element | Referència |
| --- | --- |
| Duració de referència | **20 hores** |
| Resultat d'aprenentatge | **RA3** |
| Producte final | Programa amb estructures de control, tractament d'errors, proves i documentació |

## Què aprendràs

- Escriure condicions clares amb `if`, `elif`, `else` i `match`.
- Construir bucles `while` i `for` amb comptadors, acumuladors i sentinelles.
- Utilitzar `break`, `continue` i `pass` amb criteri.
- Detectar i tractar errors amb `try`, `except`, `else`, `finally` i `raise`.
- Crear excepcions pròpies per representar problemes del domini del programa.
- Utilitzar `assert` per comprovar invariants durant el desenvolupament.
- Dissenyar casos de prova i depurar programes amb `print()` i VS Code.
- Comentar i documentar el codi perquè altres persones el puguen entendre.

## Resultat d'aprenentatge i criteris d'avaluació

**RA3.** Treballar estructures de control, tractament d'errors, depuració, documentació, excepcions i assercions en Python.

| Codi | Criteri d'avaluació |
| --- | --- |
| **RA3.a** | S'ha escrit i provat codi que faça ús d'estructures de selecció. |
| **RA3.b** | S'han utilitzat estructures de repetició. |
| **RA3.c** | S'han reconegut les possibilitats de les sentències de salt. |
| **RA3.d** | S'ha escrit codi utilitzant control d'excepcions. |
| **RA3.e** | S'han creat programes executables utilitzant diferents estructures de control. |
| **RA3.f** | S'han provat i depurat els programes. |
| **RA3.g** | S'ha comentat i documentat el codi. |
| **RA3.h** | S'han creat excepcions. |
| **RA3.i** | S'han utilitzat assercions per a la detecció i correcció d'errors durant la fase de desenvolupament. |

## Blocs de la unitat

1. [Estructures de selecció](up3/01-estructures-seleccio.md): decisions i alternatives.
2. [Estructures de repetició](up3/02-estructures-repeticio.md): `while`, `for` i patrons d'iteració.
3. [Sentències de salt](up3/03-sentencies-salt.md): `break`, `continue`, `pass` i `else` en bucles.
4. [Control d'excepcions](up3/04-control-excepcions.md): errors en temps d'execució i recuperació.
5. [Excepcions pròpies](up3/05-excepcions-propies.md): errors expressius del domini.
6. [Assercions](up3/06-assercions.md): comprovacions internes durant el desenvolupament.
7. [Proves i depuració](up3/07-proves-depuracio.md): casos de prova i debugger de VS Code.
8. [Documentació i bones pràctiques](up3/08-documentacio-bones-practiques.md): codi llegible i mantenible.

## Criteris i fitxers

| Fitxer | Criteris principals |
| --- | --- |
| `01-estructures-seleccio.md` | RA3.a |
| `02-estructures-repeticio.md` | RA3.b |
| `03-sentencies-salt.md` | RA3.c |
| `04-control-excepcions.md` | RA3.d |
| `05-excepcions-propies.md` | RA3.h |
| `06-assercions.md` | RA3.i |
| `07-proves-depuracio.md` | RA3.e, RA3.f |
| `08-documentacio-bones-practiques.md` | RA3.e, RA3.g |

## Errors habituals

- Estudiar les estructures de control per separat sense provar com es combinen.
- Pensar que un programa que no mostra excepcions ja és correcte.
- Fer servir `break`, `except` o `assert` sense poder explicar què controlen.
- No tornar a provar un programa després de modificar-lo.
- Deixar la documentació i els missatges de depuració per al final.

!!! tip "Ordre recomanat"
    Estudia els blocs en ordre. Les excepcions aprofiten els bucles de validació, i la depuració i la documentació integren totes les estructures anteriors.

[Tornar a l'inici d'Introducció a la programació en Python](index.md) · [Consultar l'avaluació](avaluacio.md)
