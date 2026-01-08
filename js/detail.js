const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find(c => c.id === id);

const container = document.getElementById("car-detail");

if (!car) {
  container.innerHTML = "<p>Không tìm thấy xe</p>";
} else {
  container.innerHTML = `
    <img src="${car.image}" alt="${car.name}" style="max-width:400px">

    ${car.tag ? `<span class="tag ${car.tag.toLowerCase()}">${car.tag}</span>` : ""}

    <h2>${car.name}</h2>
    <p>Hãng: ${car.brand}</p>
    <p>Loại: ${car.type || "Đang cập nhật"}</p>
    <p>Giá: ${car.price.toLocaleString()} VND</p>

    <button onclick="history.back()">⬅ Quay lại</button>
  `;
}
