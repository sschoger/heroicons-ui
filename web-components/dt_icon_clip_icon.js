class DtIconClipIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M20.12 11.95l-6.58 6.59a5 5 0 11-7.08-7.07l6.59-6.6a3 3 0 014.24 4.25l-6.58 6.59a1 1 0 11-1.42-1.42l6.59-6.58a1 1 0 00-1.42-1.42l-6.58 6.59a3 3 0 004.24 4.24l6.59-6.58a5 5 0 00-7.08-7.08l-6.58 6.6a7 7 0 009.9 9.9l6.59-6.6a1 1 0 00-1.42-1.4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-clip-icon", DtIconClipIcon);
