class IconUserCheckIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M9 12A5 5 0 119 2a5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm8 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H7a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h5a5 5 0 015 5v2zm-1.3-10.7l1.3 1.29 3.3-3.3a1 1 0 011.4 1.42l-4 4a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.42z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-user-check-icon", IconUserCheckIcon);
