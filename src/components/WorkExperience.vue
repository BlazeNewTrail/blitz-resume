<template>
  <article id="work" class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:service_crew_member" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span class="slds-card__header-link slds-truncate">
              Work
            </span>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <div class="slds-progress slds-progress_vertical">
        <ol class="slds-progress__list slds-has-dividers_bottom">
          <li
            v-for="work in $resume.work"
            :key="work.company"
            class="slds-progress__item slds-is-completed"
          >
            <slds-icon
              v-if="isPast(work.endDate)"
              class="slds-progress__marker slds-progress__marker_icon"
              icon-name="utility:success"
              size="xx-small"
              title="Complete"
            />
            <div v-else class="slds-progress__marker"></div>
            <div class="slds-progress__item_content">
              <div class="slds-grid">
                <div class="slds-col slds-size_3-of-4">
                  <div class="slds-text-title_bold">
                    {{ work.position }}
                  </div>
                  <div>
                    <slds-icon
                      icon-name="utility:company"
                      size="x-small"
                      variant="base"
                      class="icon"
                    />
                    {{ work.company }}
                  </div>
                  <div>
                    <slds-icon icon-name="utility:location" size="x-small" />
                    {{ work.location }}
                  </div>
                  <ol class="slds-list_dotted">
                    <li v-for="(point, index) in work.highlights" :key="index">
                      {{ point }}
                    </li>
                  </ol>
                </div>
                <div class="slds-col slds-size_1-of-4 slds-p-left_small slds-text-align_right">
                  <div>
                    {{ work.startDate | date({ day: undefined }) }} -
                    {{ work.endDate | date({ day: undefined }) }}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
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
