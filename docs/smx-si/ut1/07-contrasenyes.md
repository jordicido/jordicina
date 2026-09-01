---
hide:
  - navigation
---
# 7. Política de contrasenyes

## Què ha de resoldre una política?

Una política no és només una llista de símbols obligatoris. Ha d’evitar credencials previsibles, reutilitzades, compartides o exposades i ha de descriure què fer quan hi ha una sospita de filtració.

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

## Autenticació multifactor

L’MFA combina factors de naturalesa diferent:

| Factor | Exemple |
| --- | --- |
| Coneixement | Contrasenya o PIN |
| Possessió | Clau física o aplicació autenticadora |
| Inherència | Empremta o rostre |

La biometria sola no converteix automàticament un accés en segur. També calen recuperació, revocació, registre i revisió.

## Responsabilitats

L’organització ha de definir els requisits, oferir eines i gestionar altes i baixes. La persona usuària ha de protegir el secret, informar d’incidències i no compartir-lo. El suport tècnic ha de poder recuperar l’accés sense conéixer la contrasenya actual.

!!! tip "Pregunta de control"
    Què és més greu: una contrasenya curta amb símbols o una contrasenya llarga reutilitzada en quatre serveis? Justifica la resposta.

[Anterior: controls d’accés](06-controls-acces.md) · [Següent: biometria](08-biometria.md)
