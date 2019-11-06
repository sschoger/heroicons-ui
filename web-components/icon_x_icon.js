class IconXIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M16.24 14.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 01-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12l2.83 2.83z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-x-icon", IconXIcon);
