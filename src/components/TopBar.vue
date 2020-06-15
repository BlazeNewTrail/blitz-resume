<template>
  <header>
    <div class="slds-context-bar slds-grid">
      <div class="slds-context-bar__primary">
        <div
          class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"
        >
          <div class="slds-context-bar__icon-action">
            <button
              class="slds-button slds-icon-waffle_container slds-context-bar__button"
              title="Description of the icon when needed"
            >
              <span class="slds-icon-waffle">
                <span class="slds-r1"></span>
                <span class="slds-r2"></span>
                <span class="slds-r3"></span>
                <span class="slds-r4"></span>
                <span class="slds-r5"></span>
                <span class="slds-r6"></span>
                <span class="slds-r7"></span>
                <span class="slds-r8"></span>
                <span class="slds-r9"></span>
              </span>
              <span class="slds-assistive-text">Can be removed</span>
            </button>
          </div>
          <span
            class="slds-context-bar__label-action slds-context-bar__app-name"
          >
            <span class="slds-truncate" title="App Name">{{
              $resume.basics.name
            }}</span>
          </span>
        </div>
      </div>
      <scroll-active-nav class="slds-context-bar__secondary slds-show_medium">
        <ul class="slds-grid">
          <li data-navkey="about" class="slds-context-bar__item slds-is-active">
            <a
              v-scroll-to="'#about'"
              href="#"
              class="slds-context-bar__label-action"
              title="About"
            >
              <span class="slds-truncate" title="About">About</span>
            </a>
          </li>
          <li data-navkey="work" class="slds-context-bar__item">
            <a
              v-scroll-to="'#work'"
              href="#"
              class="slds-context-bar__label-action"
              title="Work"
            >
              <span class="slds-truncate" title="Work">Work</span>
            </a>
          </li>
          <li data-navkey="skills" class="slds-context-bar__item">
            <a
              v-scroll-to="'#skills'"
              href="#"
              class="slds-context-bar__label-action"
              title="Skills"
            >
              <span class="slds-truncate" title="Skills">Skills</span>
            </a>
          </li>
          <li data-navkey="projects" class="slds-context-bar__item">
            <a
              v-scroll-to="'#projects'"
              href="#"
              class="slds-context-bar__label-action"
              title="Projects"
            >
              <span class="slds-truncate" title="Projects">Projects</span>
            </a>
          </li>
          <li data-navkey="education" class="slds-context-bar__item">
            <a
              v-scroll-to="'#education'"
              href="#"
              class="slds-context-bar__label-action"
              title="Education"
            >
              <span class="slds-truncate" title="Education">Education</span>
            </a>
          </li>
          <li data-navkey="awards" class="slds-context-bar__item">
            <a
              v-scroll-to="'#awards'"
              href="#"
              class="slds-context-bar__label-action"
              title="Awards"
            >
              <span class="slds-truncate" title="Awards">Certifications</span>
            </a>
          </li>
          <li data-navkey="talks" class="slds-context-bar__item">
            <a
              v-scroll-to="'#talks'"
              href="#"
              class="slds-context-bar__label-action"
              title="Talks"
            >
              <span class="slds-truncate" title="Talks">Talks</span>
            </a>
          </li>
        </ul>
        <!-- </nav> -->
      </scroll-active-nav>
      <theme-switcher class="slds-col_bump-left slds-align-middle slds-p-right_medium" />
    </div>
  </header>
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
