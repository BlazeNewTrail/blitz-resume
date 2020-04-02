<template>
  <div class="layout">
    <header class="slds-global-header_container">
      <a
        href="javascript:void(0);"
        class="slds-assistive-text slds-assistive-text_focus"
      >Skip to Navigation</a>
      <a
        href="javascript:void(0);"
        class="slds-assistive-text slds-assistive-text_focus"
      >Skip to Main Content</a>
      <div class="slds-global-header slds-grid slds-grid_align-spread">
        <div class="slds-global-header__item">
          <div class="slds-global-header__logo">
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </div>
        </div>
        <div class="slds-global-header__item">
          <ul class="slds-global-actions">
            <li class="slds-global-actions__item">
              <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                <button
                  class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action"
                  aria-haspopup="true"
                  title="Global Actions"
                >
                  <svg
                    class="slds-button__icon"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#add"
                    />
                  </svg>
                  <span class="slds-assistive-text">Global Actions</span>
                </button>
              </div>
            </li>
            <li class="slds-global-actions__item">
              <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                <button
                  class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action"
                  aria-haspopup="true"
                  title="Help and Training"
                >
                  <svg
                    class="slds-button__icon slds-global-header__icon"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#question"
                    />
                  </svg>
                  <span class="slds-assistive-text">Help and Training</span>
                </button>
              </div>
            </li>
            <li class="slds-global-actions__item">
              <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                <button
                  class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action"
                  aria-haspopup="true"
                  title="Setup"
                >
                  <svg
                    class="slds-button__icon slds-global-header__icon"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#setup"
                    />
                  </svg>
                  <span class="slds-assistive-text">Setup</span>
                </button>
              </div>
            </li>
            <li class="slds-global-actions__item">
              <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                <button
                  class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action"
                  title="no new notifications"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <svg
                    class="slds-button__icon slds-global-header__icon"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg#notification"
                    />
                  </svg>
                  <span class="slds-assistive-text">no new notifications</span>
                </button>
                <span
                  aria-hidden="true"
                  class="slds-notification-badge"
                >0</span>
              </div>
            </li>
            <li class="slds-global-actions__item">
              <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                <button
                  class="slds-button slds-global-actions__avatar slds-global-actions__item-action"
                  title="person name"
                  aria-haspopup="true"
                >
                  <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                    <img
                      alt="Person name"
                      src="@salesforce-ux/design-system/assets/images/avatar2.jpg"
                      title="User avatar"
                    />
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="content slds-template_default">
    <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
