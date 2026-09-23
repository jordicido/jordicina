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
4. resoldre una incidència de l'entorn, si apareix;
5. preparar les evidències del procés.

## Projecte inicial

El professorat proporcionarà la carpeta següent:

```text
hola-daw/
└── src/
    └── Main.java
```

El fitxer `Main.java` contindrà:

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

### Evidència

Fes una captura on es veja:

- la carpeta del projecte o `Main.java`;
- el programa executant-se;
- l'eixida actualitzada.

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

### Evidència

Fes una captura on es veja:

- el mateix projecte obert en IntelliJ IDEA;
- `Main.java` amb el canvi controlat;
- el programa executant-se;
- l'eixida actualitzada.

---

## Part 3. Resol una incidència

El professorat pot introduir una incidència en un dels entorns. Treballa amb aquest procés:

1. **Detecta-la:** registra el missatge o el comportament que observes.
2. **Comprova-la:** revisa la carpeta oberta, el JDK, la carpeta `src` i la configuració d'execució.
3. **Aplica una solució:** modifica només la configuració necessària.
4. **Verifica-la:** torna a executar el projecte.
5. **Registra el resultat:** anota què has canviat i com has comprovat que funciona.

Possibles incidències:

- JDK incorrecte;
- JDK no detectat;
- carpeta `src` no reconeguda;
- projecte obert des d'una carpeta incorrecta;
- configuració d'execució no vàlida.

### Registre de la incidència

```text
Problema observat:
_________________________________________________

Comprovació realitzada:
_________________________________________________

Canvi aplicat:
_________________________________________________

Resultat final:
_________________________________________________
```

Si no es produeix cap incidència, documenta una comprovació de configuració que hages fet i el resultat obtingut.

---

## Lliurament

Prepara un document breu amb aquestes evidències:

### 1. Execució en Visual Studio Code

Inclou la captura de la primera execució i la captura —o una única captura clara— del canvi controlat executant-se.

### 2. Execució en IntelliJ IDEA

Inclou la captura del mateix projecte executant-se en IntelliJ IDEA.

### 3. Incidència

Adjunta el registre de la incidència. Si no n'hi ha hagut cap, inclou la comprovació de configuració realitzada.

### 4. Passos realitzats

Escriu una llista breu amb les accions que has fet, en ordre, des que has obert `hola-daw` fins que l'has executat en els dos IDE.

---

# Avaluació

| Aspecte | Assoliment alt | Assoliment mitjà | Assoliment baix |
| --- | --- | --- | --- |
| **Execució en VS Code** | Obri el projecte i l'executa correctament abans i després del canvi controlat. | Executa el projecte amb alguna ajuda o dificultat menor. | No aconsegueix executar-lo correctament. |
| **Migració del projecte** | Obri i executa la mateixa carpeta en IntelliJ IDEA sense duplicar ni modificar innecessàriament el projecte. | Necessita ajuda per obrir o configurar el projecte. | Treballa sobre una còpia o no aconsegueix executar-lo en IntelliJ IDEA. |
| **Resolució d'incidències** | Detecta, comprova, resol i verifica la incidència de manera ordenada. | Resol la incidència amb ajuda o deixa algun pas sense documentar. | Fa canvis sense comprovar-ne el resultat o no resol la incidència. |
| **Evidències** | Les captures i el registre permeten reconstruir clarament el procés. | Les evidències són incompletes però permeten veure part del procés. | No aporta evidències suficients. |

---

## Abans d'entregar

- [ ] He treballat sempre sobre la carpeta `hola-daw`.
- [ ] He executat el projecte en Visual Studio Code.
- [ ] He fet i comprovat el canvi controlat.
- [ ] He obert la mateixa carpeta amb IntelliJ IDEA.
- [ ] He executat el projecte en IntelliJ IDEA.
- [ ] He resolt o documentat la incidència.
- [ ] He inclòs les captures necessàries.
- [ ] He completat el registre dels passos realitzats.

[Anterior: posar a punt l'entorn](activitat-2-configuracio.md) · [Autoavaluació](autoavaluacio.md) · [Índex](../index.md)
