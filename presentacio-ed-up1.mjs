import path from "node:path";
import { fileURLToPath } from "node:url";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const STARTER = process.env.STARTER_PPTX || "/tmp/ed-up1-presentation/template-starter.pptx";
const FINAL = process.env.FINAL_PPTX || path.join(ROOT, "presentacio.pptx");

const C = {
  blue: "#156082",
  blueDark: "#0E2841",
  bluePale: "#E8F1F5",
  orange: "#E97132",
  orangePale: "#FDF1EA",
  brown: "#876044",
  peach: "#E8B88F",
  green: "#196B24",
  greenPale: "#EDF5E9",
  ink: "#1F2933",
  muted: "#56616C",
  border: "#CBD5DB",
  white: "#FFFFFF",
  soft: "#F7F9FA",
};

let template = null;

const W = 1280;
const BODY_TOP = 150;
const BODY_BOTTOM = 640;

function setText(shape, text, style = {}) {
  shape.text = text;
  shape.text.style = {
    typeface: "Aptos",
    fontSize: 22,
    color: C.ink,
    verticalAlignment: "top",
    autoFit: "shrinkText",
    ...style,
  };
  return shape;
}

function addText(slide, name, text, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  return setText(shape, text, style);
}

function addBox(slide, name, text, position, fill = C.white, style = {}, lineFill = C.border) {
  const shape = slide.shapes.add({
    geometry: "roundRect",
    name,
    position,
    fill,
    line: { style: "solid", fill: lineFill, width: 1.4 },
    borderRadius: "rounded-xl",
  });
  setText(shape, text, {
    fontSize: 21,
    insets: { top: 18, right: 18, bottom: 14, left: 18 },
    ...style,
  });
  return shape;
}

function addRule(slide, left, top, width, color = C.border, thickness = 2) {
  return slide.shapes.add({
    geometry: "line",
    name: `rule-${left}-${top}`,
    position: { left, top, width, height: 0 },
    fill: "none",
    line: { style: "solid", fill: color, width: thickness },
  });
}

function addArrow(slide, left, top, width = 54, height = 32, color = C.orange) {
  return slide.shapes.add({
    geometry: "rightArrow",
    name: `arrow-${left}-${top}`,
    position: { left, top, width, height },
    fill: color,
    line: { style: "solid", fill: color, width: 0 },
  });
}

function addBadge(slide, text, left, top, fill = C.bluePale, color = C.blue) {
  return addBox(slide, `badge-${text}`, text, { left, top, width: 156, height: 42 }, fill, {
    fontSize: 17,
    bold: true,
    color,
    alignment: "center",
    verticalAlignment: "middle",
    insets: { top: 6, right: 8, bottom: 6, left: 8 },
  }, fill);
}

async function prepareTemplateIndex(presentation) {
  const snapshot = await presentation.inspect({ kind: "slide,textbox,shape,image,table,chart", maxChars: 200000 });
  const records = snapshot.ndjson.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
  const slides = records.filter((record) => record.kind === "slide");
  const objects = records.filter((record) => record.kind === "textbox" || record.kind === "shape");
  const objectFor = (slideNumber, predicate) => {
    const found = objects.find((record) => record.slide === slideNumber && predicate(record));
    if (!found) throw new Error(`No template object found for slide ${slideNumber}`);
    return found.id;
  };
  const result = { slideIds: Object.fromEntries(slides.map((slide) => [slide.slide, slide.id])), slide: {}, content: {}, title: {}, footerLeft: {}, footerRight: {} };
  result.title[1] = objectFor(1, (record) => record.name === "PlaceHolder 1");
  result.subtitle = { 1: objectFor(1, (record) => record.name === "PlaceHolder 2") };
  result.title[2] = objectFor(2, (record) => record.text === "ÍNDEX");
  result.indexBody = objectFor(2, (record) => String(record.text || "").startsWith("Concepte 1."));
  result.indexFooterLeft = objectFor(2, (record) => record.text === "Presentació del curs");
  result.indexFooterRight = objectFor(2, (record) => String(record.text || "").includes("DAW"));
  for (let slideNumber = 3; slideNumber <= 15; slideNumber += 1) {
    result.title[slideNumber] = objectFor(slideNumber, (record) => String(record.text || "").startsWith("ON ESTEU"));
    result.content[slideNumber] = objectFor(slideNumber, (record) => String(record.text || "").startsWith("Descripció"));
    result.footerLeft[slideNumber] = objectFor(slideNumber, (record) => record.text === "Presentació del curs");
    result.footerRight[slideNumber] = objectFor(slideNumber, (record) => String(record.text || "").includes("DAW"));
  }
  return result;
}

