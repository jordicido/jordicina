---
hide:
  - navigation
---
# Pràctica 1. Disseny de l'arquitectura i pla de desplegament

## Què treballarem?

En aquesta pràctica analitzaràs una aplicació web abans de desplegar-la. L'objectiu no és instal·lar encara els serveis, sinó prendre les decisions que hauria de prendre un equip tècnic abans de posar una aplicació en producció.

Treballaràs els criteris d'avaluació següents del **RA1. Implanta arquitectures web analitzant i aplicant criteris de funcionalitat**:

| Criteri | Què hauràs de demostrar |
| --- | --- |
| **RA1.a** | Analitzar aspectes generals de les arquitectures web, les seues característiques, avantatges i inconvenients. |
| **RA1.g** | Analitzar l'estructura i els recursos que componen una aplicació web. |
| **RA1.h** | Descriure els requeriments del procés d'implantació d'una aplicació web. |

**Temps orientatiu:** 4 hores de treball autònom, distribuïdes entre la sessió presencial i el treball semipresencial.

**Modalitat:** lliurament individual, excepte si el professorat autoritza una altra organització. Si treballes en parella, cada persona ha de poder justificar les decisions i respondre la comprovació individual.

## Situació de partida

L'empresa **DAWShop** ha desenvolupat una nova botiga en línia i necessita preparar la seua posada en producció.

L'aplicació disposa de:

- una interfície web que utilitzaran els clients des del navegador;
- una aplicació backend desenvolupada en Java;
- una base de dades PostgreSQL;
- sistema de registre i autenticació;
- catàleg de productes;
- cistella de compra;
- gestió de comandes;
- un panell d'administració.

En el moment del llançament s'espera:

- aproximadament **200 usuaris simultanis**;
- accés públic des d'Internet;
- tractament de dades personals;
- actualitzacions periòdiques de l'aplicació;
- necessitat de realitzar còpies de seguretat;
- disponibilitat d'un entorn on provar els canvis abans de publicar-los.

L'empresa et demana que proposes **com hauria d'organitzar-se l'arquitectura i com s'hauria de preparar el desplegament**.

## Abans de començar

Repassa els blocs [d'arquitectures web](../01-arquitectures-web.md), [d'estructura i recursos](../03-estructura-recursos.md) i [de requisits del desplegament](../04-requisits-desplegament.md). No cal que tries una tecnologia per a cada problema si no pots justificar la decisió.

Treballa amb dades fictícies. No inclogues contrasenyes, tokens, claus privades, adreces personals ni informació real de clients.

## Part 1. Identificació dels components

Analitza el cas i identifica, com a mínim, els components següents:

- client;
- frontend;
- servidor web;
- servidor d'aplicacions;
- backend;
- base de dades.

Per a cada component indica:

1. quin paper té dins de DAWShop;
2. quin tipus d'informació rep;
3. quin tipus d'informació envia;
4. amb quins altres components es comunica;
5. si és públic, intern o accessible només des d'una xarxa privada.

Utilitza una taula semblant a aquesta:

| Component | Funció concreta en DAWShop | Rep | Envia | Es comunica amb | Exposició |
| --- | --- | --- | --- | --- | --- |
| Navegador | Mostra la interfície i permet interactuar amb la botiga. | HTML, CSS, JavaScript i dades. | Peticions HTTP i dades de formularis. | Servidor web. | Client públic. |
| Servidor web |  |  |  |  |  |
| Servidor d'aplicacions |  |  |  |  |  |
| Base de dades |  |  |  |  |  |

No és suficient copiar una definició general. Has d'explicar quina funció realitzaria cada component concretament en DAWShop.

## Part 2. Disseny de l'arquitectura

Dibuixa un diagrama de l'arquitectura proposada. Com a mínim ha d'aparéixer aquest recorregut:

```text
Client
  │
  ▼
Internet / DNS
  │ HTTPS :443
  ▼
Servidor web o proxy invers
  │ HTTP intern :8080
  ▼
Servidor d'aplicacions / backend Java
  │ PostgreSQL
  ▼
Base de dades
```

El diagrama ha d'incloure també:

