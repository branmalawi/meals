/* eslint-disable import/prefer-default-export */
import FavoriteRestoDB from '../../src/scripts/data/favorite-resto';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestoDB,
    restaurantData: restaurant,
  });
};

export { createLikeButtonPresenter };
