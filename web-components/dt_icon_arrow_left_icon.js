class DtIconArrowLeftIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M5.41 11H21a1 1 0 010 2H5.41l5.3 5.3a1 1 0 01-1.42 1.4l-7-7a1 1 0 010-1.4l7-7a1 1 0 011.42 1.4L5.4 11z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-arrow-left-icon", DtIconArrowLeftIcon);