function clearTemplateContent(presentation, slideNumber, title, leftFooter = "ED · UP1", rightFooter = "1r DAW") {
  const slide = presentation.resolve(template.slideIds[slideNumber]);
  const titleShape = presentation.resolve(template.title[slideNumber]);
  const contentShape = presentation.resolve(template.content[slideNumber]);
  const footerLeft = presentation.resolve(template.footerLeft[slideNumber]);
  const footerRight = presentation.resolve(template.footerRight[slideNumber]);
  titleShape.text = title;
  contentShape.text = "";
  contentShape.fill = "none";
  contentShape.line = { style: "solid", fill: "none", width: 0 };
  footerLeft.text = leftFooter;
  footerRight.text = rightFooter;
  return slide;
}

function addNotes(slide, extra = "") {
  slide.speakerNotes.textFrame.setText([
    "Notes del docent:",
    extra,
    "",
    "[Sources]",
    "- Material local ED UP1: docs/daw-ed/up1/01-entorn.md a 07-comparacio.md.",
    "- Criteris RA2: docs/daw-ed/up1/index.md.",
    "[/Sources]",
  ].filter(Boolean).join("\n"));
  slide.speakerNotes.setVisible(true);
}

function addStep(slide, index, title, body, x, y, fill = C.bluePale) {
  addBadge(slide, String(index).padStart(2, "0"), x, y, fill, fill === C.orangePale ? C.orange : C.blue);
  addText(slide, `step-title-${index}`, title, { left: x, top: y + 52, width: 210, height: 40 }, {
    fontSize: 20, bold: true, color: C.blueDark,
  });
  addText(slide, `step-body-${index}`, body, { left: x, top: y + 94, width: 220, height: 100 }, {
    fontSize: 18, color: C.muted, lineSpacing: 1.1,
  });
}

function buildCover(presentation) {
  const title = presentation.resolve(template.title[1]);
  const subtitle = presentation.resolve(template.subtitle[1]);
  title.text = "ED · UP1\nENTORNS INTEGRATS";
  subtitle.text = "1r DAW · ENTORNS DE DESENVOLUPAMENT\n\nVS CODE + INTELLIJ IDEA\n\nJORDI CIDONCHA · CURS 2026/27";
  addNotes(presentation.resolve(template.slideIds[1]), "Presenta la unitat com un laboratori: l’alumnat instal·larà, configurarà, construirà i compararà dos IDE.");
}

