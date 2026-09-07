---
hide:
  - navigation
---
# 2. Instal·lació d’entorns

## Abans d’instal·lar

Una instal·lació professional comença amb una fitxa de requisits. Per a VS Code i IntelliJ IDEA anota el sistema operatiu i la seua arquitectura, l’espai lliure, la memòria disponible, el JDK necessari, Maven, l’edició de l’IDE i la llicència.

No descarregues un instal·lador des d’un enllaç desconegut. Utilitza la pàgina oficial, comprova la signatura o la suma quan el fabricant la publique i conserva la versió exacta emprada.

## Instal·lació reproduïble

La instal·lació és reproduïble quan una altra persona pot repetir-la amb la informació documentada:

1. Identifica el sistema i comprova els prerequisits.
2. Descarrega l’IDE i les eines del llenguatge des de fonts oficials.
3. Instal·la amb les opcions justificades i evita afegir components innecessaris.
4. Obri el projecte de prova i configura el JDK o l’intèrpret de Python.
5. Executa una ordre de versió i una construcció mínima.
6. Registra el resultat, l’edició, la versió i qualsevol incidència.

| IDE | Components del laboratori | Projectes de prova | Verificació mínima |
| --- | --- | --- | --- |
| Visual Studio Code | VS Code, JDK, Extension Pack for Java i extensió Python. | Java amb Maven i Python amb un entorn virtual. | Versió de VS Code, `java --version`, `python --version` i dos programes executats. |
| IntelliJ IDEA | IntelliJ IDEA, JDK i suport Maven; plugins addicionals només si són necessaris. | Projecte Java amb `pom.xml`. | Edició i versió de l’IDE, JDK del projecte i JAR construït. |

No substituirem aquests IDE per altres eines: tota la UP es desenvoluparà amb Visual Studio Code i IntelliJ IDEA. Registra la versió instal·lada i si treballes amb les funcions bàsiques gratuïtes o amb les funcions avançades d’Ultimate.

### Fonts oficials de consulta

- [Java en Visual Studio Code](https://code.visualstudio.com/docs/languages/java)
- [Python en Visual Studio Code](https://code.visualstudio.com/docs/languages/python)
- [Instal·lació d’IntelliJ IDEA](https://www.jetbrains.com/help/idea/installation-guide.html)

!!! warning "No confongues IDE i SDK"
    L’IDE és la interfície i la integració d’eines. El JDK aporta el compilador i les biblioteques de Java; Python necessita el seu intèrpret. Ni VS Code ni IntelliJ IDEA substitueixen aquestes eines del llenguatge.

!!! tip "Pregunta de control"
    Quines proves faries en VS Code i en IntelliJ IDEA per demostrar que el JDK i Maven estan correctament configurats?

[Següent: mòduls i extensions](03-moduls.md) · [Anterior: què és un IDE](01-entorn.md)
