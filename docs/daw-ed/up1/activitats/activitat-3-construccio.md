---
hide:
  - navigation
---

# Activitat 3. Crea, replica i executa un projecte Java

## Finalitat

Crear i executar un projecte Java senzill en Visual Studio Code, replicar-lo en un projecte Maven nou d'IntelliJ IDEA i comprovar també l'execució des de la terminal.

## Criteri d'avaluació treballat

En aquesta activitat s'avalua principalment el criteri següent:

| Criteri | Descripció |
| --- | --- |
| **RA2.f** | S'han generat executables a partir d'un mateix codi font amb diversos entorns de desenvolupament. |

Es comprovarà que el mateix programa Java funciona en Visual Studio Code, IntelliJ IDEA i la terminal, i que saps explicar les diferències entre els processos d'execució.

## Situació

T'incorpores a un equip de desenvolupament que treballa amb Java. Un company t'envia un projecte senzill perquè el continues en el teu ordinador.

El teu objectiu és:

1. obrir el projecte amb Visual Studio Code i executar-lo;
2. fer un canvi menut i comprovar que continua funcionant;
3. crear un projecte nou amb Maven en IntelliJ IDEA i replicar-hi `Main.java`;
4. compilar i executar el projecte original des de la terminal.

## Projecte inicial

Prepara tu mateix el projecte abans d'obrir cap IDE:

1. Crea una carpeta anomenada `hola-daw`.
2. Dins de `hola-daw`, crea una carpeta anomenada `src`.
3. Dins de `src`, crea el fitxer `Main.java`.

L'estructura final ha de ser:

```text
hola-daw/
└── src/
    └── Main.java
```

Escriu en `Main.java` el codi següent:

```java title="src/Main.java"
public class Main {

    public static void main(String[] args) {

        System.out.println("Entorn de desenvolupament preparat!");
        System.out.println("DAW - IES Mestre Ramon Esteve");

    }

}
```

!!! info "Condicions de la pràctica"
    La Part 1 i la Part 3 es fan sobre `hola-daw`. En la Part 2 crearàs un projecte Maven independent i hi replicaràs `Main.java`.

---

## Part 1. Executa el projecte amb Visual Studio Code

Obri la carpeta `hola-daw` amb Visual Studio Code.

Completa aquest procés:

1. Comprova que el projecte apareix en l'explorador de fitxers.
2. Obri `src/Main.java`.
3. Comprova que Visual Studio Code reconeix un JDK.
4. Executa el programa des de l'IDE.
5. Comprova que l'eixida coincideix amb el resultat esperat.

Resultat esperat:

```text
Entorn de desenvolupament preparat!
DAW - IES Mestre Ramon Esteve
```

### Canvi controlat

Modifica únicament la segona línia del programa:

```java
System.out.println("DAW - IES Mestre Ramon Esteve");
```

Substitueix-la pel teu nom:

```java
System.out.println("DAW - Nom Cognom");
```

Guarda el fitxer, torna a executar-lo i comprova que l'eixida s'ha actualitzat.

---

## Part 2. Crea un projecte nou amb Maven en IntelliJ IDEA

Tanca Visual Studio Code i obri IntelliJ IDEA.

En aquesta part no has d'obrir la carpeta `hola-daw`. Crea un projecte nou amb Maven.

Segueix aquest procés:

1. Selecciona **New Project** i tria **Maven**.
2. Anomena el projecte `hola-daw-maven`.
3. Selecciona un JDK i crea el projecte amb l'estructura Maven predeterminada.
4. Dins de `src/main/java`, crea un fitxer nou anomenat `Main.java`.
5. Replica en aquest fitxer el contingut de `hola-daw/src/Main.java`, inclòs el canvi de nom que has fet en la Part 1.
6. Executa `Main.java` des d'IntelliJ IDEA.
7. Comprova que apareix l'eixida amb el nom que has escrit.

!!! warning "Projectes independents"
    No òbrigues `hola-daw` amb IntelliJ IDEA ni copies la carpeta sencera. El projecte Maven ha de ser nou i només has de replicar-hi el fitxer `Main.java`.

---

## Part 3. Compila i executa el projecte des de la terminal

Ara tanca els IDE i obri una terminal dins de la carpeta `hola-daw`.

Comprova que estàs situat en la carpeta correcta i executa:

```bash
javac src/Main.java
```

Si la compilació acaba correctament, executa el programa amb:

```bash
java -cp src Main
```

Comprova que apareix el mateix resultat que en Visual Studio Code i IntelliJ IDEA:

```text
Entorn de desenvolupament preparat!
DAW - Nom Cognom
```

Si apareix un error, revisa la carpeta actual, el nom del fitxer, el contingut de `Main.java` i la configuració del JDK abans de tornar-ho a provar.

[Anterior: posar a punt l'entorn](activitat-2-configuracio.md) · [Autoavaluació](autoavaluacio.md) · [Índex](../index.md)
