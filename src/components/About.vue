<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <span
            class="slds-icon_container slds-icon-standard-account"
            title="account"
          >
            <svg
              class="slds-icon slds-icon_small"
              aria-hidden="true"
            >
              <use
                xlink:href="@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg#account"
              />
            </svg>
            <span class="slds-assistive-text">account</span>
          </span>
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
  <h3 class="slds-text-heading_medium">{{ $static.metadata.resume.basics.name }}</h3>
<h3 class="slds-text-heading_medium">{{ $static.metadata.resume.basics.label }}</h3>
</div>
</div>
     
     
      <p>{{ $static.metadata.resume.basics.summary }}</p>
      
  
    
  </article>
</template>
<static-query>
# Write your query or mutation here
query {
  metadata {
    resume{
      basics{
        name
        label
        summary
        
      }
      
    }
  }
}

</static-query>
<script>
export default {
    
}
</script>