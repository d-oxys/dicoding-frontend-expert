class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
              <style>
              footer {
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 10px;
                margin-top: 5rem;
              }
                
                </style>
                <footer>
                    <p>&copy; 2023 RWST. Hak Cipta Dilindungi Undang-Undang.</p>
                </footer>
              `;
  }
}

customElements.define('footer-comp', Footer);
