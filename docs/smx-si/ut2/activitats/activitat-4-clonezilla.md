---
hide:
  - navigation
---
# Activitat 4. Imatge i recuperació completa amb Clonezilla

## 0. Presentació de la pràctica, objectius i CA

En les activitats anteriors has preparat tres capes de protecció per a una mateixa màquina virtual:

| Tècnica | Què protegeix principalment? | Què permet recuperar? |
|---|---|---|
| **RAID 1** | La disponibilitat davant la fallada d'un membre | Les dades continuen accessibles si falla un dels discos del RAID |
| **Còpies de seguretat** | La pèrdua o el canvi accidental de fitxers | Fitxers i carpetes d'un moment anterior |
| **Imatge del sistema** | La fallada completa del disc del sistema | Ubuntu, els programes, els usuaris i la configuració del sistema |

Ara imagina que falla completament el disc on està instal·lat Ubuntu. Els dos discos del RAID 1 i el disc de còpies estan en altres dispositius i continuen disponibles, però la màquina no pot arrancar. En esta pràctica crearàs una imatge del disc del sistema amb **Clonezilla Live** i la restauraràs sobre un disc virtual nou.

!!! info "Què és una imatge de sistema?"
    Una imatge és una còpia organitzada del disc o de les particions d'un sistema. Pot incloure el sistema operatiu, els programes, els usuaris, la configuració, les particions i la informació necessària per a arrancar. En restaurar-la, tornes el disc a l'estat que tenia quan es va crear la imatge.

Una **còpia de fitxers** guarda documents o carpetes i és adequada per recuperar una dada concreta. Una **imatge** conserva l'estructura del sistema i és adequada per recuperar l'entorn complet. Una **clonació directa** copia un disc directament sobre un altre disc, sense crear necessàriament un repositori amb una imatge que pugues conservar i seleccionar més tard.

```text
Disc Ubuntu de 25 GB  ──crear imatge──>  Disc de còpies
       (origen)                         smx2-ubuntu-up2
                                            │
                                            └──restaurar──> Disc nou de 30 GB
                                                           (sistema recuperat)
```

En acabar hauràs de ser capaç de:

- explicar la diferència entre RAID, còpia de fitxers i imatge del sistema;
- crear una imatge completa del disc Ubuntu des de Clonezilla Live;
- guardar-la en un dispositiu separat sense destruir les còpies anteriors;
- simular la fallada del disc del sistema i restaurar la imatge en un disc nou;
- verificar que Ubuntu, el RAID i les dades tornen a estar disponibles.

El criteri principal treballat és el **CA 2.j: crear i restaurar imatges de suport de sistemes en funcionament**.

## 1. Comprovació inicial: reutilitzar la VM

!!! warning "Continuïtat de les activitats"
    Utilitza **la mateixa màquina virtual de les activitats 2 i 3**. No instal·les un Ubuntu nou ni importes una màquina diferent. Conserva els dos discos de 4 GB del RAID 1, el disc de còpies i les dades que ja vas crear.

Inicia Ubuntu i entra amb l'usuari `alumne` i la contrasenya `alumne`. La distribució habitual dels dispositius és esta:

| Element | Configuració habitual | Ús |
|---|---|---|
| Disc Ubuntu | `/dev/sda`, 25 GB | Sistema operatiu i configuració |
| Membre 1 del RAID 1 | `/dev/sdb`, 4 GB | Dades |
| Membre 2 del RAID 1 | `/dev/sdc`, 4 GB | Dades |
| Dispositiu RAID | `/dev/md0` | Muntat en `/srv/dades` |
| Disc de còpies | `/dev/sdd`, 16 GB, sovint `/dev/sdd1` | Muntat en `/mnt/backup` |

Els noms `/dev/sda`, `/dev/sdb`, `/dev/sdc` i `/dev/sdd` són només exemples. Poden canviar quan desconnectes, afiges o restaures discos. Abans de qualsevol operació que puga esborrar dades, comprova el dispositiu per la **capacitat, les particions i la funció**; no confies només en el nom.

