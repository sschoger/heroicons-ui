class DtIconUploadIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M13 5.41V17a1 1 0 01-2 0V5.41l-3.3 3.3a1 1 0 01-1.4-1.42l5-5a1 1 0 011.4 0l5 5a1 1 0 11-1.4 1.42L13 5.4zM3 17a1 1 0 012 0v3h14v-3a1 1 0 012 0v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-upload-icon", DtIconUploadIcon);