- el frontend i els recursos estàtics;
- la xarxa pública i la xarxa privada;
- protocols, ports i direcció de cada comunicació;
- autenticació i control d'accés;
- logs i monitorització;
- còpies de seguretat i dades persistents;
- una llegenda que explique les sigles, colors i fronteres.

Pots utilitzar draw.io, Mermaid, Excalidraw, LibreOffice Draw o una altra ferramenta equivalent. El format ha de permetre llegir el diagrama sense ampliar-lo excessivament.

### Explicació del recorregut

Davall del diagrama explica què ocorre quan l'usuari consulta:

```text
https://dawshop.example/productes/15
```

Descriu, en ordre:

1. com s'interpreta la URL;
2. com es resol el nom mitjançant DNS;
3. com s'estableix la connexió HTTPS;
4. quin component rep la petició;
5. com arriba la consulta al backend i a la base de dades;
6. com es construeix la resposta;
7. com torna al navegador i quins recursos addicionals pot demanar.

Indica també què canviaria si la base de dades no estiguera disponible.

### Comparació d'alternatives

Compara dues propostes, per exemple:

| Alternativa | Avantatges | Costos o riscos |
| --- | --- | --- |
| Monòlit en una única màquina virtual |  |  |
| Servidor web, aplicació i base de dades separats |  |  |

Tria una alternativa i justifica-la a partir de l'escenari: 200 usuaris simultanis, dades personals, actualitzacions i necessitat de recuperació. No n'hi ha prou amb afirmar que una tecnologia és «la millor».

## Part 3. Recursos necessaris

### 3.1. Hardware

Analitza, com a mínim:

- CPU;
- memòria RAM;
- emmagatzematge;
- connectivitat i amplada de banda.

No cal proporcionar una configuració comercial exacta. L'important és justificar la relació entre el recurs i la necessitat. Per exemple, la RAM ha de permetre executar el servidor web, el servidor d'aplicacions i els processos de base de dades sense arribar contínuament al límit.

| Recurs | Necessitat de DAWShop | Decisió o estimació | Com es comprovaria |
| --- | --- | --- | --- |
| CPU |  |  |  |
| RAM |  |  |  |
| Emmagatzematge |  |  |  |
| Xarxa |  |  |  |

### 3.2. Software

Indica quin programari proposaries per a cada funció:

| Funció | Tecnologia proposada | Versió o criteri de versió | Justificació |
| --- | --- | --- | --- |
| Sistema operatiu |  |  |  |
| Servidor web |  |  |  |
| Servidor d'aplicacions |  |  |  |
| Base de dades | PostgreSQL |  |  |
| Control de versions | Git |  |  |
| Monitorització |  |  |  |

Les versions han de ser concretes o han d'explicar quin criteri seguiràs per fixar-les. «L'última versió» no és prou reproduïble.

## Part 4. Entorns de desplegament

Proposa una estructura amb almenys tres entorns:

```text
DESENVOLUPAMENT
       │
       ▼
     PROVES / STAGING
       │
       ▼
   PRODUCCIÓ
```

Per a cada entorn explica:

- qui l'utilitza;
- per a què serveix;
- quin tipus de dades conté;
- quina configuració pot variar;
- què podria passar si no existira.

| Entorn | Usuaris | Finalitat | Dades | Risc si no existeix |
| --- | --- | --- | --- | --- |
| Desenvolupament |  |  |  |  |
| Proves / staging |  |  |  |  |
| Producció |  |  |  |  |

Explica per què no és acceptable provar una migració amb dades reals directament en producció.

## Part 5. Configuració i variables d'entorn

L'aplicació necessita informació com:

```text
DB_HOST
DB_NAME
DB_USER
DB_PASSWORD
APP_PORT
API_KEY
```

Contesta:

1. Per què no és adequat escriure les contrasenyes dins del codi font?
2. On guardaries la configuració de cada entorn?
3. Les variables han de tindre necessàriament el mateix valor en desenvolupament i producció?
4. Quines dades consideres sensibles?
5. Quines variables documentaries en un `.env.example` sense posar-hi secrets?

Inclou un exemple fictici i incomplet:

```bash
DB_HOST=db-interna
DB_NAME=dawshop
DB_USER=dawshop_app
DB_PASSWORD=CANVIA_AQUEST_VALOR
APP_PORT=8080
API_KEY=VALOR_DE_PROVA
```

