---
hide:
  - navigation
---
# UP1. Implantació d'arquitectures web

## Presentació

En aquesta unitat aprendràs a descriure què passa des que una persona escriu una adreça web fins que rep una resposta, i a convertir aquesta descripció en un primer desplegament verificable. El fil conductor serà aquesta pregunta professional:

> **Quina arquitectura necessita una aplicació web i com podem demostrar que funciona?**

La unitat combina models d'arquitectura, protocols, servidors web i d'aplicacions, virtualització i documentació. El resultat serà un mapa tècnic i un servei mínim que es puga reproduir.

## Dades de la unitat

| Element | Referència |
| --- | --- |
| Duració al centre | **7 hores** |
| Resultat d'aprenentatge | **RA1** |
| Pes en la qualificació | **10 %** |
| Producte final | Mapa d'arquitectura i desplegament mínim documentat |
| Forma de treball | Individual, parelles i equips |

## Què aprendràs

- Comparar arquitectures monolítiques, de tres capes i basades en serveis.
- Relacionar client, DNS, xarxa, servidor web, servidor d'aplicacions i dades.
- Explicar el paper d'HTTP, HTTPS, DNS i els ports en una petició web.
- Instal·lar o posar en marxa un servidor web i comprovar-ne la resposta.
- Identificar quan convé utilitzar màquines virtuals o contenidors.
- Analitzar l'estructura i els recursos que necessita una aplicació.
- Definir requisits funcionals, tècnics, de seguretat i d'operació.
- Documentar instal·lació, configuració, proves i limitacions.

## Itinerari de treball

Consulta l'[índex de la UP1](up1/index.md) per seguir l'ordre recomanat.

| Bloc | Contingut | Pregunta de control |
| --- | --- | --- |
| [1. Models d'arquitectura](up1/01-models-arquitectura.md) | Client-servidor, tres capes i serveis | On viu cada responsabilitat? |
| [2. Protocols i recorregut](up1/02-protocols-recorregut.md) | DNS, HTTP, HTTPS, ports i capçaleres | Què passa quan s'obri una URL? |
| [3. Servidors web i d'aplicacions](up1/03-servidors-web-aplicacions.md) | Funcions, instal·lació i cooperació | Quin servei executa cada component? |
| [4. Virtualització i contenidors](up1/04-virtualitzacio-contenidors.md) | Aïllament, xarxa i reproduïbilitat | Què guanyem i què hem de controlar? |
| [5. Requisits i documentació](up1/05-requisits-documentacio.md) | Anàlisi, proves i evidències | Com sabrem que el desplegament és correcte? |

## Activitats i autoavaluació

| Activitat | Producte |
| --- | --- |
| [1. Mapa d'arquitectura](up1/activitats/activitat-1-mapa-arquitectura.md) | Diagrama anotat del recorregut d'una petició. |
| [2. Desplegament mínim](up1/activitats/activitat-2-desplegament-minim.md) | Servei web local amb proves i logs. |
| [3. Fitxa de requisits](up1/activitats/activitat-3-fitxa-requisits.md) | Decisió d'arquitectura justificada. |
| [Autoavaluació](up1/activitats/autoavaluacio.md) | Qüestionari individual de repàs. |

## Abans de començar

Treballa només en màquines, xarxes i dominis autoritzats. No publiques serveis, no uses credencials reals i no copies secrets a captures ni repositoris. Si una ordre modifica el sistema, explica què fa abans d'executar-la.

[Tornar al mòdul](index.md) · [Anar a l'índex de la UP1](up1/index.md) · [Començar la teoria](up1/01-models-arquitectura.md)
