class DtIconTrophyIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M11 20v-2.08a6 6 0 01-4.24-3A4.02 4.02 0 012 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 012 2h2a2 2 0 012 2v5a4 4 0 01-4.76 3.93A6 6 0 0113 17.92V20h4a1 1 0 010 2H7a1 1 0 010-2h4zm6.92-7H18a2 2 0 002-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 016 12V6H4v5a2 2 0 002.08 2zM8 4v8a4 4 0 108 0V4H8z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-trophy-icon", DtIconTrophyIcon);
