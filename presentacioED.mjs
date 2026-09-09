import fs from "node:fs/promises";
import { importRuntimeModule } from "/home/jordicido/.codex/plugins/cache/openai-primary-runtime/presentations/26.826.12353/skills/presentations/container_tools/runtime_helpers.mjs";

const STARTER = "/tmp/ed-presentacio/template-starter.pptx";
const OUTPUT = "/home/jordicido/Documents/github.com/jordicido/jordicina/presentacioED.pptx";

const C = {
  blue: "#1F4E79",
  blue2: "#156082",
  orange: "#E97132",
  brown: "#8B5E3C",
  peach: "#EDBB96",
  pale: "#F8EEE8",
  paleBlue: "#EAF1F6",
  paleGreen: "#EAF3EF",
  paleRed: "#F8EAE7",
  green: "#4F7F6C",
  red: "#B5543B",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#5B5B5B",
  line: "#C9A98E",
};

const FONT = "Arial";
const BODY = { fontSize: 23, color: C.black, typeface: FONT };
const LABEL = { fontSize: 20, color: C.blue, bold: true, typeface: FONT };

function setTextStyle(shape, style = {}) {
  shape.text.style = {
    fontSize: style.fontSize ?? BODY.fontSize,
    color: style.color ?? BODY.color,
    bold: style.bold ?? false,
    italic: style.italic ?? false,
    alignment: style.alignment ?? "left",
    verticalAlignment: style.verticalAlignment ?? "top",
    autoFit: style.autoFit ?? "shrinkText",
    wrap: "square",
    insets: style.insets ?? { top: 0, right: 0, bottom: 0, left: 0 },
  };
}

function addText(slide, text, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name: style.name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  setTextStyle(shape, style);
  return shape;
}

function addBox(slide, text, position, fill, style = {}) {
  const geometry = style.geometry ?? "roundRect";
  const config = {
    geometry: style.geometry ?? "roundRect",
    name: style.name,
    position,
    fill,
    line: { style: "solid", fill: style.lineColor ?? C.line, width: style.lineWidth ?? 1 },
  };
  if (geometry === "roundRect") config.borderRadius = "rounded-2xl";
  const shape = slide.shapes.add(config);
  shape.text = text;
  setTextStyle(shape, {
    fontSize: style.fontSize ?? 24,
    color: style.color ?? C.black,
    bold: style.bold ?? false,
    alignment: style.alignment ?? "center",
    verticalAlignment: style.verticalAlignment ?? "middle",
    insets: style.insets ?? { top: 10, right: 12, bottom: 10, left: 12 },
  });
  return shape;
}

function addCircle(slide, text, position, fill, style = {}) {
  return addBox(slide, text, position, fill, { ...style, geometry: "ellipse" });
}

function addArrow(slide, position, fill = C.orange) {
  return slide.shapes.add({
    geometry: "rightArrow",
    position,
    fill,
    line: { style: "solid", fill, width: 0 },
  });
}

function addLine(slide, position, color = C.orange, width = 3) {
  return slide.shapes.add({
    geometry: "line",
    position,
    fill: "none",
    line: { style: "solid", fill: color, width },
  });
}

function notes(slide, extra = "") {
  slide.speakerNotes.textFrame.setText(
    `[Sources]\n- Plantilla, logos i identitat visual: fitxer proporcionat per l'usuari, formatIESMRE.pptx.\n- Contingut: síntesi didàctica creada a partir del briefing de l'usuari; no s'han utilitzat fonts externes.${extra ? `\n- ${extra}` : ""}`,
  );
  slide.speakerNotes.setVisible(true);
}

function shapeAt(slide, name, topRange = {}) {
  return slide.shapes.items.find((shape) => {
    if (shape.name !== name) return false;
    const top = Number(shape.position?.top ?? 0);
    if (topRange.min !== undefined && top < topRange.min) return false;
    if (topRange.max !== undefined && top > topRange.max) return false;
    return true;
  });
}

function replaceTitle(slide, text, name = "Título 6") {
  const title = shapeAt(slide, name, { max: 160 });
  if (!title) throw new Error(`Title shape not found on slide ${slide.index ?? "?"}`);
  title.text = text;
  return title;
}

function removeBody(slide) {
  const body = shapeAt(slide, "Subtítulo 4", { min: 120, max: 200 });
  if (!body) throw new Error("Body shape not found on content slide");
  body.delete();
}

function createTitleSlide(presentation, slides) {
  const slide = slides[0];
  replaceTitle(slide, "PRESENTACIÓ D'ED", "PlaceHolder 1");
  const subtitle = shapeAt(slide, "PlaceHolder 2", { min: 350 });
  subtitle.text = "1º CFGS – DESENROTLLAMENT D'APLICACIONS WEB\n\n\nJORDI CIDONCHA NAVARRETE\nCURS 2026/27";
  notes(slide, "La portada presenta el mòdul i situa el grup de 1r DAW.");
}

