---
hide:
  - navigation
---
# Pràctica 2. Instal·lació i configuració d'Apache i Tomcat

## Què treballarem?

En aquesta pràctica construiràs un entorn bàsic de desplegament sobre un servidor Ubuntu. Instal·laràs i administraràs un servidor web Apache HTTP Server i un servidor d'aplicacions Apache Tomcat, i comprovaràs quina responsabilitat té cadascun.

Treballaràs els criteris d'avaluació següents del **RA1**:

| Criteri | Què hauràs de demostrar |
| --- | --- |
| **RA1.c** | Realitzar la instal·lació i configuració bàsica de servidors web. |
| **RA1.d** | Realitzar la instal·lació i configuració bàsica de servidors d'aplicacions. |

**Temps orientatiu:** 5 hores, entre la preparació de la màquina, la pràctica, les proves i l'informe.

**Modalitat:** lliurament individual, excepte si el professorat autoritza una altra organització. La comprovació individual forma part de l'evidència.

## Objectiu final

En acabar has de disposar d'una màquina Ubuntu en què funcionen, com a mínim, aquests serveis:

```text
                    UBUNTU SERVER
                         │
             ┌───────────┴───────────┐
             │                       │
             ▼                       ▼
        Apache HTTP              Apache Tomcat
          port 80                   port 8080
             │                       │
             ▼                       ▼
        Web estàtica           Aplicació Java / WAR
```

A més, has de ser capaç de:

- iniciar, aturar i reiniciar els serveis;
- comprovar-ne l'estat i els ports;
- localitzar els fitxers principals;
- consultar els logs;
- verificar l'accés des del servidor i des d'un altre equip;
- identificar i explicar errors bàsics.

## Normes de seguretat i laboratori

Treballa en una màquina virtual o servidor expressament autoritzat pel professorat. Utilitza xarxa NAT o xarxa interna del laboratori i no publiques els ports en Internet.

Abans de modificar configuracions importants:

1. crea una instantània de la màquina virtual o una còpia de les configuracions;
2. anota la versió d'Ubuntu, Java, Apache i Tomcat;
3. llig l'ordre abans d'executar-la i comprova el directori de destinació;
4. no utilitzes contrasenyes reals ni les inclogues en l'informe.

Si una ordre concreta depén de la versió instal·lada, registra l'alternativa que has utilitzat i el motiu.

## Part A. Preparació de la màquina

Utilitza una màquina virtual amb **Ubuntu Server 24.04** o la versió que indique el professorat. Inicia sessió amb un usuari amb permisos d'administració.

Actualitza l'índex de paquets:

```bash
sudo apt update
```

Comprova el nom de la màquina i la seua adreça IP:

```bash
hostname
ip addr
```

També pots utilitzar `ip a`. Anota la interfície activa i la IP que utilitzaràs per accedir des de l'equip host.

### Evidència A

Conserva una captura o un fragment de terminal on es veja:

- el nom de la màquina;
- la IP;
- l'ordre executada i el seu resultat.

No cal mostrar totes les interfícies si només una és la del laboratori.

## Part B. Instal·lació d'Apache

Instal·la Apache HTTP Server:

```bash
sudo apt install apache2
```

Comprova l'estat del servei:

```bash
systemctl status apache2
```

El servei ha d'aparéixer actiu. També pots fer una comprovació breu sense obrir la interfície interactiva:

```bash
systemctl is-active apache2
```

### Comprovació des del servidor

Consulta la pàgina per defecte:

```bash
curl -I http://127.0.0.1
```

També pots obrir `http://localhost` des d'un navegador amb entorn gràfic.

### Comprovació des de l'equip host

Des del navegador del teu ordinador accedeix a:

```text
http://IP_DEL_SERVIDOR
```

Per exemple, si la IP anotada és `192.168.1.50`:

```text
http://192.168.1.50
```

Ha d'aparéixer la pàgina d'Apache o la resposta que proporcione la versió instal·lada.

