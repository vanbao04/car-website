document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  if (!window.cars) {
    alert("Không load được dữ liệu xe (cars.js)");
    return;
  }

  const car = cars.find(c => c.id === id);

  if (!car) {
    alert("Không tìm thấy xe");
    window.location.href = "index.html";
    return;
  }

  // ===== GÁN DỮ LIỆU (100% KHỚP ID HTML) =====
  document.getElementById("car-image").src = car.image;
  document.getElementById("car-name").innerText = car.name;
  document.getElementById("car-brand").innerText = "Hãng: " + car.brand;
  document.getElementById("car-year").innerText = "Năm: " + car.year;
  document.getElementById("car-price").innerText =
    car.price.toLocaleString() + " VND";

  document.getElementById("engine").innerText = car.engine;
  document.getElementById("power").innerText = car.power;
  document.getElementById("acceleration").innerText = car.acceleration;
  document.getElementById("topSpeed").innerText = car.topSpeed;
  document.getElementById("drivetrain").innerText = car.drivetrain;
  document.getElementById("origin").innerText = car.origin;
  document.getElementById("description").innerText = car.description;
});

function goBack() {
  history.back();
}

function addToCart() {
  alert("🛒 Xe đã được thêm vào giỏ hàng (giả lập)");
}

function orderCar() {
  alert("📋 Đặt xe thành công!\nNhân viên showroom sẽ liên hệ với bạn.");
}
