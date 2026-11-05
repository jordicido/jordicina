---
hide:
  - navigation
---
# Activitat 1. Del requisit al pla de proves

## Finalitat

Transformar requisits ambigus en casos de prova concrets, prioritzar valors límit i deixar una traçabilitat que permeta saber què cobreix cada cas.

## Criteris d’avaluació treballats

**RA3.a–b:** identificar els tipus de proves adequats i dissenyar casos a partir de requisits, classes d’equivalència i valors límit.

## Situació

El centre vol validar inscripcions a activitats. Una inscripció és vàlida quan el nom no està buit, l’edat és un enter entre 14 i 120 anys i queden places disponibles. El requisit encara no explica tots els casos ni l’ordre de les comprovacions. Has de convertir-lo en un pla que una altra persona puga executar sense preguntar-te què volies dir.

## Recursos inicials

Descarrega la [plantilla del pla de proves](recursos/plantilla-pla-proves.md). No cal cap projecte de programació.

## Tasques

1. Reescriu el requisit en frases verificables i separa validació de dades i disponibilitat de places.
2. Defineix les classes d’equivalència del nom, l’edat i les places.
3. Tria casos de valors límit per a 14, 120 i el nombre de places. Inclou almenys un cas negatiu i un cas amb dades absents.
4. Ompli la plantilla amb ID, precondicions, dades, passos, resultat esperat i traçabilitat a un requisit.
5. Classifica cada cas com a funcional o no funcional, caixa negra o caixa blanca i manual o automatitzable. Justifica les classificacions.
6. Revisa el pla amb una altra persona i registra una millora que hages incorporat.

## Lliurament i evidències

- `pla-proves.md` emplenat i amb una taula de traçabilitat.
- Una breu justificació de per què has triat cada valor límit.
- Una revisió final amb una incidència o amb la raó per la qual no n’has oberta cap.

No inventes resultats d’execució: en aquesta activitat es lliura el disseny del cas, no una falsa evidència d’haver executat un programa.

## Checklist

- [ ] Cada cas té un resultat esperat observable.
- [ ] Els casos cobreixen els límits inclosos i els valors immediatament exteriors.
- [ ] Les precondicions no es confonen amb les dades d’entrada.
- [ ] Cada cas apunta a un requisit.
- [ ] El document no conté dades personals reals.

[Següent: depuració](activitat-2-depuracio.md) · [Índex de la UP4](../../up4-proves.md)
