/* eslint-disable no-unused-expressions */
import SweetAlert from './swal-initiator';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, restaurantData }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurant = favoriteRestaurant;
    this._restaurant = restaurantData;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    // await this._isRestaurantExist(id) ? this._renderLiked() : this._renderLike();
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // console.log('clicked');
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      SweetAlert.success('data berhasil di tambahkan ke favorite');
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likedButton = document.querySelector('#likeButton');
    likedButton.addEventListener('click', async () => {
      // console.log('clicked');
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      SweetAlert.success('data berhasil di hapus dari favorite');
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
