---
hide:
  - navigation
title: "2. Activació i configuració de mòduls d'Apache"
description: "Mòduls d'Apache 2.4, activació, configuració i principi de mínima funcionalitat."
---
# 2. Activació i configuració de mòduls d'Apache

**Criteri treballat:** CA2.b — ampliar la funcionalitat del servidor mitjançant l'activació i configuració de mòduls.

Apache no és només un programa que serveix fitxers. Té un nucli amb les funcions bàsiques del servidor i una arquitectura modular que permet afegir funcionalitats quan l'arquitectura del lloc les necessita.

Un mòdul no és simplement una ordre que cal executar: és el component que aporta capacitats i directives noves. El treball complet és **necessitat → mòdul → activació → configuració → validació → aplicació → verificació**.

## 2.1. Què és un mòdul d'Apache?

El nucli d'Apache gestiona el cicle bàsic de la connexió i de la petició. Els mòduls s'integren en diferents fases per aportar, per exemple, TLS, reescriptura, autenticació, capçaleres o proxy invers:

```text
                    Apache HTTP Server
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       mod_ssl        mod_rewrite       mod_headers
          │                │                │
        HTTPS        Reescriptura      Capçaleres HTTP
```

No totes les peticions passen per tots els mòduls ni en aquest ordre exacte. El diagrama representa el model mental: Apache pot ampliar el tractament bàsic amb components especialitzats.

Per exemple, si `mod_rewrite` no està carregat, directives com aquestes no estan disponibles per al servidor:

```apache
RewriteEngine On
RewriteRule ^about-us$ about.html [L]
```

Activar un mòdul tampoc configura automàticament la funcionalitat completa. `mod_ssl` permet el tractament TLS, però encara cal configurar un `VirtualHost` de 443 i els certificats; `mod_proxy` permet el proxy, però cal indicar a quin servei intern s'envien les peticions.

## 2.2. Consultar els mòduls carregats

Per veure els mòduls que Apache ha carregat en l'execució actual:

```bash
apache2ctl -M
```

Exemple parcial:

```text
ssl_module (shared)
rewrite_module (shared)
headers_module (shared)
proxy_module (shared)
proxy_http_module (shared)
```

Per buscar-ne un de concret:

```bash
apache2ctl -M | grep rewrite
```

Aquesta comprovació respon a una pregunta concreta: el mòdul està carregat ara? No substitueix la revisió de la configuració ni una prova funcional.

## 2.3. Què fa realment `a2enmod`?

En Ubuntu/Debian, les definicions dels mòduls solen estar separades així:

```text
/etc/apache2/mods-available/
       rewrite.load
            │
            │ sudo a2enmod rewrite
            ▼
/etc/apache2/mods-enabled/
       rewrite.load -> ../mods-available/rewrite.load
```

Alguns mòduls tenen també un fitxer `.conf` amb directives addicionals. `a2enmod rewrite` gestiona els enllaços necessaris perquè Apache incloga la configuració disponible quan llança o recarrega el servei. No descarrega el mòdul d'Internet ni escriu la regla de reescriptura que necessita l'aplicació.

Per retirar-lo de la configuració activa:

```bash
sudo a2dismod rewrite
```

El fitxer original continua normalment en `mods-available/`; el que canvia és que deixa de formar part de `mods-enabled/`. Després cal validar i aplicar el canvi:

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

El mateix model s'aplica als llocs amb `a2ensite` i `a2dissite`: les ordres gestionen l'activació de configuracions disponibles mitjançant enllaços.

## 2.4. El cicle complet d'un mòdul

Quan una aplicació necessita una funcionalitat, el procediment no acaba amb `a2enmod`:

```text
necessitat
   ↓
selecció del mòdul i les dependències
   ↓
activació amb a2enmod
   ↓
configuració de les directives que aporta
   ↓
apache2ctl configtest
   ↓
systemctl reload apache2
   ↓
verificació amb apache2ctl -M, curl, navegador o logs
```

Si `configtest` falla, no s'ha de continuar amb la recàrrega. Si la sintaxi és correcta però la prova funcional falla, cal separar les hipòtesis: mòdul no carregat, regla incorrecta, context no permés, permisos, Virtual Host no seleccionat o recurs inexistent.

