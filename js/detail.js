document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // LẤY ID TỪ URL
  // =========================
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  if (!id || typeof cars === "undefined") {
    alert("Dữ liệu không hợp lệ");
    window.location.href = "index.html";
    return;
  }

  const car = cars.find(c => c.id === id);

  if (!car) {
    alert("Không tìm thấy xe!");
    window.location.href = "index.html";
    return;
  }

  // =========================
  // HÀM SET TEXT AN TOÀN
  // =========================
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
  }

  // =========================
  // HIỂN THỊ THÔNG TIN CHÍNH
  // =========================
  const imgEl = document.getElementById("car-image");
  if (imgEl) imgEl.src = car.image;

  setText("car-name", car.name);
  setText("car-brand", "Hãng: " + car.brand);
  setText("car-type", "Loại xe: " + car.type);
  setText("car-price", "Giá: " + car.price.toLocaleString() + " VND");

  // =========================
  // THÔNG SỐ KỸ THUẬT
  // =========================
  setText("engine", car.engine || "Đang cập nhật");
  setText("power", car.power || "Đang cập nhật");
  setText("acceleration", car.acceleration || "Đang cập nhật");
  setText("topSpeed", car.topSpeed || "Đang cập nhật");
  setText("drivetrain", car.drivetrain || "Đang cập nhật");
  setText("year", car.year || "Đang cập nhật");
  setText("origin", car.origin || "Đang cập nhật");

  // =========================
  // MÔ TẢ
  // =========================
  setText(
    "description",
    car.description || "Thông tin chi tiết sẽ được cập nhật sau."
  );

  // =========================
  // TAG HOT / NEW
  // =========================
  const tagEl = document.getElementById("car-tag");
  if (tagEl && car.tag) {
    tagEl.innerText = car.tag;
    tagEl.style.display = "inline-block";
    tagEl.style.background =
      car.tag === "HOT" ? "#dc2626" : "#16a34a";
  }

});

// =========================
// TAB FUNCTION (GLOBAL)
// =========================
function showTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn =>
    btn.classList.remove("active")
  );
  document.querySelectorAll(".tab-content").forEach(tab =>
    tab.classList.remove("active")
  );

  const activeBtn = document.querySelector(
    `.tab-btn[data-tab="${tabId}"]`
  );
  const activeTab = document.getElementById(tabId);

  if (activeBtn) activeBtn.classList.add("active");
  if (activeTab) activeTab.classList.add("active");
}

// =========================
// QUAY LẠI
// =========================
function goBack() {
  window.history.back();
}
