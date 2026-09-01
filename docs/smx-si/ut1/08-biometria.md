---
hide:
  - navigation
---
# 8. Sistemes biomètrics

## Què és la biometria?

La biometria identifica o verifica una persona a partir d’una característica física o de comportament. Els sistemes habituals utilitzen empremta dactilar, reconeixement facial, iris o veu. Durant l’alta es captura una mostra i el sistema crea una plantilla per comparar-la més endavant.

## Identificació i verificació

No és el mateix preguntar «qui és aquesta persona?» que «és realment Marta?». En una **identificació** es compara una mostra amb moltes plantilles per trobar una coincidència. En una **verificació** la persona declara una identitat i el sistema comprova si la mostra correspon a aquella identitat. La verificació sol encaixar millor amb l’accés a una sala o a un dispositiu concret.

El sistema no hauria de guardar una fotografia o una gravació completa si només necessita una plantilla protegida. La plantilla continua sent informació sensible i ha de tindre accés restringit, període de conservació justificat i procediment de baixa.

## Avantatges i limitacions

| Avantatge | Limitació o risc |
| --- | --- |
| No cal recordar una contrasenya | Una característica no es pot canviar fàcilment si s’exposa |
| Pot dificultar el préstec d’una targeta | Falsos positius i falsos negatius |
| Facilita un accés ràpid | Cost, manteniment i dependència del sensor |
| Pot reforçar un segon factor | Problemes de llum, soroll, guants o accessibilitat |

Un **fals positiu** accepta una persona no autoritzada; un **fals negatiu** rebutja una persona autoritzada. El llindar d’acceptació és una decisió de risc: una sala de comunicacions pot exigir més precisió que una porta d’un espai general.

Quan el llindar és molt permissiu, el sistema pot facilitar l’accés però augmentar els falsos positius. Quan és molt estricte, pot millorar la protecció però augmentar els falsos negatius i dificultar el treball. La decisió ha de considerar el risc, el context i les persones usuàries.

## Decidir amb criteri

Abans d’instal·lar biometria pregunta:

1. Quin risc redueix i per què no és suficient una targeta o una contrasenya?
2. Quines persones no podran utilitzar el sensor amb normalitat?
3. Què passa si el sensor falla o la persona perd l’accés?
4. Qui protegeix les plantilles i els registres?
5. Quin manteniment, cost i procediment de baixa necessita?

La biometria és especialment útil com a factor addicional per a una zona crítica, però no elimina la necessitat d’ACL, registres, procediments i una alternativa controlada.

## Procediment d’alta, ús i baixa

Una implantació responsable hauria de definir:

1. **Alta:** informar la persona, registrar-la amb autorització i comprovar que el sensor funciona.
2. **Ús:** limitar l’accés al propòsit previst i registrar els intents necessaris.
3. **Incidència:** oferir una alternativa segura si el sensor falla.
4. **Canvi de funció:** revisar si encara necessita accés.
5. **Baixa:** eliminar o desactivar la plantilla i retirar permisos associats.

La biometria no ha de convertir-se en l’única manera d’accedir a una zona crítica. Una targeta personal, una clau custodiada o una intervenció autoritzada poden formar part del procediment alternatiu.

!!! example "Decisió raonada"
    Per a una sala de comunicacions, una empresa podria usar targeta personal més PIN i reservar la biometria com a segon factor. Així pot revocar la targeta i el PIN i disposa d’una alternativa si el sensor falla.

!!! tip "Pregunta de control"
    Proposa un procediment alternatiu per a una persona autoritzada a qui el lector d’empremta rebutja repetidament.

[Anterior: política de contrasenyes](07-contrasenyes.md) · [Índex](index.md)
