---
hide:
  - navigation
---
# Activitat final. Projecte SecureOffice VLC

## Criteris d'avaluació treballats

En aquesta activitat es treballen i s'evidencien els criteris d'avaluació següents:

| Criteri | Què s'ha de demostrar | Evidència en el projecte |
| --- | --- | --- |
| **RA1.a** | Explicar per què cal mantindre segura la informació. | Anàlisi inicial de riscos i justificació de les decisions. |
| **RA1.b** | Diferenciar seguretat física i lògica i relacionar-les. | Disseny global de la protecció de l'oficina i dels sistemes. |
| **RA1.c** | Definir una ubicació i unes condicions ambientals adequades. | Disseny de la sala de servidors i mesures ambientals. |
| **RA1.d** | Identificar la necessitat de protegir físicament els sistemes. | Mesures de protecció física, incendi, aigua i accés. |
| **RA1.f** | Seleccionar on i per a què s'ha d'aplicar un SAI. | Dimensionament, selecció i justificació del SAI. |
| **RA1.g** | Esquematitzar una política basada en llistes de control d'accés. | Matriu ACL i procediment de gestió dels accessos. |
| **RA1.h** | Valorar la importància d'una política de contrasenyes. | Política de contrasenyes i gestió de comptes. |
| **RA1.i** | Valorar els avantatges i les limitacions dels sistemes biomètrics. | Decisió argumentada sobre l'ús de biometria. |

## El repte

Enhorabona. La vostra empresa de consultoria informàtica acaba de rebre el seu primer encàrrec important.

Mediterrània Tech, SL és una empresa de serveis digitals que obrirà pròximament unes noves oficines a València. Han llogat el local, però encara no han realitzat cap actuació relacionada amb la seguretat dels sistemes informàtics.

La direcció té una preocupació clara:

> «Volem evitar descobrir què hauríem d'haver protegit després de patir el primer problema.»

Per això han decidit contractar una empresa externa que dissenye tot el pla de seguretat física i d'accés de les noves oficines abans de començar a treballar.

Vosaltres sou una de les empreses candidates.

La vostra missió serà analitzar les necessitats de Mediterrània Tech, dissenyar una solució completa, elaborar un pressupost realista i, finalment, defensar la vostra proposta davant de la direcció de l'empresa.

No guanya necessàriament la proposta més cara ni la que incloga més tecnologia.

Guanya la proposta millor justificada.

## L'empresa

Mediterrània Tech començarà amb 20 treballadors, encara que espera arribar a uns 30 en els pròxims anys.

Les oficines disposaran aproximadament de:

- recepció i zona d'espera;
- zona de treball oberta;
- dos despatxos;
- dues sales de reunions;
- magatzem;
- sala tècnica;
- zona de descans;
- lavabos.

L'empresa treballarà amb informació de clients que considera important i necessita garantir que els seus sistemes continuen disponibles davant d'incidències habituals.

## Equipament previst

Inicialment disposarà de:

- 24 ordinadors de sobretaula;
- 6 ordinadors portàtils;
- 2 servidors físics;
- 1 NAS;
- 1 firewall/router;
- 2 switches;
- 3 punts d'accés Wi-Fi;
- 1 rack de comunicacions;
- impressores i altres dispositius de xarxa.

Els servidors, el NAS i l'electrònica de xarxa hauran d'estar centralitzats en una sala de servidors que encara s'ha de dissenyar.

## Pressupost

La direcció estableix un pressupost màxim de:

**20.000 € + IVA**

Aquest pressupost és exclusivament per a les mesures de seguretat física, ambiental i de control d'accés.

No heu de comprar els ordinadors, servidors ni dispositius de xarxa.

No és obligatori gastar tot el pressupost.

De fet, una proposta de 13.000 € correctament justificada pot ser millor que una proposta de 20.000 € plena d'elements innecessaris.

Els preus han de ser raonablement reals i s'ha d'indicar d'on s'han obtingut.

## Què heu de dissenyar?

La proposta ha de cobrir tota la seguretat passiva treballada durant la unitat.

### 1. Anàlisi inicial de riscos

Abans de comprar res, heu de determinar:

- Quins són els actius més importants de l'empresa?
- Quines amenaces poden afectar-los?
- Quines vulnerabilitats existirien en unes oficines sense mesures de seguretat?
- Quines conseqüències podria tindre una incidència?

No cal fer una anàlisi de riscos enorme.

