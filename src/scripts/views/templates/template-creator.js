/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<style>
        /* mainStyle */
        .containerMain {
          min-height: 100vh;
          margin-top: 100vh;
          margin-left: 2.5rem;
          margin-right: 2.5rem;
        }
        
        .headerMain {
          text-align: center;
        }
        
        .headerMain h1 {
          font-weight: 600;
          font-size: 42px;
          margin-bottom: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
          color: #212529;
        }
        .headerMain p {
          font-weight: 200;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .headerMain span {
          display: block;
        }
        
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 4rem;
          justify-content: center;
        }
        
        .card {
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          max-width: 320px;
        }
        
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        
        .card-content {
          padding: 16px;
        }
        
        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #333;
        }
        
        .card-description {
          margin-top: 8px;
          color: #777;
          height: 150px;
          overflow: hidden;
        }
        
        .card-link {
          display: inline-block;
          margin-top: 16px;
          background-color: #007bff;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
        }
        
        .card-link a {
          text-decoration: none;
          color: inherit;
        }
        .card-link:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
            .card-grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
            .containerMain {
              margin-top: 95vh;
            }
          
            .headerMain {
              padding: 2px 0;
            }
          
            .headerMain h1 {
              font-size: 26px;
              margin-bottom: 8px;
              margin-top: 8px;
            }
            .headerMain p {
              font-size: 10px;
              margin-bottom: 5px;
            }
            .headerMain span {
              display: block;
            }
          }
          @media (max-width: 450px) {
            .btn {
              border-radius: 0.6rem;
              font-size: 0.6rem;
              padding: 0.5rem 1rem;
              margin-right: 0.5rem;
              margin-bottom: 0.5rem;
            }
          }
        </style>

<div class="card" tabindex="0">
<img class="resto-item_image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar ${restaurant.name}"/>
    <div class="card-content">
        <h5 class="card-title">${restaurant.name}</h5>
        <p class="card-description">${restaurant.description}</p>
        <div class="card-link">
        <a href="/#/detail/${restaurant.id}">Read more</a>
        </div>
    </div>
</div>

`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
  <div tabindex="0" class="container-info">
    <div class="img-container">
    <img class="resto-item_image-container lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar ${restaurant.name}" tabindex="0"/>
    </div>
    <ul class="detail-info">
      <li class="resto-name">
        <i title="restaurant"></i>
        <p class="detail-name-address-rating">${restaurant.name}</p>
      </li>
    
      <li class="resto-address">
      <i class="fa fa-building"></i>
        <p class="detail-name-address-rating">${restaurant.address}, ${restaurant.city}</p>
      </li>
    
      <li class="resto-rating">
        <i title="ratings"></i>
        <p class="detail-name-address-rating">&star; ${restaurant.rating}</p>
      </li>
      <h4> Description: </h4>
      <li><p class="detail-desc">${restaurant.description}</p></li>
    
      <li class="resto-category">${restaurant.categories
        .map(
          (category) => `
            <span class="category">${category.name}</span>
          `
        )
        .join('')}
      </li>
    </ul>
  </div>
        
      <h2 tabindex="0" id="resto-detail-form-review-title"><span>List Menu</span></h2>
        <div class="restaurant-detail__menu-list">
          <div class="foods">
          <h3>Food</h3>
          </hr>
            <ul class="restaurant-detail__foods">
              ${restaurant.menus.foods
                .map(
                  (food) => `
              <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`
                )
                .join('')}
            </ul>
          </div>
          <div class="drinks">
          <h3>Drink</h3>
          </hr>
            <ul class="restaurant-detail__drinks">
              ${restaurant.menus.drinks
                .map(
                  (drink) => `
              <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`
                )
                .join('')}
            </ul>
          </div>
        </div>
      <h2 tabindex="0" id="resto-detail-form-review-title"><span>Reviews</span></h2>
        <div tabindex="0" class="detail-review">
          ${restaurant.customerReviews
            .map(
              (review) => `
          <div class="detail-review-item">
            <div class="header-review">
              <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
              <p class="date-review">${review.date}</p>
            </div>
            <div class="body-review">
              ${review.review}
            </div>
          </div>
          `
            )
            .join('')}
        </div>
</div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line object-curly-newline
export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createUnlikeButtonTemplate };
