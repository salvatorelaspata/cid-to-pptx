// import { Router } from "express";
// const router = Router();

// import { getEmployeeData } from "./api/index.js";
// import { makePptx } from "./slides/index.js";

// // Nell'endpoint GET in sap-pptx.js (o nel service CAP)
// router.get("/generate-hr-pptx/:employeeId", async (req, res) => {
//   try {
//     const employeeData = await getEmployeeData(req.params.employeeId);
//     console.log("Dati completi ricevuti:", employeeData);

//     // Estrai il singolo dipendente dall'array (assumendo che l'ID corrisponda al primo o che l'array ne contenga uno solo)
//     const employee = employeeData.EmployeeTC && employeeData.EmployeeTC.length > 0 
//                        ? employeeData.EmployeeTC[0] 
//                        : null;
    
//     if (!employee) {
//       return res.status(404).json({ error: "Dipendente non trovato" });
//     }
    
//     console.log("Dipendente passato a makePptx:", employee);
    
//     const pres = await makePptx(employee);
    
//     // Impostazioni del pptx (come già definite)
//     pres.author = "Brent Ely";
//     pres.company = "S.T.A.R. Laboratories";
//     pres.revision = "15";
//     pres.subject = "Annual Report";
//     pres.title = "PptxGenJS Sample Presentation";
//     pres.theme = { headFontFace: "Arial Light", bodyFontFace: "Arial" };

//     const pptxBuffer = await pres.stream();
//     const filename = `Employee_${req.params.employeeId}_Profile.pptx`;
//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.presentationml.presentation"
//     );
//     res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
//     res.setHeader("Content-Length", `${pptxBuffer.length}`);
//     res.end(Buffer.from(pptxBuffer, "binary"));
//   } catch (error) {
//     console.error("Errore:", error);
//     res.status(500).json({
//       error: "Errore durante la generazione della presentazione",
//       details: error.message,
//     });
//   }
// });


// export default router;


// const srv = await cds.connect.to(Sue)
//   // unbound actions/functions
//   srv.sum(1,2)
// console.log (srv.sum(1,2))