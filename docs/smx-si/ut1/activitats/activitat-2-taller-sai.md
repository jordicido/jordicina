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

- Treball individual.
- Activitat íntegrament teòrica i documental.
- No cal disposar d’un SAI real ni manipular bateries o instal·lacions elèctriques.

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

## Tasca 1. Definiu els requisits del SAI

Analitzeu l’escenari i redacteu una taula de requisits. Com a mínim, incloeu:

- càrrega prioritària en watts i càlcul del marge del 25 %;
- potència mínima necessària en W i capacitat orientativa en VA;
- nombre de preses amb bateria i nombre de preses només protegides;
- autonomia objectiu i criteri per comprovar-la en la fitxa del fabricant;
- tipus de SAI més adequat: offline, line-interactive o online;
- monitoratge, connexió USB o de xarxa i compatibilitat amb l’apagada automàtica;
- proteccions, format, soroll, dimensions i condicions d’ubicació;
- garantia, bateria substituïble, manteniment i vida útil prevista.

Justifiqueu cada requisit a partir d’una necessitat concreta de l’empresa. No confongueu la potència en VA amb la potència en W ni doneu per bona una autonomia que no estiga relacionada amb la càrrega indicada.

## Tasca 2. Busqueu i compareu productes

Consulteu botigues o webs de fabricants i seleccioneu **dos models reals** que puguen complir els requisits. Per a cada model, registreu:

- fabricant, model i enllaç directe al producte o a la fitxa tècnica;
- preu, moneda, disponibilitat i data de consulta;
- potència en VA i W, tipus de SAI i autonomia publicada;
- nombre i tipus de preses, connexions de monitoratge i programari;
- dimensions, soroll, garantia i possibilitat de substituir la bateria;
- qualsevol requisit que no complisca o dada que no es puga verificar.

Compareu els dos models en una taula i trieu-ne un. La selecció s’ha de justificar amb les necessitats de l’estudi, no només amb el preu o amb la marca.

## Tasca 3. Prepareu el pressupost de compra i instal·lació

Elaboreu un pressupost detallat per al model triat. Incloeu, com a mínim:

- SAI, quantitat, preu unitari i subtotal;
- despeses d’enviament o altres costos de compra;
- mà d’obra d’instal·lació i configuració del monitoratge;
- materials auxiliars, si en calen;
- base imposable, IVA i total final;
- data de validesa o data de consulta dels preus.

Si la botiga no publica un preu d’instal·lació, establiu una tarifa raonable, indiqueu que és una estimació i expliqueu el criteri utilitzat. Comproveu si la proposta queda dins del pressupost màxim de 900 € IVA inclòs.

## Tasca 4. Descriviu la instal·lació prevista

Sense executar cap connexió, descriviu el procediment que seguiria el personal tècnic:

1. ubicar el SAI i comprovar ventilació, accessibilitat i presa de terra;
2. connectar a les preses amb bateria només els equips prioritaris;
3. deixar la impressora i altres càrregues no prioritàries fora de la bateria;
4. connectar i configurar el monitoratge i l’apagada ordenada;
5. etiquetar les preses i documentar les connexions;
6. fer una prova controlada segons el manual, sense posar en risc el servei;
7. registrar el resultat, el pla de manteniment i el procediment de substitució de la bateria.

Indiqueu quines dades del fabricant o de la instal·lació real faltarien per validar definitivament la proposta.

## Lliurament

Entregueu un únic document en **format PDF** amb el nom `activitat-2-sai-cognoms-nom.pdf`. El document ha d’incloure:

- portada amb nom, grup i data;
- requisits derivats de l’escenari i càlcul de càrrega;
- comparativa dels dos productes i justificació de la selecció;
- pressupost complet de compra i instal·lació;
- procediment d’instal·lació i verificació documental;
- enllaços i fonts consultades, amb la data de consulta;
- una conclusió final sobre l’adequació, el cost i les limitacions de la proposta.

No cal adjuntar un fitxer Markdown ni fer captures d’un SAI real. Les captures de les fitxes o botigues només s’han d’incloure si ajuden a demostrar el preu o una especificació, i sempre han d’anar acompanyades de l’enllaç corresponent.

[Activitat 1. Informe d’anàlisi de riscos](activitat-1-mapa-riscos.md) · [Activitat 3. Pla de la microempresa](activitat-3-pla-microempresa.md)