### Evidència B

Inclou una captura del navegador o de `curl` on es puga identificar:

- la pàgina o resposta d'Apache;
- la IP o URL utilitzada;
- el codi d'estat si has usat `curl`.

## Part C. Administració del servei Apache

Executa les ordres següents i registra què fa cadascuna:

```bash
sudo systemctl stop apache2
sudo systemctl status apache2
sudo systemctl start apache2
sudo systemctl restart apache2
sudo systemctl status apache2
```

### Comprovació obligatòria

1. Para Apache.
2. Intenta accedir a la pàgina des del navegador.
3. Torna a iniciar-lo.
4. Actualitza la pàgina.
5. Explica la diferència observable entre `stop`, `start` i `restart`.

En una configuració real, `restart` pot interrompre connexions existents. Més endavant utilitzaràs `reload` després de validar una configuració.

### Evidència C

Mostra l'estat aturat o el resultat de la prova sense servei i, després, l'estat actiu amb una resposta correcta. No cal fer una captura de cada ordre.

## Part D. Publicació del primer lloc web

Apache utilitza habitualment aquest directori per al lloc per defecte:

```text
/var/www/html
```

Crea o edita una pàgina pròpia. Pots preparar-la en el teu directori personal i copiar-la després al directori publicat:

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>DAW - Desplegament</title>
</head>
<body>
    <h1>Servidor Apache operatiu</h1>
    <p>Pràctica de Desplegament d'Aplicacions Web</p>
    <p>Nom: EL_TEU_NOM</p>
</body>
</html>
```

Desa-la com:

```text
/var/www/html/index.html
```

Comprova el contingut i la resposta:

```bash
curl http://127.0.0.1
curl -I http://IP_DEL_SERVIDOR
```

### Evidència D

Inclou una captura del navegador mostrant la pàgina pròpia i una breu explicació de quin directori i quin fitxer ha publicat Apache.

## Part E. Creació d'un lloc independent amb VirtualHost

Ara crearàs un segon lloc web sense substituir conceptualment l'estructura del lloc per defecte.

Crea el directori:

```bash
sudo mkdir -p /var/www/dawshop
```

Prepara `/var/www/dawshop/index.html` amb contingut propi. Per exemple, identifica el lloc com **DAWShop** i indica que és una pàgina de laboratori.

### Configuració del VirtualHost

Crea el fitxer:

```text
/etc/apache2/sites-available/dawshop.conf
```

Amb una configuració bàsica semblant a aquesta:

```apache
<VirtualHost *:80>
    ServerName dawshop.local
    DocumentRoot /var/www/dawshop

    <Directory /var/www/dawshop>
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/dawshop-error.log
    CustomLog ${APACHE_LOG_DIR}/dawshop-access.log combined
