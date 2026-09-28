---
hide:
  - navigation
title: "8. Proves de funcionament i documentació del desplegament"
description: "Verificació, diagnòstic, proves HTTP, logs, persistència i documentació reproduïble dels desplegaments."
---

# 8. Proves de funcionament i documentació del desplegament

**Criteris relacionats: RA1.f i RA1.i**

Instal·lar un servidor o executar un contenidor no demostra que el desplegament funcione. Un procés professional necessita dues coses més:

1. proves de funcionament que demostren que cada capa respon com esperem;
2. documentació que permeta entendre i repetir el procés.

Una bona documentació no diu simplement «funciona»: registra què s'ha provat, com s'ha provat i quin resultat s'ha obtingut.

!!! note "Treball semipresencial"
    En aquest bloc trobaràs moltes ordres de comprovació. No les memoritzes com una llista. Aprén què comprova cadascuna i en quina capa del sistema l'has d'utilitzar.

## 8.1 Instal·lar no és verificar

Suposa que acabes d'executar:

~~~bash
docker compose up -d
~~~

I veus:

~~~text
Container dawshop-web  Started
Container dawshop-db   Started
~~~

Això demostra que Docker ha pogut iniciar contenidors, però encara no demostra que Apache responga, que el port siga accessible, que PHP funcione, que l'aplicació puga connectar a la BBDD, que les dades persistisquen ni que no hi haja errors en els logs.

~~~text
STARTED ≠ FUNCIONA CORRECTAMENT
~~~

## 8.2 Què significa «funciona»?

Per a un servidor web podríem exigir:

~~~text
Procés en execució
        │
        ▼
Port escoltant
        │
        ▼
Connexió possible
        │
        ▼
Resposta HTTP
        │
        ▼
Codi d'estat esperat
        │
        ▼
Contingut correcte
~~~

Per a una aplicació amb BBDD:

~~~text
Web respon
   │
   ▼
Backend funciona
   │
   ▼
Connexió BBDD
   │
   ▼
Consulta correcta
   │
   ▼
Dades persistents
~~~

Una única captura del navegador no demostra totes aquestes capes.

## 8.3 La piràmide de verificació

Quan diagnostiquem un desplegament convé anar de les capes més bàsiques a les més específiques.

~~~mermaid
flowchart TB
    A[1. Host i recursos] --> B[2. Motor / servei]
    B --> C[3. Procés o contenidor]
    C --> D[4. Port i xarxa]
    D --> E[5. Protocol HTTP]
    E --> F[6. Aplicació]
    F --> G[7. Dades i persistència]
    G --> H[8. Logs i observabilitat]
~~~

Si la capa 2 falla, no té sentit començar modificant el codi de l'aplicació.

## 8.4 Verificació i diagnòstic

**Verificació** és comprovar que el sistema compleix allò esperat:

~~~bash
curl -I http://localhost:8080
~~~

~~~text
HTTP/1.1 200 OK
~~~

**Diagnòstic** és buscar per què no es compleix allò esperat:

~~~bash
docker compose logs web
~~~

Podem descobrir, per exemple, «Address already in use».

~~~text
La verificació respon: «Funciona?»
El diagnòstic respon: «Si no funciona, on i per què falla?»
~~~

## 8.5 Evidència tècnica

No és el mateix escriure «He comprovat Docker i funciona» que documentar:

~~~text
Prova: verificar Docker Engine
Ordre: docker version
Resultat: client i servidor responen
Conclusió: el CLI pot comunicar-se amb el daemon
~~~

Una evidència útil ha d'indicar:

- objectiu de la prova;
- ordre o acció;
- resultat;
- interpretació.

## 8.6 Registrar l'entorn abans de provar

Quan una pràctica falla, una pregunta habitual és: en quin entorn s'ha executat?

