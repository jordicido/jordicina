---
hide:
  - navigation
---
# Activitat 1. Mapa inicial de riscos

## Finalitat

Aprendreu a passar d’una observació superficial —«aquesta oficina no és segura»— a una anàlisi justificable d’actius, amenaces, vulnerabilitats i mesures.

Treballareu principalment els criteris **RA1.a** i **RA1.b**.

## Organització i duració

- Parelles.
- **1 hora i 30 minuts**: 20 minuts d’anàlisi, 45 de taula i 25 de priorització.

## Cas d’estudi

Observeu aquesta oficina fictícia:

![Oficina amb ordinadors, servidor, rack obert, cablejat desordenat, regleta sobrecarregada i una porta oberta](../../../assets/img/imatge-servidors.png)

*Imatge de l’escenari d’anàlisi. Identifiqueu els actius i les possibles vulnerabilitats visibles abans de consultar la descripció escrita.*

## Tasca 1. Identifiqueu els actius

Anoteu almenys huit actius. Incloeu maquinari, informació, instal·lacions i elements de suport. Per a cada actiu indiqueu si afecta sobretot la confidencialitat, la integritat, la disponibilitat o més d’una propietat.

## Tasca 2. Completeu la taula de riscos

| Actiu | Amenaça | Vulnerabilitat | Conseqüència | P (probabilitat) | I (impacte) | Mesura proposada |
| --- | --- | --- | --- | --- | --- | --- |
| Servidor | Aigua | Canonada damunt | Aturada i pèrdua | M | A | Reubicar i sensor |
|  |  |  |  |  |  |  |

### Com s’han d’interpretar les sigles?

- **P** significa **probabilitat**: estima fins a quin punt és possible que l’amenaça provoque una incidència.
- **I** significa **impacte**: estima la gravetat de les conseqüències si la incidència arriba a produir-se.
- **B** significa **baix**, **M** significa **mitjà** i **A** significa **alt**.

| Valoració | En la probabilitat (`P`) | En l’impacte (`I`) |
| --- | --- | --- |
| **B · Baixa** | És poc probable que passe o necessita una coincidència poc habitual. | Les conseqüències serien limitades i es podrien resoldre ràpidament. |
| **M · Mitjana** | Pot passar alguna vegada o depén d’una situació que es repeteix. | Podria interrompre una part del treball o requerir una intervenció tècnica. |
| **A · Alta** | És probable que passe, perquè la vulnerabilitat està present sovint o és fàcil d’aprofitar. | Podria causar una aturada important, pèrdua de dades, robatori o una despesa elevada. |

Per exemple, una **regleta sobrecarregada** pot tindre una probabilitat **alta** i un impacte **alt**. Una finestra que dona a un pati interior i està sempre tancada podria tindre una probabilitat de robatori **baixa**, però l’impacte continuaria sent **alt** si arribara a produir-se. La valoració no és matemàtica: expliqueu en una frase per què heu triat cada nivell.

## Tasca 3. Classifiqueu les mesures

Classifiqueu sis mesures com a físiques o lògiques i com a preventives, detectores o correctores. Una mesura pot tindre més d’una etiqueta, però cal justificar-la.

## Tasca 4. Prioritzeu

Seleccioneu les cinc primeres actuacions amb un pressupost limitat. Ordeneu-les i indiqueu si tenen cost baix, mitjà o alt. No trieu només les més tecnològiques: considereu urgència, eficàcia i manteniment.

## Lliurament

Entregueu `mapa-riscos.md` amb:

1. inventari d’actius;
2. taula de riscos amb almenys huit files;
3. classificació de mesures;
4. priorització raonada en 150–200 paraules.

!!! tip "Abans d’entregar"
    Reviseu que una amenaça no estiga escrita com una vulnerabilitat i que cada mesura responga a un risc concret.

[Activitat 2. Auditoria física](activitat-2-auditoria-fisica.md) · [Índex de la UT1](../index.md)
