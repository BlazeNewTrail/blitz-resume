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
    <div class="slds-card__body slds-card__body_inner">
      <div class="slds-text-longform">
        <h3 class="slds-text-heading_medium">
          {{ $static.metadata.resume.basics.name }}
        </h3>
        <h3 class="slds-text-heading_medium">
          {{ $static.metadata.resume.basics.label }}
        </h3>
      </div>
    </div>

    <p>{{ $static.metadata.resume.basics.summary }}</p>
  </article>
</template>

<static-query>
  query {
    metadata {
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
