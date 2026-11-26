---
hide:
  - navigation
---
# Activitat 3. Posem a prova la taquilla d'un concert

**Mòdul:** Entorns de Desenvolupament · **UP4:** Proves i verificació
**Criteris treballats:** RA3.b (casos de prova), RA3.f (proves unitàries) i RA3.g (automatització)
**Entorn:** IntelliJ IDEA · Maven · JDK 25 · JUnit Jupiter

## Objectius

L'objectiu és comprovar el funcionament d'una aplicació que ja està programada. **No has de crear el programa de la taquilla ni aprendre a programar objectes:** copiaràs la classe proporcionada i et centraràs en **pensar, escriure i executar proves unitàries**.

Aprendràs a identificar tres tipus de comprovacions:

- **Retorn:** quin preu ens torna una venda?
- **Estat:** quantes places queden després d'una venda?
- **Excepcions:** què passa si intentem efectuar una venda incorrecta? Queden les mateixes places?

## 1. Situació: una taquilla de concert

Una associació organitza un concert amb places limitades. L'aplicació ven entrades i evita vendre'n més de les disponibles.

| Regla | Comportament que ha de complir el programa |
| --- | --- |
| R1 | La taquilla comença amb un nombre de places indicat en crear-la. Habitualment, utilitzarem **30 places**. |
| R2 | Una entrada **general** costa **12 €**. |
| R3 | Una entrada **reduïda** costa **8 €**. |
| R4 | En una venda correcta, el mètode retorna **quantitat × preu unitari**. |
| R5 | Cada venda correcta descompta del total de places la quantitat venuda. |
| R6 | Vendre **0 entrades** o una quantitat **negativa** provoca `IllegalArgumentException`. |
| R7 | Vendre més entrades de les disponibles provoca `IllegalStateException`. |
| R8 | Una venda rebutjada **no canvia** el nombre de places disponibles. |
| R9 | Es poden vendre **exactament totes** les places disponibles; en eixe cas, en queden 0. |

Només utilitzaràs estes operacions:

```java
TaquillaConcert taquilla = new TaquillaConcert(30);
int importTotal = taquilla.vendreEntrades(quantitat, entradaReduida);
int places = taquilla.consultarPlaces();
```

`entradaReduida` és un valor `boolean`: `true` per a entrada reduïda i `false` per a entrada general. **No necessites entendre com està implementada la classe per dins**, només què fa cada operació.

## 2. Crea el projecte des de zero amb IntelliJ i Maven

**No has de descarregar cap projecte inicial. El crearàs tu mateix/a.**

