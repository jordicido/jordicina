---
hide:
  - navigation
---
# Activitat 1. Autòpsia de tres programes

## Finalitat

Comparareu tres formes diferents d’arribar des del codi font fins a un programa en execució. L’objectiu no és aprendre encara a programar en tres llenguatges, sinó observar què canvia en el procés tècnic.

Treballareu principalment els criteris **CA1.a, CA1.c, CA1.d, CA1.e i CA1.f**.

## Organització i duració

- Treball en parelles: **1 hora**.
- Presentació i correcció conjunta: **30 minuts**.
- Presentació de cada parella: aproximadament **3 minuts**.

## Material de partida

El professorat proporcionarà tres programes mínims equivalents. Tots demanaran un nom, dos nombres, mostraran una salutació i mostraran la suma.

```text
autopsia-programes/
├── c/
│   ├── calculadora.c
│   ├── calculadora.o
│   └── calculadora
├── java/
│   ├── Calculadora.java
│   └── Calculadora.class
├── python/
│   └── calculadora.py
└── fitxa-analisi.md
```

Les eines ja estaran preparades. La instal·lació i configuració detallada es treballarà en la UP2.

## Tasca 1. Inspecció

Examineu les carpetes i identifiqueu:

- quins fitxers ha escrit la persona programadora;
- quins fitxers ha generat una ferramenta;
- què indiquen les extensions;
- quins fitxers poden executar-se;
- quines ferramentes necessita cada procés.

## Tasca 2. Execució guiada

Executeu els programes amb les ordres proporcionades pel professorat. Com a referència:

```bash
# C
gcc -c calculadora.c
gcc calculadora.o -o calculadora
./calculadora

# Java
javac Calculadora.java
java Calculadora

# Python
python calculadora.py
```

L’objectiu és observar els artefactes generats i l’entorn necessari, no memoritzar les ordres.

## Tasca 3. Reconstrucció del procés

Completeu aquesta taula:

| Aspecte | C | Java | Python |
| --- | --- | --- | --- |
| Fitxer de codi font |  |  |  |
| Llenguatge |  |  |  |
| Ferramenta utilitzada |  |  |  |
| Codi objecte |  |  |  |
| Codi intermedi |  |  |  |
| Executable independent |  |  |  |
| Entorn d’execució necessari |  |  |  |
| Procés fins a l’execució |  |  |  |

Després, representeu els tres processos amb fletxes. Podeu partir d’aquests models:

```text
C:      font → compilador → objecte → enllaçador → executable → sistema operatiu
Java:   font → compilador → bytecode → JVM → execució
Python: font → intèrpret → execució
```

## Lliurament

Una única fitxa de **dues pàgines com a màxim** que incloga:

- taula comparativa;
- tres diagrames;
- conclusió d’unes 150 paraules.

La conclusió ha de respondre aquesta pregunta: **quines diferències hi ha entre C, Java i Python quant a transformació del codi, portabilitat i entorn d’execució?**

En la presentació, expliqueu només una diferència rellevant. No cal repetir tota la fitxa.

!!! tip "Abans d’entregar"
    Comproveu que la taula està completa, que els diagrames es poden entendre sense explicació oral i que la conclusió compara els tres llenguatges.

## Referències i preparació de l’entorn

Aquesta activitat no pretén convertir-se en un tutorial d’instal·lació. El professorat pot proporcionar un entorn ja preparat. Si necessiteu preparar el vostre ordinador, aquestes són les eines mínimes i les referències oficials.

### Comprovació inicial

Obriu una terminal i comproveu quines ordres estan disponibles:

```text
gcc --version
javac -version
java -version
python3 --version
python --version
```

No cal que funcionen totes les variants: en Linux és habitual utilitzar `python3` i en Windows `py` o `python`.

### Linux (Ubuntu o Debian)

#### C amb GCC

```bash
sudo apt update
sudo apt install build-essential
gcc --version
```

Dins de la carpeta `c/`:

```bash
gcc -c calculadora.c
gcc calculadora.o -o calculadora
./calculadora
```

Referències: [instal·lació de GCC](https://gcc.gnu.org/install/) i [documentació de GCC](https://gcc.gnu.org/onlinedocs/).

#### Java

Instal·leu un JDK, no només un entorn de màquina virtual:

```bash
sudo apt update
sudo apt install default-jdk
javac -version
java -version
```

Dins de la carpeta `java/`:

```bash
javac Calculadora.java
java Calculadora
```

Referència: [documentació oficial de `javac`](https://docs.oracle.com/en/java/javase/21/docs/specs/man/javac.html).

#### Python

```bash
sudo apt update
sudo apt install python3
python3 --version
```

Dins de la carpeta `python/`:

```bash
python3 calculadora.py
```

Referència: [documentació oficial de Python](https://docs.python.org/3/).

### Windows

#### C amb GCC i MSYS2

Una opció habitual per disposar de GCC en Windows és [MSYS2](https://www.msys2.org/). Després d’instal·lar-lo, obriu el terminal **UCRT64** i executeu:

```bash
pacman -Syu
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
gcc --version
```

Dins de la carpeta `c/`:

```bash
gcc -c calculadora.c
gcc calculadora.o -o calculadora.exe
./calculadora.exe
```

Per a aquesta activitat és suficient utilitzar el terminal UCRT64; no cal configurar `gcc` en PowerShell.

#### Java

Instal·leu un **JDK** des d’una distribució compatible, per exemple [Eclipse Temurin](https://adoptium.net/temurin/releases/), i assegureu-vos que `javac` està disponible en el `PATH`.

En PowerShell o CMD, dins de la carpeta `java/`:

```powershell
javac Calculadora.java
java Calculadora
```

Referència: [documentació oficial de `javac`](https://docs.oracle.com/en/java/javase/21/docs/specs/man/javac.html).

#### Python

Instal·leu Python des de [python.org](https://www.python.org/downloads/windows/) o consulteu la [documentació oficial per a Windows](https://docs.python.org/3/using/windows.html).

En PowerShell o CMD, dins de la carpeta `python/`:

```powershell
py calculadora.py
```

També pot funcionar `python calculadora.py`. Comproveu la instal·lació amb `py --version` o `python --version`.

### Si una ordre no funciona

No canvieu el programa immediatament. Anoteu el sistema operatiu, el terminal, l’ordre exacta, el missatge d’error i la versió de la ferramenta. Aquesta informació forma part del diagnòstic tècnic i ajudarà a resoldre la incidència.

[Activitat 2](activitat-2-producte.md) · [Índex de la UP1](../index.md)