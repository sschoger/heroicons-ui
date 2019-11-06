class DtIconMobileIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm0 2v16h8V4H8zm4 14a1 1 0 110-2 1 1 0 010 2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-mobile-icon", DtIconMobileIcon);
