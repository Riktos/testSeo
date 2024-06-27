class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.isOpenNavigation = false;
  }

  connectedCallback() {
    const template = document.createElement('template');

    template.innerHTML = `
      <style>
        .header {
          position: sticky;
          z-index: 1;
          top: 0;
          display: flex;
          justify-content: center;
          width: 100%;
          background: #131313CC;
        }

        .header-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          color: white;
        }

        nav ul {
          list-style: none;
          display: flex;
          padding: 0;
          margin: 0;
          gap: 48px;
        }

        nav a {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          text-align: left;
          text-decoration: none;
          color: white;
          position: relative;
        }

        nav a.highlight::after {
          content: '';
          height: 6px;
          width: 100%;
          bottom: -14px;
          left: 0;
          position: absolute;
          background: linear-gradient(to right, #00f, #8a00ff);
          transition: height 0.3s ease-in-out;
        }

        nav a.highlight:hover:after {
          transition: height 0.3s ease-in-out;
          height: 10px;
        }

        .menu-button {
          display: none;
        }
        
        @media (max-width: 1199px) {
          .header.open {
            background: #131313;
          }
          .menu-button {
            display: flex;
            width: 88px;
            height: 88px;
            position: relative;
            cursor: pointer;
            justify-content: center;
            align-items: center;
          }

          .nav {
            display: none;
          }

          .header-wrapper {
            position: relative;
            padding: 0 16px;
          }

          .nav.open {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #131313;
            height: 100vh;
            flex-direction: row-reverse;
          }

          nav.open ul {
            margin-top: 82px;
            gap: 32px;
            flex-direction: column;
            align-items: end;
            padding-right: 16px;
          }
          
          ul a {
            font-size: 32px;
            font-weight: 700;
            line-height: 35.2px;
          }
        }

        @media screen and (max-width: 1199px) and (orientation: landscape) { 
          nav.open ul {
            margin-top: 24px;
            gap: 16px;
            flex-direction: column;
            align-items: end;
            padding-right: 16px;
          }
         }
      </style>

      <header class="header">
        <div class="header-wrapper">
          <img src="images/logo_header.svg" alt="Смарт Ритейл Тех &#8212; IT-компания нового поколения">
          <button class="menu-button">
            <img src="images/menu_icon_closed.svg" alt="Меню">
          </button>
          <nav class="nav">
            <ul>
              <li><a href="#main">делаем</a></li>
              <li><a href="#features">стэк</a></li>
              <li><a href="#">кейсы</a></li>
              <li><a class="highlight" href="#">начать проект</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.header = this.shadowRoot.querySelector('header');
    this.menuButton = this.shadowRoot.querySelector('.menu-button');
    this.menuButtonImage = this.menuButton.querySelector('img');
    this.nav = this.shadowRoot.querySelector('.nav');
    this.links = this.nav.querySelectorAll('nav a');

    this.links.forEach(link => {
      link.addEventListener('click', () => {
        this.toggleNavigation();
      });
    });

    this.menuButton.addEventListener('click', () => {
      this.toggleNavigation();
    });
  }

  toggleNavigation() {
    this.isOpenNavigation = !this.isOpenNavigation;

    if (this.isOpenNavigation) {
      this.nav.classList.add('open');
      this.header.classList.add('open');

      this.menuButtonImage.src = 'images/menu_icon_opened.svg';
    } else {
      this.nav.classList.remove('open');
      this.header.classList.remove('open');

      this.menuButtonImage.src = 'images/menu_icon_closed.svg';
    }
  }
}

customElements.define('header-component', HeaderComponent);
