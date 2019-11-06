class IconLinkIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M19.48 13.03A4 4 0 0116 19h-4a4 4 0 110-8h1a1 1 0 000-2h-1a6 6 0 100 12h4a6 6 0 005.21-8.98L21.2 12a1 1 0 10-1.72 1.03zM4.52 10.97A4 4 0 018 5h4a4 4 0 110 8h-1a1 1 0 000 2h1a6 6 0 100-12H8a6 6 0 00-5.21 8.98l.01.02a1 1 0 101.72-1.03z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-link-icon", IconLinkIcon);
