---
hide:
  - navigation
---
# 5. Ferramentes del desenvolupament

Les ferramentes automatitzen o faciliten parts del procés. Una eina és adequada quan respon a la tasca, s’integra amb el projecte i deixa evidències comprensibles.

| Ferramenta | Per a què serveix? |
| --- | --- |
| Editor de codi | Crear i modificar fitxers de codi font |
| IDE | Integrar editor, construcció, depuració, proves i extensions |
| SDK | Oferir compilador, biblioteques, documentació i exemples |
| Compilador o intèrpret | Traduir o gestionar l’execució |
| Depurador | Examinar el programa durant l’execució |
| Eina de construcció | Netejar, compilar, provar i empaquetar |
| Gestor de dependències | Declarar i actualitzar biblioteques |
| Git i repositori remot | Registrar canvis i col·laborar |
| Eina de proves | Comprovar el comportament esperat |

## IDE, construcció i dependències

Un IDE sol reunir editor, navegació, execució, depurador, proves, refactorització i control de versions. La UP2 aprofundirà en la instal·lació i configuració dels IDE.

Les eines de construcció poden automatitzar una seqüència com aquesta:

```text
Netejar → compilar → provar → empaquetar
```

Els gestors de dependències descriuen quines biblioteques necessita el projecte i quina versió és compatible, cosa que facilita repetir la instal·lació en altres equips.

!!! tip "Pregunta de control"
    Quina diferència hi ha entre un IDE i un SDK? Poden utilitzar-se junts?

[Anterior: De font a executable](04-execucio.md) · [Següent: Fases](06-fases.md) · [Índex](index.md)