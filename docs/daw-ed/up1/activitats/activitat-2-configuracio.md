---
hide:
  - navigation
---
# Activitat 2. Mòduls, personalització i actualitzacions

## Finalitat

Convertireu VS Code i IntelliJ IDEA en entorns de treball útils, controlats i repetibles. Treballareu els criteris **RA2.b**, **RA2.c** i **RA2.d**.

## Organització i duració

- Individual.
- **4 hores**: 60 minuts d’extensions, 60 de personalització, 90 d’automatització i 30 d’actualització.

## Tasca 1. Afegiu i retireu un mòdul

En VS Code instal·leu l’Extension Pack for Java i l’extensió Python. En IntelliJ IDEA instal·leu un plugin no essencial del repositori oficial. Anoteu el nom, editor, versió, permisos i dependències. Configureu cada component, executeu una prova i després desactiveu-lo o elimineu-lo. Expliqueu què ha canviat i com heu comprovat que el projecte continua funcionant.

## Tasca 2. Personalitzeu el projecte

En VS Code configureu com a mínim formatació, terminal, final de línia, un perfil i `.vscode/settings.json`. En IntelliJ IDEA configureu formatació, inspeccions i una configuració d’execució. Diferencieu la configuració personal de la que ha de compartir l’equip. No convertiu el tema de colors en el centre de l’activitat: interessa la qualitat del flux.

## Tasca 3. Automatitzeu una construcció

Creeu a VS Code una tasca en `.vscode/tasks.json` i repetiu-la en IntelliJ IDEA amb la finestra de Maven o una configuració d’execució. Ha d’incloure quatre passos: neteja controlada, construcció, execució de la prova mínima i guardat del resultat. Registreu l’ordre, el directori de treball, la sortida esperada i què passa quan la construcció falla.

## Tasca 4. Configureu les actualitzacions

Configureu les actualitzacions de VS Code i IntelliJ IDEA, reviseu l’estat de les extensions/plugins i consulteu una nota de versió. Feu la prova en una còpia o branca. Anoteu com tornaríeu a l’estat anterior si la versió nova trenca una extensió o plugin.

## Lliurament

Entregueu:

- una taula d’alta i baixa del mòdul;
- el perfil o fitxer de configuració sense dades personals;
- la tasca o script automatitzat;
- el registre de l’actualització i la prova de recuperació;
- una conclusió de 200 paraules sobre manteniment i riscos.

!!! warning "Seguretat"
    No executeu scripts de neteja en una carpeta que continga dades reals. Comproveu sempre el directori abans d’automatitzar una ordre destructiva en VS Code o IntelliJ IDEA.

[Activitat 1. Laboratori d’instal·lació](activitat-1-instal·lacio.md) · [Activitat 3. Construcció i comparació](activitat-3-construccio.md)
