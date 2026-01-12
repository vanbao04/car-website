function openOrder() {
  document.getElementById("orderModal").style.display = "block";
}

function closeOrder() {
  document.getElementById("orderModal").style.display = "none";
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;

  alert(
    "🎉 Đặt xe thành công!\n\n" +
    "👥Khách hàng: " + name + "\n" +
    "📱SĐT: " + phone + "\n\n" +
    "Showroom sẽ liên hệ xác nhận."
  );

  closeOrder();
  this.reset();
});
