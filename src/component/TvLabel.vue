<template>
  <div
    class="tv-label"
    :style="{
      backgroundColor: colorWithOpacity,
      border: `2px solid ${color}`,
    }"
    @click="handleClick"
  >
    <slot v-if="!text"></slot>
    <template v-if="text">{{ text }}</template>
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
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    colorWithOpacity() {
      if (!this.color) {
        return "";
      }
      const color = this.color.substring(1);
      return `rgba(${parseInt(color.substring(0, 2), 16)}, ${parseInt(
        color.substring(2, 4),
        16
      )}, ${parseInt(color.substring(4, 6), 16)}, 0.4)`;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
