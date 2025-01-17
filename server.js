import express from "express";
import sapPptxRouter from "./src/sap-pptx.js";

const app = express();
const port = 3000;

app.use("/api", sapPptxRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
