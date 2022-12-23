/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async menuResto() {
    const response = await fetch('./data/menus-data.json');
    return response.json();
  }

  static async addCostumerReview(id, name, review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantSource;