Executa:

```bash
lsblk
findmnt /
cat /proc/mdstat
findmnt /srv/dades
tree /srv/dades
findmnt /mnt/backup
```

Has de poder identificar el disc que conté `/`, veure el RAID actiu, accedir a `/srv/dades` i localitzar el disc de còpies. Si el disc de còpies existeix però està desmuntat, munta'l seguint la configuració de l'Activitat 3, sense formatar-lo ni modificar-ne les particions.

### Evidència 1. Estat inicial i identificació dels discos

Inclou una captura o un registre on es veja la identificació del disc del sistema, dels dos membres del RAID i del disc de còpies, amb el RAID funcional i `/srv/dades` accessible. No cal capturar cada ordre per separat.

## 2. Espai disponible al disc de còpies

Comprova l'espai abans de començar. El disc de còpies ja conté les còpies de l'Activitat 3:

```bash
df -h /
df -h /mnt/backup
```

Clonezilla pot comprimir la imatge i, segons el sistema de fitxers, guardar només els blocs utilitzats. Tot i això, **no es pot garantir** que els 16 GB del disc de còpies siguen suficients per a una imatge d'un disc de 25 GB. Mira l'espai disponible i avisa el professor si no n'hi ha prou. En eixe cas, utilitza el suport de destinació més gran que t'indique, per exemple un VDI nou de 32 GB, però sense destruir ni tornar a formatar el disc de còpies existent.

!!! warning "Conserva les còpies de l'Activitat 3"
    No tornes a formatar el disc de còpies, no l'inicialitzes de nou i no esborres les còpies que ja hi ha. La imatge s'ha de guardar en un directori nou del suport, sense sobreescriure els backups existents.

!!! question "Pensa-ho"
    Per què no és segur guardar la imatge al mateix disc d'Ubuntu que vols recuperar?

## 3. Crear una marca de verificació

Abans de crear la imatge, crea un fitxer que et permeta comprovar quin moment del sistema has recuperat:

```bash
echo "ESTAT ABANS DE LA IMATGE" > ~/estat-sistema.txt
cat ~/estat-sistema.txt
```

La imatge ha de conservar este fitxer amb el text anterior. Més avant modificaràs el fitxer i, després de la restauració, comprovaràs que reapareix el contingut corresponent al moment en què es va crear la imatge.

## 4. Connectar Clonezilla Live

Apaga Ubuntu de manera ordenada:

```bash
sudo poweroff
```

En VirtualBox:

1. Obri **Configuració** de la mateixa màquina virtual.
2. Entra en **Emmagatzematge**.
3. Selecciona la unitat òptica i associa-hi la ISO de **Clonezilla Live**.
4. Conserva connectats el disc Ubuntu, els dos discos del RAID i el disc de còpies.
5. Inicia la màquina i comprova que arranca des de la ISO.

Clonezilla Live **no s'instal·la dins d'Ubuntu**. És un sistema extern que s'inicia amb la màquina apagada perquè el disc del sistema no estiga en ús mentre es copia.

## 5. Arrancar Clonezilla

Quan aparega el menú inicial, segueix esta seqüència:

1. Selecciona `Clonezilla live (Default settings)`.
2. Tria l'idioma.
3. Mantín les opcions predeterminades del teclat, si no necessites canviar-les.
4. Selecciona `Start Clonezilla`.

No cal fer una captura de cada menú. Para atenció als noms, a les capacitats i a la funció dels discos quan Clonezilla els mostre.

## 6. Elegir el tipus d'operació

Clonezilla ofereix, entre altres, estes dos modalitats:

- `device-image`: crea o restaura una imatge guardada en un repositori;
- `device-device`: copia o clona directament un dispositiu sobre un altre.