El document ha d'indicar que els valors d'exemple no són credencials vàlides i que el fitxer real no s'ha de pujar al repositori.

## Part 6. Seguretat

Proposa almenys **quatre mesures de seguretat** i explica quin problema intenta evitar cadascuna. Has d'incloure necessàriament:

- HTTPS i gestió del certificat;
- autenticació i control d'accés;
- protecció de credencials i secrets;
- tallafoc o control de ports.

Pots utilitzar aquesta taula:

| Mesura | Problema que evita | Component o frontera afectada | Com es verificaria |
| --- | --- | --- | --- |
| HTTPS |  |  |  |
| Control d'accés |  |  |  |
| Secrets fora del codi |  |  |  |
| Tallafoc i ports |  |  |  |

Una resposta com «utilitzarem HTTPS» no és suficient: has d'explicar que protegeix la comunicació entre el client i el frontal i com comprovaries el certificat o la connexió.

## Part 7. Pla de base de dades

Prepara un petit pla per desplegar PostgreSQL.

### Connexió

Explica quina informació necessita l'aplicació per connectar-se:

- host o nom del servei;
- port;
- base de dades;
- usuari;
- secret o mecanisme d'autenticació;
- permisos que necessita l'usuari de l'aplicació.

Indica per què la base de dades no hauria de tindre un port accessible directament des d'Internet.

### Migracions

La nova versió de DAWShop necessita afegir el camp `telefon` a la taula `clients`. Explica:

1. què és una migració de base de dades;
2. quina ordre o procés l'aplicaria;
3. com comprovaries que s'ha executat;
4. què faries si falla a mitjan desplegament;
5. com mantindries compatible l'aplicació durant la transició.

### Còpies de seguretat

Explica:

- quan faries una còpia;
- què copiaries;
- on conservaries les còpies;
- durant quant de temps;
- com comprovaries que es poden restaurar;
- per què és especialment important fer-la abans d'una actualització.

Recorda: una còpia que mai s'ha provat no és una garantia de recuperació.

## Part 8. Proves abans del desplegament

Defineix com a mínim:

- **2 proves funcionals**;
- **1 prova de rendiment**;
- **2 proves de seguretat**;
- **1 prova de compatibilitat**.

Cada prova ha d'incloure una acció, un resultat esperat i una evidència.

| ID | Tipus | Acció o escenari | Resultat esperat | Evidència |
| --- | --- | --- | --- | --- |
| P1 | Funcional | Un usuari consulta un producte. |  |  |
| P2 | Funcional | Un usuari completa una compra de prova. |  |  |
| P3 | Rendiment |  |  |  |
| P4 | Seguretat |  |  |  |
| P5 | Seguretat |  |  |  |
| P6 | Compatibilitat |  |  |  |

Una prova de rendiment ha de definir, encara que siga de manera senzilla, la càrrega, la duració i el llindar que consideres acceptable. Una prova de seguretat ha de comprovar un comportament observable, no limitar-se a afirmar que «el sistema és segur».

## Part 9. Monitorització i logs

Indica almenys **cinc dades o esdeveniments** que controlaries després del desplegament. Pots incloure:

- ús de CPU;
- ús de RAM;
- espai disponible;
- errors HTTP;
- errors de l'aplicació;
- disponibilitat del servei;
- temps de resposta;
- errors de connexió amb PostgreSQL;
- intents d'accés rebutjats.

| Dada o esdeveniment | On s'observa | Llindar o senyal d'alerta | Acció inicial |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

Respon també:

> Un usuari indica que a les 12:43 no va poder completar una compra i va obtindre un error. Quina informació consultaries per començar a investigar el problema?

La resposta hauria de relacionar l'hora, l'usuari o identificador de traça si existeix, la ruta, el codi HTTP, els logs del servidor web i de l'aplicació, la base de dades i els canvis recents. No inclogues dades personals innecessàries en els logs.

## Part 10. Actualitzacions, Git i CI/CD

Descriu de manera esquemàtica com publicaries una nova versió:

```text
Desenvolupador
      │
      ▼
     Git
      │
      ▼
Proves automàtiques
      │
      ▼
 Staging
      │
      ▼
 Producció
```

Explica:

