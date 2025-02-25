<template>
  <tv-label color="#61DAFB" @click-label="clickHandler">
    HTML
  </tv-label>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const TvLabel = defineAsyncComponent(() => import("../../components/TvLabel.vue"));

const clickHandler = () => {
  console.log("clicked");
}
</script>
