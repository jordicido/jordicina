---
hide:
  - navigation
title: "8. Mòduls d'Apache en Docker"
description: "Guia pràctica per instal·lar, configurar i demostrar mod_auth_basic, mod_ssl, mod_headers i mod_rewrite en Docker."
---
# 8. Mòduls d'Apache en Docker

**Activitat relacionada:** UP2.8 — instal·lació i configuració de mòduls en
Docker.

En una màquina virtual modifiquem directament `/etc/apache2/`. En Docker, la
configuració ha de quedar reproduïble en un `Dockerfile`, un fitxer de
configuració, una imatge o un servei de Compose. Entrar al contenidor i fer
canvis manuals pot servir per diagnosticar, però no és una entrega repetible.

## 8.1. Objectiu i assignació

Cada persona treballarà un mòdul i farà una demostració funcional:

| Mòdul | Funció que s'ha de demostrar |
|---|---|
| `mod_auth_basic` | una ruta protegida demana credencials i només permet un usuari vàlid |
| `mod_ssl` | Apache respon per HTTPS amb un certificat de laboratori |
| `mod_headers` | la resposta inclou les capçaleres de seguretat configurades |
| `mod_rewrite` | una URL pública es reescriu internament a un fitxer o ruta real |

La presentació ha d'explicar el mòdul assignat; no cal convertir-la en una
explicació exhaustiva dels quatre.

## 8.2. Imatge base reproduïble

Estructura mínima del projecte:

```text
up28-modul/
├── Dockerfile
├── compose.yaml
├── conf/
│   └── 000-default.conf
└── public/
    └── index.html
```

`Dockerfile` base. El valor de `MODULE` es canvia segons el mòdul assignat:

```dockerfile
FROM debian:bookworm-slim

ARG MODULE=rewrite
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y --no-install-recommends apache2 apache2-utils openssl ca-certificates \
    && case "$MODULE" in \
         auth_basic) a2enmod auth_basic authn_file ;; \
         ssl)        a2enmod ssl ;; \
         headers)    a2enmod headers ;; \
         rewrite)    a2enmod rewrite ;; \
         *) echo "Mòdul no admés: $MODULE" >&2; exit 1 ;; \
       esac \
    && rm -rf /var/lib/apt/lists/*

COPY conf/000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY public/ /var/www/html/

EXPOSE 80 443
CMD ["apachectl", "-D", "FOREGROUND"]
```

`compose.yaml` per a les variants HTTP:

```yaml
services:
  web:
    build:
      context: .
      args:
        MODULE: rewrite
    ports:
      - "8080:80"
    restart: unless-stopped
```

Construeix i comprova l'entorn:

```bash
docker compose build --no-cache
docker compose up -d
docker compose ps
docker compose exec web apache2ctl -M
docker compose exec web apache2ctl configtest
curl -i http://localhost:8080/
```

El mòdul s'ha de veure dins del contenidor. Activar-lo en l'Apache de l'host
no modifica el contenidor.

## 8.3. `mod_rewrite`

Canvia `MODULE` a `rewrite` i usa un Virtual Host que permeta `.htaccess`:

```apache
<VirtualHost *:80>
    DocumentRoot /var/www/html
    <Directory /var/www/html>
        Options -Indexes
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

En `public/.htaccess`:

```apache
RewriteEngine On
RewriteRule ^about-us/?$ about.html [L]
```

Després de reconstruir:

```bash
echo '<h1>About Docker</h1>' > public/about.html
docker compose build --no-cache
docker compose up -d
curl -i http://localhost:8080/about-us
```

La prova correcta retorna `200` i el contingut d'`about.html` sense canviar la
URL del navegador.

## 8.4. `mod_auth_basic`

Canvia `MODULE` a `auth_basic` i protegeix una carpeta concreta:

```apache
<Directory /var/www/html/privat>
    AuthType Basic
    AuthName "Zona privada"
    AuthUserFile /etc/apache2/.htpasswd
    Require valid-user
