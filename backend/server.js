const express = require("express");
const app = express();
const path = require("path");

// Serve the static files from the frontend folder
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Route to handle the validation request
app.post("/api/validate", (req, res) => {
  // Get the credit card information from the request body
  const { cardNumber, expirationDate, cvv } = req.body;

  // Perform the credit card validation
  const isValid = validateCreditCard(cardNumber, expirationDate, cvv);

  if (isValid) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

// Helper function to validate the credit card
function validateCreditCard(cardNumber, expirationDate, cvv) {
  // Implement your credit card validation logic here
  // Return true if the card is valid, false otherwise

  // Example validation logic:
  const cardNumberLength = cardNumber.length;
  const cvvLength = cvv.length;
  const firstTwoDigits = cardNumber.substring(0, 2);

  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (
    cardNumberLength >= 16 &&
    cardNumberLength <= 19 &&
    expirationDateIsValid(expirationDate, currentYear, currentMonth) &&
    cvvIsValid(cvv, firstTwoDigits)
  ) {
    return true;
  }

  return false;
}

// Helper function to validate the expiration date
function expirationDateIsValid(expirationDate, currentYear, currentMonth) {
  const parts = expirationDate.split("/");
  const year = parseInt(parts[1], 10);
  const month = parseInt(parts[0], 10);

  if (year > currentYear) {
    return true;
  } else if (year === currentYear && month >= currentMonth) {
    return true;
  }

  return false;
}

// Helper function to validate the CVV
function cvvIsValid(cvv, firstTwoDigits) {
  const cvvLength = cvv.length;

  if (firstTwoDigits === "34" || firstTwoDigits === "37") {
    return cvvLength === 4;
  } else {
    return cvvLength === 3;
  }
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
