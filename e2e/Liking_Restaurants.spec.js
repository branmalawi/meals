/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.catalogue');
  I.see('Oops.. Empty favorite restaurant', '.catalogue__nodata h1');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Oops.. Empty favorite restaurant', '.catalogue__nodata h1');
  I.amOnPage('/');

  I.seeElement('.catalogue__list-item');
  const firstRestaurantBtnDetail = await locate('.catalogue__list-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(locate('.catalogue__list-item h3').first());
  I.click(firstRestaurantBtnDetail);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalogue__item-data');

  const likedRestaurantTitle = await I.grabTextFrom('.catalogue__list-item h3');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.catalogue__list-item');
  I.click('.catalogue__list-item a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.catalogue__item-data');
});
