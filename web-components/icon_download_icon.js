class IconDownloadIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M11 14.59V3a1 1 0 012 0v11.59l3.3-3.3a1 1 0 011.4 1.42l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 011.4-1.42l3.3 3.3zM3 17a1 1 0 012 0v3h14v-3a1 1 0 012 0v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-download-icon", IconDownloadIcon);
