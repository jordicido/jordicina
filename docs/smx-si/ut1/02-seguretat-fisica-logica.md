---
hide:
  - navigation
---
# 2. Seguretat física i seguretat lògica

## Dues capes que es complementen

La **seguretat física** protegeix l’entorn material: edifici, sales, equips, suports, electricitat i condicions ambientals. La **seguretat lògica** protegeix comptes, dades i serveis amb mecanismes de programari o configuració.

| Situació | Mesura física | Mesura lògica complementària |
| --- | --- | --- |
| Servidor en una sala restringida | Porta amb pany o targeta | Comptes personals i permisos mínims |
| Portàtil fora de l’oficina | Cable o armari antirobatori | Xifratge i bloqueig de pantalla |
| Sala de comunicacions | Rack tancat i sensor | Administració amb comptes separats |
| Accés de visites | Recepció i registre | Compte temporal sense privilegis |

Una contrasenya no compensa una sala accessible a qualsevol persona, i una porta tancada no impedeix un ús indegut des d’un compte amb permisos excessius.

## Defensa en profunditat

La defensa en profunditat consisteix a combinar capes perquè la fallada d’una mesura no deixe el sistema completament exposat. En una sala de comunicacions podríem tindre una porta amb targeta, un rack tancat, comptes personals d’administració, registre d’accessos i un SAI. Cada capa redueix una part del risc i té una funció diferent.

Aquesta idea també evita comprar una única solució com si fora suficient. Una càmera pot registrar una intrusió, però no impedeix que una persona manipule un equip si no hi ha control de porta. Un antivirus, que es treballarà en una altra unitat, tampoc evita un robatori físic.

## Tres preguntes per a cada mesura

| Pregunta | Exemple |
| --- | --- |
| Quin risc redueix? | La porta amb targeta redueix l’entrada no autoritzada. |
| Què passa si falla? | Cal una clau d’emergència i un registre manual. |
| Com es manté? | Cal revisar targetes, bateries i permisos. |

Una mesura mal mantinguda pot crear una falsa sensació de seguretat. Un sensor sense bateria o una ACL que ningú revisa només funcionen sobre el paper.

## Preventiva, detectora i correctora

Una mesura preventiva redueix la probabilitat; una detecta o avisa; una correctora limita les conseqüències o permet recuperar el servei. Per exemple, separar un rack d’una canonada és preventiu, un sensor d’aigua és detector i el procediment d’apagada i substitució és corrector.

Les etiquetes «activa» i «passiva» depenen del context. En aquesta UT considerarem passives les mesures que protegeixen l’entorn, eviten danys o mantenen la continuïtat, i deixarem per a unitats posteriors la resposta detallada a programari maliciós, tallafocs o incidents de xarxa.

## Prioritzar amb criteri

Amb pressupost limitat, ordena les mesures segons probabilitat, impacte, cost, dependències i facilitat de manteniment. Una millora barata que elimina una vulnerabilitat molt probable pot anar abans que una tecnologia sofisticada de cost alt.

!!! example "Exemple"
    Si una regleta està sobrecarregada i el rack està obert, pot ser més urgent reorganitzar la càrrega i tancar l’armari que comprar una càmera nova.

## Exemple de combinació de capes

Per protegir un NAS amb dades de clients:

1. Ubicar-lo en una sala restringida i en un rack tancat.
2. Utilitzar comptes personals amb permisos mínims.
3. Connectar-lo a un SAI si la disponibilitat és important.
4. Mantindre còpies i un inventari, que es desenvoluparan en unitats posteriors.
5. Revisar accessos i proves de funcionament.

!!! tip "Pregunta de control"
    Quines dues mesures físiques i dues lògiques combinaries per protegir un NAS amb dades de clients?

[Anterior: la informació com a actiu](01-informacio-actiu.md) · [Següent: ubicació i ambient](03-ubicacio-condicions.md)
