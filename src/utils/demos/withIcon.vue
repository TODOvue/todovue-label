<template>
  <tv-label isEdit color="#F0DB4F" @click-label="clickHandler">
    Javascript
  </tv-label>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const TvLabel = defineAsyncComponent(() => import("../../components/TvLabel.vue"));

const clickHandler = () => {
  console.log("clicked");
}
</script>
