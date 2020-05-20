<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:education" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <a
              href="javascript:void(0);"
              class="slds-card__header-link slds-truncate"
              title="Accounts"
            >
              <span>Education</span>
            </a>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <ol>
        <li
          v-for="award in $static.metadata.resume.education"
          :key="award.title"
        >
          <div class="slds-grid slds-border_bottom slds-p-around_medium">
            <div class="slds-col slds-size_2-of-12">
              <font-awesome class="icon" :icon="['fas', 'university']" />
            </div>
            <div class="slds-col slds-size_3-of-4">
              {{ award.institution }}
              <br />
              {{ award.studyType }} In {{ award.area }}
              <br />
              {{ award.endDate }}
              <br />
            </div>
          </div>
        </li>
        <br />
      </ol>
    </div>
  </article>
</template>

<static-query>
  query {
    metadata {
      resume {
        education {
          institution
          area
          studyType
          startDate
          endDate
        }
      }
    }
  }
</static-query>

<script>
// import iconEducation from '';

export default {
  // components: {
  //   iconEducation,
  // },
};
</script>

<style scoped>
.icon {
  height: 4.5em;
  width: 4.5em;
  color: goldenrod;
}
</style>
