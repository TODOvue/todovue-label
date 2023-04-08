export const demos = [
  {
    id: 1,
    title: "TvLabel Default",
    propsData: { text: "Default" },
    html: `<tv-label>
  Default
</tv-label>`,
  },
  {
    id: 2,
    title: "TvLabel with color and text",
    propsData: { text: "Vue", color: "#4FC08D" },
    html: `<tv-label color="#4FC08D">
  Vue
</tv-label>`,
  },
  {
    id: 3,
    title: "TvLabel with color and text 2",
    propsData: { text: "HTML", color: "#E34F26" },
    html: `<tv-label color="#61DAFB">
  HTML
</tv-label>`,
  },
  {
    id: 4,
    title: "TvLabel with color and text 3",
    propsData: { text: "Git - GitHub", color: "#F05032" },
    html: `<tv-label color="#DD0031">
  Git - GitHub
</tv-label>`,
  },
  {
    id: 5,
    title: "TvLabel with icon edit, right (default)",
    propsData: { text: "Javascript", isEdit: true, color: "#F0DB4F" },
    html: `<tv-label isEdit>
  Javascript
</tv-label>`,
  },
  {
    id: 6,
    title: "TvLabel with icon remove, left",
    propsData: {
      text: "CSS",
      isRemove: true,
      color: "#1572B6",
      iconPosition: "left",
    },
    html: `<tv-label isRemove iconPosition="left">
  CSS
</tv-label>`,
  },
];
