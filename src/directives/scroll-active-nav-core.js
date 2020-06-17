const defaultOptions = {
  intersection: {
    // root: ...,
    // rootMargin: ...,
    threshold: [0, 0.25, 0.5, 0.75, 1],
  },
  throttle: 1000,
  sectionKeyAttribute: 'id',
};

export default class ScrollActiveNav {
  constructor(options) {
    this.options = Object.assign(defaultOptions, options);
    /**
     * @type {HTMLElement[]}
     */
    this.sectionElements = [];

    /**
     * @type {Function[]}
     */
    this.callbacks = [];
    /**
     * @type {HTMLElement}
     */
    this.activeElement = null;
    this.intersectionRatios = new WeakMap();
  }

  /**
   * @param {IntersectionObserverEntry[]} entries
   */
  intersectionCallback(entries) {
    entries.forEach((entry) => {
      this.intersectionRatios.set(entry.target, entry.intersectionRatio);
    });
    this.calcActiveEntry();
  }

  elementRatio(el) {
    return (
      (this.intersectionRatios.has(el) && this.intersectionRatios.get(el)) || 0
    );
  }

  calcActiveEntry() {
    const sortedElements = [...this.sectionElements];
    sortedElements.sort((a, b) => {
      const ratioA = this.elementRatio(a);
      const ratioB = this.elementRatio(b);
      return ratioB - ratioA;
    });

    const maxRatio = this.elementRatio(sortedElements[0]);

    if (maxRatio === 0) {
      return;
    }

    const maxItems = sortedElements.filter(
      (el) => this.elementRatio(el) === maxRatio,
    );

    let active;
    if (maxItems.length === 1) {
      [active] = maxItems;
    } else {
      const rootEl = this.observer.root || document.documentElement;
      const scrollPercentage =
        (rootEl.scrollTop + rootEl.clientHeight / 2) / rootEl.scrollHeight;

      const compareBitMask =
        scrollPercentage > 0.5
          ? Node.DOCUMENT_POSITION_FOLLOWING
          : Node.DOCUMENT_POSITION_PRECEDING;

      [active] = maxItems.sort(
        // eslint-disable-next-line no-bitwise
        (a, b) => (a.compareDocumentPosition(b) & compareBitMask) - 0.5,
      );
    }

    if (this.activeElement !== active) {
      this.activeElement = active;
      this.executeCallbacks();
    }
  }

  executeCallbacks() {
    if (this.callbacks.length > 0) {
      const returnValue = this.activeElement && this.options.sectionKeyAttribute
        ? this.activeElement.getAttribute(this.options.sectionKeyAttribute)
        : this.activeElement;

      const sections = this.sectionElements.map((el) => ({
        id: el.getAttribute('id'),
        label: el.dataset.navlabel || el.getAttribute('id'),
      }));
      this.callbacks.forEach((fn) => fn(returnValue, sections));
    }
  }

  createObserver(options) {
    this.options = Object.assign(defaultOptions, options);
    this.sectionElements = [];

    if (this.observer) {
      this.destroyObserver();
    }

    this.observer = new IntersectionObserver(
      this.intersectionCallback.bind(this),
      this.options.intersection,
    );
  }

  destroyObserver() {
    this.observer.disconnect();
    this.observer = null;
  }

  registerSection(el) {
    this.sectionElements.push(el);
    this.observer.observe(el);
    this.executeCallbacks();
  }

  unregisterSection(el) {
    this.sectionElements.splice(
      this.sectionElements.findIndex((sEl) => sEl === el),
    );
    this.observer.unobserve(el);
  }

  registerCallback(fn) {
    this.callbacks.push(fn);
    this.executeCallbacks();
  }
}
