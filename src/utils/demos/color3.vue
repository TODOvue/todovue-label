<template>
  <tv-label color="#DD0031" @click="clickHandler">
    Git - GitHub
  </tv-label>
</template>

<script setup>
import TvLabel from '@todovue/tvlabel';

const clickHandler = () => {
  console.log("clicked");
}
</script>
