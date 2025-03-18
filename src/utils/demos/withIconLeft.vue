<template>
  <tv-label isRemove color="#1572B6" iconPosition="left" @click="clickHandler">
    CSS
  </tv-label>
</template>

<script setup>
import TvLabel from '@todovue/tvlabel';

const clickHandler = () => {
  console.log("clicked");
}
</script>
