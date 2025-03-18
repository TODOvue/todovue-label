<template>
  <tv-label color="#61DAFB" @click="clickHandler">
    HTML
  </tv-label>
</template>

<script setup>
import TvLabel from '@todovue/tvlabel';

const clickHandler = () => {
  console.log("clicked");
}
</script>
