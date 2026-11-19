---
hide:
  - navigation
---
# Activitat 3. Posem a prova la taquilla d'un concert

**Mòdul:** Entorns de Desenvolupament · **UP4:** Proves i verificació · **RA3.b, RA3.f i RA3.g**

### Finalitat

Una prova unitària no consisteix a executar un programa i veure si «pareix funcionar». Consisteix a decidir **què hauria de passar**, preparar una situació concreta i comprovar el resultat amb una asserció de JUnit.

En esta activitat aprendràs a:

1. Identificar casos de prova a partir d'unes regles escrites (**RA3.b**).
2. Escriure proves amb JUnit Jupiter (**RA3.f**).
3. Executar la bateria completa des d'IntelliJ IDEA i Maven (**RA3.g**).
4. Distingir **retorn**, **estat** i **excepcions** dins d'un mateix problema.

## Situació: la taquilla del concert

Una associació organitza un concert amb places limitades. La seua aplicació ha de vendre entrades i evitar que es venen més places de les disponibles.

La classe `TaquillaConcert` **ja està programada**. Tu **no has de programar la taquilla**: la teua tasca és comprovar mitjançant proves JUnit que respecta les regles de negoci.

### Regles de funcionament (contracte)

| Codi | Regla |
| --- | --- |
| R1 | En crear una taquilla, es determina el nombre inicial de places disponibles. Per a la pràctica treballarem normalment amb **30 places**; cada prova pot crear una taquilla nova. |
| R2 | Una entrada **general** costa **12 €**. |
| R3 | Una entrada **reduïda** costa **8 €**. |
| R4 | Una venda vàlida retorna el **preu total**: quantitat × preu de l'entrada. |
| R5 | Una venda vàlida **redueix les places disponibles** exactament en la quantitat venuda. |
| R6 | No es poden comprar **0 entrades** ni quantitats **negatives**: es llança `IllegalArgumentException`. |
| R7 | No es poden comprar **més entrades que places disponibles**: es llança `IllegalStateException`. |
| R8 | **Una venda rebutjada no modifica les places disponibles**. |
| R9 | És possible vendre exactament totes les places restants; aleshores queden **0 places**. |

> **Nota:** `new TaquillaConcert(30)` crea una taquilla amb 30 places. No necessites saber com està construïda internament. Et facilitarà la prova d'un nou escenari. La classe no utilitza arrays ni col·leccions.

### Els dos mètodes que provaràs

```java
// Vén una quantitat d'entrades, retorna el preu total en euros.
// entradaReduida = true: entrada de 8 €; false: entrada de 12 €.
int total = taquilla.vendreEntrades(quantitat, entradaReduida);

// Retorna el nombre actual de places disponibles.
int places = taquilla.consultarPlaces();
```

No cal modificar `TaquillaConcert.java` per a resoldre l'activitat. Només treballaràs en `TaquillaConcertTest.java`.

## Recursos inicials

Descarrega:

- [Projecte Maven inicial (ZIP)](recursos/taquilla-concert-projecte-inicial.zip): conté la classe de producció completa, el `pom.xml` i una classe `TaquillaConcertTest` sense casos resolts.
- [Fitxa de planificació de proves (Word)](recursos/pla-proves-taquilla-concert.docx): emplena-la abans de començar a escriure els tests.

**Entorn:** IntelliJ IDEA, JDK 25, Maven 3.9+ i JUnit Jupiter 5.14.4. No cal instal·lar JUnit manualment, perquè Maven gestiona la dependència indicada en el `pom.xml`.

## Fase 1 — Dissenya les proves abans de programar

1. Llig les regles **R1–R9**.
2. Obri la **fitxa Word** i anota, per a cada cas, un **nom descriptiu**, la **regla** que comprova, les **dades inicials**, l'**acció** i el **resultat esperat**.
3. Dissenya com a mínim **9 casos diferents**:
   - **3 proves de retorn:** comprovar el preu total de vendes vàlides.
   - **3 proves d'estat:** comprovar com canvia el nombre de places disponibles després de vendre.
   - **3 proves d'excepcions:** comprovar que es rebutgen operacions incorrectes amb l'excepció adequada. Quan es rebutge una venda, comprova també que les places no hagen canviat.
