class DtIconStoreIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M20 11.46V20a2 2 0 01-2 2h-3a2 2 0 01-2-2v-4h-2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-8.54A4 4 0 012 8V7a1 1 0 01.1-.45l2-4A1 1 0 015 2h14a1 1 0 01.9.55l2 4c.06.14.1.3.1.45v1a4 4 0 01-2 3.46zM18 12c-1.2 0-2.27-.52-3-1.35a3.99 3.99 0 01-6 0A3.99 3.99 0 016 12v8h3v-4c0-1.1.9-2 2-2h2a2 2 0 012 2v4h3v-8zm2-4h-4a2 2 0 104 0zm-6 0h-4a2 2 0 104 0zM8 8H4a2 2 0 104 0zm11.38-2l-1-2H5.62l-1 2h14.76z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-store-icon", DtIconStoreIcon);
