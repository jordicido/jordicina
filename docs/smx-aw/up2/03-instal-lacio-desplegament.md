# 3. Instal·lació i desplegament

En aquest bloc desplegarem **ONLYOFFICE Docs Community Edition** en una màquina virtual amb Docker. És un entorn de laboratori: serveix per entendre la instal·lació i comprovar els editors, no per publicar un servei amb dades reals sense una revisió professional.

!!! info "Què instal·larem exactament?"
    ONLYOFFICE Docs és el servidor d’editors web. Per crear una plataforma completa amb carpetes, comptes i compartició cal integrar-lo amb una solució com ONLYOFFICE Workspace, DocSpace o Nextcloud. En aquesta pràctica ens centrarem en el desplegament de l’editor i en la verificació del servei.

## Conceptes imprescindibles

- **Imatge:** paquet amb el programari i les dependències necessàries.
- **Contenidor:** instància en execució d’una imatge, aïllada del sistema host.
- **Port:** punt d’accés al servei. Publicarem el port `8080` de la màquina virtual i el connectarem amb el port `80` del contenidor.
- **Volum:** carpeta del host que conserva dades fora del cicle de vida del contenidor.
- **Persistència:** capacitat de conservar configuració o registres encara que el contenidor es recree.

No necessitem conéixer Docker en profunditat. En aquesta unitat només farem servir descarregar una imatge, crear un contenidor, consultar-lo, parar-lo i tornar-lo a iniciar.

## Requisits del laboratori

| Element | Preparació recomanada |
|---|---|
| Màquina virtual | Linux actual, amb xarxa i permisos per usar Docker |
| CPU | 2 nuclis virtuals com a mínim per a la pràctica |
| RAM | 4 GB per a ONLYOFFICE, més memòria per al sistema convidat |
| Disc | 40 GB lliures com a referència de la documentació oficial |
| Programari | Docker Engine o Docker Desktop compatible |
| Client | Navegador web actual |
| Xarxa | Port `8080` lliure en la màquina virtual |

La primera arrancada pot tardar perquè el contenidor prepara els seus serveis. En producció caldria dimensionar segons usuaris concurrents, tipus de documents, còpies i alta disponibilitat.

## Desplegament guiat

### 1. Comprova Docker

```bash
docker --version
docker info
```

Si `docker info` dona un error de permisos o indica que el servei no està actiu, resol la incidència amb el professorat abans de continuar. No canvies permisos del sistema sense entendre què estàs fent.

### 2. Prepara directoris persistents

```bash
sudo mkdir -p /opt/onlyoffice/{logs,data,lib}
```

Els directoris serviran, respectivament, per a registres, dades/certificats i memòria cau. En una màquina de laboratori també es poden ubicar dins de la carpeta de pràctiques de l’alumnat.

### 3. Crea el contenidor

```bash
sudo docker run -i -t -d \
  --name onlyoffice-docs \
  -p 8080:80 \
  --restart unless-stopped \
  -e JWT_SECRET='Canvia-Aquest-Secret-Per-Un-Altre' \
  -v /opt/onlyoffice/logs:/var/log/onlyoffice \
  -v /opt/onlyoffice/data:/var/www/onlyoffice/Data \
  -v /opt/onlyoffice/lib:/var/lib/onlyoffice \
  onlyoffice/documentserver
```

| Part de l’ordre | Funció |
|---|---|
| `docker run` | Crea i inicia un contenidor |
| `--name` | Assigna un nom fàcil de recordar |
| `-p 8080:80` | Connecta `host:8080` amb `contenidor:80` |
| `--restart unless-stopped` | Torna a iniciar-lo després d’un reinici, excepte si l’hem parat expressament |
| `-e JWT_SECRET=...` | Defineix el secret que s’utilitzarà en integracions amb autenticació JWT |
| `-v host:contenidor` | Munta directoris persistents |
| `onlyoffice/documentserver` | Imatge oficial de la Community Edition |

En un entorn real no escrigues secrets en un historial compartit ni reutilitzes el de l’exemple. Per a aquesta pràctica, el secret és de laboratori i no protegeix dades reals.

### 4. Comprova l’estat

```bash
sudo docker ps
sudo docker ps -a --filter name=onlyoffice-docs
```

Quan l’estat indique que està en execució, obri en el navegador:

```text
http://IP_DE_LA_MAQUINA_VIRTUAL:8080
```

Si treballes dins de la mateixa màquina virtual, prova també `http://localhost:8080`. La pàgina de benvinguda d’ONLYOFFICE confirma que el servei respon; no significa encara que hi haja una plataforma de fitxers o comptes configurada.

### 5. Consulta els logs

```bash
sudo docker logs --tail 50 onlyoffice-docs
sudo docker logs -f onlyoffice-docs
```

Prem `Ctrl+C` per deixar de seguir els logs. No elimines el contenidor només perquè la primera arrancada tarde: espera, revisa els missatges i comprova el port.

### 6. Parada i arrancada

```bash
sudo docker stop onlyoffice-docs
sudo docker start onlyoffice-docs
sudo docker ps --filter name=onlyoffice-docs
```

Parar el contenidor no elimina les carpetes muntades. Si el vols eliminar al final del laboratori, fes-ho només quan ja hages guardat les evidències:

```bash
sudo docker rm -f onlyoffice-docs
```

Aquesta ordre elimina el contenidor, però no les tres carpetes del host. Les dades persistents s’han d’eliminar o conservar amb una decisió conscient del responsable de l’entorn.

## Problemes habituals

| Símptoma | Comprovació |
|---|---|
| El navegador rebutja la connexió | Revisa `docker ps`, espera la primera arrancada i comprova `8080` |
| El contenidor no arranca | Consulta `docker logs onlyoffice-docs` |
| El port està ocupat | Usa `ss -ltn` i tria un altre port, per exemple `8081:80` |
| La màquina va molt lenta | Revisa RAM, CPU i espai lliure; no ho soluciones eliminant logs sense revisar-los |
| No s’accedeix des de l’host | Comprova la xarxa de la màquina virtual i el tallafoc del laboratori |
| Es perden dades després de recrear | Revisa els tres muntatges `-v` i el contingut de `/opt/onlyoffice` |

!!! warning "Seguretat"
    No exposes el port directament a Internet. Per a un servei real caldrien, com a mínim, un domini, HTTPS amb un certificat vàlid, actualitzacions, còpies verificades, una política de secrets i una revisió de la integració d’usuaris.

## Evidència mínima del desplegament

Guarda en un document breu:

1. la comanda usada, ocultant o substituint el secret;
2. una captura de `docker ps` amb el contenidor actiu;
3. una captura de la pàgina accessible en el port `8080`;
4. un fragment de logs sense informació sensible;
5. el resultat de parar i arrancar de nou el contenidor;
6. una incidència trobada i la solució aplicada, si n’hi ha hagut.

## Documentació oficial

- [Instal·lació d’ONLYOFFICE Docs amb Docker](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-docker.aspx)
- [Requisits de sistema en Docker](https://helpcenter.onlyoffice.com/docs/installation/docs-community-sys-reqs-docker.aspx)
- [Imatge d’ONLYOFFICE DocumentServer](https://hub.docker.com/r/onlyoffice/documentserver/)

## Criteris treballats

- RA4.c
- RA4.f
