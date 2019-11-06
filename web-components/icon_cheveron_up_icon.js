class IconCheveronUpIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M8.7 14.7a1 1 0 01-1.4-1.4l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L12 11.42l-3.3 3.3z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-cheveron-up-icon", IconCheveronUpIcon);