Volem identificar els riscos que condicionaran les vostres decisions posteriors.

### 2. Disseny de la sala de servidors

Haureu de decidir com serà la futura sala de servidors.

La proposta haurà de justificar, com a mínim:

- ubicació dins de l'oficina;
- dimensions aproximades;
- existència o no de finestres;
- tipus de porta;
- control d'accés;
- protecció del rack;
- distribució dels equips;
- cablejat;
- proximitat a canonades o zones amb aigua;
- risc d'incendi;
- detecció de fum;
- extinció;
- detecció de fuites d'aigua;
- il·luminació;
- senyalització;
- altres mesures que considereu necessàries.

!!! warning "Important"
    No volem una llista de mesures. Volem saber per què les heu triades.

### 3. Condicions ambientals

Determineu com mantindreu unes condicions adequades per als equips.

Haureu de considerar:

- temperatura;
- humitat;
- ventilació;
- climatització;
- circulació de l'aire;
- monitoratge ambiental;
- sensors;
- què ocorreria si fallara l'aire condicionat.

Podeu investigar solucions comercials reals.

### 4. Alimentació elèctrica i SAI

A partir de l'equipament de l'empresa, decidiu:

- quins equips han d'estar connectats a un SAI;
- quins no;
- potència aproximada necessària;
- tipus de SAI;
- autonomia que considereu adequada;
- nombre de SAI;
- ubicació;
- actuació davant d'un tall prolongat.

Haureu d'incloure almenys un model comercial real i justificar l'elecció.

No n'hi ha prou amb escriure:

> «Posarem un SAI de 3000 VA.»

Heu d'explicar per què 3000 VA i no 1000, 2000 o 6000 VA.

El funcionament pràctic del SAI ja es pot evidenciar amb el taller anterior; ací el repte és sobretot dimensionar-lo i seleccionar correctament els punts d'aplicació, una tasca que evidencia el criteri RA1.f. SMX2_SI 26-27

### 5. Seguretat física de l'oficina

La sala de servidors no és l'únic lloc que cal protegir.

Decidiu les mesures necessàries per protegir:

- entrada principal;
- despatxos;
- equips dels treballadors;
- portàtils;
- rack;
- magatzem;
- possibles visitants;
- personal extern;
- horaris fora de jornada laboral.

Podeu considerar panys, targetes, alarmes, càmeres, sensors o qualsevol altra tecnologia que considereu adequada.

Però recordeu:

cada element costa diners i ha de respondre a un risc real.

### 6. Control d'accés i ACL

L'empresa tindrà, com a mínim, aquests perfils:

| Perfil | Exemple |
| --- | --- |
| Direcció | Gerència |
| Administració | Personal administratiu |
| Personal tècnic | Informàtics |
| Personal general | Resta de treballadors |
| Neteja | Empresa externa |
| Manteniment | Tècnics externs |
| Visitants | Clients, proveïdors... |

Heu de crear una matriu de control d'accés.

Per exemple:

| Zona/recurs | Direcció | Tècnics | Personal | Neteja | Visitants |
| --- | --- | --- | --- | --- | --- |
| Oficina | ? | ? | ? | ? | ? |
| Despatx direcció | ? | ? | ? | ? | ? |
| Sala servidors | ? | ? | ? | ? | ? |

Heu de decidir també:

- qui autoritza els accessos;
- com es donen d'alta;
- com es retiren;
- què ocorre si es perd una targeta;
- com es gestionen els accessos temporals;
- si els accessos queden registrats.

La política d'accés és un dels elements expressament associats al RA1 de la unitat. SMX2_SI 26-27

### 7. Contrasenyes

Proposeu una política bàsica de contrasenyes per a Mediterrània Tech.

Ha de respondre, almenys, a:

- longitud;
- reutilització;
- contrasenyes compartides;
- gestors de contrasenyes;
- comptes administratius;
- què passa quan un treballador deixa l'empresa;
- què cal fer davant d'una possible filtració.

No copieu simplement «la política perfecta d'Internet».

Expliqueu per què és raonable per a aquesta empresa.

### 8. Biometria: sí o no?

La direcció ha sentit parlar de lectors d'empremta i reconeixement facial i pregunta:

> «Si és més segur, per què no posem biometria a totes les portes?»

Heu de donar-los una resposta professional.

Decidiu:

- si utilitzaríeu biometria;
- on;
- amb quina finalitat;
- quins avantatges aporta;
- quins inconvenients presenta;
- si hi ha alternatives més adequades.

