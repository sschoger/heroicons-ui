class IconLockClosedIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M7 10V7a5 5 0 1110 0v3h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 00-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-lock-closed-icon", IconLockClosedIcon);