En esta pràctica selecciona **`device-image`**, perquè guardaràs la imatge al disc de còpies i després la seleccionaràs per restaurar-la en un disc nou.

!!! question "Investiga"
    Quan convé utilitzar `device-device` i quan convé utilitzar `device-image`? Relaciona la resposta amb la possibilitat de conservar diverses imatges i amb el risc d'escriure directament sobre un altre disc.

## 7. Elegir el repositori de la imatge

Selecciona **`local_dev`**. Esta opció indica que el repositori està en un dispositiu local separat de l'ordinador.

Quan Clonezilla demane quin dispositiu vols muntar:

1. Localitza la partició del disc de còpies, habitualment `/dev/sdd1`.
2. Confirma-la per la capacitat, les particions i la funció que has comprovat amb `lsblk`; no confies cegament en `/dev/sdd1`.
3. Quan el sistema demane continuar i muntar el dispositiu, accepta només després de revisar que és el disc de còpies.
4. Selecciona l'arrel (`/`) d'eixa partició com a ubicació del repositori. Allí crearàs el directori `smx2-ubuntu-up2`, sense seleccionar ni sobreescriure els directoris de còpies de l'Activitat 3.

En Ubuntu, el disc es veu habitualment muntat en `/mnt/backup`. En Clonezilla, el repositori local acostuma a aparéixer muntat en `/home/partimag`. Són dos punts de muntatge diferents per al mateix suport; no vol dir que hages de crear un disc nou.

!!! danger "No tries un disc equivocat"
    No selecciones el disc Ubuntu ni cap dels dos discos de 4 GB del RAID com a repositori. Revisa sempre la capacitat i la funció. Escriure en un d'estos discos podria destruir el sistema o les dades.

## 8. Crear la imatge completa

En la selecció del mode, tria **`Beginner`**. Este mode mostra les opcions necessàries sense afegir complexitat innecessària.

Clonezilla diferencia:

- `savedisk`: imatge de tot un disc, amb la seua taula de particions i la informació d'arrancada;
- `saveparts`: imatge només d'una o més particions seleccionades.

Selecciona **`savedisk`**, perquè vols recuperar el disc Ubuntu complet.

Completa el procés així:

1. Escriu el nom de la imatge: **`smx2-ubuntu-up2`**.
2. Selecciona com a origen el disc de 25 GB que conté Ubuntu, habitualment `/dev/sda`. Verifica que no és un membre del RAID ni el disc de còpies.
3. Mantín les opcions recomanades per al mode principiant.
4. Quan Clonezilla t'oferisca verificar la imatge després de crear-la, activa la verificació.
5. Revisa abans de confirmar: origen de 25 GB, repositori del disc de còpies i nom de la imatge.
6. Accepta les confirmacions i espera que el procés finalitze correctament.

!!! tip "Pista"
    Si dubtes entre dos discos, para el procés i torna a comprovar `lsblk` i les capacitats. Una imatge de sistema sempre ha de tindre un origen i una destinació clarament identificats.

No cal fer una imatge completa per recuperar un únic document: per a això és més adequat recuperar el fitxer des de les còpies de l'Activitat 3. La imatge és útil quan cal recuperar el sistema operatiu i la seua configuració.

### Evidència 2. Imatge de Clonezilla creada correctament

Documenta el nom `smx2-ubuntu-up2`, el disc Ubuntu de 25 GB com a origen, el repositori del disc de còpies i la finalització correcta de la creació i, si és possible, de la verificació.

## 9. Comprovar la imatge guardada

Quan Clonezilla haja acabat, apaga'l, retira la ISO de la unitat òptica en VirtualBox i arranca de nou la mateixa VM des d'Ubuntu.

Comprova que el disc de còpies està muntat i localitza la imatge:

```bash
findmnt /mnt/backup
ls -lh /mnt/backup
sudo ls -lh /mnt/backup/smx2-ubuntu-up2/
```

