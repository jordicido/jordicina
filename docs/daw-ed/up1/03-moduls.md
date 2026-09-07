---
hide:
  - navigation
---
# 3. Mòduls i extensions

## Per què afegim mòduls?

En VS Code parlem sobretot d’extensions; en IntelliJ IDEA parlem de plugins. Tots dos amplien les funcions de l’IDE: suport per a un llenguatge, formatació, depuració, control de versions o integració amb un servei. Cada component afegit té un cost: ocupa espai, pot demanar permisos, rep actualitzacions i pot entrar en conflicte amb un altre.

Abans d’instal·lar-lo, respon:

- Quin problema resol i és realment necessari?
- Qui el manté i quan es va actualitzar?
- Quina llicència té i quins permisos sol·licita?
- De quina versió de l’IDE o del llenguatge depén?
- Com el desactivarem o eliminarem si causa una incidència?

## Alta, configuració i baixa

La seqüència recomanada és instal·lar un component cada vegada, obrir de nou l’IDE si cal, verificar una funció concreta i registrar el resultat. Per eliminar-lo, desactiva’l primer, comprova si el projecte continua funcionant i després lleva’l. No borres manualment carpetes de l’IDE sense saber quin component les utilitza.

| Acció | Evidència |
| --- | --- |
| Afegir | Nom, editor, versió, data i funció comprovada. |
| Configurar | Opcions modificades i abast: usuari o projecte. |
| Desactivar | Prova que permet comparar el comportament amb i sense el mòdul. |
| Eliminar | Registre de baixa, reinici i prova de regressió. |

## Dependències i confiança

Una extensió o plugin pot instal·lar dependències pròpies o executar codi amb els permisos de l’usuari. En VS Code revisa l’editor, la versió i els permisos de l’extensió; en IntelliJ IDEA revisa el repositori i la compatibilitat amb la versió de l’IDE. Prioritza els catàlegs oficials i treballa amb un compte sense privilegis d’administració quan siga possible.

| IDE | Component que afegirem | Component que retirarem o desactivarem |
| --- | --- | --- |
| VS Code | Extension Pack for Java i extensió Python. | Una extensió de prova, després de comprovar-ne l’efecte. |
| IntelliJ IDEA | Un plugin no essencial del repositori de plugins. | El mateix plugin, primer desactivat i després eliminat. |

!!! example "Decisió raonada"
    Si una extensió de VS Code o un plugin d’IntelliJ IDEA només canvia els colors però demana permisos amplis, no l’afegiries sense revisar la necessitat i la procedència. La personalització no justifica qualsevol permís.

!!! tip "Pregunta de control"
    Com demostraries que una fallada apareguda després d’instal·lar una extensió de VS Code o un plugin d’IntelliJ IDEA està relacionada amb aquest component?

[Següent: personalització i automatització](04-personalitzacio-automatitzacio.md) · [Anterior: instal·lació](02-instal·lacio.md)
