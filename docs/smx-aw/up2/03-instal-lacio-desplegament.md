---
hide:
  - navigation
---
# 3. Accés, instal·lació i configuració d’aplicacions web

En una suite SaaS com Microsoft 365, el proveïdor desplega els servidors i l’alumnat utilitza les aplicacions des del navegador. Això no significa que no hi haja instal·lació: cal configurar l’accés, seleccionar l’entorn correcte i, si és possible, instal·lar l’aplicació web com a **PWA**.

Aquesta distinció és important per al **CA4.c**:

> S’han instal·lat aplicacions d’ofimàtica web.

En aquesta UP, l’evidència serà la instal·lació o configuració de l’accés a Word, Excel i PowerPoint web com a aplicacions del navegador, juntament amb la verificació que s’obrin amb el compte educatiu i treballen amb els fitxers d’OneDrive.

## Tres nivells d’instal·lació

| Nivell | Qui el realitza? | Exemple | Evidència |
|---|---|---|---|
| Desplegament del servei | Proveïdor SaaS o administració tècnica | Servidors, aplicació i base de dades | El servei està disponible |
| Configuració de l’entorn | Administrador o usuari autoritzat | Compte, idioma, carpetes i permisos | Configuració comprovada |
| Instal·lació de l’accés web | Persona usuària | PWA, accés directe o aplicació del navegador | Icona, finestra i URL del servei |

Una PWA és una forma d’obrir una aplicació web amb una finestra i un accés propis. No és una còpia completa del programa i no converteix Microsoft 365 en un servidor local. Els documents continuen estant al servei web i necessiten la identitat i els permisos corresponents.

## Preparació de l’entorn

Abans d’instal·lar l’accés, comprova:

- quin compte educatiu has d’utilitzar;
- quin navegador està autoritzat i està actualitzat;
- si el navegador bloqueja finestres emergents o cookies necessàries;
- si el compte té disponibles Word, Excel, PowerPoint, OneDrive i Forms;
- si tens una carpeta de pràctiques i dades fictícies;
- si l’equip té permís per instal·lar aplicacions web.

No uses un compte personal per a la pràctica. Si una aplicació no apareix, no intentes esquivar la restricció: documenta el compte, el navegador i la limitació.

## Accedir a una aplicació web

El procediment general és:

1. Obri el portal de Microsoft 365 indicat pel centre.
2. Inicia sessió amb el compte educatiu.
3. Obri el llançador d’aplicacions i selecciona Word, Excel o PowerPoint.
4. Comprova que la barra d’adreces correspon al servei autoritzat i que la sessió és la correcta.
5. Crea o obri un fitxer de prova dins de la carpeta d’OneDrive de la pràctica.
6. Escriu una modificació breu, espera que es guarde i tanca el fitxer.
7. Torna a obrir-lo i verifica que la modificació continua disponible.

La prova de persistència és important: veure l’editor no demostra que el document s’haja guardat en la ubicació correcta.

## Instal·lar Word, Excel i PowerPoint com a PWA

Els noms dels menús depenen del navegador, però l’operació sol seguir aquest patró:

1. Obri l’aplicació web des del compte educatiu.
2. Busca en el menú del navegador una opció com **Instal·lar aplicació**, **Instal·lar Word** o **Crear accés directe**.
3. Accepta només si l’adreça i l’aplicació corresponen al servei del centre.
4. Comprova que apareix una icona o una entrada en el menú d’aplicacions.
5. Obri la PWA i verifica que mostra la mateixa sessió i els mateixos fitxers que el navegador.
6. Tanca-la i torna a obrir-la per comprovar que l’accés queda configurat.

Si el navegador no ofereix aquesta opció, l’alternativa és crear un accés directe o guardar l’aplicació als favorits. En tots dos casos, indica la limitació i conserva l’evidència de l’accés web funcional.

## Configurar una estructura de treball

En la **Activitat 2. La meua oficina al núvol**, crea:

```text
Projecte_Jornada/
├── Documentació/
├── Pressupostos/
└── Presentacions/
```

La ubicació forma part de la configuració. Un document ben creat però guardat en una carpeta personal o compartit amb el compte equivocat no compleix l’objectiu professional.

Revisa sempre:

- nom del fitxer i extensió;
- propietari o ubicació del fitxer;
- persones amb accés;
- permís de cada persona;
- historial de versions;
- possibilitat de recuperar el document.

## SaaS i autoallotjament: què canviaria?

En un entorn autoallotjat, com una plataforma de laboratori amb Nextcloud i un editor web, la instal·lació del servei pot incloure servidor, contenidor, volums, actualitzacions i còpies. En Microsoft 365, aquestes tasques corresponen principalment al proveïdor.

| Tasca | Microsoft 365 educatiu | Servei autoallotjat |
|---|---|---|
| Servidor i xarxa | Proveïdor | Centre o equip tècnic |
| Actualitzacions de la plataforma | Principalment proveïdor | Administració pròpia |
| Compte i permisos de l’activitat | Usuari i professorat | Administració i usuari |
| Instal·lació de Word web | Accés o PWA | Depén de la plataforma |
| Còpies i restauració | Cal conéixer l’abast del servei | Responsabilitat explícita del centre |

Per a les activitats d’aquesta UP no publicaràs cap servei ni obriràs ports. L’objectiu és entendre la diferència i saber verificar un accés web instal·lat i funcional.

## Llista de comprovació del CA4.c

Abans de lliurar l’Activitat 2, comprova:

- [ ] Word web s’obri amb el compte educatiu.
- [ ] Excel web s’obri amb el compte educatiu.
- [ ] PowerPoint web s’obri amb el compte educatiu.
- [ ] Els tres accessos estan instal·lats com a PWA o documentats com a accés directe alternatiu.
- [ ] Cada aplicació pot obrir o crear un fitxer dins d’OneDrive.
- [ ] Una modificació es guarda i es recupera en tornar a obrir el fitxer.
- [ ] Les captures no mostren contrasenyes, tokens ni dades personals innecessàries.

## Criteris d’avaluació treballats

- **RA4.c:** instal·lar o configurar l’accés a aplicacions d’ofimàtica web i verificar-ne el funcionament.
- **RA4.f:** reconéixer l’entorn d’ús i les prestacions disponibles després de la instal·lació o configuració.
