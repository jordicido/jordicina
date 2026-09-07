---
hide:
  - navigation
---
# Activitat 1. Cas integrador: disseny i desplegament d'una arquitectura web

## Finalitat

En aquesta activitat aplicaràs tota la UP1 en un únic lliurament. Partiràs d'un cas, transformaràs les necessitats en requisits, proposaràs una arquitectura, posaràs en marxa un servei web local i demostraràs amb proves que la solució funciona.

No es busca construir una aplicació completa. Es busca demostrar que saps prendre decisions d'implantació, explicar-les i verificar-les amb un entorn de laboratori segur.

**Temps orientatiu:** 4 hores de treball autònom, distribuïdes entre la sessió presencial i el treball semipresencial.

## Cas de treball

Una cooperativa vol publicar una aplicació web amb:

- una pàgina pública de presentació;
- un catàleg consultable;
- un formulari de contacte;
- una zona privada per al personal;
- una base de dades que no quede exposada directament a Internet.

Pots treballar amb aquest cas o adaptar-lo a un projecte fictici acordat amb el professorat. No utilitzes noms, credencials ni dades personals reals.

## Fase 1. Analitza el problema

Redacta l'objectiu del sistema en cinc o sis línies i identifica els usuaris. Després, escriu entre sis i deu requisits. Has d'incloure, com a mínim:

- dos requisits funcionals;
- un requisit de comunicació o protocol;
- un requisit de seguretat;
- un requisit operatiu de reinici o recuperació;
- un requisit relacionat amb les dades;
- una prova associada a cada requisit.

Utilitza aquesta plantilla:

| ID | Tipus | Requisit concret | Decisió tècnica | Prova i evidència |
| --- | --- | --- | --- | --- |
| R1 | Funcional |  |  |  |
| R2 | Funcional |  |  |  |
| R3 | Comunicació |  |  |  |
| R4 | Seguretat |  |  |  |
| R5 | Operatiu |  |  |  |
| R6 | Dades |  |  |  |

Evita expressions que no es puguen comprovar, com ara «ha de ser modern» o «ha de funcionar bé». Converteix-les en comportaments observables.

## Fase 2. Dissenya l'arquitectura

Elabora un diagrama en SVG, PNG, draw.io o Markdown. Ha d'incloure:

1. client o clients;
2. DNS o resolució del nom;
3. servidor web o proxy invers;
4. servidor d'aplicacions, si la proposta el necessita;
5. base de dades i altres recursos;
6. frontera pública i xarxa privada;
7. fletxes amb protocol, port i direcció;
8. punts de persistència, logs i còpies;
9. una llegenda que explique les sigles i colors.

Després del diagrama, redacta la justificació. Compara dues alternatives, per exemple:

- un monòlit en una única màquina virtual;
- servidor web i aplicació en contenidors separats, amb la base de dades en una xarxa privada.

Tria una alternativa i explica els compromisos de cost, complexitat, seguretat, manteniment i possibilitat de creixement. No n'hi ha prou amb dir que una tecnologia és «la millor»: relaciona cada decisió amb un requisit.

## Fase 3. Prepara un desplegament local

Posa en marxa una pàgina estàtica de prova en una màquina virtual, un contenidor o l'entorn indicat pel professorat. Un exemple de definició local és:

```yaml
services:
  web:
    image: nginx:1.27-alpine
    ports:
      - "8080:80"
```

El servei ha de publicar una pàgina fictícia de la cooperativa. Si uses una altra eina, documenta l'equivalent. Abans de començar, anota:

- sistema operatiu i versió;
- eina utilitzada i versió;
- imatge o paquet i versió;
- port de l'amfitrió i port intern;
- ubicació del recurs publicat;
- ordres d'inici, aturada i reinici.

No cal exposar el servei fora del laboratori. No inclogues contrasenyes o tokens en el fitxer de configuració.

## Fase 4. Verifica i provoca una incidència segura

Conserva la sortida o una captura de les proves següents:

| Prova | Acció | Resultat esperat |
| --- | --- | --- |
| Procés | Consultar l'estat del servei | El servei apareix actiu. |
| Port | Revisar els ports en escolta | El port documentat està obert localment. |
| Resposta | `curl -I http://localhost:8080` | Resposta `200` o la prevista. |
| Contingut | Obrir la pàgina al navegador | Es mostra el recurs correcte. |
| Error controlat | Consultar `/ruta-inexistent` | Resposta `404` i entrada coherent al log. |
| Recuperació | Aturar i tornar a iniciar | El servei torna a respondre. |

Interpreta cada resultat. Per exemple, si el procés està actiu però `curl` retorna `404` a la pàgina inicial, la causa pot ser el directori publicat o el nom del fitxer, no necessàriament la xarxa.

## Fase 5. Documenta el resultat

Entrega un únic document o repositori amb aquesta estructura:

```text
up1-cas-integrador/
├── README.md
├── arquitectura.svg (o format equivalent)
├── compose.yaml o configuració equivalent
├── public/index.html
├── proves/
│   ├── resposta-correcta.txt
│   ├── error-controlat.txt
│   └── reinici.txt
└── .env.example
```

El `README.md` ha d'incloure el context, els requisits, el diagrama, les versions, els passos d'instal·lació, les proves, la incidència detectada, el procediment de reinici i les limitacions. L'estructura és orientativa: adapta-la a l'eina utilitzada.

## Lliurament

Un únic lliurament amb:

- matriu de requisits i proves;
- diagrama d'arquitectura llegible;
- configuració o ordres per reproduir el servei;
- pàgina fictícia publicada localment;
- evidències de resposta correcta, error controlat i recuperació;
- justificació de les decisions i reflexió sobre una millora futura.

## Criteris de revisió

| Aspecte | Què es valorarà |
| --- | --- |
| Anàlisi | Requisits concrets, complets i relacionats amb proves. |
| Arquitectura | Components, responsabilitats, fluxos, ports i fronteres coherents. |
| Implantació | Servei reproduïble i recurs accessible en l'entorn local. |
| Verificació | Resultats interpretats, log d'un error i prova de recuperació. |
| Documentació | Ordre clar, versions, limitacions i absència de secrets. |
| Justificació | Decisions explicades a partir del problema i els compromisos. |

### Abans d'entregar

- [ ] Una persona que no ha fet la pràctica sap quines eines i versions necessita.
- [ ] El diagrama indica què és públic, què és privat i com circula la petició.
- [ ] Cada requisit té una prova i una evidència.
- [ ] He provat una ruta correcta i una ruta inexistent.
- [ ] He comprovat que el servei es pot reiniciar.
- [ ] No he inclòs credencials, tokens ni dades reals.

[Tornar a la teoria de la UP1](../../up1-implantacio-arquitectures.md) · [Anar a l'autoavaluació](autoavaluacio.md)
