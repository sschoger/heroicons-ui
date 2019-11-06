class IconUserPlusIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M19 10h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2h-2a1 1 0 010-2h2V8a1 1 0 012 0v2zM9 12A5 5 0 119 2a5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm8 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H7a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h5a5 5 0 015 5v2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-user-plus-icon", IconUserPlusIcon);
