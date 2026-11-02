---
hide:
  - navigation
---
# Activitat 3. Còpies de seguretat i restauració

## Finalitat

En l'activitat anterior heu configurat un **RAID 1** per mantindre les dades disponibles encara que falle un dels discos.

Ara treballarem un problema diferent:

> Què ocorre si els discos funcionen correctament, però un usuari elimina informació important?

En esta activitat implementareu un sistema de **còpies de seguretat**, simulareu una pèrdua de dades i recuperareu la informació.

L'objectiu és entendre:

- la diferència entre redundància i còpia de seguretat;
- com preparar un dispositiu destinat a còpies;
- com realitzar una còpia completa;
- com realitzar una còpia incremental;
- per què és útil mantindre alguna còpia desconnectada;
- com restaurar informació després d'una pèrdua;
- com definir una estratègia bàsica de còpies.

Treballareu principalment els criteris:

- **RA2.e:** seleccionar estratègies per a la realització de còpies de seguretat.
- **RA2.f:** tindre en compte la freqüència i l'esquema de rotació.
- **RA2.g:** realitzar còpies de seguretat amb diferents estratègies.
- **RA2.h:** identificar les característiques dels mitjans d'emmagatzematge remots i extraïbles.
- **RA2.i:** utilitzar mitjans d'emmagatzematge remots i extraïbles.

---

# 1. Continuació de l'activitat anterior

!!! warning "Utilitza la mateixa màquina virtual"
    **No has de crear ni importar una màquina Ubuntu nova.**

    Has de continuar treballant amb **la mateixa màquina virtual utilitzada en l'Activitat 2 - RAID 1**.

    La màquina ha de conservar:

    - el RAID 1 `/dev/md0`;
    - el punt de muntatge `/srv/dades`;
    - les carpetes i fitxers creats en l'activitat anterior.

Abans de continuar, inicia la màquina i comprova:

```bash
cat /proc/mdstat
```

```bash
findmnt /srv/dades
```

```bash
tree /srv/dades
```

El RAID ha d'estar operatiu i les dades han de continuar disponibles.

### Evidència 1

Mostra:

- el RAID en funcionament;
- `/srv/dades` muntat;
- l'estructura de dades de l'activitat anterior.

---

# 2. Afegir un disc per a les còpies

Les còpies de seguretat **no s'han d'emmagatzemar dins del mateix RAID que protegeixen**.

Apaga la màquina virtual:

```bash
sudo poweroff
```

En VirtualBox, afig un nou disc virtual amb les característiques següents:

- **16 GB**;
- VDI;
- reservat dinàmicament;
- connectat al controlador SATA.

Torna a iniciar Ubuntu i comprova els discos:

```bash
lsblk
```

Hauries de tindre una estructura semblant a:

```text
sda      25G    Sistema Ubuntu

sdb       4G    ┐
                ├── RAID 1
sdc       4G    ┘

sdd      16G    Disc de còpies
```

Els noms poden variar.

!!! warning "Comprova abans d'actuar"
    Identifica correctament el nou disc abans de modificar-lo.

    **No formates `/dev/sda`, `/dev/sdb` ni `/dev/sdc`.**

### Evidència 2

Mostra amb `lsblk`:

- el disc del sistema;
- els discos del RAID;
- el nou disc de còpies.

Indica quin dispositiu correspon al nou disc.

---

# 3. Crear una partició per a les còpies

Utilitzarem una única partició que ocupe tot el nou disc.

Pots iniciar la ferramenta de particionat amb:

```bash
sudo fdisk /dev/sdd
```

!!! question "Investiga"
    Investiga quines opcions de `fdisk` necessites per:

    1. crear una nova partició;
    2. utilitzar tot l'espai disponible;
    3. guardar els canvis.

    Anota les opcions utilitzades en l'informe.

Una vegada finalitzat, comprova:

```bash
lsblk
```

Hauria d'aparéixer una nova partició semblant a:

```text
sdd
└─sdd1
```

---

# 4. Preparar el sistema de fitxers

Formata la nova partició amb **ext4**:

```bash
sudo mkfs.ext4 /dev/sdd1
```

Crea el punt de muntatge:

```bash
sudo mkdir -p /mnt/backup
```

Munta el disc:

```bash
sudo mount /dev/sdd1 /mnt/backup
```

Comprova-ho:

```bash
findmnt /mnt/backup
```

### Evidència 3

Mostra clarament que el disc de còpies està muntat en:

```text
/mnt/backup
```

---

# 5. Fer persistent el muntatge

En l'activitat anterior ja heu treballat el fitxer:

```text
/etc/fstab
```

Utilitza el que vas aprendre per configurar també el disc de còpies.

Consulta l'UUID:

```bash
sudo blkid /dev/sdd1
```

