<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:skill" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span class="slds-card__header-link slds-truncate">
              Skills
            </span>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <div class="slds-text-title_bold slds-p-bottom_xx-small">
        Programming Languages & Tools
      </div>
      <intersect @enter="animate">
        <div class="slds-grid slds-gutters_x-small slds-wrap">
          <div
            v-for="tool in $resume.skills.tools"
            :key="tool.title"
            class="skillCard slds-col slds-grow-none slds-grid slds-grid_vertical slds-grid_vertical-align-center slds-p-bottom_x-small"
          >
            <span class="slds-p-bottom_xx-small">{{ tool.title }}</span>
            <font-awesome
              class="skillIcon fa-icon fa-icon-teal"
              :icon="[tool.package, tool.icon]"
              size="3x"
            />
          </div>
        </div>
      </intersect>
      <div class="slds-text-title_bold slds-p-bottom_small">
        Workflow
      </div>
      <div v-for="tool in $resume.skills.workflow" :key="tool">
        <slds-icon
          icon-name="utility:check"
          size="x-small"
          variant="success"
          class="slds-m-right_x-small"
        />
        <span>{{ tool }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import gsap from 'gsap';
import throttle from 'lodash.throttle';
import intersect from 'vue-intersect';

export default {
  components: {
    intersect,
  },
  data() {
    return {};
  },
  methods: {
    animate: throttle(
      () => {
        gsap.from('.skillCard', {
          duration: 2,
          scale: 0.5,
          opacity: 0,
          delay: 0.5,
          stagger: 0.2,
          ease: 'elastic',
          force3D: true,
        });
      },
      5000,
      { leading: true, trailing: false },
    ),
  },
};
</script>

<style>
.skillCard {
  width: 80px;
  white-space: nowrap;
}
</style>
