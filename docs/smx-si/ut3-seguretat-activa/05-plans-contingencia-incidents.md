---
hide:
  - navigation
---
# 5. Plans de contingència i resposta a incidents

**CA RA3.a:** S’han seguit plans de contingència per a actuar davant fallades de seguretat.

## Objectius

- Distingir esdeveniment, alerta i incident.
- Interpretar un pla amb rols, contactes i criteris d’escalat.
- Aplicar preparació, identificació, contenció, anàlisi, erradicació, recuperació i millora.
- Registrar decisions, preservar evidències i verificar el retorn al servei.

## El cas d’OfiCat

A les 10:15, un treballador informa que ha executat un instal·lador desconegut i que falten documents. El tècnic crea el ticket OFI-003, identifica l’equip, aïlla la VM autoritzada i comunica l’avís. La desaparició dels documents i el fitxer detectat són fets separats fins que l’anàlisi els relacione. No es formatarà ni es restaurarà sense conservar informació i seguir el pla.

Un **esdeveniment** és un fet observable, com un inici de sessió. Una **alerta** és un avís que requereix valoració. Un **incident** compromet o amenaça de comprometre confidencialitat, integritat, disponibilitat o polítiques. Una alerta no és sempre un incident confirmat.

El pla de contingència preveu fallades; el pla de resposta gestiona incidents de seguretat. El **BCP** manté funcions essencials i el **DRP** concreta recuperació de sistemes i dades. Es complementen.

### RTO i RPO

**RTO** és el temps objectiu màxim d’interrupció. **RPO** és la pèrdua de dades tolerable, expressada com a temps. Si l’incident ocorre a les 12:00, un RTO de quatre hores fixa l’objectiu de servei abans de les 16:00. Amb RPO de dues hores, una còpia de les 10:00 o posterior pot complir; una còpia de les 09:00 no.

```mermaid
timeline
    title Exemple de RPO i RTO (hores fictícies)
    09:00 : Còpia disponible, massa antiga per al RPO de 2 h
    10:00 : Punt de recuperació objectiu
    12:00 : Incident
    16:00 : Termini objectiu del RTO de 4 h
```

## Fases d’actuació

| Fase | Acció del tècnic de primer nivell | Resultat |
| --- | --- | --- |
| Preparació | Coneix el pla, còpies, contactes i eines. | Procediment disponible. |
| Identificació | Registra hora, equip, símptomes i abast inicial. | Incidència documentada. |
| Contenció | Aïlla segons instruccions i comunica. | Dany o propagació limitats. |
| Anàlisi | Preserva registres i contrasta hipòtesis. | Abast millor conegut. |
| Erradicació | Corregeix causa, elimina o reinstal·la, tracta credencials. | Amenaça tractada. |
| Recuperació | Restaura dades i servei fiables, comprova’ls. | Retorn segur i autoritzat. |
| Lliçons apreses | Tanca informe i millora controls. | Prevenció futura. |

Les fases poden solapar-se. Aïllar pot ser urgent; apagar o reiniciar sense valorar el cas pot perdre dades volàtils. No uses credencials sensibles en un equip sospitós ni connectes còpies sense valorar el risc.

## Pla simplificat d’OfiCat

**Actius:** estacions, servidor de fitxers, documents i comptes corporatius. **Rols:** el suport registra i executa accions autoritzades; TI decideix escalat i reconnexió; direcció i protecció de dades gestionen comunicacions quan pertoque. Els contactes són rols ficticis: usa el telèfon intern o el ticket des d’un equip fiable.

| Escenari | Primeres accions | Quan escalar |
| --- | --- | --- |
| Sospita de malware en una estació | Registrar, aïllar la VM/equip autoritzat i conservar alertes. | Execució confirmada, més equips o abast incert. |
| Documents inaccessibles i nota d’extorsió | Aïllar, no connectar còpies, preservar i notificar. | Sempre al responsable de TI. |
| Eliminació accidental | Aturar escriptures, revisar paperera i còpies; restaurar a un destí diferent. | Sense còpia, dany físic o dades crítiques. |
| Credencial compromesa | Comunicar i canviar/bloquejar des d’un equip fiable. | Compte privilegiat o accés no autoritzat. |

### Informe de consulta

| Camp | Què registrar |
| --- | --- |
| Identificació | ID, data, hora, tècnic i equip. |
| Avís inicial | Símptomes i persona que avisa. |
| Abast | Equips/serveis afectats i incerteses. |
| Evidències | Alertes i registres conservats; mai contrasenyes. |
| Accions | Hora, acció, motiu, responsable i resultat. |
| Recuperació | Origen de dades, proves i autorització. |
| Millores | Pedaços, procediments i formació. |

Per tancar l’incident cal autorització, dades i serveis comprovats, pedaços aplicats, alertes revisades i documentació. «L’antivirus està net» no és prou.

### Aplicació pas a pas del cas

En la fase d’identificació, el tècnic anota que el programa provenia d’un enllaç no verificat, l’hora d’execució, el nom de l’equip i el text exacte de l’avís. En la contenció, desconnecta la VM de la xarxa de laboratori o aplica el mecanisme autoritzat; no connecta el disc de còpies i evita continuar treballant amb els documents originals. En l’anàlisi, contrasta l’alerta amb registres, hashes i altres equips, i manté separades les observacions de les hipòtesis.

En la recuperació, el responsable tria una còpia anterior i fiable o una imatge de prova. Les dades es restauren en un destí segur, se’n revisen permisos i integritat i es comprova que l’aplicació necessària funciona. Només després de corregir la causa, canviar credencials potencialment afectades, aplicar pedaços i revisar alertes s’autoritza la reconnexió. La reunió de lliçons apreses pot descobrir que faltava inventari, que el personal no coneixia el canal oficial o que el RPO no era realista.

Aquesta seqüència mostra per què un pla és més que una llista de telèfons: assigna decisions, evita accions contradictòries i fa visible el que encara no sabem. Si hi ha dades personals potencialment afectades, s’escala al responsable corresponent; el tècnic no improvisa comunicacions externes ni publica detalls.

## Errors habituals i resum

No apagues ni formats per impuls, no elimines evidències, no restaures sobre un sistema compromés i no reconectes sense autorització. Un bon pla converteix una situació confusa en decisions traçables, amb responsables i criteris de verificació.

## Autoavaluació

1. Què fas primer davant d’una sospita de propagació?
2. Què indica el RPO?
3. Qui autoritza la reconnexió?
4. Per què no és prou redactar un pla?
5. Una alerta és sempre un incident confirmat?

??? note "Respostes"
    1. Seguir el pla: registrar, contindre i comunicar amb urgència.
    2. La pèrdua de dades tolerable expressada en temps.
    3. El responsable definit en el pla, no el tècnic per iniciativa pròpia.
    4. El CA demana saber aplicar-lo, registrar i verificar accions.
    5. No; necessita valoració i evidències.

## Fonts i ampliació

- [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final).
- [INCIBE-CERT](https://www.incibe.es/incibe-cert), avisos i guies.
- [CISA](https://www.cisa.gov/), recursos de resposta.

[Següent: recuperació de dades](06-recuperacio-dades.md) · [Portada de la UP3](../ut3-seguretat-activa.md)
