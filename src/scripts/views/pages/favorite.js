/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import FavoriteRestoDB from '../../data/favorite-resto';
import { createCatalogueRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="catalogue">
      <div class="catalogue__heading">
        <h2>favorite restaurant</h2>
      </div>
      <div class="catalogue__list"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.catalogue__list');
    const mainContainer = document.querySelector('.catalogue');
    if (restaurants.length === 0) {
      this._isEmpty(mainContainer);
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createCatalogueRestoItemTemplate(restaurant);
    });
  },

  _isEmpty(container) {
    container.innerHTML = `
      <div class="catalogue__nodata">
        <img src='assets/backgrounds/nodata.svg' alt='empty data'>
        <h1>Oops.. Empty favorite restaurant</h1>
      </div>
    `;
  },
};

export default Home;
