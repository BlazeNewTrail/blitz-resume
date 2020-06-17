import { Container } from 'typedi';
import ScrollActiveClass from '@/directives/scroll-active-nav-core';

export default {
  data() {
    return {
      activeKey: null,
      sections: [],
    };
  },
  methods: {
    scrollActiveCallback(activeKey, sections) {
      this.activeKey = activeKey;
      this.sections = sections;
    },
  },
  created() {
    Container.get(ScrollActiveClass).registerCallback(
      this.scrollActiveCallback.bind(this),
    );
  },
  beforeDestroy() {
    // this.scrollActive.destroyObserver();
  },
  render() {
    return this.$scopedSlots.default({
      activeKey: this.activeKey,
      sections: this.sections,
    });
  },
};