1. Obri **IntelliJ IDEA** i selecciona **New Project** (o `File > New > Project`).
2. Tria **Java** i selecciona **Maven** com a *build system* (segons la versió d'IntelliJ, Maven pot aparéixer com a tipus de projecte).
3. Selecciona **JDK 25**. Si no el tens configurat, utilitza l'opció d'afegir o descarregar el JDK que mostra IntelliJ.
4. Dona al projecte el nom **`taquilla-concert`** i, si el formulari ho demana, utilitza `edu.iesmre.up4` com a **GroupId** i `taquilla-concert` com a **ArtifactId**. No és necessari seleccionar cap arquetip.
5. Quan s'òbriga el projecte, localitza el fitxer **`pom.xml`** a l'arrel. Substitueix-ne el contingut pel bloc complet de l'apartat 3.
6. Comprova que existeixen les carpetes `src/main/java` i `src/test/java`. Si no existeixen, crea-les. Si cal, marca-les en IntelliJ com a *Sources Root* i *Test Sources Root*, respectivament.
7. Crea el paquet **`edu.iesmre.up4`** en les dues carpetes. Després crea les classes indicades als apartats 4 i 5.
8. Espera que IntelliJ sincronitze Maven. Si et pregunta si vols carregar els canvis del `pom.xml`, accepta. Revisa que el **Project SDK** i el **JDK utilitzat per Maven** siguen compatibles amb la compilació per a Java 25.

L'estructura final haurà de ser esta:

```text
taquilla-concert/
├── pom.xml
└── src/
    ├── main/java/edu/iesmre/up4/
    │   └── TaquillaConcert.java
    └── test/java/edu/iesmre/up4/
        └── TaquillaConcertTest.java
```

## 3. Copia el fitxer `pom.xml`

**Substitueix tot el contingut** de `pom.xml` pel codi següent. Maven s'encarregarà de descarregar la dependència de JUnit i els plugins necessaris.

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
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>verify</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

En el `pom.xml`, `junit-jupiter` és la biblioteca amb què escriurem proves; `maven-compiler-plugin` compila Java 25; `maven-surefire-plugin` executa les proves. JaCoCo permetrà consultar opcionalment la cobertura del codi.

## 4. Copia la classe que provarem: `TaquillaConcert.java`

En el paquet `edu.iesmre.up4`, dins de `src/main/java`, crea la classe **`TaquillaConcert`** i pega **tot** este codi. **No el modifiques** per a fer passar les proves.

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

## 5. Crea `TaquillaConcertTest.java`

En el **mateix paquet** `edu.iesmre.up4`, però dins de `src/test/java`, crea la classe de prova **`TaquillaConcertTest`** i pega este codi inicial:

```java
package edu.iesmre.up4;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class TaquillaConcertTest {
    // Escriu ací els teus tests després de completar la fitxa.
    // Com a mínim: 3 de retorn, 3 d'estat i 3 d'excepcions.
    // Crea una taquilla nova dins de cada mètode @Test.
}
```

La classe està deliberadament **sense tests resolts**. Els implementaràs quan hages decidit què vols comprovar. Si encara no tens cap mètode `@Test`, `mvn test` pot acabar sense executar cap prova: això **no vol dir que hages verificat res**.

## 6. Abans de programar: completa la fitxa Word d'Aules

En la tasca d'**Aules** trobaràs adjunta la **Fitxa de planificació de proves** en format Word. **Descarrega-la d'Aules, emplena-la i conserva-la per al lliurament.** No has de crear cap fitxer Markdown amb el pla de proves.

Dissenya **com a mínim 9 casos** diferents:

| Tipus | Quantitat mínima | Què has de decidir abans del test? |
| --- | ---: | --- |
| **Retorn** | 3 | Nombre d'entrades, tipus i import total esperat. Inclou almenys una venda general i una de reduïda. |
| **Estat** | 3 | Places inicials, venda o vendes que faràs i places finals esperades. |
| **Excepcions** | 3 | Venda incorrecta, tipus d'excepció esperada i places que han de continuar disponibles. |

Per a cada cas indica: **identificador i nom descriptiu, regla (R1–R9), situació inicial, acció, resultat esperat i justificació**. Pots usar casos límit, però no comptes com a casos diferents dos tests que comproven exactament la mateixa situació.

**La fitxa s'ha de completar abans d'escriure els mètodes `@Test`.**

## 7. Escriu les proves JUnit

A partir de la fitxa, implementa en `TaquillaConcertTest.java` almenys **9 mètodes anotats amb `@Test`**, un per a cada cas dissenyat. Cada mètode ha de tindre un nom descriptiu.

En cada prova aplica **Arrange–Act–Assert**:

1. **Arrange:** prepara una taquilla nova amb les places necessàries.
2. **Act:** executa `vendreEntrades(...)` i/o consulta les places.
3. **Assert:** compara el resultat real amb el resultat esperat.

Recorda estes ferramentes:

```java
assertEquals(valorEsperat, valorReal);
assertThrows(TipusExcepcio.class, () -> accioQueHaDeFallar());
```

Per a les proves d'**estat**, utilitza `consultarPlaces()` per a saber quantes places queden. Per a les vendes rebutjades, comprova **tant l'excepció com que les places no hagen canviat**.

**Important:** cada test ha de crear la seua pròpia taquilla; no faces que depenga de les vendes efectuades per un altre test. No canvies les regles ni el codi productiu per aconseguir resultats verds.

## 8. Executa els tests

1. Executa els tests des del **botó verd d'IntelliJ** al costat de la classe o dels mètodes `@Test`.
2. Obri la terminal integrada, situa't a la carpeta que conté `pom.xml` i executa:

   ```bash
   mvn clean test
   ```

3. Comprova quants tests s'han executat i quants han passat. Els informes de Maven es guarden en `target/surefire-reports/`.
4. Guarda **una captura** amb les proves en verd i el recompte de proves executades.

## 9. Comprova que els tests detecten un error

1. Quan la bateria estiga en verd, canvia **temporalment** a `TaquillaConcert.java` el preu general de **12** a **13**.
2. Torna a executar `mvn test`. Almenys una prova de retorn d'entrada general hauria de fallar.
3. Guarda una captura del test roig i explica breument el valor esperat, l'obtingut i la causa.
4. **Restaura el valor 12**, torna a executar les proves i comprova que tots els tests tornen a passar. El projecte s'ha d'entregar amb el preu correcte.

## 10. Ampliació voluntària: cobertura del codi

El `pom.xml` ja inclou JaCoCo. Si vols comprovar quines parts del programa han executat els tests:

```bash
mvn clean verify
```

Obri `target/site/jacoco/index.html` en un navegador. Explica una part del codi que no estiga coberta i quina prova hi afegiries. **No hi ha cap percentatge de cobertura mínim obligatori.**

## 11. Lliurament a Aules

Entrega **en la mateixa tasca d'Aules**:

1. **Fitxa Word** completada amb el pla de proves (almenys 9 casos).
2. **ZIP del projecte que has creat tu**, amb `pom.xml` i `src/main/java` i `src/test/java`; no inclogues `target/`, `.idea/` ni altres carpetes temporals.
3. **Evidències**: captura de l'execució final verda, captura de la regressió fallida i explicació breu de la fallada.

### Criteris que es valoraran

| Aspecte | Evidència esperada |
| --- | --- |
| **Disseny — RA3.b** | Nou casos ben triats i justificats en la fitxa Word. |
| **Retorn — RA3.f** | Comprovació dels imports, incloent-hi entrades generals i reduïdes. |
| **Estat — RA3.f** | Comprovació de les places restants després de vendre. |
| **Excepcions — RA3.f** | Tipus d'excepció adequat i places sense canvis en operacions rebutjades. |
| **Execució — RA3.g** | Tests independents executables amb IntelliJ i Maven i detecció d'una regressió. |

> **Recorda:** `BUILD SUCCESS` només confirma que les comprovacions executades han passat. Per això és important **triar bons casos** i indicar clarament què esperes en cadascun.

[Anterior: depuració](activitat-2-depuracio.md) · [Següent: registre d'incidències](activitat-4-dobles-incidencies.md) · [Índex](../../up4-proves.md)
