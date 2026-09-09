Vull que generes una presentació PowerPoint en format `.pptx` utilitzant **PptxGenJS**.

Disposes d'una presentació o plantilla de referència que has d'utilitzar com a guia visual a l'arrel del directori @formatIESMRE.pptx

## Objectiu

Crear una presentació docent sobre:

ED Presentació del modul

Dirigida a alumnat de:

1er DAW

## Requisit principal de disseny

La presentació ha de mantindre de manera consistent l'estil visual de la plantilla proporcionada.

Analitza prèviament la plantilla per identificar:

* Paleta de colors.
* Tipografies.
* Grandàries dels títols i del cos de text.
* Marges.
* Posició habitual dels títols.
* Ús de fons.
* Format de capçaleres i peus.
* Estil de les taules.
* Estil de les caixes de contingut.
* Ús d'icones.
* Distribució dels elements.
* Relació entre text i imatges.

A partir d'aquesta anàlisi, crea un sistema de disseny reutilitzable en el codi.

No improvises estils diferents en cada diapositiva.

## Principis visuals

Vull una presentació visual i docent, no un document convertit directament en diapositives.

Per tant:

* Evita diapositives carregades de text.
* Presenta una idea principal per diapositiva.
* Utilitza frases breus.
* Destaca visualment els conceptes clau.
* Utilitza diagrames quan permeten explicar millor un concepte.
* Utilitza esquemes, processos, comparacions i línies temporals quan siga adequat.
* Inclou exemples pràctics.
* Utilitza icones o imatges quan aporten informació.
* Evita les imatges merament decoratives.
* Mantín prou espai en blanc.
* Evita taules excessivament grans.
* No reduïsques la grandària de la lletra només per fer cabre més contingut.
* Si una diapositiva té massa contingut, divideix-la en diverses diapositives.

## Estructura

La presentació ha d'incloure, quan corresponga:

1. Portada.
2. Què aprendrem.
3. Contextualització del tema.
4. Desenvolupament progressiu dels conceptes.
5. Exemples.
6. Diagrames i esquemes.
7. Casos pràctics.
8. Errors freqüents.
9. Activitats o preguntes de reflexió quan tinga sentit.
10. Resum final.

No és obligatori utilitzar exactament aquesta estructura si el contingut requereix una altra organització.

## Diagrames

Genera els diagrames directament amb formes i elements de PowerPoint sempre que siga possible.

Per exemple:

* fluxos,
* arquitectures,
* relacions,
* jerarquies,
* cicles,
* comparacions,
* línies temporals,
* mapes conceptuals.

Evita inserir els diagrames com a imatges si es poden construir amb elements editables de PowerPoint.

## Imatges

Quan un concepte es beneficie d'un suport visual, incorpora una imatge adequada.

Les imatges han de:

* aportar informació o facilitar la comprensió,
* tindre una funció didàctica clara,
* mantindre coherència amb l'estil de la presentació,
* evitar un aspecte genèric o de banc d'imatges quan siga possible.

Si és més adequat, crea esquemes, il·lustracions o diagrames específics per al concepte en lloc d'utilitzar fotografies.

## Codi

Organitza el codi de manera mantenible.

Crea funcions reutilitzables per a elements com:

* `createTitleSlide()`
* `createSectionSlide()`
* `createContentSlide()`
* `createTwoColumnSlide()`
* `createDiagramSlide()`
* `createComparisonSlide()`
* `createSummarySlide()`

Defineix constants globals per a:

* colors,
* tipografies,
* grandàries,
* marges,
* dimensions,
* estils.

Evita repetir valors visuals directament en cada diapositiva.

## Adaptació didàctica del contingut

Si disposes de material teòric en Markdown, utilitza'l com a font per generar la presentació.

No copies literalment el contingut del Markdown.

Has de transformar-lo en una presentació pensada per ser explicada oralment pel professor.

Per tant:

* resumeix la teoria,
* selecciona els conceptes essencials,
* converteix processos en esquemes,
* transforma comparacions en taules o elements visuals,
* converteix classificacions en diagrames,
* destaca definicions importants,
* incorpora exemples curts,
* utilitza fragments de codi quan aporten valor,
* divideix els conceptes complexos en diverses diapositives.

La presentació ha de servir com a suport visual per a l'explicació del docent, mentre que el material Markdown contindrà la teoria completa.

## Criteris didàctics

La presentació ha de seguir una progressió:

**motivació → concepte → explicació → exemple → aplicació**

Quan siga possible, relaciona els continguts amb situacions pròximes al món professional de la informàtica.

En el cas de mòduls de Formació Professional, prioritza exemples relacionats amb:

* administració de sistemes,
* desenvolupament d'aplicacions,
* xarxes,
* seguretat informàtica,
* serveis,
* bases de dades,
* desplegament d'aplicacions,
* entorns de desenvolupament,
* situacions professionals reals.

## Control de qualitat

Abans de donar el treball per acabat:

1. Genera el fitxer `.pptx`.
2. Renderitza totes les diapositives com a imatges.
3. Revisa visualment totes les diapositives.
4. Comprova:

   * elements solapats,
   * text fora de les caixes,
   * grandàries inconsistents,
   * problemes d'alineació,
   * excés de text,
   * mala distribució de l'espai,
   * elements massa pròxims als marges,
   * contrast insuficient,
   * inconsistències respecte de la plantilla original.
5. Corregeix tots els problemes detectats.
6. Torna a generar la presentació.
7. Repeteix la revisió si encara existeixen problemes visuals.

No consideres acabada la tasca fins que la presentació siga visualment coherent i totes les diapositives siguen correctes.

## Fitxers finals

Entrega:

* `presentacioED.pptx`
* el codi font utilitzat per generar-la.

La presentació final ha de poder editar-se normalment amb Microsoft PowerPoint o LibreOffice Impress.
