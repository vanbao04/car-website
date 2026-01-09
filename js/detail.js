const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));

const car = cars.find(c => c.id === id);

if (!car) {
  alert("Không tìm thấy xe");
  location.href = "index.html";
}

document.getElementById("car-image").src = car.image;
document.getElementById("car-name").innerText = car.name;
document.getElementById("car-brand").innerText = car.brand;
document.getElementById("car-price").innerText =
  car.price.toLocaleString() + " VND";

document.getElementById("engine").innerText = car.engine;
document.getElementById("power").innerText = car.power;
document.getElementById("acceleration").innerText = car.acceleration;
document.getElementById("topSpeed").innerText = car.topSpeed;
document.getElementById("drivetrain").innerText = car.drivetrain;
document.getElementById("year").innerText = car.year;
document.getElementById("origin").innerText = car.origin;
document.getElementById("description").innerText = car.description;