function buildIndex(presentation) {
  const slide = presentation.resolve(template.slideIds[2]);
  presentation.resolve(template.title[2]).text = "ÍNDEX · EL RECORREGUT DE LA UP1";
  const inheritedBody = presentation.resolve(template.indexBody);
  inheritedBody.delete();
  const indexItems = [
    ["01  ENTENDRE L’IDE", "Què integra i per què importa · VS Code i IntelliJ IDEA"],
    ["02  POSAR-LO A PUNT", "Instal·lació, mòduls, configuració i actualitzacions"],
    ["03  CONSTRUIR EXECUTABLES", "Java i Kotlin en IntelliJ · mateix projecte en dos IDE"],
    ["04  COMPARAR I DECIDIR", "Evidències, errors freqüents i repte de laboratori"],
  ];
  indexItems.forEach(([heading, detail], index) => {
    addText(slide, `index-${index}`, `${heading}\n${detail}`, { left: 78, top: 145 + index * 112, width: 1080, height: 82 }, {
      fontSize: 22,
      color: C.ink,
      lineSpacing: 1.05,
      insets: { top: 4, right: 4, bottom: 4, left: 4 },
    });
  });
  presentation.resolve(template.indexFooterLeft).text = "ED · UP1";
  presentation.resolve(template.indexFooterRight).text = "1r DAW";
  addNotes(slide, "L’índex anuncia la progressió: primer el mapa mental, després el laboratori i finalment la comparació argumentada.");
}

function buildSlide3(presentation) {
  const slide = clearTemplateContent(presentation, 3, "Una IDE concentra el cicle de treball");
  const y = 280;
  const boxes = [
    ["Codi font", "classes\nconfiguració\ntests", 70, C.bluePale],
    ["IDE", "editor +\ndepurador +\nprojecte", 315, C.orangePale],
    ["Construcció", "JDK + Maven\ncompila i empaqueta", 560, C.bluePale],
    ["Executable", ".jar\nllest per executar", 805, C.greenPale],
  ];
  for (let i = 0; i < boxes.length - 1; i += 1) addArrow(slide, boxes[i][2] + 190, y + 42, 58, 34);
  for (const [title, body, x, fill] of boxes) addBox(slide, `workflow-${title}`, `${title}\n\n${body}`, { left: x, top: y, width: 190, height: 166 }, fill, {
    fontSize: 20, bold: true, color: C.blueDark, alignment: "center", verticalAlignment: "middle",
  }, fill);
  addText(slide, "workflow-takeaway", "L’IDE no substitueix el llenguatge ni el compilador: els integra en un flux de treball observable.", { left: 120, top: 510, width: 1040, height: 54 }, {
    fontSize: 24, bold: true, color: C.brown, alignment: "center",
  });
  addNotes(slide, "Pregunta inicial: on detectaries un error si l’editor funciona però el JAR no es genera?");
}

function buildSlide4(presentation) {
  const slide = clearTemplateContent(presentation, 4, "Dues maneres de treballar, un mateix objectiu");
  addBox(slide, "vscode-column", "VISUAL STUDIO CODE\n\n• nucli lleuger\n• extensions segons el projecte\n• terminal i tasques integrades\n• molta flexibilitat", { left: 90, top: 205, width: 470, height: 300 }, C.bluePale, { fontSize: 23, color: C.blueDark });
  addBox(slide, "idea-column", "INTELLIJ IDEA\n\n• model de projecte profund\n• assistència de codi avançada\n• Maven i depurador integrats\n• més funcions de sèrie", { left: 720, top: 205, width: 470, height: 300 }, C.orangePale, { fontSize: 23, color: C.brown });
  addArrow(slide, 590, 330, 100, 44, C.brown);
  addText(slide, "same-goal", "editar → construir → verificar", { left: 440, top: 532, width: 400, height: 42 }, { fontSize: 24, bold: true, color: C.blue, alignment: "center" });
  addNotes(slide, "No cal declarar un guanyador universal: la selecció depén del projecte, el nivell d’integració i la necessitat de personalització.");
}

function buildSlide5(presentation) {
  const slide = clearTemplateContent(presentation, 5, "Instal·lar no és obrir: és poder construir");
  addStep(slide, 1, "IDE", "VS Code\nIntelliJ IDEA", 95, 205, C.bluePale);
  addArrow(slide, 322, 280, 64, 36);
  addStep(slide, 2, "JDK", "java --version\ncompiler disponible", 385, 205, C.orangePale);
  addArrow(slide, 612, 280, 64, 36);
  addStep(slide, 3, "Maven", "mvn --version\nprojecte construïble", 675, 205, C.bluePale);
  addArrow(slide, 902, 280, 64, 36);
  addStep(slide, 4, "Prova", "mvn clean package\nJAR verificat", 965, 205, C.greenPale);
  addBox(slide, "install-check", "Evidència RA2.a\nCaptura de versions + primera construcció correcta", { left: 330, top: 510, width: 620, height: 82 }, C.soft, { fontSize: 22, bold: true, color: C.brown, alignment: "center", verticalAlignment: "middle" });
  addNotes(slide, "Insistix en la diferència entre tindre la interfície instal·lada i tindre tot el toolchain verificat.");
}

