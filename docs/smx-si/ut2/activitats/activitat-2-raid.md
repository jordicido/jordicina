---
hide:
  - navigation
---
# Activitat 2. Tolerància a fallades amb RAID 1

## Finalitat

En esta activitat configurareu un sistema d'emmagatzematge redundant mitjançant **RAID 1** sobre una màquina Ubuntu Server.

L'objectiu no és únicament crear el RAID, sinó entendre:

- com identifica Linux els diferents discos;
- com es crea un RAID per programari;
- què ocorre quan falla un dels discos;
- com es recupera el sistema després de substituir un disc;
- per què un RAID **no és una còpia de seguretat**.

Treballareu principalment els criteris:

- **RA2.b:** tindre en compte factors inherents a l'emmagatzematge de la informació, especialment la disponibilitat.
- **RA2.d:** descriure i utilitzar tecnologies d'emmagatzematge redundant.

---

## Escenari

Una xicoteta empresa disposa d'un servidor Ubuntu on emmagatzema informació important.

Actualment totes les dades es troben en un únic disc. Si este disc falla, la informació deixarà d'estar disponible.

Per reduir este risc, l'empresa ha decidit instal·lar dos discos addicionals i configurar-los com un **RAID 1**.

En un RAID 1, la mateixa informació s'emmagatzema simultàniament en els dos discos.

```text
              RAID 1
                 │
        ┌────────┴────────┐
        │                 │
     Disc 1            Disc 2
    /dev/sdb           /dev/sdc
        │                 │
        └──── mateixa ────┘
             informació
```

Si un dels dos discos falla, el sistema pot continuar treballant utilitzant l'altre.

---

# 1. Preparació de la màquina virtual

El professor proporcionarà una màquina virtual **Ubuntu Server ja instal·lada i configurada**.

No heu d'instal·lar Ubuntu.

Importeu l'arxiu `.ova` proporcionat pel professor en VirtualBox.

Les credencials de la màquina són:

```text
Usuari: alumne
Contrasenya: alumne
```

La màquina inicial disposa únicament del disc on està instal·lat Ubuntu.

Abans d'iniciar-la, afegiu **dos discos virtuals nous de 4 GB cadascun**.

Els discos han de ser:

- VDI;
- reservats dinàmicament;
- connectats al controlador SATA de la màquina virtual.

No modifiqueu el disc original d'Ubuntu.

---

# 2. Identificació dels discos

Inicieu Ubuntu i comproveu els dispositius d'emmagatzematge disponibles.

Utilitzeu:

```bash
lsblk
```

Hauríeu d'observar una estructura semblant a:

```text
sda      25G
└─sda1   ...

sdb       4G

sdc       4G
```

Els noms poden variar lleugerament.

### Important

Abans d'executar qualsevol ordre de configuració de discos, heu d'identificar correctament:

- quin és el disc d'Ubuntu;
- quin és el primer disc nou;
- quin és el segon disc nou.

**No utilitzeu mai el disc que conté Ubuntu per crear el RAID.**

### Evidència 1

Incloeu una captura de l'eixida de:

```bash
lsblk
```

I indiqueu:

- disc del sistema:
- primer disc del RAID:
- segon disc del RAID:

---

# 3. Comprovació de `mdadm`

Per gestionar RAID per programari en Linux utilitzarem la ferramenta **mdadm**.

Comproveu que està instal·lada:

```bash
mdadm --version
```

Si per algun motiu no està disponible, podeu instal·lar-la amb:

```bash
sudo apt update
sudo apt install mdadm
```

---

# 4. Creació del RAID 1

Crearem un dispositiu RAID anomenat:

```text
/dev/md0
```

Suposant que els discos nous són `/dev/sdb` i `/dev/sdc`, utilitzeu:

```bash
sudo mdadm --create /dev/md0 \
--level=1 \
--raid-devices=2 \
/dev/sdb /dev/sdc
```

La comanda indica:

- `/dev/md0`: nom del nou dispositiu RAID;
- `--level=1`: RAID de nivell 1;
- `--raid-devices=2`: utilitzarem dos discos;
- `/dev/sdb /dev/sdc`: discos que formaran el RAID.

Confirmeu l'operació si el sistema ho sol·licita.

---

# 5. Comprovació de l'estat del RAID

Podeu consultar l'estat general del RAID amb:

```bash
cat /proc/mdstat
```

També podeu obtindre informació més detallada amb:

```bash
sudo mdadm --detail /dev/md0
```

### Evidència 2

Incloeu una captura on es veja que `/dev/md0` està format pels dos discos.

Responeu:

1. Quin nivell RAID heu configurat?
2. Quants discos formen el RAID?
3. Quina capacitat aproximada té `/dev/md0`?
4. Si tenim dos discos de 4 GB, per què el RAID no ofereix aproximadament 8 GB?

---

# 6. Crear el sistema de fitxers

El dispositiu RAID encara no té un sistema de fitxers.

Creeu un sistema de fitxers **ext4**:

```bash
sudo mkfs.ext4 /dev/md0
```

Ara creeu un directori que utilitzarem com a punt de muntatge:

```bash
sudo mkdir -p /srv/dades
```

Munteu el RAID en este directori.

Per fer-ho necessitareu utilitzar l'ordre:

```text
mount
```

Quan ho tingueu, comproveu el resultat amb:

