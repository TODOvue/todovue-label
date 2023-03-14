<template>
  <div
    class="label"
    :style="{
      backgroundColor: colorWithOpacity,
      border: `2px solid ${color}`,
    }"
    @click="handleClick"
  >
    <slot></slot>
    <i
      v-if="isEdit || isRemove"
      :class="`icon-${isEdit ? 'edit' : 'remove'}`"
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

<style scoped>
.dark-mode .label {
  color: var(--color-text-dark);
}

.light-mode .label {
  color: var(--color-text-light);
}

.label {
  border-radius: 100px;
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  padding: 4px 8px;
  text-transform: uppercase;
  cursor: pointer;
  min-width: 50px;
  text-align: center;
}

.label i {
  background-size: cover;
  width: 10px;
  height: 10px;
  float: right;
  margin-left: 8px;
}

.label .icon-edit {
  background-image: url("@/assets/icons/edit.svg");
}

.label .icon-remove {
  background-image: url("@/assets/icons/remove.svg");
}
</style>
