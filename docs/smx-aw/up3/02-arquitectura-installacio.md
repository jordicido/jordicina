---
hide:
  - navigation
title: "UP3.2. Arquitectura i instal·lació d’un gestor d’arxius web"
description: "Arquitectura client-servidor, components i procés d’instal·lació de Nextcloud."
---

# UP3.2. Arquitectura i instal·lació d’un gestor d’arxius web

**Criteri relacionat:** RA3.c

## 2.1. Un gestor d’arxius és una aplicació client-servidor

Quan utilitzem Nextcloud existeixen dos elements principals.

### Client

És el dispositiu utilitzat per l’usuari:

- navegador;
- aplicació mòbil;
- client de sincronització.

### Servidor

És l’equip que executa Nextcloud i emmagatzema la informació.

```mermaid
flowchart LR
    C1[Navegador]
    C2[Client d’escriptori]
    C3[Mòbil]

    C1 -->|HTTPS| S[Servidor Nextcloud]
    C2 -->|HTTPS| S
    C3 -->|HTTPS| S
```

Aquesta arquitectura permet que molts usuaris utilitzen el mateix servei simultàniament.

## 2.2. Components del servidor

Nextcloud no funciona de manera aïllada. Necessita diferents components:

```mermaid
flowchart TD
    U[Usuari]

    U -->|HTTP / HTTPS| WS[Servidor web]
    WS --> NC[Nextcloud]
    NC --> PHP[PHP]
    NC --> DB[(Base de dades)]
    NC --> FS[(Emmagatzematge d’arxius)]
```

### Servidor web

Rep les peticions procedents dels navegadors. Alguns exemples són Apache i Nginx.

### PHP

Nextcloud està desenvolupat principalment amb PHP, per la qual cosa el servidor necessita un entorn capaç d’executar-lo.

### Base de dades

La base de dades emmagatzema informació relacionada amb el funcionament del sistema, com ara usuaris, configuració, comparticions, aplicacions i metadades.

!!! warning "Base de dades ≠ arxius"
    Els documents pujats pels usuaris no es guarden normalment com un gran conjunt de documents dins de la base de dades. La base de dades guarda principalment informació sobre el sistema i els seus recursos, mentre que els fitxers s’emmagatzemen en l’espai configurat.

### Emmagatzematge

És l’espai físic on s’emmagatzemen els arxius dels usuaris. Pot estar format per discos locals, volums dedicats, sistemes d’emmagatzematge externs o recursos de xarxa.

## 2.3. Què passa quan obrim un arxiu?

Suposem que Laura inicia sessió i intenta descarregar:

```text
/Projectes/client-a/pressupost.pdf
```

Simplificant molt el procés:

```mermaid
sequenceDiagram
    participant U as Laura
    participant N as Navegador
    participant W as Servidor web
    participant NC as Nextcloud
    participant F as Emmagatzematge

    U->>N: Obri pressupost.pdf
    N->>W: Sol·licitud HTTPS
    W->>NC: Processa la petició
    NC->>NC: Comprova usuari i permisos
    NC->>F: Sol·licita l’arxiu
    F-->>NC: Retorna l’arxiu
    NC-->>N: Envia el document
    N-->>U: Mostra/descarrega
```

La comprovació de permisos és una diferència fonamental respecte a accedir directament al sistema de fitxers.

## 2.4. Procés general d’instal·lació

Independentment de la ferramenta concreta, una instal·lació sol seguir una seqüència semblant:

```mermaid
flowchart LR
    A[Preparar servidor]
    --> B[Instal·lar dependències]
    --> C[Preparar BD]
    --> D[Instal·lar aplicació]
    --> E[Configurar]
    --> F[Crear administrador]
    --> G[Comprovar funcionament]
```

### 1. Preparar el servidor

Cal disposar d’un sistema operatiu funcional i connexió de xarxa.

### 2. Instal·lar els components necessaris

Servidor web, llenguatge de servidor, base de dades i altres dependències.

### 3. Preparar la base de dades

És recomanable utilitzar un usuari específic de base de dades amb els permisos necessaris sobre la base de dades de Nextcloud.

### 4. Instal·lar l’aplicació

S’instal·len els fitxers de Nextcloud en el servidor.

### 5. Configurar el servei

S’indiquen, entre altres elements, les dades de connexió a la base de dades, el directori de dades, l’administrador inicial i la URL o domini utilitzat.

