<template>
	<!-- <button
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
    
	</button>-->
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
			<span id="checkbox-toggle-17" class="slds-checkbox_faux_container" aria-live="assertive">
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

</style>