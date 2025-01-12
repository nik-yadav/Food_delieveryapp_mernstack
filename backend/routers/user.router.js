const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth.controller.js')

// api = "http://localhost:8000/api/createuser"
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  authController.createUser
);

// api = "http://localhost:8000/api/loginuser"
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  authController.userLogin
);

module.exports = router;
