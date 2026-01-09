const container = document.getElementById("car-list");
const search = document.getElementById("search");
const brandFilter = document.getElementById("brandFilter");
const yearFilter = document.getElementById("yearFilter");

function renderCars(list) {
  container.innerHTML = "";
  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => {
      window.location.href = `detail.html?id=${car.id}`;
    };
    div.innerHTML = `
      <img src="${car.image}">
      <h3>${car.name}</h3>
      <p>${car.brand} • ${car.year}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;
    container.appendChild(div);
  });
}

function filterCars() {
  const k = search.value.toLowerCase();
  const b = brandFilter.value;
  const y = yearFilter.value;

  const filtered = cars.filter(c =>
    c.name.toLowerCase().includes(k) &&
    (b === "" || c.brand === b) &&
    (y === "" || c.year == y)
  );

  renderCars(filtered);
}

search.addEventListener("input", filterCars);
brandFilter.addEventListener("change", filterCars);
yearFilter.addEventListener("change", filterCars);

renderCars(cars);
