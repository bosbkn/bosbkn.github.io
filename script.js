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
      </style>
      <div>
        <!-- Add your custom HTML content here -->
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    `;
  }
}

class NextButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <div>
        <button onclick="handleClick()">
          Next
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    `;
  }
}

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

function handleClick() {
  document.querySelector("#gifts").scrollIntoView({ behavior: "smooth" });
}

customElements.define("gift-component", Gift);
customElements.define("next-button", NextButton);
