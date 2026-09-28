---
hide:
  - navigation
---
# Activitat 2 · Organitzem el treball amb un calendari web

## Finalitat

En aquesta activitat treballaràs amb una aplicació real de calendari web desplegada en el teu
propi equip. La infraestructura ja està preparada: no hauràs d'instal·lar manualment Nextcloud
ni configurar una base de dades.

La teua faena serà posar el servei en marxa i, sobretot, configurar i utilitzar les funcionalitats
del calendari.

Treballarem principalment:

- **RA5.f** · Instal·lar una aplicació de calendari accessible des del navegador.
- **RA5.g** · Reconéixer i utilitzar les prestacions de les aplicacions instal·lades.

**Temps orientatiu:** 1 h 15 min – 1 h 30 min.

## 1. Posada en marxa

Descarrega el fitxer `compose.yaml` i situa't amb el terminal en la mateixa carpeta.

Executa:

```bash
docker compose up -d
```

Comprova l'estat dels contenidors:

```bash
docker compose ps
```

Quan el contenidor estiga funcionant, obri [http://localhost:8080](http://localhost:8080).

Credencials inicials:

| Camp | Valor |
|---|---|
| Usuari | `admin` |
| Contrasenya | `Aules2026!` |

La primera arrancada pot tardar uns minuts mentre Nextcloud completa la inicialització.

## 2. Preparació dels usuaris

Des del compte `admin`, crea aquests tres usuaris:

- `coordinador`
- `tecnic1`
- `tecnic2`

Assigna una contrasenya pròpia a cada compte.

A partir d'aquest moment, treballaràs principalment amb l'usuari `coordinador`.

## 3. Organització dels calendaris

Inicia sessió com a `coordinador` i crea els calendaris següents:

| Calendari | Ús |
|---|---|
| **Equip** | Reunions i treball compartit |
| **Lliuraments** | Terminis i dates importants |
| **Personal** | Organització individual |

Personalitza el color de cadascun perquè es distingisquen clarament.

Configura en **Equip** un recordatori per defecte de 15 minuts abans dels esdeveniments.

## 4. Esdeveniments

Has de crear els esdeveniments següents. Utilitza dates futures pròximes perquè pugues veure'ls
fàcilment en el calendari.

### A. Reunió inicial del projecte

Calendari: **Equip**

Configura:

- duració d'1 hora;
- ubicació: Sala de reunions;
- descripció breu amb l'objectiu de la reunió;
- afegeix `tecnic1` i `tecnic2` com a participants;
- recordatori de Nextcloud 30 minuts abans;
- marca l'esdeveniment com a ocupat.

### B. Daily de seguiment

Calendari: **Equip**

Crea un esdeveniment de 15 minuts que es repetisca:

- de dilluns a divendres;
- durant dues setmanes;
- a la mateixa hora;
- amb un recordatori de 5 minuts abans.

Comprova en la vista de calendari que apareixen totes les repeticions.

Després modifica només una ocurrència de la sèrie i canvia-la 30 minuts d'hora. La resta de
repeticions han de mantindre l'horari original.

### C. Revisió setmanal

Calendari: **Equip**

Crea una reunió recurrent:

- una vegada per setmana;
- durant 6 setmanes;
- duració de 45 minuts;
- amb ubicació;
- amb descripció;
- amb `tecnic1` com a participant.

### D. Manteniment mensual

Calendari: **Equip**

Crea un esdeveniment recurrent amb una regla més avançada:

- el segon dilluns de cada mes;
- durant 4 mesos;
- duració d'1 hora.

Afig un recordatori d'1 dia abans.

### E. Lliurament del projecte

Calendari: **Lliuraments**

Configura:

- esdeveniment de dia complet;
- descripció amb allò que s'ha d'entregar;
- recordatori 1 dia abans;
- un segon recordatori 2 hores abans, si l'aplicació ho permet.

### F. Reunió amb un client d'una altra zona horària

Calendari: **Equip**

Crea una reunió amb:

- hora d'inici en `Europe/Madrid`;
- una segona zona horària diferent per comprovar el selector;
- ubicació;
- descripció;
- recordatori.

L'objectiu és comprovar com representa Nextcloud un esdeveniment quan intervenen zones horàries.

## 5. Compartició i permisos

Comparteix:

- **Equip** amb `tecnic1` amb permís d'escriptura;
- **Lliuraments** amb `tecnic2` en mode només lectura.

Comprova els permisos:

1. Inicia sessió com a `tecnic1`.
2. Crea un esdeveniment nou dins del calendari **Equip**.
3. Edita un dels esdeveniments existents.
4. Inicia sessió com a `tecnic2`.
5. Comprova que pot consultar **Lliuraments**.
6. Intenta modificar-lo i comprova que no disposa de permís d'escriptura.

## 6. Publicació d'un calendari

Torna a entrar com a `coordinador`.

Publica el calendari **Lliuraments** mitjançant un enllaç públic de només lectura. Copia l'enllaç
i obri'l:

- en una finestra privada o d'incògnit, o
- en un altre navegador.

Comprova que es pot consultar sense iniciar sessió però no modificar.

## 7. Eliminació i recuperació

Elimina un esdeveniment que no siga important.

Accedeix a la paperera del calendari i:

1. localitza l'esdeveniment;
2. restaura'l;
3. comprova que torna a aparéixer al calendari.

## 8. Exportació i importació

Exporta el calendari **Lliuraments** en format iCalendar (`.ics`). Després:

1. crea un calendari nou anomenat **Importat**;
2. importa el fitxer `.ics`;
3. comprova que els esdeveniments apareixen correctament.

No elimines el calendari original.

## 9. Comprovació final

Quan acabes, hauràs de poder mostrar al professor:

| Element | Comprovació |
|---|---|
| Servei | Nextcloud funciona des del navegador |
| Usuaris | `admin`, `coordinador`, `tecnic1` i `tecnic2` |
| Calendaris | **Equip**, **Lliuraments** i **Personal** |
| Esdeveniments | Puntuals, de dia complet i recurrents |
| Recurrència | Diària, setmanal i mensual |
| Recordatoris | Diferents configuracions |
| Participants | Usuaris afegits a reunions |
| Compartició | Escriptura i només lectura |
| Publicació | Enllaç públic de calendari |
| Recuperació | Esdeveniment restaurat de la paperera |
| Interoperabilitat | Exportació i importació `.ics` |

## 10. Lliurament

Entrega un PDF de màxim 3 pàgines amb aquestes evidències:

1. captura de `docker compose ps`;
2. captura de la vista mensual o setmanal on es vegen diversos esdeveniments;
3. captura de la configuració d'un esdeveniment recurrent;
4. captura d'un calendari compartit;
5. captura del calendari públic obert sense iniciar sessió;
6. resposta breu a aquesta pregunta:

> Quin avantatge té allotjar un calendari web en infraestructura pròpia i quin inconvenient té
> respecte d'un servei gestionat com Google Calendar o Outlook?

No cal documentar pas a pas totes les accions.

## Ajuda

### Veure l'estat

```bash
docker compose ps
```

### Veure els logs

```bash
docker compose logs -f
```

### Parar el servei

```bash
docker compose down
```

### Tornar a iniciar-lo

```bash
docker compose up -d
```

### Començar completament de zero

Aquesta ordre elimina usuaris, calendaris, esdeveniments i configuració:

```bash
docker compose down -v
docker compose up -d
```

[Anterior: webmail de l'empresa](activitat-1-webmail.md) · [Índex de la UP1](../index.md)