function buildSlide6(presentation) {
  const slide = clearTemplateContent(presentation, 6, "Els mòduls completen el que l’IDE no porta de sèrie");
  addBox(slide, "module-vscode", "VS CODE\n\nExtension Pack for Java\n• llenguatge\n• depuració\n• Maven\n• proves", { left: 75, top: 200, width: 500, height: 330 }, C.bluePale, { fontSize: 22, color: C.blueDark });
  addBox(slide, "module-idea", "INTELLIJ IDEA\n\nPlugins i funcions\n• suport de llenguatge\n• integració amb eines\n• extensions opcionals", { left: 705, top: 200, width: 500, height: 330 }, C.orangePale, { fontSize: 22, color: C.brown });
  addText(slide, "module-rule", "Afegir = ampliar · desactivar = diagnosticar · eliminar = netejar", { left: 200, top: 560, width: 880, height: 42 }, { fontSize: 23, bold: true, color: C.blue, alignment: "center" });
  addNotes(slide, "Demana una demostració reversible: activar una extensió, comprovar què aporta i desactivar-la per observar el canvi.");
}

function buildSlide7(presentation) {
  const slide = clearTemplateContent(presentation, 7, "Personalitzar és reduir fricció");
  const y = 250;
  const items = [
    ["Preferències", "tema, font, format", 105, C.bluePale],
    ["Projecte", ".vscode/\nconfiguració IDE", 385, C.orangePale],
    ["Automatització", "tasques + Maven", 665, C.bluePale],
    ["Feedback", "problemes visibles\ni repetibles", 945, C.greenPale],
  ];
  for (let i = 0; i < items.length - 1; i += 1) addArrow(slide, items[i][2] + 205, y + 44, 58, 34);
  for (const [title, body, x, fill] of items) addBox(slide, `custom-${title}`, `${title}\n\n${body}`, { left: x, top: y, width: 205, height: 162 }, fill, { fontSize: 20, bold: true, color: C.blueDark, alignment: "center", verticalAlignment: "middle" }, fill);
  addText(slide, "automation-example", "Exemple: una tasca `mvn clean package` converteix una seqüència manual en una acció repetible.", { left: 155, top: 505, width: 970, height: 70 }, { fontSize: 24, color: C.brown, bold: true, alignment: "center" });
  addNotes(slide, "Relaciona la personalització amb la qualitat del procés: si una altra persona pot repetir-lo, l’automatització aporta valor.");
}

function buildSlide8(presentation) {
  const slide = clearTemplateContent(presentation, 8, "Actualitzar amb criteri protegeix el projecte");
  addText(slide, "cycle-center", "ACTUALITZAR\nSENSE SORPRESES", { left: 490, top: 300, width: 300, height: 92 }, { fontSize: 27, bold: true, color: C.blue, alignment: "center", verticalAlignment: "middle" });
  addBox(slide, "cycle-1", "1\nLlegir canvis\ni compatibilitat", { left: 125, top: 215, width: 235, height: 126 }, C.bluePale, { fontSize: 21, bold: true, color: C.blueDark, alignment: "center" });
  addBox(slide, "cycle-2", "2\nActualitzar IDE\ni mòduls", { left: 920, top: 215, width: 235, height: 126 }, C.orangePale, { fontSize: 21, bold: true, color: C.brown, alignment: "center" });
  addBox(slide, "cycle-3", "3\nReconstruir\ni executar proves", { left: 125, top: 465, width: 235, height: 126 }, C.greenPale, { fontSize: 21, bold: true, color: C.green, alignment: "center" });
  addBox(slide, "cycle-4", "4\nRegistrar resultat\ni incidències", { left: 920, top: 465, width: 235, height: 126 }, C.soft, { fontSize: 21, bold: true, color: C.blueDark, alignment: "center" });
  addText(slide, "update-rule", "No actualitzes per inèrcia: actualitza, verifica i deixa una evidència.", { left: 360, top: 565, width: 560, height: 46 }, { fontSize: 22, bold: true, color: C.brown, alignment: "center" });
  addNotes(slide, "RA2.d es demostra configurant el sistema d’actualització i documentant la comprovació posterior.");
}

