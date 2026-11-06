---
hide:
  - navigation
---
# Activitat UP3.2 – Bucles `while` en Python

**Mòdul:** Introducció a la programació en Python<br>
**Unitat de programació:** UP3<br>
**Modalitat:** Treball individual

## Objectius

En aquesta activitat practicaràs els bucles `while` per a repetir instruccions mentre es complisca una condició. Aprendràs a utilitzar comptadors i acumuladors i, en els últims exercicis, a combinar les repeticions amb condicionals `if`, `elif` i `else`.

## Instruccions generals

- Resol els cinc exercicis en Python.
- Utilitza obligatòriament un bucle `while` en cadascun.
- No utilitzes bucles `for`, llistes ni funcions definides per tu.
- En els exercicis **1, 2 i 3**, resol el problema **sense utilitzar `if`, `elif` ni `else`**.
- Prova cada programa amb diferents dades per a comprovar que funciona correctament.
- El codi ha de ser propi: no està permés utilitzar ferramentes d'IA per a generar-lo. Sí que pots consultar explicacions sobre conceptes.

## Exercici 1. Taula de multiplicar

Crea un programa que demane a l'usuari un nombre enter i mostre la seua taula de multiplicar de l'1 al 10.

Has d'utilitzar un bucle `while` per a generar les deu multiplicacions.

**Exemple d'execució:**

```text
Introduïx un nombre: 7

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

## Exercici 2. Calculadora d'estalvis

Crea un programa que demane a l'usuari les dades següents:

- La quantitat inicial de diners que té estalviats.
- La quantitat de diners que estalvia cada mes.
- La quantitat total que vol aconseguir.

Utilitzant un bucle `while`, calcula quants mesos necessitarà per a arribar a l'objectiu o superar-lo.

**Exemple d'execució:**

```text
Estalvis inicials: 100
Estalvi mensual: 50
Objectiu: 350

Necessitaràs 5 mesos per a aconseguir l'objectiu.
```

**Nota:** Pots suposar que l'estalvi mensual és positiu i que l'objectiu és superior als estalvis inicials. No cal validar aquestes dades.

## Exercici 3. Suma de nombres

Crea un programa que demane nombres enters a l'usuari repetidament.

El programa ha d'anar sumant tots els nombres introduïts fins que l'usuari escriga **0**. Quan introduïsca el 0, deixarà de demanar nombres i mostrarà la suma total.

**Exemple d'execució:**

```text
Introduïx un nombre (0 per acabar): 5
Introduïx un nombre (0 per acabar): 10
Introduïx un nombre (0 per acabar): 3
Introduïx un nombre (0 per acabar): 0

La suma total és: 18
```

## Exercici 4. Control d'accés amb contrasenya

Crea un programa que simule un sistema d'accés amb contrasenya.

La contrasenya correcta serà **`python123`**, definida directament en el programa. L'usuari tindrà un màxim de **3 intents** per a introduir-la correctament.

- Si introduïx la contrasenya correcta, mostra `Accés concedit.` i acaba el programa.
- Si introduïx una contrasenya incorrecta, mostra `Contrasenya incorrecta.` i permet un altre intent, sempre que encara en queden.
- Si esgoten els tres intents sense encertar, mostra `Accés bloquejat.` i acaba el programa.

Per a resoldre'l, combina un bucle `while` amb condicionals i un comptador d'intents.

**Exemple d'execució:**

```text
Introduïx la contrasenya: hola
Contrasenya incorrecta.
Introduïx la contrasenya: 1234
Contrasenya incorrecta.
Introduïx la contrasenya: python123
Accés concedit.
```

## Exercici 5. Endevina el nombre

Crea un programa que permeta a l'usuari endevinar un nombre secret.

El nombre secret serà **7** i estarà definit directament en el programa. El programa ha de continuar demanant nombres fins que l'usuari l'endevine.

- Si el nombre introduït és **major** que el secret, mostra `El nombre secret és més menut.`
- Si el nombre introduït és **menor** que el secret, mostra `El nombre secret és més gran.`
- Si l'usuari l'endevina, mostra `Correcte! Has endevinat el nombre.` i finalitza el programa.

Per a resoldre'l, combina un bucle `while` amb condicionals `if`, `elif` i `else`.

**Exemple d'execució:**

```text
Endevina el nombre: 4
El nombre secret és més gran.
Endevina el nombre: 9
El nombre secret és més menut.
Endevina el nombre: 7
Correcte! Has endevinat el nombre.
```

## Comprovació final

Abans de lliurar l'activitat, comprova que:

- Els cinc programes utilitzen `while` i acaben quan correspon, sense entrar en un bucle infinit.
- Els tres primers exercicis no contenen condicionals `if`, `elif` ni `else`.
- El control d'accés no permet més de tres intents i no bloqueja l'accés si la contrasenya és correcta en l'últim intent.
- El joc d'endevinar el nombre dona pistes correctes i acaba en encertar.

## Lliurament

Guarda cada exercici en un arxiu Python independent, amb els noms `exercici1.py`, `exercici2.py`, `exercici3.py`, `exercici4.py` i `exercici5.py`. Lliura els cinc arxius segons les indicacions del professorat.

[Anterior: activitat de condicions](activitat-1-condicions.md) · [Índex de la UP3](../index.md) · [Teoria: bucles](../02-estructures-repeticio.md)
