---
hide:
  - navigation
---
# Autoavaluació de la UP1

Respon sense consultar els apunts i revisa després les teues respostes.

## Preguntes

1. Quina diferència hi ha entre un servidor web i un servidor d'aplicacions?
2. Quin paper té DNS quan s'obri una URL?
3. Per què HTTPS no és només «posar un altre port»?
4. Quina informació ha d'aparéixer en un diagrama d'arquitectura?
5. Quan pot ser útil una màquina virtual?
6. Què aporta un contenidor a un laboratori de desplegament?
7. Per què un procés actiu no demostra per si mateix que una aplicació funciona?
8. Escriu tres evidències que farien reproduïble un desplegament.
9. On guardaries un secret que necessita l'aplicació?
10. Quina diferència hi ha entre un requisit i una tecnologia?

## Solucions orientatives

1. El servidor web gestiona peticions HTTP i recursos web; l'aplicació executa lògica dinàmica i serveis de l'aplicació.
2. Resol el nom del domini fins a una adreça o un altre recurs de xarxa.
3. HTTPS afegeix TLS: xifrat, autenticació del servidor i integritat de la comunicació.
4. Components, fluxos, protocols, ports, dades, fronteres de seguretat i proves.
5. Per simular un servidor complet i aïllar un sistema convidat.
6. Aïllament, versions i una forma reproduïble d'executar un servei.
7. Pot estar escoltant però servir una configuració incorrecta o no arribar al recurs esperat.
8. Versions, configuració, ordres, dependències, proves i logs són exemples vàlids.
9. En un mecanisme de secrets o variable d'entorn local, mai en el repositori.
10. El requisit descriu una necessitat verificable; la tecnologia és una possible implementació.

## Reflexió final

Quina part del teu desplegament podries explicar millor a una persona que no l'ha fet? Converteix aquesta resposta en una millora concreta de la documentació.

[Anterior: Fitxa de requisits](activitat-3-fitxa-requisits.md) · [Tornar a la presentació de la UP1](../../up1-implantacio-arquitectures.md)