| Element | Ordre |
| --- | --- |
| Sistema operatiu | cat /etc/os-release |
| Arquitectura | uname -m |
| Kernel | uname -r |
| Docker | docker version |
| Docker Compose | docker compose version |

Això evita informes del tipus «Ubuntu» o «Docker» sense cap versió concreta.

## 8.7 Provar el Docker Engine

### Estat del servei en Linux

~~~bash
sudo systemctl status docker
~~~

### Comunicació client-servidor

~~~bash
docker version
~~~

Has de distingir entre Client i Server. Si només apareix informació del client i hi ha un error de connexió, el CLI existeix però el motor no està disponible per a eixe usuari o context.

### Informació general

~~~bash
docker info
~~~

Pot mostrar informació sobre contenidors, imatges, runtime, emmagatzematge, xarxa i sistema host.

## 8.8 Validar un projecte Compose abans d'arrancar

~~~bash
docker compose config
docker compose config --services
~~~

Exemple de serveis esperats:

~~~text
web
db
phpmyadmin
~~~

!!! warning "Atenció amb variables i secrets"
    docker compose config pot mostrar valors resolts. No copies automàticament tota l'eixida a una memòria o captura si conté contrasenyes o secrets. Redacta o oculta la informació sensible.

## 8.9 Arrancar i comprovar l'estat

~~~bash
docker compose up -d
docker compose ps
~~~

Exemple conceptual:

~~~text
NAME               SERVICE       STATUS
dawshop-web-1      web           Up
dawshop-db-1       db            Up
dawshop-pma-1      phpmyadmin    Up
~~~

No et limites a mirar STATUS. Comprova també els ports, els noms, el temps en execució i l'estat de salut si existeix.

## 8.10 docker ps i docker ps -a

~~~bash
docker ps
docker ps -a
~~~

docker ps mostra principalment contenidors en execució. docker ps -a també mostra els que han finalitzat.

Si un contenidor «no apareix», és possible que haja arrancat i finalitzat immediatament:

~~~text
Created → Started → Error → Exited
~~~

En eixe cas, el següent pas sol ser mirar els logs.

## 8.11 Comprovar ports en el host

Si esperem http://localhost:8080, podem comprovar si hi ha un socket escoltant:

~~~bash
ss -ltn
ss -ltn | grep ':8080'
sudo ss -ltnp | grep ':8080'
~~~

Amb Docker, la publicació de ports incorpora regles de xarxa i NAT. Per això també convé consultar docker compose ps.

Una publicació com aquesta:

~~~text
0.0.0.0:8080->80/tcp
~~~

s'interpreta així:

~~~text
host:8080
   │
   ▼
contenidor:80
~~~

Si el Compose publica 8080:80, cal utilitzar el port 8080 del host, no http://localhost:80.

## 8.12 Proves HTTP amb curl

El navegador és útil, però curl dona informació més directa.

~~~bash
# Capçaleres
curl -I http://localhost:8080

# Resposta completa
curl -i http://localhost:8080

# Fallar si el servidor retorna un error HTTP
curl -f http://localhost:8080

# Mostrar només el codi HTTP
curl -sS -o /dev/null -w '%{http_code}\n' http://localhost:8080
~~~

!!! note "HEAD no sempre és igual que GET"
    curl -I envia una petició HEAD. És molt útil per veure capçaleres, però una aplicació pot tractar HEAD i GET de manera diferent. Si tens dubtes, prova també una petició GET.

### Interpretar codis de resposta

| Codi | Significat general | Què ens diu |
| --- | --- | --- |
| 200 | OK | El servidor ha respost correctament |
| 301/302 | Redirecció | Cal seguir o revisar la URL |
| 401 | No autenticat | El recurs exigeix autenticació |
| 403 | Prohibit | El servidor respon però denega l'accés |
| 404 | No trobat | El servidor respon però no troba el recurs |
| 500 | Error intern | El servidor o l'aplicació ha fallat |
| 502 | Bad Gateway | Un proxy no obté una resposta correcta del backend |
| 503 | Servei no disponible | Servei temporalment no disponible |

