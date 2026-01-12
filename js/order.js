function orderCar() {
  const name = prompt("Nhập họ tên:");
  const phone = prompt("Nhập số điện thoại:");

  if (!name || !phone) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  alert(
    "Đặt xe thành công!\n" +
    "Khách hàng: " + name + "\n" +
    "SĐT: " + phone + "\n" +
    "Showroom sẽ liên hệ sớm."
  );
}
