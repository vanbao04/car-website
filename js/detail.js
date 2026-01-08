const cars = [
  {
    id: 1,
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    type: "Supercar",
    price: 13500000000,
    image: "images/lamborghini.jpg",
    tag: "HOT"
  },
  {
    id: 2,
    name: "Ferrari LaFerrari",
    brand: "Ferrari",
    type: "Hypercar",
    price: 32000000000,
    image: "images/ferrari1.jpg"
  },
  {
    id: 3,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    type: "Megacar",
    price: 130000000000,
    image: "images/bugatti.jpg",
    tag: "NEW"
  },
  {
    id: 4,
    name: "Koenigsegg One:1",
    brand: "Koenigsegg",
    type: "Megacar",
    price: 78000000000,
    image: "images/koenigsegg.jpg",
    tag: "HOT"
  },
  {
    id: 5,
    name: "KIA Morning",
    brand: "KIA",
    type: "Hatchback",
    price: 380000000,
    image: "images/morning.jpg"
  }
];

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
  } else {
    tagEl.style.display = "none";
  }
}

function goBack() {
  if (document.referrer) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}
