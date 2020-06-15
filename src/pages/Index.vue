<template>
  <Layout>
    <div
      v-scroll-active-nav-container
      class="slds-grid slds-grid_vertical slds-gutters"
    >
      <div class="slds-col slds-p-bottom_small">
        <about id="about" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <work id="work" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <skills id="skills" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <projects id="projects" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <education id="education" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <awards id="awards" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <talks id="talks" />
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
