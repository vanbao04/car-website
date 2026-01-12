const modal = document.getElementById("paymentModal");

function orderAll() {
  if (cartIds.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  modal.style.display = "flex";
}

function closePayment() {
  modal.style.display = "none";
}

function confirmPayment() {
  const name = document.getElementById("buyerName").value;
  const phone = document.getElementById("buyerPhone").value;

  if (!name || !phone) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  alert(`✅ THANH TOÁN THÀNH CÔNG
Khách hàng: ${name}
SĐT: ${phone}
Xe đã đặt: ${cartIds.length}`);

  localStorage.removeItem("cart");
  location.reload();
}
