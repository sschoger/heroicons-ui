class IconExternalLinkIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M19 6.41L8.7 16.71a1 1 0 11-1.4-1.42L17.58 5H14a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-2 0V6.41zM17 14a1 1 0 012 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7c0-1.1.9-2 2-2h5a1 1 0 010 2H5v12h12v-5z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-external-link-icon", IconExternalLinkIcon);
