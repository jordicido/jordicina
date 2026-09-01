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

Una taula inicial pot ajudar a no saltar directament a la solució:

| Actiu | Amenaça | Vulnerabilitat | Conseqüència | Mesura |
| --- | --- | --- | --- | --- |
| NAS | Robatori | Armari obert | Pèrdua de dades i equip | Armari tancat + registre |

!!! tip "Pregunta de control"
    Diferencia l’amenaça «aigua» de la vulnerabilitat «canonada damunt del rack». Poden existir per separat?

[Següent: seguretat física i lògica](02-seguretat-fisica-logica.md) · [Índex](index.md)
