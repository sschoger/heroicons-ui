class DtIconTagIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M2.59 13.41A1.98 1.98 0 012 12V7a5 5 0 015-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 010 2.82l-8 8a2 2 0 01-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 00-3 3v5l8 8 8-8zM7 8a1 1 0 110-2 1 1 0 010 2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-tag-icon", DtIconTagIcon);
