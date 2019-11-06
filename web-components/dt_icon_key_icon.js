class DtIconKeyIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M11.85 17.56a1.5 1.5 0 01-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 01-2-2v-2.59A2 2 0 012.59 16l5.56-5.56A7.03 7.03 0 0115 2a7 7 0 11-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 10-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 01-2 0 1 1 0 00-1-1 1 1 0 010-2 3 3 0 013 3z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-key-icon", DtIconKeyIcon);
