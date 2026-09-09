---
hide:
  - navigation
---
# Activitat 1. Laboratori d’instal·lació i verificació

## Context

Una empresa incorpora una persona desenvolupadora júnior i necessita preparar un equip amb dos entorns: VS Code per a tasques flexibles i IntelliJ IDEA per a projectes Java. La persona responsable no vol una captura de l’instal·lador; necessita saber què s’ha instal·lat, amb quina llicència i com s’ha comprovat que el JDK i els IDE funcionen.

## Objectiu

Instal·lar VS Code i IntelliJ IDEA a partir de fonts autoritzades, preparar un JDK i demostrar que els dos IDE poden obrir, compilar i executar un programa Java mínim.

## Criteris d’avaluació treballats

- **RA2.a** Instal·lació d’entorns de desenvolupament, propietaris i lliures.
- **RA2.g** Identificació de característiques comunes i específiques, com a inici de la comparació.

## Tasca

### Fase 1. Planificació

Consulta els requisits del sistema i les fonts oficials o autoritzades. Anota el sistema operatiu, l’arquitectura, el JDK seleccionat, l’edició o modalitat d’IntelliJ IDEA i la distribució concreta de VS Code. No uses claus compartides ni paquets d’origen desconegut.

### Fase 2. Instal·lació

Instal·la els dos IDE i el JDK. En VS Code, instal·la com a mínim les extensions **Language Support for Java™ by Red Hat** i **Debugger for Java**, que són necessàries per reconéixer, executar i depurar programes Java des de l’IDE. També pots instal·lar l’**Extension Pack for Java**, que les inclou, però no cal utilitzar ni estudiar cap eina de construcció en aquesta activitat. En IntelliJ IDEA, el suport bàsic de Java ja està integrat.

Obri cada aplicació, comprova la seua versió i selecciona el JDK que farà servir el programa. No afegisques altres extensions o plugins opcionals: les ampliacions es treballaran en l’activitat 2. Pots consultar la [guia oficial d’inici de Java en VS Code](https://code.visualstudio.com/docs/java/java-tutorial).

### Fase 3. Projecte de verificació

Crea una carpeta senzilla amb un únic fitxer `App.java`. El programa ha de mostrar un missatge. Comprova primer des del terminal que el JDK funciona i, després, obri la mateixa carpeta des de cada IDE:

```bash
java --version
javac --version
javac App.java
java App
```

Si guardes el fitxer en una subcarpeta o utilitzes un paquet, adapta les ordres i documenta-les. Executa també el programa des de cada IDE i registra qualsevol diferència entre la compilació del terminal i la de l’IDE.

### Fase 4. Comparació inicial

Obri la mateixa carpeta i el mateix programa `App.java` en els dos IDE. No cal buscar informació teòrica: completa la matriu amb dades que puges comprovar directament. En concret:

- **Versió i font:** anota la versió instal·lada de cada IDE i indica d’on s’ha obtingut.
- **Edició o llicència aplicable:** indica quina edició utilitzes i quin tipus de llicència o ús permet.
- **JDK detectat:** anota la versió del JDK que mostra o utilitza cada IDE.
- **Programa Java obert:** comprova si reconeix el fitxer com a Java i si ofereix ressaltat, errors o ajuda de codi.
- **Compilació, execució i eixida:** comprova si pots compilar i executar el programa des de cada IDE i anota el missatge que es mostra.
- **Característica específica observada:** descriu una funció que hages observat en aquell IDE i explica amb una prova breu què fa.

Completa aquesta matriu amb les dades observades, no amb opinions:

| Aspecte | VS Code | IntelliJ IDEA |
| --- | --- | --- |
| Versió i font |  |  |
| Edició o llicència aplicable |  |  |
| JDK detectat |  |  |
| Programa Java obert |  |  |
| Compilació, execució i eixida |  |  |
| Característica específica observada |  |  |

## Requisits

- Els instal·ladors o paquets han de procedir d’una font oficial o autoritzada.
- La fitxa ha d’indicar la modalitat de llicència sense incloure credencials.
- El programa s’ha de poder compilar i executar amb ordres del JDK documentades.
- Les captures han de mostrar només informació necessària i no dades personals o secrets.
- Cada problema ha d’incloure símptoma, hipòtesi, acció i resultat.

## Lliurament

Entrega un únic arxiu PDF amb tot el treball. El document ha d’incloure:

- una fitxa d’instal·lació amb requisits, fonts, versions, llicències i passos;
- la matriu de comparació inicial;
- el codi del programa Java mínim, inclòs directament en el PDF;
- les ordres i eixides de verificació;
- captures justificades de la versió, del JDK, de la compilació i de l’execució;
- una breu conclusió sobre una característica comuna i una d’específica de cada IDE.

No cal entregar una carpeta ni un repositori separat. Comprova que el PDF es pot obrir correctament i que el text, el codi i les captures es llegeixen amb claredat.

## Evidències d’aprenentatge

El professorat podrà observar la presència dels dos IDE, la modalitat d’ús documentada, el JDK i les versions, un programa Java reconegut pels dos entorns i una compilació i execució que produeixen l’eixida esperada. També podrà comprovar que la comparació es basa en observacions.

## Criteris de correcció

Es valorarà que la instal·lació siga reproduïble, que les fonts i llicències estiguen ben identificades, que el JDK i les ordres de compilació siguen coherents i que la verificació incloga resultats, no només captures. Es penalitzaran les dades inventades, les claus exposades i les conclusions que no tinguen una prova associada.

## Ampliació

Prepara un script o una pàgina de documentació que comprove automàticament les versions de `java` i `javac` i indique si falta algun prerequisit.

[Següent: taller de configuració](activitat-2-configuracio.md) · [Índex de la UP1](../index.md)
