/* eslint-disable no-undef */
const assert = require('assert');

Feature('Adding User Review');

Scenario('adding user review to review list restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.catalogue__list-item', 2);
  I.click(locate('.catalogue__list-item a').first());

  I.seeElement('#addReview');

  const nameReviewer = 'haikal';
  const textReview = 'cocok untuk nongkrong';

  I.fillField('#nameReviewer', nameReviewer);
  I.fillField('#textReview', textReview);
  I.click('[type="submit"]');

  I.wait(1);

  I.seeElement('.review__list-item');
  const nameReviewerAdded = await I.grabTextFrom('.review__list-item:last-child p:first-child');
  const textReviewAdded = await I.grabTextFrom('.review__list-item:last-child p:last-child');

  assert.strictEqual(nameReviewer, nameReviewerAdded);
  assert.strictEqual(textReview, textReviewAdded);
});
