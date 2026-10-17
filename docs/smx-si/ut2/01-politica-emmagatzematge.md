---
hide:
  - navigation
---
# 1. Política d’emmagatzematge

## Què és?

Una **política d’emmagatzematge** és el conjunt de normes i procediments que indiquen com es gestiona la informació durant tot el seu cicle de vida. No es limita a dir on es guarden els fitxers: també defineix qui hi accedeix, quant de temps es conserven, com es copien, com es comproven i com s’eliminen.

Ha de respondre, com a mínim, aquestes preguntes:

- Quines dades s’han de conservar?
- Quin nivell de confidencialitat, integritat i disponibilitat necessiten?
- Quin és l’emmagatzematge principal?
- Qui pot accedir-hi i amb quins permisos?
- Amb quina freqüència es fan còpies?
- On es guarden les còpies i qui les verifica?
- Quant de temps es conserven?
- Com es recuperen i com s’eliminen de manera segura?

### Exemple interpretat

> Els documents de treball s’han d’emmagatzemar al servidor corporatiu. Cada nit es farà una còpia incremental i cada divendres una còpia completa. Les còpies setmanals es conservaran durant dos mesos, una còpia mensual durant un any i una còpia addicional fora de les instal·lacions.

| Element | Decisió |
| --- | --- |
| Ubicació principal | Servidor corporatiu |
| Còpia diària | Incremental |
| Còpia setmanal | Completa |
| Retenció setmanal | Dos mesos |
| Retenció mensual | Un any |
| Còpia externa | Sí |

Interpretar aquest document implica convertir frases generals en requisits que es puguen comprovar.

## Cicle de vida de la informació

```mermaid
flowchart LR
    A[Creació] --> B[Ús]
    B --> C[Emmagatzematge]
    C --> D[Còpia de seguretat]
    D --> E[Arxiu]
    E --> F[Eliminació segura]
```

| Fase | Decisió tècnica |
| --- | --- |
| Creació | Classificar la informació i assignar-ne el responsable. |
| Ús | Aplicar permisos i registrar accessos quan siga necessari. |
| Emmagatzematge | Triar suport, capacitat, rendiment i disponibilitat. |
| Còpia | Definir estratègia, freqüència, destinació i verificació. |
| Arxiu | Separar les dades d’ús habitual de les dades de conservació. |
| Eliminació | Esborrar o destruir el suport de manera segura i documentada. |

## De la necessitat al requisit

Abans de triar un dispositiu, cal descriure la necessitat. Una fitxa útil pot incloure:

| Pregunta | Exemple |
| --- | --- |
| Quines dades? | Projectes de vídeo, factures o màquines virtuals |
| Quant ocupen? | 6 TB actuals i 1 TB de creixement anual |
| Quants usuaris? | 12 usuaris simultanis |
| Quina velocitat? | Moltes lectures i escriptures grans |
| Quina pèrdua és acceptable? | Màxim una hora de dades |
| Quant pot durar una aturada? | Menys de quatre hores |
| Quines obligacions hi ha? | Retenció de factures durant el període establit |

La solució tècnica ha de ser conseqüència d’aquests requisits, no del nom d’una tecnologia que estiga de moda.

## Responsabilitats i controls

Una política és aplicable quan assigna responsabilitats:

- una persona responsable de les dades;
- una persona o equip que administra l’emmagatzematge;
- un procediment per revisar errors de còpia;
- una calendarització de proves de restauració;
- un registre d’incidències i canvis;
- una revisió periòdica de capacitat, permisos i retenció.

!!! warning "Una còpia no provada és una hipòtesi"
    La tasca no acaba quan apareix un fitxer de backup. Cal comprovar que la còpia correspon a les dades esperades i que es pot restaurar en un temps acceptable.

## Activitat de control

Llig aquesta política i completa la taula:

> Les dades del departament d’administració es guardaran en un NAS amb RAID 1. Cada nit es farà una còpia incremental a un servidor de còpies. Cada diumenge es farà una còpia completa i cada mes se’n conservarà una en un disc xifrat fora de l’oficina. Les còpies es provaran trimestralment.

| Element | Resposta |
| --- | --- |
| Emmagatzematge principal | |
| Redundància | |
| Còpia diària | |
| Còpia setmanal | |
| Còpia externa | |
| Protecció del suport extern | |
| Freqüència de la prova | |

[Següent: factors i mètodes](02-factors-metodes.md) · [Pàgina principal de la UP2](../ut2-emmagatzematge.md)