Una resposta 404 demostra que hi ha hagut comunicació HTTP amb un servidor. No és el mateix que connection refused o un timeout.

## 8.13 Provar des de diferents punts

Una arquitectura pot funcionar des d'un lloc i fallar des d'un altre.

~~~mermaid
flowchart LR
    C[Client] --> H[Host:8080]
    H --> W[web:80]
    W --> D[db:3306]
~~~

- Des del mateix host: curl http://localhost:8080.
- Des d'una altra màquina: http://IP_DEL_HOST:8080.
- Des d'un altre contenidor: docker compose exec web sh i una prova cap a la destinació interna.

Una prova des del host valida Client → Host → Web. Una prova des de web cap a db valida Web → BBDD.

La pregunta és: en quin punt falla el recorregut?

## 8.14 Resolució de noms i localhost

En Compose, un servei pot trobar un altre pel nom del servei, per exemple db, en lloc de confiar en una IP fixa que pot canviar.

~~~bash
docker compose exec web getent hosts db
~~~

!!! tip "Nom de servei, no localhost"
    Des de web, localhost significa el mateix contenidor web, no el contenidor de base de dades. Per connectar amb la BBDD d'un altre servei, utilitza el seu nom, per exemple db.

~~~text
HOST:
localhost → host

CONTENIDOR web:
localhost → contenidor web

CONTENIDOR db:
localhost → contenidor db
~~~

Si el backend està en web i la BBDD en db, aquesta configuració pot ser incorrecta:

~~~dotenv
DB_HOST=localhost
~~~

Normalment necessitarem:

~~~dotenv
DB_HOST=db
~~~

## 8.15 Logs: la primera font d'informació

~~~bash
docker compose logs
docker compose logs --tail=50
docker compose logs --tail=50 web
docker compose logs -f web
~~~

Els logs poden mostrar errors d'arrancada, dependències absents, credencials incorrectes, connexions rebutjades, fitxers que falten, errors HTTP, excepcions i fallades de permisos.

!!! tip "No diagnostiques a cegues"
    Si el servei està en execució però no es comporta com esperes, consulta els logs abans de canviar configuracions aleatòriament.

### Logs i peticions

Terminal 1:

~~~bash
docker compose logs -f web
~~~

Terminal 2:

~~~bash
curl http://localhost:8080
~~~

Intenta localitzar en els logs una entrada relacionada amb la petició:

~~~text
acció del client
      │
      ▼
petició HTTP
      │
      ▼
servidor
      │
      ▼
registre en logs
~~~

## 8.16 Inspeccionar i explorar un contenidor

~~~bash
docker inspect NOM_CONTENIDOR
docker compose exec web sh
pwd
ls -la /var/www/html
~~~

docker inspect pot incloure la imatge, variables, mounts, xarxes, IP interna, ports, estat, healthcheck i política de reinici.

Aquestes ordres permeten comprovar fitxers muntats, variables, resolució de noms, connexions internes i configuració disponible.

!!! note "Documenta la dada, no el soroll"
    Una captura amb 200 línies que no interpretes aporta menys que una línia seleccionada i explicada correctament.

No totes les imatges contenen bash, curl, ping o altres utilitats.

!!! warning "No instal·les ferramentes improvisadament en producció"
    Si una imatge no conté una eina de diagnòstic, no significa que hages d'alterar el contenidor permanentment. En un laboratori podem adaptar-nos; en entorns reals s'utilitzen imatges i tècniques de diagnòstic controlades.

## 8.17 Verificar dades i persistència

Una aplicació amb BBDD no està completament verificada si només comprovem que la pàgina inicial carrega.

Una prova de persistència pot ser:

1. arrancar el projecte;
2. crear una dada;
3. verificar-la;
4. parar i retirar els contenidors;
5. tornar a crear-los;
6. comprovar que la dada continua existint.

