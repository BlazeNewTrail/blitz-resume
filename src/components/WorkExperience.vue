<template>
  <article id="work" class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:service_crew_member" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <a
              href="javascript:void(0);"
              class="slds-card__header-link slds-truncate"
              title="Accounts"
            >
              <span>Work</span>
            </a>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <div class="slds-progress slds-progress_vertical">
        <ol class="slds-progress__list">
          <li
            v-for="work in works"
            :key="work.company"
            class="slds-progress__item"
          >
            <!-- Apply slds-is-active to first element -->

            <div class="slds-progress__marker"></div>
            <div class="slds-progress__item_content slds-border_bottom">
              <div class="slds-grid">
                <div class="slds-col slds-size_3-of-4">
                  <div class="title">
                    {{ work.position }}
                  </div>
                  <div>
                    <!-- Add Salesforce icons -->
                    <font-awesome class="icon" :icon="['fab', 'html5']" />
                    {{ work.company }}
                  </div>
                  <ol class="slds-list_ordered">
                    <li v-for="(point, index) in work.highlights" :key="index">
                      {{ point }}
                    </li>
                  </ol>
                </div>
                <div class="slds-col slds-size_1-of-4">
                  <div>{{ work.startDate }} - {{ work.endDate }}</div>
                </div>
              </div>
            </div>
          </li>
          <!-- <li class="slds-progress__item slds-is-completed">
              <span
                class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
                title="Complete"
              >
                <svg class="slds-icon slds-icon_xx-small" aria-hidden="true">
                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#success" />
                </svg>
                <span class="slds-assistive-text">Complete</span>
              </span>
              <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 1</div>
            </li>
            <li class="slds-progress__item">
              <div class="slds-progress__marker"></div>
              <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 3</div>
            </li>
            <li class="slds-progress__item slds-is-active">
              <div class="slds-progress__marker">
                <span class="slds-assistive-text">Active</span>
              </div>
              <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 2</div>
            </li>

            <li class="slds-progress__item">
              <div class="slds-progress__marker"></div>
              <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 4</div>
            </li>
            <li class="slds-progress__item">
              <div class="slds-progress__marker"></div>
              <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 5</div>
            </li>
            <li class="slds-progress__item">
              <div class="slds-progress__marker"></div>
              <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 5</div>
            </li>
            <li class="slds-progress__item">
              <div class="slds-progress__marker"></div>
              <div class="slds-progress__item_content slds-grid slds-grid_align-spread">Step 5</div>
          </li>-->
        </ol>
        <div
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="25"
          role="progressbar"
        >
          <span class="slds-assistive-text">Progress: 75%</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          company: 'Company',
          position: 'President',
          website: 'http://company.com',
          startDate: '2013-01-01',
          endDate: '2014-01-01',
          summary: 'Description...',
          highlights: [
            'Started the company',
            'Grown to 20 people',
            'Had an exit',
          ],
        },
        {
          company: 'Company1',
          position: 'President',
          website: 'http://company.com',
          startDate: '2013-01-01',
          endDate: '2014-01-01',
          summary: 'Description...',
          highlights: [
            'Started the company',
            'Grown to 20 people',
            'Had an exit',
          ],
        },
        {
          company: 'Company2',
          position: 'President',
          website: 'http://company.com',
          startDate: '2013-01-01',
          endDate: '2014-01-01',
          summary: 'Description...',
          highlights: [
            'Started the company',
            'Grown to 20 people',
            'Had an exit',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
}
</style>
