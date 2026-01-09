const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find(c => c.id === id);

if (!car) {
  alert("Không tìm thấy xe");
  window.location.href = "index.html";
}

document.getElementById("car-image").src = car.image;
document.getElementById("car-name").innerText = car.name;
document.getElementById("car-brand").innerText = "Hãng: " + car.brand;
document.getElementById("car-year").innerText = "Năm: " + car.year;
document.getElementById("car-price").innerText = car.price.toLocaleString() + " VND";

document.getElementById("engine").innerText = car.engine;
document.getElementById("power").innerText = car.power;
document.getElementById("acceleration").innerText = car.acceleration;
document.getElementById("topSpeed").innerText = car.topSpeed;
document.getElementById("drivetrain").innerText = car.drivetrain;
document.getElementById("origin").innerText = car.origin;
document.getElementById("description").innerText = car.description;

/* GIỎ HÀNG */
function addToCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.includes(car.id)) {
    cart.push(car.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Đã thêm vào giỏ hàng");
  }
}

/* ĐẶT XE */
function orderCar() {
  const name = prompt("Tên của bạn:");
  const phone = prompt("SĐT:");

  if (!name || !phone) {
    alert("❌ Vui lòng nhập đủ thông tin");
    return;
  }

  alert(`🚗 Đặt xe thành công!
Xe: ${car.name}
Khách: ${name}
SĐT: ${phone}`);
}

function goBack() {
  window.history.back();
}
