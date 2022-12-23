class CataloguePlaceholder extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div>
      <div class="catalogue__item-image skeleton"></div>
      <div class="catalogue__item-data">
        <h3 class="skeleton" >lorem</h3>
        <p class="skeleton" >lorem</p>
        <a href="#" class="skeleton" >hai</a>
      </div>
    </div>`;
  }
}

customElements.define('catalogue-placeholder', CataloguePlaceholder);

export default CataloguePlaceholder;