## 2.5. `mod_rewrite`: quin problema resol?

Una URL visible per a l'usuari no sempre coincideix amb el fitxer o l'aplicació que ha de respondre. `mod_rewrite` permet expressar transformacions basades en patrons.

Per exemple, el navegador demana:

```text
/about-us
```

Apache pot buscar internament:

```text
/about.html
```

En aquest cas, el client continua mostrant `/about-us`, però Apache serveix el recurs que correspon a `about.html`. Aquesta és una **reescriptura interna**.

### Reescriptura interna

```apache
RewriteEngine On
RewriteRule ^about-us$ about.html [L]
```

La regla transforma la ruta durant el tractament de la petició. No envia una resposta de redirecció al navegador ni provoca, per si mateixa, una segona petició HTTP.

### Redirecció HTTP

```apache
RewriteEngine On
RewriteRule ^about-us$ about.html [R=302,L]
```

Amb el flag `R`, Apache respon amb un codi de redirecció, en aquest cas `302`. El navegador rep la instrucció, canvia la URL visible i fa una nova petició al destí.

La diferència és important:

| Operació | Què veu el navegador? | Què ocorre a la xarxa? |
|---|---|---|
| Reescriptura interna | Continua veient `/about-us`. | Apache resol internament un altre recurs dins de la mateixa petició. |
| Redirecció HTTP | Canvia a la URL de destí. | Apache envia 301/302 i el navegador fa una nova petició. |

No s'han d'utilitzar indistintament els verbs *reescriure* i *redirigir*. Una redirecció pot ser útil per canviar una URL pública; una reescriptura interna és útil quan volem conservar l'URL però canviar el recurs que la resol.

## 2.6. Anatomia d'una `RewriteRule`

Un exemple de ruta amb un identificador numèric és:

```apache
RewriteRule ^productes/([0-9]+)$ producte.php?id=$1 [L,QSA]
```

```text
RewriteRule   patró                    destinació             flags
              │                        │                      │
              ▼                        ▼                      ▼
              ^productes/([0-9]+)$     producte.php?id=$1     [L,QSA]
                         │
                         └── grup capturat → $1
```

- `^` indica l'inici del patró.
- `$` indica el final del patró.
- `([0-9]+)` captura un o més dígits.
- `()` defineix el grup que després es pot reutilitzar.
- `$1` és el valor capturat pel primer grup; per exemple, `42`.
- `[L]` indica que aquesta és l'última regla que s'ha de provar en la ronda actual.
- `[QSA]` conserva els paràmetres de consulta que ja portava la URL i els afig als de la destinació.

En un `.htaccess` situat en el directori del lloc, el patró sol escriure's sense la barra inicial (`^productes...`). En un altre context, el prefix amb què Apache presenta la ruta pot variar; cal consultar el context abans de copiar una regla.

## 2.7. `.htaccess` i `AllowOverride`

Un fitxer `.htaccess` és un fitxer de configuració distribuïda. Permet aplicar determinades directives a un directori sense editar directament la configuració principal d'Apache.

Per exemple, aquest bloc permet que el directori publique directives compatibles des del seu `.htaccess`:

```apache
<Directory /var/www/daw>
    AllowOverride All
    Require all granted
</Directory>
```

La relació essencial és:

```text
AllowOverride None
        ↓
Apache no aplica les directives de .htaccess

AllowOverride All
        ↓
Apache permet les directives autoritzades en .htaccess
```

`AllowOverride All` és còmode per a un laboratori, però és una concessió ampla. En un servidor administrat per nosaltres sol ser preferible escriure la configuració directament en el `VirtualHost` i mantindre `AllowOverride None` quan siga possible: la configuració queda centralitzada, és més fàcil d'auditar i Apache no ha de buscar fitxers `.htaccess` en cada directori del camí.

`.htaccess` és especialment útil quan:

- no es té accés a la configuració principal del servidor;
- s'utilitza un allotjament compartit;
- es necessita una configuració específica per directori i el servidor ho permet.

