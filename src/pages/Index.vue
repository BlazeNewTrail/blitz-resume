<template>
  <Layout>
    <div class="slds-grid slds-grid_vertical slds-gutters" v-scroll-active-nav-container>
      <div class="slds-col slds-p-bottom_small">
        <about id="about" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <education id="education" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <work id="work" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <skills id="skills" />
      </div>
      <div class="slds-col slds-p-bottom_small">
        <awards id="awards" />
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
import ScrollActiveNavContainer from '@/directives/scroll-active-nav-container';

export default {
  components: {
    About,
    Education,
    Skills,
    Work,
    Awards,
  },
  directives: {
    ScrollActiveNavContainer,
  },
  metaInfo: {
    title: "Blitz Resumé"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
