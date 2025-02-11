import PptxGenJS from "pptxgenjs";
import { master } from "./master.js";
import { placeholder } from "./placeholder.js";

export async function makePptx(employeeData) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  master(pptx);
  placeholder(pptx);

  let slideMaster = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slideMaster.addText(
    "How To Create PowerPoint Presentations with JavaScript",
    {
      x: 0.5,
      y: 0.7,
      fontSize: 18,
    }
  );

  let slidePlaceholder = pptx.addSlide({ masterName: "PLACEHOLDER_SLIDE" });

  // Add text, charts, etc. to any placeholder using its `name`
  slidePlaceholder.addText("Body Placeholder here!", { placeholder: "body" });

  // Slide 1: Informazioni Generali
  let slide1 = pptx.addSlide();
  slide1.addText("Profilo Dipendente", {
    x: 1,
    y: 0.5,
    fontSize: 24,
    bold: true,
    color: "0088CC",
  });

  slide1.addText(
    [
      { text: "ID Dipendente: ", options: { bold: true } },
      { text: employeeData.PERNR },
      { text: "\nNome: ", options: { bold: true } },
      {
        text: `${employeeData.VORNA} ${employeeData.NACHN}`,
      },
      { text: "\nData di nascita: ", options: { bold: true } },
      { text: employeeData.GBDAT },
    ],
    {
      x: 1,
      y: 1.5,
      fontSize: 14,
    }
  );

  // Slide 2: Informazioni Organizzative
  let slide2 = pptx.addSlide();
  slide2.addText("Posizione Organizzativa", {
    x: 1,
    y: 0.5,
    fontSize: 24,
    bold: true,
    color: "0088CC",
  });

  slide2.addText(
    [
      { text: "Unità Organizzativa: ", options: { bold: true } },
      { text: employeeData.ORGEH },
      { text: "\nPosizione: ", options: { bold: true } },
      { text: employeeData.PLANS },
      { text: "\nArea Aziendale: ", options: { bold: true } },
      { text: employeeData.WERKS },
    ],
    {
      x: 1,
      y: 1.5,
      fontSize: 14,
    }
  );

  // Slide 3: Skills e Competenze
  let slide3 = pptx.addSlide();
  slide3.addText("Competenze e Qualifiche", {
    x: 1,
    y: 0.5,
    fontSize: 24,
    bold: true,
    color: "0088CC",
  });

  slide3.addText("Qualifiche", {
    x: 1,
    y: 1,
    fontSize: 18,
    bold: true,
    color: "0088CC",
  });

  employeeData.QUALIFICATIONS.forEach((qualification, index) => {
    slide3.addText(
      [
        { text: `${index + 1}. `, options: { bold: true } },
        { text: qualification.QUALIF_TYPE },
        { text: " - " },
        { text: qualification.QUALIF_LEVEL },
      ],
      {
        x: 1,
        y: 1.5 + index * 1,
        fontSize: 14,
      }
    );
  });

  slide3.addText("Istruzione", {
    x: 1,
    y: 3.5,
    fontSize: 18,
    bold: true,
    color: "0088CC",
  });

  employeeData.ISTRUCTIONS.forEach((instruction, index) => {
    slide3.addText(
      [
        { text: `${index + 1}. `, options: { bold: true } },
        { text: instruction.SCHOOL },
        { text: " - " },
        { text: instruction.DEGREE },
        { text: " - " },
        { text: instruction.GRADUATION_DATE },
      ],
      {
        x: 1,
        y: 4 + index * 1,
        fontSize: 14,
      }
    );
  });

  // Slide 4: Timeline Carriera
  let slide4 = pptx.addSlide();
  slide4.addText("Sviluppo di Carriera", {
    x: 1,
    y: 0.5,
    fontSize: 24,
    bold: true,
    color: "0088CC",
  });

  employeeData.TIMELINE_CAREER.forEach((action, index) => {
    slide4.addText(
      [
        { text: `${index + 1}. `, options: { bold: true } },
        { text: action.ACTION_TYPE },
        { text: " - " },
        { text: action.ACTION_DATE },
        { text: " - " },
        { text: action.ACTION_DESCRIPTION },
      ],
      {
        x: 1,
        y: 1 + index * 1,
        fontSize: 14,
      }
    );
  });

  return pptx;
}
