class IconMapIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 01-.9 0l-6-3A1 1 0 012 17V4a1 1 0 011.45-.9L9 5.89l5.55-2.77a1 1 0 01.9 0l6 3A1 1 0 0122 7v13a1 1 0 01-1.45.89L15 18.12z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-map-icon", IconMapIcon);
