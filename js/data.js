const cars = [
  {
    id: 1,
    name: "Toyota Camry 2023",
    brand: "Toyota",
    price: 1200000000,
    image: "images/camry.jpg"
  },
  {
    id: 2,
    name: "BMW X5",
    brand: "BMW",
    price: 3500000000,
    image: "images/bmw.jpg"
  }
];

const carList = document.getElementById("car-list");
const searchInput = document.getElementById("search");

function renderCars(list) {
  carList.innerHTML = "";
  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-item";
    div.innerHTML = `
      <img src="${car.image}">
      <h3>${car.name}</h3>
      <p>Hãng: ${car.brand}</p>
      <p>Giá: ${car.price.toLocaleString()} VND</p>
      <button onclick="viewDetail(${car.id})">Xem chi tiết</button>
    `;
    carList.appendChild(div);
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

function viewDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
