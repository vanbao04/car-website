document.addEventListener("DOMContentLoaded", () => {

  // Lấy ID từ URL
  const params = new URLSearchParams(window.location.search);
  const carId = parseInt(params.get("id"));

  // Tìm xe
  const car = cars.find(c => c.id === carId);

  if (!car) {
    alert("Không tìm thấy xe!");
    return;
  }

  // Gán dữ liệu
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

/* ====== CÁC HÀM BUTTON ====== */

function addToCart() {
  alert("🛒 Đã thêm xe vào giỏ hàng (giả lập)");
}

function orderCar() {
  alert("📋 Đặt xe thành công! Nhân viên sẽ liên hệ bạn.");
}

function goBack() {
  window.history.back();
}
