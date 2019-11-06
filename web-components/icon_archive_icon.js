class IconArchiveIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M20 9v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 01-2-2V5c0-1.1.9-2 2-2h16a2 2 0 012 2v2a2 2 0 01-2 2zm0-2V5H4v2h16zM6 9v10h12V9H6zm4 2h4a1 1 0 010 2h-4a1 1 0 010-2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-archive-icon", IconArchiveIcon);
