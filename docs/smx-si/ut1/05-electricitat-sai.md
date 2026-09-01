---
hide:
  - navigation
---
# 5. Electricitat i sistemes d’alimentació ininterrompuda

## Incidències de la xarxa elèctrica

Un tall deixa els equips sense energia; un microtall pot reiniciar-los; una baixada o una pujada de tensió pot provocar comportaments incorrectes o avaries; el soroll elèctric pot interferir en la qualitat de l’alimentació. La resposta depén de la càrrega, del temps que cal mantindre-la i de la capacitat de l’edifici.

Una regleta amb protecció de sobretensió pot protegir davant d’algunes pujades, però no manté el servei. Un SAI aporta energia temporal, filtra o regula segons el model i permet apagar de manera segura.

## Tipus de SAI

| Tipus | Com funciona | Avantatge | Limitació |
| --- | --- | --- | --- |
| Offline | Canvia a bateria quan detecta el problema | Simple i econòmic | Pot tindre temps de transferència |
| Line-interactive | Regula part de les variacions | Bona opció d’oficina | Més cost i autonomia limitada |
| Online | Alimenta la càrrega des d’una conversió contínua | Protecció més estable | Cost, consum i manteniment superiors |

## Selecció i càrrega

La fitxa del SAI sol indicar potència en VA i, de vegades, en W. Suma el consum aproximat dels equips prioritaris, deixa marge i comprova l’autonomia. Connecta el servidor, el NAS i els dispositius de xarxa si són necessaris per mantindre el servei; no connectes automàticament impressores làser, calefactors o carregadors massius a les preses amb bateria.

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

!!! warning "Seguretat"
    No obris la bateria ni manipules la instal·lació elèctrica. La pràctica es fa amb un SAI preparat pel professorat o amb documentació tècnica.

[Anterior: protecció física](04-proteccio-fisica.md) · [Següent: controls d’accés](06-controls-acces.md)
