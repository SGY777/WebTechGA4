const express = require("express");
const User = require("../models/user");
const router = express.Router();

// let's achieve CRUD for user

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// create new user
router.post("/", async (req, res) => {
  const { email, password, username, purchaseHistory, shippingAddress } =
    req.body;
  const user = new User({
    email,
    password,
    username,
    purchaseHistory,
    shippingAddress,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
