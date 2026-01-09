// =============================
// BẢO VỆ: CHỈ CHẠY Ở DETAIL PAGE
// =============================
const imageEl = document.getElementById("car-image");
if (!imageEl) {
  console.warn("Không phải trang detail → stop JS");
  throw new Error("Stop detail.js");
}

// =============================
// LẤY ID TỪ URL
// =============================
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

if (!id) {
  alert("Link không hợp lệ!");
  window.location.href = "index.html";
}

// =============================
// TÌM XE
// =============================
const car = cars.find(c => c.id === id);

if (!car) {
  alert("Không tìm thấy xe!");
  window.location.href = "index.html";
}

// =============================
// GÁN DỮ LIỆU
// =============================
imageEl.src = car.image;
document.getElementById("car-name").innerText = car.name;
document.getElementById("car-brand").innerText = "Hãng: " + car.brand;
document.getElementById("car-type").innerText = "Loại xe: " + car.type;
document.getElementById("car-price").innerText =
  "Giá: " + car.price.toLocaleString() + " VND";

document.getElementById("engine").innerText = car.engine;
document.getElementById("power").innerText = car.power;
document.getElementById("acceleration").innerText = car.acceleration;
document.getElementById("topSpeed").innerText = car.topSpeed;
document.getElementById("drivetrain").innerText = car.drivetrain;
document.getElementById("year").innerText = car.year;
document.getElementById("origin").innerText = car.origin;
document.getElementById("description").innerText = car.description;

// =============================
// TAG HOT / NEW
// =============================
const tagEl = document.getElementById("car-tag");
if (car.tag && tagEl) {
  tagEl.innerText = car.tag;
  tagEl.style.display = "inline-block";
  tagEl.className = `tag ${car.tag.toLowerCase()}`;
}

// =============================
// TAB
// =============================
function showTab(tab) {
  document.querySelectorAll(".tab-btn").forEach(btn =>
    btn.classList.remove("active")
  );
  document.querySelectorAll(".tab-content").forEach(c =>
    c.classList.remove("active")
  );

  document.getElementById(tab).classList.add("active");
  document.querySelector(`[data-tab="${tab}"]`).classList.add("active");
}

// =============================
// QUAY LẠI
// =============================
function goBack() {
  window.location.href = "index.html";
}
