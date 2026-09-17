---
hide:
  - navigation
---
# Activitat 3. Construcció i comparació d’entorns

## Context

Una consultora ha de decidir quin IDE recomanarà per a un equip que manté una aplicació Java i un petit component Kotlin. La decisió ha de basar-se en construccions i proves repetibles, no en la preferència personal per una interfície.

## Objectiu

Generar artefactes a partir de dos llenguatges en un mateix IDE, construir el mateix codi Java amb VS Code i IntelliJ IDEA i elaborar una comparació professional basada en evidències.

## Criteris d’avaluació treballats

- **RA2.e** Generació d’executables a partir de codi font de diferents llenguatges en un mateix entorn.
- **RA2.f** Generació d’executables a partir del mateix codi font amb diversos entorns.
- **RA2.g** Identificació de característiques comunes i específiques de diversos entorns.

## Tasca

### Fase 1. Projecte Java

Obri el mateix repositori o commit en VS Code i IntelliJ IDEA. Construeix el projecte amb Maven i executa la classe principal. Conserva la comanda, el JDK, la versió de Maven i el resultat.

```bash
mvn clean package
java -cp target/classes ca.exemple.App
```

### Fase 2. Projecte Kotlin en IntelliJ IDEA

Crea o obri un projecte Kotlin/JVM en IntelliJ IDEA amb una funció `main` que produïsca una eixida observable. Usa el sistema de construcció del projecte i documenta el fitxer de configuració, el plugin, el JDK, l’ordre de construcció i el nom de l’artefacte.

No és suficient executar el programa amb el botó verd: cal explicar quin procés genera l’artefacte i comprovar que el resultat existeix.

### Fase 3. Comparació del mateix Java

Repeteix la construcció del projecte Java des de la interfície de VS Code i d’IntelliJ IDEA. Mantín el mateix codi i les mateixes ordres. Completa:

| Dada | VS Code | IntelliJ IDEA |
| --- | --- | --- |
| Commit o estat del codi |  |  |
| JDK i distribució |  |  |
| Maven i projecte detectat |  |  |
| Ordre de construcció |  |  |
| Artefacte generat |  |  |
| Eixida del programa |  |  |
| Diagnòstics i depuració observats |  |  |
| Incidència i resolució, si n’hi ha |  |  |

### Fase 4. Informe de decisió

Identifica almenys tres característiques comunes i tres específiques. Justifica quin entorn recomanaries per a l’equip del cas i quins compromisos acceptaries en integració, consum, extensibilitat, llicència i manteniment.

## Requisits

- Java i Kotlin s’han de construir en el mateix IntelliJ IDEA.
- El mateix projecte Java s’ha de construir en VS Code i IntelliJ IDEA.
- Les versions, les ordres i les proves han de quedar registrades.
- L’eixida dels programes i els artefactes s’han de poder verificar.
- La comparació ha de separar fets observats d’opinions i justificar la recomanació.

## Lliurament

Entrega un repositori o carpeta amb:

- codi font Java i Kotlin i els fitxers Maven/Gradle corresponents;
- registre de construcció en IntelliJ IDEA dels dos llenguatges;
- registre de construcció del mateix Java en VS Code i IntelliJ IDEA;
- artefactes o identificadors, ordres, versions i eixides;
- matriu comparativa i recomanació final;
- captures o logs suficients per verificar les afirmacions.

## Evidències d’aprenentatge

El professorat podrà observar dos artefactes de llenguatges diferents generats en IntelliJ IDEA, el mateix resultat Java obtingut des dels dos IDE i una anàlisi que distingeix les funcions comunes de les específiques amb proves.

## Criteris de correcció

Es valorarà la coherència entre codi, eines i ordres, la construcció real dels artefactes, la verificació de l’eixida, el control de versions i la qualitat de l’anàlisi comparativa. Es penalitzaran comparacions fetes amb còpies diferents, captures sense context, dependències no documentades i conclusions sense evidència.

## Ampliació

Calcula i compara la suma de comprovació dels artefactes Java. Si no coincideix, investiga si la causa és el contingut, la versió de les eines o les metadades de l’empaquetament.

[Anterior: posar a punt l'entorn](activitat-2-configuracio.md) · [Autoavaluació](autoavaluacio.md) · [Índex](../index.md)
