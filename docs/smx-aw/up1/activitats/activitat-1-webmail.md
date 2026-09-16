---
hide:
  - navigation
---
# Activitat 1. Instal·lació i configuració de Roundcube

## Finalitat

En aquesta activitat instal·larem una aplicació web per consultar i enviar correu electrònic des del navegador.

Utilitzarem tres elements:

| Element | Funció |
|---|---|
| **Ethereal Email** | Ens proporciona un compte i un servidor de correu de proves. |
| **Roundcube** | És l'aplicació web des de la qual consultarem i enviarem correus. |
| **Docker Desktop** | Ens permet instal·lar i executar Roundcube fàcilment en Windows. |

L'arquitectura que muntarem serà aquesta:

```text
                      NAVEGADOR
                         │
                         │ HTTP
                         ▼
                  ┌──────────────┐
                  │  Roundcube   │
                  │   Docker     │
                  └──────┬───────┘
                         │
              ┌──────────┴──────────┐
              │                     │
            IMAP                   SMTP
              │                     │
              ▼                     ▼
   imap.ethereal.email    smtp.ethereal.email
              │                     │
              └──────────┬──────────┘
                         ▼
                   Ethereal Email
```

És important entendre una idea abans de començar:

> **Roundcube no és el servidor de correu.**

Roundcube és només l'aplicació web que utilitzarem per comunicar-nos amb un servidor de correu.

## Criteris d'avaluació treballats

| Criteri | Descripció | Pes sobre RA5 |
|---|---|---:|
| **RA5.a** | Descriure diferents aplicacions web i d'escriptori. | 10 % |
| **RA5.b** | Instal·lar aplicacions per proporcionar accés web al servidor de correu electrònic. | 20 % |
| **RA5.c** | Configurar les aplicacions per integrar-les amb un servidor de correu. | 10 % |
| **RA5.d** | Gestionar els comptes d'usuari. | 20 % |
| **RA5.e** | Verificar l'accés al correu electrònic. | 20 % |
|  | **Total de l'activitat** | **80 %** |

## 1. Comprovar que Docker funciona

### Què has de fer

Docker Desktop ja ha d'estar instal·lat en l'ordinador.

1. Obri **Docker Desktop** i espera que indique que Docker està funcionant.
2. Obri **PowerShell**.
3. Executa:

```powershell
docker --version
```

Hauries de veure alguna cosa semblant a:

```text
Docker version 28.x.x
```

4. Comprova també Docker Compose:

```powershell
docker compose version
```

Si les dues ordres funcionen, pots continuar.

### Per què ho fem?

Docker serà l'eina que utilitzarem per executar Roundcube.

No instal·larem Roundcube directament sobre Windows. Roundcube s'executarà dins d'un **contenidor Docker**.

### Què has de comprovar?

- Docker Desktop indica que està en funcionament.
- `docker --version` mostra una versió.
- `docker compose version` mostra una versió.

## 2. Crear un compte de correu de proves

### Què has de fer

1. Accedeix a **Ethereal Email** des del navegador.
2. Crea un nou compte de prova.
3. Guarda el compte i la contrasenya que genere Ethereal.

Ethereal mostrarà una informació semblant a aquesta:

```text
Usuari:
xxxxxxxx@ethereal.email

Contrasenya:
xxxxxxxx
```

> No mostres la contrasenya en captures de pantalla ni la publiques en cap repositori.

Utilitzarem aquests servidors:

| Servei | Servidor | Port | Seguretat |
|---|---|---:|---|
| IMAP | `imap.ethereal.email` | 993 | TLS |
| SMTP | `smtp.ethereal.email` | 587 | STARTTLS |

### Per què ho fem?

Ethereal ens proporciona un servidor de proves. Així podem configurar Roundcube i comprovar l'enviament sense enviar missatges reals a persones externes.

### Què has de comprovar?

Recorda la funció de cada servei:

```text
IMAP
 ↓
Consultar el correu
Llegir missatges
Veure carpetes

SMTP
 ↓
Enviar correus
```

Per tant:

```text
Roundcube ─── IMAP ───> consulta correus

Roundcube ─── SMTP ───> envia correus
```

## 3. Crear la carpeta de treball

### Què has de fer

Obri PowerShell i executa:

