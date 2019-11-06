class DtIconViewIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M17.56 17.66a8 8 0 01-11.32 0L1.3 12.7a1 1 0 010-1.42l4.95-4.95a8 8 0 0111.32 0l4.95 4.95a1 1 0 010 1.42l-4.95 4.95zm-9.9-1.42a6 6 0 008.48 0L20.38 12l-4.24-4.24a6 6 0 00-8.48 0L3.4 12l4.25 4.24zM11.9 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-view-icon", DtIconViewIcon);
