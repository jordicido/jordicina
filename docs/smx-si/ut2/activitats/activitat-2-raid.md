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
- **RA2.d:** descriure les tecnologies d'emmagatzematge redundant i distribuït.

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

Les credencials són:

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

!!! warning "Important"
    No modifiqueu ni elimineu el disc original d'Ubuntu.

---

# 2. Identificació dels discos

Inicieu Ubuntu i comproveu els dispositius d'emmagatzematge disponibles:

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

Abans d'executar qualsevol ordre sobre els discos, heu d'identificar correctament:

- quin és el disc d'Ubuntu;
- quin és el primer disc nou;
- quin és el segon disc nou.

!!! warning "Atenció"
    No utilitzeu mai el disc que conté Ubuntu per crear el RAID.

### Evidència 1

Incloeu una captura de l'eixida de:

```bash
lsblk
```

I indiqueu:

- **Disc del sistema:**
- **Primer disc del RAID:**
- **Segon disc del RAID:**

---

# 3. Comprovació de `mdadm`

Per gestionar RAID per programari en Linux utilitzarem la ferramenta **mdadm**.

Comproveu que està instal·lada:

```bash
mdadm --version
```

Si no està disponible:

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

Suposant que els discos nous són `/dev/sdb` i `/dev/sdc`, executeu:

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

Consulteu l'estat general del RAID amb:

```bash
cat /proc/mdstat
```

Podeu obtindre informació més detallada amb:

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

!!! question "Investiga"
    Busca què significa la representació `[UU]` que apareix habitualment en `/proc/mdstat`.

    Explica amb les teues paraules què representa cada `U`.

---

# 6. Crear el sistema de fitxers

El dispositiu RAID ja existeix, però encara no té un sistema de fitxers.

Creeu un sistema de fitxers **ext4**:

```bash
sudo mkfs.ext4 /dev/md0
```

Ara creeu el directori que utilitzarem com a punt de muntatge:

```bash
sudo mkdir -p /srv/dades
```

Munteu el RAID:

```bash
sudo mount /dev/md0 /srv/dades
```

Comproveu que s'ha muntat correctament amb:

```bash
findmnt /srv/dades
```

Hauríeu d'obtindre una eixida semblant a:

```text
TARGET      SOURCE    FSTYPE OPTIONS
/srv/dades /dev/md0  ext4   rw,...
```

També podeu comprovar-ho amb:

```bash
df -h /srv/dades
```

o:

```bash
lsblk
```

### Evidència 3

Mostreu que `/dev/md0` està muntat en `/srv/dades`.

La captura ha de permetre veure clarament:

- el dispositiu;
- el sistema de fitxers;
- el punt de muntatge.

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

Creeu almenys **dos fitxers dins de cada directori**.

Els fitxers han de contindre algun text que permeta identificar-los posteriorment.

Per exemple:

```text
clients/client1.txt
clients/client2.txt

factures/factura1.txt
factures/factura2.txt
```

Podeu visualitzar l'estructura amb:

```bash
tree /srv/dades
```

!!! question "Busca una solució"
    Investiga una forma senzilla de:

    - crear diversos directoris des de terminal;
    - crear un fitxer de text;
    - escriure contingut dins del fitxer.

    Podeu utilitzar ferramentes com `mkdir`, `nano`, `echo` o altres alternatives.

    No és necessari que tots utilitzeu exactament les mateixes ordres.

### Evidència 4

Incloeu una captura de l'estructura creada amb:

```bash
tree /srv/dades
```

---

# 8. Simulació de l'avaria d'un disc

Abans de provocar cap fallada, comproveu que podeu accedir als fitxers de:

```text
/srv/dades
```

Suposant que simularem l'avaria de `/dev/sdb`, executeu:

```bash
sudo mdadm /dev/md0 --fail /dev/sdb
```

Comproveu ara l'estat:

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

en lloc de:

```text
[UU]
```

!!! question "Interpreta el resultat"
    Explica què creus que representa `[U_]`.

    Relaciona la resposta amb l'estat actual dels dos discos.

---

# 9. Comprovació de les dades amb el RAID degradat

Sense reparar encara el RAID, executeu:

```bash
ls /srv/dades
```

Obriu també alguns dels fitxers que havíeu creat.

### Evidència 5

Mostreu:

- que el RAID està degradat;
- que `/srv/dades` continua accessible;
- que encara podeu llegir els fitxers.

