---
hide:
  - navigation
---

# Activitat 3. Migrem un projecte: VS Code vs IntelliJ IDEA

## Finalitat

Executar el mateix projecte Java en Visual Studio Code i IntelliJ IDEA, treballant sempre sobre la mateixa carpeta i resolent les incidències de configuració que puguen aparéixer.

## Situació

T'incorpores a un equip de desenvolupament que treballa amb Java. Un company t'envia un projecte senzill perquè el continues en el teu ordinador.

El teu objectiu és:

1. obrir el projecte amb Visual Studio Code i executar-lo;
2. fer un canvi menut i comprovar que continua funcionant;
3. obrir la mateixa carpeta amb IntelliJ IDEA i executar-la;
4. resoldre una incidència de l'entorn, si apareix.

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
    No crees un projecte nou ni copies el fitxer a una altra carpeta. Durant tota l'activitat has de treballar sobre `hola-daw`.

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

## Part 2. Obri la mateixa carpeta amb IntelliJ IDEA

Tanca Visual Studio Code i obri **la mateixa carpeta `hola-daw`** amb IntelliJ IDEA.

Segueix aquest procés:

1. Obri la carpeta existent; no crees un projecte Java nou.
2. Localitza `src/Main.java`.
3. Comprova o configura el JDK del projecte si IntelliJ IDEA el sol·licita.
4. Comprova que `src` està disponible com a carpeta de codi font.
5. Executa `Main.java`.
6. Comprova que apareix l'eixida amb el nom que has escrit.

!!! warning "No dupliques el projecte"
    No copies `Main.java`, no canvies la ubicació de la carpeta i no treballes sobre una còpia diferent de `hola-daw`.

[Anterior: posar a punt l'entorn](activitat-2-configuracio.md) · [Autoavaluació](autoavaluacio.md) · [Índex](../index.md)
