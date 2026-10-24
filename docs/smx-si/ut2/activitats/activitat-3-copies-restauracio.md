---
hide:
  - navigation
---
# Activitat 3. Còpies de seguretat i restauració

## Situació

El RAID implantat en l'activitat anterior protegeix l'empresa davant l'avaria física d'un disc.

Però apareix un nou problema.

Un usuari elimina accidentalment informació important.

Els dos discos del RAID funcionen correctament i, precisament perquè estan sincronitzats, **l'eliminació també afecta les dades redundants**.

L'empresa necessita una estratègia de còpies de seguretat.

## Objectius

En acabar l'activitat hauràs de ser capaç de:

- seleccionar una estratègia de còpia de seguretat;
- utilitzar un dispositiu diferent per emmagatzemar les còpies;
- realitzar còpies completes;
- realitzar còpies incrementals;
- restaurar informació després d'una pèrdua;
- comprovar la integritat de les dades recuperades;
- diferenciar disponibilitat i recuperació.

### Criteris treballats

Principalment:

- **CA 2.e:** seleccionar estratègies per a la realització de còpies de seguretat.
- **CA 2.f:** tindre en compte la freqüència i l'esquema de rotació.
- **CA 2.g:** realitzar còpies de seguretat amb diferents estratègies.
- **CA 2.h:** identificar característiques dels mitjans d'emmagatzematge remots i extraïbles.
- **CA 2.i:** utilitzar mitjans d'emmagatzematge remots i extraïbles.

## Part 1. Preparació del disc de còpies

Apaga la màquina virtual i afig un nou disc virtual destinat exclusivament a còpies de seguretat.

Capacitat recomanada:

**16 GB o superior.**

Inicia Ubuntu i identifica el nou dispositiu.

Prepara'l amb un sistema de fitxers adequat i munta'l en:

```text
/mnt/backup
```

### Evidència 1

Mostra amb `lsblk` o una ferramenta equivalent:

- disc del sistema;
- discos del RAID;
- disc destinat a les còpies;
- punts de muntatge.

## Part 2. Còpia completa

Abans de provocar cap incidència, realitza una **còpia completa** del contingut de:

```text
/srv/dades
```

La còpia ha d'emmagatzemar-se en:

```text
/mnt/backup
```

Utilitza una ferramenta adequada de Linux.

La còpia haurà de conservar l'estructura dels directoris i permetre posteriorment la restauració.

### Evidència 2

Indica:

- ferramenta utilitzada;
- ordre executada;
- ubicació de la còpia;
- mida aproximada;
- data i hora.

## Part 3. Canvis en les dades

Després de la còpia completa:

1. crea alguns fitxers nous;
2. modifica almenys dos fitxers existents;
3. elimina un fitxer que no siga important.

Anota quins canvis has realitzat.

Ara realitza una **còpia incremental** que continga els canvis produïts des de l'última còpia.

### Evidència 3

Mostra les còpies disponibles i explica breument la diferència entre:

- còpia completa;
- còpia incremental.

## Part 4. Incident

Ara es produeix l'error.

Elimina completament:

```text
/srv/dades/projectes
```

Comprova que el directori ja no existeix.

Observa també l'estat del RAID.

### Pregunta

**El RAID ha detectat alguna avaria? Per què?**

## Part 5. Restauració

Utilitza les còpies creades anteriorment per recuperar la informació eliminada.

L'objectiu és que:

```text
/srv/dades/projectes
```

torne a contindre la informació que tenia abans de l'incident.

Comprova que els fitxers recuperats poden obrir-se i que el seu contingut és correcte.

### Evidència 4

Mostra:

- l'estat abans de restaurar;
- el procés de restauració;
- l'estat final.

## Part 6. Política de còpies

Proposa una estratègia senzilla per a este servidor.

Indica:

- amb quina freqüència faries una còpia completa;
- amb quina freqüència faries còpies incrementals;
- quantes còpies conservaries;
- on les guardaries.

Explica també què milloraries respecte a guardar la còpia en un disc connectat permanentment al mateix servidor.

## Reflexió final

Indica quin mecanisme utilitzaries davant de cada situació:

| Situació | RAID o còpia de seguretat? |
|---|---|
| Falla físicament un dels discos de dades | |
| Un usuari elimina una carpeta | |
| Un fitxer queda corrupte | |
| Es modifica accidentalment un document | |
| Falla un disc però les dades han de continuar disponibles | |

## Abans de continuar

Conserva:

- el disc del sistema;
- el RAID;
- les dades;
- el disc de còpies.

La pròxima activitat partirà de **la mateixa màquina virtual**.

[Activitat 4. Imatge i recuperació completa amb Clonezilla](activitat-4-clonezilla.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
