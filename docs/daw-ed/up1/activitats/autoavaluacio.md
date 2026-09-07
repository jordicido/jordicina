---
hide:
  - navigation
---
# Autoavaluació de la UP1

Respon sense consultar els apunts. Després revisa la solució orientativa i anota què has de repassar.

## Preguntes

1. Quina diferència hi ha entre un editor de text, un IDE i un SDK?
2. Un programa gratuït és necessàriament de codi obert? Justifica la resposta.
3. Quines dades documentes abans d’instal·lar un IDE?
4. Quins riscos pot introduir una extensió i com els reduiries?
5. Quina diferència hi ha entre desactivar i eliminar un mòdul?
6. Escriu una tasca automatitzada amb entrada, acció, eixida i prova.
7. Per què una actualització pot corregir un problema i provocar-ne un altre?
8. Quina diferència hi ha entre un `.jar`, un `.pyz` i un binari natiu?
9. Què has de mantindre igual quan construeixes el mateix codi en dos IDE?
10. Escriu tres característiques comunes i tres d’específiques de dos IDE.

## Solució orientativa

1. L’editor escriu text; l’IDE integra edició, construcció, depuració i projectes; el SDK aporta les eines i biblioteques del llenguatge.
2. No. «Gratuït» descriu el preu d’un ús concret; la llicència de codi obert descriu drets d’estudi, modificació o redistribució segons les seues condicions.
3. Sistema i arquitectura, versió, edició, llicència, espai, memòria, SDK/intèrpret, font de descàrrega i extensions necessàries.
4. Pot tindre vulnerabilitats, permisos excessius, dependències incompatibles o deixar de mantindre’s. Cal revisar l’origen, la llicència, els permisos i provar-la abans de compartir-la.
5. Desactivar permet comprovar el comportament sense el mòdul i reactivar-lo fàcilment; eliminar-lo lleva el component i pot requerir reinstal·lar-lo.
6. Una resposta vàlida neteja una carpeta de sortida controlada, construeix, executa una prova, guarda el log i comprova el codi de retorn.
7. Pot canviar APIs, dependències, extensions o configuracions encara que també corregisca errors i vulnerabilitats.
8. Són formats diferents: el JAR conté bytecode Java, el `.pyz` és un arxiu Python executable amb un intèrpret i el binari natiu depén del sistema i arquitectura objectiu.
9. El codi font, les entrades, la versió del llenguatge quan siga rellevant, les dependències, la prova i el resultat esperat.
10. Per exemple, editor, terminal i construcció; com a específiques, un depurador, un catàleg de mòduls o una integració concreta amb un SDK.

## Repte final

En deu línies, compara VS Code i IntelliJ IDEA per a un equip que necessita Java, Python en VS Code, construcció Maven i actualitzacions controlades. Justifica quin IDE utilitzaries per a cada tasca amb dos avantatges, una limitació i una mesura de recuperació.

[Tornar a l’índex de la UP1](../index.md) · [Començar la teoria](../01-entorn.md)