~~~mermaid
flowchart LR
    A[Crear dada] --> B[Comprovar dada]
    B --> C[docker compose down]
    C --> D[docker compose up -d]
    D --> E[Comprovar de nou]
    E --> F{La dada continua?}
~~~

!!! danger "No uses down -v en aquesta prova"
    docker compose down -v elimina els volums del projecte i destruiria intencionadament la persistència que estàs intentant verificar.

## 8.18 Proves de reinici, running i healthy

Podem provar què passa si el servei es reinicia:

~~~bash
docker compose restart web
docker compose ps
curl -f http://localhost:8080
~~~

Per a una BBDD, reinicia el servei corresponent i comprova que torna a estar disponible i conserva les dades si la persistència està ben configurada.

Docker pot saber que un procés principal està en execució (running), però això no garanteix que l'aplicació estiga preparada.

Un healthcheck executa una comprovació periòdica:

~~~yaml
services:
  web:
    image: la-meua-imatge
    healthcheck:
      test: ["CMD-SHELL", "curl -fsS http://localhost/ || exit 1"]
      interval: 10s
      timeout: 3s
      retries: 5
      start_period: 10s
~~~

!!! warning "La ferramenta ha d'existir dins de la imatge"
    Si la imatge no inclou curl, el healthcheck fallarà encara que la web funcione. El test s'ha d'adaptar a les ferramentes disponibles.

~~~text
Sense healthcheck:
procés principal viu → running

Amb healthcheck:
procés viu
   │
   ├── prova correcta → healthy
   └── proves fallides → unhealthy
~~~

Això és especialment útil quan un servei depén d'un altre: una aplicació no hauria d'assumir que, si el contenidor de la BBDD ha arrancat, ja accepta connexions.

## 8.19 Smoke test i proves de recursos

Un smoke test és una comprovació ràpida de les funcions essencials després d'un desplegament. Per a DAWShop podria incloure la portada, el backend, la connexió amb la BBDD, una operació bàsica i l'absència d'errors crítics en logs.

~~~bash
docker compose ps
curl -fsS http://localhost:8080/ > /dev/null
docker compose logs --tail=30 web
curl -fsS http://localhost:8080/health
~~~

Si existeix una ruta de salut, pot retornar:

~~~json
{
  "status": "ok"
}
~~~

Una ruta /health només és útil si realment comprova allò que volem mesurar.

Podem observar el consum aproximat dels contenidors:

~~~bash
docker stats
docker stats --no-stream
~~~

Això pot ajudar a detectar un contenidor bloquejat, memòria inesperadament alta o CPU sostinguda. No és una prova de rendiment completa.

## 8.20 Matriu de proves

Una manera professional de planificar la verificació és definir una matriu:

| ID | Component | Prova | Resultat esperat | Evidència |
| --- | --- | --- | --- | --- |
| P01 | Docker | docker version | Client i servidor disponibles | Eixida |
| P02 | Compose | docker compose ps | Serveis en execució | Eixida |
| P03 | Web | curl a :8080 | HTTP 200 | Codi HTTP |
| P04 | phpMyAdmin | Navegador o curl a :8081 | Interfície accessible | Captura + codi |
| P05 | BBDD | Connexió interna | Connexió correcta | Eixida o log |
| P06 | Persistència | Reiniciar o recrear | Dada conservada | Abans/després |
| P07 | Logs | Petició de prova | Entrada localitzada | Fragment de log |

Aquesta taula transforma «provar coses» en un pla de verificació.

## 8.21 Diagnòstic sistemàtic

Quan la web no funciona:

