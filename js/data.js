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

const container = document.getElementById("car-list");
if (!container) {
  console.log("data.js: không phải index page → bỏ qua render");
} else {

const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");

/* ======================
   RENDER XE
====================== */
function renderCars(list) {
  container.innerHTML = "";

  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => {
      window.location.href = `detail.html?id=${car.id}`;
    };

    div.innerHTML = `
      ${car.tag ? `<span class="tag ${car.tag.toLowerCase()}">${car.tag}</span>` : ""}
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Hãng: ${car.brand}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;

    container.appendChild(div);
  });
}

/* ======================
   SEARCH + FILTER
====================== */
function filterCars() {
  const keyword = searchInput.value.toLowerCase();
  const type = typeFilter.value;

  const filtered = cars.filter(car =>
    car.name.toLowerCase().includes(keyword) &&
    (type === "" || car.type === type)
  );

  renderCars(filtered);
}

searchInput.addEventListener("input", filterCars);
typeFilter.addEventListener("change", filterCars);

/* ======================
   LOAD BAN ĐẦU
====================== */
renderCars(cars);
}
