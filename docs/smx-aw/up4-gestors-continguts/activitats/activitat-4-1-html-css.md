---
hide:
  - navigation
---

# Activitat 4.1 — Construïm la nostra primera web amb HTML i CSS

**Mòdul:** Aplicacions Web · 2n d'SMX  
**Unitat:** UP4. Gestors de continguts web  
**Modalitat:** Individual  
**Tipus:** Pràctica guiada i formativa

## Context

**ByteAcademy** és una acadèmia fictícia que ofereix cursos d'informàtica. Abans de construir el lloc web definitiu amb WordPress, elaborarem una primera pàgina amb **HTML i CSS** per comprendre com s'estructura i com es dissenya una web.

No has de crear la pàgina des de zero. **Partiràs d'un projecte inicial** que aniràs modificant pas a pas, amb exemples i explicacions a classe. L'última part tindrà alguns canvis que hauràs de fer pel teu compte.

!!! info "Què aprendràs?"
    - Identificar les parts principals d'un document HTML.
    - Modificar textos, enllaços, llistes i imatges.
    - Reconéixer etiquetes com `header`, `nav`, `main`, `section`, `article` i `footer`.
    - Relacionar les classes HTML amb els selectors CSS.
    - Canviar colors, espais, vores i distribucions senzilles.
    - Utilitzar Flexbox amb un exemple guiat.
    - Comprovar els canvis en el navegador i explicar com funcionen.

## Abans de començar: prepara el projecte

1. [Descarrega el projecte inicial](../recursos/a4-1-projecte-inicial.zip).
2. Descomprimeix-lo en una carpeta anomenada `a4-1-byteacademy`.
3. Obri la carpeta completa amb **Visual Studio Code**.
4. Comprova que conté aquesta estructura:

```text
a4-1-byteacademy/
├── index.html
├── css/
│   └── estils.css
└── img/
    └── academia.svg
```

5. Obri `index.html` en el navegador. Ja hauries de veure una pàgina senzilla de ByteAcademy, encara sense el disseny definitiu.

!!! tip "Com treballar"
    Després de cada canvi, **guarda el fitxer i actualitza el navegador**. Si alguna cosa no funciona, revisa primer l'etiqueta, el nom del fitxer, les cometes i la ruta que has escrit.

---

## Part 1. Coneix i modifica el primer HTML

En aquesta part treballaràs amb el fitxer `index.html`. El professor explicarà les etiquetes i fareu els primers canvis conjuntament.

1. Localitza `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>` i `<body>`. Identifica quina informació va en cada zona.
2. Busca el títol principal de ByteAcademy (`<h1>`) i modifica'n el text.
3. Canvia el paràgraf de presentació per una descripció pròpia de l'acadèmia.
4. Afig, dins de la secció de presentació, una **llista no ordenada** (`<ul>` i `<li>`) amb tres avantatges d'estudiar a ByteAcademy.
5. Localitza un enllaç (`<a>`) del menú. Identifica el valor del seu atribut `href` i comprova on et porta en fer clic.
6. Guarda els canvis i comprova'ls en el navegador.

**Pista:** aquesta és l'estructura d'una llista senzilla:

```html
<ul>
  <li>Classes pràctiques</li>
  <li>Professorat especialitzat</li>
  <li>Aprenentatge al teu ritme</li>
</ul>
```

---

## Part 2. Entén les seccions de la pàgina

Ara aprendràs com s'organitza el contingut d'una web. Partim de les seccions que ja existeixen en el projecte inicial.

1. Identifica i assenyala en el fitxer les etiquetes `header`, `nav`, `main`, `section`, `article` i `footer`.
2. Localitza les seccions amb els identificadors `inici`, `cursos` i `contacte`.
3. Modifica els dos cursos d'exemple: canvia'n el nom i la descripció.
4. Completa la informació de contacte amb una adreça de correu **fictícia**.
5. Incorpora a la presentació una imatge amb `<img>`, utilitzant l'arxiu `img/academia.svg` que ja tens al projecte. Escriu un text alternatiu (`alt`) que descriga la imatge.
6. Comprova que els enllaços del menú porten a les seccions correctes.

**Exemple d'imatge:**

```html
<img src="img/academia.svg" alt="Il·lustració de l'acadèmia ByteAcademy">
```

!!! note "Important"
    `id` identifica un element i pot funcionar com a destinació d'un enllaç intern. `class` serveix, entre altres coses, per aplicar els mateixos estils a diversos elements.

### Validació 1 — HTML

