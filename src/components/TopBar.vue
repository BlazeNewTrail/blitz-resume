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
      <scroll-active-nav>
        <nav
          slot-scope="{ activeKey, sections }"
          class="slds-context-bar__secondary slds-show_medium"
        >
          <ul class="slds-grid">
            <li
              v-for="section in sections"
              :key="section.id"
              :class="{ 'slds-is-active': activeKey === section.id }"
              class="slds-context-bar__item"
            >
              <a
                v-scroll-to="`#${section.id}`"
                href="#"
                class="slds-context-bar__label-action"
              >
                <span class="slds-truncate">
                  {{ section.label }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </scroll-active-nav>
      <theme-switcher
        class="slds-col_bump-left slds-align-middle slds-p-right_medium"
      />
    </div>
  </header>
</template>

<script>
import ScrollActiveNav from '@/components/ScrollActiveNav';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

export default {
  components: {
    ScrollActiveNav,
    ThemeSwitcher,
  },
};
</script>
