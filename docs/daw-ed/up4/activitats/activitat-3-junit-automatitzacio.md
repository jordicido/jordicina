---
hide:
  - navigation
---
# Activitat 3. Verifiquem una botiga en línia amb JUnit 5

**Mòdul:** Entorns de Desenvolupament · 1r DAW<br>
**Unitat:** UP4. Proves i verificació<br>
**Criteris d'avaluació:** RA3.b (definir casos de prova), RA3.f (efectuar proves unitàries) i RA3.g (implementar proves automàtiques)<br>
**Entorn de treball:** IntelliJ IDEA, Maven, JDK 25 i JUnit Jupiter 5<br>
**Modalitat:** individual<br>
**Duració orientativa:** 2 sessions, una vegada feta la pràctica guiada.

## 1. Situació

Treballes en l'equip que manté una **botiga en línia de productes informàtics**. Abans de posar en producció una actualització, has de comprovar que les regles de la botiga funcionen correctament.

La botiga té dues funcionalitats relacionades amb una mateixa compra:

- **Càlcul de les despeses d'enviament** segons l'import de la compra i si el client té un cupó vàlid.
- **Gestió de l'estoc**: quan es compra un producte, les unitats disponibles disminueixen; si la compra és invàlida, ha de ser rebutjada sense alterar l'estoc.

T'han proporcionat el codi de la botiga. **No has de programar la botiga ni corregir-ne la implementació**: la teua responsabilitat és **decidir què cal provar, escriure les proves amb JUnit i executar-les**.

> **Important:** encara no necessites coneixements de programació orientada a objectes. La classe `Botiga` agrupa mètodes `static` que utilitzaràs directament com `Botiga.calcularEnviament(...)` i `Botiga.comprar(...)`. L'estoc s'emmagatzema en un array `int[]`. No crearàs instàncies amb `new Botiga()` ni treballaràs amb atributs d'objectes.

## 2. Contracte: què ha de fer el programa?

### 2.1. Despeses d'enviament

El mètode `calcularEnviament(double importCompra, boolean cupoValid)` retorna un import en euros segons estes regles:

| Condició | Despeses d'enviament |
| --- | ---: |
| Sense cupó vàlid | 5 € |
| Amb cupó vàlid i compra inferior a 50 € | 2 € |
| Amb cupó vàlid i compra igual o superior a 50 € | 0 € |

Si `importCompra` és negatiu, ha de llançar `IllegalArgumentException`. L'import **zero** és admissible en este model educatiu. El cupó només modifica les despeses d'enviament, no l'import de la compra.

### 2.2. Compra i estoc

La botiga ven tres productes. L'array guarda quantes unitats queden de cada producte:

| Posició de l'array | Producte | Estoc inicial de mostra |
| ---: | --- | ---: |
| `0` | Ratolí | 8 |
| `1` | Teclat | 5 |
| `2` | Auriculars | 3 |

Per tant, `int[] estoc = {8, 5, 3};` representa l'estoc disponible abans de fer una compra.

El mètode `comprar(int[] estoc, int producte, int unitats)` **no retorna cap valor** (`void`). Modifica directament l'array rebut i segueix estes regles:

- Si hi ha prou unitats, descompta del producte indicat la quantitat comprada.
- **Només** canvia l'estoc del producte comprat; les altres posicions es mantenen.
- Si `unitats` és zero o negatiu, `producte` no és una posició vàlida, o l'array `estoc` és `null`, llança `IllegalArgumentException`.
- Si la quantitat demanada supera les unitats disponibles, llança `IllegalStateException`.
- **Una compra rebutjada no ha de modificar l'estoc.**

En esta pràctica, els arrays d'estoc inicials que tu prepares contindran sempre quantitats no negatives.

## 3. Codi inicial que et proporciona el professorat

Crea o obri un projecte **Maven** en IntelliJ IDEA amb **JDK 25** i JUnit Jupiter configurat (pots reutilitzar la configuració de la pràctica guiada). Copia el fitxer `Botiga.java` en el paquet `edu.iesmre.up4` dins de `src/main/java`.

**`src/main/java/edu/iesmre/up4/Botiga.java`**

