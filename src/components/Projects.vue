<template>
  <article id="project" class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:goals" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span class="slds-card__header-link slds-truncate">
              Projects
            </span>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <ol class="slds-has-dividers_bottom">
        <li
          v-for="project in $resume.projects"
          :key="project.company"
          class="slds-p-around_small"
        >
          <div class="slds-grid">
            <div class="slds-col slds-size_3-of-4">
              <a
                :href="project.website"
                target="_blank"
                class="slds-text-title_bold"
              >
                {{ project.company }}
              </a>
              <div>
                <!-- Add Salesforce icons -->
                <slds-icon icon-name="utility:location" size="x-small" />
                <!-- <font-awesome class="icon" :icon="['fab', 'html5']" /> -->
                {{ project.location }}
              </div>
              <div class="slds-text-font_monospace slds-p-vertical_xx-small">
                {{ project.summary }}
              </div>
              <div>
              <ol class="slds-list_horizontal">
                <li
                  v-for="(topic, index) in project.keywords"
                  :key="index"
                  class="slds-p-around_xx-small"
                >
                  <div class="slds-badge slds-theme_success">{{ topic }}</div>
                </li>
              </ol>
              </div>
              <!-- <div class="slds-text-heading_small slds-p-vertical_xx-small">Key Takeaways: </div>
              <ol class="slds-list_dotted">
                <li v-for="(point, index) in project.highlights" :key="index">
                  {{ point }}
                </li>
              </ol> -->
            </div>
            <div class="slds-col slds-size_1-of-4">
              <div>
                {{ project.startDate | date({ day: undefined }) }} -
                {{ project.endDate | date({ day: undefined }) }}
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    isPast(dateStrOrDate) {
      try {
        const date =
          typeof dateStrOrDate === 'string'
            ? new Date(dateStrOrDate)
            : dateStrOrDate;
        return dateStrOrDate && date < Date.now();
      } catch (e) {
        return false;
      }
    },
  },
};
</script>
