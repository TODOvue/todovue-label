const clickHandler = () => {
  console.log("clicked");
};

const defaultScript = () => {
  return `<script>
export default {
  setup() {
    const clickHandler = () => {
      console.log("clicked");
    }
  }
  
  return {
    clickHandler
  }
}
</script>`;
};

export const demos = [
  {
    id: 1,
    title: "TvLabel Default",
    propsData: { textLabel: "Default", onClick: clickHandler },
    html: `<tempalte>
  <tv-label @click-label="clickHandler">
    Default
  </tv-label>
</tempalte>

${defaultScript()}`,
  },
  {
    id: 7,
    title: "TvLabel Default using props instead of slot",
    propsData: {
      textLabel: "Default",
      color: "#4FB7C0",
      onClick: clickHandler,
    },
    html: `<tempalte>
  <tv-label
    :textLabel="properties.name"
    :color="properties.color"
    @click-label="clickHandler"
  />
</tempalte>

<script>
import { ref } from "vue";

export default {
  setup() {
    const properties = ref({
      name: "Default",
      color: "#4FB7C0",
    });
    
    const clickHandler = () => {
      console.log("clicked");
    }
  }
  
  return {
    properties,
    clickHandler
  }
}
</script>`,
  },
  {
    id: 2,
    title: "TvLabel with color and text",
    propsData: { textLabel: "Vue", color: "#4FC08D", onClick: clickHandler },
    html: `<tempalte>
  <tv-label color="#4FC08D" @click-label="clickHandler">
    Vue
  </tv-label>
</tempalte>

${defaultScript()}`,
  },
  {
    id: 3,
    title: "TvLabel with color and text 2",
    propsData: { textLabel: "HTML", color: "#E34F26", onClick: clickHandler },
    html: `<tempalte>
  <tv-label color="#61DAFB" @click-label="clickHandler">
    HTML
  </tv-label>
</tempalte>

${defaultScript()}`,
  },
  {
    id: 4,
    title: "TvLabel with color and text 3",
    propsData: {
      textLabel: "Git - GitHub",
      color: "#F05032",
      onClick: clickHandler,
    },
    html: `<tempalte>
  <tv-label color="#DD0031" @click-label="clickHandler">
    Git - GitHub
  </tv-label>
</tempalte>

${defaultScript()}`,
  },
  {
    id: 5,
    title: "TvLabel with icon edit, right (default)",
    propsData: {
      textLabel: "Javascript",
      isEdit: true,
      color: "#F0DB4F",
      onClick: clickHandler,
    },
    html: `<tempalte>
  <tv-label isEdit color="#F0DB4F" @click-label="clickHandler">
    Javascript
  </tv-label>
</tempalte>

${defaultScript()}`,
  },
  {
    id: 6,
    title: "TvLabel with icon remove, left",
    propsData: {
      textLabel: "CSS",
      isRemove: true,
      color: "#1572B6",
      iconPosition: "left",
      onClick: clickHandler,
    },
    html: `<tempalte>
  <tv-label isRemove color="#1572B6" iconPosition="left" @click-label="clickHandler">
    CSS
  </tv-label>
</tempalte>

${defaultScript()}`,
  },
];
