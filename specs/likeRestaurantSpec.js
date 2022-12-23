import * as TestFactories from './helpers/testFactories';
import FavoriteRestoDB from '../src/scripts/data/favorite-resto';

describe('Liking a retaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like the restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="unlike the restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestoDB.getRestaurant(1);
    expect(restaurant).toEqual({
      id: 1,
    });
    FavoriteRestoDB.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    await FavoriteRestoDB.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDB.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestoDB.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenter({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDB.getAllRestaurants()).toEqual([]);
  });
});
