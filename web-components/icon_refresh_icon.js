class IconRefreshIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M6 18.7V21a1 1 0 01-2 0v-5a1 1 0 011-1h5a1 1 0 110 2H7.1A7 7 0 0019 12a1 1 0 112 0 9 9 0 01-15 6.7zM18 5.3V3a1 1 0 012 0v5a1 1 0 01-1 1h-5a1 1 0 010-2h2.9A7 7 0 005 12a1 1 0 11-2 0 9 9 0 0115-6.7z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-refresh-icon", IconRefreshIcon);
