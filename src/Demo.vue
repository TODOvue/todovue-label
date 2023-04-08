<template>
  <tv-demo :component="component" :variants="demos"></tv-demo>
</template>

<script>
import { defineComponent, shallowRef } from "vue";
import TvDemo from "todovue-demo";
import TvLabel from "@/component/TvLabel.vue";
import { demos } from "@/utils/mocks.js";

export default defineComponent({
  name: "DemoButton",
  setup() {
    const component = shallowRef(TvLabel);

    return {
      component,
      demos,
    };
  },
  components: {
    TvDemo,
  },
});
</script>

<style></style>
