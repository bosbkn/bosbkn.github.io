export class Gift extends HTMLElement {
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
      </style>
      <div>
        <!-- Add your custom HTML content here -->
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    `;
  }
}
