// srv/presentation-service.js
import cds from '@sap/cds';
import { getEmployeeData } from './api/index.js';
import { makePptx } from './slides/index.js';
import JSZip from 'jszip';

export default cds.service.impl(async function () {

  /**
   * Azione per generare il PPTX di un singolo dipendente.
   * Viene invocata con, ad esempio:
   *   singlePPTX({ employeeId: '1' })
   */
  this.on('singlePPTX', async (req) => {
    const employeeId = req.data.employeeId;
    try {
      // Recupera i dati del dipendente
      const employeeData = await getEmployeeData(employeeId);
      const employee = (employeeData.EmployeeTC && employeeData.EmployeeTC.length > 0)
        ? employeeData.EmployeeTC[0]
        : null;
      if (!employee) {
        return req.error(404, 'Dipendente non trovato');
      }

      // Genera la presentazione PPTX per il dipendente
      const pres = await makePptx(employee);
      pres.author = "Brent Ely";
      pres.company = "S.T.A.R. Laboratories";
      pres.revision = "15";
      pres.subject = "Annual Report";
      pres.title = "PptxGenJS Sample Presentation";
      pres.theme = { headFontFace: "Arial Light", bodyFontFace: "Arial" };

      // Usa write("nodebuffer") per ottenere un Buffer valido
      const pptxBuffer = await pres.write("nodebuffer");
      console.log("Buffer PPTX length:", pptxBuffer.length);

      // Imposta gli header per il download
      req.res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.presentationml.presentation");
      req.res.setHeader("Content-Disposition", `attachment; filename=Employee_${employeeId}_Profile.pptx`);
      req.res.setHeader("Content-Length", pptxBuffer.length.toString());
      
      req.res.end(pptxBuffer);
    } catch (error) {
      return req.error(500, `Errore durante la generazione del PPTX: ${error.message}`);
    }
  });

  /**
   * Azione per generare in batch tutti i PPTX dei dipendenti e restituire uno ZIP.
   * Viene invocata senza parametri, ad es.:
   *   massivePPTX({})
   */
  this.on('massivePPTX', async (req) => {
    try {
      // Recupera tutti i dati dei dipendenti
      const employeeData = await getEmployeeData();
      if (!employeeData.EmployeeTC || employeeData.EmployeeTC.length === 0) {
        return req.error(404, 'Nessun dipendente trovato');
      }

      const zip = new JSZip();

      // Itera su tutti i dipendenti e genera il PPTX per ognuno
      for (const employee of employeeData.EmployeeTC) {
        const pres = await makePptx(employee);
        pres.author = "Brent Ely";
        pres.company = "S.T.A.R. Laboratories";
        pres.revision = "15";
        pres.subject = "Annual Report";
        pres.title = "PptxGenJS Sample Presentation";
        pres.theme = { headFontFace: "Arial Light", bodyFontFace: "Arial" };

        const pptxBuffer = await pres.write("nodebuffer");
        // Usa l'employeeId (o un altro identificativo) per il filename
        const filename = `Employee_${employee.employeeId}_Profile.pptx`;
        zip.file(filename, pptxBuffer);
      }

      // Genera lo ZIP come Buffer
      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
      console.log("Buffer ZIP length:", zipBuffer.length);

      // Imposta gli header per il download dello ZIP
      req.res.setHeader("Content-Type", "application/zip");
      req.res.setHeader("Content-Disposition", "attachment; filename=Employee_Profiles_All.zip");
      req.res.setHeader("Content-Length", zipBuffer.length.toString());
      
      req.res.end(zipBuffer);
    } catch (error) {
      return req.error(500, `Errore durante la generazione dello ZIP: ${error.message}`);
    }
  });

});