```powershell
mkdir roundcube-smx
```

Entra dins de la carpeta:

```powershell
cd roundcube-smx
```

Comprova on estàs:

```powershell
pwd
```

Hauries de veure una ruta semblant a:

```text
C:\Users\alumne\roundcube-smx
```

### Per què ho fem?

La carpeta contindrà el fitxer de configuració de Docker Compose i les dades de la pràctica.

### Què has de comprovar?

La ruta actual acaba en `roundcube-smx`.

## 4. Crear el fitxer de Docker Compose

### Què has de fer

Dins de la carpeta de treball, crea el fitxer:

```powershell
New-Item docker-compose.yml -ItemType File
```

Obri'l amb Visual Studio Code:

```powershell
code docker-compose.yml
```

Si aquesta ordre no funciona, pots utilitzar:

```powershell
notepad docker-compose.yml
```

### Per què ho fem?

El fitxer indicarà a Docker quina aplicació ha d'executar, quin port exposarà i a quins serveis de correu s'ha de connectar.

### Què has de comprovar?

El fitxer es diu exactament:

```text
docker-compose.yml
```

No ha de ser `docker-compose.yml.txt`.

## 5. Escriure la configuració de Roundcube

### Què has de fer

Copia aquest contingut dins de `docker-compose.yml`:

```yaml
services:

  roundcube:

    image: roundcube/roundcubemail:latest

    ports:
      - "8080:80"

    environment:

      ROUNDCUBEMAIL_DB_TYPE: sqlite

      ROUNDCUBEMAIL_DEFAULT_HOST: ssl://imap.ethereal.email
      ROUNDCUBEMAIL_DEFAULT_PORT: 993

      ROUNDCUBEMAIL_SMTP_SERVER: tls://smtp.ethereal.email
      ROUNDCUBEMAIL_SMTP_PORT: 587

    volumes:
      - roundcube-db:/var/roundcube/db

volumes:
  roundcube-db:
```

**No executes encara Docker.** Primer entendrem què significa cada part.

### Què has de comprovar?

- El fitxer conté un servei anomenat `roundcube`.
- El port publicat és `8080:80`.
- El servidor IMAP és `imap.ethereal.email` i el port és `993`.
- El servidor SMTP és `smtp.ethereal.email` i el port és `587`.
- El fitxer no conté cap contrasenya.

## 6. Entendre el fitxer `docker-compose.yml`

### La imatge

```yaml
image: roundcube/roundcubemail:latest
```

Indica a Docker quina aplicació volem utilitzar. En aquest cas, Roundcube. Docker descarregarà la imatge automàticament.

### Els ports

```yaml
ports:
  - "8080:80"
```

Roundcube funciona dins del contenidor en el port `80`. Nosaltres podrem accedir-hi des de Windows mitjançant el port `8080`:

```text
Windows                     Contenidor

localhost:8080  ──────────>  port 80
```

Per això després entrarem en:

```text
http://localhost:8080
```

### La base de dades

```yaml
ROUNDCUBEMAIL_DB_TYPE: sqlite
```

Roundcube necessita guardar determinada informació. Utilitzarem **SQLite** perquè és una base de dades senzilla i no necessitem instal·lar MySQL o MariaDB.

### Per què ho fem?

Llegir el fitxer abans d'executar-lo ajuda a relacionar cada paràmetre amb la funció que tindrà en el servei.

## 7. Configuració IMAP

En el fitxer apareixen aquestes línies:

```yaml
ROUNDCUBEMAIL_DEFAULT_HOST: ssl://imap.ethereal.email
ROUNDCUBEMAIL_DEFAULT_PORT: 993
```

### Què has de fer?

Localitza les dues línies i identifica:

- el servidor IMAP;
- el port;
- el tipus de connexió segura.

### Per què ho fem?

Aquesta configuració indica a Roundcube on ha de connectar-se quan un usuari vulga consultar el correu.

```text
IMAP = llegir / consultar correu
```

Per això `DEFAULT_HOST` i `DEFAULT_PORT` fan referència al servidor IMAP.

## 8. Configuració SMTP

En el fitxer també tenim:

```yaml
ROUNDCUBEMAIL_SMTP_SERVER: tls://smtp.ethereal.email
ROUNDCUBEMAIL_SMTP_PORT: 587
```