El fitxer no és màgic: si `AllowOverride` no autoritza les directives corresponents, Apache les ignorarà o donarà un error segons la directiva i el context.

## 2.8. Altres mòduls: una necessitat, no una enumeració

La selecció ha de començar pel problema que volem resoldre:

| Necessitat del servidor | Mòdul |
|---|---|
| HTTPS/TLS | `mod_ssl` |
| URL amigables o transformacions de rutes | `mod_rewrite` |
| Capçaleres HTTP de seguretat | `mod_headers` |
| Publicar una aplicació que escolta en un altre port | `mod_proxy` i `mod_proxy_http` |
| Compressió de respostes | `mod_deflate` |
| Autenticació HTTP bàsica | `mod_auth_basic` i, sovint, `mod_authn_file` |
| Memòria cau | `mod_cache` |
| Estat i diagnòstic del servidor | `mod_status` |
| Expiració de recursos | `mod_expires` |
| HTTP/2 | `mod_http2` |
| PHP-FPM mitjançant FastCGI | `mod_proxy_fcgi` |

Per exemple, activar `mod_proxy` no envia cap petició fins a l'aplicació si no es configura un `ProxyPass`:

```apache
ProxyPass        / http://127.0.0.1:3000/
ProxyPassReverse / http://127.0.0.1:3000/
```

Apache pot gestionar el Virtual Host, TLS i els logs mentre l'aplicació escolta internament en el port 3000. La necessitat concreta determina els mòduls i la configuració addicional.

## 2.9. Principi de mínima funcionalitat

En un servidor és recomanable mantindre actius només els mòduls realment necessaris. Cada funcionalitat addicional:

- incrementa la complexitat de la configuració;
- incorpora codi que cal mantindre i actualitzar;
- pot ampliar la superfície d'atac;
- pot dificultar el diagnòstic d'una incidència.

Per això, el criteri no és activar-ho tot per si de cas, sinó justificar cada mòdul i retirar els que ja no necessita l'arquitectura.

<a id="pràctica-up22-mod_rewrite-en-htaccess"></a>

## Pràctica UP2.2: `mod_rewrite` en `.htaccess`

La pràctica treballa un cas concret amb `mod_rewrite`, `.htaccess`, `AllowOverride`, `configtest`, `reload` i una comprovació amb navegador o `curl`. La teoria ha de permetre adaptar el raonament a un altre lloc o una altra regla:

1. identificar la funcionalitat que es necessita;
2. comprovar si el mòdul està carregat;
3. activar-lo si cal;
4. saber en quin context s'aplica la configuració;
5. validar la sintaxi;
6. recarregar el servei;
7. comprovar el codi HTTP, la URL visible, el recurs servit i els logs.

La pràctica no consisteix només a aconseguir que una ordre funcione. Cal poder explicar per què `AllowOverride` és necessari en un `.htaccess`, per què una regla interna no canvia la URL i quina evidència confirma que el mòdul i la regla estan actius.

## 2.11. Resum

En acabar aquest bloc has de ser capaç de:

- explicar què és un mòdul i quina capacitat aporta;
- consultar els mòduls carregats amb `apache2ctl -M`;
- entendre què fan `a2enmod` i `a2dismod` sobre `mods-available/` i `mods-enabled/`;
- configurar les directives que aporta un mòdul;
- validar amb `apache2ctl configtest` i aplicar amb `systemctl reload apache2`;
- diferenciar una reescriptura interna d'una redirecció HTTP;
- interpretar una `RewriteRule` bàsica;
- entendre la relació entre `.htaccess` i `AllowOverride`;
- aplicar el principi de mínima funcionalitat.

### Comprova que ho entens

1. Quina diferència hi ha entre activar `mod_rewrite` i configurar una `RewriteRule`?
2. Quantes peticions HTTP fa normalment el navegador després d'una reescriptura interna? I després d'una redirecció?
3. Què ocorre si un `.htaccess` conté una regla però el `<Directory>` té `AllowOverride None`?
4. Per què `proxy` i `proxy_http` poden ser necessaris alhora?
5. Quines proves faries per demostrar que una funcionalitat nova funciona realment?