~~~mermaid
flowchart TD
    A[La web no funciona] --> B{Docker Engine respon?}
    B -- No --> B1[Revisar servei/permisos]
    B -- Sí --> C{Contenidor web running?}
    C -- No --> C1[ps -a + logs]
    C -- Sí --> D{Port publicat?}
    D -- No --> D1[Revisar Compose]
    D -- Sí --> E{curl al host respon?}
    E -- No --> E1[Port, procés intern, logs]
    E -- Sí --> F{Aplicació correcta?}
    F -- No --> F1[Logs d'aplicació]
    F -- Sí --> G{BBDD accessible?}
    G -- No --> G1[Xarxa, nom db, credencials, readiness]
    G -- Sí --> H[Verificar dades i funcionalitat]
~~~

La idea és reduir el problema pas a pas.

### Exemple: localhost:8080 no respon

~~~bash
# 1. Motor
docker version

# 2. Estat
docker compose ps

# 3. Historial de contenidors
docker ps -a

# 4. Logs
docker compose logs --tail=50 web

# 5. Port
ss -ltn | grep ':8080'

# 6. Configuració
docker compose config
~~~

No modifiques el compose.yaml fins que tingues una hipòtesi.

### Exemple: web funciona però no connecta amb BBDD

~~~bash
docker compose ps
docker compose logs --tail=50 db
docker compose logs --tail=50 web
docker network ls
docker inspect NOM_CONTENIDOR
~~~

Confirma el nom del servei, el port intern, l'usuari, la base de dades i les variables correctes, però sense mostrar la contrasenya en captures o informes.

### Exemple: phpMyAdmin funciona però la BBDD no apareix

Podem tindre:

~~~text
Navegador → phpMyAdmin     OK
phpMyAdmin → db            ERROR
~~~

La pantalla inicial de phpMyAdmin només demostra la primera part. Revisa PMA_HOST: db i els logs de phpmyadmin i db.

## 8.22 Documentar no és fer un àlbum de captures

Cada evidència hauria de respondre:

- què estic comprovant?
- què he fet?
- què ha passat?
- què concloc?

Exemple:

> Comprovació del port web. S'ha executat curl -I http://localhost:8080. El servidor ha respost amb HTTP/1.1 200 OK; per tant, la publicació del port i el servei HTTP estan operatius des del host.

Això és molt més útil que escriure «Funciona correctament».

## 8.23 Objectius i estructura de la documentació

La documentació de desplegament ha de buscar:

| Objectiu | Què permet |
| --- | --- |
| Reproduïbilitat | Una altra persona pot repetir el procés. |
| Traçabilitat | Sabem quina versió i configuració s'han utilitzat. |
| Diagnòstic | Sabem on mirar si falla. |
| Seguretat | No exposem secrets. |
| Mantenibilitat | Podem actualitzar l'entorn sense començar de zero. |

Una estructura adequada per a les activitats de la UP és:

1. Objectiu
2. Entorn utilitzat
3. Versions
4. Arquitectura
5. Fitxers de configuració
6. Procés d'instal·lació o desplegament
7. Proves de funcionament
8. Incidències i solucions
9. Resultat final
10. Conclusions

## 8.24 Objectiu, entorn i versions

L'objectiu ha de descriure què s'ha volgut aconseguir:

> Desplegar un servidor web Apache i una interfície phpMyAdmin mitjançant Docker Compose, verificar l'accés des del host i identificar els serveis, ports, xarxes i mecanismes de persistència.

Documenta l'entorn:

| Element | Exemple |
| --- | --- |
| SO | Ubuntu 24.04 LTS |
| Arquitectura | x86_64 |
| Docker | Versió obtinguda amb docker version |
| Compose | Versió obtinguda amb docker compose version |
| Projecte | daw-nomcognom-docker-apm |

No inventes versions. Obtín-les del teu sistema.

Per poder repetir un desplegament, especifica també les etiquetes de les imatges:

~~~yaml
image: httpd:2.4
~~~

És més informatiu que usar una imatge sense versió.

## 8.25 Arquitectura i fitxers de configuració

Un esquema és millor que una descripció ambigua:

~~~mermaid
flowchart LR
    U[Navegador] -->|8080| W[Apache/PHP]
    U -->|8081| P[phpMyAdmin]
    W --> DB[(BBDD)]
    P --> DB
    DB --> V[(Volum)]
~~~

Explica quins ports són públics, quins serveis són interns i on persistixen les dades.

No cal copiar centenars de línies si només són rellevants unes poques:

~~~yaml
services:
  web:
    ports:
      - "8080:80"
~~~

Explicació: el port 8080 del host es redirigeix al port 80 del contenidor web. Això demostra comprensió.

!!! warning "Documenta l'arquitectura real"
    Si el teu Compose és web:8080, phpmyadmin:8081 i db interna, no dibuixes Internet → Apache → Tomcat → PostgreSQL només perquè és l'esquema general de la UP.

## 8.26 Procés d'instal·lació i desplegament

Documenta els passos en ordre:

1. S'ha comprovat la versió del sistema.
2. S'ha instal·lat Docker segons la documentació indicada.
3. S'ha verificat el daemon.
4. S'ha executat hello-world.
5. S'ha preparat el projecte Compose.
6. S'han iniciat els serveis.

Inclou les ordres importants:

~~~bash
docker version
docker run --rm hello-world
docker compose up -d
~~~

## 8.27 Proves de funcionament

Cada prova ha de tindre objectiu, ordre o acció, resultat esperat, resultat obtingut i conclusió:

~~~text
Objectiu:
Comprovar el servidor web.

Ordre:
curl -sS -o /dev/null -w '%{http_code}\n' http://localhost:8080

Esperat:
200

Obtingut:
200

Conclusió:
El servei HTTP és accessible des del host.
~~~

## 8.28 Incidències i resultat final

Els errors no fan pitjor l'informe si estan ben analitzats:

~~~text
Incidència:
El port 8080 estava ocupat.

Diagnòstic:
ss -ltnp mostrava un altre servei escoltant en 8080.

Solució:
S'ha aturat el servei de laboratori anterior o s'ha canviat el port
segons les indicacions de la pràctica.

Verificació:
curl ha retornat 200.
~~~

Resumeix què queda operatiu:

~~~text
[OK] Docker Engine
[OK] Compose
[OK] Apache/PHP en localhost:8080
[OK] phpMyAdmin en localhost:8081
[OK] comunicació interna amb BBDD
[OK] persistència verificada
~~~

No marques OK si no ho has comprovat.

## 8.29 Captures i secrets

Una captura útil mostra l'ordre i el resultat, té una mida llegible, evita informació personal innecessària, no conté secrets i està acompanyada d'una explicació.

No existeix un número màgic de captures. Una bona regla és una evidència per cada afirmació tècnica important. No necessites quatre captures quasi idèntiques de docker ps si una sola captura llegible demostra l'estat dels serveis.

Evita incloure:

- contrasenyes reals;
- tokens;
- claus privades;
- cookies de sessió;
- credencials cloud;
- variables sensibles;
- fitxers .env complets.

~~~dotenv
DB_PASSWORD=[OCULT]
~~~

## 8.30 Plantilla de documentació en Markdown

~~~markdown
# Desplegament del laboratori

## 1. Objectiu

Descriure què s'ha desplegat.

## 2. Entorn

| Element | Valor |
|---|---|
| Sistema operatiu | ... |
| Docker | ... |
| Compose | ... |

## 3. Arquitectura

Explicació dels serveis, ports, xarxes i volums.

## 4. Configuració

Fragments rellevants de compose.yaml.

## 5. Desplegament

docker compose up -d

Explicació.

## 6. Proves

### P01. Estat dels serveis

docker compose ps

Resultat: ...

Conclusió: ...

## 7. Incidències

...

## 8. Resultat final

...
~~~

La documentació també ha de deixar clar el directori des del qual s'executen les ordres i les versions o etiquetes utilitzades.

## 8.31 DAWShop: pla de verificació complet

~~~mermaid
flowchart LR
    U[Client] -->|8080| W[Web]
    U -->|8081| PM[phpMyAdmin]
    W --> DB[(BBDD)]
    PM --> DB
    DB --> V[(Volum)]
~~~

| Prova | Ordre o acció |
| --- | --- |
| A. Motor | docker version |
| B. Configuració | docker compose config --services |
| C. Estat | docker compose ps |
| D. Web | curl a http://localhost:8080 |
| E. phpMyAdmin | curl a http://localhost:8081 |
| F. Xarxa interna | Comprovar que el servei pot resoldre db |
| G. Persistència | Crear, recrear i verificar una dada |
| H. Logs | Fer una petició i localitzar-la en els logs |

Un 200 o una redirecció esperada pot ser correcte segons l'aplicació.

En l'activitat de servidor web en Docker, una verificació completa inclou docker compose ps, proves HTTP en els ports publicats, logs, identificació de serveis i ports, persistència si hi ha BBDD i documentació del resultat. Això permet demostrar RA1.f i RA1.i.

## 8.32 Exemple d'evidència bona

~~~text
P03. Accés al servidor web

Ordre:
curl -sS -o /dev/null -w '%{http_code}\n' http://localhost:8080/

Resultat:
200

Interpretació:
El host pot arribar al port publicat 8080 i el contenidor web retorna
una resposta HTTP correcta.
~~~

I:

~~~bash
docker compose ps
~~~

Interpretació: els serveis necessaris es troben en execució i els ports publicats coincideixen amb els definits en el projecte.

## 8.33 Què passa si una prova falla?

No manipules el resultat per fer que l'informe semble perfecte. Documenta l'evolució:

~~~text
Esperat: 200
Obtingut: 500
Diagnòstic: docker compose logs web
Causa: ...
Solució: ...
Reprova: 200
~~~

Això demostra verificació, diagnòstic, resolució i documentació.

## 8.34 Ordres de comprovació

| Ordre | Pregunta que respon |
| --- | --- |
| docker version | Client i motor poden comunicar-se? |
| docker info | Quin entorn Docker tinc? |
| docker ps | Quins contenidors estan en execució? |
| docker ps -a | Quins contenidors existeixen encara que hagen finalitzat? |
| docker compose config | Com queda resolta la configuració? |
| docker compose ps | Quin estat tenen els serveis del projecte? |
| docker compose logs | Què han registrat els serveis? |
| docker inspect | Com està configurat realment un objecte Docker? |
| ss -ltn | Quins ports TCP escolten al host? |
| curl | Quina resposta HTTP obtenim? |
| docker stats | Quin consum instantani tenen els contenidors? |

No es tracta de memoritzar la taula, sinó d'associar pregunta i ferramenta.

## 8.35 Errors conceptuals habituals

!!! warning "docker compose up -d no dona error"
    Només sabem que Compose ha pogut intentar crear i iniciar els serveis. Encara cal provar-los.

!!! warning "El contenidor està running"
    No necessàriament l'aplicació està bé. Pot estar arrancant, bloquejada, sense BBDD o retornant errors.

!!! warning "Veig phpMyAdmin"
    Només has comprovat la interfície de phpMyAdmin. Encara falta comprovar la connexió amb la BBDD.

!!! warning "Una captura és una prova"
    Només si mostra una evidència rellevant i està interpretada.

!!! warning "Documentar és copiar totes les ordres"
    No. Documentar significa explicar el procés de manera suficient per entendre'l i repetir-lo.

!!! warning "Puc mostrar .env perquè és una pràctica"
    No si conté secrets o credencials que no s'han de publicar.

!!! warning "localhost sempre és el meu ordinador"
    No. localhost fa referència al sistema o espai de xarxa des del qual s'està fent la connexió.

## 8.36 Checklist abans de lliurar

### Entorn

- [ ] He indicat el sistema operatiu.
- [ ] He registrat les versions rellevants.
- [ ] He identificat l'arquitectura.

### Configuració

- [ ] He explicat els serveis.
- [ ] He explicat els ports.
- [ ] He explicat els volums o bind mounts.
- [ ] He explicat la xarxa interna quan és rellevant.

### Verificació

- [ ] He comprovat el motor o servei.
- [ ] He comprovat els contenidors.
- [ ] He comprovat HTTP.
- [ ] He revisat els logs.
- [ ] He comprovat la comunicació entre serveis.
- [ ] He comprovat la persistència si hi ha dades persistents.

### Documentació

- [ ] Les captures són llegibles.
- [ ] Cada captura té explicació.
- [ ] Les ordres estan escrites.
- [ ] Els resultats estan interpretats.
- [ ] Les incidències estan explicades.
- [ ] No apareixen contrasenyes o secrets.
- [ ] Una altra persona podria repetir el procés.

## 8.37 Autoavaluació

1. Per què docker compose up -d no demostra per si sol que l'aplicació funciona?
2. Quina diferència hi ha entre docker ps i docker ps -a?
3. Què comprova curl que no comprova systemctl status?
4. Quina informació aporta un 404 respecte d'un error de connexió?
5. Per què és útil provar des del host i també entre contenidors?
6. Per què localhost pot ser una configuració incorrecta per a DB_HOST?
7. Quina diferència hi ha entre running i healthy?
8. Què és un smoke test?
9. Per què els logs són importants en el diagnòstic?
10. Com verificaries que un volum de BBDD realment persisteix?
11. Quins quatre elements mínims hauria de tindre una evidència tècnica?
12. Per què no convé copiar l'eixida completa de docker compose config sense revisar-la?
13. Què aporta una matriu de proves?
14. Com documentaries una incidència que primer falla i després resols?
15. Quines característiques fan que una documentació siga reproduïble?

<details>
<summary><strong>Orientació de les respostes</strong></summary>

1. Perquè només confirma l'inici o creació dels serveis, no el funcionament de totes les capes.
2. ps mostra principalment els actius; ps -a també mostra contenidors finalitzats.
3. curl comprova el protocol HTTP i una resposta real del servei accessible des d'eixe punt.
4. Un 404 implica que hi ha resposta HTTP; un error de connexió indica que no s'ha establit correctament la comunicació.
5. Per aïllar si el problema està en la publicació del port, en la xarxa interna o en l'aplicació.
6. Perquè dins d'un contenidor localhost és eixe mateix contenidor; la BBDD pot estar en un altre servei anomenat db.
7. running indica procés principal actiu; healthy implica que una prova de salut definida està superant-se.
8. Una comprovació ràpida de funcions essencials després d'un desplegament.
9. Perquè registren errors, avisos, peticions i informació del cicle de vida que ajuda a identificar la causa.
10. Crear una dada, retirar o recrear contenidors sense eliminar el volum i comprovar que la dada continua.
11. Objectiu, acció o ordre, resultat i interpretació.
12. Perquè pot mostrar variables resoltes i informació sensible.
13. Defineix què es prova, què s'espera i quina evidència demostrarà el resultat.
14. Esperat → obtingut → diagnòstic → causa → solució → nova prova.
15. Versions, passos ordenats, configuració rellevant, ordres, proves, resultats i absència de dependències implícites no documentades.

</details>

!!! success "Idea clau"
    Un desplegament no es considera acabat quan els serveis s'inicien, sinó quan podem demostrar —amb proves i evidències— que les capes funcionen, les dades es conserven i una altra persona pot entendre i repetir el procés.

[Anterior: virtualització, núvol i contenidors](07-virtualitzacio-servidors-nuvol-contenidors.md) · [Índex de la UP1](index.md)
