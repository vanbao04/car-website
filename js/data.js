const cars = [
  {
    id: 1,
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    type: "Supercar",
    price: 13500000000,
    image: "images/lamborghini.jpg",
    tag: "HOT",

    engine: "V12 6.5L",
    power: "770 HP",
    acceleration: "2.8s (0-100 km/h)",
    topSpeed: "350 km/h",
    drivetrain: "AWD",
    year: 2023,
    origin: "Italy",
    description: "Siêu xe V12 mạnh mẽ, giới hạn sản xuất, dành cho giới thượng lưu."
  },
  
  {
    id: 2,
    name: "Ferrari LaFerrari",
    brand: "Ferrari",
    type: "Hypercar",
    price: 32000000000,
    image: "images/ferrari1.jpg",

    engine: "V12 Hybrid",
    power: "963 HP",
    acceleration: "2.6s (0-100 km/h)",
    topSpeed: ">350 km/h",
    drivetrain: "RWD",
    year: 2022,
    origin: "Italy",
    description: "Hypercar hybrid biểu tượng của Ferrari, kết hợp sức mạnh và công nghệ tương lai."
  },
  
  {
    id: 3,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    type: "Megacar",
    price: 130000000000,
    image: "images/bugatti.jpg",
    tag: "NEW",

    engine: "W16 Quad-Turbo",
    power: "1500 HP",
    acceleration: "2.4s (0-100 km/h)",
    topSpeed: "420 km/h",
    drivetrain: "AWD",
    year: 2023,
    origin: "France",
    description: "Megacar nhanh nhất thế giới, đỉnh cao kỹ thuật và hiệu suất."
  },
  
  {
    id: 4,
    name: "Koenigsegg One:1",
    brand: "Koenigsegg",
    type: "Megacar",
    price: 78000000000,
    image: "images/koenigsegg.jpg",
    tag: "HOT",
    
    engine: "V8 Twin-Turbo",
    power: "1341 HP",
    acceleration: "2.5s (0-100 km/h)",
    topSpeed: ">400 km/h",
    drivetrain: "RWD",
    year: 2022,
    origin: "Sweden",
    description: "Siêu xe với tỷ lệ 1 mã lực trên 1 kg – cỗ máy tốc độ thuần túy."
  },
  {
    id: 5,
    name: "KIA Morning",
    brand: "KIA",
    type: "Hatchback",
    price: 380000000,
    image: "images/morning.jpg",

    engine: "1.0L",
    power: "67 HP",
    acceleration: "14s (0-100 km/h)",
    topSpeed: "150 km/h",
    drivetrain: "FWD",
    year: 2023,
    origin: "Korea",
    description: "Xe đô thị nhỏ gọn, tiết kiệm nhiên liệu, phù hợp đi lại hàng ngày."
  }
];

const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const container = document.getElementById("car-list");

/* Render danh sách xe */
function renderCars(list) {
  container.innerHTML = "";

  list.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.onclick = () => viewDetail(car.id);

    card.innerHTML = `
      ${car.tag ? `<span class="tag ${car.tag.toLowerCase()}">${car.tag}</span>` : ""}
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Hãng: ${car.brand}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;

    container.appendChild(card);
  });
}

/* Search + Filter */
function filterCars() {
  const keyword = searchInput.value.toLowerCase();
  const type = typeFilter.value;

  const filtered = cars.filter(car => {
    const matchName = car.name.toLowerCase().includes(keyword);
    const matchType = type === "" || car.type === type;
    return matchName && matchType;
  });

  renderCars(filtered);
}

if (searchInput && typeFilter) {
  searchInput.addEventListener("input", filterCars);
  typeFilter.addEventListener("change", filterCars);
}

/* Xem chi tiết */
function viewDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

/* Dark mode */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* Load ban đầu */
renderCars(cars);
