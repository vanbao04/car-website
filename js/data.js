const cars = [
  {
    id: 1,
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    type: "Supercar",
    price: 13500000000,
    image: "images/lamborghini.jpg",
    tag: "HOT"
  },
  {
    id: 2,
    name: "Ferrari LaFerrari",
    brand: "Ferrari",
    type: "Hypercar",
    price: 32000000000,
    image: "images/ferrari1.jpg"
  },
  {
    id: 3,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    type: "Megacar",
    price: 130000000000,
    image: "images/bugatti.jpg",
    tag: "NEW"
  },
  {
    id: 4,
    name: "Koenigsegg One:1",
    brand: "Koenigsegg",
    type: "Megacar",
    price: 78000000000,
    image: "images/koenigsegg.jpg",
    tag: "HOT"
    
  },
  {
    id: 5,
    name: "KIA Morning",
    brand: "KIA",
    type: "Hatchback",
    price: 380000000,
    image: "images/morning.jpg"
  }
];

const carList = document.getElementById("car-list");
const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");

function renderCars(list) {
  carList.innerHTML = "";

  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-item";

    div.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Hãng: ${car.brand}</p>
      <p>Loại: ${car.type}</p>
      <p>Giá: ${car.price.toLocaleString()} VNĐ</p>
      <button onclick="viewDetail(${car.id})">Xem chi tiết</button>
    `;

    carList.appendChild(div);
  });
}

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

searchInput.addEventListener("input", filterCars);
typeFilter.addEventListener("change", filterCars);

function viewDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

renderCars(cars);