Edita:

```bash
sudo nano /etc/fstab
```

En este cas hi ha una diferència important: **posteriorment desconnectarem el disc de còpies**.

Per això, la configuració ha de permetre que Ubuntu puga arrancar encara que el disc no estiga connectat.

Una configuració possible és:

```text
UUID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX /mnt/backup ext4 defaults,nofail 0 2
```

!!! question "Investiga"
    Investiga què fa l'opció:

    ```text
    nofail
    ```

    i explica per què és especialment útil en este disc.

Comprova que la configuració és correcta abans de continuar:

```bash
sudo mount -a
```

---

# 6. Crear una còpia completa

Ara realitzarem una **còpia completa** de totes les dades de:

```text
/srv/dades
```

Utilitzarem `tar`.

Executa:

```bash
sudo tar \
--listed-incremental=/mnt/backup/backup.snar \
-czpf /mnt/backup/copia-completa.tar.gz \
-C / srv/dades
```

En esta ordre:

- `c` crea l'arxiu;
- `z` el comprimeix amb gzip;
- `p` conserva els permisos;
- `f` indica el nom de l'arxiu;
- `-C /` fa que les rutes s'emmagatzemen de manera relativa;
- `backup.snar` guarda informació sobre l'estat dels fitxers.

Comprova el resultat:

```bash
ls -lh /mnt/backup
```

Pots consultar el contingut de la còpia sense restaurar-la:

```bash
tar -tzf /mnt/backup/copia-completa.tar.gz
```

### Evidència 4

Mostra:

- `copia-completa.tar.gz`;
- `backup.snar`;
- la mida de la còpia.

Respon:

1. Què conté una còpia completa?
2. Quin avantatge té quan arriba el moment de restaurar?
3. Quin inconvenient pot tindre si hi ha una gran quantitat de dades?

---

# 7. Modificar les dades

Ara simularem que l'empresa continua treballant després d'haver realitzat la còpia completa.

Realitza almenys estos canvis en `/srv/dades`:

- crea **dos fitxers nous**;
- modifica el contingut d'almenys **un fitxer existent**.

!!! question "Resol-ho"
    Decideix tu quines ordres utilitzaràs per:

    - crear els nous fitxers;
    - afegir o modificar contingut.

    Pots utilitzar ferramentes que ja coneixes com `nano`, `echo`, `touch` o altres.

Comprova els canvis amb:

```bash
tree /srv/dades
```

---

# 8. Crear una còpia incremental

Ara volem copiar només els canvis produïts després de la còpia completa.

Executa:

```bash
sudo tar \
--listed-incremental=/mnt/backup/backup.snar \
-czpf /mnt/backup/copia-incremental-1.tar.gz \
-C / srv/dades
```

Observa que utilitzem el **mateix fitxer `backup.snar`**.

Este fitxer permet a `tar` saber quins elements han canviat des de l'última còpia.

Comprova:

```bash
ls -lh /mnt/backup
```

### Evidència 5

Mostra:

- la còpia completa;
- la còpia incremental;
- la mida de cadascuna.

Respon:

1. Quina de les dues còpies ocupa menys?
2. Per què?
3. Per restaurar l'estat més recent, seria suficient tindre només `copia-incremental-1.tar.gz`?
4. Què ocorreria si perguérem `copia-completa.tar.gz`?

---

# 9. Desconnectar el dispositiu de còpia

Una còpia connectada permanentment al mateix servidor continua exposada a determinats problemes.

Desmunta el dispositiu:

```bash
sudo umount /mnt/backup
```

Comprova que ja no està muntat:

```bash
findmnt /mnt/backup
```

Apaga la màquina:

```bash
sudo poweroff
```

Ara, des de VirtualBox:

1. accedix a la configuració d'emmagatzematge;
2. **desconnecta el disc de 16 GB** de la màquina;
3. no elimines l'arxiu VDI.

!!! warning "No elimines el disc"
    Has de **desconnectar-lo**, no eliminar físicament l'arxiu del disc virtual.

Torna a iniciar Ubuntu sense el disc de còpies.

Comprova que:

- Ubuntu arranca;
- el RAID continua funcionant;
- `/srv/dades` continua accessible.

!!! question "Reflexiona"
    Per què pot ser interessant conservar alguna còpia de seguretat desconnectada del servidor?

    Quina protecció podria oferir davant d'un ransomware?

---

# 10. Simulació d'una pèrdua de dades

Ara es produeix l'incident.

Un usuari elimina accidentalment tota la carpeta:

```text
/srv/dades/factures
```

En esta activitat **sí que executarem realment l'eliminació**:

```bash
sudo rm -rf /srv/dades/factures
```

Comprova:

```bash
tree /srv/dades
```

Ara comprova també:

