const cars = [
  {
    id: 1,
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    year: 2023,
    price: 13500000000,
    image: "images/lamborghini.jpg",
    engine: "V12 6.5L",
    power: "770 HP",
    acceleration: "2.8s",
    topSpeed: "350 km/h",
    drivetrain: "AWD",
    origin: "Italy",
    description: "Siêu xe V12 mạnh mẽ, giới hạn sản xuất."
  },
  {
    id: 2,
    name: "Ferrari LaFerrari",
    brand: "Ferrari",
    year: 2022,
    price: 32000000000,
    image: "images/ferrari1.jpg",
    engine: "V12 Hybrid",
    power: "963 HP",
    acceleration: "2.6s",
    topSpeed: ">350 km/h",
    drivetrain: "RWD",
    origin: "Italy",
    description: "Biểu tượng hypercar hybrid của Ferrari."
  },
  {
    id: 3,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    year: 2023,
    price: 130000000000,
    image: "images/bugatti.jpg",
    engine: "W16 Quad Turbo",
    power: "1500 HP",
    acceleration: "2.4s",
    topSpeed: "420 km/h",
    drivetrain: "AWD",
    origin: "France",
    description: "Megacar nhanh nhất thế giới."
  },
  {
    id: 4,
    name: "Koenigsegg One:1",
    brand: "Koenigsegg",
    year: 2022,
    price: 78000000000,
    image: "images/koenigsegg.jpg",
    engine: "V8 Twin Turbo",
    power: "1341 HP",
    acceleration: "2.5s",
    topSpeed: ">400 km/h",
    drivetrain: "RWD",
    origin: "Sweden",
    description: "1 mã lực / 1 kg – cỗ máy tốc độ."
  },
  {
    id: 5,
    name: "KIA Morning",
    brand: "KIA",
    year: 2023,
    price: 380000000,
    image: "images/morning.jpg",
    engine: "1.0L",
    power: "67 HP",
    acceleration: "14s",
    topSpeed: "150 km/h",
    drivetrain: "FWD",
    origin: "Korea",
    description: "Xe đô thị tiết kiệm nhiên liệu."
  }
];

const list = document.getElementById("car-list");

function renderCars(data) {
  if (!list) return;

  list.innerHTML = "";
  data.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.innerHTML = `
      <img src="${car.image}">
      <h3>${car.name}</h3>
      <p>${car.brand} • ${car.year}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;
    div.onclick = () => {
      window.location.href = `detail.html?id=${car.id}`;
    };
    list.appendChild(div);
  });
}

renderCars(cars);

/* FILTER */
document.addEventListener("input", () => {
  const name = document.getElementById("searchName").value.toLowerCase();
  const brand = document.getElementById("filterBrand").value;
  const year = document.getElementById("filterYear").value;

  const filtered = cars.filter(c =>
    c.name.toLowerCase().includes(name) &&
    (brand === "" || c.brand === brand) &&
    (year === "" || c.year == year)
  );

  renderCars(filtered);
});
