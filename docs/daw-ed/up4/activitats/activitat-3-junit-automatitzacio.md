---
hide:
  - navigation
---
# Activitat 3. Disseny i implementació de proves unitàries amb JUnit 5

**Mòdul:** Entorns de Desenvolupament · 1r DAW. **RA3:** verifica el funcionament dels programes. **CA principals:** RA3.b i RA3.f. **Entorn:** IntelliJ IDEA + **Maven** 3.9 o superior + JDK 25 + JUnit 5 (Jupiter). **Modalitat:** individual i autònoma, després del [taller guiat](taller-guiat-junit-intellij-maven.md). **Duració orientativa:** 1–2 sessions.

## 1. Situació i objectiu

Un equip et facilita dues classes Java amb les regles de negoci ja definides. La teua feina **no és escriure aquestes classes** ni canviar-les: has de **planificar una bateria de casos de prova, implementar-la en JUnit 5 i comprovar que protegeix els contractes**. El professorat no et dona la solució dels tests.

Treballaràs obligatòriament tres tipus de prova:

| Tipus | Què observes? | Assercions habituals |
|---|---|---|
| **Retorn** | El valor que torna el mètode | `assertEquals`, `assertTrue`, `assertFalse` |
| **Estat** | L’estat de l’objecte abans i després d’una operació | `assertEquals` sobre el saldo |
| **Excepcions** | Rebuig de valors o operacions no permeses | `assertThrows` i, si cal, comprovar que l’estat no canvia |

## 2. Prepara un projecte Maven a IntelliJ

