<template>
  <tv-demo :component="component" :variants="demos" />
</template>

<script>
import { shallowRef } from "vue";
import TvDemo from "todovue-demo";
import TvLabel from "@/component/TvLabel.vue";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoLabel",
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
};
</script>

<style></style>