function buildSlide9(presentation) {
  const slide = clearTemplateContent(presentation, 9, "Del codi font a l’executable");
  addBox(slide, "source-code", "App.java\n\npublic static void main\n{\n  System.out.println(\"Hola IDE\");\n}", { left: 90, top: 205, width: 330, height: 260 }, C.soft, { fontSize: 20, typeface: "Consolas", color: C.blueDark });
  addArrow(slide, 465, 305, 86, 42);
  addBox(slide, "maven-build", "Maven\n\n`mvn clean package`\n\ncompila + empaqueta", { left: 590, top: 205, width: 300, height: 260 }, C.orangePale, { fontSize: 22, bold: true, color: C.brown, alignment: "center", verticalAlignment: "middle" });
  addArrow(slide, 930, 305, 86, 42, C.green);
  addBox(slide, "jar-output", "target/\napp.jar\n\n`java -jar app.jar`", { left: 1040, top: 205, width: 170, height: 260 }, C.greenPale, { fontSize: 21, bold: true, color: C.green, alignment: "center", verticalAlignment: "middle" });
  addText(slide, "executable-proof", "RA2.e i RA2.f: no n’hi ha prou amb veure el codi; cal conservar el JAR i el resultat d’execució.", { left: 145, top: 525, width: 990, height: 66 }, { fontSize: 23, bold: true, color: C.brown, alignment: "center" });
  addNotes(slide, "Mostra el recorregut complet i demana que l’alumnat assenyale on es produeix cada evidència.");
}

function buildSlide10(presentation) {
  const slide = clearTemplateContent(presentation, 10, "Un mateix IDE pot construir llenguatges diferents");
  addBadge(slide, "RA2.e", 90, 185, C.orangePale, C.orange);
  addBox(slide, "java-lang", "JAVA\n\n`HelloJava.java`\n\nJDK + Maven\n→ `HelloJava.class`", { left: 90, top: 260, width: 430, height: 220 }, C.bluePale, { fontSize: 24, bold: true, color: C.blueDark, alignment: "center", verticalAlignment: "middle" });
  addBox(slide, "kotlin-lang", "KOTLIN\n\n`HelloKotlin.kt`\n\nplugin Kotlin\n→ `HelloKotlin.class`", { left: 760, top: 260, width: 430, height: 220 }, C.orangePale, { fontSize: 24, bold: true, color: C.brown, alignment: "center", verticalAlignment: "middle" });
  addArrow(slide, 565, 345, 130, 48, C.brown);
  addText(slide, "jvm-bridge", "mateixa JVM · sintaxi i compilador diferents", { left: 290, top: 540, width: 700, height: 48 }, { fontSize: 23, bold: true, color: C.blue, alignment: "center" });
  addNotes(slide, "Kotlin apareix només com a llenguatge complementari per fer observable RA2.e. La resta del projecte de la UP1 usa Java i Maven.");
}

