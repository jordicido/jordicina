---
hide:
  - navigation
---
# Activitat 2. Selecció i pressupost d’un SAI

## Finalitat

Aprendreu a transformar les necessitats d’una empresa en requisits per a un sistema d’alimentació ininterrompuda (SAI), seleccionar un producte disponible en línia i preparar un pressupost justificat de compra i instal·lació.

Treballareu els criteris **RA1.e** i **RA1.f**.

Abans de començar, consulteu la teoria d’[Electricitat i sistemes d’alimentació ininterrompuda](../05-electricitat-sai.md), especialment els apartats sobre potència, autonomia, preses, monitoratge i pressupost.

## Organització

- Treball individual o per parelles, segons indique el professorat.
- **Duració orientativa: 60–75 minuts.**
- Activitat íntegrament teòrica i documental.
- No cal disposar d’un SAI real ni manipular bateries o instal·lacions elèctriques.

Per acabar-la en el temps previst, consulteu com a màxim dos productes i anoteu només les dades necessàries per prendre la decisió.

## Escenari: estudi de disseny Llevant

L’estudi de disseny Llevant vol protegir els equips que necessita per continuar treballant i evitar la corrupció de dades durant els talls breus de corrent. La direcció demana una proposta que permeta guardar el treball i apagar els sistemes de manera ordenada si el tall s’allarga.

L’empresa disposa dels equips següents:

| Equip | Consum estimat | Necessitat davant d’un tall |
| --- | ---: | --- |
| Servidor de fitxers | 180 W | Mantindre’l actiu i apagar-lo de manera segura |
| NAS de còpies | 90 W | Evitar la corrupció de dades |
| Switch de xarxa | 35 W | Mantindre la xarxa local durant l’apagada |
| Router i firewall | 35 W | Mantindre la connectivitat mentre siga necessari |
| Ordinador de recepció | 120 W | Guardar el treball i apagar-lo correctament |
| Impressora làser | 450 W de pic | No connectar-la a les preses amb bateria |

Les necessitats mínimes de la direcció són:

- autonomia suficient per guardar el treball i iniciar un apagament ordenat; com a objectiu de disseny, **10 minuts amb la càrrega prioritària**;
- potència suficient per a la càrrega protegida i un marge del 25 %;
- preses amb bateria per al servidor, el NAS i els equips de xarxa;
- monitoratge USB o de xarxa per poder automatitzar l’avís i l’apagada;
- bateria substituïble i informació clara sobre garantia i manteniment;
- alimentació monofàsica de 230 V i un equip adequat per a una oficina, sense una instal·lació elèctrica especial;
- pressupost màxim orientatiu de **900 € (IVA inclòs)** per a la compra i la instal·lació.

## Tasca 1. Calculeu la càrrega i els requisits (15 minuts)

Completeu una taula breu amb els requisits principals. Incloeu:

- càrrega prioritària en watts i càlcul del marge del 25 %;
- potència mínima necessària en W i capacitat orientativa en VA;
- nombre de preses amb bateria, autonomia objectiu i monitoratge;
- tipus de SAI més adequat i una condició de manteniment o garantia.

Com a comprovació, la càrrega prioritària de l’escenari és **460 W** i, amb un marge del 25 %, la càrrega de selecció és **575 W**. Cal justificar d’on ixen aquests valors i recordar que la impressora no es connecta a la bateria.

Justifiqueu cada requisit amb una frase. No confongueu la potència en VA amb la potència en W ni doneu per bona una autonomia que no estiga relacionada amb la càrrega indicada.

## Tasca 2. Compareu dos productes (25–30 minuts)

Consulteu una botiga fiable o la web d’un fabricant i seleccioneu **dos models reals** que puguen complir els requisits. Per a cada model, registreu només:

- fabricant, model i enllaç directe al producte o a la fitxa tècnica;
- preu i data de consulta;
- potència en VA i W, tipus de SAI i autonomia publicada per una càrrega semblant;
- nombre de preses amb bateria i connexió de monitoratge;
- un requisit que complisca i un que no complisca o no es puga verificar.

Compareu els dos models en una taula i trieu-ne un. La selecció s’ha de justificar amb les necessitats de l’estudi, no només amb el preu o amb la marca. No cal investigar dimensions, soroll o programari si no són decisius.

## Tasca 3. Feu un pressupost senzill (10–15 minuts)

Prepareu un pressupost del model triat amb aquesta informació:

- SAI, quantitat i preu;
- enviament, si apareix separat;
- instal·lació i configuració del monitoratge;
- base imposable, IVA i total final;
- data de consulta dels preus.

Si no hi ha preu d’instal·lació, podeu estimar **1 hora a 30 €/hora** i indicar que és una estimació. Comproveu si la proposta queda dins del pressupost màxim de **900 € IVA inclòs**.

## Tasca 4. Resumiu la instal·lació (5–10 minuts)

En quatre o cinc línies, indiqueu què faria el personal tècnic:

1. ubicar el SAI en un lloc ventilat i accessible;
2. connectar les càrregues prioritàries i deixar la impressora fora de la bateria;
3. configurar el monitoratge i l’apagada ordenada;
4. fer una prova controlada i anotar el manteniment bàsic.

Tanqueu el document amb dues limitacions o dades que encara caldria confirmar, com ara l’autonomia amb la càrrega real o el preu definitiu.

## Lliurament

Entregueu un únic document en **format PDF** amb el nom `activitat-2-sai-cognoms-nom.pdf`. No cal fer una portada separada: poseu el nom, el grup i la data al principi. El document ha d’incloure:

- requisits derivats de l’escenari i càlcul de càrrega;
- comparativa dels dos productes i justificació de la selecció;
- pressupost de compra i instal·lació;
- resum de la instal·lació i limitacions;
- enllaços i fonts consultades, amb la data de consulta;
- una conclusió final de **tres o quatre frases** sobre l’adequació i el cost de la proposta.

Extensió orientativa: **2 o 3 pàgines**. No cal adjuntar un fitxer Markdown ni fer captures d’un SAI real. Les captures de les fitxes o botigues només s’han d’incloure si ajuden a demostrar el preu o una especificació, i sempre han d’anar acompanyades de l’enllaç corresponent.

[Activitat 1. Informe d’anàlisi de riscos](activitat-1-mapa-riscos.md) · [Activitat 3. Pla de la microempresa](activitat-3-pla-microempresa.md)
