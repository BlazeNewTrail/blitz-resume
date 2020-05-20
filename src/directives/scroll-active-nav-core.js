const defaultOptions = {
  intersection: {
    // root: ...,
    // rootMargin: ...,
    threshold: [0, 0.25, 0.5, 0.75, 1],
  },
  throttle: 1000,
  sectionKeyAttribute: "id",
};

export default class ScrollActiveNav {
  /**
   * @type {HTMLElement[]}
   */
  sectionElements;

  /**
   * @type {HTMLElement}
   */
  activeElement;

  /**
   * @type {Function[]}
   */
  callbacks;

  constructor(options) {
    this.options = Object.assign(defaultOptions, options);

    this.sectionElements = [];
    this.callbacks = [];
    this.intersectionRatios = new WeakMap();
  }

  /**
   * @param {IntersectionObserverEntry[]} entries
   */
  intersectionCallback(entries) {
    entries.forEach((entry) => {
      this.intersectionRatios.set(entry.target, entry.intersectionRatio);
      console.log("entry in callback");
    });
    this.calcActiveEntry();
  }

  elementRatio(el) {
    return (
      (this.intersectionRatios.has(el) && this.intersectionRatios.get(el)) || 0
    );
  }

  calcActiveEntry() {
    this.sectionElements.sort((a, b) => {
      const ratioA = this.elementRatio(a);
      const ratioB = this.elementRatio(b);
      return ratioB - ratioA;
    });

    const maxRatio = this.elementRatio(this.sectionElements[0]);

    if (maxRatio === 0) {
      return;
    }

    const maxItems = this.sectionElements.filter(
      (el) => this.elementRatio(el) === maxRatio
    );

    let active;
    if (maxItems.length === 1) {
      active = maxItems[0];
    } else {
      const rootEl = this.observer.root || document.documentElement;
      const scrollPercentage =
        (rootEl.scrollTop + rootEl.clientHeight / 2) / rootEl.scrollHeight;

      const compareBitMask =
        scrollPercentage > 0.5
          ? Node.DOCUMENT_POSITION_FOLLOWING
          : Node.DOCUMENT_POSITION_PRECEDING;

      active = maxItems.sort((a, b) =>
        a.compareDocumentPosition(b) & compareBitMask ? 1 : -1
      )[0];
    }

    if (this.activeElement !== active) {
      this.activeElement = active;
      const returnValue = this.options.sectionKeyAttribute
        ? this.activeElement.getAttribute(this.options.sectionKeyAttribute)
        : this.activeElement;
      if (this.callbacks.length > 0)
        this.callbacks.forEach((fn) => fn(returnValue));
    }
  }

  createObserver(options) {
    this.options = Object.assign(defaultOptions, options);

    if (this.observer) {
      this.destroyObserver();
    }

    this.observer = new IntersectionObserver(
      this.intersectionCallback.bind(this),
      this.options.intersection
    );
  }

  destroyObserver() {
    this.observer.disconnect();
    this.observer = null;
  }

  registerSection(el) {
    this.sectionElements.push(el);
    this.observer.observe(el);
  }

  unregisterSection(el) {
    this.sectionElements.splice(
      this.sectionElements.findIndex((sEl) => sEl === el)
    );
    this.observer.unobserve(el);
  }

  registerCallback(fn) {
    this.callbacks.push(fn);
  }
}
