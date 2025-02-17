// makePptx.js
import PptxGenJS from "pptxgenjs";
import { Luxottica } from "../templates/Luxottica.js";
import { firstSlide } from "./Slide1.js";
import { secondSlide } from "./Slide2.js"
export async function makePptx(employee) {
  
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";

  // Assumendo che employeeData.EmployeeTC[0] contenga i dati necessari:



  // Definisci il master passando il testo dinamico
  Luxottica(pptx);

  // Genera le slide utilizzando il master "TEMPLATE_LUXOTTICA"
  firstSlide(pptx, employee);
  secondSlide(pptx, employee);

  return pptx;
}
