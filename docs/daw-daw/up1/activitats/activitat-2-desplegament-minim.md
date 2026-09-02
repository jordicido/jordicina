---
hide:
  - navigation
---
# Activitat 2. Desplegament mínim

## Repte

Posa en marxa un servidor web local i publica una pàgina que identifique el teu entorn de pràctiques. El servei ha de ser accessible des del navegador i verificable des del terminal.

## Procediment orientatiu

1. Tria una màquina virtual o un contenidor autoritzat.
2. Anota el sistema, la versió de l'eina i el port utilitzat.
3. Crea un recurs estàtic de prova sense dades personals.
4. Inicia el servei i comprova l'estat del procés.
5. Verifica la resposta amb el navegador i amb `curl -I`.
6. Consulta els logs i registra una prova correcta i una incidència provocada de manera segura, com ara demanar una ruta inexistent.
7. Atura i torna a iniciar el servei seguint la documentació.

## Evidències

- Fitxer de configuració o definició del contenidor.
- Captura o text de la resposta HTTP.
- Ordres executades i versions.
- Fragment de log de la petició i de l'error controlat.
- Explicació de com repetir el desplegament.

!!! warning "Límit de l'activitat"
    No obris ports del router ni publiques el servei en Internet. El laboratori és local i ha d'utilitzar dades fictícies.

## Criteris de revisió

- El servei arrenca i respon el recurs esperat.
- Les proves són reproduïbles i separen estat, resposta i logs.
- La incidència està descrita i interpretada.
- La documentació no conté secrets.

[Anterior: Mapa d'arquitectura](activitat-1-mapa-arquitectura.md) · [Següent activitat: Fitxa de requisits](activitat-3-fitxa-requisits.md) · [Tornar a la UP1](../index.md)
