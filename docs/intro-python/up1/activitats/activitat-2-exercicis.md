---
hide:
  - navigation
---
# Activitat 2. Sèrie d’exercicis

## Objectiu

Practicar l’estructura de programes lineals, `print()`, les variables, els tipus bàsics, `input()` i les operacions elementals. La carpeta de treball serà:

```text
up1/
└── exercicis/
    ├── ex01.py
    ├── ex02.py
    ├── ...
    └── ex12.py
```

## Criteris d’avaluació treballats

| Criteri | Descripció | Pes sobre RA1 |
| --- | --- | ---: |
| **RA1.a** | Identificar l’estructura i l’ordre d’execució d’un programa. | 15 % |
| **RA1.d** | Identificar els tipus bàsics de variables. | 20 % |
| **RA1.e** | Utilitzar variables per guardar, modificar i mostrar informació. | 30 % |
|  | **Total de l’activitat** | **65 %** |

## Bloc A · Estructura i `print()`

### Exercici 1. Presentació

Crea `ex01.py` perquè mostre:

```text
Nom: Jordi
Cicle: DAW
Mòdul: Introducció a la programació en Python
```

No utilitzes encara `input()`.

### Exercici 2. Ordena el programa

Ordena aquestes instruccions perquè el programa mostre correctament el procés:

```python
print("Programa finalitzat")
print("Processant dades...")
print("Programa iniciat")
```

Explica breument per què l’ordre de les instruccions és important.

## Bloc B · Variables i tipus

### Exercici 3. Fitxa d’usuari

Crea variables per guardar `nom`, `edat`, `altura` i `estudiant`. Utilitza un tipus adequat per a cada dada i mostra tota la informació.

### Exercici 4. Quin tipus és?

Indica primer el tipus de cada variable i després comprova la resposta amb `type()`:

```python
processadors = 8
temperatura = 42.5
sistema = "Ubuntu"
servidor_actiu = True
```

### Exercici 5. Canvi de valor

Parteix de `saldo = 100`. Realitza successivament les operacions `+50`, `-20` i `+10`. Mostra el saldo després de cada modificació.

## Bloc C · Entrada de dades

### Exercici 6. Salutació personalitzada

Demana el nom i els cognoms i mostra un missatge semblant a:

```text
Hola, Jordi Cidoncha!
```

### Exercici 7. Edat

Demana `nom` i `edat` i mostra un missatge semblant a `Jordi té 38 anys.`. Comprova també quin tipus retorna `input()` abans de convertir-lo.

### Exercici 8. Any de naixement aproximat

Demana l’edat i calcula aproximadament l’any de naixement. Amb una edat de 20, el resultat esperat és semblant a `Any de naixement aproximat: 2006`.

## Bloc D · Integració

### Exercici 9. Compra de material

Demana producte, preu i quantitat. Amb `Teclat`, `25.50` i `3`, mostra `Total: 76.50 €`.

### Exercici 10. Conversor de minuts

Demana una quantitat de minuts i mostra quantes hores representa. Amb `135`, mostra `135 minuts equivalen a 2.25 hores.`

### Exercici 11. Configuració d’un ordinador

Demana el nom de l’equip, el processador, la RAM, la capacitat del disc i el sistema operatiu. Genera una fitxa semblant a:

```text
--- INFORMACIÓ DE L’EQUIP ---

Nom: PC-AULA-01
Processador: Ryzen 5
RAM: 16 GB
Disc: 512 GB
Sistema: Ubuntu
```

### Exercici 12. Ticket de compra

Demana producte, preu i quantitat i genera un ticket com aquest:

```text
--------- TICKET ---------

Producte: Monitor
Preu unitari: 149.90 €
Quantitat: 2

Total: 299.80 €

--------------------------
```

Aquest exercici integra estructura, variables, `str`, `int`, `float`, `input()`, `print()` i operacions.

## Requisits

- Cada exercici s’ha de poder executar sense modificar-lo manualment.
- Els noms de variables han de ser descriptius.
- Els resultats han de ser llegibles.
- Cal provar cada programa amb les dades de l’enunciat i almenys una dada diferent.
- No cal afegir encara `if`, bucles, llistes ni funcions.

## Lliurament

Entrega la carpeta `exercicis` amb els dotze fitxers Python i un document breu amb:

- una explicació de l’ordre d’execució de l’exercici 2;
- els tipus identificats en l’exercici 4;
- una prova d’execució de l’exercici 12;
- una incidència trobada i la correcció aplicada.

En la comprovació individual, el professorat podrà obrir un exercici i demanar un canvi breu, com ara canviar `preu` per `preu_unitari` o mostrar el preu amb IVA. L’objectiu és comprovar que entens el codi que has lliurat.

[Anterior: preparació de l’entorn](activitat-1-preparacio-entorn.md) · [Autoavaluació](autoavaluacio.md) · [Índex](../index.md)
