class IconCameraIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M20 7a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 019 3h6a1 1 0 01.9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 017 9H4v10h16V9h-3a1 1 0 01-.9-.55L14.39 5H9.62zM12 17a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-camera-icon", IconCameraIcon);
