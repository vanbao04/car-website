
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// KIỂM TRA DỮ LIỆU
if (typeof cars === "undefined") {
  alert("Không tải được dữ liệu xe!");
  window.location.href = "index.html";
}

// TÌM XE
const car = cars.find(c => c.id === id);

if (!car) {
  alert("Không tìm thấy xe!");
  window.location.href = "index.html";
}

// HÀM GÁN TEXT AN TOÀN
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerText = value || "Đang cập nhật";
}

// HÀM GÁN ẢNH AN TOÀN
function setImage(id, src) {
  const el = document.getElementById(id);
  if (el) el.src = src;
}

// THÔNG TIN CHÍNH
setImage("car-image", car.image);
setText("car-name", car.name);
setText("car-brand", "Hãng: " + car.brand);
setText("car-type", "Loại xe: " + car.type);
setText("car-price", "Giá: " + car.price.toLocaleString() + " VND");
setText("description", car.description);

// TAG HOT / NEW
const tagEl = document.getElementById("car-tag");
if (tagEl && car.tag) {
  tagEl.innerText = car.tag;
  tagEl.style.display = "inline-block";
  tagEl.classList.add(car.tag.toLowerCase());
}

// THÔNG SỐ KỸ THUẬT
setText("engine", car.engine);
setText("power", car.power);
setText("acceleration", car.acceleration);
setText("topSpeed", car.topSpeed);
setText("drivetrain", car.drivetrain);
setText("year", car.year);
setText("origin", car.origin);

// TAB
function showTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn =>
    btn.classList.remove("active")
  );

  document.querySelectorAll(".tab-content").forEach(tab =>
    tab.classList.remove("active")
  );

  document.getElementById(tabId)?.classList.add("active");
  document.querySelector(`[data-tab="${tabId}"]`)?.classList.add("active");
}

window.showTab = showTab;

// QUAY LẠI
function goBack() {
  if (document.referrer) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}

window.goBack = goBack;
