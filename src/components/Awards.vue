<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:reward" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span class="slds-card__header-link slds-truncate">
              Awards
            </span>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <ol class="slds-has-dividers_bottom">
        <li
          v-for="award in $static.metadata.resume.awards"
          :key="award.title"
          class="slds-item"
        >
          <div class="slds-grid slds-wrap slds-p-around_medium">
            <div class="">
              <font-awesome class="icon" :icon="['fas', 'award']" />
            </div>
            <div class="slds-col slds-size_11-of-12">
              {{ award.awarder }} <br />
              <div class="slds-text-title_bold">
                {{ award.title }}
              </div>
              {{ award.date }} <br />
              {{ award.summary }}
            </div>
          </div>
        </li>
      </ol>
    </div>
  </article>
</template>

<static-query>
  query {
    metadata {
      resume {
        awards {
          title
          date
          awarder
          summary
        }
      }
    }
  }
</static-query>

<script>
export default {};
</script>

<style scoped>
.icon {
  height: 4.5em;
  width: 4.5em;
  color: goldenrod;
}
</style>
