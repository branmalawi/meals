class ReviewPlaceholder extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="review__list-item">
      <div class="skeleton image"></div>
      <div>
        <p class="skeleton">lorem</p>
        <p class="skeleton">lorem</p>
      </div>
    </div>`;
  }
}

customElements.define('review-placeholder', ReviewPlaceholder);

export default ReviewPlaceholder;
