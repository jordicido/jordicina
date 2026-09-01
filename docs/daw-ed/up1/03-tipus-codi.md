---
hide:
  - navigation
---
# 3. Tipus de codi

Quan escrivim un programa, el text que redactem no sempre és el mateix que acabarà executant el processador. Durant el desenvolupament poden aparéixer diferents representacions.

| Tipus | Què és? | Execució directa |
| --- | --- | --- |
| Codi font | Text escrit per la persona programadora | Normalment no |
| Codi objecte | Resultat traduït, sovint per fitxer | Normalment no |
| Codi intermedi | Representació entre el font i la màquina | Mitjançant una màquina virtual |
| Codi executable | Resultat preparat per al sistema operatiu | Sí, amb les dependències necessàries |

## Codi font

És el conjunt de fitxers que escriu i manté l’equip de desenvolupament. És llegible per a qui coneix el llenguatge i conté noms, comentaris i estructura que faciliten el manteniment.

```java
public class Salutacio {
    public static void main(String[] args) {
        System.out.println("Hola, DAW!");
    }
}
```

## Codi objecte

És una representació traduïda pel compilador. Pot dependre de l’arquitectura i encara pot necessitar altres fitxers o biblioteques abans de formar un programa complet.

```text
programa.c → programa.o
```

## Codi intermedi i executable

El codi intermedi se situa entre el font i el codi màquina. El bytecode de Java és un exemple: el fitxer `.class` no és específic d’un processador concret, perquè l’executa la JVM. El codi executable, en canvi, està preparat perquè el sistema operatiu el carregue i l’execute.

!!! note "Idea clau"
    El codi font és el material de treball de l’equip; l’executable és un producte preparat per funcionar en un entorn concret.

!!! tip "Pregunta de control"
    Quin tipus de codi modificaríem per corregir un error: el font o l’executable? Per què?

[Anterior: Llenguatges](02-llenguatges.md) · [Següent: De font a executable](04-execucio.md) · [Índex](index.md)