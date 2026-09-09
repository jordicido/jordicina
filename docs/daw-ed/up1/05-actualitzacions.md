---
hide:
  - navigation
---
# 5. Actualitzacions i recuperació

## Introducció

Actualitzar un IDE pot aportar correccions, compatibilitat i seguretat, però també pot canviar el comportament de plugins, el JDK detectat o les eines de construcció. Per això una actualització és un canvi que cal planificar i verificar, no una acció automàtica sense control.

## Canals i política d’actualització

Els IDE solen oferir canals estables i, en alguns casos, canals previs o de proves. Per a un entorn de classe i per a un projecte d’empresa, el canal estable és el punt de partida habitual. La política ha d’indicar qui pot actualitzar, quan es prova i com es torna a l’estat anterior.

| Abans | Durant | Després |
| --- | --- | --- |
| Anotar versions d’IDE, plugins, JDK i gestor. | Aplicar el canvi des de la font autoritzada. | Obrir el projecte i executar la construcció. |
| Revisar compatibilitat i incidències conegudes. | No interrompre el procés ni tancar l’IDE a la força. | Comparar diagnòstics, proves i temps de construcció. |
| Fer còpia de la configuració i del projecte. | Registrar versió anterior i nova. | Documentar resultat i pla de retorn. |

## Què s’ha de conservar?

La recuperació és més senzilla si es conserven el projecte en Git, el fitxer de dependències, les configuracions compartibles, les ordres de construcció i una llista de versions. No cal copiar totes les cachés de l’IDE. Els fitxers amb secrets s’han de deixar fora del repositori.

Un inventari mínim pot ser:

```text
IDE: IntelliJ IDEA <versió>
Plugin Kotlin: <versió>
JDK: <versió i distribució>
Maven: <versió>
Projecte: commit <identificador>
Prova: mvn clean package -> correcta
```

Els marcadors s’han de substituir per dades reals en el registre de l’activitat.

## Incidència i retorn

Si després d’actualitzar falla una construcció, separa les hipòtesis: canvi del JDK, plugin incompatible, dependència no resolta o configuració local. Guarda el missatge d’error, identifica l’últim canvi i prova una recuperació controlada: desactivar el plugin actualitzat, seleccionar el JDK anterior o tornar a la versió autoritzada per l’entorn de laboratori. No elimines el projecte per ocultar la incidència.

!!! warning "No confongues actualitzar i arreglar"
    Actualitzar diverses peces alhora dificulta saber què ha provocat una fallada. En una pràctica, canvia una peça, registra-la i executa la mateixa prova abans de continuar.

## Resum

Una política d’actualització necessita canal, compatibilitat, còpia, registre, prova i pla de retorn. El criteri de l’èxit és que el projecte continue construint-se i que l’equip puga explicar què ha canviat.

[Anterior: personalització](04-personalitzacio-automatitzacio.md) · [Següent: executables](06-executables.md) · [Índex](index.md)
