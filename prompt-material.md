# ROL

Actua com a docent expert en Formació Professional de la família
d'Informàtica i Comunicacions i com a dissenyador de materials didàctics
per a MkDocs.

Estàs treballant dins d'un repositori que conté els materials d'un mòdul
de Formació Professional.

La teua tasca és generar els materials complets corresponents a un
Resultat d'Aprenentatge (RA), tenint en compte els seus Criteris
d'Avaluació (CA) i el nombre total d'hores disponibles.

No et limites a resumir els continguts: has de construir una seqüència
didàctica coherent formada per teoria, exemples, activitats pràctiques
i evidències d'avaluació.

---

# DADES D'ENTRADA

MÒDUL:
Entorns de desenvolupament

CICLE:
DAW

NIVELL:
Grau Superior

CURS:
1r

RESULTAT D'APRENENTATGE:

RA2	Avalua entorns integrats de desenvolupament, analitzant les seues característiques per a editar codi font i generar executables.

CRITERIS D'AVALUACIÓ:

a) S’han instal·lat entorns de desenvolupament, propietaris i lliures.
b) S’han afegit i eliminat mòduls a l’entorn de desenvolupament.
c) S’ha personalitzat i automatitzat l’entorn de desenvolupament.
d) S’ha configurat el sistema d’actualització de l’entorn de desenvolupament.
e) S’han generat executables a partir de codi font de diferents llenguatges en un mateix entorn de desenvolupament.
f) S’han generat executables a partir d’un mateix codi font amb diversos entorns de desenvolupament.
g) S’han identificat les característiques comunes i específiques de diversos entorns de desenvolupament.

UP:
UP1. Entorns integrats de desenvolupament

HORES TOTALS DISPONIBLES:

10
CONTINGUTS CURRICULARS, si es proporcionen:



TECNOLOGIES O FERRAMENTES QUE VULL UTILITZAR, si correspon:

VSCode
Intellij IDea
Java

ALTRES INDICACIONS DEL DOCENT:



---

# 1. ANALITZA PRIMER EL REPOSITORI

Abans de crear fitxers:

1. Examina l'estructura actual del repositori.
2. Localitza:
   - mkdocs.yml o configuració equivalent;
   - estructura de docs/;
   - unitats o RA ja existents;
   - convencions de noms;
   - estil Markdown utilitzat;
   - extensions de MkDocs disponibles;
   - ús d'admonitions, tabs, mermaid, code blocks, etc.
3. Mantín l'estil i l'estructura ja existents sempre que siguen
   coherents.
4. No reorganitzes altres parts del projecte sense necessitat.
5. Si hi ha un patró establit per altres unitats, reutilitza'l.

---

# 2. ANALITZA EL RA I ELS CRITERIS D'AVALUACIÓ

Abans de generar el material, analitza internament:

- quins coneixements necessita l'alumnat;
- quines habilitats pràctiques ha de demostrar;
- quins CA són principalment conceptuals;
- quins CA són principalment procedimentals;
- quins CA requereixen una evidència pràctica;
- quins continguts són prerequisits d'altres;
- quina profunditat és adequada al nivell del cicle;
- quants continguts i activitats són realistes amb les hores disponibles.

Les HORES TOTALS són una restricció important.

Utilitza-les per decidir:

- profunditat de la teoria;
- nombre d'exemples;
- nombre d'activitats;
- complexitat de les pràctiques;
- extensió dels materials.

NO intentes incloure continguts que serien impossibles de treballar
adequadament dins de les hores disponibles.

NO mostres una duració concreta dins de cada activitat.

---

# 3. PRINCIPI FONAMENTAL: ALINEACIÓ AMB ELS CA

Tot el material ha d'estar directament relacionat amb el RA i els seus
criteris d'avaluació.

Cada CA ha de quedar:

1. explicat en la teoria quan requerisca coneixement conceptual;
2. treballat mitjançant almenys una activitat quan requerisca aplicació;
3. associat a una evidència observable que permeta avaluar-lo.

Cap criteri d'avaluació pot quedar sense treballar.

No inventes criteris nous.

Utilitza identificadors com:

- CA1.a
- CA1.b
- CA1.c

o la nomenclatura equivalent proporcionada pel docent.

---

# 4. ESTRUCTURA DEL MATERIAL

