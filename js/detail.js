const imageEl = document.getElementById("car-image");
if (!imageEl) {
  throw new Error("Không phải detail page");
}

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find(c => c.id === id);
if (!car) {
  alert("Không tìm thấy xe");
  window.location.href = "index.html";
}

/* GÁN DỮ LIỆU */
imageEl.src = car.image;
document.getElementById("car-name").innerText = car.name;
document.getElementById("car-brand").innerText = "Hãng: " + car.brand;
document.getElementById("car-type").innerText = "Loại: " + car.type;
document.getElementById("car-price").innerText =
  car.price.toLocaleString() + " VND";

document.getElementById("engine").innerText = car.engine || "—";
document.getElementById("power").innerText = car.power || "—";
document.getElementById("acceleration").innerText = car.acceleration || "—";
document.getElementById("topSpeed").innerText = car.topSpeed || "—";
document.getElementById("drivetrain").innerText = car.drivetrain || "—";
document.getElementById("year").innerText = car.year || "—";
document.getElementById("origin").innerText = car.origin || "—";
document.getElementById("description").innerText = car.description || "";

/* TAG */
const tagEl = document.getElementById("car-tag");
if (car.tag) {
  tagEl.innerText = car.tag;
  tagEl.classList.add(car.tag.toLowerCase());
  tagEl.style.display = "inline-block";
}

function goBack() {
  window.location.href = "index.html";
}
