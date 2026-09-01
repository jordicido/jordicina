---
hide:
  - navigation
---
# 6. Controls d’accés i llistes de control

## Identificar, autenticar i autoritzar

La identificació declara una identitat (`marta`); l’autenticació comprova que és la persona corresponent; l’autorització decideix què pot fer. Confondre aquests passos porta a polítiques incompletes: saber qui és algú no implica donar-li accés a tot.

### Exemple pas a pas

Quan Marta entra a la sala de comunicacions amb una targeta:

1. El sistema rep la identitat associada a la targeta (**identificació**).
2. Comprova la targeta i, si cal, un segon factor (**autenticació**).
3. Consulta si el seu grup pot entrar en aquell horari (**autorització**).
4. Obri la porta i registra l’accés si la regla ho permet.

La mateixa seqüència es pot aplicar a una carpeta, un ordinador o un panell d’administració.

## Principi de mínim privilegi

Cada perfil ha de rebre només els permisos necessaris per fer la seua funció. El principi de necessitat de conéixer afegeix que no tota persona que treballa en una empresa necessita veure tota la informació.

| Perfil | Zona | Recurs | Operacions |
| --- | --- | --- | --- |
| Recepció | Recepció | Agenda de visites | Consultar i registrar |
| Administració | Oficina | Facturació | Llegir i modificar |
| Tècnic | Sala de comunicacions | Servidors | Administrar, amb registre |
| Visita | Zones autoritzades | Wi-Fi convidada | Navegar, sense xarxa interna |

## Com redactar una ACL

Una ACL ha d’indicar subjecte o grup, recurs, acció, condicions i resultat. També convé definir una regla per defecte, la prioritat en cas de conflicte, el registre d’accessos i la revisió periòdica.

Una pràctica clara és començar per **denegar per defecte** i afegir només les excepcions necessàries. Això no significa bloquejar el treball sense criteri: significa que cada permís nou té una raó, un responsable i una revisió.

| Subjecte | Recurs | Acció | Condició | Resultat |
| --- | --- | --- | --- | --- |
| `tecnics` | Sala de comunicacions | Entrar | Horari laboral o incidència | Permés i registrat |
| `externs` | Sala de comunicacions | Entrar | Cita + acompanyament | Temporal |
| `recepcio` | Carpeta nòmines | Llegir | Qualsevol horari | Denegat |

La gestió del cicle de vida és part de la seguretat: alta amb autorització, canvi de rol amb revisió, baixa immediata i revisió periòdica dels permisos.

## ACL física i ACL lògica

El mateix model serveix per a dos tipus de recursos:

| Tipus | Recurs | Acció que es controla |
| --- | --- | --- |
| Física | Sala de comunicacions | Entrar o eixir |
| Física | Armari de portàtils | Retirar o retornar un equip |
| Lògica | Carpeta de clients | Llegir o modificar fitxers |
| Lògica | Consola del servidor | Administrar o consultar |

En tots dos casos cal evitar comptes compartits. Si diverses persones utilitzen la mateixa identitat, el registre no permet atribuir una acció i la baixa d’una sola persona es complica.

## Revisió d’una ACL

Per revisar-la, pregunta per a cada regla: continua existint el perfil?, el recurs és necessari?, el permís és massa ampli?, hi ha una data de caducitat?, es registren els accessos?, què passa si la persona canvia de lloc? El resultat ha de ser una ACL més xicoteta i comprensible, no una acumulació de permisos històrics.

!!! tip "Pregunta de control"
    Quin problema apareix si una persona canvia de recepció a administració però conserva el grup anterior?

[Anterior: electricitat i SAI](05-electricitat-sai.md) · [Següent: contrasenyes](07-contrasenyes.md)
