/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';
import SweetAlert from '../../utils/swal-initiator';
import { createRestoDetailTemplate, createCategoriesTemplate, createListMenuTemplate, createReviewerListTemplate } from '../templates/template-creator';
import FavoriteRestoDB from '../../data/favorite-resto';

const Detail = {
  async render() {
    return `
    <div class="detail">
      <div class="detail__image skeleton"></div>
      <div class="detail__data">
        <h1 class="skeleton">hello</h1>
        <p class="skeleton">hello</p>
        <button class="skeleton"></button>
        <div>
          <span class="skeleton">Sepanyol</span>
          <span class="skeleton">Italia</span>
        </div>
      </div>
      <div class="detail__deskription">
        <p class="skeleton">hai</p><p class="skeleton">hai</p><p class="skeleton">hai</p><p class="skeleton">hai</p><p class="skeleton">hai</p><p class="skeleton">hai</p><p class="skeleton">hai</p><p class="skeleton">hai</p><p class="skeleton">hai</p>
      </div>
    </div>
    <div class="menu">
      <div>
        <h2 tabindex="0">foods</h2>
        <div class="menu__list foods">
          <menu-placeholder class="menu__list-item"></menu-placeholder>
          <menu-placeholder class="menu__list-item"></menu-placeholder>
          <menu-placeholder class="menu__list-item"></menu-placeholder>
        </div>
      </div>
      <div>
        <h2 tabindex="0">drinks</h2>
        <div class="menu__list drinks">
          <menu-placeholder class="menu__list-item"></menu-placeholder>
          <menu-placeholder class="menu__list-item"></menu-placeholder>
          <menu-placeholder class="menu__list-item"></menu-placeholder>
        </div>
      </div>
    </div>
    <div class="review">
      <h2 tabindex="0">add review</h2>
      <form action="" id="addReview">
        <label for="nameReviewer">Name</label>
        <input type="text" name="nameReviewer" id="nameReviewer" />
        <label for="textReview">Comment</label>
        <textarea name="textReview" id="textReview" rows="5"></textarea>
        <button type="submit">add review</button>
      </form>
      <h2 tabindex="0">customer review</h2>
      <div class="review__list">
        <review-placeholder></review-placeholder>
        <review-placeholder></review-placeholder>
        <review-placeholder></review-placeholder>
        <review-placeholder></review-placeholder>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestaurantSource.detailResto(url.id);
      const restaurantContainer = document.querySelector('.detail');
      restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestoDB,
        restaurantData: restaurant,
      });

      const { categories } = restaurant;
      const categoriesContainer = document.querySelector('.categories');
      categories.forEach((category) => {
        categoriesContainer.innerHTML += createCategoriesTemplate(category);
      });

      const menus = await RestaurantSource.menuResto();
      const { foods } = restaurant.menus;
      const foodContainer = document.querySelector('.foods');
      const { drinks } = restaurant.menus;
      const drinkContainer = document.querySelector('.drinks');
      foodContainer.innerHTML = '';
      drinkContainer.innerHTML = '';
      menus.forEach((menu) => {
        this.menaggeMenuData(menu, foods, foodContainer);
        this.menaggeMenuData(menu, drinks, drinkContainer);
      });

      const { customerReviews } = restaurant;
      const reviewListContainer = document.querySelector('.review__list');
      reviewListContainer.innerHTML = '';
      customerReviews.forEach((reviewData) => {
        reviewListContainer.innerHTML += createReviewerListTemplate(reviewData);
      });

      const addReview = document.querySelector('#addReview');
      ReviewInitiator.init({
        id: url.id,
        container: reviewListContainer,
        form: addReview,
      });
    } catch {
      SweetAlert.disconnect('tidak dapat terhubung, coba cek ulang koneksi anda dan refresh halaman ini');
    }
  },

  menaggeMenuData(source, comparations, container) {
    comparations.forEach((comparation) => {
      if (source.name.toLowerCase() == comparation.name.toLowerCase()) {
        container.innerHTML += createListMenuTemplate(source);
      }
    });
  },
};

export default Detail;
