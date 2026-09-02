---
hide:
  - navigation
---
# Activitat 1. Mapa d'arquitectura

## Repte

Una cooperativa vol publicar una aplicació web amb una pàgina pública, un formulari de contacte i una zona privada per al personal. Necessita poder actualitzar l'aplicació sense exposar directament la base de dades.

Dibuixa una arquitectura inicial i explica el recorregut d'una petició HTTPS des del navegador fins a les dades.

## Tasques

1. Identifica els components: client, DNS, servidor web, aplicació, base de dades, logs i còpies.
2. Situa cada component en una frontera pública o privada.
3. Indica protocol, port i direcció de les comunicacions principals.
4. Assenyala dos punts de fallada i una mesura per reduir-ne l'impacte.
5. Explica per què has triat una arquitectura monolítica, de tres capes o basada en serveis.

## Lliurament

Un diagrama en SVG, PNG o Markdown i una explicació d'una pàgina. Inclou una llegenda i no uses dades reals.

## Criteris de revisió

- Components i responsabilitats identificats.
- Flux de la petició coherent amb DNS, HTTP/HTTPS i els ports.
- Separació raonada entre elements públics i privats.
- Riscos i decisions justificats amb llenguatge tècnic.

[Següent activitat: Desplegament mínim](activitat-2-desplegament-minim.md) · [Tornar a la UP1](../index.md)