</Directory>
```

En un laboratori es pot crear l'usuari dins del contenidor:

```bash
docker compose exec web htpasswd -c /etc/apache2/.htpasswd alumne
mkdir -p public/privat
echo '<h1>Zona privada</h1>' > public/privat/index.html
docker compose restart web
curl -i http://localhost:8080/privat/
curl -i -u alumne http://localhost:8080/privat/
```

La primera petició ha de retornar `401` i la segona, amb una credencial vàlida,
`200`. No inclogues la contrasenya en captures, vídeos ni repositoris. Basic
Authentication només és acceptable amb HTTPS o en un laboratori controlat,
perquè les credencials viatgen codificades en Base64, no xifrades.

## 8.5. `mod_headers`

Canvia `MODULE` a `headers` i afegeix en el Virtual Host:

```apache
Header always set X-Frame-Options "DENY"
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

Reconstrueix la imatge i comprova les capçaleres:

```bash
docker compose build --no-cache
docker compose up -d
docker compose exec web apache2ctl -M | grep headers
curl -I http://localhost:8080/
```

La captura ha de mostrar la resposta HTTP i les tres capçaleres. Explica que
`mod_headers` modifica la resposta, però no substitueix la configuració segura
de l'aplicació ni TLS.

## 8.6. `mod_ssl`

Canvia `MODULE` a `ssl`. Per al laboratori, genera el certificat fora de la
imatge i munta'l en mode només lectura:

```bash
mkdir -p certs
openssl req -x509 -nodes -newkey rsa:2048 -days 365 \
  -keyout certs/docker.key \
  -out certs/docker.crt \
  -subj "/C=ES/ST=Valencia/L=Catadau/O=IES/OU=MRE/CN=localhost" \
  -addext "subjectAltName=DNS:localhost"
```

Configura el servei amb el port HTTPS i el volum:

```yaml
services:
  web:
    build:
      context: .
      args:
        MODULE: ssl
    ports:
      - "8443:443"
    volumes:
      - ./certs:/etc/apache2/certs:ro
```

El Virtual Host TLS ha d'incloure:

```apache
<IfModule mod_ssl.c>
<VirtualHost *:443>
    ServerName localhost
    DocumentRoot /var/www/html
    SSLEngine on
    SSLCertificateFile /etc/apache2/certs/docker.crt
    SSLCertificateKeyFile /etc/apache2/certs/docker.key
</VirtualHost>
</IfModule>
```

Comprova-ho amb:

```bash
docker compose up -d --build
docker compose exec web apache2ctl -M | grep ssl
curl -k -I https://localhost:8443/
```

`-k` només evita el rebuig del certificat autofirmat en la prova. En la
presentació cal explicar aquesta limitació i diferenciar-la d'un certificat
emés per una CA de confiança.

## 8.7. Diagnòstic i evidències

Quan la demo falle, segueix aquest ordre:

```bash
docker compose ps
docker compose logs --tail=50 web
docker compose exec web apache2ctl configtest
docker compose exec web apache2ctl -M
docker compose exec web ls -la /etc/apache2/mods-enabled/
```

La memòria o presentació ha d'incloure, com a mínim:

- objectiu i funció del mòdul;
- `Dockerfile` i configuració rellevant;
- construcció i estat del contenidor;
- comprovació que el mòdul està actiu;
- una prova positiva i, quan siga útil, una prova negativa;
- resultat observable en navegador o `curl`;
- conclusió i limitacions del laboratori.

## 8.8. Guió de la presentació de deu minuts

1. Portada: membres del grup, mòdul professional i curs acadèmic.
2. Índex i objectiu.
3. Què resol el mòdul i quan s'utilitza.
4. Imatge Docker, fitxers i configuració.
5. Instal·lació/activació dins del contenidor.
6. Prova funcional amb resultat llegible.
7. Error habitual i diagnòstic.
8. Conclusió.

La demostració en directe ha de partir d'un estat conegut: projecte, fitxers i
ordres preparades. No mostres secrets ni afirmes que una prova funciona si no
es pot reproduir davant del grup.