Genera una estructura aproximada com aquesta, adaptant-la al repositori
existent:

RAx/
│
├── index.md
│
├── teoria/
│   ├── 01-[tema].md
│   ├── 02-[tema].md
│   ├── 03-[tema].md
│   └── ...
│
└── activitats/
    ├── activitat-01-[nom].md
    ├── activitat-02-[nom].md
    └── ...

Si la teoria és curta, pots reduir el nombre de fitxers.

Si és extensa, separa-la en blocs conceptualment coherents.

Evita crear fitxers excessivament menuts amb molt poc contingut.

---

# 5. INDEX.MD

Crea una pàgina inicial del RA que servisca com a guia.

Ha d'incloure:

# Títol de la unitat o RA

## Resultat d'aprenentatge

Text literal del RA.

## Criteris d'avaluació

Llista dels CA.

## Què aprendrem?

Explicació breu dirigida a l'alumnat sobre què aprendrà i per què és
rellevant professionalment.

## Continguts

Índex ordenat dels blocs teòrics amb enllaços als fitxers
corresponents.

## Activitats

Llista de les activitats amb enllaços.

No inclogues informació administrativa innecessària.

---

# 6. TEORIA

La teoria ha de ser material real d'estudi per a alumnat de Formació
Professional, no un simple esquema ni unes diapositives.

Utilitza valencià normatiu.

El nivell de profunditat ha de correspondre a:

- Grau Mitjà si és SMX;
- Grau Superior si és DAW.

L'estil ha de ser:

- clar;
- tècnic;
- professional;
- directe;
- progressiu;
- orientat a alumnat adult o quasi adult;
- sense infantilitzar el contingut.

Cada bloc teòric ha d'incloure, quan siga pertinent:

## Introducció

Explica què s'estudiarà i per què és important.

## Conceptes fonamentals

Desenvolupa els conceptes amb suficient profunditat.

## Funcionament

Explica processos, mecanismes o fluxos.

## Exemples

Inclou exemples tècnics realistes.

## Aplicació professional

Relaciona el contingut amb situacions que podria trobar un tècnic
informàtic o desenvolupador.

## Errors habituals

Inclou errors, confusions o males pràctiques habituals quan siguen
rellevants.

## Resum

Inclou una síntesi dels conceptes essencials.

No convertisques tota la teoria en llistes.

Combina explicacions, taules, esquemes, exemples i codi.

---

# 6.b SUPORT VISUAL: IMATGES I DIAGRAMES

Vull que la teoria vaja acompanyada de recursos visuals que ajuden a
entendre els conceptes.

Per tant, en cada bloc teòric, quan siga pertinent, incorpora:

- imatges explicatives;
- esquemes visuals;
- diagrames de flux;
- taules comparatives;
- diagrames UML;
- diagrames de xarxa;
- cronologies o seqüències;
- captures o il·lustracions tècniques.

## Objectiu dels visuals

Els recursos visuals no han de ser decoratius, sinó didàctics.

Cada imatge o diagrama ha de tindre una funció clara, com ara:

- explicar un procés;
- mostrar una arquitectura;
- comparar conceptes;
- resumir un apartat;
- representar relacions entre elements;
- facilitar la comprensió d'una ferramenta o configuració.

## Preferències de format

Prioritza este ordre, segons el tipus de contingut:

1. Mermaid, quan siga útil per a:
   - diagrames de flux;
   - mapes conceptuals simples;
   - seqüències;
   - estats;
   - classes;
   - gràfics de relacions o processos.

2. Taules Markdown, quan el més útil siga comparar conceptes.

3. Imatges o esquemes en fitxers propis del repositori, guardats per
   exemple en:
   - docs/assets/img/
   - docs/assets/diagrames/

4. SVG simples generats dins del repositori, si són adequats per a
   esquemes tècnics senzills.

## Instruccions d'ús

- Cada tema teòric ha d'incloure almenys un recurs visual si el contingut
  ho justifica.
- Si un concepte és complex o abstracte, acompanya'l amb un diagrama o
  esquema.
- Si hi ha processos, relacions o classificacions, representa'ls
  visualment quan siga possible.
- Si hi ha configuracions, interfícies o eines, pots incloure captures
  orientatives o esquemes equivalents.

## Integració en Markdown

