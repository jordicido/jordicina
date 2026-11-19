---
hide:
  - navigation
---
# 4. Proves unitàries amb JUnit Jupiter

> **CA:** RA3.f · **Sessions:** 6 i 7

## Què aprendràs

Una prova unitària comprova una unitat menuda —habitualment un mètode o una classe— en unes condicions controlades. Aprendràs l’anatomia d’un test amb JUnit Jupiter, el patró Arrange–Act–Assert, les assercions més habituals i la configuració d’un projecte Maven amb IntelliJ IDEA. La depuració de la UP4 continua fent-se amb VS Code en el bloc corresponent.

## Què vol dir unitària

En una prova unitària volem que la causa d’una fallada siga fàcil de localitzar. Per això reduïm l’abast, evitem xarxa i dades aleatòries i usem entrades conegudes. “Unitària” no vol dir “programa curt” ni “prova manual”: indica la unitat que s’observa i l’aïllament que procurem.

El cicle és: preparar l’estat, executar el mètode i comparar amb una expectativa.

```mermaid
flowchart LR
  A[Arrange\npreparar objecte i dades] --> B[Act\ncridar el mètode]
  B --> C[Assert\ncomparar expectativa i resultat]
  C --> D{Coincideix?}
  D -->|Sí| E[Pass]
  D -->|No| F[Fail amb evidència]
```

![Anatomia d’un test AAA](img/04-test-aaa.svg)

*Figura 1. L’estructura AAA separa preparació, acció i verificació; si es barregen, costa saber què ha provocat la fallada.*

## Projecte Maven amb IntelliJ IDEA i JUnit Jupiter

En IntelliJ IDEA, crea el projecte amb **New Project → Java → Build system: Maven**. Tria **JDK 25** o **Download JDK** si encara no està instal·lat, i indica el nom i les coordenades del projecte, per exemple `GroupId = edu.iesmre` i `ArtifactId = up4-junit-guiada`. No uses un projecte amb **Build system: IntelliJ** sense Maven ni els arquetips antics que poden generar Java 7 i JUnit 4.

La distribució estàndard és:

```text
up4-junit-guiada/
├── pom.xml
└── src/
    ├── main/java/edu/iesmre/up4/Calculadora.java
    └── test/java/edu/iesmre/up4/CalculadoraTest.java
```

El `pom.xml` canònic per a les pràctiques és aquest:

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

La dependència amb `scope=test` només està disponible per a compilar i executar els tests; no s’inclou com a dependència del programa final. Surefire connecta Maven amb la plataforma de proves durant la fase `test` i escriu els informes en `target/surefire-reports/`. Mantín Maven **3.9 o superior**, JUnit Jupiter **5.14.4**, Maven Compiler Plugin **3.16.0** i Maven Surefire Plugin **3.6.1**. Evita `maven.compiler.source` i `maven.compiler.target` antics del quickstart.

### Coordinar els JDK

Configurar el SDK del projecte a IntelliJ no garanteix per si sol que Maven utilitze el mateix JDK. Revisa les dues configuracions:

1. En **File → Project Structure → Project**, comprova **SDK = 25**. Si no està instal·lat, usa **Download JDK** i tria Java 25.
2. En **Settings → Build, Execution, Deployment → Build Tools → Maven → Runner**, selecciona **JRE: Project JDK (25)** o **JDK 25**. Els noms exactes poden variar segons la versió d’IntelliJ.
3. Si executes Maven des de la terminal, comprova `mvn -version`: la línia **Java version** ha d’indicar **25**. Comprova també `java -version` i `javac -version`. Si la terminal usa un JDK diferent, configura `JAVA_HOME` i `PATH` abans de compilar.
4. Si apareix `release version 25 not supported`, revisa quin JDK real està utilitzant Maven. No canvies `maven.compiler.release` a 21 o 17.

Java 25 és necessari per a construir el projecte amb `maven.compiler.release=25`; el codi resultant no té per què executar-se en Java 17 o 21.

## Exemple A: `Calculadora`

Primer definim el comportament: sumar i restar tornen el resultat matemàtic; dividir usa decimals i llança `IllegalArgumentException` si el divisor és zero.

```java
package edu.iesmre.up4;

public class Calculadora {
    public int sumar(int a, int b) {
        return a + b;
    }

    public int restar(int a, int b) {
        return a - b;
    }

    public double dividir(double dividend, double divisor) {
        if (divisor == 0) {
            throw new IllegalArgumentException("El divisor no pot ser zero");
        }
        return dividend / divisor;
    }
}
```

El test mostra AAA, retorn i excepció:

