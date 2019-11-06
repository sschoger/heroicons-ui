class IconMinusSquareIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm11 7a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-minus-square-icon", IconMinusSquareIcon);
