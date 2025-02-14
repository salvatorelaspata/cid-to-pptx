export function Luxottica(pptx) {
  pptx.defineSlideMaster({
    title: "MASTER_SLIDE",
    background: { color: "FFFFFF" },
    objects: [
      { image: { x: 0, y: 0, w: "100%", h: 0.0555555556, path: "src/images/gradient.png" } },
      { text: { text: "Strictly confidential - for internal use only. Do not share or forward.", options: { fontSize: 4, x: 4.9027777778, w: 3.5416666667, h: 0.1388888889, y: 7.0694444444 } } },
      { image: { x: 0.3472222222, y: 7.1944444444, w: 1.2916666667, h: 0.1388888889, path: "src/images/Logo.png" } },
      { image: { x: 12.263888889, y: 7.125, w: 0.6805555556, h: 0.1111111111, path: "src/images/pallini.png" } },
      { image: { x: 0, y: 7.4583333333, w: "100%", h: 0.0555555556, path: "src/images/gradient.png" } },
      { rect: { x: 1.1527777778, y: 0.6111111111, w: 11.805555556, h: 2.75, fill: { color: "454545" }, line: { color: "000000", width: 1 } } },
      // TALENT CARD
      {
        text: {
          text: "Talent card template", options: {
            x: 9.5, y: 0.125, w: 3.4722222222, h: 0.4027777778, fontFace: "Arial", fontSize: 14, align: "center", valign: "middle", color: "FFFFFF", fill: { color: "9e9e9e" },
            bold: true
          }
        }
      }
    ],
    slideNumber: { x: 10.916666667, y: 7.125, w: 0.1805555556, h: 0.2083333333, fontSize: 0.0972222222 },
  });
}

