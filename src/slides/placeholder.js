export function placeholder(pptx) {
  pptx.defineSlideMaster({
    title: "PLACEHOLDER_SLIDE",
    background: { color: "FFFFFF" },
    objects: [
      { rect: { x: 0, y: 0, w: "100%", h: 0.75, fill: { color: "F1F1F1" } } },
      {
        text: { text: "Status Report", options: { x: 0, y: 0, w: 6, h: 0.75 } },
      },
      {
        placeholder: {
          options: {
            name: "body",
            type: "body",
            x: 0.6,
            y: 1.5,
            w: 12,
            h: 5.25,
          },
          text: "(custom placeholder text!)",
        },
      },
    ],
    slideNumber: { x: 0.3, y: "95%" },
  });
}
// let slide = pptx.addSlide({ masterName: "PLACEHOLDER_SLIDE" });

// // Add text, charts, etc. to any placeholder using its `name`
// slide.addText("Body Placeholder here!", { placeholder: "body" });
