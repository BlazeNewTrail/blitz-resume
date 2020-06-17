<template>
  <Layout>
    <div
      v-scroll-active-nav-container
      class="slds-grid slds-grid_vertical slds-gutters_direct"
    >
      <div class="slds-col slds-p-bottom_small">
        <about id="about" data-navlabel="About" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <work id="work" data-navlabel="Work" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <skills id="skills" data-navlabel="Skills" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <projects id="projects" data-navlabel="Projects" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <education id="education" data-navlabel="Education" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <awards id="awards" data-navlabel="Awards" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <component :is="'talks'" id="talks" data-navlabel="Talks" />
      </div>
    </div>
  </Layout>
</template>

<script>
import About from '@/components/About.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue';
import Work from '@/components/WorkExperience.vue';
import Awards from '@/components/Awards.vue';
import Talks from '@/components/Talks.vue';
import Projects from '@/components/Projects.vue';
import ScrollActiveNavContainer from '@/directives/scroll-active-nav-container';

export default {
  components: {
    About,
    Education,
    Skills,
    Work,
    Awards,
    Talks,
    Projects,
  },
  directives: {
    ScrollActiveNavContainer,
  },
  metaInfo: {
    title: 'Blitz Resumé',
  },
};
</script>

<style>
/* Find the right path */

.home-links a {
  margin-right: 1rem;
}
</style>
