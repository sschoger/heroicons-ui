class DtIconDiscountIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M7.7 6.3L9 7.58l4.3-4.3a1 1 0 011.4 1.42L10.42 9l4.3 4.3a1 1 0 01-1.42 1.4L9 10.42l-1.3 1.3a3 3 0 11-1.4-1.42L7.58 9l-1.3-1.3A3 3 0 117.7 6.3zM21 8a1 1 0 011 1v1a1 1 0 01-2 0 1 1 0 010-2h1zM4 20a1 1 0 010 2H3a1 1 0 01-1-1v-1a1 1 0 012 0zm17 2h-1a1 1 0 010-2 1 1 0 012 0v1a1 1 0 01-1 1zM14 8h2a1 1 0 010 2h-2a1 1 0 010-2zm7 5a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm-7 7h2a1 1 0 010 2h-2a1 1 0 010-2zm-6 0h2a1 1 0 010 2H8a1 1 0 010-2zm-2.3-6.3a1 1 0 10-1.4-1.4 1 1 0 001.4 1.4zM5 6a1 1 0 100-2 1 1 0 000 2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-discount-icon", DtIconDiscountIcon);