```bash
cat /proc/mdstat
```

El RAID hauria de continuar funcionant correctament.

### Evidència 6

Mostra:

- que `factures` ha desaparegut;
- que el RAID continua sa.

Respon:

1. El RAID ha detectat alguna avaria?
2. Per què continua mostrant els dos discos com a correctes?
3. Per què RAID 1 no pot recuperar la carpeta?
4. Quina diferència entre **redundància** i **còpia de seguretat** demostra este incident?

---

# 11. Recuperar el disc de còpies

Apaga la màquina:

```bash
sudo poweroff
```

Torna a connectar en VirtualBox el disc de còpies de **16 GB**.

Inicia Ubuntu.

Comprova si s'ha muntat automàticament:

```bash
findmnt /mnt/backup
```

Si és necessari:

```bash
sudo mount /mnt/backup
```

Comprova que les còpies continuen disponibles:

```bash
ls -lh /mnt/backup
```

---

# 12. Preparar la restauració

No restaurarem directament sobre les dades originals.

Primer reconstruirem la informació en un directori temporal.

Crea:

```bash
sudo rm -rf /tmp/restauracio
sudo mkdir -p /tmp/restauracio
```

Restaura primer la còpia completa:

```bash
sudo tar \
--listed-incremental=/dev/null \
-xzpf /mnt/backup/copia-completa.tar.gz \
-C /tmp/restauracio
```

Després aplica la còpia incremental:

```bash
sudo tar \
--listed-incremental=/dev/null \
-xzpf /mnt/backup/copia-incremental-1.tar.gz \
-C /tmp/restauracio
```

Comprova:

```bash
tree /tmp/restauracio/srv/dades
```

!!! question "Comprova abans de copiar"
    Revisa la informació restaurada i comprova:

    - que existeix la carpeta `factures`;
    - que apareixen els fitxers de la còpia completa;
    - que també apareixen els canvis inclosos en la còpia incremental.

---

# 13. Restaurar la carpeta eliminada

Una vegada comprovat el contingut temporal, recupera la carpeta:

```bash
sudo cp -a \
/tmp/restauracio/srv/dades/factures \
/srv/dades/
```

Comprova:

```bash
tree /srv/dades
```

Obri alguns fitxers i comprova que el contingut és correcte.

### Evidència 7

Mostra:

- la carpeta `factures` restaurada;
- els seus fitxers;
- almenys algun dels canvis realitzats després de la còpia completa.

Respon:

1. Quins arxius de còpia has necessitat per restaurar l'estat més recent?
2. Per què és important comprovar una còpia de seguretat i no limitar-se únicament a crear-la?

---

# 14. Dissenyar una política de còpies

Fins ara hem fet una còpia manual.

En un entorn real, les còpies de seguretat han de seguir una **política planificada**.

!!! question "Investiga"
    Investiga breument en què consisteix la **regla 3-2-1 de còpies de seguretat**.

    Explica-la amb les teues paraules.

Ara proposa una política per al servidor de l'empresa indicant:

| Aspecte | Proposta |
|---|---|
| Freqüència de còpia completa | |
| Freqüència de còpia incremental | |
| Nombre de còpies a conservar | |
| Ubicació de les còpies | |
| Quan mantindries una còpia desconnectada | |

!!! question "Amplia"
    El disc virtual utilitzat en esta pràctica simula un dispositiu d'emmagatzematge separat.

    Proposa **dos mitjans reals** que podríem utilitzar en una empresa per mantindre còpies fora del servidor.

---

# 15. Conclusions

Completeu:

| Incident | Solució principal |
|---|---|
| Falla un disc del RAID | |
| Un usuari elimina una carpeta | |
| Un fitxer es modifica incorrectament | |
| Un ransomware xifra els fitxers del servidor | |
| Necessitem recuperar una versió anterior | |

Finalment, respon:

### Quina és la diferència principal entre RAID i una còpia de seguretat?

Relaciona la resposta amb els conceptes:

- **disponibilitat**;
- **recuperació**.

---

# Lliurament

Entrega la fitxa proporcionada pel professor completant:

- les **7 evidències** sol·licitades;
- les preguntes de la pràctica;
- els apartats d'investigació;
- la política de còpies;
- les conclusions.

No és necessari fer una captura de cada ordre.

Les captures han de demostrar els punts importants del procés.

!!! warning "Conserva tot l'entorn"
    No elimines:

    - la màquina virtual;
    - el RAID;
    - `/srv/dades`;
    - el disc virtual de còpies;
    - les còpies creades.

    **La pròxima activitat continuarà utilitzant esta mateixa màquina per treballar amb Clonezilla.**

[Activitat 4. Imatge i recuperació completa amb Clonezilla](activitat-4-clonezilla.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
