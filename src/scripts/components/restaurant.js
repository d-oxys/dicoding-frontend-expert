/* eslint-disable max-classes-per-file */
class RestaurantCard {
  constructor(restaurant) {
    this.restaurant = restaurant;
    this.card = this.createCard();
  }

  createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('tabindex', 0);

    const img = document.createElement('img');
    img.src = `https://restaurant-api.dicoding.dev/images/medium/${this.restaurant.pictureId}`;
    img.alt = this.restaurant.name;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = this.restaurant.name;

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = this.restaurant.description.slice(0, 150) + (this.restaurant.description.length > 150 ? '...' : '');

    const cardLink = document.createElement('div');
    cardLink.classList.add('card-link');

    const cardLinkA = document.createElement('a');
    cardLinkA.href = `/#/detail.html/${this.restaurant.id}`;
    cardLinkA.textContent = 'Read more';
    cardLinkA.setAttribute('data-id', this.restaurant.id);

    cardLink.appendChild(cardLinkA);

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardLink);

    card.appendChild(img);
    card.appendChild(cardContent);

    return card;
  }
}

class RestaurantCardContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
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
        <main class="containerMain">
        <section id="explore">
            <article class="headerMain">
            <h1>Explore Restaurant</h1>
            <p>Are you ready for the rumbling flavors? Join us in our restaurant, where your taste buds will experience a rumbling sensation, <span>Our special dishes are prepared to make your taste buds rumble with delight</span>.</p>
            </article>
            <div id="card-container" class="card-grid touch-target" alt=""></div>
        </section>
        </main>
      `;
    const cardContainer = this.shadowRoot.getElementById('card-container');

    // Fetch data from API
    fetch('https://restaurant-api.dicoding.dev/list')
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          data.restaurants.forEach((item) => {
            const restaurantCard = new RestaurantCard(item);
            cardContainer.appendChild(restaurantCard.card);

            // Add event listener to the card
            const cardLink = restaurantCard.card.querySelector('[data-id]');
            if (cardLink) {
              cardLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default link behavior

                // Update restaurant-detail element
                const restaurantDetail = document.querySelector('restaurant-detail');
                if (restaurantDetail) {
                  restaurantDetail.setAttribute('data-id', item.id);

                  // Navigate to the detail page
                  window.location.href = `/#/detail.html/${item.id}`;
                } else {
                  console.error('Error: restaurant-detail element not found');
                }
              });
            } else {
              console.error('Error: No element found with data-id attribute');
            }
          });
        } else {
          console.error('Error:', data.message);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
}

customElements.define('restaurant-card-container', RestaurantCardContainer);
