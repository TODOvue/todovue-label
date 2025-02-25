import { computed } from "vue";

export const useLabel = (props) => {
  const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });
  
  const processedIcons = Object.keys(icons).reduce((acc, path) => {
    const key = path.split('/').pop().replace('.svg', '');
    acc[key] = new URL(icons[path].default, import.meta.url).href;
    return acc;
  }, {});
  
  const iconSrc = computed(() => {
    if (props.isEdit) return processedIcons['edit'];
    if (props.isRemove) return processedIcons['remove'];
    return null;
  });
  
  const colorWithOpacity = computed(() => {
    if (!props?.color?.startsWith("#") || props?.color?.length !== 7) return "";
    const [r, g, b] = props.color
      .substring(1)
      .match(/.{2}/g)
      .map((hex) => parseInt(hex, 16));
    
    return `rgba(${r}, ${g}, ${b}, 0.4)`;
  });
  
  return {
    colorWithOpacity,
    iconSrc,
  };
}
