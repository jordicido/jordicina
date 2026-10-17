---
hide:
  - navigation
---
# Activitat 3. Còpies de seguretat i restauració

## Finalitat

Realitzar còpies completes i incrementals, restaurar-les, provar `rsync`, utilitzar un mitjà remot o extraïble i redactar una política de còpies. Treballareu **RA2.e**, **RA2.f**, **RA2.g**, **RA2.h** i **RA2.i**.

## Preparació

Feu la pràctica en una màquina virtual o en un directori de proves:

```bash
mkdir -p ~/dades/{documents,projectes,fotos} ~/backups
echo "Factura 001" > ~/dades/documents/factura001.txt
echo "Projecte inicial" > ~/dades/projectes/projecte.txt
echo "Informació de prova" > ~/dades/documents/informe.txt
find ~/dades -type f
```

## Part A. Còpia completa

```bash
tar --listed-incremental=~/backups/snapshot.snar \
  -czvf ~/backups/backup_complet.tar.gz ~/dades
ls -lh ~/backups
```

## Part B. Canvis i incrementals

```bash
echo "Nova línia" >> ~/dades/projectes/projecte.txt
echo "Factura 002" > ~/dades/documents/factura002.txt

tar --listed-incremental=~/backups/snapshot.snar \
  -czvf ~/backups/backup_incremental_01.tar.gz ~/dades

echo "Nou document" > ~/dades/documents/document_nou.txt
tar --listed-incremental=~/backups/snapshot.snar \
  -czvf ~/backups/backup_incremental_02.tar.gz ~/dades
ls -lh ~/backups
```

Expliqueu per què les còpies incrementals poden ocupar menys espai que la completa i quin ordre caldria seguir per restaurar l’estat final.

## Part C. Pèrdua i restauració

Comproveu primer que els tres arxius existeixen. En la màquina de proves, traslladeu les dades i restaureu en una carpeta nova:

```bash
mv ~/dades ~/dades_perdudes
mkdir ~/restauracio
cd ~/restauracio
tar --listed-incremental=/dev/null -xzvf ~/backups/backup_complet.tar.gz
tar --listed-incremental=/dev/null -xzvf ~/backups/backup_incremental_01.tar.gz
tar --listed-incremental=/dev/null -xzvf ~/backups/backup_incremental_02.tar.gz
find . -type f
```

Comproveu contingut, noms, permisos i les modificacions esperades.

## Part D. `rsync`

```bash
mkdir -p ~/backup_rsync
rsync -av --dry-run ~/restauracio/ ~/backup_rsync/
rsync -av ~/restauracio/ ~/backup_rsync/
echo "Canvi posterior" >> ~/restauracio/dades/projectes/projecte.txt
rsync -av ~/restauracio/ ~/backup_rsync/
```

Descriviu què transfereix principalment la segona execució i per què sincronització i backup no són exactament el mateix.

## Part E. Còpia remota i extraïble

Si teniu una segona màquina amb SSH:

```bash
rsync -av ~/restauracio/ usuari@IP_SERVIDOR:/home/usuari/backup/
```

Si no hi ha una màquina remota, utilitzeu un segon disc virtual o una carpeta compartida que represente la destinació. Per a un suport extraïble:

```bash
cp ~/backups/backup_complet.tar.gz /mnt/usb/
sync
```

Expulseu-lo correctament. Expliqueu com el xifraríeu i com el guardaríeu fora de la ubicació principal.

## Part F. Política de còpies

Redacteu una política per a un ordinador amb documents importants:

| Element | Decisió |
| --- | --- |
| Dades que es copiaran | |
| Tipus de còpia | |
| Freqüència | |
| Retenció i rotació | |
| Còpia local | |
| Còpia externa | |
| Mitjà extraïble | |
| RPO i RTO | |
| Procediment de restauració | |
| Prova periòdica | |

La proposta ha de complir, si és possible, la regla 3-2-1.

## Lliurament

Incloeu l’esquema de la política, captures o eixides de la còpia completa, les incrementals, la restauració, `rsync`, la còpia remota o simulada i el mitjà extraïble. Afegiu una breu reflexió sobre què passaria si la còpia local també quedara xifrada.

[Activitat 4. Clonezilla](activitat-4-clonezilla.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