Clonezilla sol guardar una imatge com un **directori amb diversos fitxers**, no necessàriament com un únic fitxer `.img`. No canvies el nom dels fitxers ni els mogues fora del directori de la imatge.

### Evidència 3. Imatge guardada al disc de còpies

Mostra la ubicació `/mnt/backup/smx2-ubuntu-up2/` i els fitxers que conté. En la teua explicació indica per què eixe directori està en el disc de còpies i no en el disc Ubuntu.

## 10. Modificar el sistema després de la imatge

Ara modifica expressament la marca, després d'haver creat la imatge:

```bash
echo "ESTAT DESPRES DE LA IMATGE" > ~/estat-sistema.txt
cat ~/estat-sistema.txt
```

!!! question "Fes una predicció"
    Quin text esperes trobar després de restaurar la imatge? Explica per què la restauració no hauria de conservar este segon canvi.

## 11. Simular la fallada completa del disc del sistema

Apaga Ubuntu:

```bash
sudo poweroff
```

En VirtualBox, simula la fallada amb molta cura:

1. Desconnecta el VDI original de 25 GB que conté Ubuntu, però **no n'esborrar l'arxiu**.
2. Crea un disc VDI nou de **30 GB**, de reserva dinàmica.
3. Connecta el disc nou al mateix port SATA que ocupava l'original, si és possible.
4. Conserva connectats i intactes els dos discos de 4 GB del RAID i el disc de còpies.
5. Intenta arrancar la VM **sense la ISO de Clonezilla**.

El disc nou està buit, per tant és normal que no puga arrancar Ubuntu. Documenta el missatge o el comportament que observes.

!!! danger "Desconnectar no és eliminar el VDI"
    En esta simulació només has de llevar el disc original de la configuració de la VM. **No elimines l'arxiu VDI original**: encara conté el sistema que estàs simulant que ha fallat i pot ser necessari per tornar arrere.

### Evidència 4. Fallada d'arrancada amb el disc nou buit

Mostra que la VM no arranca Ubuntu amb el disc nou buit i explica que la fallada afecta el disc del sistema, però no implica que les dades dels discos del RAID hagen desaparegut.

## 12. Restaurar la imatge al disc nou

Connecta de nou la ISO de Clonezilla Live i arranca des d'ella. Segueix esta ruta:

1. `Start Clonezilla`.
2. `device-image`.
3. `local_dev`.
4. Selecciona la partició del disc de còpies, verificant-la per capacitat i funció.
5. Selecciona la imatge `smx2-ubuntu-up2`.
6. Tria `Beginner`.
7. Selecciona **`restoredisk`**.
8. Selecciona com a destinació el disc VDI nou de **30 GB**.

!!! danger "Restauració destructiva"
    La restauració sobreescriu el disc de destinació. Verifica la capacitat i la funció del disc nou abans d'acceptar. No selecciones cap membre de 4 GB del RAID ni el disc de còpies de 16 GB. No confies cegament que el disc nou siga `/dev/sda`: els noms poden haver canviat.

Mantín les opcions del mode principiant i activa la verificació de la imatge si Clonezilla l'oferix. Revisa totes les confirmacions abans d'acceptar i espera que la restauració acabe sense errors.

El disc original tenia 25 GB i el nou en té 30 GB. Després de restaurar, les particions poden conservar la mida original i quedar espai sense assignar. No és necessari redimensionar-les per completar esta pràctica.

### Evidència 5. Restauració de la imatge acabada

Documenta que Clonezilla ha acabat la restauració i que el disc de destinació seleccionat era el VDI nou de 30 GB. Explica com has comprovat que no has seleccionat ni el RAID ni el disc de còpies.

## 13. Arrancar el sistema recuperat

Apaga Clonezilla, retira la ISO de VirtualBox i arranca la VM des del disc restaurat. Inicia sessió amb `alumne` / `alumne` i executa:

