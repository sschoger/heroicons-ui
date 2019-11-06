class IconBookIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M7 5H5v14h14V5h-2v10a1 1 0 01-1.45.9L12 14.11l-3.55 1.77A1 1 0 017 15V5zM5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm4 2v8.38l2.55-1.27a1 1 0 01.9 0L15 13.38V5H9z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-book-icon", IconBookIcon);