```java
package edu.iesmre.up4;

public class Botiga {

    public static double calcularEnviament(double importCompra, boolean cupoValid) {
        if (importCompra < 0) {
            throw new IllegalArgumentException("L'import no pot ser negatiu");
        }
        if (!cupoValid) {
            return 5.0;
        }
        if (importCompra < 50.0) {
            return 2.0;
        }
        return 0.0;
    }

    public static void comprar(int[] estoc, int producte, int unitats) {
        if (estoc == null || producte < 0 || producte >= estoc.length || unitats <= 0) {
            throw new IllegalArgumentException("Dades de compra no vàlides");
        }
        if (unitats > estoc[producte]) {
            throw new IllegalStateException("Estoc insuficient");
        }
        estoc[producte] -= unitats;
    }
}
```

**No modifiques esta classe** per a aconseguir que els tests passen. Si un test falla, comprova primer si les dades i el resultat esperat s'ajusten a les regles anteriors.

L'estructura mínima del projecte serà:

```text
up4-botiga-junit/
├── pom.xml
├── pla-proves.md
├── conclusions.md
└── src/
    ├── main/java/edu/iesmre/up4/Botiga.java
    └── test/java/edu/iesmre/up4/BotigaTest.java
```

## 4. Tasca 1 — Dissenya el pla de proves **abans d'escriure codi**

Crea `pla-proves.md`. Analitza les regles de la botiga i proposa **almenys 12 casos de prova**, repartits de la manera següent:

- **4 proves de retorn**: comproven imports que retorna `calcularEnviament(...)` i inclouen almenys un valor límit pròxim als 50 €.
- **4 proves d'estat**: comproven què passa amb les diferents posicions de l'array després de fer una compra. Inclou tant la modificació esperada com la conservació de les unitats que no han de canviar.
- **4 proves d'excepcions**: comproven errors d'entrada o compres que la botiga ha de rebutjar. Quan l'error ocorre durant una compra, has de comprovar també que l'array conserva els valors inicials.

Per a cada cas, completa una fila amb dades concretes. Esta taula és una **plantilla per emplenar**, no una solució:

| ID | Mètode | Tipus (retorn / estat / excepció) | Dades d'entrada i estat inicial | Resultat esperat | Per què és important? |
| --- | --- | --- | --- | --- | --- |
| P01 | … | … | … | … | … |
| P02 | … | … | … | … | … |
| … | … | … | … | … | … |
| P12 | … | … | … | … | … |

No són vàlides expectatives genèriques com «ha de funcionar»: indica **el valor retornat**, **el contingut exacte de l'array després de l'operació** o **el tipus concret d'excepció**. Pots proposar més de 12 casos si consideres que és necessari.

## 5. Tasca 2 — Implementa les proves amb JUnit 5

Una vegada acabat el pla, crea `BotigaTest.java` dins de `src/test/java/edu/iesmre/up4/` i implementa els casos que has definit.

- Cada fila del pla ha de correspondre a **un mètode `@Test`**, amb un nom que explique el comportament comprovat.
- Utilitza Arrange–Act–Assert per a separar la preparació de dades, l'operació i la comprovació.
- Per als retorns, considera `assertEquals(...)`.
- Per als estats, considera `assertArrayEquals(...)` o `assertEquals(...)` sobre posicions concretes de l'array.
- Per a les excepcions, utilitza `assertThrows(...)` amb el **tipus exacte** indicat en el contracte.
- **Cada test ha de començar amb les seues pròpies dades**. No utilitzes un mateix array compartit entre proves ni depengues de l'ordre d'execució.
- En les compres rebutjades, comprova **les dues coses**: que es llança l'excepció adequada i que l'estoc no ha canviat.

