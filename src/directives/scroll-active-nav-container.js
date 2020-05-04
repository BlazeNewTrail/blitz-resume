import Vue from 'vue';

export const eventbus = new Vue();

const defaultOptions = {
  selector: 'article[id]'
}

export default {
    bind(el, binding, vnode) {
      const options = Object.assign(defaultOptions, binding.value);

      vnode.context.$nextTick(() => {
        const sections = el.querySelectorAll(options.selector);
        eventbus.$emit('sa-nav-sections-register', sections);
      })
    },
    componentUpdated(el, binding, vnode){
      // TODO handle all the cases...
      const options = Object.assign(defaultOptions, binding.value);

      vnode.context.$nextTick(() => {
        const sections = el.querySelectorAll(options.selector);
        eventbus.$emit('sa-nav-sections-register', sections);
      })
    },
    unbind(el, binding) {
      const options = Object.assign(defaultOptions, binding.value);
      const sections = el.querySelectorAll(options.selector);
      eventbus.$emit('sa-nav-sections-unregister', sections);
    }
}