```bash
lsblk
findmnt /
cat ~/estat-sistema.txt
```

Comprova que el sistema arranca des del disc nou i que el fitxer mostra:

```text
ESTAT ABANS DE LA IMATGE
```

El text posterior no apareix perquè la restauració ha tornat el sistema a l'instant en què es va crear la imatge.

!!! question "Interpreta el resultat"
    Quin instant temporal representa la imatge restaurada? Quins canvis fets després de crear-la no pot recuperar una imatge que no s'ha tornat a actualitzar?

## 14. Verificar el RAID i les dades

Ara comprova que recuperar el disc Ubuntu no ha implicat recrear ni formatar el RAID:

```bash
cat /proc/mdstat
findmnt /srv/dades
tree /srv/dades
```

No tornes a crear el RAID ni formates `/dev/sdb`, `/dev/sdc` o `/dev/md0`. Si `/srv/dades` no està muntat, avança de manera progressiva:

```bash
lsblk
sudo mdadm --detail /dev/md0
```

Només després de comprovar que el dispositiu i la configuració són els esperats, i seguint la configuració de la pràctica, pots provar:

```bash
sudo mdadm --assemble --scan
sudo mount /srv/dades
```

Les ordres són orientatives: la ruta, el nom del dispositiu i la configuració de muntatge poden variar. Si no tens clar el resultat d'una ordre, para i consulta el professor abans d'escriure en cap disc.

### Evidència 6. Ubuntu, RAID i dades recuperats

Mostra Ubuntu arrancat des del disc nou, el RAID actiu, `/srv/dades` muntat i els fitxers de les activitats anteriors accessibles. Explica breument què s'ha recuperat amb la imatge i què ja es conservava en els discos del RAID.

## 15. Comparació de mecanismes i preguntes finals

Completa la taula amb el mecanisme principal que utilitzaries en cada incident. Si hi ha més d'una mesura possible, indica quina resol directament el problema i justifica-la.

| Incident | Mecanisme principal |
|---|---|
| Falla un disc del RAID | |
| S'esborra accidentalment una carpeta | |
| Es corromp un fitxer | |
| Falla completament el disc Ubuntu | |
| Cal recuperar Ubuntu i tota la seua configuració | |
| Un ransomware obliga a recuperar versions anteriors | |

Respon també:

1. RAID i còpia de seguretat són el mateix? Per què?
2. En què es diferencia una còpia de fitxers d'una imatge del sistema?
3. Quines tres capes de protecció s'han implementat en la seqüència d'activitats?
4. Per què Clonezilla no substituïx les còpies freqüents de fitxers?
5. Si crees una imatge dilluns i el disc falla divendres, què passa amb els canvis posteriors a la imatge?
6. Quin mecanisme consideres més important segons el tipus d'incident? Justifica-ho.

## 16. Conclusions i lliurament

En la conclusió, explica què has aprés sobre la diferència entre disponibilitat, recuperació de dades i recuperació del sistema. Comenta també quin risc té restaurar sobre el disc equivocat i quina comprovació faries sempre abans d'acceptar una operació destructiva.

L'informe ha d'incloure:

- les sis evidències numerades de la pràctica;
- les ordres principals i el resultat que demostra cada comprovació;
- les respostes a les preguntes i la taula comparativa;
- una explicació breu de les decisions i les incidències trobades;
- les conclusions personals.

No cal fer una captura de cada menú de Clonezilla. Les captures han de demostrar els passos importants, la selecció segura dels discos i els resultats finals.

En acabar, conserva la mateixa màquina virtual i tots els discos: el VDI original de 25 GB, el VDI nou de 30 GB, els dos discos del RAID i el disc de còpies. No esborres ni reformates cap suport.

[Activitat 2. RAID](activitat-2-raid.md) · [Activitat 3. Còpies de seguretat i restauració](activitat-3-copies-restauracio.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
