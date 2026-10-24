---
hide:
  - navigation
---
# Activitat 4. Imatge i recuperació completa amb Clonezilla

## Situació

L'empresa ja disposa de:

- redundància davant l'avaria d'un disc de dades;
- còpies de seguretat per recuperar fitxers.

Però ara es produeix una incidència diferent.

El disc que conté **Ubuntu i tota la configuració del servidor deixa de funcionar**.

Les dades del RAID continuen existint, però el servidor ja no pot iniciar-se.

L'objectiu serà preparar un mecanisme que permeta recuperar ràpidament el sistema complet.

## Objectius

En acabar l'activitat hauràs de ser capaç de:

- crear una imatge d'un sistema en funcionament;
- emmagatzemar-la en un dispositiu diferent;
- substituir virtualment un disc avariat;
- restaurar una imatge sobre un disc nou;
- comprovar que el sistema recuperat funciona;
- diferenciar una imatge del sistema d'una còpia de fitxers.

### Criteri treballat

Principalment:

- **CA 2.j:** crear i restaurar imatges de suport de sistemes en funcionament.

## Part 1. Preparació

Comprova que el servidor funciona correctament.

Verifica:

- que Ubuntu inicia;
- que el RAID està actiu;
- que `/srv/dades` és accessible;
- que el disc de còpies està disponible.

Anota quin dispositiu conté el sistema operatiu.

**És molt important identificar correctament els discos abans de continuar.**

## Part 2. Creació de la imatge

Apaga Ubuntu.

Connecta a la màquina virtual la ISO de **Clonezilla Live** proporcionada o indicada pel professor.

Inicia la màquina des de Clonezilla.

Crea una imatge del **disc que conté Ubuntu**.

La imatge s'haurà de guardar al disc destinat a còpies de seguretat.

No has de crear una imatge del RAID.

### Evidència 1

Documenta:

- disc d'origen;
- dispositiu on s'emmagatzema la imatge;
- nom assignat a la imatge;
- procés completat correctament.

## Part 3. Simulació de la fallada del disc del sistema

Una vegada creada la imatge:

1. apaga la màquina;
2. desconnecta de VirtualBox el disc original que conté Ubuntu;
3. **no l'esborres**, simplement deixa'l desconnectat;
4. crea un disc virtual nou de capacitat igual o superior;
5. connecta'l a la màquina virtual.

Intenta iniciar el servidor sense Clonezilla.

### Pregunta

**Què ocorre i per què?**

## Part 4. Restauració

Inicia novament des de Clonezilla.

Selecciona la imatge creada anteriorment i restaura-la sobre el disc nou.

Presta especial atenció a la selecció del disc de destinació.

Una selecció incorrecta podria destruir altres dades.

Quan finalitze:

1. apaga la màquina;
2. desconnecta la ISO de Clonezilla;
3. inicia normalment des del disc restaurat.

## Part 5. Verificació

Comprova que:

- Ubuntu inicia correctament;
- pots iniciar sessió;
- la configuració del sistema continua disponible;
- el RAID continua sent detectable;
- `/srv/dades` continua accessible;
- els fitxers creats en les activitats anteriors continuen existint.

Si el RAID no es munta automàticament, investiga com tornar a muntar-lo o assemblar-lo.

### Evidència 2

Mostra el servidor arrancat des del **disc restaurat** i l'accés a les dades del RAID.

---

# Informe final de la pràctica incremental

Després de completar les tres activitats, copia i completa la següent taula:

| Incident | Solució principal |
|---|---|
| Falla un disc de dades | |
| Un usuari elimina accidentalment una carpeta | |
| Un fitxer queda corrupte | |
| Falla completament el disc del sistema | |
| Necessitem recuperar Ubuntu amb tota la seua configuració | |

Finalment respon:

### 1. RAID i backup són el mateix?

Justifica la resposta.

### 2. Backup i imatge del sistema són el mateix?

Explica la diferència.

### 3. Quines tres capes de protecció hem implementat?

Completa:

```text
____________________
        ↓
Protecció davant l'avaria d'un disc

____________________
        ↓
Recuperació de fitxers i dades

____________________
        ↓
Recuperació completa del sistema
```

### 4. Quin sistema consideres més important?

No hi ha una única resposta correcta. Justifica-la segons el tipus d'incident davant del qual protegeix.

## Lliurament

Per a cada activitat entrega un document amb:

- captures o evidències sol·licitades;
- ordres principals utilitzades;
- breu explicació del que has realitzat;
- resposta a les preguntes plantejades;
- conclusions.

No és necessari capturar cada ordre executada. Les captures han de demostrar **els punts importants del procés i el resultat final**.

L'objectiu no és acumular captures, sinó demostrar que entens què has configurat, per què ho has fet i com actuaria el sistema davant d'una incidència real.

[Activitat 2. RAID](activitat-2-raid.md) · [Activitat 3. Còpies de seguretat i restauració](activitat-3-copies-restauracio.md) · [Pàgina principal de la UP2](../../ut2-emmagatzematge.md)
