class DtIconDashboardIcon extends HTMLElement {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="2em" width="1em"><path d="M12 22a10 10 0 110-20 10 10 0 010 20zM5.68 7.1A7.96 7.96 0 004.06 11H5a1 1 0 010 2h-.94a7.95 7.95 0 001.32 3.5A9.96 9.96 0 0111 14.05V9a1 1 0 012 0v5.05a9.96 9.96 0 015.62 2.45 7.95 7.95 0 001.32-3.5H19a1 1 0 010-2h.94a7.96 7.96 0 00-1.62-3.9l-.66.66a1 1 0 11-1.42-1.42l.67-.66A7.96 7.96 0 0013 4.06V5a1 1 0 01-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 01-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0010.58 0 7.97 7.97 0 00-10.58 0z" class="heroicon-ui"/></svg>
    `;
  }
}

customElements.define("dt-icon-dashboard-icon", DtIconDashboardIcon);
