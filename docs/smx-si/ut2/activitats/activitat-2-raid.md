---
hide:
  - navigation
---
# Activitat 2. Emmagatzematge redundant amb RAID

## Finalitat

Crear un RAID 5 en una màquina virtual, comprovar-ne l’estat, simular la fallada d’un disc i reconstruir l’array. Treballareu **RA2.c** i **RA2.d**.

!!! danger "Només discos de prova"
    Les ordres poden destruir informació. Utilitzeu una màquina virtual amb un disc de sistema i quatre discos virtuals buits de 2 GB. Comproveu les rutes amb `lsblk` abans de cada operació.

## Preparació

```bash
lsblk
sudo apt update
sudo apt install mdadm
```

Identifiqueu tres discos de dades, per exemple `/dev/sdb`, `/dev/sdc` i `/dev/sdd`. No utilitzeu el disc d’arrancada.

## Crear i muntar el RAID 5

```bash
sudo mdadm --create /dev/md0 \
  --level=5 --raid-devices=3 \
  /dev/sdb /dev/sdc /dev/sdd

cat /proc/mdstat
sudo mdadm --detail /dev/md0
sudo mkfs.ext4 /dev/md0
sudo mkdir -p /mnt/raid
sudo mount /dev/md0 /mnt/raid
df -h /mnt/raid
```

Creeu dades de prova:

```bash
sudo mkdir -p /mnt/raid/documents
echo "Fitxer important" | sudo tee /mnt/raid/documents/prova.txt
cat /mnt/raid/documents/prova.txt
```

## Simular una fallada

Marqueu un disc com a fallat i observeu l’estat:

```bash
sudo mdadm --manage /dev/md0 --fail /dev/sdc
sudo mdadm --detail /dev/md0
cat /proc/mdstat
cat /mnt/raid/documents/prova.txt
```

Anoteu si l’array continua accessible, quants discos apareixen actius i quin estat mostra.

## Retirar i substituir el disc

```bash
sudo mdadm --manage /dev/md0 --remove /dev/sdc
sudo mdadm --manage /dev/md0 --add /dev/sde
cat /proc/mdstat
sudo mdadm --detail /dev/md0
```

Espereu que finalitze la reconstrucció i comproveu de nou el fitxer de prova.

## Evidències

Incloeu captures o eixides de terminal de:

1. discos inicials amb `lsblk`;
2. RAID creat;
3. estat normal;
4. estat degradat;
5. dades encara accessibles;
6. disc nou afegit;
7. reconstrucció;
8. estat final.

## Reflexió

1. Per què RAID 5 pot continuar funcionant després d’una fallada?
2. Quina capacitat útil aproximada ofereixen tres discos de 2 GB?
3. Què passaria si fallaren dos discos abans d’acabar la reconstrucció?
4. Per què RAID no substitueix un backup?

[Activitat 3. Còpies i restauració](activitat-3-copies-restauracio.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
