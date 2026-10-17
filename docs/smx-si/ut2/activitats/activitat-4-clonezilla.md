---
hide:
  - navigation
---
# Activitat 4. Creació i restauració d’una imatge amb Clonezilla

## Finalitat

Crear una imatge completa d’un sistema en una màquina virtual, modificar-lo, restaurar la imatge i demostrar que l’estat original s’ha recuperat. Treballareu **RA2.j**.

## Preparació

Utilitzeu una màquina virtual Ubuntu o Windows amb aplicacions, configuració personalitzada i alguns documents. Creeu un document identificable, instal·leu una aplicació o canvieu una configuració. Aquest serà l’estat que conservareu.

Necessitareu una destinació separada: segon disc virtual, USB o recurs de xarxa. No utilitzeu el disc de producció d’un ordinador real.

## Part A. Crear la imatge

1. Configureu la màquina i comproveu que arranca.
2. Arranqueu des de la ISO oficial de Clonezilla.
3. Seleccioneu `device-image`.
4. Seleccioneu la ubicació, com `local_dev` per a un segon disc.
5. Trieu `savedisk` per guardar el disc complet.
6. Assigneu un nom descriptiu, com `ubuntu_smx_up2`.
7. Reviseu dues vegades el disc origen i confirmeu.
8. Comproveu que la imatge existeix a la destinació.

## Part B. Modificar el sistema

Arranqueu el sistema normalment i feu canvis visibles:

- elimineu el document inicial;
- canvieu el fons o una configuració;
- desinstal·leu l’aplicació;
- creeu fitxers nous.

Anoteu els canvis per poder comprovar després que han desaparegut.

## Part C. Restaurar

1. Torneu a arrencar Clonezilla.
2. Seleccioneu `device-image` i localitzeu `ubuntu_smx_up2`.
3. Trieu `restoredisk`.
4. Seleccioneu el disc de destinació.
5. Confirmeu només després de verificar la destinació.
6. Espereu la finalització i reinicieu.

!!! danger "La restauració sobreescriu"
    La imatge reemplaçarà el contingut actual del disc de destinació. Practiqueu amb una màquina virtual i conserveu una còpia de les dades necessàries.

## Part D. Verificació

Comproveu que el sistema arranca, que el document original torna a existir, que la configuració i l’aplicació s’han recuperat i que els canvis posteriors han desaparegut.

## Informe

Incloeu:

1. estat inicial i configuració de la màquina;
2. destinació i nom de la imatge;
3. passos de creació;
4. canvis realitzats després;
5. passos de restauració;
6. resultat i temps aproximat;
7. diferència entre imatge i còpia de fitxers;
8. una mesura que reduiria el risc de restaurar el disc equivocat.

[Autoavaluació](autoavaluacio.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
