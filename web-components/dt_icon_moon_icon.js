class DtIconMoonIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M9.57 3.38a8 8 0 0010.4 10.4 1 1 0 011.31 1.3 10 10 0 11-13-13 1 1 0 011.3 1.3zM7.1 5.04a8 8 0 1011.2 11.23A10 10 0 017.08 5.04z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-moon-icon", DtIconMoonIcon);
