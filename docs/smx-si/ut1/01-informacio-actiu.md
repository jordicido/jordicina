---
hide:
  - navigation
---
# 1. La informació com a actiu

## Per què protegim la informació?

Una organització depén de dades, configuracions, documents i serveis per treballar. Si la informació desapareix, es modifica sense autorització o no està disponible, l’empresa pot deixar de vendre, incomplir un contracte, perdre confiança o haver de reconstruir el seu entorn tècnic.

No cal que una dada siga secreta per tindre valor. Un inventari, una agenda de clients, la configuració d’un router o els horaris del personal també poden afectar el funcionament del negoci.

## Confidencialitat, integritat i disponibilitat

| Propietat | Significat | Exemple |
| --- | --- | --- |
| Confidencialitat | Només accedeixen les persones autoritzades. | Una visita no pot consultar nòmines. |
| Integritat | La informació és correcta i no ha sigut alterada indegudament. | Els preus publicats coincideixen amb els aprovats. |
| Disponibilitat | El recurs està accessible quan la feina el necessita. | El servidor arranca després d’un microtall. |

Les tres propietats poden entrar en tensió: xifrar una dada pot protegir-ne la confidencialitat però complicar-ne la disponibilitat si es perden les claus. La seguretat busca un equilibri adequat al risc.

## Actius, amenaces, vulnerabilitats i riscos

- **Actiu:** element amb valor, com un servidor, un portàtil, una credencial, una sala o una base de dades.
- **Amenaça:** causa potencial de dany, com un robatori, un incendi, un error humà o un tall elèctric.
- **Vulnerabilitat:** debilitat que facilita el dany, com una porta oberta o una regleta sobrecarregada.
- **Impacte:** conseqüència si l’incident es produeix.
- **Risc:** combinació de probabilitat i impacte.

## Com fer una anàlisi inicial

Per analitzar un entorn, segueix aquest ordre:

1. **Inventaria els actius:** què hi ha i per a què serveix?
2. **Assigna responsables:** qui necessita que funcione i qui el manté?
3. **Pregunta què pot passar:** robatori, foc, aigua, tall, error o accés no autoritzat.
4. **Busca vulnerabilitats observables:** porta oberta, equip al terra, cables sense ordre o permisos massa amplis.
5. **Descriu l’impacte:** què deixaria de funcionar, quina informació s’exposaria i quant de temps afectaria?
6. **Proposa una mesura verificable:** què canviarà, qui ho farà i com sabrem que funciona?

No cal protegir tots els actius de la mateixa manera. Un monitor de recepció i un servidor amb dades de clients tenen valors i conseqüències diferents. L’anàlisi ha de reflectir aquesta diferència.

## Impactes habituals

Una incidència pot produir més d’una conseqüència:

| Tipus d’impacte | Exemple |
| --- | --- |
| Operatiu | El personal no pot treballar o atendre clients. |
| Econòmic | Es perden vendes, hores de treball o equipament. |
| Informatiu | Es perden, s’alteren o s’exposen dades. |
| Reputacional | Clients i proveïdors perden confiança. |
| Organitzatiu | Cal activar personal, proveïdors o procediments d’emergència. |

Una mateixa vulnerabilitat pot afectar diferents propietats. Per exemple, robar un portàtil pot comprometre la confidencialitat de les dades, la disponibilitat de l’equip i la integritat de la informació si algú la modifica.

Una taula inicial pot ajudar a no saltar directament a la solució:

| Actiu | Amenaça | Vulnerabilitat | Conseqüència | Mesura |
| --- | --- | --- | --- | --- |
| NAS | Robatori | Armari obert | Pèrdua de dades i equip | Armari tancat + registre |

!!! tip "Pregunta de control"
    Diferencia l’amenaça «aigua» de la vulnerabilitat «canonada damunt del rack». Poden existir per separat?

!!! example "Exemple complet"
    **Actiu:** servidor de fitxers. **Amenaça:** tall elèctric. **Vulnerabilitat:** no hi ha SAI i el servidor s’apaga bruscament. **Impacte:** indisponibilitat del servei i possible corrupció de dades. **Mesures:** SAI, apagada controlada i revisió de l’alimentació.

[Següent: seguretat física i lògica](02-seguretat-fisica-logica.md) · [Índex](index.md)