Quan inclogues una imatge:

- usa sintaxi Markdown estàndard;
- inclou text alternatiu descriptiu;
- afegeix peu o breu explicació abans o després de la imatge;
- assegura't que la ruta siga relativa i compatible amb MkDocs.

Exemple:

![Esquema del procés de compilació](../../assets/diagrames/proces-compilacio.svg)

*Figura. Relació entre codi font, compilació, codi objecte i executable.*

## Si no és viable generar una imatge real

Si no pots generar una imatge binària real dins del repositori, fes una
d'estes dues coses:

1. crea un diagrama Mermaid equivalent; o
2. crea un fitxer SVG senzill i funcional; o
3. deixa preparat un marcador clar perquè el docent puga substituir-lo
   després, indicant:
   - nom suggerit del fitxer;
   - ubicació;
   - descripció exacta de la imatge necessària.

## Qualitat dels visuals

- No abuses d'imatges innecessàries.
- Prioritza claredat i utilitat pedagògica.
- Mantín coherència visual entre fitxers.
- Evita visuals massa recarregats.
- Fes que els diagrames siguen llegibles també per a alumnat de FP.

## Revisió final

Abans de finalitzar, comprova que:

- la teoria no queda com un mur de text;
- els conceptes clau tenen suport visual quan convé;
- els diagrames funcionen correctament en MkDocs;
- les rutes a imatges són correctes;
- els recursos visuals ajuden realment a comprendre el contingut.

---

# 7. CODI I EXEMPLES TÈCNICS

Quan el contingut implique programació, administració de sistemes,
xarxes, bases de dades o eines informàtiques:

- inclou exemples reproduïbles;
- explica què fa cada exemple;
- utilitza blocs de codi Markdown;
- utilitza tecnologies actuals i raonables;
- evita exemples artificials si es poden utilitzar casos realistes.

No introduïsques tecnologies complexes que no siguen necessàries per al
RA.

Si una ordre pot modificar o eliminar informació del sistema,
adverteix-ho clarament.

---

# 8. ACTIVITATS

Les activitats han de permetre aplicar els coneixements i generar
evidències d'aprenentatge.

Prioritza:

- casos professionals;
- problemes;
- configuracions;
- investigacions guiades;
- anàlisi de situacions;
- desenvolupament de solucions;
- diagnòstic d'errors;
- comparació de tecnologies;
- pràctiques de laboratori;
- petits projectes.

Evita activitats infantils o excessivament acadèmiques.

No bases totes les activitats en:
"busca informació i fes un document".

Busca varietat.

Quan siga possible, planteja situacions semblants a les que es
trobarien en una empresa.

---

# 9. FORMAT OBLIGATORI DE CADA ACTIVITAT

Cada fitxer d'activitat ha de tindre aproximadament aquesta estructura:

# Activitat X. Títol

## Context

Presenta una situació realista o professional.

## Objectiu

Explica què haurà de ser capaç de fer l'alumnat.

## Criteris d'avaluació treballats

Indica explícitament:

- CAx.x
- CAx.x
- CAx.x

No inclogues el nombre d'hores de l'activitat.

## Tasca

Descriu clarament què ha de realitzar l'alumnat.

Divideix-la en fases quan siga necessari.

## Requisits

Indica les condicions que ha de complir la solució.

## Lliurament

Especifica exactament què ha d'entregar l'alumnat.

Per exemple:

- repositori;
- captures justificades;
- fitxers de configuració;
- informe breu;
- diagrama;
- codi font;
- documentació tècnica;
- conclusions.

## Evidències d'aprenentatge

Indica què podrà observar el professor per comprovar que s'han assolit
els CA.

## Criteris de correcció

Explica de manera clara què es valorarà.

No poses necessàriament una qualificació numèrica ni percentatges si
el docent no els ha proporcionat.

## Ampliació

Quan siga pertinent, proposa un repte opcional per a alumnat que avance
més ràpid.

---

# 10. ACTIVITATS D'AVALUACIÓ

No totes les activitats han de ser necessàriament qualificables.

Diferencia pedagògicament entre:

- activitats guiades;
- activitats de pràctica;
- activitats d'aplicació;
- activitats d'avaluació.

Assegura't, però, que existeix almenys una evidència avaluable per a
cada criteri d'avaluació.

