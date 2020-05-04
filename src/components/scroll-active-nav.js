import ScrollActiveClass from "@/directives/scroll-active-nav-core";
import { eventbus } from "@/directives/scroll-active-nav-container";

export default {
  props: {
    tag: {
      type: String,
      default: "nav",
    },
  },
  data() {
    return {
      scrollActive: null,
      activeKey: null,
      links: null,
    };
  },
  methods: {
    findLinks() {
      this.links = this.$el.querySelectorAll("li[data-navkey]");
    },
    activeChange(activeKey) {
      this.activeKey = activeKey;
      this.setActiveItem();
    },
    setActiveItem() {
      this.links.forEach((el) => {
        if (el.dataset.navkey === this.activeKey) {
          el.classList.add("slds-is-active");
        } else {
          el.classList.remove("slds-is-active");
        }
      });
    },
  },
  mounted() {
    if (window && "IntersectionObserver" in window) {
      this.scrollActive = new ScrollActiveClass({
        callback: this.activeChange,
      });
      eventbus.$on("sa-nav-sections-register", (elements) => {
        this.scrollActive.createObserver();
        elements.forEach((el) => this.scrollActive.registerSection(el));
      });
    }
    this.findLinks();
  },
  updated() {
    this.findLinks();
  },
  beforeDestroy() {
    this.scrollActive.destroyObserver();
  },
  render: function(createElement) {
    return createElement(
      this.tag, // tag name
      this.$slots.default // array of children
    );
  },
};
