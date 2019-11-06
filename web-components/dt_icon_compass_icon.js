class DtIconCompassIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM9.56 8.93l6.37-2.12a1 1 0 011.26 1.26l-2.12 6.37a1 1 0 01-.63.63l-6.37 2.12a1 1 0 01-1.26-1.26l2.12-6.37a1 1 0 01.63-.63zm-.22 5.73l4-1.33 1.32-4-4 1.34-1.32 4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-compass-icon", DtIconCompassIcon);
