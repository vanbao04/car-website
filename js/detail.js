const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const car = cars.find(c => c.id === id);
const tagEl = document.getElementById("car-tag");

if (!car) {
  alert("Không tìm thấy xe!");
  window.location.href = "index.html";
}

document.getElementById("car-image").src = car.image;
document.getElementById("car-name").innerText = car.name;
document.getElementById("car-brand").innerText = "Hãng: " + car.brand;
document.getElementById("car-type").innerText = "Loại xe: " + car.type;
document.getElementById("car-price").innerText =
  "Giá: " + car.price.toLocaleString() + " VND";

document.getElementById("engine").innerText = car.engine || "Đang cập nhật";
document.getElementById("power").innerText = car.power || "Đang cập nhật";
document.getElementById("acceleration").innerText = car.acceleration || "Đang cập nhật";
document.getElementById("topSpeed").innerText = car.topSpeed || "Đang cập nhật";
document.getElementById("drivetrain").innerText = car.drivetrain || "Đang cập nhật";
document.getElementById("year").innerText = car.year || "Đang cập nhật";
document.getElementById("origin").innerText = car.origin || "Đang cập nhật";
document.getElementById("description").innerText = car.description || "Thông tin chi tiết sẽ được cập nhật sau.";

if (car.tag) {
  tagEl.innerText = car.tag;
  tagEl.style.display = "inline-block";
  tagEl.style.background = car.tag === "HOT" ? "#dc2626" : "#16a34a";
}

function showTab(tab) {
  document.querySelectorAll(".tab-btn").forEach(btn =>
    btn.classList.remove("active")
  );
  document.querySelectorAll(".tab-content").forEach(c =>
    c.classList.remove("active")
  );

  document.querySelector(`button[onclick="showTab('${tab}')"]`)
    .classList.add("active");
  document.getElementById(tab).classList.add("active");
}

function goBack() {
  history.back();
}
