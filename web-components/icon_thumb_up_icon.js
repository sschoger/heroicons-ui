class IconThumbUpIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M17.62 10H20a2 2 0 012 2v8a2 2 0 01-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 015 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 00-.93 1.36l3.5 7.02a1 1 0 00.93.62H16v-8.76zm2 .76v8h2v-8h-2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-thumb-up-icon", IconThumbUpIcon);
