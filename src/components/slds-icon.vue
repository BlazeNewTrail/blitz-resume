<template>
  <span class="slds-icon_container" :class="containerClass" :title="altText">
    <svg class="slds-icon" :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconLink" />
    </svg>
    <span class="slds-assistive-text">{{ altText }}</span>
  </span>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
      validator(value) {
        const [cat, name] = value.split(':');
        return (
          cat &&
          name &&
          ['action', 'custom', 'doctype', 'standard', 'utility'].indexOf(
            cat,
          ) !== -1
        );
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return (
          ['xx-small', 'x-small', 'small', 'medium', 'large'].indexOf(value) !==
          -1
        );
      },
    },
    variant: {
      type: String,
      default: 'base',
      validator(value) {
        return (
          ['base', 'inverse', 'success', 'warning', 'error'].indexOf(value) !==
          -1
        );
      },
    },
    src: {
      type: String,
      default: null,
    },
    alternativeText: {
      type: String,
      default: null,
    },
    circle: Boolean,
  },
  computed: {
    iconCategory() {
      return this.iconName.split(':')[0];
    },
    icon() {
      return this.iconName.split(':')[1];
    },
    containerClass() {
      return [
        `slds-icon-${this.iconCategory}-${this.icon.replace(/_/g, '-')}`,
        this.circle ? 'slds-icon_container_circle' : '',
      ];
    },
    iconLink() {
      return (
        this.src ||
        `/assets/img/slds-icons/${this.iconCategory}/symbols.svg#${this.icon}`
      );
    },
    svgClass() {
      return [
        `slds-icon_${this.size}`,
        `slds-icon-text-${this.variant}`,
        this.iconCategory === 'utility' ? 'slds-icon-text-default' : '',
      ];
    },
    altText() {
      return this.alternativeText || this.icon;
    },
  },
};
</script>
