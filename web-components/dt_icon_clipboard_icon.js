class DtIconClipboardIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M8 4c0-1.1.9-2 2-2h4a2 2 0 012 2h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h2zm0 2H6v14h12V6h-2a2 2 0 01-2 2h-4a2 2 0 01-2-2zm2-2v2h4V4h-4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-clipboard-icon", DtIconClipboardIcon);
