<template>
  <section class="site site-sidebar slds-grid_align-center slds-order_2">
    <div class="slds-grid slds-grid_align-center">
      <div class="site-skip-content">
        <a
          href="#site-main-content"
          class="slds-assistive-text slds-assistive-text_focus"
        >Skip to Content</a>
      </div>
      <!-- <div class="site-logo">
        <a href="/">
          <span class="site-logo__graphic">
            <span class="slds-assistive-text">Salesforce</span>
          </span>Jon Snow
        </a>
      </div>-->
      <span
        class="slds-avatar slds-avatar_circle slds-avatar_xlarge slds-avatar_profile-image-large"
      >
        <span class="slds-assistive-text">Person name</span>
      </span>
      <!-- <form class="slds-grid site-search slds-grid_vertical-align-center" novalidate=""><div role="search" class="site-searchbox__wrapper slds-col"><label for="search-landing-nav" class="slds-assistive-text">Search</label><span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input type="text" id="search-landing-nav" class="site-searchbox__input slds-input site-search-input ds-input" name="search" placeholder="Search" autocomplete="off" required="" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Salesforce Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre></span>
        <button type="submit" class="slds-assistive-text" tabindex="-1">Submit your search query</button></div>
      </form>-->
    </div>
    <div
      id="site-navigation"
      class="site site-navigation site-navigation--has-search"
    >
      <!-- <nav
        class="slds-nav-vertical"
        id="navigation"
        role="navigation"
        tabindex="-1"
        aria-label="Main navigation"
      >-->
      <scroll-active-nav class="slds-nav-vertical">
        <div class="slds-nav-vertical__section">
          <ul>
            <li data-navkey="about" class="slds-nav-vertical__item">
              <a
                href="#about"
                class="slds-nav-vertical__action"
                aria-current="true"
              >About</a>
            </li>
            <li data-navkey="education" class="slds-nav-vertical__item">
              <a
                href="#education"
                class="slds-nav-vertical__action"
              >Education</a>
            </li>
            <li data-navkey="work" class="slds-nav-vertical__item">
              <a
                href="#work"
                class="slds-nav-vertical__action"
              >Work</a>
            </li>
            <li data-navkey="skills" class="slds-nav-vertical__item">
              <a
                href="#skills"
                class="slds-nav-vertical__action"
              >Skills</a>
            </li>
          </ul>
        </div>
        <!-- </nav> -->
      </scroll-active-nav>
    </div>
  </section>
</template>

<script>
import ScrollActiveNav from "@/components/scroll-active-nav";

export default {
  components: {
    ScrollActiveNav
  }
};
</script>