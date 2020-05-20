// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueScrollTo from 'vue-scrollto';

import DefaultLayout from '~/layouts/Default.vue'

import 'typeface-inter';
import '@/assets/styles.scss';

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo, {
    container: 'main'
  });

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to BODY tag
  // slds darkmode looks better with this
  head.bodyAttrs = { class: 'setupTab' }
}