```java
package edu.iesmre.up4;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class CalculadoraTest {
    private final Calculadora calculadora = new Calculadora();

    @Test
    void sumarDosEnters() {
        // Arrange
        int primer = 3;
        int segon = 5;

        // Act
        int resultat = calculadora.sumar(primer, segon);

        // Assert
        assertEquals(8, resultat);
    }

    @Test
    void dividirAdmetDecimals() {
        double resultat = calculadora.dividir(7, 2);

        assertEquals(3.5, resultat);
    }

    @Test
    void dividirEntreZeroLlançaExcepcio() {
        assertThrows(IllegalArgumentException.class,
                () -> calculadora.dividir(7, 0));
    }
}
```

`assertEquals(8, resultat)` no comprova que el mètode “sembla correcte”: comprova exactament que `resultat` és 8. `assertThrows` comprova el tipus d’excepció; no convé usar una expectativa massa ampla com `Exception.class` si el contracte defineix una excepció més concreta.

Per als decimals, una comparació amb tolerància pot ser apropiada quan la representació de coma flotant ho requereix. En aquest exemple `3.5` és representable exactament, però en altres operacions pot caldre `assertEquals(esperat, real, delta)`.

## Crear el test des d’IntelliJ

Situa el cursor sobre `Calculadora`, prem **Alt + Enter → Create Test**, selecciona **JUnit 5** i posa-li el nom `CalculadoraTest`. IntelliJ ha de crear-lo sota `src/test/java/edu/iesmre/up4`. Si es mostra **Fix** perquè falta la biblioteca, deixa que IntelliJ incorpore la dependència al `pom.xml`, conserva les versions canòniques anteriors i sincronitza Maven amb **Load Maven Changes** o **Reload All Maven Projects**. `src/test/java` és la carpeta de tests del projecte Maven i no s’ha de confondre amb `src/main/java`.

## Les assercions essencials

| Assertion | Què comprova | Exemple |
| --- | --- | --- |
| `assertEquals(esperat, real)` | Igualtat segons el tipus. | `assertEquals(8, suma)`. |
| `assertTrue(condició)` | Que una condició siga certa. | `assertTrue(correu.esValid())`. |
| `assertFalse(condició)` | Que una condició siga falsa. | `assertFalse(validador.esValid(""))`. |
| `assertNotNull(valor)` | Que no siga `null`. | `assertNotNull(usuari)`. |
| `assertThrows(Tipus.class, executable)` | Que una acció llance el tipus indicat. | Dividir entre zero. |

No uses `assertTrue(resultat == 8)` quan `assertEquals(8, resultat)` explica millor què esperaves. Un missatge opcional pot indicar el context: `assertEquals(8, resultat, "suma de 3 i 5")`.

## Provar retorns, estat i excepcions

No totes les unitats es comporten igual. Un mètode pur rep dades i torna un valor, com `sumar`. Un mètode amb estat modifica un objecte, com `ingressar` en un compte. En aquest segon cas, el test ha de descriure l’estat inicial i l’estat final: abans de retirar hi ha 100 €, després n’hi ha 65 €. Si només comproves que no hi ha excepció, podries deixar passar una implementació que no modifica res.

Les excepcions també formen part del contracte. Cal decidir abans d’escriure la prova si un import invàlid retorna `false`, torna `null` o llança una excepció. No escrigues el test a partir del que “casualment” fa la primera implementació: el test ha de protegir el comportament que s’ha decidit. Per això l’exemple de `CompteBancari` separa `IllegalArgumentException` per a l’import i `IllegalStateException` per al saldo.

Quan una asserció falla, llegeix-la com una comparació: quin valor esperava JUnit, quin valor ha rebut i en quina línia. Una fallada en `assertEquals` pot ser un defecte del programa, una expectativa incorrecta o una dada preparada amb un tipus diferent. En una prova unitària no intentes solucionar-ho canviant l’assertion fins que passe; primer confirma el contracte i després decideix quin dels dos costats està malament.

## Exemple B: `CompteBancari`

Decisions del model: l’ingrés exigeix un import estrictament positiu; la retirada exigeix un import positiu i saldo suficient; si no es compleix, llança `IllegalArgumentException` per a imports incorrectes o `IllegalStateException` per a saldo insuficient. No hi ha persistència ni moneda real.

```java
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

    public double saldo() {
        return saldo;
    }

    private void validarImport(double importOperacio) {
        if (importOperacio <= 0) {
            throw new IllegalArgumentException("L'import ha de ser positiu");
        }
    }
}
```

Una prova ha d’observar l’estat abans i després, i també les regles de rebuig:

```java
@Test
void retirarActualitzaElSaldo() {
    CompteBancari compte = new CompteBancari(100);

    compte.retirar(35);

    assertEquals(65, compte.saldo());
}

@Test
void noPermetRetiradaSuperiorAlSaldo() {
    CompteBancari compte = new CompteBancari(20);

    assertThrows(IllegalStateException.class, () -> compte.retirar(21));
    assertEquals(20, compte.saldo());
}
```

