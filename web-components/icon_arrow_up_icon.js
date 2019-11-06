class IconArrowUpIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M13 5.41V21a1 1 0 01-2 0V5.41l-5.3 5.3a1 1 0 11-1.4-1.42l7-7a1 1 0 011.4 0l7 7a1 1 0 11-1.4 1.42L13 5.4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-arrow-up-icon", IconArrowUpIcon);