4. Inclou algun **cas límit**, és a dir, un cas a la frontera d'una regla (per exemple, el nombre de places). Tria les dades tu mateix/a.
5. **No escrigues encara els tests.** Revisa que els resultats esperats provenen de les regles i no d'allò que el programa retorne casualment.

## Fase 2 — Implementa els tests amb JUnit

1. Obri el projecte descarregat a IntelliJ IDEA com a **projecte Maven**.
2. Revisa en `Project Structure` que el projecte treballa amb **JDK 25** i espera que Maven importe les dependències.
3. Obri `src/test/java/edu/iesmre/up4/TaquillaConcertTest.java`.
4. Crea un mètode `@Test` per cada cas de la teua fitxa. Usa noms que expliquen la conducta, no `test1`, `test2`, etc.
5. Estructura cada prova amb **Arrange–Act–Assert**:
   - **Arrange:** crea una taquilla nova i prepara la situació.
   - **Act:** executa la venda (o la consulta necessària).
   - **Assert:** comprova el valor esperat.
6. Utilitza preferentment:
   - `assertEquals(esperat, real)` per a imports i places;
   - `assertThrows(TipusExcepcio.class, () -> ...)` per a vendes prohibides.
7. **Cada test ha de ser independent.** Crea una taquilla nova en cada test: una prova no pot necessitar que abans s'haja executat una altra.
8. No modifiques el codi de producció ni les regles per aconseguir que passe un test.

> **Atenció:** una prova d'estat comprova **què ha canviat després de l'operació**; no exigeix conéixer els atributs interns de la classe. Per exemple, pots consultar les places mitjançant `consultarPlaces()`. Una prova d'excepció **passa** quan es llança l'excepció esperada.

## Fase 3 — Executa i interpreta

1. Executa **tota la classe de proves** amb el botó verd d'IntelliJ.
2. Obri la terminal integrada, situa't a l'arrel del projecte (on hi ha `pom.xml`) i executa:

   ```bash
   mvn clean test
   ```

3. Comprova el resum de tests: quants s'han executat, quants han passat i si hi ha fallades o errors.
4. Conserva una captura amb la bateria **en verd** i l'evidència del resum Maven.
5. Revisa el directori `target/surefire-reports/`, on Maven guarda els informes de Surefire.

## Fase 4 — Detecta una regressió

Un test útil també ha de detectar quan algú introdueix un error en un programa que abans funcionava.

1. Després d'aconseguir la bateria verda, **canvia temporalment** a `TaquillaConcert.java` el preu de l'entrada general de **12** a **13**.
2. Executa novament la bateria i comprova si alguna prova detecta l'error.
3. Guarda una captura d'una prova fallida i explica en una o dues frases **què esperaves, què s'ha obtingut i per què**.
4. **Restaura el preu original (12 €)** i executa de nou totes les proves. El projecte final s'ha d'entregar amb el codi de producció restaurat.

Si cap prova detecta este canvi, revisa si realment has provat el preu de les entrades generals.

## Ampliació voluntària — Cobertura amb JaCoCo

Si el projecte inicial incorpora JaCoCo, executa:

```bash
mvn clean verify
```

Obri `target/site/jacoco/index.html`. Localitza una part no coberta i explica quin cas podries afegir per a comprovar-la. **No hi ha cap percentatge mínim obligatori**. Tindre el 100 % de cobertura no demostra, per si sol, que els tests siguen bons.

## Lliurament

Entrega a Aules:

1. **`pla-proves.docx`** completat abans de programar, amb 9 casos com a mínim i la justificació.
2. **`taquilla-concert-tests.zip`** amb el projecte Maven complet (`pom.xml`, `src/main` i `src/test`), sense `target/`, ni carpetes `.idea/` ni fitxers temporals.
3. **Evidències**: captura del resultat final verd d'IntelliJ/Maven i captura de la regressió fallida, juntament amb la breu explicació de la diferència entre l'esperat i l'obtingut. Les captures es poden afegir al ZIP en una carpeta `evidencies/`.

## Què es valorarà?

