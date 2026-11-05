---
hide:
  - navigation
---
# Activitat 4. Dobles de prova i gestió d’incidències

## Finalitat

Aïllar una unitat de la dependència externa mitjançant una interfície i un doble en memòria, i comunicar una incidència amb prou precisió perquè una altra persona la puga reproduir i verificar.

## Criteris d’avaluació treballats

**RA3.h–i:** documentar incidències i aplicar dobles de prova per aïllar components i comprovar resultat i interacció.

## Situació

`ServeiAvisos` ha d’enviar un missatge només quan el destinatari i el text són vàlids. En producció hi ha un enviador extern, però en una prova unitària no volem xarxa ni credencials. Implementaràs un doble en memòria que registre els enviaments i redactaràs una incidència a partir d’un defecte intencionat del projecte.

## Recursos inicials

Descarrega el [projecte Maven de dobles](recursos/activitat-4-dobles/pom.xml) i els fitxers Java de `src/main`; la [plantilla d’incidència](recursos/plantilla-incidencia.md) completa els recursos. El projecte no conté una solució completa dels tests.

## Tasques

1. Identifica la frontera externa i explica per què no és apropiat cridar-la en una prova unitària.
2. Completa o revisa el doble en memòria perquè puga registrar el destinatari i el missatge sense enviar res.
3. Escriu tests per al camí vàlid i per a destinatari o missatge buit. Comprova tant el retorn com el nombre d’enviaments.
4. Provoca o observa el defecte inicial indicat en el README i redacta una incidència amb versió, entorn, passos, esperat, observat, gravetat, prioritat i estat.
5. Fes la correcció mínima, repeteix el cas original i converteix-lo en una prova de regressió.
6. Explica quin tipus de doble has utilitzat i quin risc quedaria pendent d’una prova d’integració.

## Lliurament i evidències

- Projecte Maven amb interfície, doble i tests.
- Report de `mvn test` en estat verd.
- Una incidència reproduïble sense secrets ni dades reals.
- Reflexió breu sobre falsos positius, acoblament excessiu i diferències amb la dependència real.

## Checklist

- [ ] El test no necessita xarxa.
- [ ] La unitat rep la dependència per injecció.
- [ ] Una dada invàlida no genera un enviament.
- [ ] L’informe separa gravetat i prioritat.
- [ ] La correcció està protegida per una prova.

[Anterior: JUnit](activitat-3-junit-automatitzacio.md) · [Índex](../../up4-proves.md)
