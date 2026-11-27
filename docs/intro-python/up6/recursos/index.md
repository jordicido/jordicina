---
hide:
  - navigation
---
# Recursos de dades

Els tres fitxers següents representen el mateix inventari fictici d’una aula:

- [Descarregar inventari.csv](inventari.csv)
- [Descarregar inventari.json](inventari.json)
- [Descarregar inventari.xml](inventari.xml)

## Coherència de les dades

Tots els formats contenen cinc equips amb els camps nom, ram, so i estat. La RAM està expressada en GB. El CSV guarda els números com a text perquè aquest és el comportament habitual del format; en Python cal convertir-los a int.

| Resum | Valor |
| --- | --- |
| Equips | 5 |
| RAM total | 80 GB |
| RAM mínima | 8 GB |
| RAM màxima | 32 GB |
| Equips operatius | 4 |
| Sistemes | Ubuntu, Windows i Debian |

Utilitza aquests fitxers com a dades locals de pràctica. No necessiten Internet ni cap dependència externa.

## Comprovar els formats

1. Obri el CSV i identifica la capçalera i les files.
2. Llig el JSON i comprova que és una llista d’objectes.
3. Llig l’XML i identifica l’arrel inventari i els elements equip.
4. Comprova que els cinc noms i els valors de RAM coincideixen.

[Índex de la UP6](../index.md) · [Teoria: tractament de documents](../03-documents.md)
