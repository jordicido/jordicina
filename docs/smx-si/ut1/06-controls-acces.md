---
hide:
  - navigation
---
# 6. Controls d’accés i llistes de control

## Identificar, autenticar i autoritzar

La identificació declara una identitat (`marta`); l’autenticació comprova que és la persona corresponent; l’autorització decideix què pot fer. Confondre aquests passos porta a polítiques incompletes: saber qui és algú no implica donar-li accés a tot.

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

| Subjecte | Recurs | Acció | Condició | Resultat |
| --- | --- | --- | --- | --- |
| `tecnics` | Sala de comunicacions | Entrar | Horari laboral o incidència | Permés i registrat |
| `externs` | Sala de comunicacions | Entrar | Cita + acompanyament | Temporal |
| `recepcio` | Carpeta nòmines | Llegir | Qualsevol horari | Denegat |

La gestió del cicle de vida és part de la seguretat: alta amb autorització, canvi de rol amb revisió, baixa immediata i revisió periòdica dels permisos.

!!! tip "Pregunta de control"
    Quin problema apareix si una persona canvia de recepció a administració però conserva el grup anterior?

[Anterior: electricitat i SAI](05-electricitat-sai.md) · [Següent: contrasenyes](07-contrasenyes.md)
