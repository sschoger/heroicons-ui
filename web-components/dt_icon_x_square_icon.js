class DtIconXSquareIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8.41 7l1.42 1.41a1 1 0 11-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 11-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 111.42-1.42L12 10.6l1.41-1.42a1 1 0 111.42 1.42L13.4 12z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-x-square-icon", DtIconXSquareIcon);
