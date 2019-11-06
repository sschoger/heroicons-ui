class DtIconArrowDownIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M11 18.59V3a1 1 0 012 0v15.59l5.3-5.3a1 1 0 011.4 1.42l-7 7a1 1 0 01-1.4 0l-7-7a1 1 0 011.4-1.42l5.3 5.3z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-arrow-down-icon", DtIconArrowDownIcon);
