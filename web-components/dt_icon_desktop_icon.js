class DtIconDesktopIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M13 17h-2v2h2v-2zm2 0v2h2a1 1 0 010 2H7a1 1 0 010-2h2v-2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-5zM4 5v10h16V5H4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-desktop-icon", DtIconDesktopIcon);