### 6. Comprovar el funcionament

Una instal·lació no està acabada fins que hem comprovat que podem accedir des del navegador, iniciar sessió, pujar i descarregar arxius i que no apareixen errors importants de configuració.

!!! important "Instal·lar no és només copiar fitxers"
    Una aplicació web depén de diversos servicis. Quan alguna cosa falla hem d’identificar en quina capa es troba el problema: xarxa, servidor web, PHP, base de dades, permisos o configuració de l’aplicació.

## 2.5. Desplegament mitjançant contenidors

Nextcloud es pot instal·lar de manera tradicional sobre un servidor o es pot desplegar mitjançant contenidors. Les dues opcions necessiten els mateixos components, però els organitzen i els executen de manera diferent.

### Instal·lació tradicional i desplegament amb contenidors

En una instal·lació tradicional, els components s’instal·len directament en el sistema operatiu del servidor:

```text
Servidor
├── Apache
├── PHP
├── MariaDB
└── Nextcloud
```

En un desplegament amb contenidors, cada servei s’executa en un entorn separat:

```mermaid
flowchart LR
    U[Navegador] -->|Port publicat| NC[Contenidor Nextcloud]
    NC --> DB[Contenidor MariaDB]

    NC --> V1[(Volum Nextcloud)]
    DB --> V2[(Volum MariaDB)]
```

Aquest diagrama és un **exemple de desplegament amb una base de dades externa**. És una arquitectura més completa, adequada per comparar alternatives, però no és el desplegament que utilitzarem en l’Activitat 3.2.

!!! info "Docker no elimina l’arquitectura"
    Encara que utilitzem contenidors, Nextcloud continua necessitant els components necessaris per executar l’aplicació i una base de dades.

    Docker simplement canvia la forma en què aquests servicis es despleguen i s’aïllen.

Docker no és el gestor d’arxius. És el mitjà que utilitzem per empaquetar, desplegar i aïllar els servicis que formen Nextcloud.

### Conceptes mínims de Docker

Per entendre la pràctica només necessitem aquests conceptes:

| Concepte | Explicació |
|---|---|
| **Imatge** | Plantilla a partir de la qual es crea un contenidor. |
| **Contenidor** | Instància en execució creada a partir d’una imatge. |
| **Port** | Permet accedir des de l’exterior a un servei que funciona dins del contenidor. |
| **Volum** | Espai d’emmagatzematge que permet conservar dades de manera persistent. |
| **Variable d’entorn** | Valor de configuració que es proporciona al servei, com ara un usuari o una contrasenya. |
| **Docker Compose** | Ferramenta que permet definir i executar un o diversos servicis relacionats. |

### Persistència de les dades

Un contenidor es pot aturar, eliminar i tornar a crear. Per això, les dades importants no haurien de dependre únicament del sistema de fitxers intern del contenidor.

```mermaid
flowchart TD
    C[Contenidor Nextcloud]
    -->|es pot eliminar| N[Nou contenidor]

    V[(Volum persistent)]
    -->|les dades es conserven| N
```

!!! important "Persistència"
    Un contenidor es pot eliminar i tornar a crear.

    Les dades que han de conservar-se s’han d’emmagatzemar en volums persistents.

En el cas de Nextcloud, cal conservar com a mínim els arxius dels usuaris i la informació de la base de dades. En la pràctica comprovarem que aquestes dades continuen disponibles encara que recreem el contenidor.

No és el mateix **reiniciar** un servei, **eliminar i recrear** el contenidor o **eliminar el volum**:

- `docker compose restart` reinicia el servei sense eliminar el contenidor ni el volum.
- `docker compose down` elimina el contenidor i la xarxa del projecte, però manté els volums amb nom per defecte.
- `docker compose down -v` també pot eliminar el volum del projecte i, per tant, les dades que conté.

En aquesta pràctica no s’ha d’utilitzar `-v`.

### Docker Compose

Docker Compose permet descriure en un únic fitxer els servicis necessaris per executar una aplicació formada per un o diversos contenidors. En un desplegament més complet es poden definir, per exemple, un servei per a Nextcloud i un altre per a MariaDB:

```yaml
services:
  nextcloud:
    ...

  db:
    ...
```

