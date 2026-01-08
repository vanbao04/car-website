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

const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const container = document.getElementById("car-list");

function viewDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

function renderCars(list) {
  container.innerHTML = "";

  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => viewDetail(car.id);

    div.innerHTML = `
      <div class="tag-box">
        ${car.tag ? `<span class="tag ${car.tag.toLowerCase()}">${car.tag}</span>` : ""}
      </div>

      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Hãng: ${car.brand}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;

    container.appendChild(div);
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

renderCars(cars);
