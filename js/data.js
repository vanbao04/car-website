const container = document.getElementById("car-list");

if (container) {

  const searchInput = document.getElementById("search");

  function renderCars(list) {
    container.innerHTML = "";

    list.forEach(car => {
      const div = document.createElement("div");
      div.className = "car-card";
      div.onclick = () => {
        window.location.href = `detail.html?id=${car.id}`;
      };

      div.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>Hãng: ${car.brand}</p>
        <p>Năm: ${car.year}</p>
        <p class="price">${car.price.toLocaleString()} VND</p>
      `;

      container.appendChild(div);
    });
  }

  function filterCars() {
    const keyword = searchInput.value.toLowerCase();
    const filtered = cars.filter(car =>
      car.name.toLowerCase().includes(keyword) ||
      car.brand.toLowerCase().includes(keyword)
    );
    renderCars(filtered);
  }

  searchInput.addEventListener("input", filterCars);

  // LOAD BAN ĐẦU
  renderCars(cars);
}
