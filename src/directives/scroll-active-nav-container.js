import { Container } from 'typedi';
import ScrollActiveClass from '@/directives/scroll-active-nav-core';

const defaultOptions = {
  selector: 'article[id]',
};

export default {
  inserted(el, binding, vnode) {
    const options = Object.assign(defaultOptions, binding.value);
    const scrollActive = Container.get(ScrollActiveClass);

    // find scrollable parent
    const getScrollParent = (node) => {
      if (node === null) {
        return null;
      }
      if (node.scrollHeight > node.clientHeight) {
        return node;
      }
      return getScrollParent(node.parentNode);
    };

    if (window && 'IntersectionObserver' in window) {
      scrollActive.createObserver({
        intersection: {
          root: getScrollParent(el),
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      });

      vnode.context.$nextTick(() => {
        const sections = el.querySelectorAll(options.selector);
        sections.forEach((s) => scrollActive.registerSection(s));
      });
    }
  },
  componentUpdated(el, binding, vnode) {
    // TODO handle all the cases...
    const options = Object.assign(defaultOptions, binding.value);
    const scrollActive = Container.get(ScrollActiveClass);

    if (window && 'IntersectionObserver' in window) {
      scrollActive.createObserver();

      vnode.context.$nextTick(() => {
        const sections = el.querySelectorAll(options.selector);
        sections.forEach((s) => scrollActive.registerSection(s));
      });
    }
  },
  unbind() {
    // const options = Object.assign(defaultOptions, binding.value);
    // const sections = el.querySelectorAll(options.selector);
    // eventbus.$emit('sa-nav-sections-unregister', sections);
  },
};
