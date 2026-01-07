const cars = [
  {
    id: 1,
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    type: "Supercar",
    price: 13500000000,
    image: "images/lamborghini.jpg",
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
    tag: "HOT"
  },
  {
    id: 4,
    name: "Koenigsegg One:1",
    brand: "Koenigsegg",
    type: "Megacar",
    price: 78000000000,
    image: "images/koenigsegg.jpg"
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

function renderCars(list) {
  carList.innerHTML = "";

  if (list.length === 0) {
    carList.innerHTML = "<p>❌ Không tìm thấy xe phù hợp</p>";
    return;
  }

  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-item";
    div.innerHTML = `
      <div class="tag">${car.tag || ""}</div>
      <img src="${car.image}">
      <p>Hãng: ${car.brand}</p>
      <p>Giá: ${formatPrice(car.price)}</p>
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

function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " VND";
}
