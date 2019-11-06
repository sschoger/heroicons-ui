class DtIconFolderPlusIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M20 6a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4zm9 6h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2v-2a1 1 0 012 0v2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-folder-plus-icon", DtIconFolderPlusIcon);
