class DtIconGlobeIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M4.06 13a8 8 0 005.18 6.51A18.5 18.5 0 018.02 13H4.06zm0-2h3.96a18.5 18.5 0 011.22-6.51A8 8 0 004.06 11zm15.88 0a8 8 0 00-5.18-6.51A18.5 18.5 0 0115.98 11h3.96zm0 2h-3.96a18.5 18.5 0 01-1.22 6.51A8 8 0 0019.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 110-20 10 10 0 010 20z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-globe-icon", DtIconGlobeIcon);
