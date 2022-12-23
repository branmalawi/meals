class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="navbar">
      <picture class="navbar__logo">
        <source media="(min-width:740px)" srcset="./assets/icons/meals-text.svg"/>
        <img src="./assets/icons/meals.svg" alt="meals logo" tabindex="0" width="100%" height="100%"/>
      </picture>
      <button id="hamburgerButton" class="navbar__menu-toggle" aria-label="open drawer"></button>
      <ul class="navbar__list">
        <li class="navbar__list-item">
          <a href="/#/home"><img src="./assets/icons/home.svg" alt="home">Home</a>
        </li>
        <li class="navbar__list-item">
          <a href="/#/favorite"><img src="./assets/icons/favorite.svg" alt="favorite">Favorite</a>
        </li>
        <li class="navbar__list-item">
          <a href="https://github.com/branmalawi"><img src="./assets/icons/about-us.svg" alt="about us">About</a>
        </li>
      </ul>
    </div>`;
  }
}

customElements.define('nav-bar', Navbar);
export default Navbar;
