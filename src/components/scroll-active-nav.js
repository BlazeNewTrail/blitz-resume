import { Container } from 'typedi';
import ScrollActiveClass from '@/directives/scroll-active-nav-core';

export default {
  props: {
    tag: {
      type: String,
      default: 'nav',
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
      this.links = this.$el.querySelectorAll('li[data-navkey]');
    },
    activeChange(activeKey) {
      this.activeKey = activeKey;
      this.setActiveItem();
    },
    setActiveItem() {
      this.links.forEach((el) => {
        if (el.dataset.navkey === this.activeKey) {
          el.classList.add('slds-is-active');
        } else {
          el.classList.remove('slds-is-active');
        }
      });
    },
  },
  mounted() {
    Container.get(ScrollActiveClass).registerCallback(
      this.activeChange.bind(this),
    );
    this.findLinks();
  },
  updated() {
    this.findLinks();
  },
  beforeDestroy() {
    // this.scrollActive.destroyObserver();
  },
  render(createElement) {
    return createElement(
      this.tag, // tag name
      this.$slots.default, // array of children
    );
  },
};
