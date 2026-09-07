---
hide:
  - navigation
---
# 6. Del codi font a l’executable

## Què és un executable?

En aquesta unitat usem «executables» en un sentit pràctic: un programa o artefacte que es pot llançar en l’entorn previst. Pot ser un binari natiu, un paquet, un JAR que s’executa amb la màquina virtual de Java o una aplicació publicada amb el runtime necessari. El format depén del llenguatge i de la ferramenta de construcció.

| Llenguatge | Procés habitual | Artefacte possible |
| --- | --- | --- |
| Java | Compilació a bytecode amb `javac` o Maven/Gradle. | Fitxer `.class` o `.jar`. |
| Python | Execució amb l’intèrpret o empaquetament amb `zipapp`. | Script `.py` o arxiu executable `.pyz`. |
| JavaScript | Execució amb Node.js o empaquetament segons el projecte. | Paquet o aplicació distribuïda. |

No és suficient que l’IDE mostre «Run». Cal registrar quin compilador o runtime s’ha utilitzat, quina ordre s’ha executat, on està l’eixida i com es verifica.

## Dos llenguatges en un mateix IDE

Per demostrar el criteri **RA2.e**, prepara en **Visual Studio Code** dos projectes menuts: un Java amb Maven i un Python amb `zipapp`. Instal·la només les extensions i les eines necessàries, configura una tasca de construcció per a cada projecte i compara:

| Comprovació | Java | Python |
| --- | --- | --- |
| Eina detectada | JDK i Maven | Python i `zipapp` |
| Construcció | `mvn package` | `python -m zipapp` |
| Artefacte | `.jar` | `.pyz` |
| Prova | `java -jar ...` i missatge esperat | `python ...pyz` i missatge esperat |

Si l’aula treballa amb altres llenguatges, substitueix-los i explica la mateixa cadena: font, eina, construcció, artefacte i prova.

## El mateix codi en dos IDE

Per al criteri **RA2.f**, utilitza un projecte Java amb Maven sense configuració exclusiva d’un IDE. Obri’l en **Visual Studio Code** amb Extension Pack for Java i en **IntelliJ IDEA** amb el suport Maven, i genera el mateix JAR. Els fitxers de configuració propis de cada IDE poden canviar, però el codi font, el fitxer `pom.xml`, l’ordre de construcció i el resultat esperat han de ser equivalents.

!!! tip "Pregunta de control"
    Si dos IDE generen fitxers diferents però tots dos executen el mateix projecte i passen la prova, quina informació compararies abans de dir que els resultats són equivalents?

[Següent: comparació d’entorns](07-comparacio.md) · [Anterior: actualitzacions](05-actualitzacions.md)
