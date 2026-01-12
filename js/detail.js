document.addEventListener("DOMContentLoaded", () => {
  const id = Number(new URLSearchParams(location.search).get("id"));
  const car = cars.find(c => c.id === id);
  if (!car) return alert("Không tìm thấy xe");

  document.getElementById("car-image").src = car.image;
  document.getElementById("car-name").innerText = car.name;
  document.getElementById("car-brand").innerText = car.brand;
  document.getElementById("car-year").innerText = car.year;
  document.getElementById("car-price").innerText = car.price.toLocaleString()+" VND";
  engine.innerText = car.engine;
  power.innerText = car.power;
  acceleration.innerText = car.acceleration;
  topSpeed.innerText = car.topSpeed;
  drivetrain.innerText = car.drivetrain;
  origin.innerText = car.origin;
  description.innerText = car.description;

  window.addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(car);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng");
  };

  window.orderCar = () => {
    alert("Đặt xe thành công! Nhân viên sẽ liên hệ.");
  };
});
