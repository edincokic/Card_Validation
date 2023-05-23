# Validation
# Card Validation System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)

## Introduction
Welcome to the Card Validation System!. You can verify card numbers, expiration dates, and CVV codes to ensure the accuracy of the entered information.

## Features
-Validate that expiry date of the credit card (year and month) must be AFTER present time

-Validate that CVV (security code) of the credit card must be exactly 3 digits long
	-Unless it’s an American Express card, in which case the CVV must be exactly 4 digits long
	-American Express are cards whose PAN (card numbers) starts with either “34” or “37”

-Validate that PAN (card number) is between 16 and 19 digits long

## Installation
Before getting started, please make sure you have the following prerequisites installed:
- Node.js
- Git

### Frontend
1. Open the `frontend` folder in your preferred code editor.
2. Edit the `index.html` file to customize the webpage if needed.
3. Open a command prompt or terminal in the `frontend` folder.
4. Run the following command to install the necessary dependencies:
npm install
5. After the dependencies are installed, start the development server with the following command:
npm start
6. The Card Validation System will now be accessible at `http://localhost:3000`.

### Backend
1. Open the `backend` folder in your preferred code editor.
2. Edit the `server.js` file to modify the backend functionality if needed.
3. Open a new command prompt or terminal in the `backend` folder.
4. Run the following command to install the necessary dependencies:
npm install
5. After the dependencies are installed, start the backend server with the following command:
node server.js
6. The backend server will start running on `http://localhost:8080`.

## Getting Started
To start using the Card Validation System, follow these steps:
1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter the credit card information in the provided fields.
3. Click the "Validate" button to verify the entered information.
4. The system will display a success message if the information is valid or an error message if there are any issues.


