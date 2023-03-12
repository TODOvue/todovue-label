<template>
  <tv-demo>
    <h2 class="title">TODOvue Label</h2>
    <div v-for="(demo, index) in demos" :key="`demo-${index}`" class="demo">
      <h2>{{ demo.title }}</h2>
      <tv-label
        :is-edit="demo.buttonProps.isEdit"
        :is-remove="demo.buttonProps.isRemove"
        :color="demo.color"
      >
        {{ demo.buttonText }}
      </tv-label>
    </div>
  </tv-demo>
</template>

<script>
import TvDemo from "todovue-demo";
import TvLabel from "@/component/TvLabel.vue";
export default {
  name: "DemoPage",
  data() {
    return {
      demos: [
        {
          title: "TvLabel default",
          buttonProps: {},
          buttonText: "Vue",
          color: "#4FC08D",
        },
        {
          title: "TvLabel edit",
          buttonProps: { isEdit: true },
          buttonText: "Javascript",
          color: "#F0DB4F",
        },
        {
          title: "TvLabel remove",
          buttonProps: { isRemove: true },
          buttonText: "CSS",
          color: "#1572B6",
        },
      ],
    };
  },
  components: {
    TvLabel,
    TvDemo,
  },
};
</script>

<style></style>
