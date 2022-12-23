/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import SweetAlert from './swal-initiator';
import RestaurantSource from '../data/restaurant-source';
import { createReviewerListTemplate } from '../views/templates/template-creator';

const ReviewInitiator = {
  async init({ id, container, form }) {
    this.id = id;
    this.container = container;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      this._dataBehavior({
        name: data.get('nameReviewer'),
        review: data.get('textReview'),
      });
      form.childNodes[7].value = '';
      form.childNodes[3].value = '';
    });
  },

  async _dataBehavior({ name, review }) {
    name && review ? this._addReview(name, review) : this._sendMessage();
  },

  async _addReview(name, review) {
    try {
      const newCustomerReviewsData = await RestaurantSource.addCostumerReview(this.id, name, review);
      SweetAlert.success('review berhasil di tambahkan');
      this._renderNewDataCustomerReviews(newCustomerReviewsData);
    } catch (err) {
      SweetAlert.disconnect('review gagal di tambahkan, cek kembali koneksi anda');
    }
  },

  _sendMessage() {
    SweetAlert.error('form belum lengkap');
  },

  _renderNewDataCustomerReviews(newCustomerReviewsData) {
    this.container.innerHTML = '';
    newCustomerReviewsData.forEach((reviewData) => {
      this.container.innerHTML += createReviewerListTemplate(reviewData);
    });
  },
};

export default ReviewInitiator;
