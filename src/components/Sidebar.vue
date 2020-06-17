<template>
  <section
    class="site-sidebar slds-border_right slds-grid slds-grid_vertical slds-grid_align-spread"
  >
    <div class="slds-grow"></div>
    <div
      class="slds-grow-none slds-grid slds-grid_vertical slds-grid_vertical-align-center slds-grid_align-center"
    >
      <span
        class="slds-m-bottom_medium slds-avatar slds-avatar_circle slds-avatar_xlarge slds-avatar_profile-image-large"
      >
        <img v-if="$resume.basics.picture" :src="$resume.basics.picture" />
      </span>
      <span class="slds-text-heading_medium">{{ $resume.basics.name }}</span>
    </div>
    <div class="site-navigation slds-grow-none">
      <scroll-active-nav>
        <nav slot-scope="{ activeKey, sections }" class="slds-nav-vertical">
          <div class="slds-nav-vertical__section">
            <ul>
              <li
                v-for="section in sections"
                :key="section.id"
                class="slds-nav-vertical__item"
                :class="{ 'slds-is-active': activeKey === section.id }"
              >
                <a
                  v-scroll-to="`#${section.id}`"
                  href="#"
                  class="slds-nav-vertical__action"
                >
                  {{ section.label }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </scroll-active-nav>
    </div>
    <div class="slds-grow"></div>
    <theme-switcher class="slds-m-left_medium slds-m-bottom_medium" />
  </section>
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

<style scoped>
.theme-switcher {
  left: 1.2em;
}
</style>