No és obligatori utilitzar biometria.

També és una decisió vàlida rebutjar-la si està ben argumentada.

### 9. Pla de manteniment

Una instal·lació segura el dia de la inauguració pot deixar de ser-ho sis mesos després.

Creeu un pla de manteniment preventiu.

Ha d'incloure actuacions sobre elements com:

- SAI i bateries;
- climatització;
- filtres;
- sensors;
- extintors o sistemes contra incendis;
- portes i sistemes d'accés;
- registres d'accés;
- rack;
- cablejat;
- comprovació de temperatura i humitat.

Podeu organitzar-lo per:

**mensual / trimestral / semestral / anual**.

### 10. Quatre situacions de crisi

Expliqueu breument com respondria el vostre disseny davant d'aquestes situacions:

**Situació A — 11:20 h:** es produeix un tall general de subministrament elèctric.

**Situació B — agost, 15:00 h:** el sistema de climatització de la sala de servidors deixa de funcionar.

**Situació C — 02:35 h:** algú intenta accedir a la sala de servidors.

**Situació D — 08:10 h:** un sensor detecta aigua al sòl de la sala tècnica.

No cal elaborar encara un pla de contingència complet.

Volem comprovar si les decisions de disseny que heu pres tenen sentit quan apareix un problema real.

## El pressupost

El pressupost haurà d'incloure, com a mínim:

| Element | Quantitat | Preu unitari | Total | Font | Justificació |
| --- | ---: | ---: | ---: | --- | --- |
| SAI |  |  |  |  |  |
| Control d'accés |  |  |  |  |  |
| Climatització |  |  |  |  |  |
| Sensors |  |  |  |  |  |
| ... |  |  |  |  |  |

Podeu incloure:

- equipament;
- instal·lació;
- material;
- mà d'obra estimada;
- manteniment inicial.

Reserveu preferiblement una part del pressupost per a imprevistos.

## Ús d'intel·ligència artificial

Podeu utilitzar IA.

ChatGPT, Copilot, Gemini, Claude o qualsevol altra ferramenta estan permeses.

Podeu utilitzar-les per:

- generar idees;
- comparar solucions;
- investigar tecnologies;
- calcular;
- buscar alternatives;
- millorar textos;
- preparar esquemes;
- crear la presentació;
- generar imatges o diagrames.

Però existeix una condició:

La IA pot proposar. Vosaltres heu de decidir.

Una resposta generada per IA no és una font tècnica.

Qualsevol dada important —preus, especificacions, potència d'un SAI, rangs ambientals, característiques d'un producte...— haurà de ser comprovada.

Al final de l'informe incloureu un apartat:

### Com hem utilitzat la IA

Indicant breument:

1. quines ferramentes heu utilitzat;
2. per a què;
3. un exemple d'una proposta de la IA que hàgeu acceptat;
4. un exemple d'una proposta que hàgeu modificat o descartat;
5. com heu verificat la informació.

Això evita que l'objectiu siga «fer el treball amb ChatGPT» i el transforma en aprendre a utilitzar IA com ho faria un tècnic.

## Lliuraments

Haureu d'entregar dos productes.

### 1. Informe tècnic

Un document professional en PDF que continga:

- portada;
- resum executiu;
- anàlisi de riscos;
- plànol o esquema de les oficines;
- disseny de la sala de servidors;
- mesures ambientals;
- alimentació i SAI;
- protecció física;
- control d'accés i ACL;
- política de contrasenyes;
- decisió sobre biometria;
- pla de manteniment;
- resposta davant dels quatre incidents;
- pressupost;
- fonts consultades;
- ús de la IA.

No marcaria un nombre rígid de pàgines; els diria que ha de ser complet però professional, sense omplir pàgines artificialment.

### 2. Presentació comercial

Imagineu que el professor és la direcció de Mediterrània Tech.

Disposeu de:

**8 minuts de presentació + 4 minuts de preguntes.**

La presentació no ha de resumir tot l'informe.

Ha de convéncer el client.

Jo els posaria una regla interessant:

**Màxim 10 diapositives.**

Això els força a seleccionar informació: problema → riscos → disseny → sala de servidors → accessos → SAI → pressupost → per què la nostra proposta.

[Activitat 2. Selecció i pressupost d'un SAI](activitat-2-taller-sai.md) · [Autoavaluació](autoavaluacio.md) · [Índex de la UP1](../index.md)
