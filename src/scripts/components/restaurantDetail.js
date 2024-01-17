// Ambil id restoran dari URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Ambil detail restoran dari API
fetch(`https://restaurant-api.dicoding.dev/detail/${id}`)
  .then((response) => response.json())
  .then((data) => {
    // Tampilkan detail restoran di halaman
    document.getElementById('restaurant-name').textContent = data.restaurant.name;
    document.getElementById('restaurant-description').textContent = data.restaurant.description;
    // Lakukan hal yang sama untuk elemen lainnya
  })
  .catch((error) => console.error('Error:', error));