En aquest fitxer es poden definir els servicis, les imatges, els ports, els volums, les variables d’entorn i les relacions entre contenidors. El fitxer funcional formarà part de l’activitat pràctica.

### Comunicació entre contenidors

Els contenidors d’un mateix desplegament poden comunicar-se entre ells. Nextcloud utilitza MariaDB per consultar i guardar la informació del sistema:

```mermaid
flowchart LR
    N[Nextcloud] -->|consulta i guarda dades| DB[(MariaDB)]
```

Nextcloud necessita accedir a MariaDB, però l’usuari no necessita accedir directament a la base de dades. Per això, normalment només es publica el port necessari per accedir a la interfície web de Nextcloud; la comunicació amb MariaDB es realitza internament entre els contenidors.

## 2.6. La instal·lació que utilitzarem a classe: Nextcloud amb SQLite

En l’Activitat 3.2 treballarem amb un desplegament simplificat de Nextcloud. L’objectiu no és aprendre a administrar bases de dades o construir una infraestructura Docker complexa, sinó **instal·lar i utilitzar un gestor d’arxius web**.

Per això utilitzarem:

- **Un únic contenidor** amb la imatge `nextcloud:apache`, que inclou els components necessaris per servir l’aplicació web.
- **SQLite**, una base de dades que funciona sense necessitat d’instal·lar un segon servidor de base de dades.
- **Un volum persistent**, per conservar la configuració, la base de dades SQLite i els documents pujats.
- **Docker Compose**, per iniciar i gestionar el contenidor a partir d’un fitxer de configuració proporcionat pel professor.

```mermaid
flowchart TD
    U["Navegador de l’alumne"] -->|"HTTP · port 8081"| N["Contenidor Nextcloud · Apache i PHP"]
    N --> D["SQLite · base de dades de l’aplicació"]
    N --> V[("Volum nextcloud_data")]
    D -.->|"Dades persistents dins del volum"| V
```

!!! info "SQLite en l’activitat"
    SQLite és adequada per a una instal·lació senzilla de proves i aprenentatge. En sistemes de producció amb diversos usuaris i més càrrega, és habitual utilitzar una base de dades externa com MariaDB o PostgreSQL.

**Com llegim el `compose.yaml` de la pràctica?**

```yaml
services:
  nextcloud:
    image: nextcloud:apache
    ports:
      - "8081:80"
    volumes:
      - nextcloud_data:/var/www/html

volumes:
  nextcloud_data:
```

| Element | Què significa? |
| --- | --- |
| `nextcloud` | Nom del servei que gestiona Compose. |
| `image: nextcloud:apache` | Imatge que s’utilitza per crear el contenidor. |
| `8081:80` | Accedim al **port 8081 de l’ordinador**; la petició es redirigix al **port 80 del contenidor**. |
| `nextcloud_data:/var/www/html` | Les dades d’aquesta ubicació es conserven en un volum persistent. |
| `volumes: nextcloud_data` | Es declara el volum que utilitzarà el servei. |

Si Docker i el navegador s’executen en **el mateix ordinador**, l’accés serà normalment `http://localhost:8081`. Si Docker s’executa dins d’una **màquina virtual o un altre equip**, caldrà utilitzar l’adreça i la configuració de xarxa indicades pel professor.

##### Ordres bàsiques que necessitarem

```bash
# Iniciar Nextcloud en segon pla
docker compose up -d

# Comprovar si el servei està funcionant
docker compose ps

# Reiniciar el servei
docker compose restart

# Eliminar el contenidor i la xarxa del projecte, mantenint el volum
docker compose down

# Tornar a crear i iniciar el contenidor
docker compose up -d
```

!!! warning "Atenció als volums"
    `docker compose down` **no elimina els volums amb nom** per defecte. En canvi, `docker compose down -v` **sí que pot eliminar el volum del projecte i les seues dades**. No utilitzes `-v` en aquesta pràctica.

**Què comprovarem?** Pujarem un document, reiniciarem el servei i comprovarem que l’arxiu continua disponible. Això permet observar la persistència sense haver de configurar una base de dades externa.

!!! tip "Si el servei no respon"
    Comprova que has executat l’ordre dins de la carpeta que conté `compose.yaml`, que `docker compose ps` mostra el servei en execució i que el port `8081` no està ocupat per una altra aplicació. No esborres el volum per intentar solucionar un error.
