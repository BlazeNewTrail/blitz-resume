<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:avatar" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <a
              href="javascript:void(0);"
              class="slds-card__header-link slds-truncate"
              title="Accounts"
            >
              <span>About Me</span>
            </a>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner slds-grid slds-wrap">
      <div class="slds-grid slds-grid_align-center slds-size_1-of-1 slds-medium-size_3-of-12 slds-p-right_large" :class="[$static.metadata.useTopbar ? '' : 'slds-hide_medium']">
        <span
          class="slds-avatar slds-avatar_circle slds-avatar_xlarge slds-avatar_profile-image-large"
        >
          <span class="slds-assistive-text">Person name</span>
        </span>
      </div>
      <div class="slds-text-longform slds-size_1-of-1" :class="[$static.metadata.useTopbar ? 'slds-medium-size_9-of-12' : '']">
        <h3 class="slds-text-heading_medium">
          {{ $static.metadata.resume.basics.name }}
        </h3>
        <h3 class="slds-text-heading_medium">
          {{ $static.metadata.resume.basics.label }}
        </h3>
        <p>{{ $static.metadata.resume.basics.summary }}</p>
      </div>
    </div>
  </article>
</template>

<static-query>
  query {
    metadata {
      useTopbar
      resume {
        basics {
          name
          label
          summary
        }
      }
    }
  }
</static-query>

<script>
export default {};
</script>
