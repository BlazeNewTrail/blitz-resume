<template>
  <div class="slds-scope site-page-wrapper">
    <div>
      <sidebar />
      <theme-switcher />
      <main
        class="site-main slds-order_1"
        role="main"
        id="site-main-content"
        tabindex="-1"
      >
      <!-- slds-brand-band slds-brand-band_cover slds-brand-band_medium  -->
        <div
          class="slds-template_default"
        >
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
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar.vue";
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

export default {
  components: {
    Sidebar,
    ThemeSwitcher
  }
};
</script>
