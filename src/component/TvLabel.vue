<template>
  <div
    class="tv-label"
    :style="{
      backgroundColor: colorWithOpacity,
      border: `2px solid ${color}`,
    }"
    @click="handleClick"
  >
    <template v-if="textLabel">{{ textLabel }}</template>
    <slot v-else></slot>
    <i
      v-if="isEdit || isRemove"
      class="tv-label-icon"
      :class="`tv-icon-position-${iconPosition} tv-icon-${
        isEdit ? 'edit' : 'remove'
      }`"
    ></i>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "TvLabel",
  props: {
    color: {
      type: String,
      default: "",
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    isRemove: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "right",
    },
    textLabel: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const colorWithOpacity = computed(() => {
      if (!props.color) {
        return "";
      }
      const color = props.color.substring(1);
      return `rgba(${parseInt(color.substring(0, 2), 16)}, ${parseInt(
        color.substring(2, 4),
        16
      )}, ${parseInt(color.substring(4, 6), 16)}, 0.4)`;
    });

    const handleClick = () => {
      emit("clickLabel", {});
    };

    return {
      colorWithOpacity,
      handleClick,
    };
  },
  emits: ["clickLabel"],
};
</script>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
