class Gift extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name");
    const description = this.getAttribute("description");
    this.shadowRoot.innerHTML = `
      <style>
        /* Add your custom styles here */
      </style>
      <div>
        <!-- Add your custom HTML content here -->
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    `;
  }
}

customElements.define("gift-component", Gift);
