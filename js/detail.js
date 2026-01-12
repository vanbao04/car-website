const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find(c => c.id === id);

if (!car) {
  alert("Không tìm thấy xe");
  window.location.href = "index.html";
}

document.getElementById("car-image").src = car.image;
document.getElementById("car-name").innerText = car.name;
document.getElementById("car-price").innerText =
  car.price.toLocaleString() + " VND";
document.getElementById("car-desc").innerText = car.description;

document.getElementById("engine").innerText = car.engine;
document.getElementById("power").innerText = car.power;
document.getElementById("acceleration").innerText = car.acceleration;
document.getElementById("topSpeed").innerText = car.topSpeed;

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(car.id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm xe vào giỏ hàng");
}
