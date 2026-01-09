const container = document.getElementById("car-list");
const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const darkBtn = document.getElementById("darkModeBtn");

function renderCars(list) {
  if (!container) return;

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>Không tìm thấy xe phù hợp</p>";
    return;
  }

  list.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      ${car.tag ? `<span class="tag ${car.tag.toLowerCase()}">${car.tag}</span>` : ""}
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Hãng: ${car.brand}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;

    card.addEventListener("click", () => {
      window.location.href = `detail.html?id=${car.id}`;
    });

    container.appendChild(card);
  });
}

function filterCars() {
  const keyword = searchInput ? searchInput.value.toLowerCase() : "";
  const type = typeFilter ? typeFilter.value : "";

  const filtered = cars.filter(car => {
    const matchName = car.name.toLowerCase().includes(keyword);
    const matchType = type === "" || car.type === type;
    return matchName && matchType;
  });

  renderCars(filtered);
}

if (searchInput) {
  searchInput.addEventListener("input", filterCars);
}

if (typeFilter) {
  typeFilter.addEventListener("change", filterCars);
}

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

if (typeof cars !== "undefined") {
  renderCars(cars);
}
