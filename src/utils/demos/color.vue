<template>
  <tv-label color="#4FC08D" @click="clickHandler">
    Vue
  </tv-label>
</template>

<script setup>
import TvLabel from '@todovue/tvlabel';

const clickHandler = () => {
  console.log("clicked");
}
</script>
