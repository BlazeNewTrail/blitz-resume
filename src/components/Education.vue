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
              title="Education"
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
          v-for="(education, index) in $static.metadata.resume.education"
          :key="education.title"
        >
          <div
            v-if="index != $static.metadata.resume.education.length - 1"
            class="slds-grid slds-border_bottom slds-p-around_medium"
          >
            <div>
              <font-awesome class="icon" :icon="['fas', 'university']" />
            </div>
            <div class="slds-col slds-size_3-of-4">
              <div class="title">{{ education.studyType }} In {{ education.area }}</div>
              {{ education.institution }}
              <br />
              {{ education.endDate }}
              <br />
            </div>
          </div>
          <div v-else class="slds-grid slds-p-around_medium">
            <div>
              <font-awesome class="icon" :icon="['fas', 'university']" />
            </div>
            <div class="slds-col slds-size_3-of-4">
              <div class="title">{{ education.studyType }} In {{ education.area }}</div>
              {{ education.institution }}
              <br />
              {{ education.endDate }}
              <br />
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
.title {
  font-weight: bold;
}
</style>
