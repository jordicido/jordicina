---
hide:
  - navigation
---
# 5. Electricitat i sistemes d’alimentació ininterrompuda

## Incidències de la xarxa elèctrica

Un tall deixa els equips sense energia; un microtall pot reiniciar-los; una baixada o una pujada de tensió pot provocar comportaments incorrectes o avaries; el soroll elèctric pot interferir en la qualitat de l’alimentació. La resposta depén de la càrrega, del temps que cal mantindre-la i de la capacitat de l’edifici.

Una regleta amb protecció de sobretensió pot protegir davant d’algunes pujades, però no manté el servei. Un SAI aporta energia temporal, filtra o regula segons el model i permet apagar de manera segura.

## Què volem protegir?

Abans de triar un SAI, defineix l’objectiu:

- evitar que un microtall reinicie un servidor;
- mantindre xarxa i serveis durant uns minuts;
- donar temps a guardar el treball i apagar correctament;
- millorar la qualitat de l’alimentació d’una càrrega especialment sensible.

L’objectiu determina el tipus de SAI, la potència, l’autonomia i si cal monitoratge. Un SAI domèstic pot ser suficient per a un ordinador, però no necessàriament per a un rack complet.

## Tipus de SAI

| Tipus | Com funciona | Avantatge | Limitació |
| --- | --- | --- | --- |
| Offline | Canvia a bateria quan detecta el problema | Simple i econòmic | Pot tindre temps de transferència |
| Line-interactive | Regula part de les variacions | Bona opció d’oficina | Més cost i autonomia limitada |
| Online | Alimenta la càrrega des d’una conversió contínua | Protecció més estable | Cost, consum i manteniment superiors |

## Selecció i càrrega

La fitxa del SAI sol indicar potència en VA i, de vegades, en W. Suma el consum aproximat dels equips prioritaris, deixa marge i comprova l’autonomia. Connecta el servidor, el NAS i els dispositius de xarxa si són necessaris per mantindre el servei; no connectes automàticament impressores làser, calefactors o carregadors massius a les preses amb bateria.

No convertisques VA a W amb una regla universal. La relació depén del model i del factor de potència que indique el fabricant; per seleccionar-lo, comprova sempre els dos límits de la fitxa.

### Exemple de dimensionament

Si connectem un servidor de 180 W, un NAS de 90 W, un switch de 35 W, un router de 15 W i un monitor de 40 W, la càrrega estimada és de **360 W**. Amb un marge del 25 %, l’objectiu de selecció seria aproximadament **450 W**. Un SAI amb límit de 540 W podria ser adequat des del punt de vista de la potència, però encara caldria confirmar l’autonomia, les preses disponibles, el tipus de càrrega i les indicacions del fabricant.

```text
càrrega protegida = servidor + NAS + xarxa + monitor necessari
SAI recomanat = càrrega amb marge + autonomia suficient per a l’objectiu
```

## Verificar-lo

1. Identifica les preses amb bateria i les de només protecció.
2. Consulta la càrrega màxima i l’estat de la bateria.
3. Comprova que els cables i la ventilació són correctes.
4. Programa una prova autoritzada i no interrompes un servei crític sense pla.
5. Verifica l’avís, l’autonomia i l’apagada segura.
6. Registra el resultat i la data de substitució de la bateria.

## Manteniment i límits

La bateria és un component consumible. Cal registrar la data d’instal·lació, observar alarmes, mantindre lliures les reixetes i substituir-la segons l’estat i les indicacions del fabricant. Un SAI no resol un incendi, una inundació ni una avaria del servidor, i tampoc substitueix les còpies de seguretat.

Quan l’autonomia s’esgota, l’objectiu és que els sistemes s’apaguen de manera ordenada. Mantindre’ls encesos fins a esgotar completament la bateria pot ser pitjor que iniciar un tancament controlat.

!!! warning "Seguretat"
    No obris la bateria ni manipules la instal·lació elèctrica. La pràctica es fa amb un SAI preparat pel professorat o amb documentació tècnica.

[Anterior: protecció física](04-proteccio-fisica.md) · [Següent: controls d’accés](06-controls-acces.md)
