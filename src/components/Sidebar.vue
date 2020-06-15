<template>
  <section
    class="site-sidebar slds-border_right slds-grid slds-grid_vertical slds-grid_align-spread"
  >
    <div class="slds-grow"></div>
    <div class="slds-grow-none slds-grid slds-grid_vertical slds-grid_vertical-align-center slds-grid_align-center">
      <span
        class="slds-m-bottom_medium slds-avatar slds-avatar_circle slds-avatar_xlarge slds-avatar_profile-image-large"
      >
        <span class="slds-assistive-text">Person name</span>
      </span>
      <span class="slds-text-heading_medium">{{ $resume.basics.name }}</span>
    </div>
    <div class="site-navigation slds-grow-none">
      <scroll-active-nav class="slds-nav-vertical">
        <div class="slds-nav-vertical__section">
          <ul>
            <li data-navkey="about" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#about'"
                href="#"
                class="slds-nav-vertical__action"
                aria-current="true"
              >
                About
              </a>
            </li>
            <li data-navkey="work" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#work'"
                href="#"
                class="slds-nav-vertical__action"
              >
                Work
              </a>
            </li>
            <li data-navkey="skills" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#skills'"
                href="#"
                class="slds-nav-vertical__action"
              >
                Skills
              </a>
            </li>
            <li data-navkey="projects" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#projects'"
                href="#"
                class="slds-nav-vertical__action"
              >
                Projects
              </a>
            </li>
            <li data-navkey="education" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#education'"
                href="#"
                class="slds-nav-vertical__action"
              >
                Education
              </a>
            </li>
            <li data-navkey="awards" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#awards'"
                href="#"
                class="slds-nav-vertical__action"
              >
                Awards
              </a>
            </li>
            <li data-navkey="talks" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#talks'"
                href="#"
                class="slds-nav-vertical__action"
              >
                Talks
              </a>
            </li>
          </ul>
        </div>
      </scroll-active-nav>
    </div>
    <div class="slds-grow"></div>
    <theme-switcher class="slds-m-left_medium slds-m-bottom_medium" />
  </section>
</template>

<script>
import ScrollActiveNav from '@/components/scroll-active-nav';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

export default {
  components: {
    ScrollActiveNav,
    ThemeSwitcher,
  },
};
</script>

<style scoped>
.theme-switcher {
  left: 1.2em;
}
</style>