1. com identificaries la versió del codi i de l'artefacte;
2. quines proves s'executarien abans de publicar;
3. qui o què autoritzaria el pas a producció;
4. com registraries la configuració i el resultat;
5. què faries si la nova versió provoca un error greu.

Has d'utilitzar correctament el concepte **rollback**. Indica què recuperaries, quines dades podrien complicar el retorn i quines comprovacions faries després.

## Part 11. Checklist final

Elabora una **checklist de producció** amb entre **10 i 15 comprovacions**. Ha de ser concreta i utilitzable, no una llista de paraules soltes.

Com a punt de partida:

```text
☐ La versió de l'artefacte està identificada.
☐ Les variables de l'entorn estan configurades.
☐ La còpia de seguretat s'ha realitzat i s'ha verificat.
☐ La connexió amb la base de dades funciona.
☐ Les migracions pendents estan revisades.
☐ El certificat HTTPS és vàlid per al nom utilitzat.
☐ Les proves funcionals han finalitzat correctament.
☐ Els ports públics coincideixen amb el disseny.
☐ Els logs i les alertes estan disponibles.
☐ El procediment de rollback està escrit.
```

Adapta la llista a la teua proposta i afegeix-hi les comprovacions que falten.

## Què has d'entregar?

Entrega **un únic document en PDF** amb:

1. portada;
2. identificació dels components;
3. diagrama de l'arquitectura i llegenda;
4. explicació del recorregut d'una petició;
5. comparació i elecció d'una alternativa;
6. recursos de hardware i software;
7. entorns de desplegament;
8. configuració i variables d'entorn;
9. mesures de seguretat;
10. pla de base de dades;
11. pla de proves;
12. monitorització i logs;
13. procés d'actualització, Git, CI/CD i rollback;
14. checklist final.

El document ha de tindre aproximadament **3–5 pàgines de contingut**, sense comptar la portada. Si el diagrama o una taula necessiten més espai, pots afegir-los com a annexos. Es valorarà especialment que les decisions estiguen justificades i siguen verificables.

### Nom recomanat

```text
UP1_P1_Cognoms_Nom.pdf
```

No inclogues en el PDF cap contrasenya, token, clau privada, dada personal real o captura amb informació sensible.

## Criteris de revisió

| Aspecte | Assoliment alt | Assoliment bàsic | Per completar |
| --- | --- | --- | --- |
| Components i arquitectura | Identifica responsabilitats, comunicacions, ports i fronteres amb precisió. | Identifica les peces principals però falta alguna relació o justificació. | Confón capes o presenta un esquema sense fluxos. |
| Recursos i requisits | Relaciona les necessitats de DAWShop amb recursos i proves concretes. | Proposa recursos però les justificacions són generals. | Enumera tecnologies sense relacionar-les amb el cas. |
| Entorns i configuració | Separa entorns, dades i secrets de manera coherent i reproduïble. | Distingeix entorns però no concreta prou la configuració. | Barreja dades reals, secrets o configuracions sense control. |
| Seguretat i dades | Explica mesures, permisos, backups i migracions amb verificacions. | Inclou mesures però sense explicar com comprovar-les. | Es limita a llistes o fa públiques dades que haurien de ser internes. |
| Proves i observabilitat | Defineix resultats esperats, evidències, logs i resposta davant incidències. | Proposa proves però no fixa llindars o evidències. | No permet comprovar si el desplegament funciona. |
| Documentació | El document és clar, breu, justificat i reproduïble. | El contingut és comprensible però incomplet o poc ordenat. | No es pot seguir la proposta ni entendre les decisions. |

## Abans d'entregar

- [ ] El diagrama indica components, protocols, ports i xarxes.
- [ ] He explicat el recorregut de `https://dawshop.example/productes/15`.
- [ ] Cada requisit important té una decisió i una prova.
- [ ] He diferenciat desenvolupament, proves i producció.
- [ ] No he inclòs secrets ni dades reals.
- [ ] He explicat migracions, còpies i rollback.
- [ ] La checklist té entre 10 i 15 comprovacions.
- [ ] El PDF es pot llegir i les taules no queden tallades.

[Següent: instal·lació i configuració d'Apache i Tomcat](activitat-2-apache-tomcat.md) · [Índex de la UP1](../index.md)
