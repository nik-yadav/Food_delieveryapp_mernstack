const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DB } = require("../db");
const { API_CALLS, TABLE, tokenSecret } = require("../constant");
const { hashUserPassword } = require("../utils/hashUserPassword");

const checkUserExist = async (email) => {
  try {
    const verifyUserQuery = {
      where: {
        email,
      },
    };
    const verifyUser = await DB(
      API_CALLS.FIND_UNIQUE,
      TABLE.USER,
      verifyUserQuery
    );
    return verifyUser;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { data } = req.body;

  try {
    const hashedPassword = await hashUserPassword(data.password);
    const userDetails = await checkUserExist(data.email);
    if (userDetails) {
      return res
        .status(409)
        .json({ message: "user with given email id is already present" });
    }

    const query = { data: { ...data, password: hashedPassword } };
    const response = await DB(API_CALLS.CREATE, TABLE.USER, query);
    const status = response ? 200 : 400;
    const message = response ? "User Created" : "Unable to create a user";
    return res.status(status).json({ message });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: "Unable to create a user" });
  }
};

const userLogin = async (req, res) => {
  const { data } = req.body;
  try {
    const query = {
      where: {
        email: data.email
      }
    }
    const userData = await DB(API_CALLS.FIND_UNIQUE, TABLE.USER, query);
    // const userData = await DB(API_CALLS.FIND_UNIQUE, TABLE.USER, {where: {email: data.email}, select: {firstName: true}})
    if (!userData) {
      return res.status(400).json({ errors: "use correct credentials" });
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      userData.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ errors: "use correct credentials" });
    }

    const jwtSignData = {
      user: {
        id: userData.id,
      },
    };
    const authToken = jwt.sign(jwtSignData, tokenSecret);
    return res.json({ success: true, authToken: authToken, details: userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

module.exports = {
  createUser,
  userLogin
};
