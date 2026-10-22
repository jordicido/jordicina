---
hide:
  - navigation
---

# Activitat 2. Gestionem un projecte amb Scrum, Kanban i Trello

## Finalitat

En aquesta activitat simulareu el funcionament d’un equip de desenvolupament de programari que treballa amb un enfocament àgil.

L’objectiu no és únicament aprendre a utilitzar **Trello**, sinó entendre com podem utilitzar un taulell visual per:

- organitzar un Product Backlog;
- definir i prioritzar històries d’usuari;
- seleccionar treball per a un Sprint;
- descompondre històries d’usuari en tasques tècniques;
- visualitzar l’estat real del treball;
- limitar el treball en curs;
- obtindre feedback;
- adaptar la planificació quan apareix informació nova.

## Criteris d’avaluació treballats

En aquesta activitat es treballa principalment el criteri següent:

| Criteri | Descripció |
| --- | --- |
| **RA1.g** | S’han identificat les característiques i els escenaris d’ús de les metodologies àgils de desenvolupament de programari. |

---

# 1. Cas d’estudi: DAWBooking

Formeu part d’un equip encarregat de desenvolupar **DAWBooking**, una aplicació web destinada a gestionar activitats organitzades pel centre educatiu.

El client ens proporciona inicialment les necessitats següents:

- L’alumnat ha de poder consultar les activitats disponibles.
- Cada activitat ha de mostrar informació com el nom, la data, l’hora i el nombre de places.
- L’alumnat ha de poder reservar una plaça en una activitat.
- L’alumnat ha de poder consultar les seues reserves.
- L’alumnat ha de poder cancel·lar una reserva.
- El professorat o personal responsable ha de poder crear noves activitats.
- L’alumnat ha de poder buscar o filtrar activitats.
- En un futur es podrien incorporar altres millores a l’aplicació.

El client **no ha especificat exactament com s’ha d’implementar cada funcionalitat**. Serà responsabilitat de l’equip analitzar les necessitats i transformar-les en treball que puga ser desenvolupat.

---

# 2. Organització de l’equip

Treballareu en equips de **2 o 3 persones**.

Durant la simulació existiran les responsabilitats següents:

- **Product Owner:** serà el professor. Representarà les necessitats del client i podrà modificar les prioritats del producte.
- **Scrum Master:** una persona de l’equip. Facilitarà el funcionament de la dinàmica i comprovarà que el taulell es manté actualitzat.
- **Developers:** totes les persones de l’equip participaran en la definició, desenvolupament i comprovació del treball.

El Scrum Master **no és el cap de l’equip** ni decideix què ha de fer cada persona.

---

# 3. Creació del taulell de Trello

Creeu un nou taulell de Trello amb el nom:

**DAWBooking – Equip X**

El taulell haurà de contindre, com a mínim, les columnes següents:

1. **Product Backlog**
2. **Sprint Backlog**
3. **En desenvolupament**
4. **En proves**
5. **Fet**

Aquestes columnes representaran el flux del treball durant el projecte.

---

# 4. Creació del Product Backlog

A partir de les necessitats indicades pel client, creeu entre **6 i 8 històries d’usuari**.

Utilitzeu el format:

> Com a **[tipus d’usuari]**\
> vull **[funcionalitat]**\
> per a **[benefici o necessitat]**.

Exemple:

> Com a alumne\
> vull consultar les activitats disponibles\
> per a poder decidir en quina activitat participar.

Cada història d’usuari serà una **targeta de Trello**.

## Informació de cada targeta

Cada targeta haurà d’incloure:

### Identificador i títol

Exemple:

**US01 · Consultar activitats**

### Història d’usuari

Inclosa en la descripció de la targeta.

### Prioritat

Utilitzeu etiquetes:

- 🔴 Alta
- 🟡 Mitjana
- 🟢 Baixa

### Criteris d’acceptació

Afegiu entre **2 i 4 condicions observables** que permeten decidir si la història està realment acabada.

Exemple:

**US03 · Reservar una activitat**

Criteris d’acceptació:

- Es pot seleccionar una activitat disponible.
- No és possible reservar si no queden places.
- La reserva queda registrada.
- L’usuari rep una confirmació.

---

# 5. Priorització del Product Backlog

Ordeneu les històries del **Product Backlog** de major a menor importància.

Imagineu que no disposeu de temps suficient per implementar totes les funcionalitats.

