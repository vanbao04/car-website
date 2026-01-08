
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const car = cars.find(c => c.id === id);

if (car) {
  document.getElementById("car-image").src = car.image;
  document.getElementById("car-name").innerText = car.name;
  document.getElementById("car-brand").innerText = "Hãng: " + car.brand;
  document.getElementById("car-price").innerText =
    "Giá: " + car.price.toLocaleString() + " VND";

  const tagEl = document.getElementById("car-tag");
  if (car.tag) {
    tagEl.innerText = car.tag;
    tagEl.style.display = "inline-block";
    tagEl.style.background = car.tag === "HOT" ? "#dc2626" : "#16a34a";
  }
}

function goBack() {
  if (document.referrer) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}
