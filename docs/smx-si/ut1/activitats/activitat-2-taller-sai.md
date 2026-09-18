---
hide:
  - navigation
---
# Activitat 2. Taller de selecció i verificació d’un SAI

## Finalitat

Aprendreu a decidir quins equips necessiten continuïtat, estimar la càrrega i comprovar que una protecció elèctrica respon a l’objectiu.

Treballareu els criteris **RA1.e** i **RA1.f**.

## Organització i duració

- Parelles.
- **2 hores**: 30 minuts de teoria i fitxa, 45 de selecció, 30 de verificació i 15 de conclusions.

La pràctica es farà amb un SAI real preparat pel professorat o amb les fitxes tècniques proporcionades. No manipuleu bateries ni instal·lacions.

## Escenari

Una microempresa té aquests equips:

| Equip | Consum aproximat | Necessitat davant d’un microtall |
| --- | ---: | --- |
| Servidor | 180 W | Continuar o apagar de manera segura |
| NAS | 90 W | Continuar i evitar corrupció |
| Switch | 35 W | Mantindre connectivitat local |
| Router | 15 W | Mantindre connexió si és necessari |
| Monitor de gestió | 40 W | Només durant l’apagada |
| Impressora làser | 450 W de pic | No connectar a bateria |

El SAI disponible indica **900 VA / 540 W**, disposa de quatre preses amb bateria i dues amb protecció de sobretensió. El fabricant estima 10 minuts a mitja càrrega.

## Tasca 1. Identifiqueu el SAI

Amb el dispositiu o la fitxa, registreu:

- tipus: offline, line-interactive o online;
- potència en VA i W;
- preses amb bateria i preses només protegides;
- indicadors, alarmes i connexió de monitoratge;
- estat de bateria i data de revisió;
- limitacions del model.

## Tasca 2. Calculeu la càrrega

Completeu:

```text
càrrega prioritària = servidor + NAS + switch + router + monitor
marge recomanat = càrrega prioritària × 1,25
```

Indiqueu si el SAI suporta el resultat en watts i quina càrrega connectaríeu a cada tipus de presa. Expliqueu per què la impressora no és una bona càrrega per a la bateria.

## Tasca 3. Decidiu l’objectiu d’autonomia

Trieu una de les opcions i justifiqueu-la:

- 3 minuts per salvar treball i apagar;
- 10 minuts per mantindre un servei breu;
- més temps, amb un SAI o un sistema de continuïtat diferent.

No confongueu capacitat màxima amb autonomia: l’autonomia depén de la càrrega, de l’estat de la bateria i del model.

## Tasca 4. Verificació controlada

Si el professorat ho autoritza:

1. comproveu connexions i indicadors;
2. registreu l’estat inicial;
3. simuleu el tall amb el procediment indicat;
4. observeu alarma, continuïtat i temps disponible;
5. verifiqueu l’apagada segura o la recuperació;
6. registreu el resultat i una millora.

## Lliurament

Entregueu `fitxa-sai.md` amb la identificació, la taula de càrrega, un esquema de connexions, la decisió d’autonomia, el registre de prova i una conclusió de 100 paraules.

!!! warning "Si no hi ha equip real"
    Feu una verificació documental: indiqueu quina prova faríeu, què esperaries observar i quina dada faltaria per confirmar el funcionament.

[Activitat 1. Informe d’anàlisi de riscos](activitat-1-mapa-riscos.md) · [Activitat 3. Pla de la microempresa](activitat-3-pla-microempresa.md)
