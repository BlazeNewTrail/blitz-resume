<template>
  <div class="slds-scope site-page-wrapper">
    <theme-switcher />
    <top-bar class="site-header" :class="[$static.metadata.useTopbar ? '' : 'slds-hide_medium']" />
    <div class="site-main-wrapper">
      <sidebar :class="[$static.metadata.useTopbar ? 'slds-hide' : 'slds-show_medium']" />
      <main
        class="site-main slds-scrollable_y"
        role="main"
        id="site-main-content"
        tabindex="-1"
      >
        <!-- slds-brand-band slds-brand-band_cover slds-brand-band_medium  -->
        <div class="slds-template_default">
          <div class="slds-template__container">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    useTopbar
  }
}
</static-query>

<script>
import TopBar from "@/components/TopBar.vue";
import Sidebar from "@/components/Sidebar.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: {
    TopBar,
    Sidebar,
    ThemeSwitcher
  }
};
</script>
