---
hide:
  - navigation
---
# Activitat 3.2. Instal·lació guiada de Nextcloud amb Docker

**Mòdul:** Aplicacions Web — 2n d’SMX

**Unitat:** UP3. Gestió d’arxius web
**Criteri d’avaluació:** **RA3.c** — S’ha instal·lat i adaptat una ferramenta de gestió d’arxius web.

## Situació de partida

L’empresa fictícia **ByteSolutions** necessita un espai privat on guardar i consultar documents a través d’un navegador. En aquesta activitat posaràs en funcionament un gestor d’arxius web amb **Nextcloud**.

Ja has utilitzat Nextcloud en una activitat anterior relacionada amb el calendari. Ara prepararàs **una altra instància independent**, que utilitzarem en les activitats següents per treballar amb fitxers, usuaris i permisos.

!!! info "Què aprendràs?"
    Instal·laràs i configuraràs inicialment Nextcloud a partir d’un fitxer de Docker Compose facilitat pel professorat. No has de crear una infraestructura de contenidors des de zero.

## Part 1. Comprén la configuració

1. Crea una carpeta de treball anomenada `up3-nextcloud`.
2. A dins, crea un fitxer anomenat `compose.yaml` i copia-hi aquesta configuració:

    ```yaml
    services:
      nextcloud:
        image: nextcloud:apache
        ports:
          - "8081:80"
        volumes:
          - nextcloud_dades:/var/www/html
        restart: unless-stopped

    volumes:
      nextcloud_dades:
    ```

3. Abans d’executar res, identifica en el fitxer:
   - el nom del servei;
   - la imatge que utilitza;
   - el port amb què accediràs des del navegador;
   - el volum utilitzat per guardar les dades.

!!! tip "Pista"
    A `8081:80`, el primer número representa el port de l’equip que executa Docker i el segon, el port del contenidor.

!!! warning "Conflictes de ports"
    Si el port `8081` ja està ocupat, canvia **només el primer número** per un port lliure, per exemple `8082`, i utilitza’l després en l’adreça del navegador.

## Part 2. Posa Nextcloud en funcionament

1. Obri un terminal dins de la carpeta `up3-nextcloud`.
2. Executa:

    ```bash
    docker compose up -d
    ```

3. Comprova que el contenidor s’està executant:

    ```bash
    docker compose ps
    ```

4. Accedeix a Nextcloud des del navegador:
   - Si Docker s’executa en **el teu ordinador**: `http://localhost:8081`.
   - Si Docker s’executa en **un altre equip**: `http://IP-DEL-SERVIDOR:8081`.
   - Si has canviat el port, adapta també l’adreça.
5. Completa l’assistent inicial i crea el teu compte d’administrador. Guarda les credencials de manera privada.

!!! note "Base de dades per a la pràctica"
    Per simplificar aquest entorn de laboratori, utilitzarem **SQLite**, sense desplegar un contenidor de MariaDB. És una opció apropiada per a proves i instal·lacions mínimes; no és la recomanada per a una instal·lació de producció amb molts usuaris.

!!! warning "Entorn de proves"
    Aquesta pràctica utilitza HTTP en un entorn local o de laboratori. **No publiques aquesta instància a Internet**. Un servei real accessible des d’Internet necessita HTTPS i una configuració de seguretat adequada.

## Part 3. Comprova i adapta el gestor

1. Inicia sessió amb el compte que has creat.
2. Configura l’idioma de la teua interfície, si és necessari.
3. Crea una carpeta anomenada `Prova-UP3`.
4. Puja-hi un document de prova que no continga dades personals.
5. Descarrega’l de nou i comprova que s’obri correctament.
6. Atura i inicia el servei amb aquestes ordres:

    ```bash
    docker compose stop
    docker compose start
    ```

7. Torna a entrar al navegador i comprova que la carpeta i el document continuen disponibles.

!!! important "Conservar les dades"
    El volum `nextcloud_dades` està preparat perquè les dades no depenguen únicament del sistema de fitxers intern del contenidor. **No utilitzes `docker compose down -v`**, ja que podria eliminar el volum i les dades d’aquesta instal·lació.

## Part 4. Comprova que has entés el procés

Respon breument:

1. Quina funció té el port `8081` en aquesta pràctica?

2. Per a què serveix el volum `nextcloud_dades`?

3. Quina diferència hi ha entre la imatge `nextcloud:apache` i el contenidor que s’executa?

4. Quin avantatge té utilitzar Docker per instal·lar Nextcloud en una pràctica d’aula?

## Què has d’entregar?

Lliura en Aules un document breu amb:

- una **captura** del resultat de `docker compose ps`;
- una **captura** de Nextcloud amb la carpeta `Prova-UP3` i el document pujat;
- les respostes a les **quatre preguntes** de l’apartat anterior;
- el fitxer `compose.yaml` que has utilitzat.

!!! success "Resultat esperat"
    Tens una instància de Nextcloud funcional i independent de la de calendari. Pots accedir-hi, iniciar sessió i gestionar un arxiu de prova. **Conserva-la**, perquè la utilitzarem en l’activitat 3.3.

## Com s’avaluarà?

| Aspecte | Pes |
|---|---:|
| Posada en funcionament del servei | 40 % |
| Configuració inicial i comprovació de pujada/descàrrega | 35 % |
| Comprensió dels conceptes bàsics i evidències | 25 % |

**Criteri avaluat:** RA3.c.
