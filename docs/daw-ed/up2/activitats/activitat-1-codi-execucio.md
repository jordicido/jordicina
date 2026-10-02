---
hide:
  - navigation
---

# Activitat 1. Del codi a l'execució

## Finalitat

Una empresa està valorant diferents tecnologies per desenvolupar una nova aplicació i vol entendre què ocorre realment quan un mateix programa s'implementa amb tecnologies diferents.

En aquesta pràctica investigaràs quatre versions equivalents d'un monitor senzill de temperatures: una en C, una en Java, una en Python i una en JavaScript. Les executaràs, observaràs els fitxers i els processos que intervenen, modificaràs el codi font i reconstruiràs el recorregut fins a la CPU.

No es tracta de programar les quatre versions des de zero. El codi font es proporciona perquè la teua tasca principal siga **investigar, comparar i explicar**.

!!! info "Duració orientativa"
    La pràctica està pensada per a dues o tres sessions: laboratori i observació, construcció dels productes i posada en comú.

## Criteris d'avaluació treballats

| Criteri | Què demostraràs |
| --- | --- |
| **RA1.a** | La relació entre programa, procés, memòria, CPU, sistema operatiu i perifèrics. |
| **RA1.c** | La diferència entre codi font, codi objecte i codi executable. |
| **RA1.d** | El paper del codi intermedi i de les màquines virtuals. |
| **RA1.e** | Característiques i models d'execució de C, Java, Python i JavaScript. |

## Situació

L'equip vol comparar quatre implementacions d'un mateix programa abans de triar una tecnologia. Les quatre versions han de produir una eixida equivalent:

~~~text
Temperatures: 18 21 24 19 27

Mitjana: 21.8 ºC
Màxima: 27 ºC

Estat: temperatura elevada
~~~

Cada programa queda actiu durant trenta segons després de mostrar el resultat. Durant aquest temps podràs localitzar el procés i observar que un programa no és només el fitxer de codi font.

## Material proporcionat

Copia aquests fitxers en una carpeta de treball:

- [Versió en C](recursos/programa-c/programa.c)
- [Versió en Java](recursos/programa-java/Programa.java)
- [Versió en Python](recursos/programa-python/programa.py)
- [Versió en JavaScript](recursos/programa-js/programa.js)

Prepara una estructura semblant a aquesta:

~~~text
activitat1-nom-cognoms/
├── programa-c/
│   └── programa.c
├── programa-java/
│   └── Programa.java
├── programa-python/
│   └── programa.py
└── programa-js/
    └── programa.js
~~~

Comprova que tens disponibles les ferramentes següents:

~~~bash
gcc
javac
java
python3
node
~~~

Anota les versions en l'informe. Si alguna ferramenta no està disponible, comunica-ho abans de modificar els programes.

## Part 1. Laboratori

### Fase A. Fes funcionar els quatre programes

L'objectiu inicial és executar correctament les quatre versions. No respongues encara preguntes: concentra't a observar què necessites per preparar cada programa.

#### Versió C

Des de programa-c/:

~~~bash
gcc -c programa.c
gcc programa.o -o programa
./programa
~~~

#### Versió Java

Des de programa-java/:

~~~bash
javac Programa.java
java Programa
~~~

#### Versió Python

Des de programa-python/:

~~~bash
python3 programa.py
~~~

#### Versió JavaScript

Des de programa-js/:

~~~bash
node programa.js
~~~

Conserva evidències dels fitxers que existeixen **abans i després** de preparar cada programa. Pots utilitzar:

~~~bash
ls -lh
file *
tree
~~~

No cal capturar cada ordre. L'objectiu és demostrar quins fitxers nous han aparegut i quin paper sembla tindre cadascun.

### Fase B. Investiga què ha passat

En cada carpeta, compara l'estat inicial i l'estat posterior:

~~~bash
ls -lh
file *
tree
~~~

En Java, observa la classe compilada:

~~~bash
javap -c Programa
~~~

En Python, força la compilació interna i observa el resultat:

~~~bash
python3 -m py_compile programa.py
python3 -m dis programa.py
~~~

Comprova si ha aparegut la carpeta __pycache__ i relaciona-la amb el bytecode i la màquina virtual de Python. La representació de dis no és codi màquina de la CPU.

Executa un programa i, abans que passen els trenta segons, obri una segona terminal:

~~~bash
ps -o pid,comm,%cpu,%mem,rss
~~~

També pots utilitzar htop si està instal·lat. Repeteix l'observació amb més d'una versió i anota què canvia en el nom del procés, la memòria i el recorregut d'execució.

### Fase C. Trenca l'experiment

Modifica el codi font dels quatre programes i canvia:

~~~text
27 → 35
~~~

Intenta tornar a executar cada programa de la forma més directa possible:

