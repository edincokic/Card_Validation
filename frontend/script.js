// @ts-nocheck

function validateCreditCard() {
  var cardNumber = document.getElementById("cardNumber").value;
  var expirationDate = document.getElementById("expirationDate").value;
  var cvv = document.getElementById("cvv").value;

  var isValidCardNumber = validateCardNumber(cardNumber);
  var isValidExpirationDate = validateExpirationDate(expirationDate);
  var isValidCVV = validateCVV(cvv, cardNumber);

  if (isValidCardNumber && isValidExpirationDate && isValidCVV) {
    showSuccessMessage();
  } else {
    showErrorMessage();
  }
}

function validateCardNumber(cardNumber) {
  var cardNumberLength = cardNumber.length;
  if (cardNumberLength >= 16 && cardNumberLength <= 19) {
    return true;
  }
  return false;
}

function validateExpirationDate(expirationDate) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear() % 100;
  var currentMonth = currentDate.getMonth() + 1;

  var parts = expirationDate.split("/");
  var year = parseInt(parts[1], 10);
  var month = parseInt(parts[0], 10);

  if (year > currentYear) {
    return true;
  } else if (year === currentYear && month >= currentMonth) {
    return true;
  }

  return false;
}

function validateCVV(cvv, cardNumber) {
  var cvvLength = cvv.length;
  var firstTwoDigits = cardNumber.substring(0, 2);

  if (firstTwoDigits === "34" || firstTwoDigits === "37") {
    return cvvLength === 4;
  } else {
    return cvvLength === 3;
  }
}

function showSuccessMessage() {
  var messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = "<p>Credit card information is valid.</p>";
  messageContainer.className = "success-message";
}

function showErrorMessage() {
  var messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML =
    "<p>Credit card information is not valid. Please check your card details and try again.</p>";
  messageContainer.className = "error-message";
}
