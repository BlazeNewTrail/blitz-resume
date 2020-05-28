<template>
  <div class="theme-switcher" title="Switch Theme" @click="toggleDarkMode">
    <span
      class="slds-icon_container slds-icon_container_circle slds-icon-standard-rtc-presence"
    >
      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
        <use
          xlink:href="/assets/img/slds-icons/utility/symbols.svg#light_bulb"
        />
      </svg>
      <span class="slds-assistive-text">switch theme</span>
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    darkMode: true,
  }),
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark-mode');
    },
  },
};
</script>