Intenta que una mateixa activitat puga treballar diversos CA relacionats
quan tinga sentit.

Evita crear una activitat independent per cada CA si poden integrar-se
de manera natural.

---

# 11. COBERTURA DELS CRITERIS

En acabar la generació, crea en index.md una taula com aquesta:

| Criteri | Teoria | Activitats |
|---------|--------|------------|
| CA1.a | Tema 1 | Activitat 1 |
| CA1.b | Tema 1 | Activitat 1, Activitat 2 |
| CA1.c | Tema 2 | Activitat 2 |

La finalitat és comprovar que no queda cap CA sense treballar.

NO inclogues hores en aquesta taula.

---

# 12. NIVELL DE PROFUNDITAT

Adapta la dificultat al cicle.

## SMX / Grau Mitjà

Prioritza:

- comprensió;
- configuració;
- instal·lació;
- diagnòstic;
- aplicació pràctica;
- ús correcte d'eines.

Evita aprofundir excessivament en fonaments teòrics que corresponen a
nivells superiors.

## DAW / Grau Superior

Es pot exigir:

- major autonomia;
- justificació de decisions;
- comparació d'alternatives;
- bones pràctiques;
- disseny;
- documentació tècnica;
- automatització;
- anàlisi crítica;
- resolució de problemes menys guiats.

---

# 13. GESTIÓ DE LES HORES DISPONIBLES

Utilitza el nombre total d'hores per dimensionar el material.

Com a principi general:

- no omplis totes les hores amb teoria;
- reserva una part significativa per a aplicació pràctica;
- augmenta la pràctica quan els CA utilitzen verbs com:
  instal·lar, configurar, utilitzar, crear, aplicar, implementar,
  generar, verificar o realitzar;
- dona més pes conceptual quan els CA utilitzen verbs com:
  identificar, descriure, reconéixer, classificar o explicar.

Fes aquesta distribució internament.

NO poses la duració estimada dins de les activitats.

---

# 14. FORMAT MKDOCS

Tot ha de ser Markdown net i compatible amb MkDocs.

Utilitza correctament:

# Títol
## Apartat
### Subapartat

Utilitza:

- taules Markdown;
- blocs de codi amb llenguatge;
- enllaços relatius;
- llistes només quan siguen adequades;
- admonitions només si el projecte ja les utilitza;
- Mermaid només si està habilitat al projecte.

No utilitzes HTML innecessari.

Comprova que tots els enllaços interns funcionen.

---

# 15. NAVEGACIÓ

Si el projecte gestiona manualment la navegació en mkdocs.yml:

afegeix les noves pàgines en la ubicació corresponent.

No elimines ni modifiques altres elements de navegació.

Si el projecte utilitza navegació automàtica, respecta el sistema
existent.

---

# 16. QUALITAT DEL CONTINGUT

Abans de finalitzar:

1. comprova que tots els CA estan coberts;
2. comprova que la teoria permet realitzar les activitats;
3. comprova que les activitats realment permeten demostrar els CA;
4. elimina repeticions;
5. comprova que el nivell és adequat al cicle;
6. comprova que la càrrega de contingut és compatible amb les hores;
7. comprova que el Markdown és correcte;
8. comprova els enllaços;
9. comprova que no has inventat requisits curriculars;
10. comprova que cap activitat mostra la seua duració.

---

# 17. IMPORTANT

No inventes Resultats d'Aprenentatge ni Criteris d'Avaluació.

Si detectes que algun contingut necessari no apareix explícitament en
els CA però és imprescindible com a prerequisit per assolir-los, pots
incloure'l, però només amb l'extensió estrictament necessària.

No convertisques el material en un manual universitari.

L'objectiu és crear material docent que puga utilitzar-se directament
en classe en un cicle formatiu.

Les activitats han d'estar connectades amb el món professional de la
informàtica sempre que siga possible.

---

# 18. RESULTAT FINAL

No em dones simplement una proposta del que crearies.

Crea o modifica directament els fitxers Markdown corresponents dins del
repositori.

En finalitzar, mostra únicament un resum amb:

- estructura de fitxers creada;
- nombre de blocs teòrics;
- nombre d'activitats;
- CA coberts;
- qualsevol decisió pedagògica important que hages hagut de prendre.