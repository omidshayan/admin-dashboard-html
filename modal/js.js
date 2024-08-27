function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}
function selectPayment(paymentType) {
  var receiptButton = document.getElementById("receiptButton");
  var withdrawalButton = document.getElementById("withdrawalButton");

  if (paymentType === "receipt") {
    receiptButton.classList.add("selected", "receipt");
    withdrawalButton.classList.remove("selected", "withdrawal");
  } else if (paymentType === "withdrawal") {
    receiptButton.classList.remove("selected", "receipt");
    withdrawalButton.classList.add("selected", "withdrawal");
  }
}