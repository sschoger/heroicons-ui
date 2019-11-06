class DtIconBookmarkIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M12 18.62l-6.55 3.27A1 1 0 014 21V4c0-1.1.9-2 2-2h12a2 2 0 012 2v17a1 1 0 01-1.45.9L12 18.61zM18 4H6v15.38l5.55-2.77a1 1 0 01.9 0L18 19.38V4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-bookmark-icon", DtIconBookmarkIcon);
