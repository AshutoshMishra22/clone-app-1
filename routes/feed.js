const router = require("express").Router();
const Feed = require("../models/feed");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../common");

//Add New Feed
router.post("/add", async (req, res) => {
  try {
    const newFeed = new Feed(req.body);
    await newFeed.save();
    const feeds = await Feed.find().sort({ _id: -1 }).limit(10);
    const formateFeeds = feeds.map((obj) => {
      const { _id, __v, ...restObj } = obj._doc;
      return { id: _id, ...restObj };
    });
    res.status(200).json(formateFeeds);
  } catch (err) {
    res.status(400).json(`Unable to add New Feed. ${err}`);
  }
});

//UPDATE
router.put("/update/:id", async (req, res) => {
  // if (req.user.userName === req.params.userName) {
  try {
    const newPost = await Feed.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    const feeds = await Feed.find().sort({ updatedAt: -1 }).limit(10);
    const formateFeeds = feeds.map((obj) => {
      const { _id, __v, ...restObj } = obj._doc;
      return { id: _id, ...restObj };
    });
    res.status(200).json(formateFeeds);
  } catch (err) {
    res.status(500).json(err);
  }
  // } else {
  //   res.status(403).json("You can not perform update action.");
  // }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Feed.findByIdAndDelete(req.params.id);
      res.status(200).json("Feed Deleted Successfully.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can Delete only Feeds from your account.");
  }
});

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const feed = await Feed.findById(req.params.id);
    res.status(200).json(feed);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FILTERS
router.get("/find", async (req, res) => {
  const query = req.query || {};
  let feed;
  try {
    if (Object.keys(query).length > 0) {
      const { size, ...filters } = query;
      const changedSize = Number(size) || 10;
      console.log("Query Params >> ", filters, "\nSize >>", changedSize);
      feed = await Feed.aggregate([
        { $match: { ...filters } },
        { $sample: { size: changedSize } },
      ]);
    } else {
      feed = await Feed.find();
    }
    res.status(200).json(feed.reverse());
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
      const data = await Feed.aggregate([
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
