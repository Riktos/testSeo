class FeaturesSection extends HTMLElement {
  connectedCallback() {
    const template = document.createElement('template');

    template.innerHTML = `
      <style>
       .features {
         background-color: brown;
         color: white;
         padding: 20px;
         height: 2000px;
       }
      </style>


      <section id="features" class="features">

      </section>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('features-section', FeaturesSection);
