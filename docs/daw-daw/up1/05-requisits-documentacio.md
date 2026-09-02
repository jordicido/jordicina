---
hide:
  - navigation
---
# 5. Requisits i documentació

## Què necessita el desplegament?

Abans de triar una tecnologia, converteix el cas en requisits observables:

| Tipus | Exemple de requisit |
| --- | --- |
| Funcional | L'usuari pot consultar el catàleg i enviar un formulari. |
| Tècnic | L'aplicació necessita un runtime concret i una base de dades. |
| Seguretat | Les credencials no viatgen en clar i la base de dades no és pública. |
| Operació | El servei deixa logs i es pot reiniciar sense perdre dades. |
| Qualitat | La resposta principal arriba en menys d'un temps acordat. |
| Documentació | Una altra persona pot reproduir la instal·lació i comprovar-la. |

## Documentar per reproduir

Una documentació útil inclou context, diagrama, versions, prerequisits, passos d'instal·lació, configuració, proves, incidències i recuperació. Diferencia sempre els valors d'exemple dels secrets reals.

## Criteri de finalització

El desplegament està acabat quan:

1. el servei arrenca amb la configuració descrita;
2. el client pot accedir al recurs esperat;
3. les dependències i ports estan identificats;
4. els logs permeten investigar un error;
5. la documentació explica com repetir i desfer el canvi;
6. no s'han exposat credencials ni dades personals.

!!! tip "Pregunta de control"
    Quina diferència hi ha entre afirmar «funciona» i aportar una evidència que demostra que funciona?

[Anterior: Virtualització i contenidors](04-virtualitzacio-contenidors.md) · [Tornar a l'índex](index.md)