~~~text
Què passa quan modifique el codi font però intente executar directament el programa?
~~~

No consultes encara quina ordre cal repetir. Observa si cada versió mostra el valor nou o l'antic. Després de registrar el resultat, prepara cada programa de la manera necessària perquè l'execució reflectisca el canvi.

En l'informe explica per què no tots els llenguatges reaccionen igual. No n'hi ha prou amb escriure «cal recompilar»: indica quin artefacte utilitza realment cada execució.

## Part 2. Reconstrueix què està passant

### Producte 1. Mapa del recorregut

Construeix un esquema per a cadascun dels quatre llenguatges. El mapa ha de començar en el fitxer font i acabar en l'execució sobre la CPU.

Indica, quan corresponga:

- el compilador, intèrpret o motor;
- el fitxer objecte, executable o codi intermedi;
- la màquina virtual o el runtime;
- el sistema operatiu, la RAM i la CPU.

Pots utilitzar Mermaid, diagrams.net, Excalidraw o una ferramenta equivalent. Pregunta't quin fitxer apareix, quina ferramenta el transforma i quin artefacte utilitza l'execució.

### Producte 2. Fitxa forense

Completa una única taula:

| Aspecte | C | Java | Python | JavaScript |
| --- | --- | --- | --- | --- |
| Fitxer font | | | | |
| Ferramenta principal | | | | |
| Fitxers nous observats | | | | |
| Codi objecte | | | | |
| Codi intermedi | | | | |
| Executable natiu | | | | |
| Runtime / VM | | | | |
| Tipatge | | | | |
| Paradigmes habituals | | | | |
| Què he de fer després de modificar el font? | | | | |

Quan una cel·la no siga aplicable, escriu No aplica i justifica-ho. No confongues el codi objecte de C amb el bytecode de Java o Python.

### Producte 3. Explica el misteri

Respon cada situació amb un paràgraf curt.

#### Cas 1

Has modificat programa.c, però ./programa continua mostrant el resultat antic. Explica per què.

#### Cas 2

Una companya envia només Programa.class a una persona amb una CPU diferent però amb una JVM adequada. Explica per què potencialment pot executar el programa i quines condicions addicionals poden ser necessàries.

#### Cas 3

Algú afirma: «Python executa directament cada línia del fitxer .py una darrere de l'altra». Durant l'activitat has trobat __pycache__ i has utilitzat python3 -m dis. Explica per què l'afirmació és una simplificació i quin paper té el bytecode.

#### Cas 4

Tenim programa.c i programa. Explica la diferència entre la representació font, l'executable i el procés que apareix quan s'executa.

## Part 3. Connecta-ho amb el sistema

Executa qualsevol programa durant els trenta segons de pausa i localitza el procés amb:

~~~bash
ps -o pid,comm,%cpu,%mem,rss
~~~

Produeix un únic esquema que connecte:

~~~text
Disc / SSD
     ↓
Sistema operatiu
     ↓
Procés
     ↓
Memòria RAM
     ↕
CPU
     ↓
Terminal / pantalla
~~~

Davall de l'esquema, escriu aproximadament cinc línies explicant què ocorre des que executes el programa fins que apareix el resultat per pantalla.

## Lliurament

Entrega una carpeta amb aquesta estructura:

~~~text
activitat1-nom-cognoms/
├── informe.md
└── evidencies/
~~~

L'informe.md ha de contindre:

1. els quatre mapes d'execució;
2. la taula comparativa;
3. les explicacions dels quatre misteris;
4. l'esquema final i les cinc línies sobre programa, procés i maquinari;
5. entre quatre i sis captures contextualitzades.

Tria captures representatives, per exemple:

- els fitxers .c, .o i l'executable;
- els fitxers .java i .class;
- la carpeta __pycache__;
- un procés visible mentre està actiu.

No cal capturar cada ordre. Una captura sense context no és una evidència suficient.

## Abans d'entregar

- [ ] He executat les quatre versions i he comprovat una eixida equivalent.
- [ ] He anotat les versions de gcc, Java, Python i Node.js.
- [ ] He comparat els fitxers abans i després de preparar cada programa.
- [ ] He observat almenys un procés mentre estava actiu.
- [ ] He modificat el codi font dels quatre programes.
- [ ] He explicat què cal fer perquè cada execució reflectisca el canvi.
- [ ] He creat els quatre mapes d'execució.
- [ ] He completat una única taula comparativa.
- [ ] He respost els quatre casos amb explicacions tècniques.
- [ ] He connectat programa, procés, RAM, CPU i sistema operatiu.
- [ ] L'informe conté entre quatre i sis captures contextualitzades.
- [ ] No he inclòs credencials ni dades personals.

[Índex de la UP2](../index.md)

