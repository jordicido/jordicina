---
hide:
  - navigation
---
# UP1. Implantació d'arquitectures web

## Presentació

En aquesta unitat estudiarem com es dissenya, es prepara i es verifica el desplegament d'una aplicació web. El fil conductor serà el recorregut complet d'una petició, des del navegador i el DNS fins al servidor web, el servidor d'aplicacions i les dades.

La unitat està pensada per al treball semipresencial: la teoria inclou explicacions progressives, exemples, diagrames, ordres comentades, errors habituals i preguntes de comprovació. Les sessions presencials es poden dedicar a demostracions, dubtes i pràctiques en un entorn autoritzat.

> **Pregunta guia:** quina arquitectura necessita una aplicació web i com podem demostrar que funciona?

## Dades de la unitat

| Element | Referència |
| --- | --- |
| Duració de referència | **7 hores al centre** + treball semipresencial |
| Resultat d'aprenentatge | **RA1** |
| Pes de referència | **10 %** |
| Cas conductor | **DAWShop** |
| Producte final | Disseny d'arquitectura, desplegament local i informe de verificació |

## Què aprendràs

- Analitzar arquitectures client-servidor, monolítiques, de capes i basades en serveis.
- Explicar el recorregut d'una petició amb DNS, IP, ports, HTTP, HTTPS i TLS.
- Identificar frontend, backend, API, bases de dades, caché, CDN, proxy invers i balancejador.
- Convertir les necessitats d'un projecte en requisits de desplegament verificables.
- Diferenciar màquines virtuals, contenidors i altres formes d'execució.
- Instal·lar i configurar Apache HTTP Server i Apache Tomcat en un laboratori.
- Interpretar processos, ports, respostes HTTP i logs per diagnosticar incidències.
- Documentar versions, configuració, proves, recuperació i limitacions sense exposar secrets.

## Materials teòrics

Consulta l'[índex i seqüència de la UP1](up1/index.md) per seguir l'ordre recomanat i accedir al material complet.

| Bloc | Contingut |
| --- | --- |
| [1. Arquitectures web](up1/01-arquitectures-web.md) | Models, pàgines estàtiques i dinàmiques, capes, frontend, backend i MVC. |
| [2. Fonaments i protocols](up1/02-fonaments-protocols.md) | Servidors, recursos, HTTP/HTTPS, DNS, URL, FQDN, ports i diagnòstic. |
| [3. Estructura i recursos](up1/03-estructura-recursos.md) | Components, APIs, dades, caché, CDN, escalabilitat, seguretat i observabilitat. |
| [4. Requisits del desplegament](up1/04-requisits-desplegament.md) | Entorns, variables, secrets, proves, backups, CI/CD, rollback i documentació. |
| [5. Apache HTTP Server](up1/05-servidor-web-apache.md) | Instal·lació, Virtual Hosts, permisos, mòduls, logs, proxy i diagnòstic. |
| [6. Apache Tomcat](up1/06-servidor-aplicacions-tomcat.md) | Java, instal·lació, estructura, WAR, Manager, logs i integració amb Apache. |

## Activitats avaluables

| Activitat | Producte |
| --- | --- |
| [Pràctica 1. Arquitectura i pla de desplegament](up1/activitats/activitat-1-arquitectura-desplegament.md) | Informe de l'arquitectura, els recursos, la seguretat, les proves i el procés de desplegament. |
| [Pràctica 2. Instal·lació d'Apache i Tomcat](up1/activitats/activitat-2-apache-tomcat.md) | Informe de la instal·lació, configuració, verificació i diagnòstic dels dos serveis. |
| Prova individual | Comprovació dels conceptes i de la capacitat d'explicar el laboratori. |

## Resultat d'aprenentatge i criteris

**RA1.** Implanta arquitectures web analitzant i aplicant criteris de funcionalitat.

| Criteri | Què hauràs de demostrar |
| --- | --- |
| **RA1.a** | Analitzar aspectes generals de les arquitectures web, les seues característiques, avantatges i inconvenients. |
| **RA1.b** | Descriure els fonaments i protocols del funcionament d'un servidor web. |
| **RA1.c** | Realitzar la instal·lació i configuració bàsica de servidors web. |
| **RA1.d** | Realitzar la instal·lació i configuració bàsica de servidors d'aplicacions. |
| **RA1.e** | Realitzar la instal·lació i configuració bàsica de tecnologies de virtualització de servidors en el núvol i en contenidors. |
| **RA1.f** | Realitzar proves de funcionament dels servidors i de les tecnologies de virtualització. |
| **RA1.g** | Analitzar l'estructura i els recursos que componen una aplicació web. |
| **RA1.h** | Descriure els requeriments del procés d'implantació d'una aplicació web. |
| **RA1.i** | Documentar els processos d'instal·lació i configuració realitzats. |

## Abans de començar

Per a les parts pràctiques necessitaràs, segons indique el professorat, una màquina virtual o servidor amb Ubuntu Server 24.04 o un entorn equivalent, permisos d'administració, connexió de xarxa, un editor de terminal i coneixements bàsics de Linux.

Treballa sempre en màquines, xarxes i dominis autoritzats. Utilitza dades fictícies, no publiques credencials ni claus privades i registra les versions i ordres que permeten repetir el laboratori.

[Anar a l'índex de la UP1](up1/index.md) · [Començar la teoria](up1/01-arquitectures-web.md)
