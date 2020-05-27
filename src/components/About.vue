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
              <span>{{ $static.metadata.resume.basics.name }}</span>
            </a>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner slds-grid slds-wrap">
      <div class="slds-grid slds-grid_align-center slds-size_1-of-1 slds-medium-size_3-of-12" :class="[$sidebar ? 'slds-hide_medium' : '']">
        <span
          class="slds-avatar slds-avatar_circle slds-avatar_xlarge slds-avatar_profile-image-large"
        >
          <span class="slds-assistive-text">Person name</span>
        </span>
      </div>
      <div class="slds-text-longform slds-size_1-of-1" :class="[$sidebar ? '' : 'slds-medium-size_9-of-12']">
        <div class="slds-text-longform">
          <!-- <h3 class="slds-text-heading_medium">
            {{ $static.metadata.resume.basics.name }}
          </h3> -->
          <h3 class="slds-text-heading_small">
            {{ $static.metadata.resume.basics.label }}
          </h3>
          <p>{{ $static.metadata.resume.basics.summary }}</p>
        </div>
        <div class="slds-grid slds-wrap slds-m-top_xx-small">
          <div
            v-for="social in $static.metadata.resume.basics.profiles"
            :key="social.network"
            class="social-icons slds-p-around_xx-small"
          >
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="slds-cols"
            >
              <font-awesome
                :icon="[social.package, social.icon]"
              />
            </a>
          </div>
        </div>
      </div>
      <p>{{ $static.metadata.resume.basics.summary }}</p>
      <div class="slds-grid slds-wrap slds-m-top_x-small">
        <div
          v-for="social in $static.metadata.resume.basics.profiles"
          :key="social.network"
          class="social-icons slds-p-around_xx-small"
        >
          <a
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="slds-cols"
          >
            <font-awesome :icon="[social.package, social.icon]" />
          </a>
        </div>
      </div>
    </div>
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
          profiles {
            url
            icon
            package
          }
        }
      }
    }
  }
</static-query>

<script>
export default {};
</script>
<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 2.5rem;
  width: 2.5rem;
  background-color: grey;
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.25rem;
  line-height: 2.5rem;
  margin-right: 1rem;
  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }
  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}
.social-icons a:last-child {
  margin-right: 0;
}
.social-icons a:hover {
  //Here the background color should come
  background-color: lightskyblue;
}

</style>
