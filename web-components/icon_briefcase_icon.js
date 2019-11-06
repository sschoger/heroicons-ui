class IconBriefcaseIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em"><path d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("icon-briefcase-icon", IconBriefcaseIcon);
