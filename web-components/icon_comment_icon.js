class IconCommentIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 012 2v15a1 1 0 01-1.7.7L16.58 17H4a2 2 0 01-2-2zM20 5H4v10h13a1 1 0 01.7.3l2.3 2.29V5z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-comment-icon", IconCommentIcon);
