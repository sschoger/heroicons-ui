class DtIconMoreHorizIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M4 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm8 2a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm8 2a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-more-horiz-icon", DtIconMoreHorizIcon);
