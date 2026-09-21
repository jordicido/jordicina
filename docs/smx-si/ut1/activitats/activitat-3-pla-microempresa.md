---
hide:
  - navigation
---
# Activitat 3. Pla bàsic de seguretat passiva d’una microempresa

## Finalitat

Integrareu les evidències de la unitat en una proposta professional coherent i la defensareu davant del grup.

Treballareu principalment els criteris **RA1.g**, **RA1.h** i **RA1.i**, i reutilitzareu RA1.a–f.

## Organització i duració

- Equips de tres o quatre.
- **4 hores**: 60 minuts d’anàlisi, 90 de proposta, 45 de revisió i 45 de presentacions i qüestionari individual.

## Situació professional

Una empresa de dotze persones disposa de deu ordinadors, dos portàtils, un servidor, un NAS, un switch, un router, una impressora, una sala de comunicacions, una recepció i un magatzem. L’edifici és una planta baixa amb finestres accessibles des del carrer, pateix microtalls i rep personal extern de manteniment.

## Encàrrec

Elaboreu un document titulat **Pla bàsic de seguretat passiva** que responga a aquestes qüestions:

1. Quins actius cal protegir i quines propietats són prioritàries?
2. Quins riscos físics i ambientals hi ha?
3. On ubicaríeu el servidor, el NAS i la xarxa? Per què?
4. Quines proteccions físiques implantaríeu?
5. Quins equips connectaríeu al SAI i amb quin marge?
6. Quin tipus de SAI i quina potència aproximada seleccionaríeu?
7. Com controlaríeu l’accés de gerència, administració, tècnics, recepció, externs i visites?
8. Quina política de contrasenyes aplicaria l’empresa?
9. La biometria aporta valor? En quina zona, amb quines garanties i amb quina alternativa?
10. Quines actuacions faríeu primer amb un pressupost limitat?

## Matriu de control d’accés

Completeu-la amb zones, equips i dades. Useu `P` per permés, `D` per denegat i `T` per accés temporal o condicionat.

| Perfil | Recepció | Oficines | Sala comunicacions | Servidor/NAS | Dades de clients | Condicions |
| --- | --- | --- | --- | --- | --- | --- |
| Gerència |  |  |  |  |  |  |
| Administració |  |  |  |  |  |  |
| Tècnic |  |  |  |  |  |  |
| Recepció |  |  |  |  |  |  |
| Personal extern |  |  |  |  |  |  |
| Visites |  |  |  |  |  |  |

Afegiu el procediment d’alta, canvi de rol, baixa, registre d’accés i revisió periòdica.

## Estructura obligatòria del lliurament

1. Descripció de l’entorn i hipòtesis.
2. Actius i propietats a protegir.
3. Matriu de riscos prioritzada.
4. Ubicació i condicions ambientals.
5. Protecció física i inventari.
6. Protecció elèctrica i selecció del SAI.
7. Política d’accés basada en ACL.
8. Política de contrasenyes i MFA.
9. Valoració de la biometria.
10. Pressupost qualitatiu, responsables i ordre d’implantació.

Extensió orientativa: **4 o 5 pàgines**, més annexos. No cal inventar preus exactes: useu cost baix, mitjà o alt i expliqueu què caldria confirmar.

## Presentació i defensa

Cada equip disposarà de cinc minuts. Ha d’explicar un risc prioritari, una decisió sobre el SAI, una regla de l’ACL i la conclusió sobre biometria. La resta del grup farà una pregunta sobre cost, manteniment o limitacions.

El qüestionari individual comprovarà que cada persona entén el pla i no només ha redactat una part del document.

!!! tip "Abans d’entregar"
    Comproveu que les mesures formen una cadena: risc → protecció → responsable → verificació. Una ACL sense rols o un SAI sense càrrega calculada no és una proposta completa.

[Activitat 2. Selecció i pressupost d’un SAI](activitat-2-taller-sai.md) · [Autoavaluació](autoavaluacio.md) · [Índex de la UP1](../index.md)
