const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find(c => c.id === id);

if (!car) {
  document.body.innerHTML = "<h2>Xe không tồn tại</h2>";
}

document.getElementById("car-image").src = car.image;
document.getElementById("car-name").innerText = car.name;
document.getElementById("car-brand").innerText = "Hãng: " + car.brand;
document.getElementById("car-price").innerText =
  "Giá: " + car.price.toLocaleString() + " VND";

if (car.tag) {
  document.getElementById("car-tag").innerText = car.tag;
}

function goBack() {
  window.history.back();
}
