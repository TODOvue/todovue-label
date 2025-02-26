<script setup>
import { defineAsyncComponent } from 'vue'
import TvDemo from '@todovue/tvdemo'
import { demos } from '../utils/mocks.js'

const TvLabel = defineAsyncComponent(() => import('../components/TvLabel.vue'))
</script>

<template>
  <tv-demo
    :component="TvLabel"
    :variants="demos"
    nameComponent="TvLabel"
    npmInstall="@todovue/tvlabel"
    sourceLink="https://github.com/TODOvue/todovue-label"
    urlClone="https://github.com/TODOvue/todovue-label.git"
    verion="1.0.1"
  ></tv-demo>
</template>
