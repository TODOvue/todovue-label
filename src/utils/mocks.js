import Color from "./demos/color.vue?raw";
import Color2 from "./demos/color2.vue?raw";
import Color3 from "./demos/color3.vue?raw";
import Default from "./demos/default.vue?raw";
import DefaultProps from "./demos/defaultProps.vue?raw";
import WithIcon from "./demos/withIcon.vue?raw";
import WithIconLeft from "./demos/withIconLeft.vue?raw";

const clickHandler = () => {
  console.log("clicked");
};

export const demos = [
  {
    id: 1,
    title: "Default",
    propsData: { textLabel: "Default", onClick: clickHandler },
    html: Default,
  },
  {
    id: 2,
    title: "Default using props instead of slot",
    propsData: {
      textLabel: "Default",
      color: "#4FB7C0",
      onClick: clickHandler,
    },
    html: DefaultProps,
  },
  {
    id: 3,
    title: "With color",
    propsData: { textLabel: "Vue", color: "#4FC08D", onClick: clickHandler },
    html: Color,
  },
  {
    id: 4,
    title: "With icon edit (default right)",
    propsData: {
      textLabel: "Javascript",
      isEdit: true,
      color: "#F0DB4F",
      onClick: clickHandler,
    },
    html: WithIcon,
  },
  {
    id: 5,
    title: "With icon remove - Position: left",
    propsData: {
      textLabel: "CSS",
      isRemove: true,
      color: "#1572B6",
      iconPosition: "left",
      onClick: clickHandler,
    },
    html: WithIconLeft,
  },
  {
    id: 6,
    title: "With color 2",
    propsData: { textLabel: "HTML", color: "#E34F26", onClick: clickHandler },
    html: Color2,
  },
  {
    id: 7,
    title: "With color 3",
    propsData: {
      textLabel: "Git - GitHub",
      color: "#F05032",
      onClick: clickHandler,
    },
    html: Color3,
  },
];
