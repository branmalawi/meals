class MenuPlaceholder extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="menu__image skeleton"></div>
      <div class="menu__data">
        <p class="skeleton">lorem</p>
        <p class="menu__rating skeleton">lorem</p>
        <p class="skeleton">lorem</p>
        <p class="skeleton">lorem</p>
      </div>`;
  }
}

customElements.define('menu-placeholder', MenuPlaceholder);
export default MenuPlaceholder;
