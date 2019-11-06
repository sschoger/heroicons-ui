class IconEmotionSadIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.54-4.54a5 5 0 017.08 0 1 1 0 01-1.42 1.42 3 3 0 00-4.24 0 1 1 0 01-1.42-1.42zM9 11a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-emotion-sad-icon", IconEmotionSadIcon);
