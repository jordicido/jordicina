---
hide:
  - navigation
---
# 3. Servidors web i servidors d'aplicacions

## Servidor web

Un servidor web escolta peticions HTTP, serveix fitxers estàtics, aplica regles i pot actuar com a proxy invers. També pot acabar la connexió TLS, controlar accessos i registrar peticions.

Exemples habituals són Apache HTTP Server i Nginx. L'eina concreta importa menys que saber localitzar la configuració, activar el servei, consultar els logs i verificar el resultat.

## Servidor d'aplicacions

Un servidor d'aplicacions proporciona l'entorn on s'executa la lògica dinàmica. Pot gestionar processos, sessions, components web, connexions a dades i configuracions de seguretat. En una arquitectura de dues capes, el servidor web pot derivar-li les peticions que no són fitxers estàtics.

## Criteris de configuració inicial

Abans d'activar un servei, identifica:

- l'adreça i el port d'escolta;
- l'usuari amb què s'executa;
- el directori o artefacte que publica;
- les dependències i variables de configuració;
- els fitxers de log;
- els permisos necessaris;
- la manera d'aturar, reiniciar i recuperar el servei.

## Prova mínima

Una prova de funcionament ha de comprovar l'estat del procés i la resposta des del punt de vista del client. Per exemple:

```bash
systemctl status nginx
curl -I http://127.0.0.1
```

En un contenidor, la comprovació equivalent pot incloure `docker ps`, `docker logs` i una petició al port publicat. No consideres que un procés actiu siga suficient: cal verificar que respon el recurs esperat.

!!! warning "Canvis segurs"
    Guarda una còpia de la configuració abans d'editar-la i valida-la abans de recarregar el servei.

[Anterior: Protocols i recorregut](02-protocols-recorregut.md) · [Següent: Virtualització i contenidors](04-virtualitzacio-contenidors.md) · [Tornar a l'índex](index.md)
