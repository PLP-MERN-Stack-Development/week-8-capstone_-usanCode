

// server/src/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers, // ✅ Import the dummy controller
} = require("../controllers/userController");

// Dummy route for testing
router.get("/", getUsers);

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