Responeu:

1. Per què podem continuar accedint a les dades?
2. Quin disc continua mantenint la informació disponible?
3. Podríem continuar treballant indefinidament en este estat?
4. Què ocorreria si ara fallara també el segon disc?

---

# 10. Retirar el disc defectuós

Una vegada marcat com a defectuós, retireu el disc del RAID:

```bash
sudo mdadm /dev/md0 --remove /dev/sdb
```

Comproveu el resultat amb:

```bash
sudo mdadm --detail /dev/md0
```

El RAID continuarà funcionant amb un únic disc.

---

# 11. Reconstrucció del RAID

Simularem ara que el tècnic ha substituït el disc avariat.

En esta pràctica reutilitzarem el mateix dispositiu.

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

Per eixir:

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
findmnt /srv/dades
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

# 13. Què ocorre després de reiniciar?

Fins ara hem muntat `/dev/md0` manualment:

```bash
sudo mount /dev/md0 /srv/dades
```

Reinicieu la màquina:

```bash
sudo reboot
```

Quan torne a arrancar, comproveu:

```bash
findmnt /srv/dades
```

!!! question "Investiga"
    Comprova si `/dev/md0` continua muntat automàticament en `/srv/dades`.

    Si no és així, investiga:

    - què és el fitxer `/etc/fstab`;
    - per a què serveix;
    - com es pot utilitzar perquè un sistema de fitxers es munte automàticament en iniciar Linux.

!!! tip "Pista"
    Podeu consultar l'UUID del RAID amb:

    ```bash
    sudo blkid /dev/md0
    ```

    Investigueu per què és recomanable utilitzar l'UUID en `/etc/fstab` en lloc d'escriure simplement `/dev/md0`.

!!! warning "Abans de reiniciar"
    Reviseu bé la línia afegida a `/etc/fstab`.

    Una configuració incorrecta pot provocar problemes durant l'arrancada.

### Evidència 7

Documenteu:

- què ocorria abans de modificar `/etc/fstab`;
- la línia que heu afegit;
- el resultat de `findmnt /srv/dades` després de reiniciar.

---

# 14. RAID no és una còpia de seguretat

Imagineu que un usuari executa accidentalment:

```bash
rm -rf /srv/dades/projectes
```

!!! danger "No executes esta ordre"
    No elimines la carpeta.

    La situació és només una simulació teòrica en esta activitat.

Responeu:

1. S'eliminaria la carpeta únicament d'un dels discos?
2. S'eliminaria dels dos discos del RAID?
3. Podríem recuperar-la gràcies al RAID 1?
4. Quin tipus de mecanisme necessitaríem per recuperar dades eliminades?

!!! question "Investiga"
    Busca la diferència entre:

    - **redundància**;
    - **còpia de seguretat**.

    Escriu una explicació breu de cada concepte utilitzant les teues pròpies paraules.

Esta situació serà el punt de partida de la pròxima pràctica.

---

# 15. Conclusions

Completeu la següent taula:

| Situació | RAID 1 ens protegeix? | Justificació |
|---|---|---|
| Falla un dels dos discos | | |
| S'esborra accidentalment un fitxer | | |
| Un usuari modifica incorrectament un document | | |
| Un disc deixa de funcionar | | |
| Un ransomware xifra els fitxers | | |

Finalment, expliqueu amb les vostres paraules:

### Quina és la funció principal d'un RAID 1?

Relacioneu la resposta amb el concepte de **disponibilitat de la informació**.

---

# Lliurament

Entregueu un document amb:

- les evidències sol·licitades;
- les respostes a les preguntes;
- els resultats de les investigacions indicades;
- una breu conclusió final.

No és necessari fer una captura de cada ordre.

Les captures han de demostrar els moments importants:

1. discos inicials;
2. RAID creat;
3. RAID muntat;
4. dades creades;
5. RAID degradat però operatiu;
6. RAID reconstruït;
7. muntatge automàtic després del reinici.

!!! warning "Conserveu la màquina virtual"
    No elimineu el RAID ni els fitxers de `/srv/dades` en finalitzar.

    La següent activitat continuarà treballant sobre **esta mateixa màquina virtual** per implementar un sistema de còpies de seguretat i restauració.

[Activitat 3. Còpies de seguretat i restauració](activitat-3-copies-restauracio.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