Pregunteu-vos:

- Quines funcionalitats aporten més valor?
- Quines són necessàries perquè el producte siga útil?
- Quines podrien esperar a una versió posterior?

La posició de les targetes dins del Product Backlog haurà de representar aquesta prioritat.

---

# 6. Estimació del treball

Assigneu una estimació aproximada a cada història utilitzant els valors:

**1 – 2 – 3 – 5 – 8 punts**

Els punts no representen hores exactes.

Representen una estimació relativa de:

- quantitat de treball;
- dificultat;
- incertesa;
- complexitat.

Incloeu l’estimació en la descripció de cada targeta.

---

# 7. Sprint Planning

Comença el **Sprint 1**.

El vostre equip té una capacitat màxima aproximada de:

**8 punts**

Seleccioneu del Product Backlog les històries que penseu que podeu completar.

Moveu-les de:

**Product Backlog → Sprint Backlog**

Definiu també un objectiu breu per al Sprint.

Exemple:

> **Sprint Goal:** aconseguir que l’alumnat puga consultar activitats i iniciar el procés de reserva.

---

# 8. De la història d’usuari a les tasques tècniques

Una història d’usuari descriu principalment **què necessita l’usuari i quin valor espera obtindre**.

Per poder implementar-la, l’equip de desenvolupament ha de decidir **com construir-la**.

Per cada història seleccionada per al Sprint, creeu dins de la targeta una checklist anomenada:

**Tasques tècniques**

Exemple:

### Història

> Com a alumne vull reservar una activitat per poder assegurar-me una plaça.

### Possibles tasques tècniques

- [ ] Dissenyar la interfície de reserva.
- [ ] Crear el formulari.
- [ ] Implementar la lògica de reserva.
- [ ] Comprovar les places disponibles.
- [ ] Guardar la reserva.
- [ ] Gestionar possibles errors.
- [ ] Realitzar les proves.

Observeu la diferència:

**Necessitat → Història d’usuari → Tasques tècniques**

La història explica principalment **què volem aconseguir**.

Les tasques expliquen **què haurà de fer tècnicament l’equip per aconseguir-ho**.

---

# 9. Desenvolupament del Sprint

Comenceu a treballar sobre les històries seleccionades.

En aquesta simulació **no serà necessari programar l’aplicació completa**.

Podeu representar el resultat mitjançant:

- wireframes;
- esquemes;
- prototips;
- dissenys de pantalles;
- descripcions de comportament.

Quan comenceu una història:

**Sprint Backlog → En desenvolupament**

Quan considereu que està implementada:

**En desenvolupament → En proves**

Una altra persona de l’equip haurà de comprovar els seus **criteris d’acceptació**.

Si els compleix:

**En proves → Fet**

Si no els compleix:

**En proves → En desenvolupament**

Una història no està acabada perquè estiga “quasi feta”.

Només passarà a **Fet** quan complisca els criteris establits.

---

# 10. Límit de treball en curs — WIP

Durant el Sprint aplicarem una regla pròpia de Kanban:

> **En la columna “En desenvolupament” no pot haver-hi més de 2 targetes simultàniament.**

Per tant, abans de començar una nova història haureu d’intentar acabar, provar o desbloquejar alguna de les que ja estan en desenvolupament.

L’objectiu és evitar tindre moltes coses començades però poques realment acabades.

---

# 11. Daily Scrum

Durant el Sprint el professor indicarà el moment de realitzar una breu **Daily Scrum**.

La reunió tindrà una duració màxima aproximada d’**1 minut per equip**.

Cada membre explicarà breument:

- Què estic fent?
- Què faré a continuació?
- Tinc algun impediment o bloqueig?

L’objectiu no és informar el professor, sinó que l’equip compartisca informació i detecte possibles problemes.

---

# 12. Sprint Review

Quan finalitze el Sprint, deixareu de treballar.

L’equip mostrarà al Product Owner:

- el taulell;
- les històries completades;
- els prototips o resultats generats.

El Product Owner comprovarà si les històries compleixen els seus criteris d’acceptació.

Només les històries correctament completades podran romandre en:

**Fet**

---

# 13. Feedback del client

Després de veure el primer increment del producte, el Product Owner proporcionarà **nova informació procedent dels usuaris**.

Aquesta informació podrà provocar:

- canvis de prioritat;
- noves necessitats;
- modificacions d’històries existents;
- aparició de noves històries.

Quan rebeu el feedback:

1. Analitzeu-lo.
2. Modifiqueu el Product Backlog.
3. Reordeneu les prioritats.
4. No modifiqueu arbitràriament allò que ja està acabat.
5. Utilitzeu la nova informació per decidir el treball futur.

L’objectiu és observar que el pla inicial **pot evolucionar quan apareix informació nova**.

---

# 14. Sprint Retrospective

Abans de començar un nou Sprint, realitzeu una retrospectiva molt breu.

Com a equip, responeu:

### Què ha funcionat bé?

### Què ens ha dificultat el treball?

### Què canviarem en el pròxim Sprint?

Heu d’acordar almenys **una millora concreta**.

Exemples:

- No començar tantes tasques simultàniament.
- Definir millor els criteris d’acceptació.
- Coordinar-nos abans de modificar una història.
- Dividir millor les tasques tècniques.
- Actualitzar Trello immediatament quan canvia l’estat del treball.

---

# 15. Sprint 2

A partir del Product Backlog actualitzat:

1. Torneu a seleccionar les històries prioritàries.
2. Respecteu la capacitat indicada pel professor.
3. Moveu-les al Sprint Backlog.
4. Reviseu les tasques tècniques.
5. Desenvolupeu un nou increment.
6. Manteniu actualitzat el taulell.
7. Respecteu el límit WIP.

L’objectiu és comprovar com el producte evoluciona mitjançant:

**Planificació → Desenvolupament → Proves → Feedback → Adaptació**

---

# 16. Evidències a entregar

Cada equip haurà d’entregar:

### 1. Enllaç o captura del taulell final de Trello

Ha de permetre observar:

- Product Backlog;
- Sprint Backlog;
- històries finalitzades;
- prioritats;
- estat de les diferents targetes.

### 2. Històries d’usuari

Com a mínim **6 històries correctament redactades**.

### 3. Criteris d’acceptació

Cada història seleccionada per a un Sprint haurà de disposar de criteris que permeten determinar si està acabada.

### 4. Tasques tècniques

Les històries desenvolupades hauran d’incloure una checklist amb les principals tasques necessàries per implementar-les.

### 5. Retrospectiva

Indiqueu breument:

- què ha funcionat;
- què ha dificultat el treball;
- quina millora heu decidit aplicar.

---

# 17. Reflexió individual

Finalment, cada alumne/a respondrà individualment les preguntes següents:

### 1.

Explica amb les teues paraules la diferència entre:

- Product Backlog;
- Sprint Backlog;
- història d’usuari;
- tasca tècnica.

### 2.

Explica un exemple de com el feedback del Product Owner ha provocat una modificació de la planificació.

### 3.

Per què no és convenient tindre moltes targetes simultàniament en la columna **En desenvolupament**?

### 4.

Indica almenys **tres característiques d’una metodologia àgil** que hages observat durant aquesta activitat.

### 5.

Imagina ara un projecte en què:

- els requisits són molt estables;
- existeix molta documentació obligatòria;
- qualsevol canvi necessita una aprovació formal;
- és difícil obtindre feedback freqüent dels usuaris.

Consideres que utilitzar Scrum seria necessàriament la millor opció?

**Justifica la resposta.**

---

# Què heu d’aprendre amb aquesta activitat?

En acabar hauríeu de ser capaços d’explicar que:

- Agile no significa treballar sense planificació.
- Un Product Backlog representa el treball potencial del producte i les seues prioritats.
- Un Sprint Backlog conté el treball seleccionat per al Sprint.
- Una història d’usuari expressa una necessitat o valor per a l’usuari.
- Una història es pot descompondre en tasques tècniques.
- Els criteris d’acceptació ajuden a determinar quan una funcionalitat està acabada.
- El treball pot visualitzar-se mitjançant un taulell.
- Limitar el treball en curs ajuda a concentrar l’esforç.
- Scrum treballa mitjançant inspecció i adaptació.
- El feedback pot modificar les prioritats futures.
- Un desenvolupament àgil busca generar valor en increments menuts.
- Agile o Scrum no són necessàriament la millor opció per a qualsevol projecte.

[Activitat 1. Del codi a l’execució](../activitat-1-codi-execucio.md) · [Pàgina de la UP2](../../up2-elements-eines.md)
