/* eslint-disable import/named */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoDB from '../src/scripts/data/favorite-resto';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestoDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoDB);
});