1. `New Project → Java → Build system: Maven` i `JDK 25`. Comprova en **File → Project Structure → Project** que **Project SDK = 25** i en **Settings → Build, Execution, Deployment → Build Tools → Maven → Runner** que **JRE = Project JDK (25)** o **JDK 25**. Els noms dels menús poden variar segons la versió d’IntelliJ.
2. `GroupId = edu.iesmre`, `ArtifactId = up4-junit-autonoma`.
3. Actualitza el `pom.xml` amb el de l’[Annex C](#annex-c-configuracio-canonica-del-pomxml). Sincronitza Maven amb **Load Maven Changes** o **Reload All Maven Projects**.
4. Si executaràs Maven des de la terminal, comprova `mvn -version`, `java -version` i `javac -version`: la línia **Java version** de Maven ha d’indicar **25**. El JDK d’IntelliJ i el JDK de la terminal no coincideixen automàticament; configura `JAVA_HOME` i `PATH` si cal.
5. Crea `CompteBancari.java` i `ValidadorCorreu.java` dins de `src/main/java/edu/iesmre/up4/`.
6. Crea `CompteBancariTest.java` i `ValidadorCorreuTest.java` dins de `src/test/java/edu/iesmre/up4/` **després de dissenyar el teu pla**.

També pots descarregar el [`pom.xml` inicial](recursos/activitat-3-junit/pom.xml), [`CompteBancari.java`](recursos/activitat-3-junit/src/main/java/edu/iesmre/up4/CompteBancari.java) i [`ValidadorCorreu.java`](recursos/activitat-3-junit/src/main/java/edu/iesmre/up4/ValidadorCorreu.java). El recurs no inclou tests resolts: els has de crear després del pla.

Java 25 és necessari per a construir el projecte amb `maven.compiler.release=25`; el codi resultant no té per què executar-se en Java 17 o 21. Si apareix `release version 25 not supported`, revisa quin JDK real està utilitzant Maven. No canvies el `release` a 21 o 17.

Estructura esperada:

```text
up4-junit-autonoma/
├── pom.xml
├── pla-proves.md
├── respostes.md
└── src/
    ├── main/java/edu/iesmre/up4/
    │   ├── CompteBancari.java
    │   └── ValidadorCorreu.java
    └── test/java/edu/iesmre/up4/
        ├── CompteBancariTest.java
        └── ValidadorCorreuTest.java
```

## 3. Codi que et proporciona el professorat (no el modifiques)

**`CompteBancari.java`:**

```java
package edu.iesmre.up4;

public class CompteBancari {
    private double saldo;

    public CompteBancari(double saldoInicial) {
        if (saldoInicial < 0) {
            throw new IllegalArgumentException("Saldo inicial no vàlid");
        }
        saldo = saldoInicial;
    }

    public void ingressar(double importOperacio) {
        validarImport(importOperacio);
        saldo += importOperacio;
    }

    public void retirar(double importOperacio) {
        validarImport(importOperacio);
        if (importOperacio > saldo) {
            throw new IllegalStateException("Saldo insuficient");
        }
        saldo -= importOperacio;
    }

    public double saldo() { return saldo; }

    private void validarImport(double importOperacio) {
        if (importOperacio <= 0) {
            throw new IllegalArgumentException("L'import ha de ser positiu");
        }
    }
}
```

**Contracte del compte bancari:** el saldo inicial pot ser zero o positiu, però no negatiu. El mètode `saldo()` retorna el saldo actual. `ingressar(import)` augmenta el saldo només per a imports **estrictament positius**. `retirar(import)` redueix el saldo únicament si l’import és **estrictament positiu** i no supera el saldo disponible. Un saldo inicial negatiu o un import no positiu llança `IllegalArgumentException`; retirar més saldo del disponible llança `IllegalStateException`. **Una operació rebutjada no ha de modificar el saldo**. Model simplificat: no hi ha persistència ni transaccions reals.

**`ValidadorCorreu.java`:**

```java
package edu.iesmre.up4;

public class ValidadorCorreu {
    public boolean esValid(String correu) {
        if (correu == null || correu.isBlank()) { return false; }
        int arrova = correu.indexOf('@');
        return arrova > 0
                && arrova == correu.lastIndexOf('@')
                && arrova < correu.length() - 1
                && correu.indexOf('.', arrova) > arrova + 1;
    }
}
```

**Contracte del validador:** valor `null`, buit o només espais és invàlid; ha d’haver-hi **exactament una `@`**, text abans i després i un punt després de `@` amb almenys un caràcter entre `@` i el punt. Comportament didàctic: `ana@example.com` i `a@b.c` es consideren vàlids; `sensearrova` i `a@b` no. **No és un validador complet segons les RFC.**

## 4. Fase 1: decideix **abans de codificar** quines proves faràs

Estudia els dos contractes. Redacta `pla-proves.md` amb **almenys 10 casos reproduïbles**:

- 3 de **retorn** (valors produïts per mètodes).
- 3 d’**estat** (canvis de saldo, incloent-hi estats abans/després).
- 3 d’**excepcions** (tipus concret d’excepció i, si correspon, estat inalterat).
- 1 cas **límit** addicional (pot ser de qualsevol grup, però indica per què és de frontera).

Els casos els decideixes tu a partir dels contractes explícits. No reps una bateria de tests resolta. Usa aquesta taula buida i emplenable:

| ID | Classe i mètode | Tipus | Dades/estat inicial | Acció | Resultat esperat | Justificació |
|---|---|---|---|---|---|---|
| P01 | … | … | … | … | … | … |
| P02 | … | … | … | … | … | … |

Cada fila ha de contenir dades **concretes** i una expectativa derivada del contracte. No s’accepten formulacions genèriques com «provar que funciona». Les 10 proves són un **mínim**, no un màxim.

## 5. Fase 2: implementa els casos del pla en JUnit 5

- Crea les dues classes `CompteBancariTest` i `ValidadorCorreuTest` sota `src/test/java/edu/iesmre/up4/`.
- Implementa **un mètode `@Test` independent per cada fila** del pla. Posa-li un nom descriptiu.
- Aplica AAA quan ajude a fer la prova llegible. Usa `assertEquals`, `assertTrue`, `assertFalse`, `assertThrows` segons cada contracte.
- Les proves d’estat han d’**observar efectivament el saldo**, no només que no es llance una excepció.
- Si es rebutja una operació, comprova també l’estat final quan siga rellevant.
- Cada test ha de ser independent; no depengues d’un ordre d’execució.
- No modifiques `CompteBancari` ni `ValidadorCorreu` per a fer passar un test.
- **No inclogues cap solució completa de tests en l’enunciat**; el disseny i les assercions formen part de l’avaluació.

## 6. Fase 3: executa, registra i interpreta

1. Executa cada classe de tests amb els triangles verds d’IntelliJ.
2. Executa també tota la bateria amb `mvn clean test` des de l’arrel del projecte o des de **Maven → Lifecycle → test**.
3. Obri el resum dels tests d’IntelliJ i comprova que coincideixen amb el pla.
4. Conserva una **captura del panell de proves** i, si s’ha executat la prova amb Maven, el resum de Surefire `target/surefire-reports/` (no cal incloure tota la carpeta `target` al ZIP).
5. Afig al pla una columna `Resultat executat (Passa/Falla)`.
6. Escriu `respostes.md` amb respostes breus a aquestes preguntes: quina diferència hi ha entre prova de retorn i d’estat? Per què una excepció no sempre basta per a validar el comportament complet? Quins dos casos del pla donen millor cobertura i per què? Què aporta poder repetir la bateria amb Maven?

## 7. Lliurament en Aules

Lliura un únic ZIP `UP4_JUnit_Autonoma_NomCognoms.zip` amb **`pom.xml`**, codi font de les dues classes proporcionades, les dues classes de tests creades, **`pla-proves.md`** amb la planificació i resultats, **`respostes.md`** i la captura de l’execució. No cal entregar `.idea/`, `target/` o `.class` (si inclous report Surefire, tria només el document representatiu). La pràctica serà avaluable.

## 8. Rúbrica de tres nivells

| Aspecte | Pes | Assolit | En procés | No assolit |
|---|---:|---|---|---|
| Pla de proves i justificació | 25 % | Casos concrets, independents, 10+ i límits ben justificats | Parcial o amb expectatives vagues | No hi ha pla útil |
| Proves de retorn | 20 % | Valors contrastats correctament amb assercions adequades | Alguns casos mal plantejats | No comprova els retorns |
| Proves d’estat | 20 % | Comprova canvis i invariants del saldo | Comprova només part de l’estat | No observa l’estat |
| Proves d’excepcions | 25 % | Tipus concret i invariants després del rebuig | Falta cobertura o detall | No comprova correctament excepcions |
| Execució, Maven i evidències | 10 % | Tests independents, `mvn test` satisfactori i evidències | Alguns errors o evidències incompletes | No es poden executar o no hi ha evidències |

**Recorda:** la rúbrica avalua la qualitat de les proves, no únicament que la barra aparega verda.

## Annex C. Configuració canònica del `pom.xml`

Usa aquest `pom.xml` per al projecte. En l’Activitat 3 l’`artifactId` és `up4-junit-autonoma`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>edu.iesmre</groupId>
    <artifactId>up4-junit-autonoma</artifactId>
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

`scope=test` limita JUnit al classpath de proves i evita incloure’l en el programa final. Surefire connecta Maven amb la plataforma de proves durant la fase `test` i deixa els informes en `target/surefire-reports/`.

[Anterior: depuració](activitat-2-depuracio.md) · [Següent: dobles i incidències](activitat-4-dobles-incidencies.md) · [Índex](../../up4-proves.md)
