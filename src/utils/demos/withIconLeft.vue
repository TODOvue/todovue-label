<template>
  <tv-label isRemove color="#1572B6" iconPosition="left" @click-label="clickHandler">
    CSS
  </tv-label>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const TvLabel = defineAsyncComponent(() => import("../../components/TvLabel.vue"));

const clickHandler = () => {
  console.log("clicked");
}
</script>
