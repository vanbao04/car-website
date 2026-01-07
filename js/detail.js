const cars = [
  {
    id: 1,
    name: "Toyota Camry 2023",
    price: 1200000000,
    brand: "Toyota",
    image: "./images/camry.jpg",
    description: "Sedan hạng D, tiết kiệm nhiên liệu, phù hợp gia đình."
  },
  {
    id: 2,
    name: "BMW X5",
    price: 3500000000,
    brand: "BMW",
    image: "./images/bmw.jpg",
    description: "SUV hạng sang, động cơ mạnh mẽ, nội thất cao cấp."
  }
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find(c => c.id === id);
const container = document.getElementById("car-detail");

if (car) {
  container.innerHTML = `
    <div class="car-item">
      <img src="${car.image}">
      <h2>${car.name}</h2>
      <p>Hãng: ${car.brand}</p>
      <p>Giá: ${car.price.toLocaleString()} VNĐ</p>
      <p>${car.description}</p>
    </div>
  `;
} else {
  container.innerHTML = "<p>Không tìm thấy xe</p>";
}
