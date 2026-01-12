const cartDiv = document.getElementById("cart");
const cart = JSON.parse(localStorage.getItem("cart") || "[]");

cart.forEach(c => {
  cartDiv.innerHTML += `<p>${c.name} - ${c.price.toLocaleString()} VND</p>`;
});

function checkout() {
  alert("Thanh toán thành công!");
  localStorage.removeItem("cart");
  location.href = "index.html";
}
