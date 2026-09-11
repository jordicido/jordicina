---
hide:
  - navigation
---
# Activitat 2. Taller de mòduls, personalització i actualització

## Context

L’equip de desenvolupament vol que un projecte Java es puga obrir en ordinadors diferents amb una configuració semblant. Necessita suport de Java, una tasca de construcció, regles bàsiques de format i un procediment d’actualització que permeta tornar arrere si apareix una incompatibilitat.

## Objectiu

Afegir i eliminar mòduls o extensions de manera segura, personalitzar el flux de treball, automatitzar una construcció i configurar una política d’actualització amb registre i recuperació.

## Criteris d’avaluació treballats

- **RA2.b** Addició i eliminació de mòduls a l’entorn de desenvolupament.
- **RA2.c** Personalització i automatització de l’entorn.
- **RA2.d** Configuració del sistema d’actualització de l’entorn.

## Tasca

### Fase 1. Inventari inicial

Obri la carpeta amb el programa de l’activitat 1 i registra les extensions de VS Code, els plugins d’IntelliJ IDEA i el JDK. Explica quina funcionalitat necessita cada peça; la carpeta inicial no pressuposa cap eina de construcció addicional.

### Fase 2. Alta i baixa controlades

En VS Code, afegeix el suport de Java necessari. En IntelliJ IDEA, activa o instal·la el plugin de Kotlin per poder obrir el programa de l’activitat 3. Registra nom, editor, versió i dependències. Desactiva o elimina una extensió de prova que no siga necessària i demostra que el projecte continua en l’estat esperat.

No elimines extensions o plugins essencials del perfil habitual sense disposar d’una còpia o d’un perfil de pràctiques recuperable.

### Fase 3. Personalització

Configura, com a mínim, un perfil o espai de treball amb:

- format i final de línia coherents;
- JDK del projecte seleccionat explícitament;
- una regla d’editor compartible, com `.editorconfig`;
- una configuració d’execució sense secrets ni rutes absolutes.

### Fase 4. Automatització

Defineix una tasca en VS Code o una configuració equivalent en IntelliJ IDEA que execute la construcció Maven del projecte. La documentació ha d’indicar l’ordre, els prerequisits, el resultat esperat i on apareix l’artefacte.

### Fase 5. Actualització i recuperació

Tria el canal d’actualització disponible per a cada IDE, consulta la compatibilitat dels plugins i escriu un registre amb versió anterior, versió nova, prova executada i resultat. Elabora un procediment de retorn: quina configuració o plugin recuperaràs i quina prova confirmarà que l’entorn torna a funcionar.

## Requisits

- Cada alta o baixa ha d’estar justificada per una necessitat del projecte.
- El registre ha d’incloure versions reals observades en l’IDE.
- La tasca automatitzada ha de poder repetir-se des de zero en un projecte de prova.
- Les configuracions compartibles no han d’incloure secrets, fitxers de caché ni rutes personals.
- El pla d’actualització ha d’incloure compatibilitat, còpia, prova i recuperació.

## Lliurament

Entrega:

- inventari abans i després de les extensions/plugins;
- registre d’alta i baixa amb captures o eixides justificades;
- perfil o fitxers de configuració compartibles;
- tasca automatitzada i instruccions d’execució;
- registre de l’actualització i pla de retorn;
- incidències i conclusions tècniques.

## Evidències d’aprenentatge

El professorat podrà comprovar que s’han afegit i retirat peces sense confondre-les amb dependències del projecte, que el format i el JDK estan configurats, que una tasca genera un resultat i que la política d’actualització permet verificar i recuperar l’entorn.

## Criteris de correcció

Es valorarà la justificació de les extensions/plugins, la seguretat de les baixes, la configuració reproduïble, l’automatització observable i la qualitat del registre d’actualització. Es penalitzaran els fitxers locals innecessaris, les rutes absolutes, els secrets i les actualitzacions no verificades.

## Ampliació

Prepara un perfil d’IDE específic per al projecte Java i explica quines opcions no compartiries amb la resta de l’equip i per què.

[Anterior: instal·lació dels IDE](activitat-1-instal·lacio.md) · [Següent: construcció i comparació](activitat-3-construccio.md) · [Índex](../index.md)
