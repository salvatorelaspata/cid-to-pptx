import { getEmployeeData } from "./src/api/index.js";
import { makePptx } from "./src/slides/index.js";

const employeeData = await getEmployeeData("00000001");
const pres = await makePptx(employeeData);
pres.author = "Brent Ely";
pres.company = "S.T.A.R. Laboratories";
pres.revision = "15";
pres.subject = "Annual Report";
pres.title = "PptxGenJS Sample Presentation";

// Layout Name	  Default	  Layout Slide Size
// LAYOUT_16x9	  Yes	      10 x 5.625  inches
// LAYOUT_16x10	  No	      10 x 6.25   inches
// LAYOUT_4x3	    No	      10 x 7.5    inches
// LAYOUT_WIDE	  No	      13.3 x 7.5  inches
// pres.layout = "LAYOUT_WIDE"; // Define new layout for the Presentation
// pres.defineLayout({ name:'A3', width:16.5, height:11.7 });
pres.theme = { headFontFace: "Arial Light", bodyFontFace: "Arial" };

pres.writeFile({ fileName: "Browser-PowerPoint-Demo.pptx" });
