const router = require("express").Router();
const List = require("../models/list");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verify = require("../common");

//Add New List
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newList = new List(req.body);
      const saveList = await newList.save();
      res.status(200).json(saveList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can not perform new upload action.");
  }
});

//UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req.user.userName === req.params.userName) {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedList);
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
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("List Deleted Successfully.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can Delete only Lists from your account.");
  }
});

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FILTERS
router.get("/find", async (req, res) => {
  const query = req.query || {};
  let list;
  try {
    if (Object.keys(query).length > 0) {
      const { size, ...filters } = query;
      const changedSize = Number(size) || 10;
      console.log("Query Params >> ", filters, "\nSize >>", changedSize);
      list = await List.aggregate([
        { $match: { ...filters } },
        { $sample: { size: changedSize } },
      ]);
    } else {
      list = await List.find();
    }
    res.status(200).json(list.reverse());
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
      const data = await List.aggregate([
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