| Aspecte | Assolit | En procés | No assolit |
| --- | --- | --- | --- |
| **Pla de proves — RA3.b** | 9 casos coherents, variats i justificats, amb límits i resultats esperats clars. | Casos vàlids però incomplets, repetits o poc justificats. | No hi ha un pla verificable o els resultats esperats no estan definits. |
| **Proves de retorn — RA3.f** | Comprova correctament el preu total amb diferents escenaris. | Comprovacions parcials o amb alguna asserció incorrecta. | No comprova els imports o els tests no funcionen. |
| **Proves d'estat — RA3.f** | Comprova les places abans/després i l'efecte de les vendes. | Només comprova parcialment el canvi d'estat. | No verifica les places resultants. |
| **Excepcions — RA3.f** | Comprova tipus d'excepció i conservació de places en vendes rebutjades. | Comprova part de les excepcions o oblida l'estat. | No identifica els errors o no els prova correctament. |
| **Execució i evidències — RA3.g** | Bateria repetible des d'IntelliJ i Maven, amb regressió detectada i restaurada. | Execució o evidències incompletes. | No executa els tests ni acredita la regressió. |

> **Important:** el treball és **individual**. Es valorarà la qualitat de les decisions de prova i la correspondència amb el contracte, no únicament que aparega `BUILD SUCCESS`.

## Codi de producció que inclou el projecte inicial

Este fitxer es distribueix ja fet. No el presentes com a exercici de POO ni el deixes incomplet.

**`src/main/java/edu/iesmre/up4/TaquillaConcert.java`**

```java
package edu.iesmre.up4;

public class TaquillaConcert {
    private int placesDisponibles;

    public TaquillaConcert(int placesInicials) {
        if (placesInicials < 0) {
            throw new IllegalArgumentException("Les places inicials no poden ser negatives");
        }
        placesDisponibles = placesInicials;
    }

    public int consultarPlaces() {
        return placesDisponibles;
    }

    public int vendreEntrades(int quantitat, boolean entradaReduida) {
        if (quantitat <= 0) {
            throw new IllegalArgumentException("Cal comprar almenys una entrada");
        }
        if (quantitat > placesDisponibles) {
            throw new IllegalStateException("No queden prou places");
        }

        int preuUnitari;
        if (entradaReduida) {
            preuUnitari = 8;
        } else {
            preuUnitari = 12;
        }

        placesDisponibles = placesDisponibles - quantitat;
        return quantitat * preuUnitari;
    }
}
```

La capacitat inicial `0` és vàlida; la capacitat negativa és invàlida i es rebutja, però no exigeix als alumnes provar el constructor en els 9 casos obligatoris. Cada cas crea una instància nova. No hi ha arrays, col·leccions, fitxers, connexions externes, decimals, herència, mocks, `@ParameterizedTest`, interfícies ni patrons avançats.

## Classe de test inicial (sense solucions)

**`src/test/java/edu/iesmre/up4/TaquillaConcertTest.java`**

```java
package edu.iesmre.up4;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TaquillaConcertTest {
    // Escriu ací els teus casos de prova.
    // Recorda: 3 de retorn, 3 d'estat i 3 d'excepcions.
    // Cada prova ha de crear una TaquillaConcert nova.
}
```

No inclogues una bateria resolta dins del ZIP de l'alumnat. Si el professorat necessita una solució de verificació, guarda-la fora del directori publicat o en un espai privat, mai en un recurs enllaçat des de MkDocs.

## Configuració Maven del projecte inicial

El `pom.xml` inclou JDK 25, JUnit Jupiter **5.14.4**, Maven Compiler **3.16.0**, Surefire **3.6.1** i JaCoCo **0.8.16**. JaCoCo no aplica cap llindar de cobertura ni obliga a presentar un informe.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>edu.iesmre.up4</groupId>
    <artifactId>taquilla-concert</artifactId>
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
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.16</version>
                <executions>
                    <execution>
                        <goals><goal>prepare-agent</goal></goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>verify</phase>
                        <goals><goal>report</goal></goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

[Anterior: depuració](activitat-2-depuracio.md) · [Taller guiat](taller-guiat-junit-intellij-maven.md) · [Següent: dobles i incidències](activitat-4-dobles-incidencies.md) · [Índex](../../up4-proves.md)