```bash
df -h
```

i:

```bash
lsblk
```

### Evidència 3

Mostreu que:

```text
/dev/md0
```

està muntat en:

```text
/srv/dades
```

---

# 7. Crear dades de prova

Crearem una estructura que simule les dades de l'empresa.

Dins de `/srv/dades`, creeu:

```text
/srv/dades/
├── clients/
├── factures/
├── personal/
└── projectes/
```

Podeu utilitzar `mkdir`.

Creeu almenys **dos fitxers dins de cada directori**.

Els fitxers poden ser senzills, però han de contindre algun text.

Per exemple:

```text
clients/client1.txt
clients/client2.txt

factures/factura1.txt
factures/factura2.txt
```

Utilitzeu `tree` per comprovar l'estructura:

```bash
tree /srv/dades
```

### Evidència 4

Incloeu una captura de l'estructura creada.

---

# 8. Simulació de l'avaria d'un disc

Ara simularem que un dels discos físics del RAID ha fallat.

Abans de continuar, comproveu que podeu llegir els fitxers de:

```text
/srv/dades
```

Suposant que volem simular una avaria en `/dev/sdb`, executeu:

```bash
sudo mdadm /dev/md0 --fail /dev/sdb
```

Ara comproveu:

```bash
cat /proc/mdstat
```

i:

```bash
sudo mdadm --detail /dev/md0
```

El RAID hauria d'aparéixer en estat **degradat**.

Podeu observar una representació semblant a:

```text
[U_]
```

En canvi, un RAID amb els dos discos funcionant apareix habitualment com:

```text
[UU]
```

---

# 9. Comprovació de les dades

Sense reparar encara el RAID, comproveu:

```bash
ls /srv/dades
```

Obriu alguns dels fitxers que havíeu creat.

### Evidència 5

Mostreu:

- el RAID degradat;
- que `/srv/dades` continua accessible.

Responeu:

1. Per què podem continuar accedint a les dades?
2. Quin disc està mantenint el sistema en funcionament?
3. Podríem continuar treballant indefinidament en este estat? Per què?

---

# 10. Retirar el disc defectuós

Una vegada marcat el disc com a defectuós, retireu-lo del RAID:

```bash
sudo mdadm /dev/md0 --remove /dev/sdb
```

Comproveu de nou:

```bash
sudo mdadm --detail /dev/md0
```

El RAID continuarà funcionant, però només amb un disc.

---

# 11. Reconstrucció del RAID

Simularem ara que el tècnic ha substituït el disc avariat.

En esta pràctica reutilitzarem el mateix disc.

Torneu a afegir-lo:

```bash
sudo mdadm /dev/md0 --add /dev/sdb
```

Comproveu el procés de reconstrucció amb:

```bash
cat /proc/mdstat
```

També podeu observar-lo contínuament amb:

```bash
watch cat /proc/mdstat
```

Eixiu de `watch` amb:

```text
Ctrl + C
```

Espereu fins que el procés de reconstrucció haja finalitzat.

Al final hauríeu de tornar a observar:

```text
[UU]
```

### Evidència 6

Incloeu una captura del RAID una vegada reconstruït.

---

# 12. Comprovació final

Comproveu:

```bash
sudo mdadm --detail /dev/md0
```

```bash
lsblk
```

```bash
tree /srv/dades
```

Verifiqueu que:

- els dos discos formen part del RAID;
- el RAID està actiu;
- `/srv/dades` continua muntat;
- els fitxers continuen existint.

---

# 13. RAID no és una còpia de seguretat

Ara reflexioneu sobre esta situació.

Imagineu que un usuari executa accidentalment:

```bash
rm -rf /srv/dades/projectes
```

**No executeu esta ordre encara.**

Responeu:

1. S'eliminaria la carpeta únicament d'un dels discos?
2. O s'eliminaria del RAID complet?
3. Podríem recuperar-la gràcies al RAID 1?
4. Quin mecanisme necessitaríem per protegir-nos davant este tipus d'incident?

Esta situació serà el punt de partida de la pròxima pràctica.

---

# 14. Conclusions

Completeu la següent taula:

| Situació | RAID 1 ens protegeix? |
|---|---|
| Falla un dels dos discos | |
| S'esborra accidentalment un fitxer | |
| Un usuari modifica incorrectament un document | |
| Un disc deixa de funcionar | |
| Un ransomware xifra els fitxers | |

Finalment, expliqueu amb les vostres paraules:

### Quina és la funció principal d'un RAID 1?

La resposta ha d'estar relacionada amb el concepte de **disponibilitat de la informació**.

---

# Lliurament

Entregueu un document amb:

- les evidències sol·licitades;
- les respostes a les preguntes;
- una breu conclusió final.

No és necessari fer una captura de cada ordre.

Les captures han de demostrar els moments importants:

1. discos inicials;
2. RAID creat;
3. RAID muntat;
4. dades creades;
5. RAID degradat però operatiu;
6. RAID reconstruït.

## Important

Conserveu esta màquina virtual al final de la pràctica.

**No elimineu el RAID ni els fitxers de `/srv/dades`.**

La següent activitat continuarà treballant sobre **esta mateixa màquina virtual** per implementar un sistema de còpies de seguretat i restauració.

[Activitat 3. Còpies de seguretat i restauració](activitat-3-copies-restauracio.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
