const container = document.getElementById("car-list");
const searchInput = document.getElementById("search");

// 3️⃣ Hàm render danh sách xe
function renderCars(list) {
  if (!container) return;
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>Không tìm thấy xe nào!</p>";
    return;
  }

  list.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => {
      window.location.href = `detail.html?id=${car.id}`;
    };

    div.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Hãng: ${car.brand}</p>
      <p>Năm: ${car.year}</p>
      <p class="price">${car.price.toLocaleString()} VND</p>
    `;

    container.appendChild(div);
  });
}

// 4️⃣ Hàm lọc xe theo từ khóa
function filterCars() {
  const keyword = searchInput.value.toLowerCase();
  const filtered = cars.filter(car =>
    car.name.toLowerCase().includes(keyword) ||
    car.brand.toLowerCase().includes(keyword)
  );
  renderCars(filtered);
}

// 5️⃣ Gắn sự kiện input tìm kiếm
if (searchInput) {
  searchInput.addEventListener("input", filterCars);
}

// 6️⃣ Hiển thị danh sách xe ban đầu
renderCars(cars);
