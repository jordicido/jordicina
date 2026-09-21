---
hide:
  - navigation
---
# 5. Electricitat i sistemes d’alimentació ininterrompuda

## Què és un SAI?

Un **sistema d’alimentació ininterrompuda (SAI)** és un equip que se situa entre la xarxa elèctrica i els dispositius que volem protegir. Quan la xarxa funciona correctament, el SAI alimenta les càrregues i manté la bateria carregada. Quan detecta un problema, utilitza la bateria durant un temps limitat i avisa els equips o les persones responsables.

Un SAI no està pensat per mantindre una oficina funcionant durant hores. Normalment serveix per a una d’aquestes finalitats:

- evitar que un microtall reinicie un servidor o un equip de xarxa;
- mantindre un servei actiu durant uns minuts;
- donar temps a guardar el treball i apagar els sistemes de manera ordenada;
- reduir els efectes de baixades, pujades o irregularitats de tensió;
- evitar la corrupció de dades en servidors, NAS i altres equips amb emmagatzematge.

Per això, seleccionar un SAI no consisteix només a buscar el model més potent. Cal relacionar la càrrega, el temps d’autonomia, les connexions, el monitoratge, l’espai disponible i el pressupost amb les necessitats reals de l’empresa.

## Problemes de la xarxa elèctrica

| Incidència | Possible efecte | Resposta que pot aportar un SAI |
| --- | --- | --- |
| Tall o microtall | Reinici, pèrdua de treball o corrupció de dades | Alimentació temporal amb bateria |
| Baixada de tensió | Funcionament inestable o apagada inesperada | Regulació, segons el model |
| Pujada de tensió | Danys o reducció de la vida útil dels equips | Protecció, segons el model |
| Soroll o interferències | Errors o comportament irregular | Filtratge, segons el model |
| Tall prolongat | Esgotament de la bateria | Avís i apagada ordenada |

Una regleta amb protecció contra sobretensions pot protegir davant d’alguns pics, però no manté l’alimentació quan hi ha un tall. Un SAI aporta energia temporal i, en alguns models, també regula o filtra la tensió.

## Tipus de SAI

| Tipus | Funcionament | Avantatges | Limitacions i ús habitual |
| --- | --- | --- | --- |
| **Offline** o standby | Alimenta directament des de la xarxa i canvia a bateria quan detecta una incidència. | Econòmic i senzill. | Té un temps de transferència i ofereix menys regulació. Adequat per a equips d’oficina poc sensibles. |
| **Line-interactive** | Incorpora regulació de tensió i utilitza la bateria quan la variació supera el marge admés. | Bon equilibri entre cost, protecció i consum. | No aïlla completament la càrrega de la xarxa. És una opció habitual per a servidors xicotets i xarxes d’empresa. |
| **Online** o de doble conversió | Converteix contínuament l’entrada i genera una alimentació més estable per a la càrrega. | Millor continuïtat i qualitat de l’alimentació. | Més car, amb més consum, calor i manteniment. S’utilitza quan la càrrega és especialment crítica. |

Per a una oficina, un SAI line-interactive sol ser un punt de partida raonable, però la decisió ha d’estar justificada. Si l’empresa té una alimentació molt inestable, un servidor crític o requisits estrictes de continuïtat, pot ser necessari valorar un model online.

## Potència: watts, VA i factor de potència

Les fitxes tècniques solen indicar dues capacitats:

- **W (watts):** potència activa que consumeixen els equips.
- **VA (voltamperes):** capacitat aparent que ha de suportar el SAI.

La relació aproximada és:

```text
W = VA × factor de potència
```

El factor de potència depén del model i de la càrrega. Per això no és correcte aplicar sempre una regla fixa com «1 VA = 1 W» o «VA = W × 1,6». En una selecció real cal consultar els dos valors de la fitxa del fabricant i comprovar que la càrrega queda per davall de tots dos límits.

### Càrrega prioritària i marge

Primer cal separar els equips que necessiten bateria dels que no en necessiten. No totes les càrregues de l’empresa han d’estar connectades a les preses amb bateria.

```text
càrrega prioritària = suma dels watts dels equips protegits
càrrega de selecció = càrrega prioritària × 1,25
```

