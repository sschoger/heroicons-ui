class DtIconXCircleIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07zm1.41-1.41A8 8 0 1017.66 6.34 8 8 0 006.34 17.66zM13.41 12l1.42 1.41a1 1 0 11-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 11-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 111.42-1.42L12 10.6l1.41-1.42a1 1 0 111.42 1.42L13.4 12z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-x-circle-icon", DtIconXCircleIcon);
