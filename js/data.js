const cars = [
  {
    id: 1,
    name: "Toyota Camry 2023",
    price: 1200000000,
    brand: "Toyota",
    image: "images/camry.jpg"
  },
  {
    id: 2,
    name: "BMW X5",
    price: 3500000000,
    brand: "BMW",
    image: "images/bmw.jpg"
  }
];

const carList = document.getElementById("car-list");

cars.forEach(car => {
  const div = document.createElement("div");
  div.className = "car-item";

  div.innerHTML = `
    <img src="${car.image}" alt="${car.name}">
    <h3>${car.name}</h3>
    <p>Hãng: ${car.brand}</p>
    <p>Giá: ${car.price.toLocaleString()} VND</p>
    <button onclick="viewDetail(${car.id})">Xem chi tiết</button>
  `;

  carList.appendChild(div);
});

function viewDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}