El marge del 25 % és una orientació per evitar treballar al límit i deixar espai per a variacions o ampliacions. El percentatge es pot modificar si l’empresa té un criteri diferent, però sempre cal explicar-lo.

En l’escenari de l’activitat 2:

```text
càrrega prioritària = 180 + 90 + 35 + 35 + 120 = 460 W
càrrega de selecció = 460 × 1,25 = 575 W
```

Per tant, el model triat hauria de superar almenys els **575 W** i també complir el requisit equivalent en VA. La impressora làser no s’inclou en el càlcul perquè té un pic elevat i no és una càrrega prioritària per a la bateria.

## Autonomia

L’**autonomia** és el temps durant el qual el SAI pot alimentar una càrrega quan falla la xarxa. No depén només de la capacitat anunciada: també influeixen la càrrega real, el nombre i l’estat de les bateries, la temperatura, l’edat de l’equip i el model concret.

Per seleccionar un SAI:

1. defineix què ha de passar durant el tall;
2. fixa el temps necessari per guardar el treball o apagar;
3. consulta la taula o la corba d’autonomia del fabricant;
4. comprova que el temps publicat correspon a una càrrega pròxima a la calculada;
5. deixa un marge perquè l’autonomia disminueix amb l’envelliment de la bateria.

Una autonomia «fins a 10 minuts» sense indicar la càrrega no és suficient per justificar una selecció. Cal saber si els 10 minuts corresponen a mitja càrrega, a plena càrrega o a una altra condició.

Si l’objectiu és només apagar correctament, pot ser suficient una autonomia curta. Si l’empresa necessita mantindre un servei mentre arrenca un generador o espera una intervenció, caldrà més autonomia o una solució diferent, com bateries externes o un grup electrogen.

## Preses i connexions

Un SAI pot tindre diferents tipus de preses:

- **preses amb bateria:** continuen alimentant l’equip quan falla la xarxa;
- **preses només protegides:** filtren o protegeixen davant d’algunes incidències, però no donen autonomia;
- **preses o connectors especials:** poden estar destinats a ampliacions, protecció de xarxa o altres funcions segons el model.

En la proposta cal comptar quants equips prioritaris s’han de connectar i comprovar que hi ha prou preses amb bateria. No s’han d’utilitzar adaptadors o regletes que dificulten la ventilació o superen la càrrega admissible.

Les impressores làser, calefactors, radiadors, aspiradors i altres equips amb pics elevats no solen connectar-se a les preses amb bateria. Poden esgotar-la ràpidament, provocar una sobrecàrrega o impedir que el SAI protegisca els equips prioritaris.

## Monitoratge i apagada ordenada

El monitoratge permet que el SAI comunique l’estat de la xarxa i de la bateria a un ordinador o servidor. Les opcions més habituals són:

- connexió USB amb programari de gestió;
- connexió de xarxa mitjançant una targeta o un agent de monitoratge;
- alarmes acústiques i indicadors en el frontal;
- notificacions i ordres d’apagada automàtica.

Per a un servidor o un NAS, no n’hi ha prou amb saber que el SAI té un port USB. Cal comprovar que el programari és compatible amb el sistema operatiu i que permet configurar l’avís i l’apagada abans que s’esgote la bateria.

## Criteris addicionals de selecció

La potència i l’autonomia són importants, però no són els únics criteris. En comparar productes, revisa també:

- tensió d’entrada i d’eixida, normalment 230 V en una oficina;
- nombre i tipus de preses;
- forma d’ona de l’eixida, especialment si el fabricant dels equips exigeix una ona concreta;
- dimensions, pes, ventilació i nivell de soroll;
- possibilitat de substituir la bateria sense canviar tot l’equip;
- garantia, disponibilitat de recanvis i servei tècnic;
- protecció davant de sobrecàrrega, curtcircuit i sobretensió;
- compatibilitat amb el monitoratge i l’apagada ordenada;
- preu, disponibilitat, despeses d’enviament i cost d’instal·lació.

Una dada que no apareix en la fitxa no s’ha d’inventar. Es pot marcar com a «no indicada» i explicar que cal confirmar-la amb el fabricant o el distribuïdor.

