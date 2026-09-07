---
hide:
  - navigation
---
# 4. Personalització i automatització

## Personalitzar amb criteri

Personalitzar no és afegir opcions sense límit. És adaptar l’entorn per llegir millor, reduir errors i repetir el mateix flux. Comença per opcions que siguen fàcils de compartir: formatació, final de línia, codificació, organització de fitxers, terminal i dreceres.

Separa la configuració personal —tema, mida de lletra o dreceres— de la configuració del projecte —versió del JDK, formatador i ordres de build—. En VS Code treballarem amb `.vscode/settings.json`; en IntelliJ IDEA documentarem l’estil de codi, les inspeccions i les configuracions d’execució. La configuració del projecte ha d’estar documentada o versionada perquè l’equip puga reproduir-la.

## Automatitzar una tasca

Una tasca automatitzada descriu una seqüència que abans depenia de memòria i ordres escrites a mà. En VS Code la guardarem en `.vscode/tasks.json`; en IntelliJ IDEA la repetirem amb la finestra de Maven o amb una configuració d’execució. Un flux senzill pot ser:

```text
netejar la carpeta de sortida
instal·lar o comprovar dependències
compilar o empaquetar
executar proves mínimes
guardar l’artefacte i el log
```

La tasca ha de tindre un nom clar, una entrada coneguda, una sortida localitzable i un codi de retorn interpretable. No automatitzes una ordre destructiva sense confirmar el directori i les dades que afectarà.

| Element | Exemple |
| --- | --- |
| Entrada | Carpeta del projecte i versió del JDK o de Python. |
| Acció | `mvn package` en VS Code o des de la finestra Maven d’IntelliJ IDEA. |
| Eixida | `target/app.jar`. |
| Verificació | Codi de retorn zero i execució de la versió esperada. |
| Evidència | Fitxer de configuració, log i captura del resultat. |

## Terminal integrada i scripts

La terminal integrada de VS Code i la terminal de IntelliJ IDEA no canvien la naturalesa de l’ordre: necessiten el JDK, Maven i els permisos corresponents. Quan la seqüència creix, guarda-la en un script o en el fitxer de tasques del projecte i explica com executar-la en els dos IDE.

!!! tip "Pregunta de control"
    Quina diferència hi ha entre personalitzar una opció del teu perfil de VS Code o IntelliJ IDEA i automatitzar una construcció que ha de poder repetir tot l’equip?

[Següent: actualitzacions](05-actualitzacions.md) · [Anterior: mòduls i extensions](03-moduls.md)
