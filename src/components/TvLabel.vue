<script setup>
import { computed } from "vue";
import { useLabel } from "../composable/useLabel.js";

const props = defineProps({
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
});

const emit = defineEmits(["clickLabel"]);


const { colorWithOpacity, iconSrc } = useLabel(props);
</script>

<template>
  <div
    class="tv-label"
    :style="{
      backgroundColor: colorWithOpacity,
      border: `2px solid ${color}`,
    }"
      @click="emit('clickLabel')"
  >
    <template v-if="textLabel">{{ textLabel }}</template>
    <slot v-else></slot>
    <img
      :alt="isEdit ? 'edit-icon' : 'remove-icon'"
      :class="`tv-icon-position-${iconPosition}`"
      :src="iconSrc"
      class="tv-label-icon"
      v-if="isEdit || isRemove"
    />
  </div>
</template>

<style lang="scss" src="../assets/scss/style.scss"></style>
