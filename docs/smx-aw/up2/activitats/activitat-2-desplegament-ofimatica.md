---
hide:
  - navigation
---
# Activitat 2. Desplegament d’una aplicació d’ofimàtica web

**Duració:** 2 hores · **Modalitat:** individual o parella, amb evidències individuals

## Objectiu

Desplegar ONLYOFFICE Docs Community en Docker, comprovar que el servei funciona i documentar una incidència de manera reproduïble.

## Situació

El centre disposa d’una màquina virtual Linux per a pràctiques. El responsable vol comprovar que un servidor d’editors web pot funcionar abans d’integrar-lo amb una plataforma de documents.

## Tasques

1. Comprova que la màquina té Docker, xarxa, CPU, RAM i disc suficients.
2. Crea els directoris persistents indicats en [Instal·lació i desplegament](../03-instal-lacio-desplegament.md).
3. Desplega el contenidor amb:

   - nom `onlyoffice-docs`;
   - port `8080:80`;
   - `JWT_SECRET` diferent del de l’exemple;
   - volums per a logs, dades i memòria cau.

4. Comprova l’estat amb `docker ps`.
5. Accedeix a `http://localhost:8080` o a la IP de la màquina virtual.
6. Consulta els logs i identifica el moment en què el servei queda disponible.
7. Para i torna a iniciar el contenidor.
8. Fes una prova d’incidència: ocupa un altre port o usa temporalment `8081:80`, explica què ha canviat i restaura la configuració funcional.
9. Documenta què faria falta afegir abans de publicar el servei en una xarxa real.

## Comprovacions

| Comprovació | Resultat esperat |
|---|---|
| `docker --version` | Docker disponible |
| `docker ps` | Contenidor actiu |
| Navegador al port 8080 | Pàgina de benvinguda o resposta del servei |
| `docker logs --tail 50 onlyoffice-docs` | Logs sense error bloquejant |
| `docker stop` + `docker start` | El servei torna a respondre |
| Revisió de directoris | Hi ha dades fora del contenidor |

## Lliurament

Un document breu amb:

- les ordres executades i una explicació d’una línia per ordre;
- la comanda de desplegament sense revelar el secret;
- captures de l’estat, l’accés web, els logs i la parada/arrancada;
- la incidència provocada, el símptoma, el diagnòstic i la solució;
- tres mesures necessàries per a un desplegament real.

## Evidències necessàries

- La IP i el port utilitzats.
- El nom del contenidor.
- Una captura on es veja que el contenidor està actiu.
- Una captura de la resposta en el navegador.
- Un fragment de logs sense secrets ni dades personals.

!!! warning "Àmbit segur"
    Fes l’activitat només en la màquina virtual del centre. No faces port forwarding del router, no publiques el port en Internet i no uses credencials reals.

## Errors que has de saber diagnosticar

- **Port ocupat:** el servei no pot publicar `8080`; comprova ports i canvia el port del host.
- **Arrancada lenta:** espera i revisa logs abans de recrear el contenidor.
- **Pocs recursos:** comprova memòria, CPU i disc de la màquina virtual.
- **Pèrdua de persistència:** revisa els muntatges dels volums.
- **Accés des d’un altre equip:** comprova la xarxa de la màquina virtual abans d’atribuir-ho al contenidor.

## Criteris d’avaluació treballats

- RA4.c: instal·lar i verificar una aplicació d’ofimàtica web.
- RA4.f: comprovar les prestacions i l’entorn d’ús del servei instal·lat.
