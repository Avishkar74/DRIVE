const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("username").not().isEmpty().isLength({ min: 3 }),
  body("email").not().isEmpty().isEmail().isLength({ min: 13 }),
  body("password").not().isEmpty().isLength({ min: 3 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);
    res.json(newUser);
  }
);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  body("username").not().isEmpty().isLength({ min: 3 }),
  body("password").not().isEmpty().isLength({ min: 3 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({
          errors: errors.array(),
          message: "Invalid username or password",
        });
    }
    const { username, password } = req.body;

    const user = await userModel.findOne({
      username: username,
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
    res.cookie("token",token);

    res.send("logged in");
  }
);

module.exports = router;
