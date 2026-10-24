---
hide:
  - navigation
---
# Activitat 2. Tolerància a fallades amb RAID

## Situació

L'empresa ha detectat que totes les seues dades estan emmagatzemades en un únic disc. Si este disc falla, el servidor continuarà funcionant, però la informació deixarà d'estar disponible.

S'ha decidit incorporar redundància mitjançant un sistema **RAID 1**.

## Objectius

En acabar l'activitat hauràs de ser capaç de:

- afegir dispositius d'emmagatzematge a una màquina virtual;
- identificar correctament els discos des de Linux;
- crear i gestionar un RAID per programari;
- comprovar l'estat d'un RAID;
- simular l'avaria d'un disc;
- comprovar que les dades continuen disponibles;
- substituir un disc avariat i reconstruir el RAID;
- diferenciar redundància de còpia de seguretat.

### Criteris treballats

Principalment:

- **CA 2.b:** tindre en compte factors com el rendiment, disponibilitat i accessibilitat.
- **CA 2.d:** descriure tecnologies d'emmagatzematge redundant i distribuït.

## Part 1. Preparació de l'entorn

Importa l'OVA proporcionada pel professor.

Abans d'iniciar Ubuntu:

1. Afig **dos discos virtuals nous de 4 GB**.
2. Comprova que els dos discos estan connectats correctament a la màquina.
3. Inicia Ubuntu.

Utilitza les ferramentes del sistema per identificar els dispositius.

Comprova, com a mínim:

- quin és el disc que conté Ubuntu;
- quins són els dos discos que acabes d'afegir;
- la capacitat de cadascun.

Una ferramenta útil serà:

```bash
lsblk
```

### Evidència 1

Inclou una captura o la informació necessària per demostrar que Ubuntu detecta correctament els tres discos.

Explica breument quin dispositiu correspon a cada disc.

## Part 2. Creació del RAID

Utilitza els dos discos nous per crear un **RAID 1 per programari**.

El dispositiu RAID resultant haurà d'utilitzar-se per emmagatzemar les dades de l'empresa.

Una vegada creat:

1. comprova que el RAID està actiu;
2. crea un sistema de fitxers sobre el RAID;
3. crea el directori:

```text
/srv/dades
```

4. munta el RAID en este directori;
5. comprova que pots crear i llegir fitxers.

Pots consultar ferramentes com:

```text
mdadm
lsblk
blkid
mount
df
```

### Evidència 2

Mostra:

- els discos que formen el RAID;
- l'estat del RAID;
- el punt de muntatge;
- el sistema de fitxers utilitzat.

## Part 3. Dades de prova

Crea la següent estructura:

```text
/srv/dades/
├── clients/
├── factures/
├── personal/
└── projectes/
```

Crea almenys **dos fitxers de prova en cada directori**.

Els fitxers han de contindre informació identificable per poder comprovar posteriorment si les dades s'han conservat.

## Part 4. Simulació d'una avaria

Ara simularem una avaria real.

Marca un dels discos del RAID com a defectuós i elimina'l temporalment del conjunt RAID.

Comprova:

1. l'estat del RAID;
2. si `/srv/dades` continua accessible;
3. si els fitxers continuen podent-se llegir.

### Evidència 3

Mostra l'estat degradat del RAID i demostra que les dades continuen disponibles.

Respon:

**Per què podem continuar accedint a les dades encara que un dels discos haja fallat?**

## Part 5. Reconstrucció

Simula la substitució del disc defectuós.

Pots reutilitzar-lo després d'eliminar la informació RAID anterior o crear un disc virtual nou de la mateixa capacitat.

Afig el disc al RAID i observa el procés de reconstrucció.

Comprova finalment que els dos discos tornen a estar operatius.

### Evidència 4

Mostra l'estat final del RAID.

## Reflexió final

Respon breument:

1. Què hauria passat si haguérem utilitzat un únic disc?
2. Quina diferència hi ha entre RAID 0 i RAID 1?
3. RAID 1 duplica les dades. Podem considerar-lo una còpia de seguretat?
4. Què passaria si un usuari executara accidentalment:

```bash
rm -rf /srv/dades/projectes
```

No executes encara esta última ordre.

## Abans de continuar

No elimines la màquina virtual ni el RAID.

La següent activitat començarà utilitzant **este mateix servidor i les dades que acabes de crear**.

[Activitat 3. Còpies de seguretat i restauració](activitat-3-copies-restauracio.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
