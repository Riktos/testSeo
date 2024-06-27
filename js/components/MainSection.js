class MainSection extends HTMLElement {
  connectedCallback() {
    const templateDesktop = document.createElement('template');

    templateDesktop.innerHTML = `
      <style>
       .main {
         background-color: blue;
         color: white;
         padding: 20px;
         height: 2000px;
       }
      </style>


      <section id="main" class="main">

      </section>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateDesktop.content.cloneNode(true));
  }
}

customElements.define('main-section', MainSection);
