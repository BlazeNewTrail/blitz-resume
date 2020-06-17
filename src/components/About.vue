<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:avatar" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span class="slds-card__header-link slds-truncate">
              {{ $resume.basics.name }}
            </span>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner slds-grid slds-wrap">
      <div
        class="slds-grid slds-grid_align-center slds-size_1-of-1 slds-medium-size_3-of-12 slds-p-bottom_small"
        :class="[$sidebar ? 'slds-hide_medium' : '']"
      >
        <span
          class="slds-avatar slds-avatar_circle slds-avatar_xlarge slds-avatar_profile-image-large"
        >
          <img v-if="$resume.basics.picture" :src="$resume.basics.picture" />
        </span>
      </div>
      <div
        class="slds-text-longform slds-size_1-of-1"
        :class="[$sidebar ? '' : 'slds-medium-size_9-of-12']"
      >
        <div class="slds-text-longform">
          <h3 class="slds-text-heading_small">
            {{ $resume.basics.label }}
          </h3>
          <p>{{ $resume.basics.summary }}</p>
        </div>
        <div
          class="slds-grid slds-wrap slds-gutters_direct-x-small slds-m-top_xx-small"
        >
          <div
            v-for="social in $resume.basics.profiles"
            :key="social.network"
            class="slds-col slds-no-flex social-icons"
          >
            <a :href="social.url" target="_blank" rel="noopener noreferrer">
              <font-awesome :icon="[social.package, social.icon]" size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  background-color: grey;
  color: white;
  border-radius: 100%;
}

.social-icons a:hover {
  color: white;
  background-color: lightskyblue;
}
</style>
