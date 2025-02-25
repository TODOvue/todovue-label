<template>
  <tv-label color="#DD0031" @click-label="clickHandler">
    Git - GitHub
  </tv-label>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const TvLabel = defineAsyncComponent(() => import("../../components/TvLabel.vue"));

const clickHandler = () => {
  console.log("clicked");
}
</script>
