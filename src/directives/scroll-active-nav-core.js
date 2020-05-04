export default class ScrollActiveNav {
  /**
   * @type {HTMLElement[]}
   */
  sectionElements;

  /**
   * @type {HTMLElement}
   */
  activeElement;

  constructor(options) {
    this.options = Object.assign(
      {
        callback: null,
        intersection: {
          // root: ...,
          // rootMargin: ...,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
        throttle: 1000,
        sectionKeyAttribute: "id",
      },
      options
    );

    this.sectionElements = [];
    this.intersectionRatios = new WeakMap();

    this.createObserver();
  }

  /**
   * @param {IntersectionObserverEntry[]} entries
   */
  intersectionCallback(entries) {
    entries.forEach((entry) => {
      this.intersectionRatios.set(entry.target, entry.intersectionRatio);
      console.log('entry in callback');
    });
    this.calcActiveEntry();
  }

  elementRatio(el) {
    return (this.intersectionRatios.has(el) && this.intersectionRatios.get(el)) || 0;
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

    const maxItems = this.sectionElements.filter((el) => this.elementRatio(el) === maxRatio);

    let active;

    // for now use element later in doc if multiple entries have same ratio
    if (maxItems.length === 1) {
      active = maxItems[0];
    } else {
      console.log('two with same ratio');
      active = maxItems.sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
          ? 1
          : -1
      )[0];
    }

    if (this.activeElement !== active) {
      console.log('activeChange');
      this.activeElement = active;
      const returnValue = this.options.sectionKeyAttribute
        ? this.activeElement.getAttribute(this.options.sectionKeyAttribute)
        : this.activeElement;
      this.options.callback(returnValue);
    }
  }

  createObserver() {
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
}
