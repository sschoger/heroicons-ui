class DtIconCalanderIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M17 4h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 112 0v1h6V3a1 1 0 012 0v1zm-2 2H9v1a1 1 0 11-2 0V6H5v4h14V6h-2v1a1 1 0 01-2 0V6zm4 6H5v8h14v-8z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-calander-icon", DtIconCalanderIcon);
