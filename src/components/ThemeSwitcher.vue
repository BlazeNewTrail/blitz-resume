<template>
  <div class="slds-form-element theme-switcher">
    <label class="slds-checkbox_toggle slds-grid">
      <input
        type="checkbox"
        name="checkbox-toggle-17"
        value="checkbox-toggle-17"
        aria-describedby="checkbox-toggle-17"
        checked
        @click="toggleDarkMode"
      />
      <span
        id="checkbox-toggle-17"
        class="slds-checkbox_faux_container"
        aria-live="assertive"
      >
        <span class="slds-checkbox_faux"></span>
        <span class="slds-checkbox_on">Light Mode</span>
        <span class="slds-checkbox_off">Dark Mode</span>
      </span>
    </label>
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
