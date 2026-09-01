---
hide:
  - navigation
---
# 4. De codi font a programa en execució

El procés concret depén de la tecnologia, però normalment inclou una traducció, la preparació dels components i un entorn d’execució.

```text
Codi font → traductor → codi objecte o intermedi → entorn d’execució → programa
```

- **Compilació:** tradueix el codi abans d’executar-lo i pot detectar errors de sintaxi o de tipus.
- **Interpretació:** un entorn llig i gestiona el codi durant l’execució.
- **Assemblatge:** tradueix assemblador a codi màquina o objecte.
- **Enllaçat:** combina fitxers objecte i biblioteques per generar un executable.
- **Màquina virtual:** ofereix un entorn d’execució independent de la màquina física.

```text
Java:    .java → javac → .class → JVM → sistema operatiu
C:       .c → compilador → .o → enllaçador → executable
Python:  .py → entorn Python → execució
```

Les màquines virtuals poden aportar portabilitat i una gestió comuna de l’execució. Tot i això, sempre cal considerar les dependències i la versió de l’entorn.

!!! tip "Pregunta de control"
    Quina funció té l’enllaçador i per què són necessàries les biblioteques?

[Anterior: Tipus de codi](03-tipus-codi.md) · [Següent: Ferramentes](05-ferramentes.md) · [Índex](index.md)