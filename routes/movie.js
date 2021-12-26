const router = require("express").Router();
const Movie = require("../models/movie");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../common");

//Add New Movie
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newMovie = new Movie(req.body);
      const saveMovie = await newMovie.save();
      res.status(200).json(saveMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can not perform new upload action.");
  }
});

//UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can not perform update action.");
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie Deleted Successfully.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can Delete only Movies from your account.");
  }
});

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/find", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM WITH FILTER TYPE
router.get("/random", async (req, res) => {
  const query = req.query.type === "series";
  let movie;
  try {
    movie = await Movie.aggregate([
      { $match: { isSeries: query } },
      { $sample: { size: 1 } },
    ]);

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER STATS
router.get("/stats", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const today = new Date();
    const lastYear = today.setFullYear(today.getFullYear - 1);
    const monthsArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    try {
      const data = await Movie.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed for his operation.");
  }
});

module.exports = router;
