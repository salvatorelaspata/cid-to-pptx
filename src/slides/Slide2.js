export function secondSlide(pptx, employee) {
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
        path: "./src/images/sagoma.jpeg",
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

    // SUCCESSION PLANS INFORMATION
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.4444444444,
        y: 3.7916666667,
        w: 7.4305555556,
        h: 2.0138888889,
        fill: { color: "FFFFFF" },
        line: { color: "000000", width: 1 }
    });

    // SUCCESSION PLANS INFORMATION TAG
    slide.addText("SUCCESSION PLANS INFORMATION", {
        x: 0.5555555556,
        y: 3.5833333333,
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

    // C&B PACKAGE 
    slide.addShape(pptx.ShapeType.rect, {
        x: 7.9722222222,
        y: 3.7916666667,
        w: 5,
        h: 2.0138888889,
        fill: { color: "FFFFFF" },
        line: { color: "000000", width: 1 }
    });

    // C&B PACKAGE  TAG
    slide.addText("C&B PACKAGE (Visibility restricted)", {
        x: 8.0694444444,
        y: 3.5833333333,
        w: 3.3055555556,
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