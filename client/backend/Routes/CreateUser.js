const express = require("express");
const router = express.Router();
const ram = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt");
const jwtsecret = "hyjdkrhfkdmdlfjgtmrkdhfirhtlsmwb"

// api = "http://localhost:8000/api/createuser"
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // console.log(
    //   req.body.name,
    //   req.body.password,
    //   req.body.email,
    //   req.body.location
    // );

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    //res.send({ errors: error.array() });

    const salt = await bcrypt.genSalt(10);
    const setPassword = await bcrypt.hash(req.body.password, salt)

    try {
      await ram.create({
        name: req.body.name,
        password: setPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// api = "http://localhost:8000/api/loginuser"
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    let email = req.body.email;

    try {
      let userData = await ram.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "use correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

      if (!pwdCompare) {
        return res.status(400).json({ errors: "use correct credentials" });
      }

      const data = {
        user:{
          id:userData.id
        }
      }
      const authToken = jwt.sign(data,jwtsecret)
      const id = userData._id;
      return res.json({ success: true,authToken:authToken, id: id });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
