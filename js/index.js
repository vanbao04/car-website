const container = document.getElementById("car-list");

function renderCars(list) {
  container.innerHTML = "";
  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => location.href = `detail.html?id=${car.id}`;
    div.innerHTML = `
      <img src="${car.image}">
      <h3>${car.name}</h3>
      <p>${car.brand} • ${car.year}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;
    container.appendChild(div);
  });
}

renderCars(cars);
