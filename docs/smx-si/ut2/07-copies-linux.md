---
hide:
  - navigation
---
# 7. Còpies en Linux

## `tar`: agrupar i comprimir

`tar` permet agrupar fitxers i directoris en un arxiu i comprimir-lo amb gzip.

```bash
tar -cvf documents.tar documents/
tar -czvf documents.tar.gz documents/
tar -xzvf documents.tar.gz
```

Abans de restaurar en una ubicació important, inspecciona el contingut:

```bash
tar -tzf documents.tar.gz
```

## Incrementals amb `tar`

El fitxer de seguiment `.snar` registra l’estat anterior.

```bash
tar --listed-incremental=backup.snar \
    -czvf backup_complet.tar.gz dades/

tar --listed-incremental=backup.snar \
    -czvf backup_incremental_01.tar.gz dades/
```

Per restaurar l’estat final, aplica la completa i les incrementals en ordre en una carpeta de prova:

```bash
mkdir restauracio
cd restauracio
tar --listed-incremental=/dev/null -xzvf ../backup_complet.tar.gz
tar --listed-incremental=/dev/null -xzvf ../backup_incremental_01.tar.gz
```

## `rsync`

`rsync` sincronitza directoris de manera eficient i conserva metadades amb el mode d’arxiu.

```bash
rsync -av documents/ /mnt/backup/documents/
rsync -av --delete documents/ /mnt/backup/documents/
```

`--delete` pot eliminar a la destinació fitxers que ja no existeixen a l’origen. Utilitza’l només quan ho entengues i, si cal, prova primer amb `--dry-run`:

```bash
rsync -av --dry-run documents/ /mnt/backup/documents/
```

## Còpia remota amb SSH

```bash
rsync -av documents/ usuari@servidor:/backups/documents/
scp -r documents usuari@servidor:/backups/
```

La transferència ha d’anar protegida per SSH i el compte remot ha de tindre només els permisos necessaris.

## Sincronització i backup

La sincronització manté ubicacions semblants; un backup conserva punts de recuperació. Una eliminació o un xifrat pot sincronitzar-se, però un backup versionat permet tornar a un estat anterior.

| Sincronització | Backup |
| --- | --- |
| Prioritza que els espais siguen iguals | Prioritza recuperar estats |
| Pot replicar eliminacions | Conserva versions o còpies separades |
| Útil per treballar des de diversos equips | Necessari per respondre a incidències |

## Procediment segur

1. Identifica origen i destinació amb `pwd`, `ls` i `df -h`.
2. Fes una còpia de prova en una carpeta temporal.
3. Revisa l’eixida i la mida del resultat.
4. Simula una pèrdua en una màquina virtual o dades de prova.
5. Restaura i comprova continguts, permisos i noms.
6. Documenta l’ordre, la data i el resultat.

!!! warning "No treballes sobre dades reals"
    Les ordres de còpia i restauració poden sobreescriure fitxers. En la pràctica, usa una màquina virtual i directoris creats expressament.

[Següent: imatges de sistema](08-imatges-sistema.md) · [Pàgina principal de la UP2](../ut2-emmagatzematge.md)
