import { Router } from "express";
const router = Router();

import { getEmployeeData } from "./api/index.js";
import { makePptx } from "./slides/index.js";

router.get("/generate-hr-pptx/:employeeId", async (req, res) => {
  try {
    const employeeData = await getEmployeeData(req.params.employeeId);
    const pres = await makePptx(employeeData);

    const pptxBuffer = await pres.stream();
    const filename = `Employee_${req.params.employeeId}_Profile.pptx`;
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    );
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.setHeader("Content-Length", `${pptxBuffer.length}`);
    res.end(Buffer.from(pptxBuffer, "binary"));
  } catch (error) {
    console.error("Errore:", error);
    res.status(500).json({
      error: "Errore durante la generazione della presentazione",
      details: error.message,
    });
  }
});

export default router;
