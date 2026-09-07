---
hide:
  - navigation
---
# 5. Actualització de l’entorn

## Actualitzar és gestionar un canvi

Una actualització pot corregir errors i vulnerabilitats, però també pot canviar APIs, formats de configuració, extensions/plugins o compatibilitat amb el JDK. Per això no convé activar totes les actualitzacions automàtiques sense criteri en un projecte que s’ha de lliurar.

Abans d’actualitzar:

1. Identifica què canviarà: VS Code, IntelliJ IDEA, extensió, plugin, JDK o dependència.
2. Consulta les notes de versió i les incidències conegudes.
3. Guarda el codi, la configuració i la versió que funciona.
4. Actualitza en un projecte de prova o en una branca separada.
5. Executa la construcció i les proves mínimes.
6. Accepta el canvi només si el resultat és correcte i queda documentat.

## Canals i política

| Component | On el configurarem | Evidència |
| --- | --- | --- |
| VS Code i extensions | Preferències de VS Code i vista Extensions. | Versió de VS Code, extensió i prova Java/Python. |
| IntelliJ IDEA i plugins | Settings/Preferences, Plugins i System Settings > Updates. | Versió, plugin, canal i projecte Maven construït. |
| JDK i Maven | Gestor del sistema i configuració del projecte. | `java --version`, `mvn --version` i log de build. |

Configura les actualitzacions de VS Code i IntelliJ IDEA, però documenta també la versió del JDK, Maven, extensions i plugins. L’IDE actualitzat no garanteix que el compilador o les biblioteques ho estiguen.

Consulta també la documentació oficial de [les actualitzacions d’IntelliJ IDEA](https://www.jetbrains.com/help/idea/update.html) i de [la gestió de plugins](https://www.jetbrains.com/help/idea/managing-plugins.html).

!!! warning "Pla de retorn"
    Una còpia del projecte no sempre permet tornar arrere una extensió, un plugin o una versió de l’IDE. Conserva el perfil de VS Code, la configuració d’IntelliJ IDEA, el fitxer `pom.xml` i una ordre de construcció coneguda.

!!! tip "Pregunta de control"
    Quines proves faries després d’actualitzar VS Code o IntelliJ IDEA abans d’acceptar el canvi per al projecte de tot l’equip?

[Següent: construcció d’executables](06-executables.md) · [Anterior: personalització i automatització](04-personalitzacio-automatitzacio.md)