</VirtualHost>
```

Activa el lloc:

```bash
sudo a2ensite dawshop.conf
```

Valida la sintaxi abans de recarregar:

```bash
sudo apache2ctl configtest
```

Només si el resultat és `Syntax OK`, recarrega Apache:

```bash
sudo systemctl reload apache2
```

### Resolució del nom en el laboratori

Perquè `dawshop.local` resolga en un laboratori, pots afegir una entrada temporal al fitxer `hosts` de l'equip des d'on fas la prova:

```text
IP_DEL_SERVIDOR dawshop.local
```

Si només vols provar des del mateix servidor, també pots enviar explícitament la capçalera `Host`:

```bash
curl -H 'Host: dawshop.local' http://127.0.0.1/
```

No utilitzes un domini d'una altra persona ni modifiques equips que no estiguen autoritzats.

### Evidència E

Inclou:

- el contingut rellevant de `dawshop.conf`;
- el resultat de `apache2ctl configtest`;
- la pàgina DAWShop oberta amb el nom o la URL de prova.

## Part F. Logs d'Apache

Localitza el directori:

```text
/var/log/apache2/
```

Consulta els registres generals i els específics del lloc:

```bash
sudo tail /var/log/apache2/access.log
sudo tail /var/log/apache2/error.log
sudo tail /var/log/apache2/dawshop-access.log
sudo tail /var/log/apache2/dawshop-error.log
```

Ara:

1. accedeix diverses vegades a DAWShop;
2. consulta el registre d'accés;
3. demana una ruta inexistent, com `/no-existeix`;
4. comprova el codi `404` i l'entrada corresponent al log.

Explica quina informació pots obtindre d'un registre d'accés: data i hora, adreça d'origen, petició, codi d'estat, mida de la resposta i altres camps del format configurat.

### Evidència F

Inclou un exemple de registre d'accés obtingut del teu servidor, amb les adreces o dades personals sensibles ocultes, i explica què significa cada part important.

## Part G. Instal·lació de Java

Tomcat necessita una màquina virtual Java. Instal·la el JDK indicat pel professorat; com a opció habitual en Ubuntu:

```bash
sudo apt install default-jdk
```

Comprova la versió:

```bash
java -version
```

Anota la versió real que has obtingut. No assumes que `default-jdk` correspon a la mateixa versió en totes les versions d'Ubuntu.

### Evidència G

Inclou el resultat de `java -version` i indica si és compatible amb la versió de Tomcat que utilitzaràs.

## Part H. Instal·lació de Tomcat

Segueix les instruccions del [bloc de Tomcat de la UP1](../06-servidor-aplicacions-tomcat.md). El professorat indicarà la versió exacta i l'artefacte autoritzat.

No copies una URL antiga sense comprovar-la. Registra:

- versió de Tomcat;
- URL o font de l'artefacte;
- suma de comprovació si el professorat la proporciona;
- directori final de la instal·lació;
- usuari propietari del procés.

La instal·lació ha de quedar sota:

```text
/opt/tomcat
```

Una seqüència orientativa, que hauràs d'adaptar a l'artefacte real, és:

```bash
sudo mkdir -p /opt/tomcat
sudo tar -xzf apache-tomcat-VERSIO.tar.gz -C /opt/tomcat --strip-components=1
sudo chown -R tomcat:tomcat /opt/tomcat
```

Si el compte `tomcat` no existeix, crea'l segons les instruccions del material i no executes el servei com a `root`.

Configura les variables necessàries:

```text
JAVA_HOME=/usr/lib/jvm/default-java
CATALINA_HOME=/opt/tomcat
```

Comprova els valors abans d'arrancar:

```bash
echo "$JAVA_HOME"
echo "$CATALINA_HOME"
```

### Evidència H

Inclou la versió de Tomcat, el directori final i la configuració de variables sense mostrar informació sensible.

## Part I. Arrancada i comprovació de Tomcat

Comprova que els scripts tenen permisos d'execució i inicia Tomcat amb l'usuari del servei:

```bash
sudo -u tomcat "$CATALINA_HOME/bin/startup.sh"
```

Si has configurat les variables en una sessió diferent, utilitza les rutes absolutes o carrega la configuració abans d'executar l'ordre.

Comprova el port 8080:

```bash
curl -I http://127.0.0.1:8080
```

Des de l'equip host, prova:

```text
http://IP_DEL_SERVIDOR:8080
```

El port 8080 és intern en una arquitectura amb Apache davant. En aquest pas el provaràs directament per separar el diagnòstic de Tomcat del de la configuració del proxy.

### Evidència I

Inclou una captura del navegador o de `curl` en què aparega la resposta de Tomcat i es veja el port `:8080`.

## Part J. Explorar l'estructura de Tomcat

Localitza dins de `$CATALINA_HOME` almenys aquests directoris:

```text
bin/
conf/
logs/
webapps/
```

Completa la taula relacionant cada directori amb el servidor que has instal·lat:

| Directori | Funció en aquesta instal·lació | Exemple de fitxer o element |
| --- | --- | --- |
| `bin/` |  |  |
| `conf/` |  |  |
| `logs/` |  |  |
| `webapps/` |  |  |
| `lib/` |  |  |
| `temp/` i `work/` |  |  |

No copies únicament definicions d'Internet: indica què has localitzat realment i per a què serveix.

## Part K. Desplegament d'una aplicació WAR

Utilitza l'aplicació `.war` proporcionada pel professorat. No descarregues ni desplegues una aplicació de tercers sense autorització.

Copia l'artefacte a:

```text
$CATALINA_HOME/webapps/
```

Per exemple:

```text
dawshop.war
```

Comprova que Tomcat el processa i que apareix el context corresponent:

```text
http://IP_DEL_SERVIDOR:8080/dawshop
```

El nom del WAR sol determinar el context path, però la configuració concreta pot variar. Revisa també si s'ha creat un directori desplegat i consulta els logs.

### Evidència K

Inclou:

1. el fitxer `.war` situat en `webapps`;
2. el directori generat després del desplegament, si correspon;
3. l'aplicació funcionant al navegador;
4. la versió o identificador de l'artefacte desplegat.

## Part L. Logs de Tomcat

Localitza:

```text
$CATALINA_HOME/logs/
```

Observa els fitxers disponibles. Para i torna a iniciar Tomcat:

```bash
"$CATALINA_HOME/bin/shutdown.sh"
"$CATALINA_HOME/bin/startup.sh"
```

Consulta els logs després de l'arrancada i del desplegament. Busca errors de Java, permisos, ports, classes, dependències o connexió amb altres serveis.

### Pregunta

Si una aplicació WAR no arranca correctament, per què els logs haurien de ser un dels primers llocs que consultaries? Relaciona la resposta amb el moment de l'arrancada, el context de l'aplicació i l'error concret.

## Part M. Comparació Apache–Tomcat

Completa individualment:

| Característica | Apache HTTP Server | Apache Tomcat |
| --- | --- | --- |
| Tipus de servidor |  |  |
| Port utilitzat en la pràctica |  |  |
| Contingut estàtic |  |  |
| Aplicacions Java |  |  |
| Directori principal de contingut o aplicacions |  |  |
| Logs |  |  |
| Ordre o script d'arrancada |  |  |
| Paper en una arquitectura amb proxy invers |  |  |

Finalitza explicant amb les teues paraules:

> **Per què Apache i Tomcat no realitzen exactament la mateixa funció?**

## Part N. Diagnòstic d'incidències

Resol els casos següents. En cada resposta indica l'ordre de comprovació, la hipòtesi i l'evidència que esperaries trobar.

### Incidència 1

```text
http://IP_DEL_SERVIDOR
```

no respon.

Indica almenys tres comprovacions, per exemple:

1. la IP i la connectivitat;
2. l'estat d'Apache;
3. el port en escolta;
4. la configuració i els logs;
5. el tallafoc o la xarxa de la màquina virtual.

### Incidència 2

Apache funciona però:

```text
http://IP_DEL_SERVIDOR:8080
```

no respon.

Explica on buscaries el problema i com separaries un error del procés Tomcat, del port, de la xarxa o de la configuració de Java.

### Incidència 3

Tomcat funciona, però:

```text
http://IP_DEL_SERVIDOR:8080/dawshop
```

mostra un error.

Indica quina informació revisaries: nom del WAR, context path, permisos, logs, dependències, versió de Java, estat del desplegament i URL exacta.

## Què has d'entregar?

Entrega **un únic informe en PDF** amb:

1. portada amb nom, mòdul i pràctica;
2. IP i configuració inicial de la màquina;
3. instal·lació, estat i pàgina pròpia d'Apache;
4. VirtualHost, `configtest` i proves del lloc DAWShop;
5. logs d'Apache i interpretació d'una entrada;
6. versió de Java;
7. versió i ubicació de Tomcat;
8. Tomcat funcionant en `8080`;
9. estructura de directoris;
10. aplicació WAR desplegada;
11. logs de Tomcat;
12. taula comparativa Apache/Tomcat;
13. resolució de les tres incidències;
14. conclusió breu.

No ha de ser un manual de 30 pàgines. L'objectiu és demostrar que has realitzat la pràctica i entens què has fet.

### Captures i evidències

Sis o huit captures ben seleccionades són millors que trenta captures sense explicació. Quan siga possible, cada captura ha de mostrar:

- l'ordre executada;
- el resultat;
- la IP o URL utilitzada;
- informació que identifique el teu entorn.

No captures contrasenyes, tokens, claus privades o dades personals. Si un log conté informació sensible, substitueix-la per `<ocult>` i explica que s'ha anonimitzat.

### Nom recomanat

```text
UP1_P2_Cognoms_Nom.pdf
```

## Comprovació individual

Encara que l'informe s'entregue de manera telemàtica, el professorat podrà fer una breu comprovació individual. Et podrà demanar, per exemple:

```text
Mostra'm on està el VirtualHost.
```

```text
Para Apache i torna'l a iniciar.
```

```text
On miraries un error d'Apache?
```

```text
Mostra'm el directori webapps de Tomcat.
```

```text
Què ocorreria si pares Tomcat però Apache continua funcionant?
```

```text
Explica'm per què un servei utilitza el port 80 i l'altre el 8080 en aquesta pràctica.
```

La finalitat és comprovar que entens el sistema que has configurat, no que memoritzes ordres aïllades.

## Criteris de revisió

| Aspecte | Assoliment alt | Assoliment bàsic | Per completar |
| --- | --- | --- | --- |
| Instal·lació i servei Apache | Instal·la, comprova i administra el servei amb proves correctes. | El servei funciona però falten alguna prova o explicació. | No pot demostrar que Apache funciona. |
| VirtualHost i contingut | Publica dos llocs, valida la configuració i explica el nom utilitzat. | Publica el lloc però no documenta alguna part del procés. | La configuració no és vàlida o no és reproduïble. |
| Logs i diagnòstic Apache | Interpreta entrades i relaciona símptomes amb comprovacions. | Localitza els logs però els interpreta de manera parcial. | No sap on buscar ni què significa el registre. |
| Java i Tomcat | Instal·la, configura, arranca i verifica Tomcat amb l'usuari i la versió adequats. | Tomcat funciona però falten evidències o justificacions. | No pot iniciar o comprovar el servidor d'aplicacions. |
| WAR i estructura | Desplega l'aplicació, identifica el context i explica els directoris. | Desplega l'aplicació amb alguna mancança documental. | Confón el WAR, `webapps` o el context path. |
| Seguretat i informe | Treballa en un entorn autoritzat, no exposa secrets i documenta proves clares. | Respecta les normes però l'informe és incomplet. | Exposa dades sensibles o no permet reproduir el treball. |

## Abans d'entregar

- [ ] He anotat la IP i les versions utilitzades.
- [ ] Apache apareix actiu i publica una pàgina pròpia.
- [ ] He creat i validat el VirtualHost de DAWShop.
- [ ] He consultat almenys un log d'Apache i n'he explicat una entrada.
- [ ] Java està instal·lat i la versió és coneguda.
- [ ] Tomcat funciona en el port 8080.
- [ ] He localitzat `bin`, `conf`, `logs` i `webapps`.
- [ ] El WAR està desplegat o he documentat l'error concret.
- [ ] He comparat Apache i Tomcat.
- [ ] He resolt les tres incidències amb una seqüència de comprovacions.
- [ ] Les captures tenen context i no mostren secrets.

[Anterior: disseny de l'arquitectura i pla de desplegament](activitat-1-arquitectura-desplegament.md) · [Índex de la UP1](../index.md)