**Abans de passar a la part de CSS, avisa el professor.** Hauràs de:

- Mostrar el HTML obert en VS Code i la pàgina en el navegador.
- Demostrar que els enllaços interns funcionen.
- Assenyalar la capçalera, el menú, el contingut principal i les targetes de cursos.
- Explicar breument per a què serveixen dues etiquetes HTML que et pregunte el professor.

Si hi ha algun error, corregeix-lo abans de continuar.

---

## Part 3. Donem estil amb CSS

Obri `css/estils.css`. Ja inclou unes quantes regles inicials; el professor explicarà com es relacionen amb les classes del HTML.

1. Localitza un selector com `.capcalera` i troba quin element de `index.html` utilitza eixa classe.
2. Canvia el color de fons de la capçalera i comprova el resultat.
3. Modifica la tipografia o la mida d'un títol utilitzant CSS.
4. Crea una regla per a les targetes amb la classe `.targeta-curs`. Utilitza `padding`, `border` i `border-radius`.
5. Organitza les targetes mitjançant **Flexbox** amb l'ajuda de l'exemple següent:

```css
.llista-cursos {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.targeta-curs {
  flex: 1 1 220px;
  padding: 16px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
}
```

6. Canvia un dels valors (`gap`, `padding`, `border-radius`...) i observa què ocorre.
7. Redueix l'amplària de la finestra del navegador i comprova què passa amb les targetes.

!!! tip "Si el CSS no s'aplica"
    Comprova que el fitxer s'ha guardat, que el HTML enllaça amb `css/estils.css`, que el selector coincideix amb el nom de la classe i que la regla acaba correctament amb `;` i `}`.

---

## Part 4. Personalitza la pàgina pel teu compte

Ara que ja tens un exemple funcional, fes aquestes modificacions **sense copiar una solució completa**:

1. Afig una **tercera targeta de curs**. Ha de mantindre l'estructura de les altres dues, però tindre un títol i una descripció diferents.
2. Modifica almenys **dos colors** de la web per aconseguir una paleta coherent.
3. Afig **una regla CSS pròpia** o modifica clarament una de les existents (per exemple, l'estil dels enllaços, dels títols o de les targetes).
4. Comprova que les tres targetes es distribueixen correctament i que els enllaços continuen funcionant.
5. Mostra la pàgina en una finestra estreta i corregeix qualsevol problema senzill de llegibilitat o de desbordament.

### Validació 2 — CSS i comprensió

**Quan acabes, avisa el professor.** Hauràs de:

- Mostrar la pàgina final amb tres targetes.
- Localitzar una classe en el HTML i la seua regla en el CSS.
- Explicar què fa `display: flex` en aquest projecte.
- Canviar en directe un valor de CSS (per exemple, un color o un espaiat) i demostrar-ne l'efecte.

No és necessari presentar una memòria ni respondre per escrit un qüestionari llarg: les explicacions es faran durant la validació.

## Ampliació voluntària

**Només si has acabat les quatre parts:** investiga què fa `@media` i prova d'afegir una regla CSS que canvie algun estil quan la finestra siga estreta. Aquesta ampliació **no és necessària per completar l'activitat**.

## Comprovació final

- [ ] La pàgina s'obri correctament.
- [ ] He modificat textos i creat una llista en HTML.
- [ ] He afegit la imatge amb un `alt` adequat.
- [ ] Els enllaços del menú funcionen.
- [ ] Tinc tres targetes de cursos.
- [ ] Les targetes tenen estil CSS i s'organitzen amb Flexbox.
- [ ] He realitzat almenys tres modificacions pròpies en la part final.
- [ ] He superat les dues validacions amb el professor.

## Lliurament

Comprimeix la carpeta `a4-1-byteacademy` en un **ZIP** i entrega'l en Aules. Ha de contindre `index.html`, `css/estils.css` i els recursos locals necessaris perquè el professor puga obrir la pàgina en el seu ordinador.

**No cal entregar un `README.md` ni una memòria extensa.** El professor comprovarà directament el treball i la comprensió durant les validacions.

## Per a què servirà després?

Conserva aquest projecte. En l'**A4.2, Implantació i administració de WordPress**, recuperaràs la idea de les targetes de cursos i alguns dels estils CSS per personalitzar el web de ByteAcademy.

!!! info "Avaluació"
    Aquesta és una **activitat formativa** de preparació. Els coneixements d'HTML i CSS es tornaran a utilitzar, especialment per a la **personalització de la interfície del gestor de continguts (CA1.c)**, en l'A4.2 de WordPress.
