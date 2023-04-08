import { shallowMount } from "@vue/test-utils";
import TvLabel from "@/component/TvLabel.vue";

describe("TvButton Component", () => {
  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvLabel, {
      props: {
        text: "Vue",
        color: "#4FC08D",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("emits a click event when the label is clicked", () => {
    const wrapper = shallowMount(TvLabel);
    wrapper.find("div").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
