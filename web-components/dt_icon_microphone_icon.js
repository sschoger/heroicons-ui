class DtIconMicrophoneIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M13 18.94V21h3a1 1 0 010 2H8a1 1 0 010-2h3v-2.06A8 8 0 014 11a1 1 0 012 0 6 6 0 1012 0 1 1 0 012 0 8 8 0 01-7 7.94zM12 1a4 4 0 014 4v6a4 4 0 11-8 0V5a4 4 0 014-4zm0 2a2 2 0 00-2 2v6a2 2 0 104 0V5a2 2 0 00-2-2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-microphone-icon", DtIconMicrophoneIcon);
