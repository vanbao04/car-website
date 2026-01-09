const container = document.getElementById("car-list");
const searchInput = document.getElementById("search");

function renderCars(list) {
  container.innerHTML = "";

  list.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.onclick = () => {
      location.href = `detail.html?id=${car.id}`;
    };

    card.innerHTML = `
      <img src="${car.image}">
      <h3>${car.name}</h3>
      <p>${car.brand}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;

    container.appendChild(card);
  });
}

renderCars(cars);

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = cars.filter(car =>
    car.name.toLowerCase().includes(keyword)
  );
  renderCars(filtered);
});
