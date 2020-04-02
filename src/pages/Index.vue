<template>
  <Layout>
    <div class="slds-grid slds-gutters">
      <div class="slds-col">
        <article class="slds-card">
          <div class="slds-card__header slds-grid">
            <header class="slds-media slds-media_center slds-has-flexi-truncate">
              <div class="slds-media__figure">
                <span
                  class="slds-icon_container slds-icon-standard-account"
                  title="account"
                >
                  <svg
                    class="slds-icon slds-icon_small"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg#account"
                    />
                  </svg>
                  <span class="slds-assistive-text">account</span>
                </span>
              </div>
              <div class="slds-media__body">
                <h2 class="slds-card__header-title">
                  <a
                    href="javascript:void(0);"
                    class="slds-card__header-link slds-truncate"
                    title="Accounts"
                  >
                    <span>Accounts</span>
                  </a>
                </h2>
              </div>
              <div class="slds-no-flex">
                <button class="slds-button slds-button_neutral">New</button>
              </div>
            </header>
          </div>
          <div class="slds-card__body slds-card__body_inner">
            Anything can go into the card body
            <div class="slds-path">
              <div class="slds-grid slds-path__track">
                <div class="slds-grid slds-path__scroller-container">
                  <div
                    class="slds-path__scroller"
                    role="application"
                  >
                    <div class="slds-path__scroller_inner">
                      <ul
                        class="slds-path__nav"
                        role="listbox"
                        aria-orientation="horizontal"
                      >
                        <li
                          class="slds-path__item slds-is-current slds-is-active"
                          role="presentation"
                        >
                          <a
                            aria-selected="true"
                            class="slds-path__link"
                            href="javascript:void(0);"
                            id="path-1"
                            role="option"
                            tabindex="0"
                          >
                            <span class="slds-path__stage">
                              <svg
                                class="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                              <span class="slds-assistive-text">Current Stage:</span>
                            </span>
                            <span class="slds-path__title">Contacted</span>
                          </a>
                        </li>
                        <li
                          class="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            class="slds-path__link"
                            href="javascript:void(0);"
                            id="path-2"
                            role="option"
                            tabindex="-1"
                          >
                            <span class="slds-path__stage">
                              <svg
                                class="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span class="slds-path__title">Open</span>
                          </a>
                        </li>
                        <li
                          class="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            class="slds-path__link"
                            href="javascript:void(0);"
                            id="path-3"
                            role="option"
                            tabindex="-1"
                          >
                            <span class="slds-path__stage">
                              <svg
                                class="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span class="slds-path__title">Unqualified</span>
                          </a>
                        </li>
                        <li
                          class="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            class="slds-path__link"
                            href="javascript:void(0);"
                            id="path-4"
                            role="option"
                            tabindex="-1"
                          >
                            <span class="slds-path__stage">
                              <svg
                                class="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span class="slds-path__title">Nurturing</span>
                          </a>
                        </li>
                        <li
                          class="slds-path__item slds-is-incomplete"
                          role="presentation"
                        >
                          <a
                            aria-selected="false"
                            class="slds-path__link"
                            href="javascript:void(0);"
                            id="path-5"
                            role="option"
                            tabindex="-1"
                          >
                            <span class="slds-path__stage">
                              <svg
                                class="slds-icon slds-icon_x-small"
                                aria-hidden="true"
                              >
                                <use
                                  xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#check"
                                />
                              </svg>
                            </span>
                            <span class="slds-path__title">Closed</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="slds-grid slds-path__action">
                  <span class="slds-path__stage-name">Stage: Unqualified</span>
                  <button class="slds-button slds-button_brand slds-path__mark-complete">
                    <svg
                      class="slds-button__icon slds-button__icon_left"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#check"
                      />
                    </svg>Mark Status as Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <footer class="slds-card__footer">
            <a
              class="slds-card__footer-action"
              href="javascript:void(0);"
            >
              View All
              <span class="slds-assistive-text">Accounts</span>
            </a>
          </footer>
        </article>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
