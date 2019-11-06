class DtIconCodeIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M20.59 12l-3.3-3.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4A1 1 0 016.7 8.7L3.4 12zm7.56 8.24a1 1 0 01-1.94-.48l4-16a1 1 0 111.94.48l-4 16z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-code-icon", DtIconCodeIcon);
