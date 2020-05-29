<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:rtc_presence" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span class="slds-card__header-link slds-truncate">
              Talks and Presentations
            </span>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <ol class="slds-has-dividers_bottom">
        <li
          v-for="talk in $resume.talks"
          :key="talk.title"
          class="slds-item"
        >
          <div class="slds-grid slds-wrap slds-p-around_medium">
            <div>
              <font-awesome
                class="icon"
                :icon="['fas', 'chalkboard-teacher']"
              />
            </div>
            <div class="slds-col slds-size_11-of-12">
              <a :href="talk.link" target="_blank" class="slds-text-title_bold">
                {{ talk.title }}
              </a>
              <br />
              {{ talk.conference }}, {{ talk.location }} - {{ talk.date | date({day: undefined}) }}
              <br />
              {{ talk.summary }}
              <div v-if="talk.coSpeaker && talk.coSpeaker.length > 0">
                Co-speaker: {{ talk.coSpeaker }}
              </div>
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
  color: lightblue;
}
</style>
