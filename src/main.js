/* eslint-disable no-param-reassign */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueScrollTo from 'vue-scrollto';
import VueC from 'vue';

import 'typeface-inter';
import '@/assets/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faVuejs,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

import {
  faAward,
  faUniversity,
  faPeopleCarry,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import DefaultLayout from '@/layouts/Default.vue';

import SldsIcon from '@/components/slds-icon.vue';

library.add(
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faVuejs,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
  faAward,
  faUniversity,
  faPeopleCarry,
  faCheck,
);

VueC.prototype.$sidebar = false;

export default function (Vue, { head }) {
  Vue.use(VueScrollTo, {
    container: 'main',
  });

  // add slds-icon component
  Vue.component('slds-icon', SldsIcon);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
  // Add attributes to BODY tag
  // slds darkmode looks better with this
  head.bodyAttrs = { class: 'setupTab' };
}
