---
hide:
  - navigation
---

# Activitat 4.1 — Construïm una pàgina web amb HTML i CSS

**Mòdul:** Aplicacions Web · 2n d'SMX  
**Unitat:** UP4. Gestors de continguts web  
**Modalitat:** Individual  
**Tipus:** Pràctica guiada

## L'encàrrec

Construiràs una **pàgina web d'una sola pàgina** utilitzant HTML i CSS, sense WordPress ni editors visuals.

**La temàtica és lliure:** pot ser sobre tecnologia, videojocs, música, esports, una afició, una botiga fictícia, un servei o qualsevol altra idea adequada. Cada alumne crearà una web diferent, però tots treballareu els mateixos elements d'HTML i CSS.

Al final has de tindre una pàgina amb menú, presentació, informació, targetes, taula, formulari i peu de pàgina. **No has de redactar cap memòria ni respondre preguntes per escrit:** el resultat és la web que construïsques.

!!! info "Com treballarem"
    - Comença amb el projecte inicial i seguix les parts en ordre.
    - Guarda els canvis i refresca el navegador després de cada pas.
    - No copies una pàgina completa d'Internet: utilitza els exemples per entendre i escriure el teu codi.
    - Quan arribes a una validació, avisa el professor i mostra la pàgina **en funcionament**.

## Preparació

1. Descarrega el **projecte inicial**: [Projecte inicial A4.1](../recursos/a4-1-projecte-inicial.zip).
2. Descomprimeix-lo i obri la carpeta amb Visual Studio Code.
3. Comprova els fitxers de partida:

   ```text
   activitat-4-1/
   ├── index.html
   ├── css/
   │   └── estils.css
   └── img/
       └── exemple.svg
   ```

4. Obri `index.html` al navegador i comprova que es veu correctament.
5. Tria la temàtica del teu web i un nom breu per a la pàgina.

!!! tip "No veig els canvis?"
    Comprova que has guardat els fitxers, que has actualitzat el navegador i que estàs editant el mateix projecte que tens obert.

---

## Part 1. Comencem amb HTML

### 1. Capçalera i menú

En `index.html`:

1. Modifica el títol del navegador (`<title>`) i el títol principal que apareix al web.
2. Completa la capçalera amb el nom del teu projecte.
3. Crea un menú de navegació amb enllaços a **Inici**, **Sobre el projecte**, **Galeria** i **Contacte**.
4. Comprova que els enllaços apunten als identificadors correctes de les seccions.

Exemple d'enllaç intern:

```html
<a href="#galeria">Galeria</a>
```

Aquest enllaç ha de portar a un element de la mateixa pàgina que tinga `id="galeria"`.

### 2. Secció de presentació

1. Afig un títol que explique de què tracta la pàgina.
2. Escriu un paràgraf breu de presentació.
3. Incorpora una imatge local amb una descripció alternativa (`alt`).
4. Afig un enllaç que porte a la galeria; més avant li donarem aparença de botó amb CSS.

Exemple d'imatge:

```html
<img src="img/exemple.svg" alt="Il·lustració de presentació del projecte">
```

Pots substituir la imatge de prova per una altra imatge adequada, sempre que la guardes dins de `img/` i actualitzes la ruta.

---

## Part 2. Completem l'estructura de la web

### 3. Sobre el projecte

Afig una secció amb `id="sobre"` que continga:

1. Un títol secundari (`<h2>`).
2. Dos paràgrafs que expliquen la teua idea.
3. Una llista de **tres característiques** o punts destacats.

Exemple de llista:

```html
<ul>
  <li>Primera característica</li>
  <li>Segona característica</li>
  <li>Tercera característica</li>
</ul>
```

### 4. Galeria de targetes

Crea una secció `id="galeria"` amb **tres targetes**, cadascuna amb:

- Una imatge amb `alt`.
- Un títol (`<h3>`).
- Una descripció d'una o dues frases.

Cada targeta ha d'utilitzar un element `<article>` i la classe `targeta` perquè després pugues aplicar-hi el mateix CSS.

Pista per a **una** de les targetes:

```html
<article class="targeta">
  <img src="img/exemple.svg" alt="Descripció de la imatge">
  <h3>Primer element</h3>
  <p>Descripció breu de l'element.</p>
</article>
```

Ara crea **dues targetes més** adaptades a la temàtica que has triat.

### 5. Taula d'informació

Afig una taula relacionada amb el teu web. Pot comparar preus ficticis, horaris, característiques, resultats, activitats o qualsevol informació que tinga sentit.

Ha de contindre:

- Una fila d'encapçalaments (`<th>`).
- Com a mínim **tres files de dades** (`<td>`).
- Almenys **tres columnes**.

Pista d'estructura:

```html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Característica</th>
      <th>Detall</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Exemple A</td>
      <td>Opció 1</td>
      <td>Informació A</td>
    </tr>
  </tbody>
</table>
```

Completa les files fins que la taula mostre tres registres diferents.

### 6. Formulari de contacte

Crea una secció `id="contacte"` amb un formulari visual que incloga:

1. Un camp de **nom**.
2. Un camp de **correu electrònic** (`type="email"`).
3. Un camp de **missatge** (`<textarea>`).
4. Un botó d'enviament.
5. Una etiqueta `<label>` associada a cada camp.

Exemple del camp de nom:

```html
<label for="nom">Nom</label>
<input type="text" id="nom" name="nom" required>
```

Repetix el patró amb els altres camps. Pots usar `action="#"` en el formulari com a marcador de posició.