function buildSlide11(presentation) {
  const slide = clearTemplateContent(presentation, 11, "El mateix codi ha de donar el mateix resultat");
  addBadge(slide, "RA2.f", 90, 180, C.bluePale, C.blue);
  addBox(slide, "same-project", "projecte Java Maven\n\nmateix codi\nmateix `pom.xml`\nmateix JDK", { left: 90, top: 255, width: 290, height: 240 }, C.soft, { fontSize: 23, bold: true, color: C.blueDark, alignment: "center", verticalAlignment: "middle" });
  addArrow(slide, 420, 350, 80, 40);
  addBox(slide, "vscode-build", "VS CODE\n\n`mvn clean package`\n\n✅ app.jar", { left: 540, top: 240, width: 285, height: 260 }, C.bluePale, { fontSize: 22, bold: true, color: C.blueDark, alignment: "center", verticalAlignment: "middle" });
  addArrow(slide, 860, 350, 80, 40, C.brown);
  addBox(slide, "idea-build", "INTELLIJ IDEA\n\n`mvn clean package`\n\n✅ app.jar", { left: 1000, top: 240, width: 210, height: 260 }, C.orangePale, { fontSize: 20, bold: true, color: C.brown, alignment: "center", verticalAlignment: "middle" });
  addText(slide, "same-result", "Si canvia el codi entre proves, ja no és una comparació vàlida.", { left: 285, top: 555, width: 710, height: 46 }, { fontSize: 23, bold: true, color: C.green, alignment: "center" });
  addNotes(slide, "Remarca les variables que han de mantindre’s iguals: font, dependències, JDK, ordre de construcció i artefacte.");
}

function buildSlide12(presentation) {
  const slide = clearTemplateContent(presentation, 12, "Compara l’eina segons la tasca");
  const x = [95, 365, 635, 905];
  const heads = ["CARACTERÍSTICA", "COMUNA", "VS CODE", "INTELLIJ IDEA"];
  const fills = [C.soft, C.bluePale, C.bluePale, C.orangePale];
  heads.forEach((head, index) => addBox(slide, `matrix-head-${index}`, head, { left: x[index], top: 180, width: 240, height: 62 }, fills[index], { fontSize: 18, bold: true, color: index === 3 ? C.brown : C.blueDark, alignment: "center", verticalAlignment: "middle" }, fills[index]));
  const rows = [
    ["Editor + terminal", "sí", "lleuger", "integrat"],
    ["Extensions/plugins", "sí", "essencials", "opcionales"],
    ["Projecte Java", "sí", "via extensions", "natiu"],
    ["Decisió", "context", "flexibilitat", "integració"],
  ];
  rows.forEach((row, r) => row.forEach((value, c) => addBox(slide, `matrix-${r}-${c}`, value, { left: x[c], top: 255 + r * 73, width: 240, height: 62 }, c === 2 ? C.bluePale : c === 3 ? C.orangePale : C.white, { fontSize: 18, color: c === 0 ? C.blueDark : C.ink, bold: c === 0, alignment: "center", verticalAlignment: "middle" })));
  addText(slide, "matrix-takeaway", "RA2.g demana una comparació raonada, no una opinió genèrica.", { left: 220, top: 575, width: 840, height: 42 }, { fontSize: 23, bold: true, color: C.brown, alignment: "center" });
  addNotes(slide, "Fes que l’alumnat justifique una elecció per a un projecte concret: no hi ha una única resposta correcta fora del context.");
}

function buildSlide13(presentation) {
  const slide = clearTemplateContent(presentation, 13, "Errors freqüents que invaliden l’evidència");
  const errors = [
    ["Obrir l’IDE i prou", "Solució: verificar JDK, Maven i una construcció."],
    ["Canviar el codi entre IDE", "Solució: conservar el mateix commit o carpeta."],
    ["Instal·lar extensions sense criteri", "Solució: afegir, provar i eliminar amb registre."],
    ["Actualitzar sense reconstruir", "Solució: actualitzar, provar i anotar el resultat."],
  ];
  errors.forEach(([bad, fix], i) => {
    const y = 178 + i * 105;
    addBox(slide, `error-${i}`, `✕  ${bad}\n✓  ${fix}`, { left: 135, top: y, width: 1010, height: 78 }, i % 2 === 0 ? C.orangePale : C.soft, { fontSize: 20, color: C.ink, insets: { top: 12, right: 20, bottom: 10, left: 20 } });
  });
  addNotes(slide, "Usa els errors com una llista de control abans de lliurar les evidències.");
}

