---
hide:
  - navigation
---
# Repàs 1. Estructures condicionals

**Mòdul:** Introducció a la programació en Python  
**Unitat:** UP3. Estructures de control, excepcions i depuració en Python  
**Modalitat:** Individual  
**Tipus:** Exercicis de repàs

## Objectiu

Practicar l'ús de les estructures condicionals `if`, `if/else`, `if/elif` i `if/elif/else` amb problemes senzills i de dificultat progressiva.

## Criteris d'avaluació treballats

- **RA3.a:** Escriure i provar codi que faça ús d'estructures de selecció.
- **RA3.e:** Crear programes executables utilitzant estructures de control.
- **RA3.f:** Provar i depurar els programes.
- **RA3.g:** Comentar i documentar el codi.

## Instruccions generals

- Crea un fitxer `.py` independent per a cadascun dels 10 exercicis.
- Demana les dades amb `input()` i utilitza `print()` per a mostrar els missatges que corresponguen.
- Converteix les entrades a `int` o `float` quan siga necessari.
- Respecta l'estructura condicional indicada en cada bloc.
- Pots suposar que totes les dades introduïdes són vàlides, dins dels intervals especificats, i que els textos s'introduïxen exactament com es demana.
- No utilitzes bucles, llistes, funcions, excepcions ni `match-case`.
- Prova cadascun dels programes amb casos que complisquen la condició, que no la complisquen i, quan corresponga, amb valors límit.
- Escriu un comentari inicial amb el nom o l'objectiu de cada exercici i utilitza noms de variables clars.
- **El codi ha de ser propi:** no està permés utilitzar ferramentes d'IA per a generar codi. Sí que es poden consultar explicacions dels conceptes.

## Bloc 1. Condicionals simples (`if`)

### Exercici 1. Avís de temperatura

Crea un programa que demane una temperatura en graus Celsius.

- Si la temperatura és inferior a **0 graus**, ha de mostrar `Atenció: temperatura sota zero`.
- En qualsevol altre cas, el programa no ha de mostrar cap missatge.

**Utilitza únicament `if`, sense `else`.**

**Comprova'l amb:** `-3`, `0` i `12`.

### Exercici 2. Producte esgotat

Una botiga necessita comprovar si un producte està esgotat. Crea un programa que demane la quantitat d'unitats disponibles.

- Si la quantitat és **0**, mostra `Producte esgotat`.
- Si hi ha unitats disponibles, no ha de mostrar cap missatge.

**Utilitza únicament `if`, sense `else`.**

**Comprova'l amb:** `0` i `8`.

## Bloc 2. Condicionals dobles (`if/else`)

### Exercici 3. Majoria d'edat

Crea un programa que demane l'edat d'una persona i indique si és major o menor d'edat.

- Si té **18 anys o més**, mostra `Eres major d'edat`.
- En cas contrari, mostra `Eres menor d'edat`.

**Utilitza `if/else`.**

**Comprova'l amb:** `17`, `18` i `25`.

### Exercici 4. Comprovació de contrasenya

Crea un programa que demane una contrasenya a l'usuari. La contrasenya correcta és **`smx2026`**.

- Si la contrasenya introduïda coincidix amb la correcta, mostra `Accés permés`.
- En cas contrari, mostra `Accés denegat`.

**Utilitza `if/else`.** La comparació ha de distingir majúscules i minúscules.

**Comprova'l amb:** `smx2026`, `SMX2026` i `prova`.

### Exercici 5. Número parell o imparell

Crea un programa que demane un número enter.

- Si el número és divisible entre 2, mostra `El número és parell`.
- En cas contrari, mostra `El número és imparell`.

**Utilitza `if/else`.**

**Pista:** L'operador `%` retorna el residu d'una divisió.

**Comprova'l amb:** `0`, `7` i `12`.

## Bloc 3. Condicionals múltiples sense cas final (`if/elif`)

### Exercici 6. Semàfor

Crea un programa que demane el color d'un semàfor.

