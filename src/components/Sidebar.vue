<template>
  <section
    class="site-sidebar slds-grid slds-grid_vertical slds-grid_align-center"
  >
    <div class="slds-grid slds-grid_align-center">
      <div class="site-skip-content">
        <a
          href="#site-main-content"
          class="slds-assistive-text slds-assistive-text_focus"
        >
          Skip to Content
        </a>
      </div>
      <!-- <div class="site-logo">
        <a href="/">
          <span class="site-logo__graphic">
            <span class="slds-assistive-text">Salesforce</span>
          </span>Jon Snow
        </a>
      </div>-->
      <span
        class="slds-avatar slds-avatar_circle slds-avatar_xlarge slds-avatar_profile-image-large"
      >
        <span class="slds-assistive-text">Person name</span>
      </span>
    </div>
    <div class="site-navigation">
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
            <li data-navkey="education" class="slds-nav-vertical__item">
              <a
                v-scroll-to="'#education'"
                href="#"
                class="slds-nav-vertical__action"
              >
                Education
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
            <li class="slds-nav-vertical__item theme-switcher">
              <theme-switcher />
            </li>
          </ul>
        </div>
      </scroll-active-nav>
    </div>
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
