---
hide:
  - navigation
---
# 7. Política de contrasenyes

## Què ha de resoldre una política?

Una política no és només una llista de símbols obligatoris. Ha d’evitar credencials previsibles, reutilitzades, compartides o exposades i ha de descriure què fer quan hi ha una sospita de filtració.

## Com es pot atacar una contrasenya?

Sense entrar encara en tècniques de xarxa, és útil entendre els riscos bàsics:

- una paraula comuna o una dada pública és fàcil de predir;
- una contrasenya reutilitzada pot exposar diversos serveis si un d’ells pateix una filtració;
- una credencial escrita en un post-it o enviada per missatge queda exposada;
- un compte compartit impedeix saber qui ha fet una acció;
- una contrasenya per defecte pot ser coneguda abans de posar l’equip en servei.

Per això una política ha de combinar comportament de la persona usuària, configuració dels serveis i procediments de l’organització.

Bones pràctiques:

- utilitzar frases de pas llargues i úniques;
- no reutilitzar una credencial entre serveis;
- canviar les credencials per defecte;
- utilitzar un gestor aprovat quan siga possible;
- no enviar-les per correu ni deixar-les visibles;
- bloquejar o limitar intents repetits;
- canviar-les quan hi ha evidència d’exposició;
- disposar d’un procediment de recuperació verificat.

Les renovacions obligatòries massa freqüents poden generar patrons com afegir un número al final. És millor combinar longitud, unicitat, detecció de credencials compromeses i autenticació multifactor.

## Protecció de les credencials en els sistemes

Les contrasenyes no s’haurien d’emmagatzemar en text pla. Els sistemes han de guardar una representació protegida mitjançant funcions de resum i mecanismes adequats, de manera que el servei no necessite conéixer la contrasenya original. En aquesta unitat no cal implementar aquests mecanismes, però sí reconéixer que veure-les directament en una base de dades o en un fitxer de configuració és una mala pràctica.

Les còpies de configuració, els fitxers de recuperació i els gestors de contrasenyes també són actius que cal protegir amb permisos, xifratge i còpies controlades.

## Autenticació multifactor

L’MFA combina factors de naturalesa diferent:

| Factor | Exemple |
| --- | --- |
| Coneixement | Contrasenya o PIN |
| Possessió | Clau física o aplicació autenticadora |
| Inherència | Empremta o rostre |

La biometria sola no converteix automàticament un accés en segur. També calen recuperació, revocació, registre i revisió.

## Procediment quan una credencial es compromet

Si una persona sospita que la seua contrasenya s’ha exposat, ha de comunicar-ho pel canal establit, canviar-la des d’un dispositiu fiable, revisar les sessions actives i activar o recuperar el segon factor. L’organització ha de valorar si cal revocar tokens, bloquejar el compte, revisar registres o avisar altres responsables.

El procediment ha de ser fàcil de trobar i no ha de demanar a la persona que envie la contrasenya al suport tècnic.

## Responsabilitats

L’organització ha de definir els requisits, oferir eines i gestionar altes i baixes. La persona usuària ha de protegir el secret, informar d’incidències i no compartir-lo. El suport tècnic ha de poder recuperar l’accés sense conéixer la contrasenya actual.

!!! tip "Pregunta de control"
    Què és més greu: una contrasenya curta amb símbols o una contrasenya llarga reutilitzada en quatre serveis? Justifica la resposta.

[Anterior: controls d’accés](06-controls-acces.md) · [Següent: biometria](08-biometria.md)