- Si el color és `verd`, mostra `Pots passar`.
- Si el color és `roig`, mostra `Has de parar`.
- Per a qualsevol altre color, no ha de mostrar cap missatge.

**Utilitza `if/elif`, sense `else`.** Considera que els colors s'introduïxen en minúscules.

**Comprova'l amb:** `verd`, `roig` i `groc`.

### Exercici 7. Identificació d'usuaris

Crea un programa que demane un nom d'usuari.

- Si el nom és `admin`, mostra `Benvingut, administrador`.
- Si el nom és `convidat`, mostra `Benvingut, convidat`.
- Per a qualsevol altre nom, no ha de mostrar cap missatge.

**Utilitza `if/elif`, sense `else`.**

**Comprova'l amb:** `admin`, `convidat` i `anna`.

## Bloc 4. Condicionals múltiples (`if/elif/else`)

### Exercici 8. Classificació de notes

Crea un programa que demane la nota d'un examen, representada per un **número enter entre 0 i 10**. Mostra la qualificació corresponent:

| Nota | Resultat |
| --- | --- |
| 0–4 | `Insuficient` |
| 5–6 | `Suficient` |
| 7–8 | `Notable` |
| 9–10 | `Excel·lent` |

**Utilitza una estructura `if/elif/else`.** No cal validar notes fora de l'interval 0–10.

**Comprova'l amb:** `4`, `5`, `6`, `7`, `8`, `9` i `10`.

### Exercici 9. Despeses d'enviament

Una botiga en línia aplica diferents tarifes d'enviament segons l'import de la compra. Crea un programa que demane el preu total de la compra i mostre el cost de l'enviament:

- Si la compra és inferior a **30 €**, l'enviament costa **5 €**.
- Si la compra és de **30 € o més**, però inferior a **60 €**, l'enviament costa **3 €**.
- Si la compra és de **60 € o més**, l'enviament és **gratuït (0 €)**.

**Utilitza `if/elif/else`.** Mostra només el cost de l'enviament; no és necessari calcular l'import final de la compra.

**Comprova'l amb:** `29.99`, `30`, `59.99` i `60`.

### Exercici 10. Estat de la bateria

Crea un programa que demane el percentatge de bateria d'un dispositiu (**un número entre 0 i 100**) i mostre l'estat corresponent:

| Percentatge | Missatge |
| --- | --- |
| Menys del 20% | `Bateria crítica` |
| Del 20% a menys del 50% | `Bateria baixa` |
| Del 50% a menys del 80% | `Bateria normal` |
| 80% o més | `Bateria alta` |

**Utilitza `if/elif/else`.**

**Exemples:** `10` → `Bateria crítica`; `35` → `Bateria baixa`; `65` → `Bateria normal`; `95` → `Bateria alta`.

**Comprova també els límits:** `19`, `20`, `49`, `50`, `79` i `80`.

## Lliurament

Guarda els deu programes en una carpeta `repas-1-condicionals`, amb aquests noms:

```text
repas-1-condicionals/
├── exercici01.py
├── exercici02.py
├── exercici03.py
├── exercici04.py
├── exercici05.py
├── exercici06.py
├── exercici07.py
├── exercici08.py
├── exercici09.py
└── exercici10.py
```

Lliura els 10 fitxers `.py` segons les indicacions del professorat en Aules. No és necessari presentar un informe.

## Comprovació final

Abans de lliurar, revisa que:

- Hi ha 10 fitxers `.py` independents i tots s'executen sense errors de sintaxi.
- Cada exercici utilitza l'estructura condicional indicada.
- Els blocs `if/elif` dels exercicis 6 i 7 no tenen `else`.
- Els exercicis 8, 9 i 10 funcionen correctament amb els valors límit.
- Els programes només mostren els missatges indicats en l'enunciat per a cada cas.
- Pots explicar per què es complix o no cada condició.

[Índex de la UP3](../index.md) · [Teoria: estructures de selecció](../01-estructures-seleccio.md) · [Activitat 1. Condicions i decisions](activitat-1-condicions.md)