function createIndexSlide(presentation, slides) {
  const slide = slides[1];
  replaceTitle(slide, "ÍNDEX");
  const body = shapeAt(slide, "Subtítulo 4", { min: 120, max: 200 });
  body.text = [
    [{ run: "1. QUÈ ÉS ED?", textStyle: { bold: true, fontSize: "28px", color: C.black } }],
    [{ run: "   El mòdul i el seu sentit", textStyle: { fontSize: "25px", color: C.black } }],
    [{ run: "2. QUÈ APRENDREM?", textStyle: { bold: true, fontSize: "28px", color: C.black } }],
    [{ run: "   Eines, processos i qualitat", textStyle: { fontSize: "25px", color: C.black } }],
    [{ run: "3. COM TREBALLAREM?", textStyle: { bold: true, fontSize: "28px", color: C.black } }],
    [{ run: "   Del problema al lliurament", textStyle: { fontSize: "25px", color: C.black } }],
    [{ run: "4. COM HO APLICAREM?", textStyle: { bold: true, fontSize: "28px", color: C.black } }],
    [{ run: "   Projecte, pràctiques i reflexió", textStyle: { fontSize: "25px", color: C.black } }],
  ];
  notes(slide, "L'índex anticipa una progressió: sentit, aprenentatge, procés i aplicació.");
}

function createContentSlide(presentation, slides, index, title) {
  const slide = slides[index - 1];
  replaceTitle(slide, title);
  removeBody(slide);
  notes(slide);
  return slide;
}

function createPurposeSlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 3, "ED CONNECTA IDEA I PROGRAMARI");
  addText(slide, "Un projecte web no acaba quan «funciona».", { left: 120, top: 150, width: 1040, height: 44 }, { fontSize: 29, color: C.brown, bold: true, alignment: "center" });
  addArrow(slide, { left: 326, top: 308, width: 76, height: 40 });
  addArrow(slide, { left: 666, top: 308, width: 76, height: 40 });
  addBox(slide, "IDEA\nQuè volem resoldre?", { left: 90, top: 250, width: 220, height: 150 }, C.paleBlue, { fontSize: 25, color: C.blue, bold: true });
  addBox(slide, "SOLUCIÓ\nCodi + decisions", { left: 430, top: 250, width: 220, height: 150 }, C.pale, { fontSize: 25, color: C.brown, bold: true });
  addBox(slide, "RESULTAT\nProva + explicació", { left: 770, top: 250, width: 220, height: 150 }, C.paleGreen, { fontSize: 25, color: C.green, bold: true });
  addText(slide, "ED ens dona el mètode per repetir aquest recorregut amb criteri.", { left: 120, top: 490, width: 1040, height: 56 }, { fontSize: 27, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

function createLearningSlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 4, "QUÈ APRENDREM EN AQUEST MÒDUL");
  addText(slide, "Quatre capacitats que fan més sòlid el treball diari.", { left: 150, top: 150, width: 980, height: 40 }, { fontSize: 27, color: C.brown, alignment: "center" });
  const xs = [80, 365, 650, 935];
  const labels = ["PREPARAR\nl'entorn", "ORGANITZAR\nel codi", "VERIFICAR\nla solució", "DOCUMENTAR\nel treball"];
  const fills = [C.paleBlue, C.pale, C.paleGreen, C.paleBlue];
  const colors = [C.blue, C.brown, C.green, C.blue];
  xs.forEach((x, i) => addBox(slide, labels[i], { left: x, top: 235, width: 220, height: 180 }, fills[i], { fontSize: 25, color: colors[i], bold: true }));
  addText(slide, "Objectiu: treballar amb criteri, no només amb intuïció.", { left: 150, top: 500, width: 980, height: 52 }, { fontSize: 27, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

function createMethodSlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 5, "EL MÈTODE FA AVANÇAR EL CODI");
  addText(slide, "Cada pas deixa una pregunta més clara que l'anterior.", { left: 160, top: 150, width: 960, height: 40 }, { fontSize: 27, color: C.brown, alignment: "center" });
  const xs = [150, 400, 650, 900];
  const labels = ["ANALITZAR\nQuin és el problema?", "IMPLEMENTAR\nQuin canvi fem?", "PROVAR\nCom ho sabem?", "MILLORAR\nQuè aprenem?"];
  for (let i = 0; i < 3; i += 1) addArrow(slide, { left: xs[i] + 150, top: 320, width: 92, height: 42 }, C.brown);
  xs.forEach((x, i) => {
    addCircle(slide, String(i + 1), { left: x, top: 275, width: 78, height: 78 }, i === 0 ? C.blue : i === 3 ? C.green : C.orange, { fontSize: 30, color: C.white, bold: true });
    addText(slide, labels[i], { left: x - 50, top: 385, width: 180, height: 72 }, { fontSize: 23, color: C.black, bold: true, alignment: "center" });
  });
  addText(slide, "El valor no és només arribar: és poder explicar com hi hem arribat.", { left: 150, top: 515, width: 980, height: 50 }, { fontSize: 26, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

function createWorkflowSlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 6, "DE LA TASCA AL LLIURAMENT");
  addText(slide, "Un exemple de flux de treball per a una incidència web.", { left: 160, top: 150, width: 960, height: 38 }, { fontSize: 27, color: C.brown, alignment: "center" });
  const xs = [72, 300, 528, 756, 984];
  const labels = ["REPRODUIR\nl'error", "AÏLLAR\nla causa", "CANVIAR\nuna cosa", "PROVAR\nde nou", "EXPLICAR\nel resultat"];
  for (let i = 0; i < 4; i += 1) addArrow(slide, { left: xs[i] + 170, top: 300, width: 58, height: 34 });
  xs.forEach((x, i) => addBox(slide, labels[i], { left: x, top: 255, width: 170, height: 125 }, i % 2 === 0 ? C.paleBlue : C.pale, { fontSize: 22, color: i % 2 === 0 ? C.blue : C.brown, bold: true }));
  addText(slide, "Una tasca ben tancada deixa una evidència que una altra persona pot entendre.", { left: 120, top: 490, width: 1040, height: 62 }, { fontSize: 26, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

function createExampleSlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 7, "EXEMPLE: QUAN UNA API NO RESPON");
  addText(slide, "El mateix problema pot generar caos o aprenentatge.", { left: 160, top: 150, width: 960, height: 40 }, { fontSize: 27, color: C.brown, alignment: "center" });
  addBox(slide, "SENSE MÈTODE", { left: 95, top: 215, width: 460, height: 56 }, C.red, { fontSize: 24, color: C.white, bold: true, lineColor: C.red });
  addBox(slide, "AMB MÈTODE", { left: 725, top: 215, width: 460, height: 56 }, C.green, { fontSize: 24, color: C.white, bold: true, lineColor: C.green });
  addBox(slide, "Canvie coses a l'atzar\nNo sé quina versió he provat\nNo puc explicar la causa", { left: 95, top: 290, width: 460, height: 175 }, C.paleRed, { fontSize: 23, color: C.red, bold: true, alignment: "left", verticalAlignment: "top" });
  addBox(slide, "Reproduïsc l'error\nAïlle el canvi\nProve i deixe evidència", { left: 725, top: 290, width: 460, height: 175 }, C.paleGreen, { fontSize: 23, color: C.green, bold: true, alignment: "left", verticalAlignment: "top" });
  addText(slide, "La diferència és el procés, no la sort.", { left: 250, top: 515, width: 780, height: 48 }, { fontSize: 27, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

function createQualitySlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 8, "EL RESULTAT HA DE SER REPRODUÏBLE");
  addText(slide, "Una solució professional es pot tornar a executar, revisar i explicar.", { left: 100, top: 150, width: 1080, height: 40 }, { fontSize: 27, color: C.brown, alignment: "center" });
  addLine(slide, { left: 320, top: 335, width: 320, height: 0 }, C.line, 3);
  addLine(slide, { left: 640, top: 335, width: 320, height: 0 }, C.line, 3);
  addBox(slide, "ENTORN\nmateixes dependències", { left: 90, top: 265, width: 260, height: 140 }, C.paleBlue, { fontSize: 24, color: C.blue, bold: true });
  addBox(slide, "PROCÉS\npassos repetibles", { left: 510, top: 265, width: 260, height: 140 }, C.pale, { fontSize: 24, color: C.brown, bold: true });
  addBox(slide, "EVIDÈNCIA\nproves i notes", { left: 930, top: 265, width: 260, height: 140 }, C.paleGreen, { fontSize: 24, color: C.green, bold: true });
  addCircle(slide, "SOLUCIÓ\nQUE ES POT\nDEFENSAR", { left: 510, top: 445, width: 260, height: 115 }, C.blue, { fontSize: 23, color: C.white, bold: true });
  addText(slide, "Si una altra persona no pot repetir-ho, encara no està acabat.", { left: 120, top: 580, width: 1040, height: 32 }, { fontSize: 25, color: C.blue, bold: true, alignment: "center" });
}

function createErrorsSlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 9, "TRES ERRORS HABITUALS");
  addText(slide, "Tres hàbits que fan més difícil avançar.", { left: 180, top: 150, width: 920, height: 38 }, { fontSize: 27, color: C.brown, alignment: "center" });
  const xs = [80, 380, 680];
  const titles = ["SALTAR LA PROVA", "COPIAR SENSE ENTENDRE", "TREBALLAR SENSE ORDRE"];
  const fixes = ["Resposta: verifica abans de donar-ho per bo.", "Resposta: explica què fa cada decisió.", "Resposta: deixa passos i versions clares."];
  xs.forEach((x, i) => {
    addBox(slide, titles[i], { left: x, top: 230, width: 250, height: 70 }, C.paleRed, { fontSize: 22, color: C.red, bold: true });
    addBox(slide, fixes[i], { left: x, top: 330, width: 250, height: 145 }, C.paleGreen, { fontSize: 21, color: C.green, bold: true, alignment: "left", verticalAlignment: "top" });
  });
  addText(slide, "L'error és útil quan deixa una pista per a la pròxima decisió.", { left: 150, top: 530, width: 980, height: 45 }, { fontSize: 26, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

function createActivitySlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 10, "ACTIVITAT D’ARRANCADA");
  addText(slide, "Situació: un company rep un projecte que no li arranca.", { left: 120, top: 150, width: 1040, height: 40 }, { fontSize: 28, color: C.brown, bold: true, alignment: "center" });
  addBox(slide, "ABANS DE TOCAR EL CODI\n\nQuines dades necessites?\nQuina evidència demanaries?", { left: 100, top: 235, width: 460, height: 220 }, C.paleBlue, { fontSize: 24, color: C.blue, bold: true, alignment: "left", verticalAlignment: "top" });
  addBox(slide, "PRIMER PAS\n\nReproduir el problema\namb el mínim de variables.", { left: 720, top: 235, width: 460, height: 220 }, C.paleGreen, { fontSize: 24, color: C.green, bold: true, alignment: "left", verticalAlignment: "top" });
  addArrow(slide, { left: 575, top: 320, width: 125, height: 55 }, C.orange);
  addText(slide, "Pensa-ho en parelles: què preguntaries primer?", { left: 180, top: 520, width: 920, height: 48 }, { fontSize: 27, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

function createSummarySlide(presentation, slides) {
  const slide = createContentSlide(presentation, slides, 11, "ED ÉS TREBALLAR AMB CRITERI");
  addText(slide, "El curs comença amb tres idees senzilles.", { left: 170, top: 150, width: 940, height: 38 }, { fontSize: 27, color: C.brown, alignment: "center" });
  addBox(slide, "1\nENTENDRE\nquè fem", { left: 120, top: 240, width: 260, height: 180 }, C.paleBlue, { fontSize: 27, color: C.blue, bold: true });
  addBox(slide, "2\nJUSTIFICAR\ncom ho fem", { left: 510, top: 240, width: 260, height: 180 }, C.pale, { fontSize: 27, color: C.brown, bold: true });
  addBox(slide, "3\nMILLORAR\namb evidència", { left: 900, top: 240, width: 260, height: 180 }, C.paleGreen, { fontSize: 27, color: C.green, bold: true });
  addText(slide, "En aquest mòdul, el codi importa; el procés també.", { left: 120, top: 510, width: 1040, height: 55 }, { fontSize: 30, color: C.blue, bold: true, alignment: "center", verticalAlignment: "middle" });
}

async function main() {
  const { FileBlob, PresentationFile } = await importRuntimeModule("@oai/artifact-tool");
  const presentation = await PresentationFile.importPptx(await FileBlob.load(STARTER));
  const slides = presentation.slides.items;
  createTitleSlide(presentation, slides);
  createIndexSlide(presentation, slides);
  createPurposeSlide(presentation, slides);
  createLearningSlide(presentation, slides);
  createMethodSlide(presentation, slides);
  createWorkflowSlide(presentation, slides);
  createExampleSlide(presentation, slides);
  createQualitySlide(presentation, slides);
  createErrorsSlide(presentation, slides);
  createActivitySlide(presentation, slides);
  createSummarySlide(presentation, slides);

  await fs.mkdir("/tmp/ed-presentacio/final-renders", { recursive: true });
  for (const [i, slide] of slides.entries()) {
    const preview = await presentation.export({ slide, format: "png", scale: 1 });
    await fs.writeFile(`/tmp/ed-presentacio/final-renders/slide-${String(i + 1).padStart(2, "0")}.png`, Buffer.from(await preview.arrayBuffer()));
    const layout = await presentation.export({ slide, format: "layout" });
    await fs.writeFile(`/tmp/ed-presentacio/final-renders/slide-${String(i + 1).padStart(2, "0")}.layout.json`, Buffer.from(await layout.arrayBuffer()));
  }
  const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
  await fs.writeFile("/tmp/ed-presentacio/final-montage.webp", Buffer.from(await montage.arrayBuffer()));
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(OUTPUT);
  console.log(JSON.stringify({ output: OUTPUT, slides: slides.length }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exit(1);
});