!!! warning "És un formulari de prova"
    No has de programar l'enviament de missatges ni connectar el formulari amb cap servidor. El botó no enviarà cap correu real. **No introduïsques dades personals reals** quan el proves.

### 7. Peu de pàgina

Afig un `<footer>` que continga:

- El teu nom com a autor/a.
- Una informació de contacte **fictícia**.
- Un enllaç per tornar a l'inici de la pàgina.

### Validació 1 — Estructura HTML

**Avisa el professor quan hages acabat les set parts anteriors, abans de treballar el CSS en profunditat.**

Hauràs de mostrar al navegador i en VS Code:

- Les set seccions/parts de la pàgina.
- Els enllaços interns del menú funcionant.
- Les tres targetes, la taula i el formulari.
- Una imatge local i el seu atribut `alt`.

El professor et pot demanar una **xicoteta modificació en directe**, com afegir una fila a la taula o canviar l'enllaç d'una secció. **No has d'entregar explicacions escrites.**

---

## Part 3. Donem estil amb CSS

Obri `css/estils.css`. Tots els estils han d'estar en aquest fitxer, no dins de les etiquetes HTML.

### 8. Estils generals

1. Aplica una tipografia llegible a `body`.
2. Tria **dos colors principals** que combinen amb la teua temàtica.
3. Defineix el color del text i el fons de la pàgina.
4. Dona espai als diferents blocs utilitzant `margin` i `padding`.
5. Personalitza l'aparença de la capçalera, el menú i el peu de pàgina.

### 9. Galeria amb Flexbox

1. Posa les tres targetes dins d'un contenidor amb classe `graella-targetes`.
2. Aplica Flexbox perquè les targetes es puguen col·locar una al costat de l'altra.
3. Afig un espai entre targetes (`gap`).
4. Dona a les targetes una vora, espai interior i cantonades arredonides.

Pista de CSS:

```css
.graella-targetes {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.targeta {
  flex: 1 1 220px;
  padding: 16px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
}
```

Ajusta les mides i els colors a la teua web. Comprova què passa si canvies `gap` o `padding`.

### 10. Dona estil a la taula

1. Aplica `border-collapse` i amplària a la taula.
2. Afig vores i espai interior a `th` i `td`.
3. Diferencia visualment la fila d'encapçalament.
4. Dona un color de fons alternatiu a les files, si ho consideres útil.

Pista:

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #cbd5e1;
  padding: 10px;
}
```

### 11. Dona estil al formulari

1. Separa visualment les etiquetes i els camps.
2. Fes que els camps tinguen una amplària còmoda i que no desborden el contenidor.
3. Personalitza el botó amb `background-color`, `color`, `padding` i `border-radius`.
4. Comprova que és fàcil identificar cada camp.

### 12. Efectes senzills

Afig almenys **un efecte `:hover`** en un botó o enllaç.

Exemple:

```css
.boto:hover {
  background-color: #155e75;
}
```

Per a utilitzar aquest exemple, l'enllaç o botó ha de tindre la classe `boto`.

---

## Part 4. Personalització i comprovacions finals

Fes les últimes millores **pel teu compte**:

1. Canvia com a mínim **dos valors d'estil** respecte dels exemples (colors, espaiats, vores o tipografia).
2. Comprova que totes les targetes tenen el mateix estil, encara que tinguen continguts diferents.
3. Revisa que les imatges no es desborden i que mantenen una mida raonable.
4. Obri el web en una finestra estreta i comprova que continua sent llegible.
5. Prova tots els enllaços interns.
6. Comprova que la taula té tres files de dades i que el formulari mostra tots els camps.

### Validació 2 — CSS i resultat final

**Avisa el professor abans de fer el lliurament.** Li hauràs de mostrar:

- El web acabat amb els estils aplicats.
- Les targetes distribuïdes amb Flexbox.
- La taula i el formulari personalitzats.
- Un efecte `:hover` que funcione.
- La web en una finestra estreta.

El professor et demanarà modificar **un valor CSS en directe** i mostrar-ne l'efecte. Per exemple: canviar el color de la capçalera, el marge d'una targeta o la mida d'una imatge.

## Ampliació voluntària

Si has acabat abans, tria una o dues millores:

- Afegir una quarta targeta amb una imatge diferent.
- Incorporar una regla `@media` per canviar la disposició en pantalles estretes.
- Aplicar `:hover` a les targetes o millorar els estats `:focus` dels camps del formulari.
- Millorar l'estil del menú de navegació en pantalles petites.

## Comprovació abans d'entregar

- [ ] El web té les set seccions/parts obligatòries.
- [ ] He utilitzat HTML semàntic i els enllaços interns funcionen.
- [ ] Hi ha tres targetes, una taula amb almenys tres files de dades i un formulari visual.
- [ ] Les imatges locals funcionen i tenen `alt`.
- [ ] El CSS està en un fitxer extern.
- [ ] He utilitzat classes CSS, model de caixa, Flexbox i un efecte `:hover`.
- [ ] He comprovat el resultat en una finestra estreta.
- [ ] He realitzat les dues validacions pràctiques amb el professor.

## Lliurament

Entrega en Aules **un únic ZIP amb la web**, amb aquesta estructura:

```text
activitat-4-1/
├── index.html
├── css/
│   └── estils.css
└── img/
    └── (les imatges utilitzades)
```

El professor ha de poder obrir `index.html` i veure la web completa sense dependre de rutes del teu ordinador.

**No cal cap documentació:** no entregues memòria, `README.md`, qüestionari, fitxa de captures ni PDF. El que s'avalua és la pàgina i la demostració pràctica.
