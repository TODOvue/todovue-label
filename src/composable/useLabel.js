import { computed } from 'vue';

export const useLabel = (props) => {
  const icons = import.meta.glob('../assets/icons/*.svg', { eager: true, query: '?raw', import: 'default' });
  
  const iconSrc = computed(() => {
    if (props.isEdit) return 'edit';
    if (props.isRemove) return 'remove';
    return null;
  });
  
  const iconContent = computed(() => {
    return iconSrc.value ? icons[`../assets/icons/${iconSrc.value}.svg`] : '';
  });
  
  const colorWithOpacity = computed(() => {
    if (!props?.color?.startsWith('#') || props?.color?.length !== 7) return '';
    const [r, g, b] = props.color
      .substring(1)
      .match(/.{2}/g)
      .map((hex) => parseInt(hex, 16));
    
    return `rgba(${r}, ${g}, ${b}, 0.4)`;
  });
  
  return {
    colorWithOpacity,
    iconContent,
  };
}
