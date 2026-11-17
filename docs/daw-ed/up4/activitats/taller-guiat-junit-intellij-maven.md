---
hide:
  - navigation
---
# Taller guiat. Primeres proves unitàries amb JUnit 5 (IntelliJ IDEA i Maven)

**Mòdul:** Entorns de Desenvolupament · 1r DAW. **UP4:** Proves i verificació. **CA:** RA3.f (i introducció RA3.g). **Modalitat:** seguiment del professorat / autoaprenentatge amb presentació. **Duració orientativa:** 1 sessió.

> Aquest taller és preparatori i no és una Activitat 1 ni es qualifica per separat. Després faràs l’[Activitat 3](activitat-3-junit-automatitzacio.md) de manera autònoma.

## Objectiu

Aprendre a crear un projecte Java Maven, afegir JUnit Jupiter, preparar proves amb AAA i executar una bateria des d’IntelliJ IDEA i Maven. **Aquesta activitat és preparatòria; l’Activitat 3 serà autònoma.**

## Pas 1. Projecte nou (sense arquetips antics)

1. Obri IntelliJ IDEA → **New Project** → **Java**.
2. Nom: `up4-junit-guiada`. **Build system: Maven 3.9 o superior**. Tria JDK 25 o **Download JDK** si no el tens.
3. En Advanced Settings, `GroupId = edu.iesmre`, `ArtifactId = up4-junit-guiada`.
4. Fes clic en **Create**. Obri `pom.xml` a l’arrel del projecte: ha d’existir.
5. En **File → Project Structure → Project**, comprova **Project SDK = 25**. En **Settings → Build, Execution, Deployment → Build Tools → Maven → Runner**, selecciona **JRE = Project JDK (25)** o **JDK 25**. Els noms poden variar segons la versió d’IntelliJ.
6. Si executaràs Maven en terminal, comprova `mvn -version`, `java -version` i `javac -version`: la versió Java ha d’indicar **25**. El JDK del projecte i el JDK del Maven de la terminal no coincideixen automàticament. Si cal, configura `JAVA_HOME` i `PATH` abans de compilar.
7. Substitueix o ajusta el `pom.xml` per aquesta configuració canònica i prem **Load Maven Changes** o **Reload All Maven Projects**. Comprova que es descarrega JUnit 5.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>edu.iesmre</groupId>
    <artifactId>up4-junit-guiada</artifactId>
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

8. Comprova l’estructura estàndard Maven `src/main/java/` i `src/test/java/`. Si la carpeta de tests no existeix, crea `src/test/java` i confirma que IntelliJ la reconeix com a **Test Sources Root**.

Java 25 és necessari per a construir el projecte amb `maven.compiler.release=25`. El codi resultant no té per què executar-se en Java 17 o 21. Si apareix `release version 25 not supported`, revisa el JDK real que utilitza Maven; no canvies `maven.compiler.release` a 21 o 17.

## Pas 2. Classe que provarem

Crea el paquet `edu.iesmre.up4` dins de `src/main/java` i la classe `Calculadora.java`:

```java
package edu.iesmre.up4;

public class Calculadora {
    public int sumar(int a, int b) { return a + b; }
    public int restar(int a, int b) { return a - b; }
    public double dividir(double dividend, double divisor) {
        if (divisor == 0) {
            throw new IllegalArgumentException("El divisor no pot ser zero");
        }
        return dividend / divisor;
    }
}
```

Abans de provar: `sumar(3,5)` ha de retornar `8`; `dividir(7,2)` ha de retornar `3.5`; dividir per zero ha de llançar `IllegalArgumentException`.

## Pas 3. Crear la classe de tests

Situa el cursor sobre el nom `Calculadora` i prem `Alt + Enter → Create Test` (o genera manualment `CalculadoraTest` a `src/test/java/edu/iesmre/up4`). Selecciona **JUnit 5**, nom **CalculadoraTest**. Si IntelliJ mostra **Fix** perquè falta la biblioteca, fes clic, revisa `pom.xml` i **recarrega el projecte Maven**. Revisa que els imports siguen `org.junit.jupiter.api.Test` i `org.junit.jupiter.api.Assertions.*`, i no els de JUnit 4.

