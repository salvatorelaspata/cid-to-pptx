export function firstSlide(pptx, employee) {
  const slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });
 

  slide.addText(`${employee.name} | ${employee.currentJobTitle}`, {
    x: 0.5,
    y: 0.1,
    w: 10,
    h: 0.5,
    fontFace: "Arial",
    fontSize: 22,
    align: "left",
    color: "000000"
  });

  // Circle and Image 
  const circleDiameter = 1.7;
  const circleX = 0.15;
  const circleY = 0.6111111111;

  slide.addShape(pptx.ShapeType.ellipse, {
    x: circleX,
    y: circleY,
    w: circleDiameter,
    h: circleDiameter,
    fill: { color: "FFFFFF" },
    line: { color: "454545", width: 2.2 }
  });

  const imageDiameter = 1;
  const imageX = circleX + (circleDiameter - imageDiameter) / 2;
  const imageY = circleY + (circleDiameter - imageDiameter) / 2;

  slide.addImage({
    path: "./srv/images/sagoma.jpeg",
    x: imageX,
    y: imageY,
    w: imageDiameter,
    h: imageDiameter,
    rounding: true
  });

  // Left Side Data 
  const leftSideData = [
    `EXPERIENCE: ${employee.experienceYears || "N/A"} years`,
    `AGE: ${employee.age || "N/A"} years`,
    `COMPANY TENURE: ${employee.companyTenure || "N/A"} years`,
    `TENURE IN POSITION: ${employee.tenureInPosition || "N/A"} years`,
    `MOBILITY: ${employee.mobility || "N/A"}`,
    `CURRENT LINE MANAGER: ${employee.currentLineManager || "N/A"}`,
    `CURRENT HRBP: ${employee.currentHRBP || "N/A"}`,
    `JOB LEVEL: ${employee.jobLevel || "N/A"}`,
    `GRADE: ${employee.grade || "N/A"}`
  ];

  let yPos = 0.6111111111;
  const xPos = 2.1527777778;
  const lineHeight = 0.3;

  leftSideData.forEach(line => {
    slide.addText(line, {
      x: xPos,
      y: yPos,
      w: 5.25,
      h: lineHeight,
      fontFace: "Arial",
      fontSize: 12,
      color: "FFFFFF",
      align: "left",
      valign: "top"
    });
    yPos += lineHeight;
  });

  // Right Side Data 
  const rightSideData = [
    `BUSINESS: ${employee.business || "N/A"}`,
    `SCOPE: ${employee.scope || "N/A"}`,
    `MACROFUNCTION/FUNCTION: ${employee.macroFunction || "N/A"} / ${employee.function || "N/A"}`,
    `REGION: ${employee.region || "N/A"}`,
    `COUNTRY / LOCATION: ${employee.country || "N/A"} / ${employee.location || "N/A"} / ${employee.otherLocation || "N/A"}`,
    `NET SALES/BUDGET: ${employee.netSales || "N/A"}`,
    `PEOPLE MANAGED: ${employee.peopleManaged || "N/A"} HC (${employee.directReports || "N/A"} Direct reports)`,
    `RISK OF LOSS: ${employee.riskOfLoss || "N/A"}`
  ];

  let yPosRight = 0.6111111111;
  const xPosRight = 6.7222222222;
  const lineHeightRight = 0.3;

  rightSideData.forEach(line => {
    slide.addText(line, {
      x: xPosRight,
      y: yPosRight,
      w: 6.0972222222,
      h: lineHeightRight,
      fontFace: "Arial",
      fontSize: 12,
      color: "FFFFFF",
      align: "left",
      valign: "top"
    });
    yPosRight += lineHeightRight;
  });

  // EDUCATION section
  const educations = employee.educations || [];
  let educationText = "";
  educations.forEach(e => {
    educationText += `• ${e.education}\n`;
  });
  if (educations.length > 0) {
    educationText = educationText.slice(0, -1);
  }

  // WORK EXPERIENCE (Internal)
  const workExpInt = employee.internalWorkExperience || [];
  // WORK EXPERIENCE (External)
  const workExp = employee.experience || [];
  
  let combinedExpText = "";
  workExpInt.forEach(e => {
    combinedExpText += `• (int) ${e.intExperienceRow}\n`;
  });
  workExp.forEach(e => {
    combinedExpText += `• (ext) ${e.experienceRow}\n`;
  });
  if (combinedExpText.length > 0) {
    combinedExpText = combinedExpText.slice(0, -1);
  }

  // WORK EXPERIENCE AND EDUCATION section
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.3472222222,
    y: 3.7638888889,
    w: 10.208333333,
    h: 2.0138888889,
    fill: { color: "FFFFFF" },
    line: { color: "000000", width: 1 }
  });

  // WORK EXPERIENCE AND EDUCATION TAG
  slide.addText("WORK EXPERIENCE AND EDUCATION ", {
    x: 0.4722222222,
    y: 3.5555555556,
    w: 3.4444444444,
    h: 0.2916666667,
    fontFace: "Arial",
    fontSize: 12,
    align: "center",
    valign: "middle",
    color: "000000",
    fill: { color: "ffffff" },
    bold: true
  });

  const startWidth = 0.4722222222;
  const widthTable = 5;
  const commonOptions = {
    w: widthTable,
    fontFace: "Arial",
    fontSize: 12,
    color: "000000",
    align: "left"
  };

  // Combined Work Experience Column with (int) and (ext) differentiation
  slide.addText(combinedExpText, {
    x: startWidth,
    y: 4.1,
    h: 1.65,
    valign: "top",
    wrap: true,
    ...commonOptions
  });

  // Education Column
  slide.addText("Education:", { 
    x: widthTable + startWidth, 
    y: 3.85, 
    h: 0.25, 
    ...commonOptions 
  });
  slide.addText(educationText, { 
    x: widthTable + startWidth, 
    y: 4.1, 
    h: 1.65, 
    valign: "top", 
    wrap: true, 
    ...commonOptions 
  });

  // LANGUAGE section population
  const languages = employee.languages || [];
  let languageText = "";
  languages.forEach(lang => {
    languageText += `${lang.language} (${lang.grade}), `;
  });
  languageText = languageText.slice(0, -2);

  // LANGUAGE 
  slide.addShape(pptx.ShapeType.rect, {
    x: 10.666666667,
    y: 3.7638888889,
    w: 2.3194444444,
    h: 2.0277777778,
    fill: { color: "FFFFFF" },
    line: { color: "000000", width: 1 }
  });

  // LANGUAGE TAG
  slide.addText("LANGUAGE ", {
    x: 10.736111111,
    y: 3.5555555556,
    w: 1.25,
    h: 0.2916666667,
    fontFace: "Arial",
    fontSize: 12,
    align: "center",
    valign: "middle",
    color: "000000",
    fill: { color: "ffffff" },
    bold: true
  });

  // LANGUAGE TEXT
  slide.addText(languageText, {
    x: 10.736111111,
    y: 3.85,
    w: 2.15,
    h: 1.8,
    fontFace: "Arial",
    fontSize: 12,
    align: "left",
    valign: "top",
    color: "000000",
    wrap: true
  });

  // EXPERTISE 
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.3611111111,
    y: 6.0277777778,
    w: 4.4583333333,
    h: 1.0277777778,
    fill: { color: "FFFFFF" },
    line: { color: "000000", width: 1 }
  });

  // EXPERTISE TAG
  slide.addText("EXPERTISE ", {
    x: 0.4722222222,
    y: 5.8194444444,
    w: 1.1805555556,
    h: 0.2916666667,
    fontFace: "Arial",
    fontSize: 12,
    align: "center",
    valign: "middle",
    color: "000000",
    fill: { color: "ffffff" },
    bold: true
  });

  // DEVELOPMENT AREAS
  slide.addShape(pptx.ShapeType.rect, {
    x: 4.9305555556,
    y: 6.0277777778,
    w: 4.4583333333,
    h: 1.0277777778,
    fill: { color: "FFFFFF" },
    line: { color: "000000", width: 1 }
  });

  // DEVELOPMENT AREAS TAG
  slide.addText("DEVELOPMENT AREAS", {
    x: 5.0555555556,
    y: 5.8194444444,
    w: 2.5694444444,
    h: 0.2916666667,
    fontFace: "Arial",
    fontSize: 12,
    align: "center",
    valign: "middle",
    color: "000000",
    fill: { color: "ffffff" },
    bold: true
  });

  // TALENT INFORMATION
  slide.addShape(pptx.ShapeType.rect, {
    x: 9.5,
    y: 6.0277777778,
    w: 3.4722222222,
    h: 1.0138888889,
    fill: { color: "FFFFFF" },
    line: { color: "000000", width: 1 }
  });

  // TALENT INFORMATION TAG
  slide.addText("TALENT INFORMATION", {
    x: 9.6111111111,
    y: 5.8194444444,
    w: 2.5694444444,
    h: 0.2916666667,
    fontFace: "Arial",
    fontSize: 12,
    align: "center",
    valign: "middle",
    color: "000000",
    fill: { color: "ffffff" },
    bold: true
  });

  return slide;
}
