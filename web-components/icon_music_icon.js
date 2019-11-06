class IconMusicIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M8 14.54V6a1 1 0 01.76-.97l12-3A1 1 0 0122 3v12a4 4 0 11-2-3.46V4.28l-10 2.5V18a4 4 0 11-2-3.46zM6 20a2 2 0 100-4 2 2 0 000 4zm12-3a2 2 0 100-4 2 2 0 000 4z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-music-icon", IconMusicIcon);
