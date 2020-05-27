<template>
  <article class="slds-card">
    <div class="slds-card__header slds-grid">
      <header class="slds-media slds-media_center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <slds-icon icon-name="standard:reward" size="small" />
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <a
              href="javascript:void(0);"
              class="slds-card__header-link slds-truncate"
              title="Accounts"
            >
              <span>Awards</span>
            </a>
          </h2>
        </div>
      </header>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <ol>
        <li v-for="award in $static.metadata.resume.awards" :key="award.title">
          <div
            class="slds-grid slds-wrap slds-border_bottom slds-p-around_medium"
          >
            <div class="">
              <font-awesome class="icon" :icon="['fas', 'award']" />
            </div>
            <div class="slds-col slds-size_11-of-12">
              {{ award.awarder }} <br />
              <div class="title"> {{ award.title }} </div>
              {{ award.date }} <br />
              {{ award.summary }}
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
.title {
  font-weight: bold;
}
</style>
