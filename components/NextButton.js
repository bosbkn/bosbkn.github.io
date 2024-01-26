export class NextButton extends HTMLElement {
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
        <button onclick="this.handleClick()"><i class="fa-solid fa-chevron-down"></i></button>
      </div>
    `;
  }

  handleClick() {
    document.querySelector("#gifts").scrollIntoView();
  }
}
