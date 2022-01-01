const router = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
// const Movie = require("../models/movie");
// const List = require("../models/list");

//REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    pofileImg: req.body.pofileImg,
  });
  try {
    const user = await newUser.save();
    const { __v, _id, ...details } = user._doc;
    res.status(201).json({ id: _id, ...details });
  } catch (error) {
    res
      .status(400)
      .json(
        `User has been already registered. Hint: use another User Name and Email Address.`
      );
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong Password or Username !");
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    console.log("Pasword ", bytes);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong Password or Username !");
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    const { password, ...info } = user._doc;
    res.status(201).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
