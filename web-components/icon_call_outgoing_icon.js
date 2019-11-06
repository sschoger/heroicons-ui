class IconCallOutgoingIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M13.04 14.69l1.07-2.14a1 1 0 011.2-.5l6 2A1 1 0 0122 15v5a2 2 0 01-2 2h-2A16 16 0 012 6V4c0-1.1.9-2 2-2h5a1 1 0 01.95.68l2 6a1 1 0 01-.5 1.21L9.3 10.96a10.05 10.05 0 003.73 3.73zM8.28 4H4v2a14 14 0 0014 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 01-1.3.46 12.04 12.04 0 01-6.02-6.01 1 1 0 01.46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 11-1.42-1.4L18.6 4H16a1 1 0 010-2h5a1 1 0 011 1v5a1 1 0 01-2 0V5.41l-4.3 4.3z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-call-outgoing-icon", IconCallOutgoingIcon);
