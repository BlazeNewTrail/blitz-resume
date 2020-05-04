<template>
  <button
    class="theme-switcher slds-button slds-icon-waffle_container"
    title="Description of the icon when needed"
    @click="toggleDarkMode"
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
    <span class="slds-assistive-text">Open App Launcher</span>
  </button>
</template>

<script>
export default {
  data: () => ({
    darkMode: true
  }),
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;

      document.documentElement.classList.toggle("dark-mode");
    }
  }
};
</script>

<style>
.theme-switcher {
  display: block;
  position: fixed !important;
  left: 0;
  bottom: 0;
}
</style>