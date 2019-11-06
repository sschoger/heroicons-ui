class IconStarIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      svg {
        display: inline-block;
        vertical-align: middle;
        
      }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M6.1 21.98a1 1 0 01-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 01.56-1.71l6.05-.88 2.7-5.48a1 1 0 011.8 0l2.7 5.48 6.06.88a1 1 0 01.55 1.7l-4.38 4.27 1.04 6.03a1 1 0 01-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 01.93 0l4.08 2.15-.78-4.55a1 1 0 01.29-.88l3.3-3.22-4.56-.67a1 1 0 01-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 01-.75.54l-4.57.67 3.3 3.22a1 1 0 01.3.88l-.79 4.55 4.09-2.15z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-star-icon", IconStarIcon);