### Què has de fer?

Localitza les dues línies i identifica:

- el servidor SMTP;
- el port;
- el tipus de connexió segura.

### Per què ho fem?

Aquesta configuració s'utilitza per **enviar correus**.

```text
SMTP = enviar correu
```

Per tant:

```text
                        Roundcube

                 ┌─────────┴─────────┐
                 │                   │
               IMAP                SMTP
                 │                   │
                 ▼                   ▼
              llegir               enviar
              correu               correu

          imap.ethereal         smtp.ethereal
             :993                  :587
```

## 9. Guardar i revisar el fitxer

### Què has de fer?

1. Guarda el fitxer `docker-compose.yml`.
2. Torna a PowerShell.
3. Executa:

```powershell
dir
```

### Què has de comprovar?

La llista de fitxers ha de mostrar `docker-compose.yml` i no `docker-compose.yml.txt`.

## 10. Desplegar Roundcube

### Què has de fer?

Executa:

```powershell
docker compose up -d
```

La primera vegada Docker haurà de descarregar la imatge de Roundcube i pot tardar uns minuts.

Quan acabe, comprova l'estat:

```powershell
docker compose ps
```

També pots entrar en **Docker Desktop → Containers** i comprovar que apareix el contenidor.

### Per què ho fem?

Hem passat de:

```text
Windows sense Roundcube
```

a:

```text
Windows
   │
Docker Desktop
   │
Contenidor
   │
Roundcube
```

### Què has de comprovar?

- La imatge s'ha descarregat.
- El contenidor apareix en execució.
- `docker compose ps` mostra el servei actiu.

## 11. Accedir a Roundcube

### Què has de fer?

Obri el navegador i escriu:

```text
http://localhost:8080
```

### Què has de comprovar?

Hauries de veure la pantalla d'inici de sessió de Roundcube.

Si no apareix, comprova primer:

```powershell
docker compose ps
```

## 12. Iniciar sessió

### Què has de fer?

Utilitza les credencials que t'ha proporcionat Ethereal:

```text
Usuari:
xxxxxx@ethereal.email

Contrasenya:
xxxxxxxx
```

Prem **Login / Iniciar sessió**.

### Per què ho fem?

Si pots entrar en Roundcube, significa que la connexió IMAP funciona:

```text
Roundcube
    │
    │ IMAP
    ▼
imap.ethereal.email
    │
    ▼
Compte correcte
```

## 13. Configurar la identitat

### Què has de fer?

Una vegada dins de Roundcube, entra en:

```text
Settings / Configuració
```

Busca:

```text
Identities / Identitats
```

Configura:

```text
Nom:
El teu nom i cognoms

Correu:
el teu compte d'Ethereal

Organització:
SMX Solutions
```

Crea també una signatura, per exemple:

```text
Nom i cognoms
Tècnic de sistemes
SMX Solutions
```

Guarda els canvis.

### Per què ho fem?

Una identitat és la informació que apareix com a remitent quan envies un correu. No estàs creant un nou compte: el compte continua estant en Ethereal.

## 14. Enviar un correu

### Què has de fer?

1. Prem **Compose / Redactar**.
2. Utilitza com a destinatari:

```text
client@example.com
```

3. Escriu l'assumpte:

```text
Prova Roundcube
```

4. Escriu aquest missatge:

```text
Aquest és un missatge de prova enviat
des de Roundcube utilitzant Ethereal Email.
```

5. Afig un fitxer adjunt senzill, com ara `prova.txt`.
6. Envia el correu.

### Què has de comprovar?

Si Roundcube indica que s'ha enviat correctament, la connexió SMTP està funcionant:

```text
Roundcube
    │
    │ SMTP
    ▼
smtp.ethereal.email
```

## 15. Comprovar el missatge en Ethereal

### Què has de fer?

1. Torna a la web d'Ethereal.
2. Inicia sessió amb el teu compte.
3. Busca els missatges enviats o capturats.
4. Localitza el correu que acabes d'enviar des de Roundcube.

### Per què ho fem?

Ethereal és un servidor de proves. El missatge destinat a `client@example.com` no arribarà realment a eixa adreça: Ethereal el captura perquè puguem comprovar l'enviament.

El procés complet és:

```text
Navegador
    │
    ▼
Roundcube
    │
    │ SMTP
    ▼
Ethereal
    │
    ▼
Missatge capturat
```

## 16. Provocar una avaria

### Què has de fer?

Ara comprovaràs si entens què estàs configurant.

1. Obri de nou `docker-compose.yml`.
2. Busca:

```yaml
ROUNDCUBEMAIL_SMTP_PORT: 587
```

3. Canvia-ho temporalment per:

```yaml
ROUNDCUBEMAIL_SMTP_PORT: 9999
```

4. Guarda el fitxer.
5. Reinicia el servei:

```powershell
docker compose down
docker compose up -d
```

6. Torna a `http://localhost:8080` i inicia sessió.
7. Comprova què ocorre quan intentes enviar un correu.

### Què has de comprovar?

Hauries d'observar:

```text
Iniciar sessió     → funciona
Consultar bústia   → funciona
Enviar correu      → falla
```

### Per què ho fem?

Només hem modificat la configuració **SMTP**. IMAP continua configurat correctament:

```text
IMAP → funciona → podem consultar correu

SMTP → falla → no podem enviar correu
```

Si un usuari pot llegir els correus però no pot enviar-ne, una de les primeres dades que cal revisar és la configuració SMTP.

## 17. Reparar l'avaria

### Què has de fer?

1. Torna a posar:

```yaml
ROUNDCUBEMAIL_SMTP_PORT: 587
```

2. Guarda el fitxer.
3. Reinicia el servei:

```powershell
docker compose down
docker compose up -d
```

4. Comprova que pots tornar a enviar correus.

### Què has de comprovar?

L'enviament torna a funcionar i el missatge apareix capturat en Ethereal.

## 18. Finalitzar la pràctica

Quan acabes pots detindre Roundcube:

```powershell
docker compose down
```

Aquesta ordre elimina el contenidor, però manté les dades guardades en el volum.

Si després tornes a executar:

```powershell
docker compose up -d
```

Roundcube tornarà a funcionar.

## Què has d'entendre en acabar?

La idea fonamental de la pràctica és aquesta:

```text
                     ROUND CUBE

              aplicació web de correu

                      │
         ┌────────────┴────────────┐
         │                         │
       IMAP                       SMTP
         │                         │
         ▼                         ▼
     CONSULTAR                   ENVIAR
      CORREU                     CORREU
         │                         │
      port 993                  port 587
         │                         │
         └────────────┬────────────┘
                      ▼

                    ETHEREAL

               servidor de correu
```

Roundcube **no crea ni allotja el teu compte de correu**. El compte existeix en **Ethereal**. Roundcube simplement et proporciona una interfície web per utilitzar-lo.

## Evidències a entregar

Entrega només aquestes evidències, sense mostrar contrasenyes:

| Evidència | Què ha de mostrar |
|---:|---|
| 1 | Docker Desktop amb Roundcube executant-se. |
| 2 | Pantalla principal de Roundcube. |
| 3 | Identitat i signatura configurades. |
| 4 | Missatge enviat des de Roundcube. |
| 5 | El mateix missatge capturat en Ethereal. |
| 6 | Explicació breu de què són IMAP i SMTP. |
| 7 | Explicació de per què el port `9999` impedeix enviar però permet continuar entrant. |
| 8 | Fitxer `docker-compose.yml`. |

No cal fer una memòria llarga ni documentar cada clic. Cada captura o evidència ha d'anar acompanyada d'una frase breu que explique què acredita.

## Comprovació conceptual

Respon aquestes quatre preguntes:

1. On està realment el teu compte de correu, en Roundcube o en Ethereal?
2. Què utilitza Roundcube per consultar el correu?
3. Què utilitza Roundcube per enviar-lo?
4. Per què podem entrar en Roundcube quan el port SMTP és incorrecte?

## Verificació davant del professorat

En una comprovació ràpida hauràs de poder:

- obrir Roundcube;
- explicar la diferència entre IMAP i SMTP;
- mostrar el missatge capturat en Ethereal;
- explicar què ha passat amb el port 9999;
- identificar on es troba el compte de correu.

[Següent: agenda web de l'empresa](activitat-2-calendari-web.md) · [Índex de la UP1](../index.md)
