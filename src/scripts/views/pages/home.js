import RestaurantSource from '../../data/restaurant-source';
import SweetAlert from '../../utils/swal-initiator';
import { createCatalogueRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <picture>
        <source media="(max-width: 480px)" srcset="assets/backgrounds/hero/hero-small.jpg" width="480" height="320">
        <source media="(max-width: 800px)" srcset="assets/backgrounds/hero/hero-medium.jpg" width="800" height="533">
        <img src="assets/backgrounds/hero/hero-large.jpg" alt="" width="1200" height="800">
      </picture>
      <div>
      <h1 tabindex="0">welcom to meals</h1>
      <p tabindex="0">Your culinary adventure awaits here.</p>
      </div>
    </div>
    <div class="catalogue">
      <div class="catalogue__heading">
        <h2 tabindex="0">catalogue restaurant</h2>
      </div>
      <div class="catalogue__list">
        <catalogue-placeholder></catalogue-placeholder>
        <catalogue-placeholder></catalogue-placeholder>
        <catalogue-placeholder></catalogue-placeholder>
        <catalogue-placeholder></catalogue-placeholder>
        <catalogue-placeholder></catalogue-placeholder>
        <catalogue-placeholder></catalogue-placeholder>
        <catalogue-placeholder></catalogue-placeholder>
        <catalogue-placeholder></catalogue-placeholder>
      </div>
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantSource.home();
      const restaurantsContainer = document.querySelector('.catalogue__list');
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createCatalogueRestoItemTemplate(restaurant);
      });
    } catch {
      SweetAlert.disconnect('tidak dapat terhubung, coba cek ulang koneksi anda dan refresh halaman ini');
    }
  },
};

export default Home;
