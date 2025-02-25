<template>
  <tv-label
    :textLabel="properties.name"
    :color="properties.color"
    @click-label="clickHandler"
  />
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const TvLabel = defineAsyncComponent(() => import("../../components/TvLabel.vue"));

const properties = ref({
  name: "Default",
  color: "#4FB7C0",
});

const clickHandler = () => {
  console.log("clicked");
}
</script>
