<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:education" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span class="slds-card__header-link slds-truncate">
              Education
            </span>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <ol class="slds-has-dividers_bottom">
        <li
          v-for="education in $resume.education"
          :key="education.title"
          class="slds-item"
        >
          <div class="slds-grid slds-p-around_medium">
            <div>
              <font-awesome class="icon" :icon="['fas', 'university']" />
            </div>
            <div class="slds-col slds-size_3-of-4">
              <div class="slds-text-title_bold">
                {{ education.studyType }} In {{ education.area }}
              </div>
              {{ education.institution }}
              <br />
              {{ education.endDate | date({day: undefined}) }}
              <br />
            </div>
          </div>
        </li>
      </ol>
    </div>
  </article>
</template>

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