**Imports que et poden resultar útils:**

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
```

> **Recorda:** `assertThrows` passa quan es llança l'excepció esperada. Això no implica que la prova haja fallat. Una prova d'estat no es resol únicament comprovant que un mètode `void` acaba sense excepcions.

## 6. Tasca 3 — Executa i analitza les proves

1. Executa alguns tests individualment amb el triangle verd d'**IntelliJ IDEA**.
2. Executa la bateria completa amb el botó de la classe `BotigaTest`.
3. Des de la terminal del projecte, executa:

   ```bash
   mvn clean test
   ```

4. Comprova que el nombre de proves executades coincideix amb les files del pla i registra quantes passen, fallen o provoquen errors.
5. Consulta els resultats que Maven guarda en `target/surefire-reports/`.
6. **Regressió controlada:** modifica temporalment una condició de `Botiga.java` per a provocar un error, torna a executar les proves i registra quina prova detecta el canvi, quin era el resultat esperat i quin s'ha obtingut. **Restaura després el codi original** i comprova que la bateria torna a passar.

## 7. Tasca 4 — Reflexiona sobre la qualitat de les proves

En `conclusions.md`, respon breument:

1. Quina diferència hi ha entre una prova de retorn i una prova d'estat en la nostra botiga?
2. Per què hem de comprovar l'estoc després d'una compra rebutjada, a més de comprovar l'excepció?
3. Quins casos has dissenyat per a comprovar el límit dels 50 € i per què?
4. Què ha detectat la bateria de proves quan has provocat una regressió?
5. Que tots els tests passen significa que hem comprovat tots els errors possibles? Justifica-ho.

**Ampliació voluntària:** si el projecte té JaCoCo configurat, executa `mvn clean verify`, obri `target/site/jacoco/index.html` i localitza les línies o branques no cobertes. Proposa una prova addicional sense modificar el codi funcional. La cobertura mesura codi executat, no garanteix que les comprovacions siguen correctes.

## 8. Lliurament en Aules

Lliura un únic fitxer `UP4_Activitat3_CognomsNom.zip` amb:

- `pom.xml` i el codi de `Botiga.java` i `BotigaTest.java`.
- `pla-proves.md`, amb totes les dades i expectatives, i una columna final de resultat real (passa/falla).
- `conclusions.md` amb les respostes.
- Una captura de l'execució final de JUnit en IntelliJ i una de `mvn clean test`.
- Una evidència breu de la regressió provocada (captura o fragment del report que mostre la fallada).

No cal incloure `.idea/`, `target/` ni els fitxers `.class`; adjunta sols la captura o el fragment de report necessari.

## 9. Rúbrica de tres nivells

| Aspecte | Pes | Assolit | En procés | No assolit |
| --- | ---: | --- | --- | --- |
| Disseny del pla i justificació | 25 % | 12 casos concrets, independents i justificats, incloent límits | Falten alguns casos o justificacions | No hi ha un pla útil |
| Proves de retorn | 20 % | Expectatives correctes amb assercions adequades | Alguns valors o assercions incorrectes | No comprova els valors retornats |
| Proves d'estat | 20 % | Comprova canvis i conservació de l'estoc | Comprova només part de l'estat | No verifica l'estoc |
| Proves d'excepcions | 25 % | Tipus d'excepció i estat inalterat quan toca | Falten casos o alguna comprovació | No verifica el rebuig correctament |
| Execució, regressió i evidències | 10 % | Tests repetibles, `mvn test` correcte i evidències completes | Execució o evidències parcials | No es poden executar o no hi ha evidències |

> **Criteri principal:** la qualitat del treball no és només aconseguir `BUILD SUCCESS`, sinó haver triat proves que comproven realment el comportament acordat.

## Annex — Configuració Maven

Si el professorat no t'ha proporcionat un projecte Maven preparat, crea un projecte **Java amb sistema de construcció Maven** en IntelliJ IDEA i selecciona **JDK 25**. Utilitza este `pom.xml` i importa els canvis amb **Load Maven Changes**.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>edu.iesmre</groupId>
    <artifactId>up4-botiga-junit</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.release>25</maven.compiler.release>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.14.4</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.16.0</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.6.1</version>
            </plugin>
        </plugins>
    </build>
</project>
```

Comprova que **IntelliJ i Maven fan servir el JDK 25**: revisa **Project SDK = 25**, **Maven Runner → JRE = Project JDK (25)** i, des de la terminal, `mvn -version`. La línia `Java version` de Maven ha d'indicar **25**. Treballa sempre dins de l'arrel que conté el fitxer `pom.xml`.

[Anterior: depuració](activitat-2-depuracio.md) · [Taller guiat](taller-guiat-junit-intellij-maven.md) · [Següent: dobles i incidències](activitat-4-dobles-incidencies.md) · [Índex](../../up4-proves.md)
