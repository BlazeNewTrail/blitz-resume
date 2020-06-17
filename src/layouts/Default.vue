<template>
  <div class="slds-scope site-page-wrapper">
    <!-- <theme-switcher /> -->
    <top-bar
      class="site-header"
      :class="[$sidebar ? 'slds-hide_medium' : '']"
    />
    <div class="site-main-wrapper">
      <sidebar :class="[$sidebar ? 'slds-show_medium' : 'slds-hide']" />
      <main class="site-main slds-scrollable_y" role="main" tabindex="-1">
        <!-- slds-brand-band slds-brand-band_cover slds-brand-band_medium  -->
        <div class="slds-template_default">
          <div class="slds-template__container">
            <slot></slot>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    TopBar,
    Sidebar,
  },
};
</script>
