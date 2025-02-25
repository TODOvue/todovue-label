<template>
  <tv-label @click-label="clickHandler">
    Default
  </tv-label>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const TvLabel = defineAsyncComponent(() => import("../../components/TvLabel.vue"));

const clickHandler = () => {
  console.log("clicked");
}
</script>