## Procediment de selecció per a l’activitat

La proposta de l’activitat 2 es pot elaborar amb aquest ordre:

1. **Interpretar el cas.** Identifica quins equips han de continuar, quins s’han d’apagar i quin temps cal guanyar.
2. **Calcular la càrrega.** Suma els watts dels equips prioritaris i aplica el marge acordat.
3. **Convertir necessitats en requisits.** Escriu valors o condicions comprovables: watts, VA, minuts, nombre de preses, monitoratge, bateria, garantia i pressupost.
4. **Buscar dos productes.** Utilitza fitxes de fabricants o botigues fiables i conserva l’enllaç, la data de consulta i les dades rellevants.
5. **Comparar.** Indica què compleix cada producte, què no compleix i quines dades falten.
6. **Seleccionar.** Tria el model que resol millor el problema i justifica els compromisos entre cost, protecció, autonomia i manteniment.
7. **Pressupostar.** Calcula el cost de compra, enviament, materials, instal·lació, configuració, IVA i total final.
8. **Descriure la implantació.** Explica on s’ubicaria, què es connectaria, com es configuraria i com es verificaria sense executar la instal·lació.

## Pressupost de compra i instal·lació

El pressupost ha de permetre saber quant costaria posar la solució en funcionament. Una estructura útil és:

| Concepte | Quantitat | Preu unitari | Subtotal |
| --- | ---: | ---: | ---: |
| SAI seleccionat | 1 | — | — |
| Enviament | 1 | — | — |
| Materials auxiliars | — | — | — |
| Instal·lació i connexió | — | — | — |
| Configuració del monitoratge | — | — | — |
| **Base imposable** |  |  | **—** |
| **IVA** |  |  | **—** |
| **Total** |  |  | **—** |

Si el preu d’instal·lació no apareix publicat, es pot fer una estimació. En aquest cas cal indicar les hores previstes, la tarifa aplicada i si inclou desplaçament, configuració o una prova de funcionament. Els preus han d’anar acompanyats de la data de consulta perquè poden canviar.

## Instal·lació i verificació documental

La instal·lació real l’hauria de fer personal autoritzat i d’acord amb el manual del fabricant. En una activitat teòrica, cal descriure el procediment i les comprovacions:

1. revisar la presa, la tensió, la ventilació i l’espai disponible;
2. col·locar el SAI en una superfície estable i accessible;
3. connectar les càrregues prioritàries a les preses amb bateria;
4. deixar fora les càrregues no prioritàries o amb pics elevats;
5. connectar el cable o agent de monitoratge;
6. configurar els avisos i el temps d’apagada segura;
7. etiquetar les connexions i registrar els equips protegits;
8. fer una prova controlada segons el manual, sense interrompre un servei crític;
9. documentar el resultat, les incidències i el pla de manteniment.

En la proposta també cal indicar quines dades encara faltaria confirmar: compatibilitat exacta del programari, autonomia amb la càrrega real, estat de la instal·lació elèctrica, disponibilitat del producte o preu definitiu de la mà d’obra.

## Manteniment i limitacions

La bateria és un component consumible. Cal registrar la data d’instal·lació, observar alarmes, mantindre lliures les reixetes i substituir-la segons el seu estat i les indicacions del fabricant. Una bateria envellida pot oferir molta menys autonomia que la publicada per a un equip nou.

Un SAI no substitueix les còpies de seguretat, la protecció contra incendis, la protecció contra inundacions ni el manteniment dels servidors. Tampoc resol una instal·lació elèctrica defectuosa. Quan l’autonomia s’esgota, l’objectiu és que els sistemes s’apaguen de manera ordenada; mantindre’ls encesos fins a esgotar completament la bateria pot provocar una aturada brusca.

!!! warning "Seguretat"
    No òbrigues la bateria ni manipules la instal·lació elèctrica. En l’Activitat 2, la selecció i la verificació es fan a partir de documentació tècnica i informació de productes en línia.

[Anterior: protecció física](04-proteccio-fisica.md) · [Activitat 2: selecció i pressupost d’un SAI](activitats/activitat-2-taller-sai.md) · [Següent: controls d’accés](06-controls-acces.md)