function buildSlide14(presentation) {
  const slide = clearTemplateContent(presentation, 14, "Repte de laboratori: deixa proves, no només captures");
  addBox(slide, "challenge", "ESCENARI\n\nUna empresa rep un ordinador nou. Has de deixar preparats VS Code i IntelliJ IDEA per a un projecte Java.", { left: 80, top: 185, width: 390, height: 300 }, C.bluePale, { fontSize: 23, color: C.blueDark });
  addBox(slide, "evidence", "LLIURAMENT\n\n• versions i llicències\n• extensions/plugins\n• configuració i actualització\n• dos JAR i informe comparatiu", { left: 520, top: 185, width: 330, height: 300 }, C.orangePale, { fontSize: 22, color: C.brown });
  addBox(slide, "rubric", "RA2.a–g\n\nobservable\nrepetible\nargumentat", { left: 900, top: 185, width: 285, height: 300 }, C.greenPale, { fontSize: 25, bold: true, color: C.green, alignment: "center", verticalAlignment: "middle" });
  addText(slide, "challenge-question", "Quina evidència convençeria una altra persona que el teu entorn està ben preparat?", { left: 160, top: 545, width: 960, height: 48 }, { fontSize: 24, bold: true, color: C.brown, alignment: "center" });
  addNotes(slide, "Connecta directament amb les tres activitats de la UP1: instal·lació, configuració i construcció/comparació.");
}

function buildSlide15(presentation) {
  const slide = clearTemplateContent(presentation, 15, "Tres idees per endur-te de la UP1");
  addBox(slide, "summary-1", "01\nUn IDE és un sistema de treball, no només un editor.", { left: 95, top: 220, width: 330, height: 190 }, C.bluePale, { fontSize: 23, bold: true, color: C.blueDark, alignment: "center", verticalAlignment: "middle" });
  addBox(slide, "summary-2", "02\nUna instal·lació útil es demostra amb una construcció.", { left: 475, top: 220, width: 330, height: 190 }, C.orangePale, { fontSize: 23, bold: true, color: C.brown, alignment: "center", verticalAlignment: "middle" });
  addBox(slide, "summary-3", "03\nComparar és controlar variables i justificar decisions.", { left: 855, top: 220, width: 330, height: 190 }, C.greenPale, { fontSize: 23, bold: true, color: C.green, alignment: "center", verticalAlignment: "middle" });
  addText(slide, "exit-ticket", "Eixida: explica en una frase què comprovaries abans de dir «el meu IDE funciona». ", { left: 150, top: 535, width: 980, height: 52 }, { fontSize: 24, bold: true, color: C.blue, alignment: "center" });
  addNotes(slide, "Tanca recuperant la pregunta del laboratori i demana una resposta breu abans de passar a la pràctica.");
}

async function main() {
  const presentation = await PresentationFile.importPptx(await FileBlob.load(STARTER));
  template = await prepareTemplateIndex(presentation);
  buildCover(presentation);
  buildIndex(presentation);
  buildSlide3(presentation);
  buildSlide4(presentation);
  buildSlide5(presentation);
  buildSlide6(presentation);
  buildSlide7(presentation);
  buildSlide8(presentation);
  buildSlide9(presentation);
  buildSlide10(presentation);
  buildSlide11(presentation);
  buildSlide12(presentation);
  buildSlide13(presentation);
  buildSlide14(presentation);
  buildSlide15(presentation);

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(FINAL);
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exitCode = 1;
});