## Pas 4. Escriure la primera prova amb AAA

```java
package edu.iesmre.up4;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculadoraTest {
    @Test
    void sumarDosEnters() {
        // Arrange
        Calculadora calculadora = new Calculadora();
        int a = 3;
        int b = 5;
        // Act
        int resultat = calculadora.sumar(a, b);
        // Assert
        assertEquals(8, resultat);
    }
}
```

Explica: `@Test` identifica un cas, `assertEquals(esperat, obtingut)` compara dos valors. Executa amb el triangle verd de la línia del test. En el panell `Run`, comprova **1 test passed**.

## Pas 5. Ampliar la bateria fins a 5 tests

Afig **dins de `CalculadoraTest` i fora del primer mètode** els quatre següents:

```java
@Test
void sumarAmbNegatius() {
    Calculadora calculadora = new Calculadora();
    assertEquals(2, calculadora.sumar(-3, 5));
}

@Test
void restarDosEnters() {
    Calculadora calculadora = new Calculadora();
    assertEquals(4, calculadora.restar(10, 6));
}

@Test
void dividirAdmetDecimals() {
    Calculadora calculadora = new Calculadora();
    assertEquals(3.5, calculadora.dividir(7, 2));
}

@Test
void dividirEntreZeroLlançaExcepcio() {
    Calculadora calculadora = new Calculadora();
    assertThrows(IllegalArgumentException.class,
            () -> calculadora.dividir(7, 0));
}
```

Explica que `assertThrows` **passa** si s’obté l’excepció esperada. Des del triangle verd al costat de la classe executa **tots cinc tests** i comprova que passen.

## Pas 6. Executar també amb Maven

Abans, revisa `mvn -version`: si executes el Maven de la terminal, la línia **Java version** ha d’indicar **25**. Des de la finestra Maven d’IntelliJ, revisa **Maven → Runner → JRE** si cal. Un error `release version 25 not supported` sol indicar que Maven no està usant JDK 25.

Des de la terminal integrada d’IntelliJ, situat en la carpeta que conté `pom.xml`, executa:

```bash
mvn clean test
```

O obri la **finestra Maven** d’IntelliJ (`View → Tool Windows → Maven`) i executa `Lifecycle → test`. Observa `Tests run: 5`, `Failures: 0`, `Errors: 0` i `BUILD SUCCESS`; els informes de Maven Surefire s’ubiquen a `target/surefire-reports/`.

## Pas 7. Provocar una fallada, llegir-la i reparar-la

1. Modifica temporalment `sumar` de `return a + b;` a `return a - b;`.
2. Executa la classe de tests; veuràs fallades a les dues proves de suma.
3. A `sumarDosEnters`, comprova: **esperat `8`, obtingut `-2`**. Investiga el codi, no modifiques l’assercció per a forçar el verd.
4. Restaura `return a + b;`.
5. Executa la bateria completa amb el triangle verd i amb `mvn test`. El resultat final ha de ser **5/5 passed**.

## Comprovació final i connexió amb l’activitat autònoma

L’alumnat ha de saber explicar les fases AAA, la funció de `@Test`, la diferència entre `assertEquals` i `assertThrows`, i la diferència entre executar un test des de l’IDE i executar tota la bateria amb Maven. Després passarà a l’[Activitat 3](activitat-3-junit-automatitzacio.md), en què haurà de **decidir primer els casos** per si mateix.

**Materials:** [teoria JUnit de la UP4](../04-proves-unitaries-junit.md), [Activitat 3](activitat-3-junit-automatitzacio.md) i el [projecte Maven de suport](recursos/taller-guiat-junit-intellij-maven/pom.xml). La presentació `UP4_Guia_JUnit5_IntelliJ_Maven_IESMRE.pptx` encara no està incorporada al repositori.

[Anterior: depuració](activitat-2-depuracio.md) · [Activitat 3](activitat-3-junit-automatitzacio.md) · [Índex](../../up4-proves.md)
