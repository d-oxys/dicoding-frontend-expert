class JumboTron extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <style>
            /* hero style */
            .containerHero {
              color: #ffffff;
              text-align: center;
            }

            .rowHero {
              display: flex;
              flex-direction: column;
              align-items: center;
              z-index: 5;
            }
            .punchline {
              font-size: 3rem;
              font-weight: bold;
              margin: 0;
              z-index: 5;
            }
            .hero span {
              line-height: 0.5;
              display: block;
              text-align: center;
              margin-top: 0;
              margin-bottom: 2.5rem;
              z-index: 5;
            }

            .welcome {
              font-family: 'Great Vibes', cursive;
              font-weight: 400;
              font-size: 20px;
              z-index: 5;
            }

            .punchline-2 {
              letter-spacing: -0.05em;
              font-family: 'Short Stack', cursive;
              font-weight: 400;
              font-size: 20px;
              margin-bottom: 3rem;
              z-index: 5;
            }

            .btn {
              text-decoration: none;
              color: inherit;
              background-color: #3490dc;
              color: #fff;
              font-weight: 500;
              border: none;
              border-radius: 0.5rem;
              font-size: 0.875rem;
              padding: 0.8rem 1.25rem;
              margin-right: 0.5rem;
              margin-bottom: 0.5rem;
              cursor: pointer;
              transition: background-color 0.3s, box-shadow 0.3s;
              z-index: 5;
            }

            .btn a {
              padding: 44px 44px;
              text-decoration: none;
              color: inherit;
            }

            .btn:hover {
              background-color: #2779b5;
              font-weight: bold;
            }

            .btn:focus {
              font-weight: bold;
              outline: none;
              box-shadow: 0 0 0 0.25rem #87c2f1;
            }
            .hero::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              z-index: 2;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.6);
            }                    
            @media (max-width: 768px) {
              .punchline {
                line-height: 0.9;
                font-size: 2rem;
                margin-bottom: 1.5rem;
              }
              .hero span {
                line-height: 0.9;
                margin-top: 0;
                display: contents;
              }
            
              .welcome {
                font-size: 15px;
              }
            
              .punchline-2 {
                letter-spacing: -0.05em;
                font-size: 20px;
                margin-bottom: 2.5rem;
                z-index: 5;
              }
            
            }
              @media (max-width: 450px) {
                .punchline {
                  font-size: 1rem;
                  margin-bottom: 1rem;
                }
                .punchline-2 {
                  font-size: 10px;
                }
              
                .btn {
                  border-radius: 0.6rem;
                  font-size: 0.6rem;
                  padding: 0.5rem 1rem;
                  margin-right: 0.5rem;
                  margin-bottom: 0.5rem;
                }
              }
              
              </style>
              <div class="container">
              <!-- hero section -->
              <section id="Home">
                <div class="hero">
                  <div class="containerHero">
                    <div class="rowHero">
                      <p class="welcome">Welcome to Rwst resto</p>
                      <div class="punchline">Are you ready to rumbling, <span>your stomach?</span></div>
                      <p class="punchline-2">Serving you since the void century</p>
                      <div class="btn">
                        <a href="#explore">Lihat Resto</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            `;
  }
}

customElements.define('jumbo-tron', JumboTron);