El segon test comprova també que el rebuig no modifica l’estat. Això evita una implementació que llance l’excepció però reste abans d’adonar-se del problema.

## Exemple C: `ValidadorCorreu`

Aquest validador és **simplificat i educatiu**. Només exigeix un text no buit, una única `@`, text abans i després, i un punt després de `@`. No és una validació completa de RFC ni substitueix una política real de confirmació de correu.

```java
public class ValidadorCorreu {
    public boolean esValid(String correu) {
        if (correu == null || correu.isBlank()) {
            return false;
        }
        int arrova = correu.indexOf('@');
        return arrova > 0
                && arrova == correu.lastIndexOf('@')
                && arrova < correu.length() - 1
                && correu.indexOf('.', arrova) > arrova + 1;
    }
}
```

Podem provar un cas vàlid (`ana@example.com`), un sense arrova i un amb domini incomplet. La frontera és útil perquè `a@b.c` és acceptat per aquesta política, mentre que `a@b` no ho és. Explicitar el contracte evita presentar una expressió regular didàctica com si cobrira tots els correus existents.

## Tests independents i `@BeforeEach`

Cada test ha de poder executar-se sol. No depengues que un test anterior haja creat dades, ni uses l’hora del sistema, fitxers temporals compartits o ordre d’execució. `@BeforeEach` pot reduir duplicació quan prepara un objecte senzill:

```java
private Calculadora calculadora;

@BeforeEach
void preparar() {
    calculadora = new Calculadora();
}
```

No amagues una preparació important en un mètode immens. El nom del test ha d’explicar la conducta: `noPermetRetiradaSuperiorAlSaldo` és millor que `test3`.

## Executar proves des d’IntelliJ IDEA i amb Maven

Executa el test o la classe amb el **triangle verd** que IntelliJ mostra al costat del mètode o de la classe. En el panell **Run**, llig `expected/actual`, la línia de la fallada i el recompte de proves. El triangle verd no substitueix la lectura del resultat.

Des de la finestra Maven d’IntelliJ, obri **View → Tool Windows → Maven** i executa **Lifecycle → test**. També pots usar la terminal integrada, situat en la carpeta que conté `pom.xml`:

```bash
mvn clean test
```

Si Maven no està instal·lat a la terminal, usa l’opció integrada de la finestra Maven d’IntelliJ o instal·la Maven al sistema. En qualsevol cas, comprova abans que el Maven que s’executa usa JDK 25. Maven compila `src/main/java`, compila `src/test/java` i executa Surefire. Si el terminal diu que no troba `pom.xml`, el directori de treball és incorrecte. Si no troba `org.junit.jupiter`, revisa la dependència i que l’IDE haja acabat de sincronitzar el projecte.

## Errors habituals

- Importar `org.junit.Test`, que és JUnit 4, en un projecte configurat per a Jupiter.
- Posar la classe de test en `src/main/java` o la classe productiva en `src/test/java`.
- Oblidar **Reload All Maven Projects** o **Load Maven Changes** després d’editar el `pom.xml`.
- Obrir una terminal fora de la carpeta que conté `pom.xml`.
- Usar un arquetip antic amb `source/target 1.7` o versions antigues en lloc de `maven.compiler.release=25`.
- Fer que un test depenga d’un altre.
- Comprovar només que no hi ha excepció i oblidar el valor o estat resultant.
- Confondre `assertThrows` amb “el programa ha fallat”: l’excepció és el resultat esperat del cas.
- Canviar el `release` a 21 o 17 quan apareix `release version 25 not supported`: cal revisar el JDK real de Maven.

## Resum

JUnit Jupiter dona una estructura executable a un cas de prova. AAA fa visible el propòsit, les assercions comparen comportaments concrets i Maven permet repetir la bateria amb una configuració fixada. Una prova unitària ben escrita és curta, determinista, independent i expressa una decisió del contracte.

Per ampliar, consulta la [guia oficial de JUnit 5](https://junit.org/junit5/docs/current/user-guide/) i la documentació d’[IntelliJ i Maven](https://www.jetbrains.com/help/idea/maven-support.html).

Continua amb el [taller guiat de JUnit 5 amb IntelliJ IDEA i Maven](activitats/taller-guiat-junit-intellij-maven.md) i després amb l’[Activitat 3. Posem a prova la taquilla d'un concert](activitats/activitat-3-junit-automatitzacio.md). En aquesta pràctica autònoma treballaràs amb una classe Java ja implementada i una instància nova per a cada prova, sense que la programació orientada a objectes siga un prerequisit; no hauràs de crear la classe ni gestionar arrays.

[Bloc anterior: depuració](03-depuracio-vscode.md) · [Inici](../up4-proves.md) · [Bloc següent: automatització](05-automatitzacio-proves.md)
