class DtIconVideoIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M16 8.38l4.55-2.27A1 1 0 0122 7v10a1 1 0 01-1.45.9L16 15.61V17a2 2 0 01-2 2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h10a2 2 0 012 2v1.38zm0 2.24v2.76l4 2V8.62l-4 2zM14 17V7H4v10h10z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-video-icon", DtIconVideoIcon);
