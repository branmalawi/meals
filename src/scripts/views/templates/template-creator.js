import CONFIG from '../../globals/config';

const createCatalogueRestoItemTemplate = (resto) => `
  <div class="catalogue__list-item">
    <div class="catalogue__item-image">
      <img data-src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" alt="${resto.name}" class="lazyload" tabindex="0" width="100%" height="auto">
      <p class="rate">${resto.rating} <span style="color: gold;">★</span></p>
    </div>
    <div class="catalogue__item-data">
      <h3 tabindex="0" >${resto.name}</h3>
      <p tabindex="0" ><span>◉</span> ${resto.city}</p>
      <a href="/#/detail/${resto.id}" aria-label="check detail restaurant"><img src="./assets/icons/detail.svg" alt="detail resto" width="100%" height="100%"/></a>
    </div>
  </div>`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail__image">
    <picture>
        <source media="(max-width: 400px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" class="lazyload">
        <img data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name}" class="lazyload" tabindex="0">
      </picture>
    <p class="detail__rating" tabindex="0" >${resto.rating} <span style="color: gold;">★</span></p>
  </div>
  <div class="detail__data">
    <h1 tabindex="0" >${resto.name}</h1>
    <p tabindex="0" ><span>◉</span> ${resto.address}, ${resto.city}</p>
    <div id="likeButtonContainer"></div>
    <div class="categories"></div>
  </div>
  <div class="detail__deskription"><p tabindex="0" >${resto.description}</p></div>
`;

const createCategoriesTemplate = (category) => `<span>${category.name}</span>`;

const createListMenuTemplate = (menu) => `
  <div class="menu__list-item">
    <div class="menu__image">
      <picture>
        <source data-srcset="${menu.source_webp}" type="image/webp" class="lazyload">
        <img data-src="${menu.source_jpg}" alt="${menu.name}" class="lazyload">
      </picture> 
    </div>
    <div class="menu__data">
      <p tabindex="0" >${menu.name}</p>
      <p class="menu__rating" tabindex="0">${menu.rate} <i class="fa-solid fa-star"></i></p>
      <p tabindex="0" >${menu.price}</p>
      <p tabindex="0" >${menu.description}</p>
    </div>
  </div>
`;

const createReviewerListTemplate = (reviewData) => `
  <div class="review__list-item">
    <img src="./assets/backgrounds/reviewer.svg" alt="${reviewData.name}" loading="lazy"/>
    <div>
      <p tabindex="0">${reviewData.name}</p>
      <p tabindex="0">${reviewData.review}</p>
    </div>
    <p tabindex="0" >${reviewData.date}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like the restaurant" id="likeButton"></button> 
`;
const createLikedButtonTemplate = () => `
<button aria-label="unlike the restaurant" id="likeButton"></button> 
`;

export {
  createCatalogueRestoItemTemplate,
  createRestoDetailTemplate,
  createCategoriesTemplate,
  createListMenuTemplate,
  createReviewerListTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
