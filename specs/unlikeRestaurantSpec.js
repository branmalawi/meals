import * as TestFactories from './helpers/testFactories';
import FavoriteRestoDB from '../src/scripts/data/favorite-resto';

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoDB.putRestaurant({ id: 1 });
  });

  it('should display unlike button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="unlike the restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like the restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    document.querySelector('[aria-label="unlike the restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDB.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    await FavoriteRestoDB.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike the restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDB.getAllRestaurants()).toEqual([]);
  });
});
