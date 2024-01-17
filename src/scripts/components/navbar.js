class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      /* Navbar styles */
        .container {
          height: 100vh;
        }

        .navbar {
          height: 10vh;
          position: sticky;
          top: 0;
          background-color: #ffffff;
          color: hsl(0, 0%, 0%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          z-index: 100;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSide {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeOutSide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes fadeOut {
          0% {
            height: 0%;
          }
          100% {
            height: 50%;
          }
        }

        .animate-in {
          animation: fadeIn 0.5s ease;
        }

        .animate-out {
          animation: fadeOut 2s ease;
        }

        .animate-in-offcanfas {
          animation: fadeSide 0.6s ease;
        }

        .animate-out-offcanfas {
          animation: fadeOutSide 0.6s ease;
        }

        .brand {
          font-weight: bold;
          font-size: 2rem;
          margin-left: 2rem;
        }

        .navContent ul {
          list-style: none;
          display: flex;
          align-items: center;
          margin-right: 2rem;
        }

        .navContent li {
          margin-right: 15px;
        }

        .navContent a {
          text-decoration: none;
          color: #000000;
          font-weight: 600;
          transition: color 0.3s ease-in-out;
          position: relative;
          padding: 20px 15px;
        }

        .navContent a:hover {
          color: skyblue;
        }

        /* Hamburger styles */
        .hamburger {
          right: 0;
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: #000000;
          margin: 3px 0;
        }

        .hamburger:focus .bar {
          background: #ff0000;
        }

        @media (max-width: 768px) {
          .card-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        
          .touch {
            padding: 44px 44px;
            background-color: rgba(0, 0, 0, 0);
            border: none;
            display: flex;
          }
        
          .navContent {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            position: fixed;
            background-color: #ffffff;
            top: 10%;
            left: -100%;
            width: 230px;
            height: 100%;
            padding: 15px;
            z-index: 999;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
        
          .brand {
            margin-left: -1rem;
          }
        
          .navContent.active {
            display: flex;
            left: 0;
          }
        
          .navContent ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
          }
        
          .navContent li {
            margin: 10px 0;
          }
        
          .navContent a {
            text-decoration: none;
            color: #000000;
            font-weight: 400;
            transition: color 0.3s ease-in-out;
          }
        
          .hamburger {
            display: flex;
            transition: 0.4s;
          }
          .bar {
            transition: 0.4s;
          }
          .hamburger.active .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 7.5px);
          }
        
          .hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }
        
          .hamburger.active .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -7.5px);
          }
        }
        @media (max-width: 450px) {
          .navContent {
            width: 180px;
          }
        }
        </style>
        <!-- navbarContent -->
    <nav class="navbar" id="navcontainer">
      <div class="brand">Rwst</div>
      <button class="touch" id="hamburger" title="Toggle Navigation">
        <div class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </button>
      <div class="navContent" id="navmenu">
        <ul>
          <li><a href="/#" id="homeNav">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/michsannr/">About Us</a></li>
        </ul>
      </div>
    </nav>
      `;

    const hamburger = this.shadowRoot.getElementById('hamburger');
    const hamClass = this.shadowRoot.querySelector('.hamburger');
    const navContent = this.shadowRoot.querySelector('.navContent');
    const homeLink = this.shadowRoot.getElementById('homeNav');

    function toggleNav() {
      navContent.classList.toggle('active');
      if (navContent.classList.contains('animate-in-offcanfas')) {
        navContent.classList.remove('animate-in-offcanfas');
        navContent.classList.add('animate-out-offcanfas');
      } else {
        navContent.classList.remove('animate-out-offcanfas');
        navContent.classList.add('animate-in-offcanfas');
      }
      hamClass.classList.toggle('active');
    }

    hamburger.addEventListener('click', () => {
      toggleNav();
      if (navContent.classList.contains('active')) {
        homeLink.focus();
      }
    });

    hamburger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        toggleNav();
        if (navContent.classList.contains('active')) {
          homeLink.focus();
        }
      }
    });
  }
}

customElements.define('navbar-element', Nav);
