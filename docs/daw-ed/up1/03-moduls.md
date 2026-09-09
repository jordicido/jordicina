---
hide:
  - navigation
---
# 3. Mòduls, extensions i plugins

## Introducció

Un IDE es pot ampliar per donar suport a llenguatges, frameworks, terminals, control de versions o eines d’anàlisi. En VS Code aquestes ampliacions s’anomenen habitualment **extensions**; en IntelliJ IDEA, **plugins**. Un mòdul és una peça funcional del projecte o de l’entorn que pot aportar codi, configuració i dependències.

Afegir funcionalitats sense criteri augmenta el consum de recursos i pot introduir conflictes. La pràctica professional és instal·lar el mínim necessari, registrar-ne la versió i eliminar el que ja no té una funció.

## Catàleg, dependències i confiança

Abans d’instal·lar una extensió o plugin, revisa l’autor, la font, la compatibilitat amb la versió de l’IDE, els permisos i l’activitat del projecte. Una extensió de Java pot dependre d’un JDK, d’un servidor de llenguatge o d’un gestor de projectes. Si retires una dependència que encara usa una altra funcionalitat, el diagnòstic pot deixar de funcionar.

| Acció | VS Code | IntelliJ IDEA | Evidència recomanada |
| --- | --- | --- | --- |
| Afegir | Marketplace i instal·lació de l’extensió. | Marketplace o configuració de plugins. | Nom, editor, versió i data. |
| Activar/desactivar | Estat de l’extensió per a l’espai de treball. | Estat del plugin i reinici si cal. | Captura o llista exportada. |
| Eliminar | Desinstal·lar des de la vista d’extensions. | Desinstal·lar des de Plugins. | Registre de la baixa i prova posterior. |
| Actualitzar | Actualització individual o automàtica. | Actualització del plugin o de l’IDE. | Versió anterior, nova i incidències. |

## Procediment segur

1. Defineix la necessitat: quin problema resol la peça?
2. Comprova la compatibilitat i les dependències.
3. Instal·la-la en el perfil o projecte de pràctiques.
4. Reinicia l’IDE si ho demana i verifica una funció concreta.
5. Anota el canvi en un registre.
6. Per eliminar-la, comprova abans quines funcionalitats depenen d’ella i repeteix la prova.

Per al projecte de la UP podem usar suport de Java en VS Code i el plugin de Kotlin en IntelliJ IDEA. El nom exacte i la versió s’han d’anotar des de l’IDE, ja que els catàlegs poden canviar.

## Dependència de projecte i dependència de l’IDE

No confongues un plugin de l’IDE amb una dependència de l’aplicació. El plugin ajuda a editar o construir; la dependència declarada en `pom.xml` o `build.gradle` forma part del projecte i ha de poder resoldre’s també en un servidor de construcció.

```xml title="Fragment de pom.xml"
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter</artifactId>
  <version>5.11.0</version>
  <scope>test</scope>
</dependency>
```

El codi anterior és una dependència de Maven, no un plugin de l’IDE. Si el projecte compila en un altre equip amb `mvn package`, la configuració essencial està declarada en el projecte i no amagada en un ordinador concret.

!!! warning "Precaució"
    No instal·les extensions descarregades d’un fitxer desconegut ni dones permisos elevats sense una justificació. Una extensió pot llegir fitxers del projecte i executar processos.

## Resum

Les extensions i els plugins amplien l’IDE, però tenen cost i riscos. La selecció ha de partir d’una necessitat, verificar compatibilitat i deixar una evidència d’alta o baixa. Les dependències de l’aplicació s’han de declarar en el gestor del projecte.

[Anterior: instal·lació](02-instal·lacio.md) · [Següent: personalització](04-personalitzacio-automatitzacio.md) · [Índex](index.md)
