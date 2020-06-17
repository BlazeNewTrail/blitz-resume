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
  faXing,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faVuejs,
  faNodeJs,
  faSass,
  faYarn,
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
  faChalkboardTeacher,
  faCogs,
  faLaptopCode,
  faCubes,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import DefaultLayout from '@/layouts/Default.vue';

import SldsIcon from '@/components/SldsIcon.vue';
import jsonresume from '../resume.json';

library.add(
  faGithub,
  faTwitter,
  faXing,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faVuejs,
  faNodeJs,
  faSass,
  faYarn,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
  faAward,
  faUniversity,
  faPeopleCarry,
  faCheck,
  faChalkboardTeacher,
  faCogs,
  faLaptopCode,
  faCubes,
  faEnvelope,
);

VueC.prototype.$sidebar = true;
VueC.prototype.$resume = jsonresume;

export default (Vue, { head }) => {
  Vue.use(VueScrollTo, {
    container: 'main',
  });

  Vue.filter('date', (dateStrOrDate, opt) => {
    if (!dateStrOrDate) return '';
    try {
      const date =
        typeof dateStrOrDate === 'string'
          ? new Date(dateStrOrDate)
          : dateStrOrDate;
      const dateformat = new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        ...opt,
      });
      return dateformat.format(date);
    } catch (e) {
      return dateStrOrDate;
    }
  });

  // add slds-icon component
  Vue.component('slds-icon', SldsIcon);
  Vue.component('font-awesome', FontAwesomeIcon);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Add attributes to BODY tag
  // slds darkmode looks better with this
  head.bodyAttrs = { class: 'setupTab' };
};
