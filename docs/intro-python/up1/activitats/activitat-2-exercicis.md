---
hide:
  - navigation
---
# Activitat 2. Sèrie d’exercicis

## Objectiu

Practicar l’estructura de projectes i programes lineals, l’ús de VS Code i l’intèrpret, `print()`, les variables, els tipus bàsics, `input()` i les operacions elementals. La carpeta de treball serà:

```text
up1/
└── exercicis/
    ├── ex01.py
    ├── ex02.py
    ├── ...
    ├── ex12.py
    ├── ex13.py
    ├── ex14.py
    ├── ex15.py
    └── ex16.py
```

Abans de començar els exercicis de Python, completa el **Bloc 0**. Aquest bloc reforça la preparació del projecte i la selecció de l’intèrpret, que són necessàries per poder executar i explicar la resta de programes.

## Criteris d’avaluació treballats

| Criteri | Descripció | Evidència en la UP1 |
| --- | --- | ---: |
| **RA1.b** | Crear i mantindre un projecte de desenvolupament amb una estructura ordenada. | Activitat 1 i exercici 0 |
| **RA1.c** | Utilitzar VS Code i seleccionar i comprovar l’intèrpret adequat. | Activitat 1 i exercici 0 |
| **RA1.a** | Identificar els blocs que componen l’estructura d’un programa. | Activitat 2 · 10 % |
| **RA1.d** | Identificar els tipus de variables i la utilitat específica de cadascun. | Activitat 2 · 10 % |
| **RA1.e** | Modificar el codi per crear i utilitzar variables. | Activitat 2 · 15 % |
| **RA1.f** | Crear i utilitzar constants i literals. | Activitat 2 · 10 % |
| **RA1.g** | Classificar, reconéixer i utilitzar els operadors en expressions. | Activitat 2 · 10 % |
| **RA1.h** | Comprovar conversions de tipus explícites i implícites. | Activitat 2 · 5 % |
| **RA1.i** | Introduir comentaris en el codi. | Activitat 2 · 5 % |
|  | **Criteris avaluats directament en aquesta activitat** | **65 %** |

RA1.b i RA1.c es reforcen ací, però la seua evidència avaluable principal continua sent l’Activitat 1. Els exercicis 13–16 completen la cobertura dels CA de la RA1 que faltaven en la sèrie inicial.

## Bloc 0 · Projecte i entorn

### Exercici 0. Prepara i comprova el projecte

Abans d’escriure els setze programes:

1. Crea la carpeta `python/up1/exercicis`.
2. Obri la carpeta `python/up1` amb Visual Studio Code, no només el fitxer solt.
3. Selecciona l’intèrpret de Python que utilitzaràs en la UP1.
4. Comprova des de la terminal integrada la versió amb `python --version` o `python3 --version`.
5. Comprova que dins de `up1` tens la carpeta `exercicis` i que hi guardaràs els setze fitxers Python.
6. Executa un programa de la sèrie des de VS Code i des de la terminal. El resultat ha de ser equivalent.

En el document breu del lliurament, indica quin intèrpret has seleccionat i com has comprovat que VS Code i la terminal utilitzen la instal·lació esperada. No inclogues rutes personals innecessàries ni dades sensibles.

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

## Bloc E · Constants, expressions, conversions i comentaris

### Exercici 13. Constants i literals

Crea `ex13.py` per calcular el preu final d’un producte amb IVA. Defineix, seguint la convenció de Python, una constant escrita en majúscules:

```python
IVA = 0.21
```

Demana el preu sense IVA i mostra el preu final. En un comentari del programa, identifica almenys quatre literals utilitzats i explica la diferència entre una constant per convenció i una variable que pot canviar.

### Exercici 14. Operadors i expressions

Crea `ex14.py` amb dues quantitats i mostra el resultat de les expressions següents:

- suma, resta, producte i divisió;
- residu amb `%`;
- comparació amb `>`, `<` o `==`;
- una expressió booleana amb `and`, `or` o `not`.

Per a cada resultat, indica quin operador o combinació d’operadors has utilitzat. No cal introduir encara cap estructura `if`: mostra directament els resultats amb `print()`.

### Exercici 15. Conversió explícita i implícita

Crea `ex15.py` i comprova aquestes situacions:

1. Llig un nombre amb `input()` i converteix-lo explícitament amb `int()` o `float()`.
2. Converteix un nombre a text amb `str()` per formar un missatge.
3. Combina un enter i un decimal en una expressió i comprova amb `type()` quin tipus té el resultat. Aquesta és una conversió implícita habitual de Python.
4. Mostra què passa quan intentes sumar text i un nombre sense convertir-los, i documenta l’error sense deixar el programa final trencat.

Explica en el lliurament quina conversió has escrit tu i quina ha fet Python automàticament.

### Exercici 16. Comentaris que documenten el codi

Revisa `ex12.py` i afegeix:

- un comentari inicial que explique el propòsit del programa;
- un comentari al costat d’una conversió o operació que puga generar dubtes;
- un comentari de bloc que separe les dades d’entrada del càlcul i de l’eixida.

Els comentaris han d’explicar decisions o parts del programa. No repetisques simplement el que ja és evident en el codi i no utilitzes comentaris per amagar instruccions que haurien d’estar actives.

## Requisits

- Cada exercici s’ha de poder executar sense modificar-lo manualment.
- Els noms de variables han de ser descriptius.
- Els resultats han de ser llegibles.
- Cal provar cada programa amb les dades de l’enunciat i almenys una dada diferent.
- No cal afegir encara `if`, bucles, llistes ni funcions.

## Lliurament

Entrega la carpeta `up1` amb els setze fitxers Python i un document breu amb:

- la versió de Python i l’intèrpret seleccionat, relacionats amb l’exercici 0;
- l’estructura del projecte i una evidència d’execució des de VS Code i des de la terminal;
- una explicació de l’ordre d’execució de l’exercici 2;
- els tipus identificats en l’exercici 4;
- una prova d’execució de l’exercici 12;
- una explicació de les constants i literals de l’exercici 13;
- una classificació dels operadors de l’exercici 14;
- un exemple de conversió explícita i un d’implícita de l’exercici 15;
- una justificació dels comentaris afegits en l’exercici 16;
- una incidència trobada i la correcció aplicada.

En la comprovació individual, el professorat podrà obrir un exercici i demanar un canvi breu, com ara canviar `preu` per `preu_unitari` o mostrar el preu amb IVA. L’objectiu és comprovar que entens el codi que has lliurat.

[Anterior: preparació de l’entorn](activitat-1-preparacio-entorn.md) · [Autoavaluació](autoavaluacio.md) · [Índex](../index.md)
