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
          class="slds-item slds-p-vertical_medium"
        >
          <article class="slds-tile slds-media">
            <div class="slds-media__figure">
              <span class="slds-icon_container">
                <font-awesome
                  class="fa-icon fa-icon-silver"
                  :icon="['fas', 'university']"
                  size="3x"
                />
              </span>
            </div>
            <div class="slds-media__body">
              <h3 class="slds-tile__title slds-text-title_bold slds-truncate">
                {{ education.studyType }} In {{ education.area }}
              </h3>
              <div class="slds-tile__detail">
                {{ education.institution }}
                <br />
                {{ education.endDate | date({ day: undefined }) }}
              </div>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </article>
</template>
