class IconRocketIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M16.21 16.95a5 5 0 01-4.02 4.9l-3.85.77a1 1 0 01-.9-.27l-.71-.7a2 2 0 010-2.83l1.44-1.45a13.17 13.17 0 01-1.42-1.41L5.31 17.4a2 2 0 01-2.83 0l-.7-.7a1 1 0 01-.28-.9l.77-3.86a5 5 0 014.9-4.02h.86a13.07 13.07 0 0112.82-5.47 1 1 0 01.83.83A12.98 12.98 0 0116.2 16.1v.85zm-4.41 2.94a3 3 0 002.41-2.94v-1.4a1 1 0 01.47-.84A11.04 11.04 0 0019.8 4.33 10.98 10.98 0 009.42 9.45a1 1 0 01-.85.47h-1.4a3 3 0 00-2.94 2.4l-.66 3.34.33.33 2.24-2.24a1 1 0 011.52.12 11.08 11.08 0 002.6 2.6 1 1 0 01.12 1.52l-2.24 2.24.33.33 3.33-.67zM15 10a1 1 0 110-2 1 1 0 010 2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-rocket-icon", IconRocketIcon);
